import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
var About = lazy(function () { return import('./pages/About').then(function (m) { return ({ default: m.About }); }); });
var Services = lazy(function () { return import('./pages/Services').then(function (m) { return ({ default: m.Services }); }); });
var Missions = lazy(function () { return import('./pages/Missions').then(function (m) { return ({ default: m.Missions }); }); });
var Technology = lazy(function () { return import('./pages/Technology').then(function (m) { return ({ default: m.Technology }); }); });
var Contact = lazy(function () { return import('./pages/Contact').then(function (m) { return ({ default: m.Contact }); }); });
var Legal = lazy(function () { return import('./pages/Legal').then(function (m) { return ({ default: m.Legal }); }); });
function ScrollToTop() {
    var pathname = useLocation().pathname;
    useEffect(function () {
        var _a;
        window.scrollTo({ top: 0, behavior: 'instant' });
        var titles = {
            '/': '星翔テクノロジーズ｜宇宙へ、確かな軌道を描く。',
            '/about': '私たちについて｜星翔テクノロジーズ',
            '/services': 'サービス｜星翔テクノロジーズ',
            '/missions': 'ミッション｜星翔テクノロジーズ',
            '/technology': '技術｜星翔テクノロジーズ',
            '/contact': 'お問い合わせ｜星翔テクノロジーズ',
            '/privacy': 'プライバシーポリシー｜星翔テクノロジーズ',
            '/terms': '利用規約｜星翔テクノロジーズ',
        };
        document.title = (_a = titles[pathname]) !== null && _a !== void 0 ? _a : titles['/'];
    }, [pathname]);
    return null;
}
export default function App() {
    return (_jsxs(Layout, { children: [_jsx(ScrollToTop, {}), _jsx("main", { children: _jsx(Suspense, { fallback: _jsx("div", { className: "route-loading", children: "MISSION DATA // LOADING" }), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/services", element: _jsx(Services, {}) }), _jsx(Route, { path: "/missions", element: _jsx(Missions, {}) }), _jsx(Route, { path: "/technology", element: _jsx(Technology, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/privacy", element: _jsx(Legal, { type: "privacy" }) }), _jsx(Route, { path: "/terms", element: _jsx(Legal, { type: "terms" }) })] }) }) })] }));
}
