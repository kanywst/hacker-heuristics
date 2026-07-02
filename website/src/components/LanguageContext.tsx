'use client';

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
  ReactNode,
} from 'react';
import { translations } from '@/translations';

type Language = 'en' | 'jp';

const STORAGE_KEY = 'hammurabi-lang';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function readPreferred(): Language {
  // localStorage can throw (private mode, blocked storage) — degrade to the
  // browser locale, then to English, rather than crashing the first render.
  try {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'jp') return stored;
    }
  } catch {
    // ignore and fall through to locale detection
  }
  const prefersJa =
    typeof navigator !== 'undefined' &&
    navigator.language?.toLowerCase().startsWith('ja');
  return prefersJa ? 'jp' : 'en';
}

// Server/hydration snapshot: always 'en', matching the static export.
function getServerSnapshot(): Language {
  return 'en';
}

// A tiny external store backed by localStorage, created per provider instance
// so state never leaks across tests or concurrently rendered providers.
// Reading it through useSyncExternalStore serves 'en' during SSR/hydration and
// swaps to the stored/browser preference on the client without a mismatch.
function createLanguageStore() {
  let current: Language | null = null;
  const listeners = new Set<() => void>();

  return {
    subscribe(callback: () => void) {
      listeners.add(callback);
      return () => listeners.delete(callback);
    },
    getSnapshot(): Language {
      if (current === null) current = readPreferred();
      return current;
    },
    setLang(next: Language) {
      current = next;
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // storage may be disabled or full — the in-memory choice still applies
      }
      listeners.forEach((l) => l());
    },
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [store] = useState(createLanguageStore);

  const lang = useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    getServerSnapshot
  );

  const setLang = useCallback((next: Language) => store.setLang(next), [store]);

  useEffect(() => {
    document.documentElement.lang = lang === 'jp' ? 'ja' : 'en';
    document.title = translations[lang].ui.metaTitle;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
