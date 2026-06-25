import React, { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react'
import { LaunchLoader } from '../components/LaunchLoader'

const LaunchScrollExperience = lazy(() => import('../components/LaunchScrollExperience').then(m => ({ default: m.LaunchScrollExperience })))
const HomeSections = lazy(() => import('../components/HomeSections').then(m => ({ default: m.HomeSections })))

function DeferredBlock({ children, className, rootMargin }: { children: ReactNode; className: string; rootMargin: string }) {
  const root = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const element = root.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true)
        observer.disconnect()
      }
    }, { rootMargin })
    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin])

  return <div ref={root} className={className}>{ready ? children : null}</div>
}

export function Home() {
  return <>
    <LaunchLoader />
    <section className="home-hero">
      <div className="hero-grid" /><div className="hero-stars" />
      <div className="hero-side-data"><span>35°37'12.8&quot; N</span><i /><span>139°46'48.0&quot; E</span></div>
      <div className="hero-copy">
        <p><i /> PRIVATE SPACE MISSION DESIGN / JAPAN</p>
        <h1><span>宇宙へ、</span><br />確かな軌道を<br /><em>描く。</em></h1>
        <div className="hero-intro"><span>MISSION<br />ARCHITECTURE</span><p>小型衛星のミッション設計から軌道投入、データ運用まで。研究と事業の可能性を、実行できる計画へ変換します。</p></div>
      </div>
      <div className="hero-orbit-visual">
        <div className="hero-planet" />
        <div className="hero-orbit-ring"><span><i /><b /><i /></span></div>
        <div className="hero-orbit-label"><b>SSV–01</b><small>ORBITAL PATH / LOCKED</small></div>
      </div>
      <div className="hero-bottom"><span>SCROLL TO LAUNCH</span><i /><b>01</b></div>
    </section>

    <DeferredBlock className="deferred-launch" rootMargin="0px 0px -1px 0px">
      <Suspense fallback={<section className="launch-placeholder" aria-hidden="true"><span>LAUNCH SYSTEM // STANDBY</span></section>}>
        <LaunchScrollExperience />
      </Suspense>
    </DeferredBlock>

    <DeferredBlock className="deferred-home-content" rootMargin="300px 0px">
      <Suspense fallback={null}><HomeSections /></Suspense>
    </DeferredBlock>
  </>
}
