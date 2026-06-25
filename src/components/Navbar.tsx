import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteData } from '../config/siteData'

export function Brand() {
  return <Link to="/" className="brand" aria-label={`${siteData.company.name} ホーム`}>
    <span className="brand-mark" aria-hidden="true"><i /><i /></span>
    <span><b>{siteData.company.name}</b><small>{siteData.company.romanized}</small></span>
  </Link>
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  return <header className="navbar">
    <Brand />
    <nav className="desktop-nav" aria-label="メインナビゲーション">
      {siteData.navigation.map(link => <NavLink key={link.href} to={link.href}>{link.label}</NavLink>)}
    </nav>
    <Link className="nav-cta orbit-button" to="/contact"><span>ミッション相談</span><i>↗</i></Link>
    <button className={`menu-button ${open ? 'is-open' : ''}`} onClick={() => setOpen(v => !v)} aria-label="メニュー" aria-expanded={open}><i /><i /></button>
      {open && <div className="mobile-menu">
        <div className="mobile-menu-orbit" />
        <p className="eyebrow">NAVIGATION / 00</p>
        <nav>
          {siteData.navigation.map((link, i) => <div key={link.href}>
            <NavLink to={link.href}><small>0{i + 1}</small>{link.label}<span>↗</span></NavLink>
          </div>)}
        </nav>
        <div className="mobile-meta"><span>JST {new Date().getFullYear()}</span><span>TOKYO / JAPAN</span></div>
      </div>}
  </header>
}
