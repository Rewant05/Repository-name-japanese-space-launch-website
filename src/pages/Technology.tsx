import { motion } from 'framer-motion'
import { OrbitDiagram } from '../components/OrbitDiagram'
import { FinalCTA, PageHero, SectionHeader } from '../components/UI'
import { siteData } from '../config/siteData'

export function Technology() {
  return <>
    <PageHero code="TECHNOLOGY" index="04" title={<>見えない軌道を、<br />共有できる判断へ。</>} lead="解析結果を専門家だけのものにしない。複雑さを保ったまま、チームが理解し、判断し、行動できる技術基盤をつくります。" />
    <section className="tech-interface section-pad"><SectionHeader index="01" label="ORBIT PLANNING INTERFACE" title={<>複数の未来を、<br />同じ画面で比較する。</>} /><div className="interface-shell"><div className="interface-bar"><span>SEISHO / ORBIT WORKBENCH</span><div><i /><i /><i /></div></div><div className="interface-body"><div className="interface-sidebar">{['MISSION', 'ORBIT', 'ACCESS', 'RISK', 'EXPORT'].map((x, i) => <span className={i === 1 ? 'active' : ''} key={x}>0{i + 1} {x}</span>)}</div><OrbitDiagram compact /><div className="interface-data"><span>APOGEE<b>527.2 KM</b></span><span>PERIGEE<b>514.8 KM</b></span><span>INCLINATION<b>97.42°</b></span><span>PERIOD<b>94.6 MIN</b></span></div></div><div className="interface-timeline"><i /><b /><span>T+ 00:42:18</span></div></div></section>
    <section className="tech-capabilities section-pad"><SectionHeader index="02" label="TECHNOLOGY STACK" title="ミッションを支える6つの基盤。" /><div className="capability-list">{siteData.technology.map((tech, i) => <motion.article key={tech.index} initial={{ opacity: 0, x: i % 2 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><span>{tech.index}</span><div><small>{tech.code}</small><h3>{tech.title}</h3><p>{tech.text}</p></div><div className={`tech-glyph glyph-${(i % 3) + 1}`}><i /><i /><b /></div></motion.article>)}</div></section>
    <section className="risk-panel"><div><p className="eyebrow">SAFETY BY DESIGN</p><h2>リスクを隠さず、<br />判断可能な形に。</h2><p>不確実性をゼロと見せるのではなく、発生可能性と影響、検知手段、回復策を可視化。審査のためだけでなく、日々の設計判断に使えるリスク管理を行います。</p></div><div className="risk-matrix">{Array.from({ length: 25 }).map((_, i) => <i key={i} className={[7, 13, 18, 22].includes(i) ? 'hot' : ''} />)}<span>発生可能性 →</span><b>影響度 →</b></div></section>
    <section className="data-flow section-pad"><p className="eyebrow">COLLABORATION PIPELINE</p><div className="flow-line">{['研究仮説', '地上試験', '設計審査', '軌道上実証', 'データ評価', '事業実装'].map((x, i) => <div key={x}><span>0{i + 1}</span><b>{x}</b>{i < 5 && <i>→</i>}</div>)}</div></section>
    <FinalCTA />
  </>
}
