import { PageHero } from '../components/UI'
import { siteData } from '../config/siteData'

export function Legal({ type }: { type: 'privacy' | 'terms' }) {
  const privacy = type === 'privacy'
  const sections = siteData.legal[type]
  return <>
    <PageHero code={privacy ? 'PRIVACY POLICY' : 'TERMS OF USE'} index={privacy ? 'P–01' : 'T–01'} title={privacy ? 'プライバシーポリシー' : '利用規約'} lead={privacy ? 'お預かりする情報を適切に管理し、信頼に応えるための基本方針です。' : '当サイトおよび当社サービスを安心してご利用いただくための条件を定めています。'} />
    <section className="legal-layout section-pad">
      <aside><span>DOCUMENT INDEX</span>{sections.map((s, i) => <a key={s.title} href={`#legal-${i + 1}`}><b>0{i + 1}</b>{s.title}</a>)}</aside>
      <div className="legal-content"><div className="legal-meta"><span>制定日：2024年4月1日</span><span>最終改定：2026年4月1日</span></div><p className="legal-intro">{siteData.company.name}（以下「当社」）は、{privacy ? '個人情報およびプロジェクトに関わる情報の重要性を認識し、次のとおり取り扱います。' : '当社が運営するウェブサイトおよび提供する情報の利用について、次のとおり定めます。'}</p>{sections.map((section, i) => <article id={`legal-${i + 1}`} key={section.title}><span>ARTICLE / 0{i + 1}</span><h2>{section.title}</h2><p>{section.text}</p>{section.title.includes('お問い合わせ') && <div className="legal-contact"><b>{siteData.company.name}</b><span>{siteData.company.address}</span><a href={`mailto:${siteData.company.email}`}>{siteData.company.email}</a><span>{siteData.company.hours}</span></div>}</article>)}</div>
    </section>
  </>
}
