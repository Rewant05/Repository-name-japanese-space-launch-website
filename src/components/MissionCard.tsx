import { motion } from 'framer-motion'
import type { Mission } from '../config/siteData'

export function MissionCard({ mission, index }: { mission: Mission; index: number }) {
  return <motion.article className="mission-card" style={{ '--mission-color': mission.color } as React.CSSProperties} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8%' }} transition={{ delay: (index % 2) * .08 }}>
    <div className="mission-card-top"><span>MISSION // 0{index + 1}</span><b>{mission.status}</b></div>
    <div className="mission-visual"><div className="mission-planet" /><div className="mission-ring"><i /></div><div className="mission-sat"><i /><b /><i /></div><span>{mission.orbit}</span></div>
    <div className="mission-title"><span>{mission.year}</span><h2>{mission.name}</h2><p>{mission.jp}</p></div>
    <div className="mission-data"><div><span>OBJECTIVE</span><p>{mission.objective}</p></div><div><span>PARTNER</span><p>{mission.partner}</p></div><div><span>ORBIT / TECH</span><p>{mission.orbit}</p></div></div>
  </motion.article>
}
