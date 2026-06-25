import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { OrbitDiagram } from './OrbitDiagram'
import { ArrowLink, FinalCTA, SectionHeader } from './UI'
import { siteData } from '../config/siteData'

export function HomeSections() {
  const [faq, setFaq] = useState(0)
  return <>
    <section className="home-services section-pad">
      <SectionHeader index="02" label="MISSION SERVICES" title={<>宇宙へ進む、その前後を<br />ひとつの設計に。</>} text="衛星そのものだけでなく、目的、軌道、打ち上げ、運用、データ活用まで。ミッションを成立させる接続部分を設計します。" />
      <div className="service-stack">
        {siteData.services.slice(0, 4).map((service, i) => <motion.article key={service.no} className="service-row" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8%' }} transition={{ delay: i * .08 }}>
          <div className="service-index"><small>MSN</small><b>{service.no}</b></div>
          <div><span>{service.code}</span><h3>{service.title}</h3></div>
          <p>{service.description}</p><Link to="/services" aria-label={`${service.title}を見る`}>↗</Link>
        </motion.article>)}
      </div>
      <ArrowLink to="/services">すべてのサービス</ArrowLink>
    </section>

    <section className="deployment-section">
      <div className="deployment-copy"><SectionHeader index="03" label="DEPLOYMENT" title={<>軌道上で生まれる価値まで、<br />見失わない。</>} text="打ち上げは到達点ではありません。衛星が分離され、最初の信号が届き、必要なデータが利用者へ渡るまでを一続きのミッションとして設計します。" /><div className="stat-line"><div><b>98.7<small>%</small></b><span>解析データ整合率</span></div><div><b>24<small>h</small></b><span>初期運用支援体制</span></div></div><ArrowLink to="/missions" light>ミッション実績を見る</ArrowLink></div>
      <OrbitDiagram />
    </section>

    <section className="technology-preview section-pad">
      <SectionHeader index="04" label="CORE TECHNOLOGY" title={<>複雑な宇宙を、<br />判断できる情報へ。</>} />
      <div className="tech-console">
        <div className="console-main"><div className="console-header"><span>ORBITAL VIEW // AURORA–01</span><b>LIVE MODEL</b></div><OrbitDiagram compact /></div>
        <div className="console-list">{siteData.technology.slice(0, 4).map((tech, i) => <motion.div key={tech.index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><span>{tech.index}</span><h3>{tech.title}</h3><p>{tech.text}</p></motion.div>)}</div>
      </div>
      <ArrowLink to="/technology">技術基盤を見る</ArrowLink>
    </section>

    <section className="mission-timeline section-pad">
      <SectionHeader index="05" label="MISSION LOG" title={<>軌道へ届いた、<br />対話と検証の記録。</>} />
      <div className="timeline-track">{siteData.missions.map((mission, i) => <motion.article key={mission.name} className="timeline-mission" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }} style={{ '--mission-color': mission.color } as React.CSSProperties}><div className="mission-dot" /><span>{mission.year} / {mission.status}</span><h3>{mission.name}</h3><p>{mission.jp}</p><small>{mission.orbit}</small></motion.article>)}</div>
    </section>

    <section className="partners-section"><div className="partners-copy"><p className="eyebrow">COLLABORATIVE ORBIT</p><h2>専門知が交わる場所に、<br />新しい軌道が生まれる。</h2><p>大学、研究機関、製造・通信企業。異なる専門性をひとつのミッションへ束ね、地上の問いを宇宙で検証します。</p><ArrowLink to="/about" light>連携への考え方</ArrowLink></div><div className="partner-radar"><i /><i /><i /><span className="p1">大学・高専</span><span className="p2">研究機関</span><span className="p3">民間企業</span><b>SEISHO</b></div></section>

    <section className="faq-section section-pad"><SectionHeader index="06" label="MISSION BRIEFING" title="よくあるご質問" /><div className="faq-layout"><div className="faq-index"><span>0{faq + 1}</span><small>/ 0{siteData.faqs.length}</small></div><div className="faq-list">{siteData.faqs.map((item, i) => <div className={`faq-item ${faq === i ? 'open' : ''}`} key={item.q}><button onClick={() => setFaq(i)}><span>{item.q}</span><i>{faq === i ? '−' : '+'}</i></button><motion.div initial={false} animate={{ height: faq === i ? 'auto' : 0, opacity: faq === i ? 1 : 0 }}><p>{item.a}</p></motion.div></div>)}</div></div></section>
    <FinalCTA />
  </>
}
