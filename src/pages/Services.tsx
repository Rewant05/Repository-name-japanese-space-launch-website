import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FinalCTA, PageHero } from '../components/UI'
import { siteData } from '../config/siteData'

export function Services() {
  return <>
    <PageHero code="SERVICES" index="02" title={<>構想を、実行できる<br />ミッションへ。</>} lead="目的の言語化から軌道上運用まで。必要な専門領域をつなぎ、プロジェクトに合わせた実行経路を設計します。" />
    <section className="service-intro section-pad"><p className="eyebrow">END-TO-END MISSION SUPPORT</p><h2>私たちが提供するのは、<br />部品ではなく「つながる計画」です。</h2><p>ミッションの現在地に応じて、単独の技術支援から全体設計まで柔軟に構成します。研究と事業、衛星と地上、設計と運用の間にある見落とされがちな課題を早期に可視化します。</p></section>
    <section className="services-detail">
      {siteData.services.map((service, i) => <motion.article key={service.no} className="service-detail" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-10%' }}>
        <div className="service-detail-no"><span>MSN</span><b>{service.no}</b><i /></div>
        <div className="service-detail-main"><small>{service.code}</small><h2>{service.title}</h2><p>{service.description}</p><Link to="/contact">このサービスについて相談 <span>↗</span></Link></div>
        <div className="service-detail-spec"><div><span>対象</span><p>{service.clients}</p></div><div><span>主な成果物</span><ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div></div>
        <div className="service-schematic" aria-hidden="true"><i /><i /><i /><b>{String(i + 17).padStart(3, '0')}</b></div>
      </motion.article>)}
    </section>
    <section className="process-band section-pad"><p className="eyebrow">MISSION PROCESS</p><div>{['初期対話', '要件・軌道検討', '設計・審査', '打ち上げ調整', '初期運用', 'データ活用'].map((x, i) => <div key={x}><span>0{i + 1}</span><b>{x}</b>{i < 5 && <i />}</div>)}</div></section>
    <FinalCTA />
  </>
}
