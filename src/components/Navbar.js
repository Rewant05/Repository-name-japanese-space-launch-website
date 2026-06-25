import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { siteData } from '../config/siteData';
export function Brand() {
    return _jsxs(Link, { to: "/", className: "brand", "aria-label": "".concat(siteData.company.name, " \u30DB\u30FC\u30E0"), children: [_jsxs("span", { className: "brand-mark", "aria-hidden": "true", children: [_jsx("i", {}), _jsx("i", {})] }), _jsxs("span", { children: [_jsx("b", { children: siteData.company.name }), _jsx("small", { children: siteData.company.romanized })] })] });
}
export function Navbar() {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var location = useLocation();
    useEffect(function () { return setOpen(false); }, [location.pathname]);
    useEffect(function () {
        document.body.style.overflow = open ? 'hidden' : '';
        return function () { document.body.style.overflow = ''; };
    }, [open]);
    return _jsxs("header", { className: "navbar", children: [_jsx(Brand, {}), _jsx("nav", { className: "desktop-nav", "aria-label": "\u30E1\u30A4\u30F3\u30CA\u30D3\u30B2\u30FC\u30B7\u30E7\u30F3", children: siteData.navigation.map(function (link) { return _jsx(NavLink, { to: link.href, children: link.label }, link.href); }) }), _jsxs(Link, { className: "nav-cta orbit-button", to: "/contact", children: [_jsx("span", { children: "\u30DF\u30C3\u30B7\u30E7\u30F3\u76F8\u8AC7" }), _jsx("i", { children: "\u2197" })] }), _jsxs("button", { className: "menu-button ".concat(open ? 'is-open' : ''), onClick: function () { return setOpen(function (v) { return !v; }); }, "aria-label": "\u30E1\u30CB\u30E5\u30FC", "aria-expanded": open, children: [_jsx("i", {}), _jsx("i", {})] }), open && _jsxs("div", { className: "mobile-menu", children: [_jsx("div", { className: "mobile-menu-orbit" }), _jsx("p", { className: "eyebrow", children: "NAVIGATION / 00" }), _jsx("nav", { children: siteData.navigation.map(function (link, i) { return _jsx("div", { children: _jsxs(NavLink, { to: link.href, children: [_jsxs("small", { children: ["0", i + 1] }), link.label, _jsx("span", { children: "\u2197" })] }) }, link.href); }) }), _jsxs("div", { className: "mobile-meta", children: [_jsxs("span", { children: ["JST ", new Date().getFullYear()] }), _jsx("span", { children: "TOKYO / JAPAN" })] })] })] });
}
