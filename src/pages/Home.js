import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { LaunchLoader } from '../components/LaunchLoader';
var LaunchScrollExperience = lazy(function () { return import('../components/LaunchScrollExperience').then(function (m) { return ({ default: m.LaunchScrollExperience }); }); });
var HomeSections = lazy(function () { return import('../components/HomeSections').then(function (m) { return ({ default: m.HomeSections }); }); });
function DeferredBlock(_a) {
    var children = _a.children, className = _a.className, rootMargin = _a.rootMargin;
    var root = useRef(null);
    var _b = useState(false), ready = _b[0], setReady = _b[1];
    useEffect(function () {
        var element = root.current;
        if (!element)
            return;
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setReady(true);
                observer.disconnect();
            }
        }, { rootMargin: rootMargin });
        observer.observe(element);
        return function () { return observer.disconnect(); };
    }, [rootMargin]);
    return _jsx("div", { ref: root, className: className, children: ready ? children : null });
}
export function Home() {
    return _jsxs(_Fragment, { children: [_jsx(LaunchLoader, {}), _jsxs("section", { className: "home-hero", children: [_jsx("div", { className: "hero-grid" }), _jsx("div", { className: "hero-stars" }), _jsxs("div", { className: "hero-side-data", children: [_jsx("span", { children: "35\u00B037'12.8\" N" }), _jsx("i", {}), _jsx("span", { children: "139\u00B046'48.0\" E" })] }), _jsxs("div", { className: "hero-copy", children: [_jsxs("p", { children: [_jsx("i", {}), " PRIVATE SPACE MISSION DESIGN / JAPAN"] }), _jsxs("h1", { children: [_jsx("span", { children: "\u5B87\u5B99\u3078\u3001" }), _jsx("br", {}), "\u78BA\u304B\u306A\u8ECC\u9053\u3092", _jsx("br", {}), _jsx("em", { children: "\u63CF\u304F\u3002" })] }), _jsxs("div", { className: "hero-intro", children: [_jsxs("span", { children: ["MISSION", _jsx("br", {}), "ARCHITECTURE"] }), _jsx("p", { children: "\u5C0F\u578B\u885B\u661F\u306E\u30DF\u30C3\u30B7\u30E7\u30F3\u8A2D\u8A08\u304B\u3089\u8ECC\u9053\u6295\u5165\u3001\u30C7\u30FC\u30BF\u904B\u7528\u307E\u3067\u3002\u7814\u7A76\u3068\u4E8B\u696D\u306E\u53EF\u80FD\u6027\u3092\u3001\u5B9F\u884C\u3067\u304D\u308B\u8A08\u753B\u3078\u5909\u63DB\u3057\u307E\u3059\u3002" })] })] }), _jsxs("div", { className: "hero-orbit-visual", children: [_jsx("div", { className: "hero-planet" }), _jsx("div", { className: "hero-orbit-ring", children: _jsxs("span", { children: [_jsx("i", {}), _jsx("b", {}), _jsx("i", {})] }) }), _jsxs("div", { className: "hero-orbit-label", children: [_jsx("b", { children: "SSV\u201301" }), _jsx("small", { children: "ORBITAL PATH / LOCKED" })] })] }), _jsxs("div", { className: "hero-bottom", children: [_jsx("span", { children: "SCROLL TO LAUNCH" }), _jsx("i", {}), _jsx("b", { children: "01" })] })] }), _jsx(DeferredBlock, { className: "deferred-launch", rootMargin: "0px 0px -1px 0px", children: _jsx(Suspense, { fallback: _jsx("section", { className: "launch-placeholder", "aria-hidden": "true", children: _jsx("span", { children: "LAUNCH SYSTEM // STANDBY" }) }), children: _jsx(LaunchScrollExperience, {}) }) }), _jsx(DeferredBlock, { className: "deferred-home-content", rootMargin: "300px 0px", children: _jsx(Suspense, { fallback: null, children: _jsx(HomeSections, {}) }) })] });
}
