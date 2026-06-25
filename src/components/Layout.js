import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
export function Layout(_a) {
    var children = _a.children;
    var _b = useState(0), progress = _b[0], setProgress = _b[1];
    useEffect(function () {
        var update = function () {
            var max = document.documentElement.scrollHeight - innerHeight;
            setProgress(max > 0 ? scrollY / max : 0);
        };
        addEventListener('scroll', update, { passive: true });
        update();
        return function () { return removeEventListener('scroll', update); };
    }, []);
    return _jsxs(_Fragment, { children: [_jsx("a", { className: "skip-link", href: "#content", children: "\u672C\u6587\u3078\u79FB\u52D5" }), _jsx("div", { className: "telemetry-progress", "aria-hidden": "true", children: _jsx("span", { style: { transform: "scaleX(".concat(progress, ")") } }) }), _jsx(Navbar, {}), _jsx("div", { id: "content", children: children }), _jsx(Footer, {})] });
}
