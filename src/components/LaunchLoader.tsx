import React, { useEffect, useState } from 'react'
import { siteData } from '../config/siteData'

type LoaderPhase = 'visible' | 'exiting' | 'hidden'

export function LaunchLoader() {
  const [phase, setPhase] = useState<LoaderPhase>('visible')
  const [line, setLine] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lineTimer = window.setTimeout(() => setLine(1), reduced ? 35 : 110)
    const exitTimer = window.setTimeout(() => setPhase('exiting'), reduced ? 80 : 230)
    const endTimer = window.setTimeout(() => setPhase('hidden'), reduced ? 130 : 380)
    return () => {
      clearTimeout(lineTimer)
      clearTimeout(exitTimer)
      clearTimeout(endTimer)
    }
  }, [])

  if (phase === 'hidden') return null
  return <div className={`launch-loader ${phase === 'exiting' ? 'is-exiting' : ''}`}>
    <div className="loader-stars" />
    <div className="loader-top"><span>SEISHO // BOOT SYSTEM</span><span>JPN–AXS–001</span></div>
    <div className="loader-core">
      <div className="loader-orbit"><i /></div>
      <p>{siteData.company.name}</p>
      <h2>{line === 0 ? '軌道データを読み込んでいます…' : '打ち上げシーケンスを準備中…'}</h2>
      <div className="loader-bar"><i /></div>
      <div className="loader-status"><span>SYS_CHECK</span><b>000{line + 8}</b><span>PASS</span></div>
    </div>
    <div className="loader-bottom"><span>GROUND CONTROL / TOKYO</span><span>ALL SYSTEMS NOMINAL</span></div>
  </div>
}
