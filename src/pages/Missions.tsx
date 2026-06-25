import { MissionCard } from '../components/MissionCard'
import { FinalCTA, PageHero } from '../components/UI'
import { siteData } from '../config/siteData'

export function Missions() {
  return <>
    <PageHero code="MISSIONS" index="03" title={<>一つひとつの問いに、<br />固有の軌道を。</>} lead="気象、通信、海洋、教育。目的もチームも異なるミッションを、検証可能な計画へ組み立ててきました。" />
    <section className="missions-overview section-pad"><div><span>MISSION ARCHIVE</span><b>05</b><small>PROJECTS</small></div><p>掲載しているのは、当社が支援するミッションの一部です。機密性に配慮し、公開可能な情報のみを紹介しています。</p></section>
    <section className="mission-grid">{siteData.missions.map((mission, i) => <MissionCard key={mission.name} mission={mission} index={i} />)}</section>
    <section className="mission-principle section-pad"><p className="eyebrow">MISSION PRINCIPLE</p><h2>成功だけでなく、<br />学びが次へ残る設計を。</h2><div><p>軌道上実証には、不確実性があります。だからこそ、評価指標、判断履歴、取得データを次の設計へ戻せる形で残します。</p><p>ひとつのミッションで得られた知見を、組織と産業の次の一歩へ。私たちは打ち上げ後のレビューまで伴走します。</p></div></section>
    <FinalCTA />
  </>
}
