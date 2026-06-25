import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '../components/UI'
import { siteData } from '../config/siteData'

const inquiryTypes = ['小型衛星ミッション相談', '研究連携について', '打ち上げ計画について', '採用・広報について', 'その他']

export function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true) }
  return <>
    <PageHero code="CONTACT" index="05" title={<>次のミッションを、<br />対話から始める。</>} lead="まだ仕様が決まっていなくても構いません。実現したいこと、現在の課題、想定時期をお聞かせください。" />
    <section className="contact-layout section-pad">
      <aside className="contact-aside"><p className="eyebrow">GROUND CONTROL / TOKYO</p><div className="contact-channel"><span>MISSION SUPPORT</span><i /><b>CHANNEL OPEN</b></div><dl><dt>メール</dt><dd><a href={`mailto:${siteData.company.email}`}>{siteData.company.email}</a></dd><dt>電話</dt><dd><a href={`tel:${siteData.company.phone.replace(/-/g, '')}`}>{siteData.company.phone}</a></dd><dt>受付時間</dt><dd>{siteData.company.hours}</dd><dt>所在地</dt><dd>{siteData.company.address}</dd></dl><p className="contact-note">技術情報を含むご相談には、初回打ち合わせ前の秘密保持契約（NDA）にも対応しています。</p></aside>
      <div className="contact-form-wrap">
        <div className="form-status"><span>INQUIRY FORM</span><b>SECURE LINK // 256</b></div>
        {sent ? <motion.div className="form-success" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }}><div>✓</div><h2>送信を受け付けました。</h2><p>お問い合わせありがとうございます。内容を確認のうえ、通常2営業日以内に担当者よりご連絡します。</p><button onClick={() => setSent(false)}>別のお問い合わせを送る</button></motion.div> : <form onSubmit={submit}>
          <div className="field-row"><label><span>お名前 <b>必須</b></span><input required name="name" autoComplete="name" /></label><label><span>会社・団体名</span><input name="organization" autoComplete="organization" /></label></div>
          <label><span>メールアドレス <b>必須</b></span><input required type="email" name="email" autoComplete="email" /></label>
          <label><span>お問い合わせ種別 <b>必須</b></span><select required name="inquiry" defaultValue=""><option value="" disabled>選択してください</option>{inquiryTypes.map(x => <option key={x}>{x}</option>)}</select></label>
          <div className="field-row"><label><span>ミッション種別</span><select name="mission"><option>地球観測</option><option>通信実証</option><option>技術実証</option><option>教育・研究</option><option>未定・その他</option></select></label><label><span>希望時期</span><select name="timeline"><option>6か月以内</option><option>1年以内</option><option>2〜3年以内</option><option>未定</option></select></label></div>
          <label><span>想定予算</span><select name="budget"><option>検討中</option><option>500万円未満</option><option>500万〜2,000万円</option><option>2,000万〜1億円</option><option>1億円以上</option></select></label>
          <label><span>ご相談内容 <b>必須</b></span><textarea required name="message" rows={7} placeholder="実現したいこと、現在の検討状況、技術的な課題などをご記入ください。" /></label>
          <label className="check-field"><input required type="checkbox" /><span><a href="/privacy">プライバシーポリシー</a>に同意する</span></label>
          <button className="submit-button" type="submit"><span>相談内容を送信</span><i>→</i></button>
        </form>}
      </div>
    </section>
    <section className="location-section"><div className="map-grid"><i /><i /><span className="map-pulse" /><b>SEISHO / TOKYO HQ</b></div><div><p className="eyebrow">LOCATION</p><h2>東京・青海から、<br />軌道へつなぐ。</h2><p>{siteData.company.address}</p><div>{siteData.company.facilities.map(x => <span key={x}>{x}</span>)}</div></div></section>
  </>
}
