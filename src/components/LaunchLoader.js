import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { siteData } from '../config/siteData';
export function LaunchLoader() {
    var _a = useState('visible'), phase = _a[0], setPhase = _a[1];
    var _b = useState(0), line = _b[0], setLine = _b[1];
    useEffect(function () {
        var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var lineTimer = window.setTimeout(function () { return setLine(1); }, reduced ? 35 : 110);
        var exitTimer = window.setTimeout(function () { return setPhase('exiting'); }, reduced ? 80 : 230);
        var endTimer = window.setTimeout(function () { return setPhase('hidden'); }, reduced ? 130 : 380);
        return function () {
            clearTimeout(lineTimer);
            clearTimeout(exitTimer);
            clearTimeout(endTimer);
        };
    }, []);
    if (phase === 'hidden')
        return null;
    return _jsxs("div", { className: "launch-loader ".concat(phase === 'exiting' ? 'is-exiting' : ''), children: [_jsx("div", { className: "loader-stars" }), _jsxs("div", { className: "loader-top", children: [_jsx("span", { children: "SEISHO // BOOT SYSTEM" }), _jsx("span", { children: "JPN\u2013AXS\u2013001" })] }), _jsxs("div", { className: "loader-core", children: [_jsx("div", { className: "loader-orbit", children: _jsx("i", {}) }), _jsx("p", { children: siteData.company.name }), _jsx("h2", { children: line === 0 ? '軌道データを読み込んでいます…' : '打ち上げシーケンスを準備中…' }), _jsx("div", { className: "loader-bar", children: _jsx("i", {}) }), _jsxs("div", { className: "loader-status", children: [_jsx("span", { children: "SYS_CHECK" }), _jsxs("b", { children: ["000", line + 8] }), _jsx("span", { children: "PASS" })] })] }), _jsxs("div", { className: "loader-bottom", children: [_jsx("span", { children: "GROUND CONTROL / TOKYO" }), _jsx("span", { children: "ALL SYSTEMS NOMINAL" })] })] });
}
