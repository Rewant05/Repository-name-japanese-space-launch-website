import { motion } from 'framer-motion'
import { FinalCTA, PageHero, SectionHeader } from '../components/UI'

const values = [
  { no: '01', jp: '精度', en: 'PRECISION', text: '一つの前提、一つの単位まで確認する。宇宙で取り返せない判断を、地上で丁寧に積み重ねます。' },
  { no: '02', jp: '安全', en: 'SAFETY', text: '成功率だけで語らず、起こり得る失敗と向き合う。安全を設計の最初に置きます。' },
  { no: '03', jp: '協働', en: 'COLLABORATION', text: '専門分野の境界で情報を止めない。異なる言葉を翻訳し、同じ判断へつなげます。' },
  { no: '04', jp: '透明性', en: 'TRANSPARENCY', text: 'データと判断理由を共有し、関係者が納得して前へ進めるプロジェクトをつくります。' },
]

export function About() {
  return <>
    <PageHero code="ABOUT" index="01" title={<>宇宙への距離を、<br />設計の力で縮める。</>} lead="研究機関・大学・企業が宇宙ミッションへ踏み出すための設計、可視化、運用支援を行う宇宙技術カンパニーです。" />
    <section className="about-origin section-pad"><div className="origin-label"><span>OUR ORIGIN</span><b>2018 → 2026</b></div><div className="origin-story"><h2>「打ち上げたい」の次にある、<br />無数の問いから始まった。</h2><div className="two-col-copy"><p>星翔テクノロジーズの原点は、大学の超小型衛星プロジェクトでした。優れた観測アイデアがあっても、軌道条件、打ち上げ調整、地上局運用の間をつなぐ人が足りず、構想が前へ進まない。その現実を目の当たりにしました。</p><p>私たちは、打ち上げそのものだけでなく、その前後にある計画、検証、データ活用までを一つの軌道として捉えます。宇宙を特別な組織だけの場所にせず、挑戦するチームが確かな判断を重ねられる環境をつくります。</p></div></div></section>
    <section className="mission-vision"><motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><span>MISSION / 01</span><h2>地上の問いを、<br />宇宙で確かめられる社会へ。</h2><p>規模や経験にかかわらず、価値ある研究や事業が軌道上実証へ進める道筋をつくります。</p></motion.div><motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><span>VISION / 02</span><h2>宇宙開発を、<br />継続できる産業に。</h2><p>一度の打ち上げで終わらず、データと経験が次のミッションへ循環する仕組みを育てます。</p></motion.div></section>
    <section className="why-japan section-pad"><SectionHeader index="02" label="WHY NOW" title={<>日本の技術を、<br />軌道へつなぐ接続点が必要です。</>} /><div className="why-grid"><div className="japan-orbit"><div className="japan-shape">JP</div><i /><i /><span>TOKYO</span><b>TANEGASHIMA</b></div><div className="why-points"><p>日本には、材料、センサー、通信、ロボティクスなど、宇宙で価値を持つ技術が数多くあります。一方で、初めて宇宙へ挑むチームにとって、要求定義や安全審査、打ち上げ調整は高い壁です。</p><p>その壁を、専門性を薄めずに越えやすくすること。技術者、研究者、事業責任者の間をつなぎ、判断できる情報に変えること。それが私たちの役割です。</p></div></div></section>
    <section className="values-section section-pad"><SectionHeader index="03" label="OUR VALUES" title="判断を支える、4つの姿勢。" /><div className="values-grid">{values.map((v, i) => <motion.article key={v.no} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><span>{v.no} / {v.en}</span><h3>{v.jp}</h3><p>{v.text}</p></motion.article>)}</div></section>
    <section className="research-band"><div><p className="eyebrow">RESEARCH NETWORK</p><h2>閉じた研究室から、<br />開かれたミッションへ。</h2></div><div><p>筑波研究連携ラボ</p><p>種子島実証パートナー施設</p><p>国内大学・高専共同研究ネットワーク</p></div></section>
    <FinalCTA />
  </>
}
