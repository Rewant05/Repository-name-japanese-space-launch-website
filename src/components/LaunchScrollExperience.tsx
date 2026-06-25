import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Rocket } from './Rocket'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

export function LaunchScrollExperience() {
  const root = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    if (!root.current || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: 'top top', end: '+=3500', pin: true, scrub: 1, anticipatePin: 1 },
      })
      tl.to('.launch-count .count-3', { opacity: 0, scale: 1.8, duration: .18 })
        .to('.launch-count .count-2', { opacity: 1, scale: 1, duration: .01 }, '<')
        .to('.launch-count .count-2', { opacity: 0, scale: 1.8, duration: .18 })
        .to('.launch-count .count-1', { opacity: 1, scale: 1, duration: .01 }, '<')
        .to('.rocket-flame', { opacity: 1, scaleY: 1, duration: .26 }, '<')
        .to('.smoke span', { opacity: .8, scale: 2.2, x: (i) => (i - 3) * 36, duration: .35 }, '<')
        .to('.launch-tower.left', { x: -160, opacity: .2, duration: .28 }, '<')
        .to('.launch-tower.right', { x: 160, opacity: .2, duration: .28 }, '<')
        .to('.phase-control', { opacity: 0, y: -35, duration: .2 }, '<.12')
        .to('.rocket-wrap', { y: '-65vh', duration: 1.05, ease: 'none' }, '<.02')
        .to('.star-layer.far', { y: '22vh', duration: 1.05, ease: 'none' }, '<')
        .to('.star-layer.near', { y: '48vh', duration: 1.05, ease: 'none' }, '<')
        .to('.phase-liftoff', { opacity: 1, y: 0, duration: .25 }, '<.18')
        .to('.phase-liftoff', { opacity: 0, y: -30, duration: .2 }, '>-0.18')
        .to('.cloud-layer', { opacity: 1, y: '-15vh', duration: .48 }, '<')
        .to('.atmosphere-glow', { opacity: 1, clipPath: 'circle(120% at 50% 100%)', duration: .48 }, '<')
        .to('.telemetry-panels', { opacity: 1, y: 0, duration: .28 }, '<.16')
        .to('.rocket-wrap', { y: '-43vh', x: '28vw', rotate: 67, scale: .62, duration: .55, ease: 'power1.inOut' }, '<.05')
        .to('.earth-limb', { y: 0, opacity: 1, duration: .45 }, '<')
        .to('.cloud-layer', { opacity: 0, y: '10vh', duration: .25 }, '<.2')
        .to('.atmosphere-glow', { opacity: .15, duration: .3 }, '<')
        .to('.telemetry-panels', { opacity: 0, duration: .2 }, '>-0.12')
        .to('.rocket-wrap', { opacity: 0, scale: .28, x: '36vw', duration: .22 }, '<')
        .to('.orbit-stage', { opacity: 1, duration: .32 }, '<.05')
        .fromTo('.orbit-path', { strokeDashoffset: 890 }, { strokeDashoffset: 0, duration: .55, ease: 'none' }, '<')
        .to('.orbit-satellite', { opacity: 1, duration: .1 }, '<.2')
        .to('.phase-orbit', { opacity: 1, y: 0, duration: .35 }, '<.1')
    }, root)
    return () => ctx.revert()
  }, [])

  return <section className="launch-experience" ref={root} aria-label="スクロール連動打ち上げシーケンス">
    <div className="launch-stage">
      <div className="star-layer far" /><div className="star-layer near" />
      <div className="technical-grid" /><div className="atmosphere-glow" />
      <div className="launch-hud top"><span>SEQUENCE // SSV–01</span><span>WIND 2.1 M/S</span><b>LINKED</b></div>
      <div className="launch-hud bottom"><span>35.617°N</span><span>PROP // NOMINAL</span><span>139.780°E</span></div>
      <div className="launch-tower left"><i /><i /><i /><i /></div><div className="launch-tower right"><i /><i /><i /></div>
      <div className="phase phase-control">
        <p>LAUNCH SEQUENCE</p><h2>次の軌道へ、<br />打ち上げる。</h2><span>SCROLL TO INITIATE</span>
      </div>
      <div className="launch-count"><b className="count-3">03</b><b className="count-2">02</b><b className="count-1">01</b></div>
      <div className="rocket-position"><Rocket /></div>
      <div className="smoke">{Array.from({ length: 7 }).map((_, i) => <span key={i} />)}</div>
      <div className="phase phase-liftoff"><p>ALTITUDE / 16.8 KM</p><h2>小型衛星の軌道投入を、<br />もっと身近に。</h2></div>
      <div className="cloud-layer"><i /><i /><i /><i /></div>
      <div className="telemetry-panels"><div><small>ALTITUDE</small><b>128.4</b><span>KM</span></div><div><small>VELOCITY</small><b>7.62</b><span>KM/S</span></div><div><small>AZIMUTH</small><b>92.0</b><span>DEG</span></div></div>
      <div className="earth-limb" />
      <div className="orbit-stage">
        <svg viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true"><ellipse className="orbit-path" cx="500" cy="360" rx="390" ry="120" /></svg>
        <div className="orbit-satellite"><i /><b /><i /></div>
      </div>
      <div className="phase phase-orbit"><p>ORBIT INSERTION / COMPLETE</p><h2>構想から運用まで、<br />ひとつの軌道として。</h2><div><Link to="/contact" className="orbit-button"><span>ミッション相談をする</span><i>↗</i></Link><Link to="/technology" className="text-button">技術を見る <span>→</span></Link></div></div>
    </div>
  </section>
}
