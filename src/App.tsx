import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'

const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })))
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })))
const Missions = lazy(() => import('./pages/Missions').then(m => ({ default: m.Missions })))
const Technology = lazy(() => import('./pages/Technology').then(m => ({ default: m.Technology })))
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })))
const Legal = lazy(() => import('./pages/Legal').then(m => ({ default: m.Legal })))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const titles: Record<string, string> = {
      '/': '星翔テクノロジーズ｜宇宙へ、確かな軌道を描く。',
      '/about': '私たちについて｜星翔テクノロジーズ',
      '/services': 'サービス｜星翔テクノロジーズ',
      '/missions': 'ミッション｜星翔テクノロジーズ',
      '/technology': '技術｜星翔テクノロジーズ',
      '/contact': 'お問い合わせ｜星翔テクノロジーズ',
      '/privacy': 'プライバシーポリシー｜星翔テクノロジーズ',
      '/terms': '利用規約｜星翔テクノロジーズ',
    }
    document.title = titles[pathname] ?? titles['/']
  }, [pathname])
  return null
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <main>
        <Suspense fallback={<div className="route-loading">MISSION DATA // LOADING</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
          </Routes>
        </Suspense>
      </main>
    </Layout>
  )
}
