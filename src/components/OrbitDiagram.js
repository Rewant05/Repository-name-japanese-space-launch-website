import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function OrbitDiagram(_a) {
    var _b = _a.compact, compact = _b === void 0 ? false : _b;
    return _jsxs("div", { className: "orbit-diagram ".concat(compact ? 'compact' : ''), "aria-label": "\u885B\u661F\u8ECC\u9053\u30A4\u30E1\u30FC\u30B8", children: [_jsxs("div", { className: "orbit-coordinates", children: [_jsx("span", { children: "35\u00B037' N" }), _jsx("span", { children: "ASC NODE" })] }), _jsx("div", { className: "planet", children: _jsx("div", {}) }), _jsx("div", { className: "orbit-ring ring-one", children: _jsxs("span", { className: "satellite", children: [_jsx("i", {}), _jsx("i", {})] }) }), _jsx("div", { className: "orbit-ring ring-two" }), _jsx("div", { className: "crosshair x" }), _jsx("div", { className: "crosshair y" }), _jsxs("div", { className: "orbit-readout", children: [_jsx("b", { children: "LEO 520" }), _jsx("small", { children: "KM / SSO" })] })] });
}
