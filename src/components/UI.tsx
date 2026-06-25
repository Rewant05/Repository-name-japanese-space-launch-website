import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function SectionHeader({ index, label, title, text }: { index: string; label: string; title: ReactNode; text?: string }) {
  return <motion.div className="section-heading" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-12%' }} transition={{ duration: .7 }}>
    <div className="section-kicker"><span>{index}</span><i /> <b>{label}</b></div>
    <h2>{title}</h2>{text && <p>{text}</p>}
  </motion.div>
}

export function ArrowLink({ to, children, light = false }: { to: string; children: ReactNode; light?: boolean }) {
  return <Link to={to} className={`arrow-link ${light ? 'light' : ''}`}><span>{children}</span><i>↗</i></Link>
}

export function PageHero({ code, index, title, lead }: { code: string; index: string; title: ReactNode; lead: string }) {
  return <section className="page-hero">
    <div className="hero-grid" />
    <div className="page-hero-orbit"><i /><i /><b /></div>
    <motion.div className="page-hero-content" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }}>
      <div className="section-kicker"><span>{index}</span><i /><b>{code}</b></div>
      <h1>{title}</h1><p>{lead}</p>
    </motion.div>
    <div className="page-hero-data"><span>SEISHO / {code}</span><b>READY</b></div>
  </section>
}

export function FinalCTA() {
  return <section className="final-cta">
    <div className="cta-orbits"><i /><i /><i /></div>
    <div><p className="eyebrow">INITIATE A MISSION</p><h2>まだ名前のない構想を、<br />確かな軌道へ。</h2><p>初期検討、共同研究、打ち上げ計画。どの段階からでも、技術チームが対話を始めます。</p><ArrowLink to="/contact" light>ミッション相談を開始</ArrowLink></div>
  </section>
}
