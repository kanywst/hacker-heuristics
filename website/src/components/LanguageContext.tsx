'use client';

import React, {
  createContext,
  useContext,
  useCallback,
  useEffect,
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

// A tiny external store backed by localStorage. Reading it through
// useSyncExternalStore lets us serve 'en' during SSR/hydration (matching the
// static export) and then swap to the stored/browser preference on the client
// without a hydration mismatch.
const listeners = new Set<() => void>();
let current: Language | null = null;

function readPreferred(): Language {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'jp') return stored;
  return navigator.language.toLowerCase().startsWith('ja') ? 'jp' : 'en';
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Language {
  if (current === null) current = readPreferred();
  return current;
}

function getServerSnapshot(): Language {
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((next: Language) => {
    current = next;
    window.localStorage.setItem(STORAGE_KEY, next);
    listeners.forEach((l) => l());
  }, []);

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
