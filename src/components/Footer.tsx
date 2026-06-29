import React from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '../config/siteData'
import { Brand } from './Navbar'

export function Footer() {
  return <footer className="footer">
    <div className="footer-signal"><span>MISSION SUPPORT CHANNEL</span><i /><b>ONLINE</b></div>
    <div className="footer-main">
      <div className="footer-brand"><Brand /><p>{siteData.company.tagline}</p></div>
      <div className="footer-nav"><p className="eyebrow">サイトマップ</p>{siteData.navigation.map(x => <Link key={x.href} to={x.href}>{x.label}</Link>)}</div>
      <div className="footer-contact"><p className="eyebrow">お問い合わせ</p><a href={`mailto:${siteData.company.email}`}>{siteData.company.email}</a><a href={`tel:${siteData.company.phone.replace(/-/g, '')}`}>{siteData.company.phone}</a><span>{siteData.company.hours}</span></div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} {siteData.company.romanized}</span>
      <div>{siteData.footerLinks.map(x => <Link key={x.href} to={x.href}>{x.label}</Link>)}</div>
      <span>35.617°N / 139.780°E</span>
    </div>
  </footer>
}
