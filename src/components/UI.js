import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export function SectionHeader(_a) {
    var index = _a.index, label = _a.label, title = _a.title, text = _a.text;
    return _jsxs(motion.div, { className: "section-heading", initial: { opacity: 0, y: 32 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-12%' }, transition: { duration: .7 }, children: [_jsxs("div", { className: "section-kicker", children: [_jsx("span", { children: index }), _jsx("i", {}), " ", _jsx("b", { children: label })] }), _jsx("h2", { children: title }), text && _jsx("p", { children: text })] });
}
export function ArrowLink(_a) {
    var to = _a.to, children = _a.children, _b = _a.light, light = _b === void 0 ? false : _b;
    return _jsxs(Link, { to: to, className: "arrow-link ".concat(light ? 'light' : ''), children: [_jsx("span", { children: children }), _jsx("i", { children: "\u2197" })] });
}
export function PageHero(_a) {
    var code = _a.code, index = _a.index, title = _a.title, lead = _a.lead;
    return _jsxs("section", { className: "page-hero", children: [_jsx("div", { className: "hero-grid" }), _jsxs("div", { className: "page-hero-orbit", children: [_jsx("i", {}), _jsx("i", {}), _jsx("b", {})] }), _jsxs(motion.div, { className: "page-hero-content", initial: { opacity: 0, y: 35 }, animate: { opacity: 1, y: 0 }, transition: { duration: .9 }, children: [_jsxs("div", { className: "section-kicker", children: [_jsx("span", { children: index }), _jsx("i", {}), _jsx("b", { children: code })] }), _jsx("h1", { children: title }), _jsx("p", { children: lead })] }), _jsxs("div", { className: "page-hero-data", children: [_jsxs("span", { children: ["SEISHO / ", code] }), _jsx("b", { children: "READY" })] })] });
}
export function FinalCTA() {
    return _jsxs("section", { className: "final-cta", children: [_jsxs("div", { className: "cta-orbits", children: [_jsx("i", {}), _jsx("i", {}), _jsx("i", {})] }), _jsxs("div", { children: [_jsx("p", { className: "eyebrow", children: "INITIATE A MISSION" }), _jsxs("h2", { children: ["\u307E\u3060\u540D\u524D\u306E\u306A\u3044\u69CB\u60F3\u3092\u3001", _jsx("br", {}), "\u78BA\u304B\u306A\u8ECC\u9053\u3078\u3002"] }), _jsx("p", { children: "\u521D\u671F\u691C\u8A0E\u3001\u5171\u540C\u7814\u7A76\u3001\u6253\u3061\u4E0A\u3052\u8A08\u753B\u3002\u3069\u306E\u6BB5\u968E\u304B\u3089\u3067\u3082\u3001\u6280\u8853\u30C1\u30FC\u30E0\u304C\u5BFE\u8A71\u3092\u59CB\u3081\u307E\u3059\u3002" }), _jsx(ArrowLink, { to: "/contact", light: true, children: "\u30DF\u30C3\u30B7\u30E7\u30F3\u76F8\u8AC7\u3092\u958B\u59CB" })] })] });
}
