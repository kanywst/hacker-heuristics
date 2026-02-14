'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Shield,
  Zap,
  Brain,
  AlertTriangle,
  Target,
  RefreshCcw,
  Users,
  Activity,
  Clock,
  Search,
  HardDrive,
  Scale,
  TrendingUp,
  PieChart,
  Cpu,
  Layers,
  Terminal,
  Lock,
  ArrowRight,
  Github,
  Sparkles,
  Eye,
  Bug,
  Snail,
  Network,
  Feather,
  MessageCircle,
  UserX,
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { translations } from '@/translations';
import { useRef } from 'react';

const iconMap = [
  Zap,
  Shield,
  Brain,
  AlertTriangle,
  Target,
  RefreshCcw,
  Users,
  Activity,
  Clock,
  Search,
  HardDrive,
  Scale,
  TrendingUp,
  PieChart,
  Cpu,
  Layers,
  Terminal,
  Lock,
  Layers,
  PieChart,
  Eye,
  Bug,
  Snail,
  Network,
  Feather,
  MessageCircle,
  UserX,
];

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <div className="cyber-bg" />
      <div className="cyber-grid" />
      <div className="scanline" />

      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="relative h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="mb-8"
        >
          <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20 floating">
            <Sparkles className="w-12 h-12 text-cyan-400" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-9xl font-black tracking-tighter mb-6 glow-text italic"
        >
          HACKER
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            HEURISTICS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-cyan-100/60 max-w-3xl mb-12 font-mono tracking-widest"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-6"
        >
          <button
            className="cyber-button group"
            onClick={() =>
              document
                .getElementById('principles')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <span className="cyber-button-inner flex items-center gap-2 text-white font-bold">
              {t.hero.ctaPrimary}{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <a
            href="https://github.com/kanywst/hacker-heuristics"
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 glass-card hover:bg-white/5 transition-all text-white font-bold"
          >
            <Github className="w-5 h-5" /> SOURCE_CODE
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-cyan-400/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold tracking-[0.3em]">
            SCROLL_TO_DECODE
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-400/50 to-transparent" />
        </motion.div>
      </motion.section>

      {/* Grid Section */}
      <section
        id="principles"
        className="relative z-10 max-w-7xl mx-auto px-6 py-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.heuristics.map((h, i) => {
            const Icon = iconMap[i];
            return (
              <motion.div
                key={h.title + lang}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -10, rotate: 1 }}
                className="group glass-card rounded-[2rem] p-8 relative overflow-hidden"
              >
                {/* 装飾用テキスト */}
                <div className="absolute top-4 right-4 text-[40px] font-black text-white/5 pointer-events-none tracking-tighter">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="mb-8 relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center border border-white/10 group-hover:border-cyan-400/50 transition-all">
                    <Icon className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute -inset-2 bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="mb-6">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-purple-400 uppercase mb-2 block">
                    {h.tag}
                  </span>
                  <h3 className="text-2xl font-black text-white glow-text group-hover:text-cyan-400 transition-colors">
                    {h.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-white/50 leading-relaxed">
                    <span className="text-white/20 font-mono mr-2">
                      LOG_01:
                    </span>
                    {h.mechanism}
                  </p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-cyan-400/20 transition-all">
                    <p className="text-xs font-bold text-cyan-400/70 mb-1 flex items-center gap-2">
                      <Terminal className="w-3 h-3" /> GUIDELINE_
                    </p>
                    <p className="text-white/90 text-[13px] leading-relaxed font-medium italic">
                      "{h.guideline}"
                    </p>
                  </div>
                </div>

                {/* ホバー時に現れるスキャンライン */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent translate-y-full group-hover:animate-[scan_2s_linear_infinite] pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quote Section */}
      <section
        id="about"
        className="relative h-screen flex items-center justify-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-card p-16 rounded-[4rem] text-center max-w-4xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-400/10" />
          <h2 className="text-4xl md:text-6xl font-black italic text-white mb-10 leading-tight glow-text">
            {lang === 'en'
              ? '"Good engineering is not about avoiding all risks, but about deciding which risks are worth taking."'
              : '「優れたエンジニアリングとは、すべてのリスクを避けることではなく、どのリスクを取る価値があるかを決めることである。」'}
          </h2>
          <p className="text-cyan-400 font-mono tracking-widest">
            — SYSTEM_PRINCIPAL_MAXIM
          </p>
        </motion.div>
      </section>

      <style jsx global>{`
        @keyframes scan {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  );
}
