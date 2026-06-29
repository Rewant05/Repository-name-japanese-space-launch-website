import React from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '../config/siteData'
import { Brand } from './Navbar'

export function Footer() {
  return <footer className="footer">
    <div className="footer-signal"><span>ミッション支援チャネル</span><i /><b>稼働中</b></div>
    <div className="footer-main">
      <div className="footer-brand"><Brand subLabel="宇宙技術企業" /><p>{siteData.company.tagline}</p></div>
      <div className="footer-nav"><p className="eyebrow">サイトマップ</p>{siteData.navigation.map(x => <Link key={x.href} to={x.href}>{x.label}</Link>)}</div>
      <div className="footer-contact"><p className="eyebrow">お問い合わせ</p><a href={`mailto:${siteData.company.email}`}>{siteData.company.email}</a><a href={`tel:${siteData.company.phone.replace(/-/g, '')}`}>{siteData.company.phone}</a><span>{siteData.company.hours}</span></div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} {siteData.company.name}</span>
      <div>{siteData.footerLinks.map(x => <Link key={x.href} to={x.href}>{x.label}</Link>)}</div>
      <span>北緯35.617度 / 東経139.780度</span>
    </div>
  </footer>
}
