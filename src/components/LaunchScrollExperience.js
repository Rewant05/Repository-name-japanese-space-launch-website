import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket } from './Rocket';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);
export function LaunchScrollExperience() {
    var root = useRef(null);
    useLayoutEffect(function () {
        if (!root.current || matchMedia('(prefers-reduced-motion: reduce)').matches)
            return;
        var ctx = gsap.context(function () {
            var tl = gsap.timeline({
                scrollTrigger: { trigger: root.current, start: 'top top', end: '+=3500', pin: true, scrub: 1, anticipatePin: 1 },
            });
            tl.to('.launch-count .count-3', { opacity: 0, scale: 1.8, duration: .18 })
                .to('.launch-count .count-2', { opacity: 1, scale: 1, duration: .01 }, '<')
                .to('.launch-count .count-2', { opacity: 0, scale: 1.8, duration: .18 })
                .to('.launch-count .count-1', { opacity: 1, scale: 1, duration: .01 }, '<')
                .to('.rocket-flame', { opacity: 1, scaleY: 1, duration: .26 }, '<')
                .to('.smoke span', { opacity: .8, scale: 2.2, x: function (i) { return (i - 3) * 36; }, duration: .35 }, '<')
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
                .to('.phase-orbit', { opacity: 1, y: 0, duration: .35 }, '<.1');
        }, root);
        return function () { return ctx.revert(); };
    }, []);
    return _jsx("section", { className: "launch-experience", ref: root, "aria-label": "\u30B9\u30AF\u30ED\u30FC\u30EB\u9023\u52D5\u6253\u3061\u4E0A\u3052\u30B7\u30FC\u30B1\u30F3\u30B9", children: _jsxs("div", { className: "launch-stage", children: [_jsx("div", { className: "star-layer far" }), _jsx("div", { className: "star-layer near" }), _jsx("div", { className: "technical-grid" }), _jsx("div", { className: "atmosphere-glow" }), _jsxs("div", { className: "launch-hud top", children: [_jsx("span", { children: "SEQUENCE // SSV\u201301" }), _jsx("span", { children: "WIND 2.1 M/S" }), _jsx("b", { children: "LINKED" })] }), _jsxs("div", { className: "launch-hud bottom", children: [_jsx("span", { children: "35.617\u00B0N" }), _jsx("span", { children: "PROP // NOMINAL" }), _jsx("span", { children: "139.780\u00B0E" })] }), _jsxs("div", { className: "launch-tower left", children: [_jsx("i", {}), _jsx("i", {}), _jsx("i", {}), _jsx("i", {})] }), _jsxs("div", { className: "launch-tower right", children: [_jsx("i", {}), _jsx("i", {}), _jsx("i", {})] }), _jsxs("div", { className: "phase phase-control", children: [_jsx("p", { children: "LAUNCH SEQUENCE" }), _jsxs("h2", { children: ["\u6B21\u306E\u8ECC\u9053\u3078\u3001", _jsx("br", {}), "\u6253\u3061\u4E0A\u3052\u308B\u3002"] }), _jsx("span", { children: "SCROLL TO INITIATE" })] }), _jsxs("div", { className: "launch-count", children: [_jsx("b", { className: "count-3", children: "03" }), _jsx("b", { className: "count-2", children: "02" }), _jsx("b", { className: "count-1", children: "01" })] }), _jsx("div", { className: "rocket-position", children: _jsx(Rocket, {}) }), _jsx("div", { className: "smoke", children: Array.from({ length: 7 }).map(function (_, i) { return _jsx("span", {}, i); }) }), _jsxs("div", { className: "phase phase-liftoff", children: [_jsx("p", { children: "ALTITUDE / 16.8 KM" }), _jsxs("h2", { children: ["\u5C0F\u578B\u885B\u661F\u306E\u8ECC\u9053\u6295\u5165\u3092\u3001", _jsx("br", {}), "\u3082\u3063\u3068\u8EAB\u8FD1\u306B\u3002"] })] }), _jsxs("div", { className: "cloud-layer", children: [_jsx("i", {}), _jsx("i", {}), _jsx("i", {}), _jsx("i", {})] }), _jsxs("div", { className: "telemetry-panels", children: [_jsxs("div", { children: [_jsx("small", { children: "ALTITUDE" }), _jsx("b", { children: "128.4" }), _jsx("span", { children: "KM" })] }), _jsxs("div", { children: [_jsx("small", { children: "VELOCITY" }), _jsx("b", { children: "7.62" }), _jsx("span", { children: "KM/S" })] }), _jsxs("div", { children: [_jsx("small", { children: "AZIMUTH" }), _jsx("b", { children: "92.0" }), _jsx("span", { children: "DEG" })] })] }), _jsx("div", { className: "earth-limb" }), _jsxs("div", { className: "orbit-stage", children: [_jsx("svg", { viewBox: "0 0 1000 500", preserveAspectRatio: "none", "aria-hidden": "true", children: _jsx("ellipse", { className: "orbit-path", cx: "500", cy: "360", rx: "390", ry: "120" }) }), _jsxs("div", { className: "orbit-satellite", children: [_jsx("i", {}), _jsx("b", {}), _jsx("i", {})] })] }), _jsxs("div", { className: "phase phase-orbit", children: [_jsx("p", { children: "ORBIT INSERTION / COMPLETE" }), _jsxs("h2", { children: ["\u69CB\u60F3\u304B\u3089\u904B\u7528\u307E\u3067\u3001", _jsx("br", {}), "\u3072\u3068\u3064\u306E\u8ECC\u9053\u3068\u3057\u3066\u3002"] }), _jsxs("div", { children: [_jsxs(Link, { to: "/contact", className: "orbit-button", children: [_jsx("span", { children: "\u30DF\u30C3\u30B7\u30E7\u30F3\u76F8\u8AC7\u3092\u3059\u308B" }), _jsx("i", { children: "\u2197" })] }), _jsxs(Link, { to: "/technology", className: "text-button", children: ["\u6280\u8853\u3092\u898B\u308B ", _jsx("span", { children: "\u2192" })] })] })] })] }) });
}
