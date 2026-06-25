import React, { type ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function Layout({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      setProgress(max > 0 ? scrollY / max : 0)
    }
    addEventListener('scroll', update, { passive: true }); update()
    return () => removeEventListener('scroll', update)
  }, [])
  return <>
    <a className="skip-link" href="#content">本文へ移動</a>
    <div className="telemetry-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
    <Navbar />
    <div id="content">{children}</div>
    <Footer />
  </>
}
