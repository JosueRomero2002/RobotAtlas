'use strict';var globDynamicComponentEntry=globDynamicComponentEntry||'__Card__';
"use strict";
var __webpack_modules__ = ({
"(react:main-thread)/./src/assets/arrow.png": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "static/image/arrow.aee54ba7.png";

}),
"(react:main-thread)/./src/assets/lynx-logo.png": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "static/image/lynx-logo.620eb8d1.png";

}),
"(react:main-thread)/./src/assets/react-logo.png": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "static/image/react-logo.75eb3837.png";

}),
"(react:main-thread)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.lepus.cjs": (function () {
function main() {
    try {
        lynx.getJSContext().addEventListener('lynx.hmr.css', (event)=>{
            try {
                const { data: { cssId, content, deps, entry } } = event;
                // Update the css deps first because the css deps are updated actually.
                if (Array.isArray(deps[cssId])) deps[cssId].forEach((depCSSId)=>{
                    lynx.getDevtool().replaceStyleSheetByIdWithBase64(Number(depCSSId), content, entry);
                });
                lynx.getDevtool().replaceStyleSheetByIdWithBase64(Number(cssId), content, entry);
                __FlushElementTree();
            } catch (error) {
                // TODO: use webpack-dev-server logger
                console.error(error);
            }
        });
    } catch (error) {
        // TODO: use webpack-dev-server logger
        console.warn(`[HMR] no lynx.getJSContext() found, will not HMR CSS`);
        console.warn(error);
    }
}
main();
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/debug/index.cjs": (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
if (true) __webpack_require__("(react:main-thread)/./node_modules/preact/debug/dist/debug.mjs");
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/debug/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _index_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/debug/index.cjs");
/* ESM import */var _index_cjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_cjs__WEBPACK_IMPORTED_MODULE_0__);
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Fragment),
  jsx: () => (createVNode),
  jsxDEV: () => (createVNode),
  jsxs: () => (createVNode)
});
/* ESM import */var _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function createVNode(type, props, _key) {
    if (typeof type === 'string') {
        const r = new _lynx_js_react_internal__WEBPACK_IMPORTED_MODULE_0__.SnapshotInstance(type);
        r.props = props;
        r.__k = null;
        r.__ = null;
        r.__b = 0;
        r.__e = null;
        r.__d = undefined;
        r.__c = null;
        // r.__v = --vnodeId;
        r.__i = -1;
        r.__u = 0;
        return r;
    } else if (typeof type === 'function') {
        let normalizedProps = props;
        // let ref;
        if ('ref' in normalizedProps) {
            normalizedProps = {};
            for(let i in props){
                if (i == 'ref') ;
                else normalizedProps[i] = props[i];
            }
        }
        let defaultProps;
        if (defaultProps = type.defaultProps) {
            for(let i in defaultProps)if (typeof normalizedProps[i] === 'undefined') normalizedProps[i] = defaultProps[i];
        }
        return {
            type,
            props: normalizedProps,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            // __v: --vnodeId,
            __i: -1,
            __u: 0
        };
    }
}


// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/alog/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initAlog: () => (initAlog)
});
/* ESM import */var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/alog/render.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function initAlog() {
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.initRenderAlog)();
} //# sourceMappingURL=index.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/alog/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initRenderAlog: () => (initRenderAlog)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function initRenderAlog() {
    const oldAfterDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED] = function(vnode) {
        // Only log on component vnode
        if (typeof vnode.type === 'function') {
            var _vnode_DOM, _vnode_DOM1, // log the component render into Alog
            _console_alog, _console;
            const displayName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getDisplayName)(vnode.type);
            (_console_alog = (_console = console).alog) === null || _console_alog === void 0 ? void 0 : _console_alog.call(_console, `[${ true ? 'MainThread' : 0} Component Render] name: ${displayName}, uniqID: ${(_vnode_DOM = vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DOM]) === null || _vnode_DOM === void 0 ? void 0 : _vnode_DOM.type}, __id: ${(_vnode_DOM1 = vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DOM]) === null || _vnode_DOM1 === void 0 ? void 0 : _vnode_DOM1.__id}`);
        }
        oldAfterDiff === null || oldAfterDiff === void 0 ? void 0 : oldAfterDiff(vnode);
    };
} //# sourceMappingURL=render.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/componentIs.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  factory: () => (factory)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// for better reuse if runtime is changed
function factory({ createElement, useMemo, Suspense, lazy }, loadLazyBundle) {
    /**
     * @internal a polyfill for <component is=? />
     */ const __ComponentIsPolyfill = ({ is, ...props })=>{
        if (typeof is !== 'string') {
            lynx.reportError(new Error('You must provide a string to props `is` when using syntax `<component is=? />`.'));
            return null;
        }
        // @ts-ignore
        const D = useMemo(()=>lazy(()=>loadLazyBundle(is)), [
            is
        ]);
        return createElement(Suspense, {
            key: is
        }, createElement(D, props));
    };
    return __ComponentIsPolyfill;
} //# sourceMappingURL=componentIs.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  factory: () => (factory),
  withInitDataInState: () => (withInitDataInState)
});
/* ESM import */var _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");

// for better reuse if runtime is changed
function factory({ createContext, useState, createElement, useLynxGlobalEventListener: useListener }, prop, eventName) {
    const Context = createContext({});
    const Provider = ({ children })=>{
        const [__, set] = useState(lynx[prop]);
        const handleChange = ()=>{
            if (prop === '__initData') _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__.globalFlushOptions.triggerDataUpdated = true;
            set(lynx[prop]);
        };
        useChanged(handleChange);
        return createElement(Context.Provider, {
            value: __
        }, children);
    };
    const Consumer = Context.Consumer;
    const use = ()=>{
        const [__, set] = useState(lynx[prop]);
        useChanged(()=>{
            if (prop === '__initData') _lifecycle_patch_commit_js__WEBPACK_IMPORTED_MODULE_0__.globalFlushOptions.triggerDataUpdated = true;
            set(lynx[prop]);
        });
        return __;
    };
    const useChanged = (callback)=>{};
    return {
        /* v8 ignore next */ Context: ()=>Context,
        Provider: ()=>Provider,
        Consumer: ()=>Consumer,
        use: ()=>use,
        useChanged: ()=>useChanged
    };
}
/**
 * Higher-Order Component (HOC) that injects `initData` into the state of the given class component.
 *
 * This HOC checks if the provided component is a class component. If it is, it wraps the component
 * and injects the `initData` into its state. It also adds a listener
 * to update the state when data changes, and removes the listener when the component unmounts.
 *
 * @typeParam P - The type of the props of the wrapped component.
 * @typeParam S - The type of the state of the wrapped component.
 *
 * @param App - The class component to be wrapped by the HOC.
 *
 * @returns The original component if it is not a class component, otherwise a new class component
 *          with `initData` injection and state update functionality.
 *
 * @example
 * ```typescript
 * class App extends React.Component<MyProps, MyState> {
 *   // component implementation
 * }
 *
 * export default withInitDataInState(App);
 * ```
 * @public
 */ function withInitDataInState(App) {
    const isClassComponent = 'prototype' in App && 'render' in App.prototype;
    /* v8 ignore next 4 */ if (!isClassComponent) return App;
    class C extends App {
        componentWillUnmount() {
            var _super_componentWillUnmount;
            (_super_componentWillUnmount = super.componentWillUnmount) === null || _super_componentWillUnmount === void 0 ? void 0 : _super_componentWillUnmount.call(this);
        }
        constructor(props){
            super(props);
            this.state = {
                ...this.state,
                ...lynx.__initData
            };
        }
    }
    return C;
} //# sourceMappingURL=initData.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/lynxComponent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ComponentFromReactRuntime: () => (ComponentFromReactRuntime),
  wrapWithLynxComponent: () => (wrapWithLynxComponent)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function wrapWithLynxComponent(jsxSnapshot, jsxComponent) {
    const C = jsxComponent.type;
    if (typeof C === 'function' && (C === ComponentFromReactRuntime || C.prototype instanceof ComponentFromReactRuntime)) {
        if (jsxSnapshot.length === 1) return jsxSnapshot(jsxComponent);
        else {
            // spread
            if (!jsxComponent.props.removeComponentElement) return jsxSnapshot(jsxComponent, takeComponentAttributes(jsxComponent));
        }
    }
    return jsxComponent;
}
// @ts-expect-error
class ComponentFromReactRuntime extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
}
const __COMPONENT_ATTRIBUTES__ = /* @__PURE__ */ new Set([
    'name',
    'style',
    'class',
    'flatten',
    'clip-radius',
    'overlap',
    'user-interaction-enabled',
    'native-interaction-enabled',
    'block-native-event',
    'enableLayoutOnly',
    'cssAlignWithLegacyW3C',
    'intersection-observers',
    'trigger-global-event',
    'exposure-scene',
    'exposure-id',
    'exposure-screen-margin-top',
    'exposure-screen-margin-bottom',
    'exposure-screen-margin-left',
    'exposure-screen-margin-right',
    'focusable',
    'focus-index',
    'accessibility-label',
    'accessibility-element',
    'accessibility-traits',
    'enable-new-animator'
]);
function takeComponentAttributes(jsxComponent) {
    const attributes = {};
    Object.keys(jsxComponent.props).forEach((k)=>{
        // let re1 = Regex::new(r"^(global-bind|bind|catch|capture-bind|capture-catch)([A-Za-z]+)$").unwrap();
        // let re2 = Regex::new(r"^data-([A-Za-z]+)$").unwrap();
        if (__COMPONENT_ATTRIBUTES__.has(k) || k === 'id' || k === 'className' || k === 'dataSet' || k === 'data-set' || k === 'removeComponentElement' || /^(global-bind|bind|catch|capture-bind|capture-catch)([A-Za-z]+)$/.exec(k) || /^data-([A-Za-z]+)$/.exec(k)) {
            attributes[k] = jsxComponent.props[k];
            delete jsxComponent.props[k];
        }
    });
    return attributes;
} //# sourceMappingURL=lynxComponent.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/debug/component-stack.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCurrentVNode: () => (getCurrentVNode),
  getDisplayName: () => (getDisplayName),
  getOwnerStack: () => (getOwnerStack),
  setupComponentStack: () => (setupComponentStack)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * @license
The MIT License (MIT)

Copyright (c) 2015-present Jason Miller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */ 

/**
 * Get human readable name of the component/dom node
 */ function getDisplayName(vnode) {
    var _vnode_type_displayName;
    if (vnode.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment) return 'Fragment';
    else if (typeof vnode.type == 'function') return (_vnode_type_displayName = vnode.type.displayName) !== null && _vnode_type_displayName !== void 0 ? _vnode_type_displayName : vnode.type.name;
    else if (typeof vnode.type == 'string') return vnode.type;
    return '#text';
}
/**
 * Used to keep track of the currently rendered `vnode` and print it
 * in debug messages.
 */ const renderStack = [];
/**
 * Keep track of the current owners. An owner describes a component
 * which was responsible to render a specific `vnode`. This exclude
 * children that are passed via `props.children`, because they belong
 * to the parent owner.
 *
 * ```jsx
 * const Foo = props => <div>{props.children}</div> // div's owner is Foo
 * const Bar = props => {
 *   return (
 *     <Foo><span /></Foo> // Foo's owner is Bar, span's owner is Bar
 *   )
 * }
 * ```
 *
 * Note: A `vnode` may be hoisted to the root scope due to compiler
 * optimization. In these cases the `_owner` will be different.
 */ let ownerStack = [];
/**
 * Get the currently rendered `vnode`
 */ function getCurrentVNode() {
    return renderStack.length > 0 ? renderStack[renderStack.length - 1] : null;
}
/**
 * Check if a `vnode` is a possible owner.
 */ function isPossibleOwner(vnode) {
    return typeof vnode.type == 'function' && vnode.type != preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
/**
 * Return the component stack that was captured up to this point.
 */ function getOwnerStack(vnode) {
    const stack = [
        vnode
    ];
    let next = vnode;
    while(next._owner != null){
        stack.push(next._owner);
        next = next._owner;
    }
    return stack.reduce((acc, owner)=>{
        acc += `  in ${getDisplayName(owner)}`;
        const source = owner.__source;
        if (source) acc += ` (at ${source.fileName}:${source.lineNumber})`;
        return acc += '\n';
    }, '');
}
/**
 * Setup code to capture the component trace while rendering. Note that
 * we cannot simply traverse `vnode._parent` upwards, because we have some
 * debug messages for `this.setState` where the `vnode` is `undefined`.
 */ function setupComponentStack() {
    const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    const oldDiffed = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    const oldRoot = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.ROOT];
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const oldVNode = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
    const oldRender = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED] = (vnode)=>{
        if (isPossibleOwner(vnode)) ownerStack.pop();
        renderStack.pop();
        if (oldDiffed) oldDiffed(vnode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = (vnode, oldVNode)=>{
        if (isPossibleOwner(vnode)) renderStack.push(vnode);
        if (oldDiff) oldDiff(vnode, oldVNode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.ROOT] = (vnode, parent)=>{
        ownerStack = [];
        if (oldRoot) oldRoot(vnode, parent);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = (vnode)=>{
        vnode._owner = ownerStack.length > 0 ? ownerStack[ownerStack.length - 1] : null;
        if (oldVNode) oldVNode(vnode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER] = (vnode)=>{
        if (isPossibleOwner(vnode)) ownerStack.push(vnode);
        if (oldRender) oldRender(vnode);
    };
} //# sourceMappingURL=component-stack.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/debug/profile.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initProfileHook: () => (initProfileHook)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



function initProfileHook() {
    const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = function(vnode, oldVNode) {
        // This __PROFILE__ is used for DCE testing
        if ( true && typeof vnode.type === 'function') console.profile(`diff::${(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getDisplayName)(vnode.type)}`);
        oldDiff === null || oldDiff === void 0 ? void 0 : oldDiff(vnode, oldVNode);
    };
    const oldDiffed = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED] = function(vnode) {
        // This __PROFILE__ is used for DCE testing
        if ( true && typeof vnode.type === 'function') console.profileEnd(); // for options[DIFF]
        oldDiffed === null || oldDiffed === void 0 ? void 0 : oldDiffed(vnode);
    };
    // Profile the user-provided `render`.
    const oldRender = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER] = function(vnode) {
        const displayName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getDisplayName)(vnode.type);
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const originalRender = vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT].render;
        vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT].render = function render(props, state, context) {
            // This __PROFILE__ is used for DCE testing
            if (true) console.profile(`render::${displayName}`);
            try {
                return originalRender.call(this, props, state, context);
            } finally{
                // This __PROFILE__ is used for DCE testing
                if (true) console.profileEnd();
                vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT].render = originalRender;
            }
        };
        oldRender === null || oldRender === void 0 ? void 0 : oldRender(vnode);
    };
} //# sourceMappingURL=profile.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGesture.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  processGesture: () => (processGesture)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function isSerializedGesture(gesture) {
    var _gesture___isSerialized;
    return (_gesture___isSerialized = gesture.__isSerialized) !== null && _gesture___isSerialized !== void 0 ? _gesture___isSerialized : false;
}
function getGestureInfo(gesture, oldGesture, isFirstScreen, dom) {
    var _baseGesture_waitFor, _baseGesture_simultaneousWith, _baseGesture_continueWith;
    const config = {
        callbacks: []
    };
    const baseGesture = gesture;
    if (baseGesture.config) config.config = baseGesture.config;
    for (const key of Object.keys(baseGesture.callbacks)){
        const callback = baseGesture.callbacks[key];
        const oldCallback = oldGesture === null || oldGesture === void 0 ? void 0 : oldGesture.callbacks[key];
        (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.onWorkletCtxUpdate)(callback, oldCallback, isFirstScreen, dom);
        config.callbacks.push({
            name: key,
            callback: callback
        });
    }
    var _baseGesture_waitFor_map, _baseGesture_simultaneousWith_map, _baseGesture_continueWith_map;
    const relationMap = {
        waitFor: (_baseGesture_waitFor_map = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_waitFor = baseGesture.waitFor) === null || _baseGesture_waitFor === void 0 ? void 0 : _baseGesture_waitFor.map((subGesture)=>subGesture.id)) !== null && _baseGesture_waitFor_map !== void 0 ? _baseGesture_waitFor_map : [],
        simultaneous: (_baseGesture_simultaneousWith_map = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_simultaneousWith = baseGesture.simultaneousWith) === null || _baseGesture_simultaneousWith === void 0 ? void 0 : _baseGesture_simultaneousWith.map((subGesture)=>subGesture.id)) !== null && _baseGesture_simultaneousWith_map !== void 0 ? _baseGesture_simultaneousWith_map : [],
        continueWith: (_baseGesture_continueWith_map = baseGesture === null || baseGesture === void 0 ? void 0 : (_baseGesture_continueWith = baseGesture.continueWith) === null || _baseGesture_continueWith === void 0 ? void 0 : _baseGesture_continueWith.map((subGesture)=>subGesture.id)) !== null && _baseGesture_continueWith_map !== void 0 ? _baseGesture_continueWith_map : []
    };
    return {
        config,
        relationMap
    };
}
function processGesture(dom, gesture, oldGesture, isFirstScreen, gestureOptions) {
    if (!gesture || !isSerializedGesture(gesture)) return;
    if (!(gestureOptions && gestureOptions.domSet)) {
        __SetAttribute(dom, 'has-react-gesture', true);
        __SetAttribute(dom, 'flatten', false);
    }
    if (gesture.type === _types_js__WEBPACK_IMPORTED_MODULE_1__.GestureTypeInner.COMPOSED) for (const [index, subGesture] of gesture.gestures.entries())processGesture(dom, subGesture, oldGesture === null || oldGesture === void 0 ? void 0 : oldGesture.gestures[index], isFirstScreen, {
        domSet: true
    });
    else {
        const baseGesture = gesture;
        const oldBaseGesture = oldGesture;
        const { config, relationMap } = getGestureInfo(baseGesture, oldBaseGesture, isFirstScreen, dom);
        __SetGestureDetector(dom, baseGesture.id, baseGesture.type, config, relationMap);
    }
} //# sourceMappingURL=processGesture.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/gesture/types.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GestureTypeInner: () => (GestureTypeInner)
});
var GestureTypeInner;
(function(GestureTypeInner) {
    GestureTypeInner[GestureTypeInner["COMPOSED"] = -1] = "COMPOSED";
    GestureTypeInner[GestureTypeInner["PAN"] = 0] = "PAN";
    GestureTypeInner[GestureTypeInner["FLING"] = 1] = "FLING";
    GestureTypeInner[GestureTypeInner["DEFAULT"] = 2] = "DEFAULT";
    GestureTypeInner[GestureTypeInner["TAP"] = 3] = "TAP";
    GestureTypeInner[GestureTypeInner["LONGPRESS"] = 4] = "LONGPRESS";
    GestureTypeInner[GestureTypeInner["ROTATION"] = 5] = "ROTATION";
    GestureTypeInner[GestureTypeInner["PINCH"] = 6] = "PINCH";
    GestureTypeInner[GestureTypeInner["NATIVE"] = 7] = "NATIVE";
})(GestureTypeInner || (GestureTypeInner = {})); //# sourceMappingURL=types.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useCallback: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback),
  useContext: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext),
  useDebugValue: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
  useEffect: () => (useEffect),
  useErrorBoundary: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary),
  useId: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useId),
  useImperativeHandle: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
  useLayoutEffect: () => (useLayoutEffect),
  useMemo: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo),
  useReducer: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer),
  useRef: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef),
  useState: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState)
});
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/hooks/dist/hooks.mjs");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * `useLayoutEffect` is now an alias of `useEffect`. Use `useEffect` instead.
 *
 * Accepts a function that contains imperative, possibly effectful code. The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 *
 * @deprecated `useLayoutEffect` in the background thread cannot offer the precise timing for reading layout information and synchronously re-render, which is different from React.
 */ function useLayoutEffect(effect, deps) {
    return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, deps);
}
/**
 * Accepts a function that contains imperative, possibly effectful code.
 * The effects run after main thread dom update without blocking it.
 *
 * @param effect - Imperative function that can return a cleanup function
 * @param deps - If present, effect will only activate if the values in the list change (using ===).
 *
 * @public
 */ function useEffect(effect, deps) {
    return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, deps);
}
 //# sourceMappingURL=react.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/useLynxGlobalEventListener.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useLynxGlobalEventListener: () => (useLynxGlobalEventListener)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * `useLynxGlobalEventListener` help you `addListener` as early as possible.
 *
 * @example
 *
 * Use this hooks to listen to event 'exposure' and event 'disexposure'
 *
 * ```jsx
 * function App() {
 *   useLynxGlobalEventListener('exposure', (e) => {
 *     console.log("exposure", e)
 *   })
 *   useLynxGlobalEventListener('disexposure', (e) => {
 *     console.log("disexposure", e)
 *   })
 *   return (
 *     <view
 *       style='width: 100px; height: 100px; background-color: red;'
 *       exposure-id='a'
 *     />
 *   )
 * }
 * ```
 *
 * @param eventName - Event name to listen
 * @param listener - Event handler
 * @public
 */ function useLynxGlobalEventListener() {} //# sourceMappingURL=useLynxGlobalEventListener.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  diffArrayAction: () => (diffArrayAction),
  diffArrayLepus: () => (diffArrayLepus),
  hydrate: () => (hydrate),
  isEmptyDiffResult: () => (isEmptyDiffResult)
});
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js");
/* ESM import */var _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/dynamicPartType.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.





function isEmptyDiffResult(diffResult) {
    const hasChanged = !(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isEmptyObject)(diffResult.i) || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isEmptyObject)(diffResult.m) || diffResult.r.length > 0;
    return !hasChanged;
}
function diffArrayLepus(before, after, isSameType, onDiffChildren) {
    let lastPlacedIndex = 0;
    const result = {
        $$diff: true,
        i: {},
        r: [],
        m: {}
    };
    const beforeMap = {};
    for(let i = 0; i < before.length; i++){
        var _beforeMap, _node_type;
        const node = before[i];
        var _;
        ((_ = (_beforeMap = beforeMap)[_node_type = node.type]) !== null && _ !== void 0 ? _ : _beforeMap[_node_type] = new Set()).add([
            node,
            i
        ]);
    }
    for(let i = 0; i < after.length; i++){
        const afterNode = after[i];
        const beforeNodes = beforeMap[afterNode.type];
        let beforeNode;
        if (beforeNodes && beforeNodes.size > 0 && ([beforeNode] = beforeNodes, beforeNode) && isSameType(beforeNode[0], afterNode)) {
            // Reuse old node
            beforeNodes.delete(beforeNode);
            const oldIndex = beforeNode[1];
            onDiffChildren(beforeNode[0], afterNode, oldIndex, i);
            if (oldIndex < lastPlacedIndex) {
                result.m[oldIndex] = i;
                continue;
            } else lastPlacedIndex = oldIndex;
        } else result.i[i] = afterNode;
    }
    // Delete
    for(const k in beforeMap)for (const [, i] of beforeMap[k])result.r.push(i);
    return result;
}
// export function diffIterableLepus<A extends Typed, B extends Typed>(
//   before: A[],
//   after: Iterable<B>,
//   isSameType: (a: A, b: B) => boolean,
//   onDiffChildren: (a: A, b: B) => void
// ): DiffResult<B> {
//   let returnResult = EMPTY_DIFF_RESULT as DiffResult<B>;
//   let lastPlacedIndex = 0;
//   const result: DiffResult<B> = {
//     $$diff: true,
//     i: {},
//     r: [],
//     m: {},
//   };
//   const beforeMap: Record<string, Set<[A, number]>> = {};
//   for (let i = 0; i < before.length; i++) {
//     let node = before[i];
//     (beforeMap[node.type] ??= new Set()).add([node, i]);
//   }
//   let i = 0;
//   for (const afterNode of after) {
//     const beforeNodes = beforeMap[afterNode.type];
//     let beforeNode: [A, number];
//     if (beforeNodes && (([beforeNode] = beforeNodes), beforeNode) && isSameType(beforeNode[0], afterNode)) {
//       // Reuse old node
//       beforeNodes.delete(beforeNode);
//       const oldIndex = beforeNode[1];
//       onDiffChildren(beforeNode[0], afterNode);
//       if (oldIndex < lastPlacedIndex) {
//         result.m[oldIndex] = i;
//         returnResult = result;
//         i++;
//         continue;
//       } else {
//         lastPlacedIndex = oldIndex;
//       }
//     } else {
//       // Create new node
//       result.i[i] = afterNode;
//       returnResult = result;
//     }
//     i++;
//   }
//   // delete
//   for (const k in beforeMap) {
//     for (const [, i] of beforeMap[k]) {
//       result.r.push(i);
//       returnResult = result;
//     }
//   }
//   return result;
// }
function diffArrayAction(before, diffResult, onInsert, onRemove, onMove) {
    if (isEmptyDiffResult(diffResult)) return before;
    const deleteSet = new Set(diffResult.r);
    const { i: insertMap, m: placementMap } = diffResult;
    const moveTempMap = new Map();
    let old;
    let k = 0;
    old = before[k];
    // let current: T | null | undefined = null;
    const result = [];
    let i = 0; // index of the old list
    let j = 0; // index of the new list
    let remain = Object.keys(insertMap).length;
    while(old || remain > 0){
        let keep = false;
        if (old && deleteSet.has(j)) onRemove(old);
        else if (old && placementMap[j] !== undefined) {
            // save node to re-use
            moveTempMap.set(placementMap[j], old);
            remain++;
        } else {
            // insert node
            let newNode = old;
            if (moveTempMap.has(i)) {
                // insert re-used node
                newNode = moveTempMap.get(i);
                keep = true;
                onMove(newNode, old);
                remain--;
            } else if (insertMap[i] !== undefined) {
                // insert new node
                newNode = onInsert(insertMap[i], old);
                keep = true;
                remain--;
            }
            result.push(newNode);
            i++;
        }
        if (old && !keep) {
            old = before[++k];
            j++;
        }
    }
    return result;
}
function hydrate(before, after, options) {
    after.__elements = before.__elements;
    after.__element_root = before.__element_root;
    if (!(options === null || options === void 0 ? void 0 : options.skipUnRef)) (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_3__.unref)(before, false);
    let swap;
    if (swap = options === null || options === void 0 ? void 0 : options.swap) swap[before.__id] = after.__id;
    _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.runWithoutUpdates(()=>{
        var _after___values;
        (_after___values = after.__values) === null || _after___values === void 0 ? void 0 : _after___values.forEach((value, index)=>{
            const old = before.__values[index];
            if (value !== old) {
                after.__values[index] = old;
                after.setAttribute(index, value);
            }
        });
    });
    const { slot } = after.__snapshot_def;
    if (!slot) return;
    const beforeChildNodes = before.childNodes;
    const afterChildNodes = after.childNodes;
    slot.forEach(([type, elementIndex], index)=>{
        switch(type){
            case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Slot:
            case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.MultiChildren:
                {
                    // TODO: the following null assertions are not 100% safe
                    const v1 = beforeChildNodes[index];
                    const v2 = afterChildNodes[index];
                    hydrate(v1, v2, options);
                    break;
                }
            case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Children:
                {
                    const diffResult = diffArrayLepus(beforeChildNodes, afterChildNodes, (a, b)=>a.type === b.type, (a, b)=>{
                        hydrate(a, b, options);
                    });
                    diffArrayAction(beforeChildNodes, diffResult, (node, target)=>{
                        node.ensureElements();
                        __InsertElementBefore(before.__elements[elementIndex], node.__element_root, target === null || target === void 0 ? void 0 : target.__element_root);
                        return node;
                    }, (node)=>{
                        __RemoveElement(before.__elements[elementIndex], node.__element_root);
                    }, (node, target)=>{
                        __RemoveElement(before.__elements[elementIndex], node.__element_root);
                        __InsertElementBefore(before.__elements[elementIndex], node.__element_root, target === null || target === void 0 ? void 0 : target.__element_root);
                    });
                    break;
                }
            case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.ListChildren:
                {
                    const removals = [];
                    const insertions = [];
                    const updateAction = [];
                    const diffResult = diffArrayLepus(beforeChildNodes, afterChildNodes, (a, b)=>a.type === b.type, (a, b, oldIndex, newIndex)=>{
                        if (JSON.stringify(a.__listItemPlatformInfo) !== JSON.stringify(b.__listItemPlatformInfo)) updateAction.push({
                            ...b.__listItemPlatformInfo,
                            from: newIndex,
                            to: newIndex,
                            // no flush
                            flush: false
                        });
                        // Mark list-item which is rendered (has `__elements`) as DELETE
                        // so list platform will call `enqueueComponent` on it
                        // and will call `componentAtIndex` on the inserted one
                        // In this way:
                        //  1. we make sure `<list/>` for hydrate is like a leaf node
                        //  2. we avoid hydrate so modifying recycleMap can be avoid
                        //  3. the delete list-item is recycled for later use, so no waste
                        if (a.__elements) {
                            removals.push(oldIndex);
                            insertions.push(newIndex);
                        }
                    });
                    for (const i of diffResult.r)removals.push(i);
                    for(const i in diffResult.i)insertions.push(Number(i));
                    for(const i in diffResult.m){
                        removals.push(Number(i));
                        insertions.push(diffResult.m[i]);
                    }
                    insertions.sort((a, b)=>a - b);
                    removals.sort((a, b)=>a - b);
                    const info = {
                        insertAction: insertions.map((it)=>({
                                position: it,
                                type: afterChildNodes[it].type,
                                ...afterChildNodes[it].__listItemPlatformInfo
                            })),
                        removeAction: removals,
                        updateAction
                    };
                    const listElement = before.__elements[elementIndex];
                    __SetAttribute(listElement, 'update-list-info', info);
                    const [componentAtIndex, componentAtIndexes] = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.componentAtIndexFactory)(afterChildNodes, hydrate);
                    __UpdateListCallbacks(listElement, componentAtIndex, (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.enqueueComponentFactory)(), componentAtIndexes);
                    // The `before` & `after` target to the same list element, so we need to
                    // avoid the newly created list's (behind snapshot instance `after`) "update-list-info" being recorded.
                    if (_pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values) delete _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values[after.__id];
                }
        }
    });
} //# sourceMappingURL=hydrate.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Children: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Children),
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_5__.Component),
  Fragment: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Fragment),
  InitDataConsumer: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.InitDataConsumer),
  InitDataProvider: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.MainThreadRef),
  PureComponent: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.PureComponent),
  Suspense: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.Suspense),
  cloneElement: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.cloneElement),
  createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_5__.createContext),
  createElement: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.createElement),
  createRef: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.createRef),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  forwardRef: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.forwardRef),
  isValidElement: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.isValidElement),
  lazy: () => (lazy),
  memo: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.memo),
  root: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.root),
  runOnBackground: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.runOnMainThread),
  useCallback: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useCallback),
  useContext: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useContext),
  useDebugValue: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useDebugValue),
  useEffect: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useEffect),
  useErrorBoundary: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useErrorBoundary),
  useId: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useId),
  useImperativeHandle: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle),
  useInitData: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.useInitData),
  useInitDataChanged: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.useInitDataChanged),
  useLayoutEffect: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect),
  useLynxGlobalEventListener: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.useMainThreadRef),
  useMemo: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo),
  useReducer: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useReducer),
  useRef: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useRef),
  useState: () => (/* reexport safe */ _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useState),
  useSyncExternalStore: () => (/* reexport safe */ preact_compat__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore),
  withInitDataInState: () => (/* reexport safe */ _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__.withInitDataInState)
});
/* ESM import */var _lynx_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* ESM import */var _lynx_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/component.js");
/* ESM import */var _lynx_component_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lynx_component_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lynx_api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.








const lazy = /*#__PURE__*/ (()=>{
    lynx.loadLazyBundle = _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__.loadLazyBundle;
    return preact_compat__WEBPACK_IMPORTED_MODULE_2__.lazy;
})();
/**
 * @internal
 */ /* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // hooks
    useState: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useState,
    useReducer: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useReducer,
    useEffect: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useEffect,
    useLayoutEffect: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect,
    useRef: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useRef,
    useImperativeHandle: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle,
    useMemo: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo,
    useCallback: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useCallback,
    useContext: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useContext,
    useDebugValue: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useDebugValue,
    useSyncExternalStore: preact_compat__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore,
    createContext: preact_compat__WEBPACK_IMPORTED_MODULE_2__.createContext,
    createRef: preact_compat__WEBPACK_IMPORTED_MODULE_2__.createRef,
    Fragment: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Fragment,
    isValidElement: preact_compat__WEBPACK_IMPORTED_MODULE_2__.isValidElement,
    Children: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Children,
    Component: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Component,
    PureComponent: preact_compat__WEBPACK_IMPORTED_MODULE_2__.PureComponent,
    memo: preact_compat__WEBPACK_IMPORTED_MODULE_2__.memo,
    forwardRef: preact_compat__WEBPACK_IMPORTED_MODULE_2__.forwardRef,
    Suspense: preact_compat__WEBPACK_IMPORTED_MODULE_2__.Suspense,
    lazy,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_2__.createElement
});

 //# sourceMappingURL=index.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_16__.Component),
  SnapshotInstance: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.SnapshotInstance),
  __ComponentIsPolyfill: () => (__ComponentIsPolyfill),
  __DynamicPartChildren: () => (__DynamicPartChildren),
  __DynamicPartChildren_0: () => (__DynamicPartChildren_0),
  __DynamicPartListChildren: () => (__DynamicPartListChildren),
  __DynamicPartMultiChildren: () => (__DynamicPartMultiChildren),
  __DynamicPartSlot: () => (__DynamicPartSlot),
  __dynamicImport: () => (/* reexport safe */ _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_17__.__dynamicImport),
  __page: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.__page),
  __pageId: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.__pageId),
  __root: () => (/* reexport safe */ _root_js__WEBPACK_IMPORTED_MODULE_5__.__root),
  createSnapshot: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.createSnapshot),
  loadDynamicJS: () => (/* reexport safe */ _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_17__.loadDynamicJS),
  loadLazyBundle: () => (/* reexport safe */ _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__.loadLazyBundle),
  loadWorkletRuntime: () => (/* reexport safe */ _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_22__.loadWorkletRuntime),
  options: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_16__.options),
  registerWorkletOnBackground: () => (/* reexport safe */ _worklet_hmr_js__WEBPACK_IMPORTED_MODULE_21__.registerWorkletOnBackground),
  snapshotCreateList: () => (/* reexport safe */ _snapshot_list_js__WEBPACK_IMPORTED_MODULE_7__.snapshotCreateList),
  snapshotManager: () => (/* reexport safe */ _snapshot_js__WEBPACK_IMPORTED_MODULE_8__.snapshotManager),
  transformRef: () => (/* reexport safe */ _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_11__.transformRef),
  transformToWorklet: () => (/* reexport safe */ _worklet_transformToWorklet_js__WEBPACK_IMPORTED_MODULE_20__.transformToWorklet),
  updateEvent: () => (/* reexport safe */ _snapshot_event_js__WEBPACK_IMPORTED_MODULE_10__.updateEvent),
  updateGesture: () => (/* reexport safe */ _snapshot_gesture_js__WEBPACK_IMPORTED_MODULE_14__.updateGesture),
  updateListItemPlatformInfo: () => (/* reexport safe */ _snapshot_platformInfo_js__WEBPACK_IMPORTED_MODULE_15__.updateListItemPlatformInfo),
  updateRef: () => (/* reexport safe */ _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_11__.updateRef),
  updateSpread: () => (/* reexport safe */ _snapshot_spread_js__WEBPACK_IMPORTED_MODULE_9__.updateSpread),
  updateWorkletEvent: () => (/* reexport safe */ _snapshot_workletEvent_js__WEBPACK_IMPORTED_MODULE_12__.updateWorkletEvent),
  updateWorkletRef: () => (/* reexport safe */ _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_13__.updateWorkletRef),
  withInitDataInState: () => (/* reexport safe */ _compat_initData_js__WEBPACK_IMPORTED_MODULE_18__.withInitDataInState),
  wrapWithLynxComponent: () => (/* reexport safe */ _compat_lynxComponent_js__WEBPACK_IMPORTED_MODULE_19__.wrapWithLynxComponent)
});
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var _lynx_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx.js");
/* ESM import */var _compat_componentIs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/componentIs.js");
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/dynamicPartType.js");
/* ESM import */var _snapshot_list_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _snapshot_spread_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js");
/* ESM import */var _snapshot_event_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _snapshot_workletEvent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js");
/* ESM import */var _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _snapshot_gesture_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js");
/* ESM import */var _snapshot_platformInfo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js");
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lynx_dynamic_js_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/dynamic-js.js");
/* ESM import */var _compat_initData_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js");
/* ESM import */var _compat_lynxComponent_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/lynxComponent.js");
/* ESM import */var _worklet_transformToWorklet_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/transformToWorklet.js");
/* ESM import */var _worklet_hmr_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/hmr.js");
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.











const __DynamicPartSlot = _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_6__.DynamicPartType.Slot;
const __DynamicPartMultiChildren = _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_6__.DynamicPartType.MultiChildren;
const __DynamicPartChildren = _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_6__.DynamicPartType.Children;
const __DynamicPartListChildren = _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_6__.DynamicPartType.ListChildren;
const __DynamicPartChildren_0 = [
    [
        _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_6__.DynamicPartType.Children,
        0
    ]
];











/**
 * @internal a polyfill for <component is=? />
 */ const __ComponentIsPolyfill = /* @__PURE__ */ (0,_compat_componentIs_js__WEBPACK_IMPORTED_MODULE_2__.factory)({
    Suspense: preact_compat__WEBPACK_IMPORTED_MODULE_0__.Suspense,
    lazy: preact_compat__WEBPACK_IMPORTED_MODULE_0__.lazy,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_0__.createElement,
    useMemo: _hooks_react_js__WEBPACK_IMPORTED_MODULE_3__.useMemo
}, _lynx_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_4__.loadLazyBundle);



 //# sourceMappingURL=internal.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LifecycleConstant: () => (LifecycleConstant),
  NativeUpdateDataType: () => (NativeUpdateDataType)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
var LifecycleConstant;
(function(LifecycleConstant) {
    LifecycleConstant["firstScreen"] = "rLynxFirstScreen";
    LifecycleConstant["updateFromRoot"] = "updateFromRoot";
    LifecycleConstant["globalEventFromLepus"] = "globalEventFromLepus";
    LifecycleConstant["jsReady"] = "rLynxJSReady";
    LifecycleConstant["patchUpdate"] = "rLynxChange";
    LifecycleConstant["publishEvent"] = "rLynxPublishEvent";
})(LifecycleConstant || (LifecycleConstant = {}));
var NativeUpdateDataType;
(function(NativeUpdateDataType) {
    NativeUpdateDataType[NativeUpdateDataType["UPDATE"] = 0] = "UPDATE";
    NativeUpdateDataType[NativeUpdateDataType["RESET"] = 1] = "RESET";
})(NativeUpdateDataType || (NativeUpdateDataType = {})); //# sourceMappingURL=lifecycleConstant.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyBackground: () => (destroyBackground)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _event_delayEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayEvents.js");
/* ESM import */var _event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayLifecycleEvents.js");
/* ESM import */var _patch_commit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.





function destroyBackground() {
    if (true) console.profile('destroyBackground');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, _root_js__WEBPACK_IMPORTED_MODULE_1__.__root);
    _patch_commit_js__WEBPACK_IMPORTED_MODULE_4__.globalCommitTaskMap.forEach((task)=>{
        task();
    });
    _patch_commit_js__WEBPACK_IMPORTED_MODULE_4__.globalCommitTaskMap.clear();
    // Clear delayed events which should not be executed after destroyed.
    // This is important when the page is performing a reload.
    _event_delayLifecycleEvents_js__WEBPACK_IMPORTED_MODULE_3__.delayedLifecycleEvents.length = 0;
    if (_event_delayEvents_js__WEBPACK_IMPORTED_MODULE_2__.delayedEvents) _event_delayEvents_js__WEBPACK_IMPORTED_MODULE_2__.delayedEvents.length = 0;
    if (true) console.profileEnd();
}
 //# sourceMappingURL=destroy.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayEvents.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayedEvents: () => (delayedEvents),
  delayedPublishEvent: () => (delayedPublishEvent)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
let delayedEvents;
function delayedPublishEvent(handlerName, data) {
    delayedEvents !== null && delayedEvents !== void 0 ? delayedEvents : delayedEvents = [];
    delayedEvents.push([
        handlerName,
        data
    ]);
}
 //# sourceMappingURL=delayEvents.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/delayLifecycleEvents.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayLifecycleEvent: () => (delayLifecycleEvent),
  delayedLifecycleEvents: () => (delayedLifecycleEvents)
});
const delayedLifecycleEvents = [];
function delayLifecycleEvent(type, data) {
    delayedLifecycleEvents.push([
        type,
        data
    ]);
}
/**
 * @internal
 */  //# sourceMappingURL=delayLifecycleEvents.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/jsReady.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearJSReadyEventIdSwap: () => (clearJSReadyEventIdSwap),
  isJSReady: () => (isJSReady),
  jsReady: () => (jsReady),
  jsReadyEventIdSwap: () => (jsReadyEventIdSwap),
  resetJSReady: () => (resetJSReady)
});
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


let isJSReady;
let jsReadyEventIdSwap;
function jsReady() {
    isJSReady = true;
    __OnLifecycleEvent([
        _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__.LifecycleConstant.firstScreen,
        /* FIRST_SCREEN */ {
            root: JSON.stringify(_root_js__WEBPACK_IMPORTED_MODULE_1__.__root),
            jsReadyEventIdSwap
        }
    ]);
    jsReadyEventIdSwap = {};
}
function clearJSReadyEventIdSwap() {
    jsReadyEventIdSwap = {};
}
function resetJSReady() {
    isJSReady = false;
    jsReadyEventIdSwap = {};
}
/**
 * @internal
 */  //# sourceMappingURL=jsReady.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getReloadVersion: () => (getReloadVersion),
  increaseReloadVersion: () => (increaseReloadVersion)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
let reloadVersion = 0;
function getReloadVersion() {
    return reloadVersion;
}
function increaseReloadVersion() {
    return ++reloadVersion;
}
 //# sourceMappingURL=pass.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/commit.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearCommitTaskId: () => (clearCommitTaskId),
  commitPatchUpdate: () => (commitPatchUpdate),
  genCommitTaskId: () => (genCommitTaskId),
  globalBackgroundSnapshotInstancesToRemove: () => (globalBackgroundSnapshotInstancesToRemove),
  globalCommitTaskMap: () => (globalCommitTaskMap),
  globalFlushOptions: () => (globalFlushOptions),
  replaceCommitHook: () => (replaceCommitHook)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




let globalFlushOptions = {};
const globalCommitTaskMap = /*@__PURE__*/ new Map();
let nextCommitTaskId = 1;
let globalBackgroundSnapshotInstancesToRemove = [];
/**
 * Replaces Preact's default commit hook with our custom implementation
 */ function replaceCommitHook() {
    // This is actually not used since Preact use `hooks._commit` for callbacks of `useLayoutEffect`.
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_2__.COMMIT];
    const commit = async (vnode, commitQueue)=>{
        // for testing only
        commitQueue.length = 0;
        return;
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_2__.COMMIT] = commit;
}
/**
 * Prepares the patch update for transmission to the native layer
 */ function commitPatchUpdate(patchList, patchOptions) {
    // console.debug('********** JS update:');
    // printSnapshotInstance(
    //   (backgroundSnapshotInstanceManager.values.get(1) ?? backgroundSnapshotInstanceManager.values.get(-1))!,
    // );
    // console.debug('commitPatchUpdate:', prettyFormatSnapshotPatch(patchList.patchList[0]?.snapshotPatch));
    if (true) console.profile('commitChanges');
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_1__.markTiming)('packChangesStart');
    const obj = {
        data: JSON.stringify(patchList),
        patchOptions: {
            ...patchOptions,
            reloadVersion: (0,_pass_js__WEBPACK_IMPORTED_MODULE_3__.getReloadVersion)()
        }
    };
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_1__.markTiming)('packChangesEnd');
    if (_lynx_performance_js__WEBPACK_IMPORTED_MODULE_1__.globalPipelineOptions) {
        obj.patchOptions.pipelineOptions = _lynx_performance_js__WEBPACK_IMPORTED_MODULE_1__.globalPipelineOptions;
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_1__.setPipeline)(undefined);
    }
    if (true) console.profileEnd();
    return obj;
}
/**
 * Generates a unique ID for commit tasks
 */ function genCommitTaskId() {
    return nextCommitTaskId++;
}
/**
 * Resets the commit task ID counter
 */ function clearCommitTaskId() {
    nextCommitTaskId = 1;
}
/**
 * @internal
 */  //# sourceMappingURL=commit.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/error.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addCtxNotFoundEventListener: () => (addCtxNotFoundEventListener),
  ctxNotFoundType: () => (ctxNotFoundType),
  removeCtxNotFoundEventListener: () => (removeCtxNotFoundEventListener),
  reportCtxNotFound: () => (reportCtxNotFound),
  sendCtxNotFoundEventToBackground: () => (sendCtxNotFoundEventToBackground)
});
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

const ctxNotFoundType = 'Lynx.Error.CtxNotFound';
const errorMsg = 'snapshotPatchApply failed: ctx not found';
let ctxNotFoundEventListener = null;
function sendCtxNotFoundEventToBackground(id) {
    /* v8 ignore next 3 */ if (!lynx.getJSContext) throw new Error(errorMsg);
    lynx.getJSContext().dispatchEvent({
        type: ctxNotFoundType,
        data: {
            id
        }
    });
}
function reportCtxNotFound(data) {
    const id = data.id;
    const instance = _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.backgroundSnapshotInstanceManager.values.get(id);
    let snapshotType = 'null';
    if (instance && instance.__snapshot_def) {
        for (const [snapshotId, snapshot] of _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotManager.values.entries())if (snapshot === instance.__snapshot_def) {
            snapshotType = snapshotId;
            break;
        }
    }
    lynx.reportError(new Error(`${errorMsg}, snapshot type: '${snapshotType}'`));
}
function addCtxNotFoundEventListener() {
    var _lynx_getCoreContext, _lynx;
    ctxNotFoundEventListener = (e)=>{
        reportCtxNotFound(e.data);
    };
    (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx).addEventListener(ctxNotFoundType, ctxNotFoundEventListener);
}
function removeCtxNotFoundEventListener() {
    var _lynx_getCoreContext, _lynx;
    const coreContext = (_lynx_getCoreContext = (_lynx = lynx).getCoreContext) === null || _lynx_getCoreContext === void 0 ? void 0 : _lynx_getCoreContext.call(_lynx);
    if (coreContext && ctxNotFoundEventListener) {
        coreContext.removeEventListener(ctxNotFoundType, ctxNotFoundEventListener);
        ctxNotFoundEventListener = null;
    }
} //# sourceMappingURL=error.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrating.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isMainThreadHydrating: () => (isMainThreadHydrating),
  setMainThreadHydrating: () => (setMainThreadHydrating)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let isMainThreadHydrating = false;
function setMainThreadHydrating(isHydrating) {
    if (!isHydrating && isMainThreadHydrating) (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.onHydrationFinished)();
    isMainThreadHydrating = isHydrating;
} //# sourceMappingURL=isMainThreadHydrating.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SnapshotOperation: () => (SnapshotOperation),
  SnapshotOperationParams: () => (SnapshotOperationParams),
  __globalSnapshotPatch: () => (__globalSnapshotPatch),
  deinitGlobalSnapshotPatch: () => (deinitGlobalSnapshotPatch),
  initGlobalSnapshotPatch: () => (initGlobalSnapshotPatch),
  takeGlobalSnapshotPatch: () => (takeGlobalSnapshotPatch)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Defines the core patch operations for the snapshot system.
 * The patch operations are designed to be serializable and minimal, allowing
 * efficient transmission between threads and application to element tree.
 */ const SnapshotOperation = {
    CreateElement: 0,
    InsertBefore: 1,
    RemoveChild: 2,
    SetAttribute: 3,
    SetAttributes: 4,
    DEV_ONLY_AddSnapshot: 100,
    DEV_ONLY_RegisterWorklet: 101
};
const SnapshotOperationParams = /* @__PURE__ */ {
    [SnapshotOperation.CreateElement]: {
        name: 'CreateElement',
        params: [
            'type',
            /* string */ 'id' /* number */ 
        ]
    },
    [SnapshotOperation.InsertBefore]: {
        name: 'InsertBefore',
        params: [
            'parentId',
            /* number */ 'childId',
            /* number */ 'beforeId' /* number | undefined */ 
        ]
    },
    [SnapshotOperation.RemoveChild]: {
        name: 'RemoveChild',
        params: [
            'parentId',
            /* number */ 'childId' /* number */ 
        ]
    },
    [SnapshotOperation.SetAttribute]: {
        name: 'SetAttribute',
        params: [
            'id',
            /* number */ 'dynamicPartIndex',
            /* number */ 'value' /* any */ 
        ]
    },
    [SnapshotOperation.SetAttributes]: {
        name: 'SetAttributes',
        params: [
            'id',
            /* number */ 'values' /* any */ 
        ]
    },
    [SnapshotOperation.DEV_ONLY_AddSnapshot]: {
        name: 'DEV_ONLY_AddSnapshot',
        params: [
            'uniqID',
            /* string */ 'create',
            /* string */ 'update',
            /* string[] */ 'slot',
            /* [DynamicPartType, number][] */ 'cssId',
            /* number | undefined */ 'entryName'
        ]
    },
    [SnapshotOperation.DEV_ONLY_RegisterWorklet]: {
        name: 'DEV_ONLY_RegisterWorklet',
        params: [
            'hash',
            /* string */ 'fnStr' /* string */ 
        ]
    }
};
let __globalSnapshotPatch;
function takeGlobalSnapshotPatch() {
    if (__globalSnapshotPatch) {
        const list = __globalSnapshotPatch;
        __globalSnapshotPatch = [];
        return list;
    } else return undefined;
}
function initGlobalSnapshotPatch() {
    __globalSnapshotPatch = [];
}
function deinitGlobalSnapshotPatch() {
    __globalSnapshotPatch = undefined;
} //# sourceMappingURL=snapshotPatch.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatchApply.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  snapshotPatchApply: () => (snapshotPatchApply)
});
/* ESM import */var _error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/error.js");
/* ESM import */var _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the patch application logic for the snapshot system.
 * This module is responsible for interpreting and executing patch operations
 * that were generated in the background thread, applying them to the DOM
 * in the main thread.
 *
 * The module handles various operations like element creation, insertion,
 * removal, and attribute updates, ensuring they are applied in the correct
 * order and with proper error handling.
 */ 


/**
 * Applies a patch of snapshot operations to the main thread.
 * This is the counterpart to the patch generation in the background thread.
 * Each operation in the patch is processed sequentially to update the DOM.
 */ function snapshotPatchApply(snapshotPatch) {
    const length = snapshotPatch.length;
    for(let i = 0; i < length; ++i)switch(snapshotPatch[i]){
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotOperation.CreateElement:
            {
                const type = snapshotPatch[++i];
                const id = snapshotPatch[++i];
                new _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.SnapshotInstance(type, id);
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotOperation.InsertBefore:
            {
                const parentId = snapshotPatch[++i];
                const childId = snapshotPatch[++i];
                const beforeId = snapshotPatch[++i];
                const parent = _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.snapshotInstanceManager.values.get(parentId);
                const child = _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.snapshotInstanceManager.values.get(childId);
                const existingNode = _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.snapshotInstanceManager.values.get(beforeId);
                if (!parent || !child) (0,_error_js__WEBPACK_IMPORTED_MODULE_0__.sendCtxNotFoundEventToBackground)(parent ? childId : parentId);
                else parent.insertBefore(child, existingNode);
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotOperation.RemoveChild:
            {
                const parentId = snapshotPatch[++i];
                const childId = snapshotPatch[++i];
                const parent = _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.snapshotInstanceManager.values.get(parentId);
                const child = _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.snapshotInstanceManager.values.get(childId);
                if (!parent || !child) (0,_error_js__WEBPACK_IMPORTED_MODULE_0__.sendCtxNotFoundEventToBackground)(parent ? childId : parentId);
                else parent.removeChild(child);
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotOperation.SetAttribute:
            {
                const id = snapshotPatch[++i];
                const dynamicPartIndex = snapshotPatch[++i];
                const value = snapshotPatch[++i];
                const si = _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.snapshotInstanceManager.values.get(id);
                if (si) si.setAttribute(dynamicPartIndex, value);
                else (0,_error_js__WEBPACK_IMPORTED_MODULE_0__.sendCtxNotFoundEventToBackground)(id);
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotOperation.SetAttributes:
            {
                const id = snapshotPatch[++i];
                const values = snapshotPatch[++i];
                const si = _snapshot_js__WEBPACK_IMPORTED_MODULE_2__.snapshotInstanceManager.values.get(id);
                if (si) si.setAttribute('values', values);
                else (0,_error_js__WEBPACK_IMPORTED_MODULE_0__.sendCtxNotFoundEventToBackground)(id);
                break;
            }
        case _snapshotPatch_js__WEBPACK_IMPORTED_MODULE_1__.SnapshotOperation.DEV_ONLY_AddSnapshot:
            if (true) {
                const uniqID = snapshotPatch[++i];
                const create = snapshotPatch[++i];
                const update = snapshotPatch[++i];
                const slot = snapshotPatch[++i];
                var _snapshotPatch_;
                const cssId = (_snapshotPatch_ = snapshotPatch[++i]) !== null && _snapshotPatch_ !== void 0 ? _snapshotPatch_ : 0;
                const entryName = snapshotPatch[++i];
                if (!_snapshot_js__WEBPACK_IMPORTED_MODULE_2__.snapshotManager.values.has((0,_snapshot_js__WEBPACK_IMPORTED_MODULE_2__.entryUniqID)(uniqID, entryName))) // Update the evaluated snapshots from JS.
                (0,_snapshot_js__WEBPACK_IMPORTED_MODULE_2__.createSnapshot)(uniqID, evaluate(create), update.map(evaluate), slot, cssId, entryName, null);
            }
            break;
    }
}
/* v8 ignore start */ /**
 * Evaluates a string as code with ReactLynx runtime injected.
 * Used for HMR (Hot Module Replacement) to update snapshot definitions.
 */ function evaluate(code) {
    if (true) // See: https://github.com/lynx-family/lynx-stack/issues/983.
    return eval(`(() => ${code})()`);
    throw new Error('unreachable: evaluate is not supported in production');
} /* v8 ignore stop */  //# sourceMappingURL=snapshotPatchApply.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/updateMainThread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  injectUpdateMainThread: () => (injectUpdateMainThread)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrating.js");
/* ESM import */var _snapshotPatchApply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatchApply.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
/* ESM import */var _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js");
/* ESM import */var _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.









function updateMainThread({ data, patchOptions }) {
    if (patchOptions.reloadVersion < (0,_pass_js__WEBPACK_IMPORTED_MODULE_8__.getReloadVersion)()) return;
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.setPipeline)(patchOptions.pipelineOptions);
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)('mtsRenderStart');
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)('parseChangesStart');
    const { patchList, flushOptions = {} } = JSON.parse(data);
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)('parseChangesEnd');
    (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)('patchChangesStart');
    if (patchOptions.isHydration) (0,_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__.setMainThreadHydrating)(true);
    try {
        for (const { snapshotPatch, workletRefInitValuePatch } of patchList){
            (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.updateWorkletRefInitValueChanges)(workletRefInitValuePatch);
            _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_5__.__pendingListUpdates.clear();
            if (snapshotPatch) (0,_snapshotPatchApply_js__WEBPACK_IMPORTED_MODULE_2__.snapshotPatchApply)(snapshotPatch);
            _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_5__.__pendingListUpdates.flush();
        // console.debug('********** Lepus updatePatch:');
        // printSnapshotInstance(snapshotInstanceManager.values.get(-1)!);
        }
    } finally{
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)('patchChangesEnd');
        (0,_lynx_performance_js__WEBPACK_IMPORTED_MODULE_4__.markTiming)('mtsRenderEnd');
        if (patchOptions.isHydration) (0,_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__.setMainThreadHydrating)(false);
    }
    (0,_snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_6__.applyRefQueue)();
    if (patchOptions.pipelineOptions) flushOptions.pipelineOptions = patchOptions.pipelineOptions;
    __FlushElementTree(_snapshot_js__WEBPACK_IMPORTED_MODULE_7__.__page, flushOptions);
}
function injectUpdateMainThread() {
    Object.assign(globalThis, {
        [_lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_3__.LifecycleConstant.patchUpdate]: updateMainThread
    });
}
/**
 * @internal
 */  //# sourceMappingURL=updateMainThread.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/ref/delay.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RefProxy: () => (RefProxy),
  runDelayedUiOps: () => (runDelayedUiOps),
  shouldDelayUiOps: () => (shouldDelayUiOps)
});
/* ESM import */var _snapshotInstanceHydrationMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshotInstanceHydrationMap.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * A flag to indicate whether UI operations should be delayed.
 * When set to true, UI operations will be queued in the `delayedUiOps` array
 * and executed later when `runDelayedUiOps` is called.
 * This is used before hydration to ensure UI operations are batched
 * and executed at the appropriate time.
 */ const shouldDelayUiOps = {
    value: true
};
/**
 * An array of functions that will be executed later when `runDelayedUiOps` is called.
 * These functions contain UI operations that need to be delayed.
 */ const delayedUiOps = [];
/**
 * Runs a task either immediately or delays it based on the `shouldDelayUiOps` flag.
 * @param task - The function to execute.
 */ function runOrDelay(task) {
    if (shouldDelayUiOps.value) delayedUiOps.push(task);
    else task();
}
/**
 * Executes all delayed UI operations.
 */ function runDelayedUiOps() {
    for (const task of delayedUiOps)task();
    shouldDelayUiOps.value = false;
    delayedUiOps.length = 0;
}
/**
 * A proxy class designed for managing and executing reference-based tasks.
 * It delays the execution of tasks until hydration is complete.
 */ class RefProxy {
    setTask(method, args) {
        this.task = (nodesRef)=>{
            return nodesRef[method](...args);
        };
        return this;
    }
    invoke(...args) {
        return new RefProxy(this.refAttr).setTask('invoke', args);
    }
    path(...args) {
        return new RefProxy(this.refAttr).setTask('path', args);
    }
    fields(...args) {
        return new RefProxy(this.refAttr).setTask('fields', args);
    }
    setNativeProps(...args) {
        return new RefProxy(this.refAttr).setTask('setNativeProps', args);
    }
    exec() {
        runOrDelay(()=>{
            var _hydrationMap_get;
            const realRefId = (_hydrationMap_get = _snapshotInstanceHydrationMap_js__WEBPACK_IMPORTED_MODULE_0__.hydrationMap.get(this.refAttr[0])) !== null && _hydrationMap_get !== void 0 ? _hydrationMap_get : this.refAttr[0];
            const refSelector = `[react-ref-${realRefId}-${this.refAttr[1]}]`;
            this.task(lynx.createSelectorQuery().select(refSelector)).exec();
        });
    }
    constructor(refAttr){
        this.refAttr = refAttr;
    }
}
/**
 * @internal
 */  //# sourceMappingURL=delay.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/reload.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  reloadBackground: () => (reloadBackground),
  reloadMainThread: () => (reloadMainThread)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/destroy.js");
/* ESM import */var _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _worklet_destroy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
/* ESM import */var _event_jsReady_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/jsReady.js");
/* ESM import */var _pass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/pass.js");
/* ESM import */var _patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/snapshotPatch.js");
/* ESM import */var _ref_delay_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/ref/delay.js");
/* ESM import */var _render_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/render.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the reload (thinking of "refresh" in browser) for both main thread
 * and background thread.
 */ 














function reloadMainThread(data, options) {
    if (true) console.profile('reloadTemplate');
    (0,_pass_js__WEBPACK_IMPORTED_MODULE_11__.increaseReloadVersion)();
    if (typeof data == 'object' && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.isEmptyObject)(data)) Object.assign(lynx.__initData, data);
    (0,_worklet_destroy_js__WEBPACK_IMPORTED_MODULE_9__.destroyWorklet)();
    _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.snapshotInstanceManager.clear();
    _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_3__.__pendingListUpdates.clear();
    (0,_event_jsReady_js__WEBPACK_IMPORTED_MODULE_10__.clearJSReadyEventIdSwap)();
    const oldRoot = _root_js__WEBPACK_IMPORTED_MODULE_4__.__root;
    (0,_root_js__WEBPACK_IMPORTED_MODULE_4__.setRoot)(new _snapshot_js__WEBPACK_IMPORTED_MODULE_7__.SnapshotInstance('root'));
    _root_js__WEBPACK_IMPORTED_MODULE_4__.__root.__jsx = oldRoot.__jsx;
    (0,_render_js__WEBPACK_IMPORTED_MODULE_14__.renderMainThread)();
    (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_1__.hydrate)(oldRoot, _root_js__WEBPACK_IMPORTED_MODULE_4__.__root, {
        skipUnRef: true
    });
    // always call this before `__FlushElementTree`
    _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_3__.__pendingListUpdates.flush();
    (0,_snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_6__.applyRefQueue)();
    if (_event_jsReady_js__WEBPACK_IMPORTED_MODULE_10__.isJSReady) __OnLifecycleEvent([
        _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_2__.LifecycleConstant.firstScreen,
        /* FIRST_SCREEN */ {
            root: JSON.stringify(_root_js__WEBPACK_IMPORTED_MODULE_4__.__root)
        }
    ]);
    __FlushElementTree(_snapshot_js__WEBPACK_IMPORTED_MODULE_7__.__page, options);
    if (true) console.profileEnd();
    return;
}
function reloadBackground(updateData) {
    if (true) console.profile('reload');
    (0,_patch_snapshotPatch_js__WEBPACK_IMPORTED_MODULE_12__.deinitGlobalSnapshotPatch)();
    (0,_destroy_js__WEBPACK_IMPORTED_MODULE_5__.destroyBackground)();
    (0,_pass_js__WEBPACK_IMPORTED_MODULE_11__.increaseReloadVersion)();
    // COW when modify `lynx.__initData` to make sure Provider & Consumer works
    lynx.__initData = Object.assign({}, lynx.__initData, updateData);
    _ref_delay_js__WEBPACK_IMPORTED_MODULE_13__.shouldDelayUiOps.value = true;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(_root_js__WEBPACK_IMPORTED_MODULE_4__.__root.__jsx, _root_js__WEBPACK_IMPORTED_MODULE_4__.__root);
    if (true) console.profileEnd();
}
 //# sourceMappingURL=reload.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  renderMainThread: () => (renderMainThread)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _opcodes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/opcodes.js");
/* ESM import */var _renderToOpcodes_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/index.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements the IFR (Instant First-Frame Rendering) on main thread.
 */ 



function renderMainThread() {
    /* v8 ignore start */ if (false) {}
    else {
        let opcodes;
        try {
            if (true) console.profile('renderToString');
            opcodes = (0,_renderToOpcodes_index_js__WEBPACK_IMPORTED_MODULE_2__.render)(_root_js__WEBPACK_IMPORTED_MODULE_3__.__root.__jsx, undefined);
        } catch (e) {
            lynx.reportError(e);
            opcodes = [];
        } finally{
            if (true) console.profileEnd();
        }
        if (true) console.profile('renderOpcodesInto');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        (0,_opcodes_js__WEBPACK_IMPORTED_MODULE_1__.renderOpcodesInto)(opcodes, _root_js__WEBPACK_IMPORTED_MODULE_3__.__root);
        if (false) {}
        if (true) console.profileEnd();
    }
/* v8 ignore stop */ }
 //# sourceMappingURL=render.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearListGlobal: () => (clearListGlobal),
  componentAtIndexFactory: () => (componentAtIndexFactory),
  enqueueComponentFactory: () => (enqueueComponentFactory),
  gRecycleMap: () => (gRecycleMap),
  gSignMap: () => (gSignMap)
});
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



const gSignMap = {};
const gRecycleMap = {};
const gParentWeakMap = new WeakMap();
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
function clearListGlobal() {
    for(const key in gSignMap)delete gSignMap[key];
    for(const key in gRecycleMap)delete gRecycleMap[key];
}
function componentAtIndexFactory(ctx, hydrateFunction) {
    // A hack workaround to ensure childCtx has no direct reference through `__parent` to list,
    // to avoid memory leak.
    // TODO(hzy): make `__parent` a WeakRef or `#__parent` in the future.
    ctx.forEach((childCtx)=>{
        if (gParentWeakMap.has(childCtx)) ;
        else {
            gParentWeakMap.set(childCtx, childCtx.parentNode);
            Object.defineProperty(childCtx, '__parent', {
                get: ()=>gParentWeakMap.get(childCtx),
                set: (value)=>{
                    gParentWeakMap.set(childCtx, value);
                }
            });
        }
    });
    const componentAtChildCtx = (list, listID, childCtx, operationID, enableReuseNotification, enableBatchRender = false, asyncFlush = false)=>{
        var _childCtx___extraProps, _childCtx___extraProps1;
        const signMap = gSignMap[listID];
        const recycleMap = gRecycleMap[listID];
        if (!signMap || !recycleMap) throw new Error('componentAtIndex called on removed list');
        var _childCtx___listItemPlatformInfo;
        const platformInfo = (_childCtx___listItemPlatformInfo = childCtx.__listItemPlatformInfo) !== null && _childCtx___listItemPlatformInfo !== void 0 ? _childCtx___listItemPlatformInfo : {};
        // The lifecycle of this `__extraProps.isReady`:
        //   0 -> Promise<number> -> 1
        // 0: The initial state, the list-item is not ready yet, we will send a event to background
        //    when `componentAtIndex` is called on it
        // Promise<number>: A promise that will be resolved when the list-item is ready
        // 1: The list-item is ready, we can use it to render the list
        if (((_childCtx___extraProps = childCtx.__extraProps) === null || _childCtx___extraProps === void 0 ? void 0 : _childCtx___extraProps['isReady']) === 0) {
            if (typeof __GetAttributeByName === 'function' && __GetAttributeByName(list, 'custom-list-name') === 'list-container') ;
            else throw new Error('Unsupported: `<list-item/>` with `defer={true}` must be used with `<list custom-list-name="list-container"/>`');
            __OnLifecycleEvent([
                _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__.LifecycleConstant.publishEvent,
                {
                    handlerName: `${childCtx.__id}:__extraProps:onComponentAtIndex`,
                    data: {}
                }
            ]);
            let p;
            return p = new Promise((resolve)=>{
                Object.defineProperty(childCtx.__extraProps, 'isReady', {
                    set (isReady) {
                        if (isReady === 1) {
                            delete childCtx.__extraProps['isReady'];
                            childCtx.__extraProps['isReady'] = 1;
                            resolvedPromise.then(()=>{
                                // the cellIndex may be changed already, but the `childCtx` is the same
                                resolve(componentAtChildCtx(list, listID, childCtx, operationID, enableReuseNotification));
                            });
                        }
                    },
                    get () {
                        return p;
                    }
                });
            });
        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.maybePromise)((_childCtx___extraProps1 = childCtx.__extraProps) === null || _childCtx___extraProps1 === void 0 ? void 0 : _childCtx___extraProps1['isReady'])) throw new Error('componentAtIndex was called on a pending deferred list item');
        var _platformInfo_reuseidentifier;
        const uniqID = childCtx.type + ((_platformInfo_reuseidentifier = platformInfo['reuse-identifier']) !== null && _platformInfo_reuseidentifier !== void 0 ? _platformInfo_reuseidentifier : '');
        const recycleSignMap = recycleMap.get(uniqID);
        if (childCtx.__elements) {
            /**
             * If this situation is encountered, there might be two cases:
             * 1. Reusing with itself
             *    In this case, enqueueComponent will be triggered first, followed by componentAtIndex.
             * 2. Moving
             *    In this case, the trigger order is uncertain; componentAtIndex might be triggered first, or enqueueComponent might be triggered first.
             *
             * When enqueueComponent is triggered first, there must be an item in the reuse pool with the same sign as here, which can be returned directly.
             * When componentAtIndex is triggered first, a clone needs to be made first, then follow the logic for adding or reusing. The cloned item will enter the reuse pool in the subsequent enqueueComponent.
             */ const root = childCtx.__elements[0];
            const sign = __GetElementUniqueID(root);
            if (recycleSignMap === null || recycleSignMap === void 0 ? void 0 : recycleSignMap.has(sign)) {
                signMap.set(sign, childCtx);
                recycleSignMap.delete(sign);
                if (!enableBatchRender) __FlushElementTree(root, {
                    triggerLayout: true,
                    operationID,
                    elementID: sign,
                    listID
                });
                else if (enableBatchRender && asyncFlush) __FlushElementTree(root, {
                    asyncFlush: true
                });
                // enableBatchRender == true && asyncFlush == false
                // in this case, no need to invoke __FlushElementTree because in the end of componentAtIndexes(), the list will invoke __FlushElementTree.
                return sign;
            } else {
                const newCtx = childCtx.takeElements();
                signMap.set(sign, newCtx);
            }
        }
        if (recycleSignMap && recycleSignMap.size > 0) {
            var _oldCtx___extraProps;
            const [first] = recycleSignMap;
            const [sign, oldCtx] = first;
            recycleSignMap.delete(sign);
            hydrateFunction(oldCtx, childCtx);
            oldCtx.unRenderElements();
            if (!oldCtx.__id) oldCtx.tearDown();
            else if (((_oldCtx___extraProps = oldCtx.__extraProps) === null || _oldCtx___extraProps === void 0 ? void 0 : _oldCtx___extraProps['isReady']) === 1) __OnLifecycleEvent([
                _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_0__.LifecycleConstant.publishEvent,
                {
                    handlerName: `${oldCtx.__id}:__extraProps:onRecycleComponent`,
                    data: {}
                }
            ]);
            const root = childCtx.__element_root;
            (0,_snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_1__.applyRefQueue)();
            if (!enableBatchRender) {
                const flushOptions = {
                    triggerLayout: true,
                    operationID,
                    elementID: sign,
                    listID
                };
                if (enableReuseNotification) flushOptions.listReuseNotification = {
                    listElement: list,
                    itemKey: platformInfo['item-key']
                };
                __FlushElementTree(root, flushOptions);
            } else if (enableBatchRender && asyncFlush) {
                const flushOptions = {
                    asyncFlush: true
                };
                if (enableReuseNotification) flushOptions.listReuseNotification = {
                    listElement: list,
                    itemKey: platformInfo['item-key']
                };
                __FlushElementTree(root, flushOptions);
            }
            signMap.set(sign, childCtx);
            return sign;
        }
        childCtx.ensureElements();
        const root = childCtx.__element_root;
        __AppendElement(list, root);
        const sign = __GetElementUniqueID(root);
        (0,_snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_1__.applyRefQueue)();
        if (!enableBatchRender) __FlushElementTree(root, {
            triggerLayout: true,
            operationID,
            elementID: sign,
            listID
        });
        else if (enableBatchRender && asyncFlush) __FlushElementTree(root, {
            asyncFlush: true
        });
        signMap.set(sign, childCtx);
        return sign;
    };
    function componentAtIndex(list, listID, cellIndex, operationID, enableReuseNotification) {
        const childCtx = ctx[cellIndex];
        if (!childCtx) throw new Error('childCtx not found');
        const r = componentAtChildCtx(list, listID, childCtx, operationID, enableReuseNotification);
        /* v8 ignore start */ if (false) {}
        else return typeof r === 'number' ? r : undefined;
    /* v8 ignore end */ }
    function componentAtIndexes(list, listID, cellIndexes, operationIDs, enableReuseNotification, asyncFlush) {
        let hasUnready = false;
        const p = [];
        cellIndexes.forEach((cellIndex, index)=>{
            const operationID = operationIDs[index];
            const childCtx = ctx[cellIndex];
            if (!childCtx) throw new Error('childCtx not found');
            const u = componentAtChildCtx(list, listID, childCtx, operationID, enableReuseNotification, true, asyncFlush);
            if (typeof u === 'number') ;
            else hasUnready = true;
            p.push(u);
        });
        // We need __FlushElementTree twice:
        // 1. The first time is sync, we flush the items that are ready, with unready items' uiSign as -1.
        // 2. The second time is async, with all the uiSigns.
        // NOTE: The `operationIDs` passed to __FlushElementTree must be the one passed in,
        // not the one generated by any code here, to workaround a bug of Lynx Engine.
        // So we CANNOT split the `operationIDs` into two parts: one for ready items, one for unready items.
        if (hasUnready) Promise.all(p).then((uiSigns)=>{
            __FlushElementTree(list, {
                triggerLayout: true,
                operationIDs,
                elementIDs: uiSigns,
                listID
            });
        });
        __FlushElementTree(list, {
            triggerLayout: true,
            operationIDs,
            elementIDs: cellIndexes.map((_, index)=>typeof p[index] === 'number' ? p[index] : -1),
            listID
        });
    }
    return [
        componentAtIndex,
        componentAtIndexes
    ];
}
function enqueueComponentFactory() {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    const enqueueComponent = (_, listID, sign)=>{
        const signMap = gSignMap[listID];
        const recycleMap = gRecycleMap[listID];
        if (!signMap || !recycleMap) throw new Error('enqueueComponent called on removed list');
        const childCtx = signMap.get(sign);
        if (!childCtx) return;
        var _childCtx___listItemPlatformInfo;
        const platformInfo = (_childCtx___listItemPlatformInfo = childCtx.__listItemPlatformInfo) !== null && _childCtx___listItemPlatformInfo !== void 0 ? _childCtx___listItemPlatformInfo : {};
        var _platformInfo_reuseidentifier;
        const uniqID = childCtx.type + ((_platformInfo_reuseidentifier = platformInfo['reuse-identifier']) !== null && _platformInfo_reuseidentifier !== void 0 ? _platformInfo_reuseidentifier : '');
        if (!recycleMap.has(uniqID)) recycleMap.set(uniqID, new Map());
        recycleMap.get(uniqID).set(sign, childCtx);
    };
    return enqueueComponent;
} //# sourceMappingURL=list.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/listUpdateInfo.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ListUpdateInfoRecording: () => (ListUpdateInfoRecording)
});
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


class ListUpdateInfoRecording {
    // private __commitAndReset() {
    //   (this.__pendingAttributes ??= []).push(this.__toAttribute());
    //   this.oldChildNodes = this.list.childNodes;
    //   this.oldChildNodesSet = new Set(this.oldChildNodes);
    //   this.removeChild1.clear();
    //   this.removeChild2.clear();
    //   this.insertBefore.clear();
    //   this.appendChild.length = 0;
    //   this.platformInfoUpdate.clear();
    // }
    flush() {
        const elementIndex = this.list.__snapshot_def.slot[0][1];
        const listElement = this.list.__elements[elementIndex];
        // this.__pendingAttributes?.forEach(pendingAttribute => {
        //   __SetAttribute(listElement, "update-list-info", pendingAttribute);
        //   __FlushElementTree(listElement);
        // });
        __SetAttribute(listElement, 'update-list-info', this.__toAttribute());
        const [componentAtIndex, componentAtIndexes] = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.componentAtIndexFactory)(this.list.childNodes, _hydrate_js__WEBPACK_IMPORTED_MODULE_0__.hydrate);
        __UpdateListCallbacks(listElement, componentAtIndex, (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.enqueueComponentFactory)(), componentAtIndexes);
    }
    onInsertBefore(newNode, existingNode) {
        if (newNode.parentNode) //   this.__commitAndReset();
        // }
        this.removeChild.add(newNode);
        if (existingNode) {
            var _this_insertBefore_get;
            // if (!this.oldChildNodesSet.has(existingNode)) {
            //   this.__commitAndReset();
            // }
            const newChildren = (_this_insertBefore_get = this.insertBefore.get(existingNode)) !== null && _this_insertBefore_get !== void 0 ? _this_insertBefore_get : [];
            newChildren.push(newNode);
            this.insertBefore.set(existingNode, newChildren);
        } else this.appendChild.push(newNode);
    }
    onRemoveChild(child) {
        // if (!this.oldChildNodesSet.has(child)) {
        //   this.__commitAndReset();
        // }
        this.removeChild.add(child);
    }
    onSetAttribute(child, attr, _oldAttr) {
        this.platformInfoUpdate.set(child, attr);
    }
    __toAttribute() {
        const { removeChild, insertBefore, appendChild, platformInfoUpdate } = this;
        const removals = [];
        const insertions = [];
        const updates = [];
        let j = 0;
        for(let i = 0; i < this.oldChildNodes.length; i++, j++){
            const child = this.oldChildNodes[i];
            if (platformInfoUpdate.has(child)) updates.push({
                ...platformInfoUpdate.get(child),
                from: +j,
                to: +j,
                // no flush
                flush: false,
                type: child.type
            });
            if (insertBefore.has(child)) {
                const children = insertBefore.get(child);
                children.forEach((c)=>{
                    insertions.push({
                        position: j,
                        type: c.type,
                        ...c.__listItemPlatformInfo
                    });
                    j++;
                });
            }
            if (removeChild.has(child)) {
                removals.push(i);
                removeChild.delete(child);
                j--;
            }
        }
        for(let i = 0; i < appendChild.length; i++){
            const child = appendChild[i];
            insertions.push({
                position: j + i,
                type: child.type,
                ...child.__listItemPlatformInfo
            });
        }
        insertions.sort((a, b)=>a.position - b.position);
        removals.sort((a, b)=>a - b);
        if (SystemInfo.lynxSdkVersion === '2.14' || SystemInfo.lynxSdkVersion === '2.15' || SystemInfo.lynxSdkVersion === '2.16' || SystemInfo.lynxSdkVersion === '2.17' || SystemInfo.lynxSdkVersion === '2.18') {
            const elementIndex = this.list.__snapshot_def.slot[0][1];
            const listElement = this.list.__elements[elementIndex];
            // `__GetAttributeByName` is available since Lynx 2.14
            if (__GetAttributeByName(listElement, 'custom-list-name') === 'list-container') {
                // `updateAction` must be full (not incremental) when Lynx version <= 2.18 and
                // when `custom-list-name` is `list-container` (available when Lynx version >= 2.14) is true,
                updates.length = 0;
                this.list.childNodes.forEach((child, index)=>{
                    updates.push({
                        ...child.__listItemPlatformInfo,
                        from: index,
                        to: index,
                        // no flush
                        flush: false,
                        type: child.type
                    });
                });
            }
        }
        return {
            insertAction: insertions,
            removeAction: removals,
            updateAction: updates
        };
    }
    toJSON() {
        // if (this.__pendingAttributes) {
        //   return [...this.__pendingAttributes, this.__toAttribute()];
        // } else {
        //   return [this.__toAttribute()];
        // }
        return [
            this.__toAttribute()
        ];
    }
    constructor(list){
        // private oldChildNodesSet: Set<SnapshotInstance>;
        this.removeChild = new Set();
        this.insertBefore = new Map();
        this.appendChild = [];
        this.platformInfoUpdate = new Map();
        this.list = list;
        this.oldChildNodes = list.childNodes;
    // this.oldChildNodesSet = new Set(this.oldChildNodes);
    }
} //# sourceMappingURL=listUpdateInfo.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx-api.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InitDataConsumer: () => (InitDataConsumer),
  InitDataProvider: () => (InitDataProvider),
  MainThreadRef: () => (/* reexport safe */ _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_7__.MainThreadRef),
  root: () => (root),
  runOnBackground: () => (/* reexport safe */ _worklet_runOnBackground_js__WEBPACK_IMPORTED_MODULE_5__.runOnBackground),
  runOnMainThread: () => (/* reexport safe */ _worklet_runOnMainThread_js__WEBPACK_IMPORTED_MODULE_6__.runOnMainThread),
  useInitData: () => (useInitData),
  useInitDataChanged: () => (useInitDataChanged),
  useLynxGlobalEventListener: () => (/* reexport safe */ _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_3__.useLynxGlobalEventListener),
  useMainThreadRef: () => (/* reexport safe */ _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_7__.useMainThreadRef),
  withInitDataInState: () => (/* reexport safe */ _compat_initData_js__WEBPACK_IMPORTED_MODULE_2__.withInitDataInState)
});
/* ESM import */var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs");
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/preact/hooks/dist/hooks.mjs");
/* ESM import */var _compat_initData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/compat/initData.js");
/* ESM import */var _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/useLynxGlobalEventListener.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _worklet_runOnBackground_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js");
/* ESM import */var _worklet_runOnMainThread_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnMainThread.js");
/* ESM import */var _worklet_workletRef_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRef.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.





/**
 * The default and only root of ReactLynx for you to render JSX
 * @example
 * ```ts
 * import { root } from "@lynx-js/react"
 * ```
 *
 * @public
 */ const root = {
    render: (jsx)=>{
        _root_js__WEBPACK_IMPORTED_MODULE_4__.__root.__jsx = jsx;
    },
    /* v8 ignore next 3 */ registerDataProcessors: (dataProcessorDefinition)=>{
        lynx.registerDataProcessors(dataProcessorDefinition);
    }
};
const _InitData = /* @__PURE__ */ (0,_compat_initData_js__WEBPACK_IMPORTED_MODULE_2__.factory)({
    createContext: preact_compat__WEBPACK_IMPORTED_MODULE_0__.createContext,
    useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
    createElement: preact_compat__WEBPACK_IMPORTED_MODULE_0__.createElement,
    useLynxGlobalEventListener: _hooks_useLynxGlobalEventListener_js__WEBPACK_IMPORTED_MODULE_3__.useLynxGlobalEventListener
}, '__initData', 'onDataChanged');
/**
 * The {@link https://react.dev/reference/react/createContext#provider | Provider} Component that provide `initData`,
 * you must wrap your JSX inside it
 * @group Components
 *
 * @example
 *
 * ```ts
 * import { root } from "@lynx-js/react"
 *
 * function App() {
 *   return (
 *     <InitDataConsumer children={(initData) => <view>...</view>}/>
 *   )
 * }
 *
 * root.render(
 *   <InitDataProvider>
 *      <App/>
 *   </InitDataProvider>
 * );
 *
 * ```
 *
 * @public
 */ // @ts-expect-error make preact and react types work
const InitDataProvider = /* @__PURE__ */ _InitData.Provider();
/**
 * The {@link https://react.dev/reference/react/createContext#consumer | Consumer} Component that provide `initData`.
 * This should be used with {@link InitDataProvider}
 * @group Components
 * @public
 */ // @ts-expect-error make preact and react types work
const InitDataConsumer = /* @__PURE__ */ _InitData.Consumer();
/**
 * A React Hooks for you to get `initData`.
 * If `initData` is changed, a re-render will be triggered automatically.
 *
 * @example
 *
 * ```ts
 * function App() {
 *   const initData = useInitData();
 *
 *   initData.someProperty // use it
 * }
 * ```
 *
 * @public
 */ const useInitData = /* @__PURE__ */ _InitData.use();
/**
 * A React Hooks for you to get notified when `initData` changed.
 *
 * @example
 * ```ts
 * function App() {
 *   useInitDataChanged((data) => {
 *     data.someProperty // can use it
 *   })
 * }
 * ```
 * @public
 */ const useInitDataChanged = /* @__PURE__ */ _InitData.useChanged();




 //# sourceMappingURL=lynx-api.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runWithForce: () => (/* reexport safe */ _lynx_runWithForce_js__WEBPACK_IMPORTED_MODULE_8__.runWithForce)
});
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");
/* ESM import */var _alog_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/alog/index.js");
/* ESM import */var _debug_component_stack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/debug/component-stack.js");
/* ESM import */var _debug_profile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/debug/profile.js");
/* ESM import */var _lifecycle_patch_updateMainThread_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/updateMainThread.js");
/* ESM import */var _lynx_calledByNative_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/calledByNative.js");
/* ESM import */var _lynx_env_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/env.js");
/* ESM import */var _lynx_injectLepusMethods_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/injectLepusMethods.js");
/* ESM import */var _lynx_runWithForce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/runWithForce.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// to make sure preact's hooks to register earlier than ours









// @ts-expect-error Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature
if (typeof globalThis.processEvalResult === 'undefined') globalThis.processEvalResult = (result, schema)=>{
    return result === null || result === void 0 ? void 0 : result(schema);
};
(0,_lynx_calledByNative_js__WEBPACK_IMPORTED_MODULE_5__.injectCalledByNative)();
(0,_lifecycle_patch_updateMainThread_js__WEBPACK_IMPORTED_MODULE_4__.injectUpdateMainThread)();
if (true) (0,_lynx_injectLepusMethods_js__WEBPACK_IMPORTED_MODULE_7__.injectLepusMethods)();
if (true) (0,_debug_component_stack_js__WEBPACK_IMPORTED_MODULE_2__.setupComponentStack)();
// TODO: replace this with __PROFILE__
if (true) (0,_debug_profile_js__WEBPACK_IMPORTED_MODULE_3__.initProfileHook)();
if (false) {}
(0,_lynx_env_js__WEBPACK_IMPORTED_MODULE_6__.setupLynxEnv)(); //# sourceMappingURL=lynx.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/calledByNative.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  injectCalledByNative: () => (injectCalledByNative)
});
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _lifecycle_event_jsReady_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/event/jsReady.js");
/* ESM import */var _lifecycle_reload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/reload.js");
/* ESM import */var _lifecycle_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/render.js");
/* ESM import */var _lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycleConstant.js");
/* ESM import */var _opcodes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/opcodes.js");
/* ESM import */var _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js");
/* ESM import */var _root_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js");
/* ESM import */var _snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _performance_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.












function ssrEncode() {
    const { __opcodes } = _root_js__WEBPACK_IMPORTED_MODULE_7__.__root;
    delete _root_js__WEBPACK_IMPORTED_MODULE_7__.__root.__opcodes;
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const oldToJSON = _snapshot_js__WEBPACK_IMPORTED_MODULE_9__.SnapshotInstance.prototype.toJSON;
    _snapshot_js__WEBPACK_IMPORTED_MODULE_9__.SnapshotInstance.prototype.toJSON = function() {
        return [
            this.type,
            this.__id,
            this.__elements
        ];
    };
    try {
        return JSON.stringify({
            __opcodes,
            __root_values: _root_js__WEBPACK_IMPORTED_MODULE_7__.__root.__values
        });
    } finally{
        _snapshot_js__WEBPACK_IMPORTED_MODULE_9__.SnapshotInstance.prototype.toJSON = oldToJSON;
    }
}
function ssrHydrate(info) {
    const nativePage = __GetPageElement();
    if (!nativePage) throw new Error('SSR Hydration Failed! Please check if the SSR content loaded successfully!');
    (0,_lifecycle_event_jsReady_js__WEBPACK_IMPORTED_MODULE_1__.resetJSReady)();
    (0,_snapshot_js__WEBPACK_IMPORTED_MODULE_9__.setupPage)(nativePage);
    const refsMap = __GetTemplateParts(nativePage);
    const { __opcodes, __root_values } = JSON.parse(info);
    if (__root_values) _root_js__WEBPACK_IMPORTED_MODULE_7__.__root.setAttribute('values', __root_values);
    (0,_opcodes_js__WEBPACK_IMPORTED_MODULE_5__.ssrHydrateByOpcodes)(__opcodes, _root_js__WEBPACK_IMPORTED_MODULE_7__.__root, refsMap);
    _root_js__WEBPACK_IMPORTED_MODULE_7__.__root.__elements = [
        nativePage
    ];
    _root_js__WEBPACK_IMPORTED_MODULE_7__.__root.__element_root = nativePage;
}
function injectCalledByNative() {
    if (false) {}
    const calledByNative = {
        renderPage,
        updatePage,
        updateGlobalProps,
        getPageData: function() {
            return null;
        },
        removeComponents: function() {},
        ... false ? 0 : {}
    };
    Object.assign(globalThis, calledByNative);
    Object.assign(globalThis, {
        [_lifecycleConstant_js__WEBPACK_IMPORTED_MODULE_4__.LifecycleConstant.jsReady]: _lifecycle_event_jsReady_js__WEBPACK_IMPORTED_MODULE_1__.jsReady
    });
}
function renderPage(data) {
    // reset `jsReady` state
    (0,_lifecycle_event_jsReady_js__WEBPACK_IMPORTED_MODULE_1__.resetJSReady)();
    lynx.__initData = data !== null && data !== void 0 ? data : {};
    (0,_snapshot_js__WEBPACK_IMPORTED_MODULE_9__.setupPage)(__CreatePage('0', 0));
    _root_js__WEBPACK_IMPORTED_MODULE_7__.__root.ensureElements();
    (0,_lifecycle_render_js__WEBPACK_IMPORTED_MODULE_3__.renderMainThread)();
    // always call this before `__FlushElementTree`
    // (There is an implicit `__FlushElementTree` in `renderPage`)
    _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_6__.__pendingListUpdates.flush();
    (0,_snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_8__.applyRefQueue)();
    if (true) (0,_lifecycle_event_jsReady_js__WEBPACK_IMPORTED_MODULE_1__.jsReady)();
}
function updatePage(data, options) {
    if (options === null || options === void 0 ? void 0 : options.reloadTemplate) {
        (0,_lifecycle_reload_js__WEBPACK_IMPORTED_MODULE_2__.reloadMainThread)(data, options);
        return;
    }
    if (options === null || options === void 0 ? void 0 : options.resetPageData) lynx.__initData = {};
    if (typeof data == 'object' && !(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__.isEmptyObject)(data)) {
        var _lynx;
        var ___initData;
        (___initData = (_lynx = lynx).__initData) !== null && ___initData !== void 0 ? ___initData : _lynx.__initData = {};
        Object.assign(lynx.__initData, data);
    }
    const flushOptions = options !== null && options !== void 0 ? options : {};
    if (!_lifecycle_event_jsReady_js__WEBPACK_IMPORTED_MODULE_1__.isJSReady) {
        const oldRoot = _root_js__WEBPACK_IMPORTED_MODULE_7__.__root;
        (0,_root_js__WEBPACK_IMPORTED_MODULE_7__.setRoot)(new _snapshot_js__WEBPACK_IMPORTED_MODULE_9__.SnapshotInstance('root'));
        _root_js__WEBPACK_IMPORTED_MODULE_7__.__root.__jsx = oldRoot.__jsx;
        (0,_performance_js__WEBPACK_IMPORTED_MODULE_11__.setPipeline)(options === null || options === void 0 ? void 0 : options.pipelineOptions);
        (0,_performance_js__WEBPACK_IMPORTED_MODULE_11__.markTiming)('updateDiffVdomStart');
        _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_6__.__pendingListUpdates.clear();
        (0,_lifecycle_render_js__WEBPACK_IMPORTED_MODULE_3__.renderMainThread)();
        // As said by codename `jsReadyEventIdSwap`, this swap will only be used for event remap,
        // because ref & unref cause by previous render will be ignored
        (0,_hydrate_js__WEBPACK_IMPORTED_MODULE_0__.hydrate)(oldRoot, _root_js__WEBPACK_IMPORTED_MODULE_7__.__root, {
            skipUnRef: true,
            swap: _lifecycle_event_jsReady_js__WEBPACK_IMPORTED_MODULE_1__.jsReadyEventIdSwap
        });
        // always call this before `__FlushElementTree`
        _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_6__.__pendingListUpdates.flush();
        (0,_snapshot_workletRef_js__WEBPACK_IMPORTED_MODULE_8__.applyRefQueue)();
        flushOptions.triggerDataUpdated = true;
        (0,_performance_js__WEBPACK_IMPORTED_MODULE_11__.markTiming)('updateDiffVdomEnd');
    }
    __FlushElementTree(_snapshot_js__WEBPACK_IMPORTED_MODULE_9__.__page, flushOptions);
}
function updateGlobalProps(_data, options) {
    if (options) __FlushElementTree(_snapshot_js__WEBPACK_IMPORTED_MODULE_9__.__page, options);
    else __FlushElementTree();
}
/**
 * @internal
 */  //# sourceMappingURL=calledByNative.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/component.js": (function () {
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/* eslint-disable */ //# sourceMappingURL=component.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/dynamic-js.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __dynamicImport: () => (__dynamicImport),
  loadDynamicJS: () => (loadDynamicJS)
});
/* ESM import */var _lazy_bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function loadDynamicJS(url) {
    _ReportError(new Error(`A dynamic import (to "${url}") is leaked to Lepus bundle.`), {
        errorCode: 202
    });
    // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
    return Promise.reject();
}
function __dynamicImport(url, options) {
    var _options_with;
    const t = options === null || options === void 0 ? void 0 : (_options_with = options.with) === null || _options_with === void 0 ? void 0 : _options_with.type;
    if (t === 'component' || t === 'tsx' || t === 'jsx') return (0,_lazy_bundle_js__WEBPACK_IMPORTED_MODULE_0__.loadLazyBundle)(url);
    else return loadDynamicJS(url);
} //# sourceMappingURL=dynamic-js.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/env.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  setupLynxEnv: () => (setupLynxEnv)
});
function setupLynxEnv() {
    lynx.__initData = {};
    var _lynx_SystemInfo;
    // @ts-expect-error no type for lynx.SystemInfo
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    globalThis.SystemInfo = (_lynx_SystemInfo = lynx.SystemInfo) !== null && _lynx_SystemInfo !== void 0 ? _lynx_SystemInfo : {};
    lynx.reportError = function(e) {
        _ReportError(e, {
            errorCode: 1101
        });
    };
    lynx.triggerGlobalEventFromLepus = function(eventName, params) {
        __OnLifecycleEvent([
            'globalEventFromLepus',
            [
                eventName,
                params
            ]
        ]);
    };
    {
        // eslint-disable-next-line unicorn/consistent-function-scoping
        function __name(empty) {
            return `Native${empty}Modules`;
        }
        // TODO(hongzhiyuan.hzy): make sure this is run before any other code (especially code access `NativeModules`)
        // @ts-expect-error hack
        if (typeof globalThis[__name('')] === 'undefined') globalThis[__name('')] = undefined;
    }
    lynx.registerDataProcessors = function(dataProcessorDefinition) {
        let hasDefaultDataProcessorExecuted = false;
        globalThis.processData = (data, processorName)=>{
            if (true) console.profile('processData');
            let r;
            try {
                var _dataProcessorDefinition_dataProcessors_processorName, _dataProcessorDefinition_dataProcessors, _dataProcessorDefinition_defaultDataProcessor;
                var _dataProcessorDefinition_dataProcessors_processorName1, _dataProcessorDefinition_defaultDataProcessor1;
                if (processorName) r = (_dataProcessorDefinition_dataProcessors_processorName1 = dataProcessorDefinition === null || dataProcessorDefinition === void 0 ? void 0 : (_dataProcessorDefinition_dataProcessors = dataProcessorDefinition.dataProcessors) === null || _dataProcessorDefinition_dataProcessors === void 0 ? void 0 : (_dataProcessorDefinition_dataProcessors_processorName = _dataProcessorDefinition_dataProcessors[processorName]) === null || _dataProcessorDefinition_dataProcessors_processorName === void 0 ? void 0 : _dataProcessorDefinition_dataProcessors_processorName.call(_dataProcessorDefinition_dataProcessors, data)) !== null && _dataProcessorDefinition_dataProcessors_processorName1 !== void 0 ? _dataProcessorDefinition_dataProcessors_processorName1 : data;
                else r = (_dataProcessorDefinition_defaultDataProcessor1 = dataProcessorDefinition === null || dataProcessorDefinition === void 0 ? void 0 : (_dataProcessorDefinition_defaultDataProcessor = dataProcessorDefinition.defaultDataProcessor) === null || _dataProcessorDefinition_defaultDataProcessor === void 0 ? void 0 : _dataProcessorDefinition_defaultDataProcessor.call(dataProcessorDefinition, data)) !== null && _dataProcessorDefinition_defaultDataProcessor1 !== void 0 ? _dataProcessorDefinition_defaultDataProcessor1 : data;
            } catch (e) {
                lynx.reportError(e);
                // when there is an error
                // we should perform like dataProcessor returns nothing
                // so use `{}` rather than `data`
                r = {};
            }
            if (true) console.profileEnd();
            if (hasDefaultDataProcessorExecuted === false) {
                // @ts-expect-error todo: add types to i18n logic
                if (globalThis.__I18N_RESOURCE_TRANSLATION__) r = {
                    ...r,
                    // @ts-expect-error todo: add types to i18n logic
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    __I18N_RESOURCE_TRANSLATION__: globalThis.__I18N_RESOURCE_TRANSLATION__
                };
                // @ts-expect-error todo: add types to __EXTRACT_STR__
                if (false) {}
            }
            if (processorName) ;
            else hasDefaultDataProcessorExecuted = true;
            return r;
        };
    };
    // register empty DataProcessors to make sure `globalThis.processData` is set
    lynx.registerDataProcessors();
} //# sourceMappingURL=env.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/injectLepusMethods.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  injectLepusMethods: () => (injectLepusMethods)
});
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function injectLepusMethods() {
    Object.assign(globalThis, {
        getUniqueIdListBySnapshotId,
        getSnapshotIdByUniqueId
    });
}
/**
 * Get the list of `unique_id` of the fiber element by the SnapshotInstance `__id`.
 */ function getUniqueIdListBySnapshotId({ snapshotId }) {
    var _si___elements;
    const si = _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotInstanceManager.values.get(snapshotId);
    if (si === null || si === void 0 ? void 0 : (_si___elements = si.__elements) === null || _si___elements === void 0 ? void 0 : _si___elements.length) {
        const uniqueIdList = [];
        for (const element of si.__elements){
            const uniqueId = __GetElementUniqueID(element);
            uniqueIdList.push(uniqueId);
        }
        return {
            uniqueIdList
        };
    }
    return null;
}
/**
 * Get the SnapshotInstance `__id` of the fiber element by the `unique_id`.
 */ function getSnapshotIdByUniqueId({ uniqueId }) {
    for (const si of _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.snapshotInstanceManager.values.values()){
        var _si___elements;
        if (si === null || si === void 0 ? void 0 : (_si___elements = si.__elements) === null || _si___elements === void 0 ? void 0 : _si___elements.length) for (const element of si.__elements){
            const unique_id = __GetElementUniqueID(element);
            if (unique_id === uniqueId) return {
                snapshotId: si.__id
            };
        }
    }
    return null;
}
/**
 * @internal
 */  //# sourceMappingURL=injectLepusMethods.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/lazy-bundle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadLazyBundle: () => (loadLazyBundle),
  makeSyncThen: () => (makeSyncThen)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * To make code below works
 * const App1 = lazy(() => import("./x").then(({App1}) => ({default: App1})))
 * const App2 = lazy(() => import("./x").then(({App2}) => ({default: App2})))
 * @internal
 */ const makeSyncThen = function(result) {
    return function(onF, _onR) {
        if (onF) {
            let ret;
            try {
                ret = onF(result);
            } catch (e) {
                // if (onR) {
                //   return Promise.resolve(onR(e));
                // }
                return Promise.reject(e);
            }
            if (ret && typeof ret.then === 'function' /* `thenable` object */ ) //   import("./x").then(() => new Promise(...))
            // )
            // Calling `then` and passing a callback is standard behavior
            // but in Lepus runtime the callback will never be called
            // So can be simplified to code below
            return ret;
            const p = Promise.resolve(ret);
            const then = makeSyncThen(ret);
            p.then = then;
            return p;
        }
        return this;
    };
};
/**
 * Load dynamic component from source. Designed to be used with `lazy`.
 * @param source - where dynamic component template.js locates
 * @returns
 * @public
 */ const loadLazyBundle = /*#__PURE__*/ (()=>{
    lynx.loadLazyBundle = loadLazyBundle;
    function loadLazyBundle(source) {
        {
            const query = __QueryComponent(source);
            let result;
            try {
                result = query.evalResult;
            } catch (e) {
                // Here we cannot return a rejected promise
                // (which will eventually be an unhandled rejection and cause unnecessary redbox)
                // But we still need a object in shape of Promise
                // So we return a Promise which will never resolve or reject,
                // which fit our principle "lepus run only once at first-screen" better
                return new Promise(()=>{});
            }
            const r = Promise.resolve(result);
            // Why we should modify the implementation of `then`?
            // We should make it `sync` so lepus first-screen render can use result above instantly
            // We also should keep promise shape
            r.then = makeSyncThen(result);
            return r;
        }
        throw new Error('unreachable');
    }
    return loadLazyBundle;
})();
//# sourceMappingURL=lazy-bundle.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/performance.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PerfSpecificKey: () => (PerfSpecificKey),
  PerformanceTimingFlags: () => (PerformanceTimingFlags),
  PipelineOrigins: () => (PipelineOrigins),
  beginPipeline: () => (beginPipeline),
  globalPipelineOptions: () => (globalPipelineOptions),
  initTimingAPI: () => (initTimingAPI),
  markTiming: () => (markTiming),
  markTimingLegacy: () => (markTimingLegacy),
  setPipeline: () => (setPipeline)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



const PerformanceTimingFlags = {
    reactLynxHydrate: 'react_lynx_hydrate'
};
const PipelineOrigins = {
    reactLynxHydrate: 'reactLynxHydrate',
    updateTriggeredByBts: 'updateTriggeredByBts'
};
/**
 * @deprecated used by old timing api(setState timing flag)
 */ const PerfSpecificKey = '__lynx_timing_flag';
let timingFlag;
let shouldMarkDiffVdomStart = false;
let shouldMarkDiffVdomEnd = false;
let globalPipelineOptions;
/**
 * @deprecated used by old timing api(setState timing flag)
 */ function markTimingLegacy(key, timingFlag_) {
    var _lynx_getNativeApp_markTiming, _lynx_getNativeApp;
    switch(key){
        case 'updateSetStateTrigger':
            shouldMarkDiffVdomStart = true;
            shouldMarkDiffVdomEnd = true;
            timingFlag = timingFlag_;
            break;
        case 'updateDiffVdomStart':
            /* v8 ignore start */ if (!shouldMarkDiffVdomStart) return;
            /* v8 ignore stop */ shouldMarkDiffVdomStart = false;
            break;
        case 'updateDiffVdomEnd':
            if (!shouldMarkDiffVdomEnd) return;
            shouldMarkDiffVdomEnd = false;
            break;
    }
    (_lynx_getNativeApp_markTiming = (_lynx_getNativeApp = lynx.getNativeApp()).markTiming) === null || _lynx_getNativeApp_markTiming === void 0 ? void 0 : _lynx_getNativeApp_markTiming.call(_lynx_getNativeApp, timingFlag, key);
}
function beginPipeline(needTimestamps, pipelineOrigin, timingFlag) {
    var _lynx_performance__generatePipelineOptions, _lynx_performance;
    globalPipelineOptions = (_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance__generatePipelineOptions = _lynx_performance._generatePipelineOptions) === null || _lynx_performance__generatePipelineOptions === void 0 ? void 0 : _lynx_performance__generatePipelineOptions.call(_lynx_performance);
    if (globalPipelineOptions) {
        var _lynx_performance__onPipelineStart, _lynx_performance1, _lynx_performance__onPipelineStart1, _lynx_performance2, _lynx_performance__bindPipelineIdWithTimingFlag, _lynx_performance3;
        globalPipelineOptions.needTimestamps = needTimestamps;
        globalPipelineOptions.pipelineOrigin = pipelineOrigin;
        globalPipelineOptions.dsl = 'reactLynx';
        switch(pipelineOrigin){
            case PipelineOrigins.reactLynxHydrate:
                globalPipelineOptions.stage = 'hydrate';
                break;
            case PipelineOrigins.updateTriggeredByBts:
                globalPipelineOptions.stage = 'update';
                break;
        }
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isSdkVersionGt)(3, 0)) (_lynx_performance1 = lynx.performance) === null || _lynx_performance1 === void 0 ? void 0 : (_lynx_performance__onPipelineStart = _lynx_performance1._onPipelineStart) === null || _lynx_performance__onPipelineStart === void 0 ? void 0 : _lynx_performance__onPipelineStart.call(_lynx_performance1, globalPipelineOptions.pipelineID, globalPipelineOptions);
        else (_lynx_performance2 = lynx.performance) === null || _lynx_performance2 === void 0 ? void 0 : (_lynx_performance__onPipelineStart1 = _lynx_performance2._onPipelineStart) === null || _lynx_performance__onPipelineStart1 === void 0 ? void 0 : _lynx_performance__onPipelineStart1.call(_lynx_performance2, globalPipelineOptions.pipelineID);
        if (timingFlag) (_lynx_performance3 = lynx.performance) === null || _lynx_performance3 === void 0 ? void 0 : (_lynx_performance__bindPipelineIdWithTimingFlag = _lynx_performance3._bindPipelineIdWithTimingFlag) === null || _lynx_performance__bindPipelineIdWithTimingFlag === void 0 ? void 0 : _lynx_performance__bindPipelineIdWithTimingFlag.call(_lynx_performance3, globalPipelineOptions.pipelineID, timingFlag);
    }
}
function setPipeline(pipeline) {
    globalPipelineOptions = pipeline;
}
function markTiming(timestampKey, force) {
    var _lynx_performance__markTiming, _lynx_performance;
    if (globalPipelineOptions && (force || globalPipelineOptions.needTimestamps)) (_lynx_performance = lynx.performance) === null || _lynx_performance === void 0 ? void 0 : (_lynx_performance__markTiming = _lynx_performance._markTiming) === null || _lynx_performance__markTiming === void 0 ? void 0 : _lynx_performance__markTiming.call(_lynx_performance, globalPipelineOptions.pipelineID, timestampKey);
}
function initTimingAPI() {
    const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = (vnode, oldVNode)=>{
        oldDiff === null || oldDiff === void 0 ? void 0 : oldDiff(vnode, oldVNode);
    };
}
/**
 * @internal
 */  //# sourceMappingURL=performance.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lynx/runWithForce.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runWithForce: () => (runWithForce)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


const sForcedVNode = Symbol('FORCE');
function runWithForce(cb) {
    // save vnode and its `_component` in WeakMap
    const m = new WeakMap();
    const oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = (vnode, oldVNode)=>{
        if (oldDiff) oldDiff(vnode, oldVNode);
        // when `options[DIFF]` is called, a newVnode is passed in
        // so its `vnode[COMPONENT]` should be null,
        // but it will be set later
        Object.defineProperty(vnode, _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT, {
            configurable: true,
            set (c) {
                m.set(vnode, c);
                if (c) c[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.FORCE] = true;
            },
            get () {
                return m.get(vnode);
            }
        });
        vnode[sForcedVNode] = true;
    };
    const oldDiffed = preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED] = (vnode)=>{
        if (oldDiffed) oldDiffed(vnode);
        // There would be cases when `options[DIFF]` has been reset while options[DIFFED] is not,
        // so we need to check if `vnode` is patched by `options[DIFF]`.
        // We only want to change the patched vnode
        if (vnode[sForcedVNode]) {
            // delete is a reverse operation of previous `Object.defineProperty`
            delete vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
            delete vnode[sForcedVNode];
            // restore
            vnode[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT] = m.get(vnode);
        }
    };
    try {
        cb();
    } finally{
        preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF] = oldDiff;
        preact__WEBPACK_IMPORTED_MODULE_0__.options[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED] = oldDiffed;
    }
} //# sourceMappingURL=runWithForce.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/opcodes.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  renderOpcodesInto: () => (renderOpcodesInto),
  ssrHydrateByOpcodes: () => (ssrHydrateByOpcodes)
});
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js");
/* ESM import */var _renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.




var Opcode;
(function(Opcode) {
    Opcode[Opcode["Begin"] = 0] = "Begin";
    Opcode[Opcode["End"] = 1] = "End";
    Opcode[Opcode["Attr"] = 2] = "Attr";
    Opcode[Opcode["Text"] = 3] = "Text";
})(Opcode || (Opcode = {}));
function ssrHydrateByOpcodes(opcodes, into, refMap) {
    let top = into;
    const stack = [
        into
    ];
    for(let i = 0; i < opcodes.length;){
        const opcode = opcodes[i];
        switch(opcode){
            case Opcode.Begin:
                {
                    const p = top;
                    const [type, __id, elements] = opcodes[i + 1];
                    top = new _snapshot_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotInstance(type, __id);
                    top.__pendingElements = elements;
                    p.insertBefore(top);
                    stack.push(top);
                    i += 2;
                    break;
                }
            case Opcode.End:
                {
                    // @ts-ignore
                    top[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_2__.CHILDREN] = undefined;
                    top.__elements = top.__pendingElements.map(({ ssrID })=>refMap[ssrID]);
                    top.__element_root = top.__elements[0];
                    delete top.__pendingElements;
                    if (top.__snapshot_def.isListHolder) {
                        const listElement = top.__element_root;
                        const listElementUniqueID = __GetElementUniqueID(listElement);
                        const signMap = _list_js__WEBPACK_IMPORTED_MODULE_1__.gSignMap[listElementUniqueID] = new Map();
                        _list_js__WEBPACK_IMPORTED_MODULE_1__.gRecycleMap[listElementUniqueID] = new Map();
                        const enqueueFunc = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.enqueueComponentFactory)();
                        const [componentAtIndex, componentAtIndexes] = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.componentAtIndexFactory)(top.childNodes, _hydrate_js__WEBPACK_IMPORTED_MODULE_0__.hydrate);
                        for (const child of top.childNodes)if (child.__element_root) {
                            const childElementUniqueID = __GetElementUniqueID(child.__element_root);
                            signMap.set(childElementUniqueID, child);
                            enqueueFunc(listElement, listElementUniqueID, childElementUniqueID);
                        }
                        __UpdateListCallbacks(listElement, componentAtIndex, enqueueFunc, componentAtIndexes);
                    }
                    stack.pop();
                    const p = stack[stack.length - 1];
                    top = p;
                    i += 1;
                    break;
                }
            case Opcode.Attr:
                {
                    const key = opcodes[i + 1];
                    const value = opcodes[i + 2];
                    top.setAttribute(key, value);
                    i += 3;
                    break;
                }
            case Opcode.Text:
                {
                    const [[type, __id, elements], text] = opcodes[i + 1];
                    const s = new _snapshot_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotInstance(type, __id);
                    s.setAttribute(0, text);
                    top.insertBefore(s);
                    s.__elements = elements.map(({ ssrID })=>refMap[ssrID]);
                    s.__element_root = s.__elements[0];
                    i += 2;
                    break;
                }
        }
    }
}
function renderOpcodesInto(opcodes, into) {
    let top = into;
    const stack = [
        into
    ];
    for(let i = 0; i < opcodes.length;){
        const opcode = opcodes[i];
        switch(opcode){
            case Opcode.Begin:
                {
                    const p = top;
                    top = opcodes[i + 1];
                    // @ts-ignore
                    if (top.__parent) {
                        // already inserted
                        top = new _snapshot_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotInstance(top.type);
                        opcodes[i + 1] = top;
                    }
                    p.insertBefore(top);
                    stack.push(top);
                    i += 2;
                    break;
                }
            case Opcode.End:
                {
                    // @ts-ignore
                    top[_renderToOpcodes_constants_js__WEBPACK_IMPORTED_MODULE_2__.CHILDREN] = undefined;
                    stack.pop();
                    const p = stack[stack.length - 1];
                    top = p;
                    i += 1;
                    break;
                }
            case Opcode.Attr:
                {
                    const key = opcodes[i + 1];
                    const value = opcodes[i + 2];
                    top.setAttribute(key, value);
                    i += 3;
                    break;
                }
            case Opcode.Text:
                {
                    const text = opcodes[i + 1];
                    const s = new _snapshot_js__WEBPACK_IMPORTED_MODULE_3__.SnapshotInstance(null);
                    if (false) {}
                    s.setAttribute(0, text);
                    top.insertBefore(s);
                    i += 2;
                    break;
                }
        }
    }
} //# sourceMappingURL=opcodes.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __pendingListUpdates: () => (__pendingListUpdates)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const __pendingListUpdates = {
    values: {},
    clear () {
        this.values = {};
    },
    flush () {
        if (this.values) {
            Object.values(this.values).forEach((update)=>{
                update.flush();
            });
            this.clear();
        }
    },
    runWithoutUpdates (cb) {
        const old = this.values;
        this.values = null;
        try {
            cb();
        } finally{
            this.values = old;
        }
    }
}; //# sourceMappingURL=pendingListUpdates.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CATCH_ERROR: () => (CATCH_ERROR),
  CHILDREN: () => (CHILDREN),
  CHILD_DID_SUSPEND: () => (CHILD_DID_SUSPEND),
  COMMIT: () => (COMMIT),
  COMPONENT: () => (COMPONENT),
  DIFF: () => (DIFF),
  DIFFED: () => (DIFFED),
  DIRTY: () => (DIRTY),
  DOM: () => (DOM),
  FORCE: () => (FORCE),
  HOOK: () => (HOOK),
  MASK: () => (MASK),
  NEXT_STATE: () => (NEXT_STATE),
  PARENT: () => (PARENT),
  RENDER: () => (RENDER),
  RENDER_CALLBACKS: () => (RENDER_CALLBACKS),
  ROOT: () => (ROOT),
  SKIP_EFFECTS: () => (SKIP_EFFECTS),
  VNODE: () => (VNODE)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
const DIFF = '__b';
const RENDER = '__r';
const DIFFED = 'diffed';
const COMMIT = '__c';
const SKIP_EFFECTS = '__s';
const CATCH_ERROR = '__e';
const ROOT = '__';
// VNode properties
const COMPONENT = '__c';
const CHILDREN = '__k';
const PARENT = '__';
const MASK = '__m';
const DOM = '__e';
// Component properties
const VNODE = '__v';
const DIRTY = '__d';
const FORCE = '__e';
const NEXT_STATE = '__s';
const CHILD_DID_SUSPEND = '__c';
const RENDER_CALLBACKS = '__h';
const HOOK = '__h'; //# sourceMappingURL=constants.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __OpAttr: () => (__OpAttr),
  __OpBegin: () => (__OpBegin),
  __OpEnd: () => (__OpEnd),
  __OpText: () => (__OpText),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  render: () => (render),
  renderToStaticMarkup: () => (renderToStaticMarkup),
  renderToString: () => (renderToString)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/renderToOpcodes/constants.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Implements rendering to opcodes.
 * This module is modified from preact-render-to-string@6.0.3 to generate
 * opcodes instead of HTML strings for Lynx.
 */ // @ts-nocheck


/** @typedef {import('preact').VNode} VNode */ const EMPTY_ARR = [];
const isArray = /* @__PURE__ */ Array.isArray;
const assign = /* @__PURE__ */ Object.assign;
// Global state for the current render pass
let beforeDiff, afterDiff, renderHook, ummountHook;
/**
 * Render Preact JSX + Components to an HTML string.
 * @param {VNode} vnode	JSX Element / VNode to render
 * @param {object} [context] Initial root context object
 */ function renderToString(vnode, context) {
    // Performance optimization: `renderToString` is synchronous and we
    // therefore don't execute any effects. To do that we pass an empty
    // array to `options._commit` (`__c`). But we can go one step further
    // and avoid a lot of dirty checks and allocations by setting
    // `options._skipEffects` (`__s`) too.
    const previousSkipEffects = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.SKIP_EFFECTS];
    preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.SKIP_EFFECTS] = true;
    // store options hooks once before each synchronous render call
    beforeDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFF];
    afterDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIFFED];
    renderHook = preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.RENDER];
    ummountHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
    const parent = (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    parent[_constants_js__WEBPACK_IMPORTED_MODULE_1__.CHILDREN] = [
        vnode
    ];
    const opcodes = [];
    try {
        _renderToString(vnode, context || EMPTY_OBJ, false, undefined, parent, opcodes, 0);
    } finally{
        // options._commit, we don't schedule any effects in this library right now,
        // so we can pass an empty queue to this hook.
        if (preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMMIT]) preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMMIT](vnode, EMPTY_ARR);
        preact__WEBPACK_IMPORTED_MODULE_0__.options[_constants_js__WEBPACK_IMPORTED_MODULE_1__.SKIP_EFFECTS] = previousSkipEffects;
        EMPTY_ARR.length = 0;
    }
    return opcodes;
}
// Installed as setState/forceUpdate for function components
function markAsDirty() {
    this.__d = true;
}
const EMPTY_OBJ = {};
const __OpBegin = 0;
const __OpEnd = 1;
const __OpAttr = 2;
const __OpText = 3;
/**
 * @param {VNode} vnode
 * @param {Record<string, unknown>} context
 */ function renderClassComponent(vnode, context) {
    const type = /** @type {import("preact").ComponentClass<typeof vnode.props>} */ vnode.type;
    let c;
    if (vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT]) {
        c = vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
        c.state = c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.NEXT_STATE];
    } else c = new type(vnode.props, context);
    vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT] = c;
    c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.VNODE] = vnode;
    c.props = vnode.props;
    c.context = context;
    // turn off stateful re-rendering:
    c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] = true;
    if (c.state == null) c.state = EMPTY_OBJ;
    if (c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.NEXT_STATE] == null) c[_constants_js__WEBPACK_IMPORTED_MODULE_1__.NEXT_STATE] = c.state;
    if (type.getDerivedStateFromProps) c.state = assign({}, c.state, type.getDerivedStateFromProps(c.props, c.state));
    if (renderHook) renderHook(vnode);
    return c.render(c.props, c.state, context);
}
/**
 * Recursively render VNodes to HTML.
 * @param {VNode|any} vnode
 * @param {any} context
 * @param {boolean} isSvgMode
 * @param {any} selectValue
 * @param {VNode} parent
 * @param opcodes
 */ function _renderToString(vnode, context, isSvgMode, selectValue, parent, opcodes, opcodesLength) {
    // Ignore non-rendered VNodes/values
    if (vnode == null || vnode === true || vnode === false || vnode === '') return;
    // Text VNodes: escape as HTML
    if (typeof vnode !== 'object') {
        if (typeof vnode === 'function') return;
        opcodes.push(__OpText, vnode + '');
        return;
    }
    // Recurse into children / Arrays
    if (isArray(vnode)) {
        parent[_constants_js__WEBPACK_IMPORTED_MODULE_1__.CHILDREN] = vnode;
        for(let i = 0; i < vnode.length; i++){
            const child = vnode[i];
            if (child == null || typeof child === 'boolean') continue;
            _renderToString(child, context, isSvgMode, selectValue, parent, opcodes, opcodes.length);
        }
        return;
    }
    // VNodes have {constructor:undefined} to prevent JSON injection:
    // if (vnode.constructor !== undefined) return;
    vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.PARENT] = parent;
    if (beforeDiff) beforeDiff(vnode);
    let type = vnode.type, props = vnode.props, cctx = context, contextType, rendered, component;
    // Invoke rendering on Components
    if (typeof type === 'function') {
        if (type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment) rendered = props.children;
        else {
            contextType = type.contextType;
            if (contextType != null) {
                const provider = context[contextType.__c];
                cctx = provider ? provider.props.value : contextType.__;
            }
            if (type.prototype && typeof type.prototype.render === 'function') {
                rendered = /**#__NOINLINE__**/ renderClassComponent(vnode, cctx);
                component = vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
            } else {
                component = {
                    __v: vnode,
                    props,
                    context: cctx,
                    // silently drop state updates
                    setState: markAsDirty,
                    forceUpdate: markAsDirty,
                    __d: true,
                    // hooks
                    __h: []
                };
                vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT] = component;
                component.constructor = type;
                component.render = doRender;
                // If a hook invokes setState() to invalidate the component during rendering,
                // re-render it up to 25 times to allow "settling" of memoized states.
                // Note:
                //   This will need to be updated for Preact 11 to use internal.flags rather than component._dirty:
                //   https://github.com/preactjs/preact/blob/d4ca6fdb19bc715e49fd144e69f7296b2f4daa40/src/diff/component.js#L35-L44
                let count = 0;
                while(component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] && count++ < 25){
                    component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] = false;
                    if (renderHook) renderHook(vnode);
                    rendered = component.render(props, component.state, cctx);
                }
                component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY] = true;
            }
            if (component.getChildContext != null) context = assign({}, context, component.getChildContext());
        }
        // When a component returns a Fragment node we flatten it in core, so we
        // need to mirror that logic here too
        const isTopLevelFragment = rendered != null && rendered.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment && rendered.key == null;
        rendered = isTopLevelFragment ? rendered.props.children : rendered;
        // Recurse into children before invoking the after-diff hook
        try {
            _renderToString(rendered, context, isSvgMode, selectValue, vnode, opcodes, opcodes.length);
        } catch (e) {
            if (e && typeof e === 'object' && e.then && component && /* _childDidSuspend */ component.__c) {
                component.setState({
                    __a: true
                });
                if (component[_constants_js__WEBPACK_IMPORTED_MODULE_1__.DIRTY]) {
                    rendered = renderClassComponent(vnode, context);
                    component = vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.COMPONENT];
                    opcodes.length = opcodesLength;
                    _renderToString(rendered, context, isSvgMode, selectValue, vnode, opcodes, opcodes.length);
                }
            } else throw e;
        } finally{
            if (afterDiff) afterDiff(vnode);
            vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.PARENT] = undefined;
            if (ummountHook) ummountHook(vnode);
        }
        return;
    }
    let children;
    opcodes.push(__OpBegin, vnode);
    for(const name in props){
        const v = props[name];
        switch(name){
            case 'children':
                children = v;
                continue;
            // VDOM-specific props
            /* c8 ignore next 5 */ case 'key':
            case 'ref':
            case '__self':
            case '__source':
                continue;
            default:
        }
        // write this attribute to the buffer
        if (v != null && v !== false && typeof v !== 'function') opcodes.push(__OpAttr, name, v);
    }
    if (typeof children === 'string') opcodes.push(__OpText, children);
    else if (children != null && children !== false && children !== true) _renderToString(children, context, false, selectValue, vnode, opcodes, opcodes.length);
    if (afterDiff) afterDiff(vnode);
    vnode[_constants_js__WEBPACK_IMPORTED_MODULE_1__.PARENT] = undefined;
    if (ummountHook) ummountHook(vnode);
    opcodes.push(__OpEnd);
    return;
}
/** The `.render()` method for a PFC backing instance. */ function doRender(props, state, context) {
    return this.constructor(props, context);
}
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderToString);
const render = renderToString;
const renderToStaticMarkup = renderToString; //# sourceMappingURL=index.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/root.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __root: () => (__root),
  setRoot: () => (setRoot)
});
/* ESM import */var _snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * The internal ReactLynx's root.
 * {@link @lynx-js/react!Root | root}.
 */ let __root;
function setRoot(root) {
    __root = root;
    // A fake ELEMENT_NODE to make preact/debug happy.
    if ( true && __root) __root.nodeType = 1;
}
setRoot(new _snapshot_js__WEBPACK_IMPORTED_MODULE_0__.SnapshotInstance('root'));
 //# sourceMappingURL=root.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SnapshotInstance: () => (SnapshotInstance),
  __page: () => (__page),
  __pageId: () => (__pageId),
  backgroundSnapshotInstanceManager: () => (backgroundSnapshotInstanceManager),
  clearPage: () => (clearPage),
  createSnapshot: () => (createSnapshot),
  entryUniqID: () => (entryUniqID),
  setupPage: () => (setupPage),
  snapshotInstanceManager: () => (snapshotInstanceManager),
  snapshotManager: () => (snapshotManager),
  traverseSnapshotInstance: () => (traverseSnapshotInstance)
});
/* ESM import */var _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/listUpdateInfo.js");
/* ESM import */var _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js");
/* ESM import */var _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/dynamicPartType.js");
/* ESM import */var _snapshot_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list.js");
/* ESM import */var _snapshot_ref_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.






let __page;
let __pageId = 0;
function setupPage(page) {
    __page = page;
    __pageId = __GetElementUniqueID(page);
}
function clearPage() {
    __page = undefined;
    __pageId = 0;
}
const snapshotManager = {
    values: /* @__PURE__ */ new Map([
        [
            'root',
            {
                create () {
                    /* v8 ignore stop */ return [
                        __page
                    ];
                },
                update: [],
                slot: [
                    [
                        _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Children,
                        0
                    ]
                ],
                isListHolder: false,
                cssId: 0
            }
        ],
        [
            'wrapper',
            {
                create () {
                    /* v8 ignore stop */ return [
                        __CreateWrapperElement(__pageId)
                    ];
                },
                update: [],
                slot: [
                    [
                        _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Children,
                        0
                    ]
                ],
                isListHolder: false
            }
        ],
        [
            null,
            {
                create () {
                    /* v8 ignore stop */ return [
                        __CreateElement('raw-text', __pageId)
                    ];
                },
                update: [
                    (ctx)=>{
                        /* v8 ignore stop */ if (ctx.__elements) __SetAttribute(ctx.__elements[0], 'text', ctx.__values[0]);
                    }
                ],
                slot: [],
                isListHolder: false
            }
        ]
    ])
};
const snapshotInstanceManager = {
    nextId: 0,
    values: /* @__PURE__ */ new Map(),
    clear () {
        // not resetting `nextId` to prevent id collision
        this.values.clear();
    }
};
const backgroundSnapshotInstanceManager = {
    nextId: 0,
    values: /* @__PURE__ */ new Map(),
    clear () {
        // not resetting `nextId` to prevent id collision
        this.values.clear();
    },
    updateId (id, newId) {
        const values = this.values;
        const si = values.get(id);
        values.delete(id);
        values.set(newId, si);
        si.__id = newId;
    },
    getValueBySign (str) {
        const res = str === null || str === void 0 ? void 0 : str.split(':');
        if (!res || res.length != 2 && res.length != 3) throw new Error('Invalid ctx format: ' + str);
        const id = Number(res[0]);
        const expIndex = Number(res[1]);
        const ctx = this.values.get(id);
        if (!ctx) return null;
        const spreadKey = res[2];
        if (res[1] === '__extraProps') {
            if (spreadKey) return ctx.__extraProps[spreadKey];
            throw new Error('unreachable');
        } else {
            if (spreadKey) return ctx.__values[expIndex][spreadKey];
            else return ctx.__values[expIndex];
        }
    }
};
function entryUniqID(uniqID, entryName) {
    return entryName ? `${entryName}:${uniqID}` : uniqID;
}
function createSnapshot(uniqID, create, update, slot, cssId, entryName, refAndSpreadIndexes) {
    uniqID = entryUniqID(uniqID, entryName);
    const s = {
        create,
        update,
        slot,
        cssId,
        entryName,
        refAndSpreadIndexes
    };
    snapshotManager.values.set(uniqID, s);
    if (slot && slot[0] && slot[0][0] === _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.ListChildren) s.isListHolder = true;
    return uniqID;
}
function traverseSnapshotInstance(si, callback) {
    const c = si.childNodes;
    callback(si);
    for (const vv of c)traverseSnapshotInstance(vv, callback);
}
const DEFAULT_ENTRY_NAME = '__Card__';
const DEFAULT_CSS_ID = 0;
/**
 * The runtime instance of a {@link Snapshot} on the main thread that manages
 * the actual elements and handles updates to dynamic parts.
 *
 * This class is designed to be compatible with Preact's {@link ContainerNode}
 * interface for Preact's renderer to operate upon.
 */ class SnapshotInstance {
    ensureElements() {
        const { create, slot, isListHolder, cssId, entryName } = this.__snapshot_def;
        const elements = create(this);
        this.__elements = elements;
        this.__element_root = elements[0];
        if (cssId === undefined) {
            if (entryName !== DEFAULT_ENTRY_NAME && entryName !== undefined) __SetCSSId(this.__elements, DEFAULT_CSS_ID, entryName);
        } else if (entryName !== DEFAULT_ENTRY_NAME && entryName !== undefined) __SetCSSId(this.__elements, cssId, entryName);
        else __SetCSSId(this.__elements, cssId);
        _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.runWithoutUpdates(()=>{
            const values = this.__values;
            if (values) {
                this.__values = undefined;
                this.setAttribute('values', values);
            }
        });
        if (isListHolder) ;
        else {
            let index = 0;
            let child = this.__firstChild;
            while(child){
                child.ensureElements();
                const [type, elementIndex] = slot[index];
                switch(type){
                    case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Slot:
                        __ReplaceElement(child.__element_root, elements[elementIndex]);
                        elements[elementIndex] = child.__element_root;
                        index++;
                        break;
                    /* v8 ignore start */ case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.MultiChildren:
                        if (__GetTag(elements[elementIndex]) === 'wrapper') __ReplaceElement(child.__element_root, elements[elementIndex]);
                        else __AppendElement(elements[elementIndex], child.__element_root);
                        index++;
                        break;
                    /* v8 ignore end */ case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Children:
                    case _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.ListChildren:
                        __AppendElement(elements[elementIndex], child.__element_root);
                        break;
                }
                child = child.__nextSibling;
            }
        }
    }
    unRenderElements() {
        const { isListHolder } = this.__snapshot_def;
        this.__elements = undefined;
        this.__element_root = undefined;
        if (isListHolder) ;
        else {
            let child = this.__firstChild;
            while(child){
                child.unRenderElements();
                child = child.__nextSibling;
            }
        }
    }
    takeElements() {
        const a = Object.create(SnapshotInstance.prototype);
        a.__id = this.__id;
        a.__snapshot_def = this.__snapshot_def;
        a.__values = this.__values;
        // all clear
        a.__parent = null;
        a.__firstChild = null;
        a.__lastChild = null;
        a.__nextSibling = null;
        a.__previousSibling = null;
        this.childNodes.map((c)=>c.takeElements()).forEach((node)=>a.__insertBefore(node));
        a.__elements = this.__elements;
        a.__element_root = this.__element_root;
        this.__elements = undefined;
        this.__element_root = undefined;
        return a;
    }
    tearDown() {
        traverseSnapshotInstance(this, (v)=>{
            v.__parent = null;
            v.__previousSibling = null;
            v.__nextSibling = null;
        });
    }
    get parentNode() {
        return this.__parent;
    }
    get nextSibling() {
        return this.__nextSibling;
    }
    // get isConnected() {
    //   return !!this.__parent;
    // }
    contains(child) {
        return child.parentNode === this;
    }
    get childNodes() {
        const nodes = [];
        let node = this.__firstChild;
        while(node){
            nodes.push(node);
            node = node.__nextSibling;
        }
        return nodes;
    }
    __insertBefore(node, beforeNode) {
        // If the node already has a parent, remove it from its current parent
        if (node.__parent) node.__parent.__removeChild(node);
        // If beforeNode is not provided, add the new node as the last child
        if (beforeNode) {
            // If beforeNode is provided, insert the new node before beforeNode
            if (beforeNode.__previousSibling) {
                beforeNode.__previousSibling.__nextSibling = node;
                node.__previousSibling = beforeNode.__previousSibling;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            beforeNode.__previousSibling = node;
            node.__nextSibling = beforeNode;
            node.__parent = this;
        } else {
            if (this.__lastChild) {
                this.__lastChild.__nextSibling = node;
                node.__previousSibling = this.__lastChild;
            } else {
                this.__firstChild = node;
                node.__previousSibling = null;
            }
            this.__lastChild = node;
            node.__parent = this;
            node.__nextSibling = null;
        }
    }
    __removeChild(node) {
        if (node.__parent !== this) throw new Error('The node to be removed is not a child of this node.');
        if (node.__previousSibling) node.__previousSibling.__nextSibling = node.__nextSibling;
        else this.__firstChild = node.__nextSibling;
        if (node.__nextSibling) node.__nextSibling.__previousSibling = node.__previousSibling;
        else this.__lastChild = node.__previousSibling;
        node.__parent = null;
        node.__previousSibling = null;
        node.__nextSibling = null;
    }
    insertBefore(newNode, existingNode) {
        const __snapshot_def = this.__snapshot_def;
        if (__snapshot_def.isListHolder) {
            var __pendingListUpdates_values, _this___id;
            var _;
            if (_pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_0__.ListUpdateInfoRecording(this)).onInsertBefore(newNode, existingNode);
            this.__insertBefore(newNode, existingNode);
            return;
        }
        const shouldRemove = newNode.__parent === this;
        this.__insertBefore(newNode, existingNode);
        const __elements = this.__elements;
        if (__elements) {
            if (!newNode.__elements) newNode.ensureElements();
        } else return;
        const count = __snapshot_def.slot.length;
        if (count === 1) {
            const [, elementIndex] = __snapshot_def.slot[0];
            const parent = __elements[elementIndex];
            if (shouldRemove) __RemoveElement(parent, newNode.__element_root);
            if (existingNode) __InsertElementBefore(parent, newNode.__element_root, existingNode.__element_root);
            else __AppendElement(parent, newNode.__element_root);
        } else if (count > 1) {
            const index = this.__current_slot_index++;
            const [s, elementIndex] = __snapshot_def.slot[index];
            if (s === _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.Slot) {
                __ReplaceElement(newNode.__element_root, __elements[elementIndex]);
                __elements[elementIndex] = newNode.__element_root;
            /* v8 ignore start */ } else if (s === _snapshot_dynamicPartType_js__WEBPACK_IMPORTED_MODULE_2__.DynamicPartType.MultiChildren) {
                if (__GetTag(__elements[elementIndex]) === 'wrapper') __ReplaceElement(newNode.__element_root, __elements[elementIndex]);
                else __AppendElement(__elements[elementIndex], newNode.__element_root);
            }
        /* v8 ignore end */ }
    }
    removeChild(child) {
        const __snapshot_def = this.__snapshot_def;
        if (__snapshot_def.isListHolder) {
            var __pendingListUpdates_values, _this___id;
            var _;
            if (_pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values)[_this___id = this.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_this___id] = new _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_0__.ListUpdateInfoRecording(this)).onRemoveChild(child);
            this.__removeChild(child);
            traverseSnapshotInstance(child, (v)=>{
                snapshotInstanceManager.values.delete(v.__id);
            });
            // mark this child as deleted
            child.__id = 0;
            return;
        }
        (0,_snapshot_ref_js__WEBPACK_IMPORTED_MODULE_4__.unref)(child, true);
        if (this.__elements) {
            const [, elementIndex] = __snapshot_def.slot[0];
            __RemoveElement(this.__elements[elementIndex], child.__element_root);
        }
        if (child.__snapshot_def.isListHolder) (0,_snapshot_list_js__WEBPACK_IMPORTED_MODULE_3__.snapshotDestroyList)(child);
        this.__removeChild(child);
        traverseSnapshotInstance(child, (v)=>{
            v.__parent = null;
            v.__previousSibling = null;
            v.__nextSibling = null;
            delete v.__elements;
            delete v.__element_root;
            snapshotInstanceManager.values.delete(v.__id);
        });
    }
    setAttribute(key, value) {
        if (key === 'values') {
            const oldValues = this.__values;
            const values = value;
            this.__values = values;
            if (oldValues) for(let index = 0; index < values.length; index++)this.callUpdateIfNotDirectOrDeepEqual(index, oldValues[index], values[index]);
            else for(let index = 0; index < values.length; index++)this.callUpdateIfNotDirectOrDeepEqual(index, undefined, values[index]);
            return;
        }
        if (typeof key === 'string') {
            var _this___extraProps;
            // for more flexible usage, we allow setting non-indexed attributes
            ((_this___extraProps = this.__extraProps) !== null && _this___extraProps !== void 0 ? _this___extraProps : this.__extraProps = {})[key] = value;
            return;
        }
        var _this___values;
        (_this___values = this.__values) !== null && _this___values !== void 0 ? _this___values : this.__values = [];
        this.callUpdateIfNotDirectOrDeepEqual(key, this.__values[key], this.__values[key] = value);
    }
    toJSON() {
        return {
            id: this.__id,
            type: this.type,
            values: this.__values,
            extraProps: this.__extraProps,
            children: this.__firstChild ? this.childNodes : undefined
        };
    }
    callUpdateIfNotDirectOrDeepEqual(index, oldValue, newValue) {
        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.isDirectOrDeepEqual)(oldValue, newValue)) ;
        else this.__snapshot_def.update[index](this, index, oldValue);
    }
    constructor(type, id){
        this.__current_slot_index = 0;
        // onCreate?: () => void;
        // onAttach?: () => void;
        // onDetach?: () => void;
        // onRef?: () => void;
        // onUnref?: () => void;
        this.__parent = null;
        this.__firstChild = null;
        this.__lastChild = null;
        this.__previousSibling = null;
        this.__nextSibling = null;
        this.type = type;
        this.__snapshot_def = snapshotManager.values.get(type);
        // Suspense uses 'div'
        if (!this.__snapshot_def && type !== 'div') throw new Error('Snapshot not found: ' + type);
        id !== null && id !== void 0 ? id : id = snapshotInstanceManager.nextId -= 1;
        this.__id = id;
        snapshotInstanceManager.values.set(id, this);
    }
} //# sourceMappingURL=snapshot.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshotInstanceHydrationMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  hydrationMap: () => (hydrationMap)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * A map to store hydration states between snapshot instances.
 * K->V: main thread snapshotInstance IDs -> background snapshotInstance IDs.
 *
 * The map is used by the ref system to translate between snapshot instance IDs when
 * operations need to cross the thread boundary during the commit phase.
 */ const hydrationMap = new Map();
/**
 * @internal
 */  //# sourceMappingURL=snapshotInstanceHydrationMap.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/dynamicPartType.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DynamicPartType: () => (DynamicPartType)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Types of dynamic parts that can be updated in a snapshot
 * These are determined at compile time through static analysis
 */ var DynamicPartType;
(function(DynamicPartType) {
    DynamicPartType[DynamicPartType["Attr"] = 0] = "Attr";
    DynamicPartType[DynamicPartType["Spread"] = 1] = "Spread";
    DynamicPartType[DynamicPartType["Slot"] = 2] = "Slot";
    DynamicPartType[DynamicPartType["Children"] = 3] = "Children";
    DynamicPartType[DynamicPartType["ListChildren"] = 4] = "ListChildren";
    DynamicPartType[DynamicPartType["MultiChildren"] = 5] = "MultiChildren";
})(DynamicPartType || (DynamicPartType = {})); //# sourceMappingURL=dynamicPartType.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateEvent: () => (updateEvent)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
function updateEvent(snapshot, expIndex, _oldValue, elementIndex, eventType, eventName, spreadKey) {
    const value = snapshot.__values[expIndex];
    let event;
    if (!value) event = undefined;
    else if (typeof value === 'string') event = value;
    else event = `${snapshot.__id}:${expIndex}:${spreadKey}`;
    // todo: reuseId?
    snapshot.__values[expIndex] = event;
    if (snapshot.__elements) __AddEvent(snapshot.__elements[elementIndex], eventType, eventName, event);
}
 //# sourceMappingURL=event.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateGesture: () => (updateGesture)
});
/* ESM import */var _gesture_processGesture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/gesture/processGesture.js");
/* ESM import */var _lifecycle_patch_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrating.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function updateGesture(snapshot, expIndex, oldValue, elementIndex, workletType) {
    if (!snapshot.__elements) return;
    if (true) console.profile('updateGesture');
    const value = snapshot.__values[expIndex];
    if (workletType === 'main-thread') (0,_gesture_processGesture_js__WEBPACK_IMPORTED_MODULE_0__.processGesture)(snapshot.__elements[elementIndex], value, oldValue, _lifecycle_patch_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__.isMainThreadHydrating);
    if (true) console.profileEnd();
} //# sourceMappingURL=gesture.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/list.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  snapshotCreateList: () => (snapshotCreateList),
  snapshotDestroyList: () => (snapshotDestroyList)
});
/* ESM import */var _hydrate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hydrate.js");
/* ESM import */var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/list.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function snapshotCreateList(pageId, _ctx, _expIndex) {
    const signMap = new Map();
    const recycleMap = new Map();
    const [componentAtIndex, componentAtIndexes] = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.componentAtIndexFactory)([], _hydrate_js__WEBPACK_IMPORTED_MODULE_0__.hydrate);
    const list = __CreateList(pageId, componentAtIndex, (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.enqueueComponentFactory)(), {}, componentAtIndexes);
    const listID = __GetElementUniqueID(list);
    _list_js__WEBPACK_IMPORTED_MODULE_1__.gSignMap[listID] = signMap;
    _list_js__WEBPACK_IMPORTED_MODULE_1__.gRecycleMap[listID] = recycleMap;
    return list;
}
function snapshotDestroyList(si) {
    const [, elementIndex] = si.__snapshot_def.slot[0];
    const list = si.__elements[elementIndex];
    const listID = __GetElementUniqueID(list);
    delete _list_js__WEBPACK_IMPORTED_MODULE_1__.gSignMap[listID];
    delete _list_js__WEBPACK_IMPORTED_MODULE_1__.gRecycleMap[listID];
} //# sourceMappingURL=list.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  platformInfoAttributes: () => (platformInfoAttributes),
  updateListItemPlatformInfo: () => (updateListItemPlatformInfo)
});
/* ESM import */var _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/listUpdateInfo.js");
/* ESM import */var _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


const platformInfoVirtualAttributes = /* @__PURE__ */ new Set([
    'reuse-identifier'
]);
const platformInfoAttributes = /* @__PURE__ */ new Set([
    'reuse-identifier',
    'full-span',
    'item-key',
    'sticky-top',
    'sticky-bottom',
    'estimated-height',
    'estimated-height-px',
    'estimated-main-axis-size-px'
]);
function updateListItemPlatformInfo(ctx, index, oldValue, elementIndex) {
    const newValue = ctx.__listItemPlatformInfo = ctx.__values[index];
    if (_pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values) {
        var __pendingListUpdates_values, _list___id;
        const list = ctx.parentNode;
        var _;
        if (list === null || list === void 0 ? void 0 : list.__snapshot_def.isListHolder) ((_ = (__pendingListUpdates_values = _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values)[_list___id = list.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_list___id] = new _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_0__.ListUpdateInfoRecording(list)).onSetAttribute(ctx, newValue, oldValue);
    }
    // In this updater, unlike `updateSpread`, the shape of the value is guaranteed to be an fixed object.
    // No adding / removing keys.
    if (ctx.__elements) {
        const e = ctx.__elements[elementIndex];
        const value = ctx.__values[index];
        for(const k in value){
            if (platformInfoVirtualAttributes.has(k)) continue;
            __SetAttribute(e, k, value[k]);
        }
    }
}
 //# sourceMappingURL=platformInfo.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyQueuedRefs: () => (applyQueuedRefs),
  applyRef: () => (applyRef),
  clearQueuedRefs: () => (clearQueuedRefs),
  queueRefAttrUpdate: () => (queueRefAttrUpdate),
  transformRef: () => (transformRef),
  unref: () => (unref),
  updateRef: () => (updateRef)
});
/* ESM import */var _workletRef_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
/* ESM import */var _lifecycle_ref_delay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/ref/delay.js");


const refsToClear = [];
const refsToApply = [];
function unref(snapshot, recursive) {
    var _snapshot___worklet_ref_set, _snapshot___worklet_ref_set1;
    (_snapshot___worklet_ref_set = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set === void 0 ? void 0 : _snapshot___worklet_ref_set.forEach((v)=>{
        if (v) (0,_workletRef_js__WEBPACK_IMPORTED_MODULE_0__.workletUnRef)(v);
    });
    (_snapshot___worklet_ref_set1 = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set1 === void 0 ? void 0 : _snapshot___worklet_ref_set1.clear();
    if (recursive) snapshot.childNodes.forEach((it)=>{
        unref(it, recursive);
    });
}
// This function is modified from preact source code.
function applyRef(ref, value) {
    const newRef = value && new _lifecycle_ref_delay_js__WEBPACK_IMPORTED_MODULE_1__.RefProxy(value);
    try {
        if (typeof ref == 'function') {
            const hasRefUnmount = typeof ref._unmount == 'function';
            if (hasRefUnmount) ref._unmount();
            if (!hasRefUnmount || newRef != null) // instance object itself to avoid shape
            // transitioning vnode
            ref._unmount = ref(newRef);
        } else ref.current = newRef;
    /* v8 ignore start */ } catch (e) {
        lynx.reportError(e);
    }
/* v8 ignore stop */ }
function updateRef(snapshot, expIndex, oldValue, elementIndex) {
    const value = snapshot.__values[expIndex];
    let ref;
    if (typeof value === 'string') ref = value;
    else ref = `react-ref-${snapshot.__id}-${expIndex}`;
    snapshot.__values[expIndex] = ref;
    if (snapshot.__elements && oldValue !== ref) {
        if (oldValue) __SetAttribute(snapshot.__elements[elementIndex], oldValue, undefined);
        if (ref) __SetAttribute(snapshot.__elements[elementIndex], ref, 1);
    }
}
function transformRef(ref) {
    if (ref === undefined || ref === null) return ref;
    if (typeof ref === 'function' || typeof ref === 'object' && 'current' in ref) {
        if ('__ref' in ref) return ref;
        return Object.defineProperty(ref, '__ref', {
            value: 1
        });
    }
    throw new Error(`Elements' "ref" property should be a function, or an object created ` + `by createRef(), but got [${typeof ref}] instead`);
}
function applyQueuedRefs() {
    try {
        for (const ref of refsToClear)applyRef(ref, null);
        for(let i = 0; i < refsToApply.length; i += 2){
            const ref = refsToApply[i];
            const value = refsToApply[i + 1];
            applyRef(ref, value);
        }
    } finally{
        clearQueuedRefs();
    }
}
function queueRefAttrUpdate(oldRef, newRef, snapshotInstanceId, expIndex) {
    if (oldRef === newRef) return;
    if (oldRef) refsToClear.push(oldRef);
    if (newRef) refsToApply.push(newRef, [
        snapshotInstanceId,
        expIndex
    ]);
}
function clearQueuedRefs() {
    refsToClear.length = 0;
    refsToApply.length = 0;
}
/**
 * @internal
 */  //# sourceMappingURL=ref.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/spread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transformSpread: () => (transformSpread),
  updateSpread: () => (updateSpread)
});
/* ESM import */var _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/listUpdateInfo.js");
/* ESM import */var _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/pendingListUpdates.js");
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
/* ESM import */var _event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/event.js");
/* ESM import */var _gesture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/gesture.js");
/* ESM import */var _platformInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/platformInfo.js");
/* ESM import */var _ref_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/ref.js");
/* ESM import */var _workletEvent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js");
/* ESM import */var _workletRef_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.









// eslint-disable-next-line regexp/no-unused-capturing-group
const eventRegExp = /^(([A-Za-z-]*):)?(bind|catch|capture-bind|capture-catch|global-bind)([A-Za-z]+)$/;
const eventTypeMap = {
    bind: 'bindEvent',
    catch: 'catchEvent',
    'capture-bind': 'capture-bind',
    'capture-catch': 'capture-catch',
    'global-bind': 'global-bindEvent'
};
const noFlattenAttributes = /* @__PURE__ */ new Set([
    'name',
    'clip-radius',
    'overlap',
    'exposure-scene',
    'exposure-id'
]);
function updateSpread(snapshot, index, oldValue, elementIndex) {
    oldValue !== null && oldValue !== void 0 ? oldValue : oldValue = {};
    let newValue = snapshot.__values[index]; // compiler guarantee this must be an object;
    const list = snapshot.parentNode;
    if (list === null || list === void 0 ? void 0 : list.__snapshot_def.isListHolder) {
        const oldPlatformInfo = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.pick)(oldValue, _platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.platformInfoAttributes);
        const platformInfo = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.pick)(newValue, _platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.platformInfoAttributes);
        if (!(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isDirectOrDeepEqual)(oldPlatformInfo, platformInfo)) {
            var __pendingListUpdates_values, _list___id;
            var _;
            if (_pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values) ((_ = (__pendingListUpdates_values = _pendingListUpdates_js__WEBPACK_IMPORTED_MODULE_1__.__pendingListUpdates.values)[_list___id = list.__id]) !== null && _ !== void 0 ? _ : __pendingListUpdates_values[_list___id] = new _listUpdateInfo_js__WEBPACK_IMPORTED_MODULE_0__.ListUpdateInfoRecording(list)).onSetAttribute(snapshot, platformInfo, oldPlatformInfo);
            snapshot.__listItemPlatformInfo = platformInfo;
            // The fakeSnapshot is missing `__parent`, so no `ListUpdateInfoRecording#onSetAttribute` will be called
            const fakeSnapshot = {
                __values: {
                    get [index] () {
                        return platformInfo;
                    }
                },
                __id: snapshot.__id,
                __elements: snapshot.__elements
            };
            (0,_platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.updateListItemPlatformInfo)(fakeSnapshot, index, oldPlatformInfo, elementIndex);
        }
    }
    if (!snapshot.__elements) return;
    if ('__spread' in newValue) {
        // first screen
        newValue = transformSpread(snapshot, index, newValue);
        snapshot.__values[index] = newValue;
    }
    const dataset = {};
    let match = null;
    for(const key in newValue){
        const v = newValue[key];
        if (v !== oldValue[key]) {
            if (key === 'className') __SetClasses(snapshot.__elements[elementIndex], v);
            else if (key === 'style') __SetInlineStyles(snapshot.__elements[elementIndex], v);
            else if (key === 'id') __SetID(snapshot.__elements[elementIndex], v);
            else if (key.startsWith('data-')) ;
            else if (key === 'ref') {
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        },
                        set [index] (value){
                            // Modifications to the ref value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_ref_js__WEBPACK_IMPORTED_MODULE_6__.updateRef)(fakeSnapshot, index, oldValue[key], elementIndex);
            } else if (key.endsWith(':ref')) {
                var _snapshot;
                var ___worklet_ref_set;
                (___worklet_ref_set = (_snapshot = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot.__worklet_ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __worklet_ref_set: snapshot.__worklet_ref_set
                };
                (0,_workletRef_js__WEBPACK_IMPORTED_MODULE_8__.updateWorkletRef)(fakeSnapshot, index, oldValue[key], elementIndex, key.slice(0, -4));
            } else if (key.endsWith(':gesture')) {
                const workletType = key.slice(0, -8);
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_gesture_js__WEBPACK_IMPORTED_MODULE_4__.updateGesture)(fakeSnapshot, index, oldValue[key], elementIndex, workletType);
            } else if (match = eventRegExp.exec(key)) {
                const workletType = match[2];
                const eventType = eventTypeMap[match[3]];
                const eventName = match[4];
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return v;
                        },
                        set [index] (value){
                            // Modifications to the event value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                if (workletType) (0,_workletEvent_js__WEBPACK_IMPORTED_MODULE_7__.updateWorkletEvent)(fakeSnapshot, index, oldValue[key], elementIndex, workletType, eventType, eventName);
                else (0,_event_js__WEBPACK_IMPORTED_MODULE_3__.updateEvent)(fakeSnapshot, index, oldValue[key], elementIndex, eventType, eventName, key);
            } else if (_platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.platformInfoAttributes.has(key)) ;
            else __SetAttribute(snapshot.__elements[elementIndex], key, v);
        }
        // collect data regardless of whether it has changed
        if (key.startsWith('data-')) dataset[key.slice(5)] = v;
    }
    let hasOldDataset = false;
    for(const key in oldValue){
        if (!(key in newValue)) {
            if (key === 'className') __SetClasses(snapshot.__elements[elementIndex], '');
            else if (key === 'style') __SetInlineStyles(snapshot.__elements[elementIndex], '');
            else if (key === 'id') __SetID(snapshot.__elements[elementIndex], null);
            else if (key.startsWith('data-')) ;
            else if (key === 'ref') {
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        },
                        set [index] (value){
                            // Modifications to the ref value should be reflected in the corresponding position of the spread.
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_ref_js__WEBPACK_IMPORTED_MODULE_6__.updateRef)(fakeSnapshot, index, oldValue[key], elementIndex);
            } else if (key.endsWith(':ref')) {
                var _snapshot1;
                var ___worklet_ref_set1;
                (___worklet_ref_set1 = (_snapshot1 = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set1 !== void 0 ? ___worklet_ref_set1 : _snapshot1.__worklet_ref_set = new Set();
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements,
                    __worklet_ref_set: snapshot.__worklet_ref_set
                };
                (0,_workletRef_js__WEBPACK_IMPORTED_MODULE_8__.updateWorkletRef)(fakeSnapshot, index, oldValue[key], elementIndex, key.slice(0, -4));
            } else if (key.endsWith(':gesture')) {
                const workletType = key.slice(0, -8);
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                (0,_gesture_js__WEBPACK_IMPORTED_MODULE_4__.updateGesture)(fakeSnapshot, index, oldValue[key], elementIndex, workletType);
            } else if (match = eventRegExp.exec(key)) {
                const workletType = match[2];
                const eventType = eventTypeMap[match[3]];
                const eventName = match[4];
                const fakeSnapshot = {
                    __values: {
                        get [index] () {
                            return undefined;
                        },
                        set [index] (value){
                            newValue[key] = value;
                        }
                    },
                    __id: snapshot.__id,
                    __elements: snapshot.__elements
                };
                if (workletType) (0,_workletEvent_js__WEBPACK_IMPORTED_MODULE_7__.updateWorkletEvent)(fakeSnapshot, index, oldValue[key], elementIndex, workletType, eventType, eventName);
                else (0,_event_js__WEBPACK_IMPORTED_MODULE_3__.updateEvent)(fakeSnapshot, index, oldValue[key], elementIndex, eventType, eventName, key);
            } else if (_platformInfo_js__WEBPACK_IMPORTED_MODULE_5__.platformInfoAttributes.has(key)) ;
            else __SetAttribute(snapshot.__elements[elementIndex], key, null);
        }
        // collect data regardless of whether it has changed
        if (key.startsWith('data-')) hasOldDataset = true;
    }
    // TODO: compare dataset before commit it to native?
    if (hasOldDataset || !(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.isEmptyObject)(dataset)) __SetDataset(snapshot.__elements[elementIndex], dataset);
}
function transformSpread(snapshot, index, spread) {
    const result = {};
    let hasNoFlattenAttributes = false;
    for(const key in spread){
        let value1 = spread[key];
        if (key === '__spread') ;
        else if (key === 'class' || key === 'className') {
            value1 !== null && value1 !== void 0 ? value1 : value1 = '';
            result['className'] = value1;
        } else if (key === 'ref') result[key] = value1 ? 1 : undefined;
        else if (typeof value1 === 'function') result[key] = `${snapshot.__id}:${index}:${key}`;
        else {
            if (!hasNoFlattenAttributes && noFlattenAttributes.has(key)) hasNoFlattenAttributes = true;
            result[key] = value1;
        }
    }
    if (hasNoFlattenAttributes) result['flatten'] = false;
    return result;
}
 //# sourceMappingURL=spread.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletEvent.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateWorkletEvent: () => (updateWorkletEvent)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _lifecycle_patch_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrating.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


function updateWorkletEvent(snapshot, expIndex, oldValue, elementIndex, workletType, eventType, eventName) {
    if (!snapshot.__elements) return;
    var _ref;
    const value = (_ref = snapshot.__values[expIndex] || undefined) !== null && _ref !== void 0 ? _ref : {};
    value._workletType = workletType;
    if (workletType === 'main-thread') {
        (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.onWorkletCtxUpdate)(value, oldValue, _lifecycle_patch_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__.isMainThreadHydrating, snapshot.__elements[elementIndex]);
        const event = {
            type: 'worklet',
            value
        };
        __AddEvent(snapshot.__elements[elementIndex], eventType, eventName, event);
    }
}
 //# sourceMappingURL=workletEvent.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/snapshot/workletRef.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyRefQueue: () => (applyRefQueue),
  updateWorkletRef: () => (updateWorkletRef),
  workletUnRef: () => (workletUnRef)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _lifecycle_patch_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/lifecycle/patch/isMainThreadHydrating.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.


let mtRefQueue = [];
function applyRefQueue() {
    const queue = mtRefQueue;
    mtRefQueue = [];
    for(let i = 0; i < queue.length; i += 2){
        const worklet = queue[i];
        const element = queue[i + 1];
        if ('_wvid' in worklet) (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.updateWorkletRef)(worklet, element);
        else if ('_wkltId' in worklet) worklet._unmount = (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.runWorkletCtx)(worklet, [
            {
                elementRefptr: element
            }
        ]);
    }
}
function addToRefQueue(worklet, element) {
    mtRefQueue.push(worklet, element);
}
function workletUnRef(value) {
    if ('_wvid' in value) (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.updateWorkletRef)(value, null);
    else if ('_wkltId' in value) {
        if (typeof value._unmount == 'function') value._unmount();
        else (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.runWorkletCtx)(value, [
            null
        ]);
    }
}
function updateWorkletRef(snapshot, expIndex, oldValue, elementIndex, _workletType) {
    var _snapshot___worklet_ref_set;
    if (!snapshot.__elements) return;
    if (oldValue && ((_snapshot___worklet_ref_set = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set === void 0 ? void 0 : _snapshot___worklet_ref_set.has(oldValue))) {
        var _snapshot___worklet_ref_set1;
        workletUnRef(oldValue);
        (_snapshot___worklet_ref_set1 = snapshot.__worklet_ref_set) === null || _snapshot___worklet_ref_set1 === void 0 ? void 0 : _snapshot___worklet_ref_set1.delete(oldValue);
    }
    const value = snapshot.__values[expIndex];
    if (value === null || value === undefined) ;
    else if (value._wvid) {
        const element = snapshot.__elements[elementIndex];
        addToRefQueue(value, element);
    } else if (value._wkltId) {
        const element = snapshot.__elements[elementIndex];
        (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.onWorkletCtxUpdate)(value, oldValue, _lifecycle_patch_isMainThreadHydrating_js__WEBPACK_IMPORTED_MODULE_1__.isMainThreadHydrating, element);
        addToRefQueue(value, element);
    /* v8 ignore next 3 */ } else if (value._type === '__LEPUS__' || value._lepusWorkletHash) ;
    else throw new Error('MainThreadRef: main-thread:ref must be of type MainThreadRef or main-thread function.');
    if (value) {
        var _snapshot;
        var ___worklet_ref_set;
        (___worklet_ref_set = (_snapshot = snapshot).__worklet_ref_set) !== null && ___worklet_ref_set !== void 0 ? ___worklet_ref_set : _snapshot.__worklet_ref_set = new Set();
        snapshot.__worklet_ref_set.add(value);
    }
    // Add an arbitrary attribute to avoid this element being layout-only
    __SetAttribute(snapshot.__elements[elementIndex], 'has-react-ref', true);
} //# sourceMappingURL=workletRef.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getDisplayName: () => (getDisplayName),
  isDirectOrDeepEqual: () => (isDirectOrDeepEqual),
  isEmptyObject: () => (isEmptyObject),
  isSdkVersionGt: () => (isSdkVersionGt),
  maybePromise: () => (maybePromise),
  pick: () => (pick)
});
/* ESM import */var _debug_component_stack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/debug/component-stack.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

function isDirectOrDeepEqual(a, b) {
    if (a === b) return true;
    try {
        if (typeof a == 'object' && a !== null && typeof b == 'object' && b !== null && JSON.stringify(a) === JSON.stringify(b)) return true;
    } catch (error) {
        if ( true && /circular|cyclic/i.test(error.message)) {
            // JavaScript engines give this different errors name and messages:
            // PrimJS: "circular reference"
            // JavaScriptCore: "JSON.stringify cannot serialize cyclic structures"
            // V8: "Converting circular structure to JSON"
            const vnode = (0,_debug_component_stack_js__WEBPACK_IMPORTED_MODULE_0__.getCurrentVNode)();
            if (vnode) {
                const stack = (0,_debug_component_stack_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerStack)(vnode);
                error.message += `\n\n${stack}`;
            }
        }
        throw error;
    }
    return false;
}
function isEmptyObject(obj) {
    for(const _ in obj)return false;
    return true;
}
function isSdkVersionGt(major, minor) {
    const lynxSdkVersion = SystemInfo.lynxSdkVersion || '1.0';
    const version = lynxSdkVersion.split('.');
    return Number(version[0]) > major || Number(version[0]) == major && Number(version[1]) > minor;
}
function pick(obj, keys) {
    const result = {};
    for (const key of keys)if (key in obj) result[key] = obj[key];
    return result;
}
function maybePromise(value) {
    return typeof value === 'object' && value !== null && typeof value.then === 'function';
}
function getDisplayName(type) {
    var _type_displayName;
    return (_type_displayName = type.displayName) !== null && _type_displayName !== void 0 ? _type_displayName : type.name;
} //# sourceMappingURL=utils.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  destroyTasks: () => (destroyTasks),
  destroyWorklet: () => (destroyWorklet)
});
/* ESM import */var _workletRefPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

const destroyTasks = [];
function destroyWorklet() {
    (0,_workletRefPool_js__WEBPACK_IMPORTED_MODULE_0__.takeWorkletRefInitValuePatch)();
    for (const task of destroyTasks)task();
    destroyTasks.length = 0;
} //# sourceMappingURL=destroy.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onFunctionCall: () => (onFunctionCall)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _destroy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/destroy.js");
/* ESM import */var _indexMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js");
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



let resolveMap;
function initReturnValueListener() {
    const context = lynx.getJSContext();
    resolveMap = new _indexMap_js__WEBPACK_IMPORTED_MODULE_2__.IndexMap();
    context.addEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.FunctionCallRet, onFunctionCallRet);
    _destroy_js__WEBPACK_IMPORTED_MODULE_1__.destroyTasks.push(()=>{
        context.removeEventListener(_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.FunctionCallRet, onFunctionCallRet);
        resolveMap = undefined;
    });
}
/**
 * @internal
 */ function onFunctionCall(resolve) {
    if (!resolveMap) initReturnValueListener();
    return resolveMap.add(resolve);
}
function onFunctionCallRet(event) {
    const data = JSON.parse(event.data);
    const resolve = resolveMap.get(data.resolveId);
    resolveMap.remove(data.resolveId);
    resolve(data.returnValue);
}
 //# sourceMappingURL=functionCall.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clearConfigCacheForTesting: () => (clearConfigCacheForTesting),
  isMtsEnabled: () => (isMtsEnabled),
  isRunOnBackgroundEnabled: () => (isRunOnBackgroundEnabled)
});
/* ESM import */var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/utils.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let mtsEnabled;
let runOnBackgroundEnabled;
/**
 * @internal
 */ function isMtsEnabled() {
    return mtsEnabled !== null && mtsEnabled !== void 0 ? mtsEnabled : mtsEnabled = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSdkVersionGt)(2, 13);
}
/**
 * @internal
 */ function isRunOnBackgroundEnabled() {
    return runOnBackgroundEnabled !== null && runOnBackgroundEnabled !== void 0 ? runOnBackgroundEnabled : runOnBackgroundEnabled = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.isSdkVersionGt)(2, 15);
}
function clearConfigCacheForTesting() {
    mtsEnabled = undefined;
    runOnBackgroundEnabled = undefined;
}
 //# sourceMappingURL=functionality.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/hmr.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletOnBackground: () => (registerWorkletOnBackground)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
// import { __globalSnapshotPatch } from '../lifecycle/patch/snapshotPatch.js';
// const workletHashSet: Set<string> = /* @__PURE__ */ new Set();
/* v8 ignore start */ /**
 * @internal
 */ // disable hmr until bugs are fixed
// TODO: re-enable hmr or change a way to impl it; also need to fix the test case DEV_ONLY_RegisterWorklet
function registerWorkletOnBackground(_type, _hash, _fn) {
// if (workletHashSet.has(hash)) {
//   return;
// }
// workletHashSet.add(hash);
// if (__globalSnapshotPatch) {
//   __globalSnapshotPatch.push(
//     SnapshotOperation.DEV_ONLY_RegisterWorklet,
//     hash,
//     // We use `Function.prototype.toString` to serialize the function for Lepus.
//     fn.toString(),
//   );
// }
}
/* v8 ignore stop */  //# sourceMappingURL=hmr.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/indexMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IndexMap: () => (IndexMap)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
class IndexMap {
    add(value) {
        const index = ++this.lastIndex;
        this.indexMap.set(index, value);
        return index;
    }
    get(index) {
        return this.indexMap.get(index);
    }
    remove(index) {
        this.indexMap.delete(index);
    }
    constructor(){
        this.lastIndex = 0;
        this.indexMap = new Map();
    }
}
 //# sourceMappingURL=indexMap.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnBackground.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  registerWorkletCtx: () => (registerWorkletCtx),
  runJSFunction: () => (runJSFunction),
  runOnBackground: () => (runOnBackground)
});
/* ESM import */var _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js");
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
/* ESM import */var _functionCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionCall.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



/**
 * @internal
 */ function runJSFunction() {}
/**
 * @internal
 */ function registerWorkletCtx() {}
/**
 * `runOnBackground` allows triggering js functions on the background thread asynchronously.
 * @param f - The js function to be called.
 * @returns A function. Calling which with the arguments to be passed to the js function to trigger it on the background thread. This function returns a promise that resolves to the return value of the js function.
 * @example
 * ```ts
 * import { runOnBackground } from '@lynx-js/react';
 *
 * async function someMainthreadFunction() {
 *   'main thread';
 *   const fn = runOnBackground(() => {
 *     return 'hello';
 *   });
 *   const result = await fn();
}
 * ```
 * @public
 */ function runOnBackground(f) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_1__.isRunOnBackgroundEnabled)()) throw new Error('runOnBackground requires Lynx sdk version 2.16.');
    const obj = f;
    if (obj._error) throw new Error(obj._error);
    return async (...params)=>{
        return new Promise((resolve)=>{
            const resolveId = (0,_functionCall_js__WEBPACK_IMPORTED_MODULE_2__.onFunctionCall)(resolve);
            if (obj._isFirstScreen) {
                (0,_lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.delayRunOnBackground)(obj, (fnId, execId)=>{
                    dispatchRunBackgroundFunctionEvent(fnId, params, execId, resolveId);
                });
                return;
            }
            dispatchRunBackgroundFunctionEvent(obj._jsFnId, params, obj._execId, resolveId);
        });
    };
}
function dispatchRunBackgroundFunctionEvent(fnId, params, execId, resolveId) {
    lynx.getJSContext().dispatchEvent({
        type: _lynx_js_react_worklet_runtime_bindings__WEBPACK_IMPORTED_MODULE_0__.WorkletEvents.runOnBackground,
        data: JSON.stringify({
            obj: {
                _jsFnId: fnId,
                _execId: execId
            },
            params,
            resolveId
        })
    });
}
 //# sourceMappingURL=runOnBackground.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/runOnMainThread.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runOnMainThread: () => (runOnMainThread)
});
/**
 * `runOnMainThread` allows triggering main thread functions on the main thread asynchronously.
 * @param fn - The main thread functions to be called.
 * @returns A function. Calling which with the arguments to be passed to the main thread function to trigger it on the main thread. This function returns a promise that resolves to the return value of the main thread function.
 * @example
 * ```ts
 * import { runOnMainThread } from '@lynx-js/react';
 *
 * async function someFunction() {
 *   const fn = runOnMainThread(() => {
 *     'main thread';
 *     return 'hello';
 *   });
 *   const result = await fn();
 * }
 * ```
 * @public
 */ function runOnMainThread(fn) {
    throw new Error('runOnMainThread can only be used on the background thread.');
} //# sourceMappingURL=runOnMainThread.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/transformToWorklet.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  transformToWorklet: () => (transformToWorklet)
});
let lastId = 0;
/**
 * transform args of `runOnBackground()`.
 *
 * @internal
 */ function transformToWorklet(obj) {
    const id = ++lastId;
    if (typeof obj !== 'function') return {
        _jsFnId: id,
        _error: `Argument of runOnBackground should be a function, but got [${typeof obj}] instead`
    };
    return {
        _jsFnId: id,
        _fn: obj
    };
} //# sourceMappingURL=transformToWorklet.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRef.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MainThreadRef: () => (MainThreadRef),
  clearWorkletRefLastIdForTesting: () => (clearWorkletRefLastIdForTesting),
  useMainThreadRef: () => (useMainThreadRef)
});
/* ESM import */var _hooks_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/hooks/react.js");

// Split into two variables for testing purposes
let lastIdBG = 0;
let lastIdMT = 0;
function clearWorkletRefLastIdForTesting() {
    lastIdBG = lastIdMT = 0;
}
class WorkletRef {
    get current() {
        if (true) /* v8 ignore next 3 */ throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed outside of main thread script.');
        return undefined;
    }
    set current(_) {
        if (true) throw new Error('MainThreadRef: value of a MainThreadRef cannot be accessed outside of main thread script.');
    }
    /**
     * @internal
     */ toJSON() {
        return {
            _wvid: this._wvid
        };
    }
    /**
     * @internal
     */ constructor(initValue, type){
        this._initValue = initValue;
        this._type = type;
        this._wvid = --lastIdMT;
    }
}
/**
 * A `MainThreadRef` is a ref that can only be accessed on the main thread. It is used to preserve
 * states between main thread function calls.
 * The data saved in `current` property of the `MainThreadRef` can be read and written in
 * multiple main thread functions.
 * @public
 */ class MainThreadRef extends WorkletRef {
    constructor(initValue){
        super(initValue, 'main-thread');
    }
}
function useMainThreadRef(initValue) {
    return (0,_hooks_react_js__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return new MainThreadRef(initValue);
    }, []);
} //# sourceMappingURL=workletRef.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/workletRefPool.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addWorkletRefInitValue: () => (addWorkletRefInitValue),
  takeWorkletRefInitValuePatch: () => (takeWorkletRefInitValuePatch)
});
/* ESM import */var _functionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/worklet/functionality.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

let initValuePatch = [];
const initValueIdSet = /*#__PURE__*/ new Set();
/**
 * @internal
 */ function addWorkletRefInitValue(id, value) {
    if (!(0,_functionality_js__WEBPACK_IMPORTED_MODULE_0__.isMtsEnabled)()) return;
    initValueIdSet.add(id);
    initValuePatch.push([
        id,
        value
    ]);
}
/**
 * @internal
 */ function takeWorkletRefInitValuePatch() {
    const res = initValuePatch;
    initValuePatch = [];
    return res;
} //# sourceMappingURL=workletRefPool.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/bindings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  delayRunOnBackground: () => (delayRunOnBackground),
  registerWorklet: () => (registerWorklet),
  runWorkletCtx: () => (runWorkletCtx),
  updateWorkletRef: () => (updateWorkletRef),
  updateWorkletRefInitValueChanges: () => (updateWorkletRefInitValueChanges)
});
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * Executes the worklet ctx.
 * @param worklet - The Worklet ctx to run.
 * @param params - An array as parameters of the worklet run.
 */ function runWorkletCtx(worklet, params) {
    var _globalThis_runWorklet, _globalThis;
    return (_globalThis_runWorklet = (_globalThis = globalThis).runWorklet) === null || _globalThis_runWorklet === void 0 ? void 0 : _globalThis_runWorklet.call(_globalThis, worklet, params);
}
/**
 * Save an element to a `WorkletRef`.
 *
 * @param workletRef - The `WorkletRef` to be updated.
 * @param element - The element.
 * @internal
 */ function updateWorkletRef(workletRef, element) {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._refImpl.updateWorkletRef(workletRef, element);
}
/**
 * Update the initial value of the `WorkletRef`.
 *
 * @param patch - An array containing the index and new value of the worklet value.
 */ function updateWorkletRefInitValueChanges(patch) {
    var _globalThis_lynxWorkletImpl;
    if (patch) (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._refImpl.updateWorkletRefInitValueChanges(patch);
}
/**
 * Register a worklet.
 *
 * @internal
 */ function registerWorklet(type, id, worklet) {
    globalThis.registerWorklet(type, id, worklet);
}
/**
 * Delay a runOnBackground after hydration.
 *
 * @internal
 */ function delayRunOnBackground(fnObj, fn) {
    var _globalThis_lynxWorkletImpl;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._runOnBackgroundDelayImpl.delayRunOnBackground(fnObj, fn);
}
 //# sourceMappingURL=bindings.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/events.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletEvents: () => (WorkletEvents)
});
var WorkletEvents;
(function(WorkletEvents) {
    WorkletEvents["runWorkletCtx"] = "Lynx.Worklet.runWorkletCtx";
    WorkletEvents["runOnBackground"] = "Lynx.Worklet.runOnBackground";
    WorkletEvents["FunctionCallRet"] = "Lynx.Worklet.FunctionCallRet";
    WorkletEvents["releaseBackgroundWorkletCtx"] = "Lynx.Worklet.releaseBackgroundWorkletCtx";
    WorkletEvents["releaseWorkletRef"] = "Lynx.Worklet.releaseWorkletRef";
})(WorkletEvents || (WorkletEvents = {}));
 //# sourceMappingURL=events.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkletEvents: () => (/* reexport safe */ _events_js__WEBPACK_IMPORTED_MODULE_3__.WorkletEvents),
  delayRunOnBackground: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.delayRunOnBackground),
  loadWorkletRuntime: () => (/* reexport safe */ _loadRuntime_js__WEBPACK_IMPORTED_MODULE_0__.loadWorkletRuntime),
  onHydrationFinished: () => (/* reexport safe */ _observers_js__WEBPACK_IMPORTED_MODULE_2__.onHydrationFinished),
  onWorkletCtxUpdate: () => (/* reexport safe */ _observers_js__WEBPACK_IMPORTED_MODULE_2__.onWorkletCtxUpdate),
  registerWorklet: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.registerWorklet),
  runWorkletCtx: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.runWorkletCtx),
  updateWorkletRef: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.updateWorkletRef),
  updateWorkletRefInitValueChanges: () => (/* reexport safe */ _bindings_js__WEBPACK_IMPORTED_MODULE_1__.updateWorkletRefInitValueChanges)
});
/* ESM import */var _loadRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/loadRuntime.js");
/* ESM import */var _bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/bindings.js");
/* ESM import */var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/observers.js");
/* ESM import */var _events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/events.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.



 //# sourceMappingURL=index.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/loadRuntime.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadWorkletRuntime: () => (loadWorkletRuntime)
});
/* ESM import */var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/global.js");
// Copyright 2024 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.

/**
 * Loads and initializes the Lepus chunk in the main thread.
 * @param __schema - The dynamic component entry for loading the Lepus chunk.
 * @returns A boolean indicating whether the Lepus chunk was loaded and initialized successfully.
 */ function loadWorkletRuntime(__schema) {
    if (typeof __LoadLepusChunk === 'undefined') return false;
    if (globalThis.lynxWorkletImpl) return true;
    return __LoadLepusChunk('worklet-runtime', {
        dynamicComponentEntry: __schema,
        chunkType: 0
    });
}
 //# sourceMappingURL=loadRuntime.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/bindings/observers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onHydrationFinished: () => (onHydrationFinished),
  onWorkletCtxUpdate: () => (onWorkletCtxUpdate)
});
// Copyright 2025 The Lynx Authors. All rights reserved.
// Licensed under the Apache License Version 2.0 that can be found in the
// LICENSE file in the root directory of this source tree.
/**
 * This function must be called when a worklet context is updated.
 *
 * @param worklet - The worklet to be updated
 * @param oldWorklet - The old worklet context
 * @param isFirstScreen - Whether it is before the hydration is finished
 * @param element - The element
 */ function onWorkletCtxUpdate(worklet, oldWorklet, isFirstScreen, element) {
    var _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager, _globalThis_lynxWorkletImpl, _globalThis_lynxWorkletImpl1, _globalThis_lynxWorkletImpl2;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : (_globalThis_lynxWorkletImpl__jsFunctionLifecycleManager = _globalThis_lynxWorkletImpl._jsFunctionLifecycleManager) === null || _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager === void 0 ? void 0 : _globalThis_lynxWorkletImpl__jsFunctionLifecycleManager.addRef(worklet._execId, worklet);
    if (isFirstScreen && oldWorklet) (_globalThis_lynxWorkletImpl1 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl1 === void 0 ? void 0 : _globalThis_lynxWorkletImpl1._hydrateCtx(worklet, oldWorklet);
    // For old version dynamic component compatibility.
    if (isFirstScreen) (_globalThis_lynxWorkletImpl2 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl2 === void 0 ? void 0 : _globalThis_lynxWorkletImpl2._eventDelayImpl.runDelayedWorklet(worklet, element);
}
/**
 * This must be called when the hydration is finished.
 */ function onHydrationFinished() {
    var _globalThis_lynxWorkletImpl, _globalThis_lynxWorkletImpl1, // For old version dynamic component compatibility.
    _globalThis_lynxWorkletImpl2;
    (_globalThis_lynxWorkletImpl = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl === void 0 ? void 0 : _globalThis_lynxWorkletImpl._runOnBackgroundDelayImpl.runDelayedBackgroundFunctions();
    (_globalThis_lynxWorkletImpl1 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl1 === void 0 ? void 0 : _globalThis_lynxWorkletImpl1._refImpl.clearFirstScreenWorkletRefMap();
    (_globalThis_lynxWorkletImpl2 = globalThis.lynxWorkletImpl) === null || _globalThis_lynxWorkletImpl2 === void 0 ? void 0 : _globalThis_lynxWorkletImpl2._eventDelayImpl.clearDelayedWorklets();
} //# sourceMappingURL=observers.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/@lynx-js/react/worklet-runtime/lib/global.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}
 //# sourceMappingURL=global.js.map


}),
"(react:main-thread)/./node_modules/preact/compat/dist/compat.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Children: () => (Children),
  Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
  Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
  PureComponent: () => (PureComponent),
  StrictMode: () => (StrictMode),
  Suspense: () => (Suspense),
  SuspenseList: () => (SuspenseList),
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED),
  cloneElement: () => (cloneElement),
  createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext),
  createElement: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
  createFactory: () => (createFactory),
  createPortal: () => (createPortal),
  createRef: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
  "default": () => (index),
  findDOMNode: () => (findDOMNode),
  flushSync: () => (flushSync),
  forwardRef: () => (forwardRef),
  hydrate: () => (hydrate),
  isElement: () => (isElement),
  isFragment: () => (isFragment),
  isMemo: () => (isMemo),
  isValidElement: () => (isValidElement),
  lazy: () => (lazy),
  memo: () => (memo),
  render: () => (render),
  startTransition: () => (startTransition),
  unmountComponentAtNode: () => (unmountComponentAtNode),
  unstable_batchedUpdates: () => (unstable_batchedUpdates),
  useCallback: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback),
  useContext: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext),
  useDebugValue: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue),
  useDeferredValue: () => (useDeferredValue),
  useEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect),
  useErrorBoundary: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundary),
  useId: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId),
  useImperativeHandle: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle),
  useInsertionEffect: () => (useInsertionEffect),
  useLayoutEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect),
  useMemo: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo),
  useReducer: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer),
  useRef: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef),
  useState: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState),
  useSyncExternalStore: () => (useSyncExternalStore),
  useTransition: () => (useTransition),
  version: () => (version)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/preact/hooks/dist/hooks.mjs");




/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function assign(obj, props) {
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
/**
 * Check if two objects have a different shape
 * @param {object} a
 * @param {object} b
 * @returns {boolean}
 */ function shallowDiffers(a, b) {
    for(var i in a)if (i !== '__source' && !(i in b)) return true;
    for(var _i in b)if (_i !== '__source' && a[_i] !== b[_i]) return true;
    return false;
}
/**
 * Check if two values are the same value
 * @param {*} x
 * @param {*} y
 * @returns {boolean}
 */ function is(x, y) {
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
}
/**
 * Component class with a predefined `shouldComponentUpdate` implementation
 */ function PureComponent(p, c) {
    this.props = p;
    this.context = c;
}
PureComponent.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component();
// Some third-party libraries check if this property is present
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
    return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};
/**
 * Memoize a component, so that it only updates when the props actually have
 * changed. This was previously known as `React.pure`.
 * @param {import('./internal').FunctionComponent} c functional component
 * @param {(prev: object, next: object) => boolean} [comparer] Custom equality function
 * @returns {import('./internal').FunctionComponent}
 */ function memo(c, comparer) {
    function shouldUpdate(nextProps) {
        var ref = this.props.ref;
        var updateRef = ref == nextProps.ref;
        if (!updateRef && ref) ref.call ? ref(null) : ref.current = null;
        if (!comparer) return shallowDiffers(this.props, nextProps);
        return !comparer(this.props, nextProps) || !updateRef;
    }
    function Memoed(props) {
        this.shouldComponentUpdate = shouldUpdate;
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(c, props);
    }
    Memoed.displayName = 'Memo(' + (c.displayName || c.name) + ')';
    Memoed.prototype.isReactComponent = true;
    Memoed.__f = true;
    return Memoed;
}
var oldDiffHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function(vnode, oldVNode) {
    if (vnode.type && vnode.type.__f && vnode.ref) {
        vnode.props.ref = vnode.ref;
        vnode.ref = null;
    }
    if (oldDiffHook) oldDiffHook(vnode, oldVNode);
};
var REACT_FORWARD_SYMBOL = typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.forward_ref') || 0xf47;
/**
 * Pass ref down to a child. This is mainly used in libraries with HOCs that
 * wrap components. Using `forwardRef` there is an easy way to get a reference
 * of the wrapped component instead of one of the wrapper itself.
 * @param {import('./index').ForwardFn} fn
 * @returns {import('./internal').FunctionComponent}
 */ function forwardRef(fn) {
    function Forwarded(props) {
        var clone = assign({}, props);
        delete clone.ref;
        return fn(clone, props.ref || null);
    }
    // mobx-react checks for this being present
    Forwarded.$$typeof = REACT_FORWARD_SYMBOL;
    // mobx-react heavily relies on implementation details.
    // It expects an object here with a `render` property,
    // and prototype.render will fail. Without this
    // mobx-react throws.
    Forwarded.render = Forwarded;
    Forwarded.prototype.isReactComponent = Forwarded.__f = true;
    Forwarded.displayName = 'ForwardRef(' + (fn.displayName || fn.name) + ')';
    return Forwarded;
}
var mapFn = function mapFn(children, fn) {
    if (children == null) return null;
    return (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(children).map(fn));
};
// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
    map: mapFn,
    forEach: mapFn,
    count: function count(children) {
        return children ? (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(children).length : 0;
    },
    only: function only(children) {
        var normalized = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(children);
        if (normalized.length !== 1) throw 'Children.only';
        return normalized[0];
    },
    toArray: preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray
};
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var MODE_HYDRATE = 32;
var oldCatchError = preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;
preact__WEBPACK_IMPORTED_MODULE_0__.options.__e = function(error, newVNode, oldVNode, errorInfo) {
    if (error.then) {
        /** @type {import('./internal').Component} */ var component;
        var vnode = newVNode;
        for(; vnode = vnode.__;)if ((component = vnode.__c) && component.__c) {
            if (newVNode.__e == null) {
                newVNode.__e = oldVNode.__e;
                newVNode.__k = oldVNode.__k;
            }
            // Don't call oldCatchError if we found a Suspense
            return component.__c(error, newVNode);
        }
    }
    oldCatchError(error, newVNode, oldVNode, errorInfo);
};
var oldUnmount = preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;
preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount = function(vnode) {
    /** @type {import('./internal').Component} */ var component = vnode.__c;
    if (component && component.__R) component.__R();
    // if the component is still hydrating
    // most likely it is because the component is suspended
    // we set the vnode.type as `null` so that it is not a typeof function
    // so the unmount will remove the vnode._dom
    if (component && vnode.__u & MODE_HYDRATE) vnode.type = null;
    if (oldUnmount) oldUnmount(vnode);
};
function detachedClone(vnode, detachedParent, parentDom) {
    if (vnode) {
        if (vnode.__c && vnode.__c.__H) {
            vnode.__c.__H.__.forEach(function(effect) {
                if (typeof effect.__c == 'function') effect.__c();
            });
            vnode.__c.__H = null;
        }
        vnode = assign({}, vnode);
        if (vnode.__c != null) {
            if (vnode.__c.__P === parentDom) vnode.__c.__P = detachedParent;
            vnode.__c = null;
        }
        vnode.__k = vnode.__k && vnode.__k.map(function(child) {
            return detachedClone(child, detachedParent, parentDom);
        });
    }
    return vnode;
}
function removeOriginal(vnode, detachedParent, originalParent) {
    if (vnode && originalParent) {
        vnode.__v = null;
        vnode.__k = vnode.__k && vnode.__k.map(function(child) {
            return removeOriginal(child, detachedParent, originalParent);
        });
        if (vnode.__c) {
            if (vnode.__c.__P === detachedParent) {
                if (vnode.__e) originalParent.appendChild(vnode.__e);
                vnode.__c.__e = true;
                vnode.__c.__P = originalParent;
            }
        }
    }
    return vnode;
}
// having custom inheritance instead of a class here saves a lot of bytes
function Suspense() {
    // we do not call super here to golf some bytes...
    this.__u = 0;
    this._suspenders = null;
    this.__b = null;
}
// Things we do here to save some bytes but are not proper JS inheritance:
// - call `new Component()` as the prototype
// - do not set `Suspense.prototype.constructor` to `Suspense`
Suspense.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component();
/**
 * @this {import('./internal').SuspenseComponent}
 * @param {Promise} promise The thrown promise
 * @param {import('./internal').VNode<any, any>} suspendingVNode The suspending component
 */ Suspense.prototype.__c = function(promise, suspendingVNode) {
    var suspendingComponent = suspendingVNode.__c;
    /** @type {import('./internal').SuspenseComponent} */ var c = this;
    if (c._suspenders == null) c._suspenders = [];
    c._suspenders.push(suspendingComponent);
    var resolve = suspended(c.__v);
    var resolved = false;
    var onResolved = function onResolved() {
        if (resolved) return;
        resolved = true;
        suspendingComponent.__R = null;
        if (resolve) resolve(onSuspensionComplete);
        else onSuspensionComplete();
    };
    suspendingComponent.__R = onResolved;
    var onSuspensionComplete = function onSuspensionComplete() {
        if (!--c.__u) {
            // If the suspension was during hydration we don't need to restore the
            // suspended children into the _children array
            if (c.state.__a) {
                var suspendedVNode = c.state.__a;
                c.__v.__k[0] = removeOriginal(suspendedVNode, suspendedVNode.__c.__P, suspendedVNode.__c.__O);
            }
            c.setState({
                __a: c.__b = null
            });
            var _suspended;
            while(_suspended = c._suspenders.pop())_suspended.forceUpdate();
        }
    };
    /**
   * We do not set `suspended: true` during hydration because we want the actual markup
   * to remain on screen and hydrate it when the suspense actually gets resolved.
   * While in non-hydration cases the usual fallback -> component flow would occour.
   */ if (!c.__u++ && !(suspendingVNode.__u & MODE_HYDRATE)) c.setState({
        __a: c.__b = c.__v.__k[0]
    });
    promise.then(onResolved, onResolved);
};
Suspense.prototype.componentWillUnmount = function() {
    this._suspenders = [];
};
/**
 * @this {import('./internal').SuspenseComponent}
 * @param {import('./internal').SuspenseComponent["props"]} props
 * @param {import('./internal').SuspenseState} state
 */ Suspense.prototype.render = function(props, state) {
    if (this.__b) {
        // When the Suspense's _vnode was created by a call to createVNode
        // (i.e. due to a setState further up in the tree)
        // it's _children prop is null, in this case we "forget" about the parked vnodes to detach
        if (this.__v.__k) {
            var detachedParent = preact__WEBPACK_IMPORTED_MODULE_0__.options.document.createElement('div');
            var detachedComponent = this.__v.__k[0].__c;
            this.__v.__k[0] = detachedClone(this.__b, detachedParent, detachedComponent.__O = detachedComponent.__P);
        }
        this.__b = null;
    }
    // Wrap fallback tree in a VNode that prevents itself from being marked as aborting mid-hydration:
    /** @type {import('./internal').VNode} */ var fallback = state.__a && (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, props.fallback);
    if (fallback) fallback.__u &= ~MODE_HYDRATE;
    return [
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, state.__a ? null : props.children),
        fallback
    ];
};
/**
 * Checks and calls the parent component's _suspended method, passing in the
 * suspended vnode. This is a way for a parent (e.g. SuspenseList) to get notified
 * that one of its children/descendants suspended.
 *
 * The parent MAY return a callback. The callback will get called when the
 * suspension resolves, notifying the parent of the fact.
 * Moreover, the callback gets function `unsuspend` as a parameter. The resolved
 * child descendant will not actually get unsuspended until `unsuspend` gets called.
 * This is a way for the parent to delay unsuspending.
 *
 * If the parent does not return a callback then the resolved vnode
 * gets unsuspended immediately when it resolves.
 *
 * @param {import('./internal').VNode} vnode
 * @returns {((unsuspend: () => void) => void)?}
 */ function suspended(vnode) {
    /** @type {import('./internal').Component} */ var component = vnode.__.__c;
    return component && component.__a && component.__a(vnode);
}
function lazy(loader) {
    var prom;
    var component;
    var error;
    function Lazy(props) {
        if (!prom) {
            prom = loader();
            prom.then(function(exports) {
                component = exports.default || exports;
            }, function(e) {
                error = e;
            });
        }
        if (error) throw error;
        if (!component) throw prom;
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, props);
    }
    Lazy.displayName = 'Lazy';
    Lazy.__f = true;
    return Lazy;
}
// Indexes to linked list nodes (nodes are stored as arrays to save bytes).
var SUSPENDED_COUNT = 0;
var RESOLVED_COUNT = 1;
var NEXT_NODE = 2;
// Having custom inheritance instead of a class here saves a lot of bytes.
function SuspenseList() {
    this._next = null;
    this._map = null;
}
// Mark one of child's earlier suspensions as resolved.
// Some pending callbacks may become callable due to this
// (e.g. the last suspended descendant gets resolved when
// revealOrder === 'together'). Process those callbacks as well.
var resolve = function resolve(list, child, node) {
    if (++node[RESOLVED_COUNT] === node[SUSPENDED_COUNT]) // matches the number of times it's been resolved. Therefore we
    // mark the child as completely resolved by deleting it from ._map.
    // This is used to figure out when *all* children have been completely
    // resolved when revealOrder is 'together'.
    list._map.delete(child);
    // If revealOrder is falsy then we can do an early exit, as the
    // callbacks won't get queued in the node anyway.
    // If revealOrder is 'together' then also do an early exit
    // if all suspended descendants have not yet been resolved.
    if (!list.props.revealOrder || list.props.revealOrder[0] === 't' && list._map.size) return;
    // Walk the currently suspended children in order, calling their
    // stored callbacks on the way. Stop if we encounter a child that
    // has not been completely resolved yet.
    node = list._next;
    while(node){
        while(node.length > 3)node.pop()();
        if (node[RESOLVED_COUNT] < node[SUSPENDED_COUNT]) break;
        list._next = node = node[NEXT_NODE];
    }
};
// Things we do here to save some bytes but are not proper JS inheritance:
// - call `new Component()` as the prototype
// - do not set `Suspense.prototype.constructor` to `Suspense`
SuspenseList.prototype = new preact__WEBPACK_IMPORTED_MODULE_0__.Component();
SuspenseList.prototype.__a = function(child) {
    var list = this;
    var delegated = suspended(list.__v);
    var node = list._map.get(child);
    node[SUSPENDED_COUNT]++;
    return function(unsuspend) {
        var wrappedUnsuspend = function wrappedUnsuspend() {
            if (!list.props.revealOrder) // is no need to coordinate a specific order or unsuspends.
            unsuspend();
            else {
                node.push(unsuspend);
                resolve(list, child, node);
            }
        };
        if (delegated) delegated(wrappedUnsuspend);
        else wrappedUnsuspend();
    };
};
SuspenseList.prototype.render = function(props) {
    this._next = null;
    this._map = new Map();
    var children = (0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(props.children);
    if (props.revealOrder && props.revealOrder[0] === 'b') // then flip the child list around so that the last child will be
    // the first in the linked list.
    children.reverse();
    // Build the linked list. Iterate through the children in reverse order
    // so that `_next` points to the first linked list node to be resolved.
    for(var i = children.length; i--;)// 	[suspended_count, resolved_count, next_node]
    // where suspended_count and resolved_count are numeric counters for
    // keeping track how many times a node has been suspended and resolved.
    //
    // Note that suspended_count starts from 1 instead of 0, so we can block
    // processing callbacks until componentDidMount has been called. In a sense
    // node is suspended at least until componentDidMount gets called!
    //
    // Pending callbacks are added to the end of the node:
    // 	[suspended_count, resolved_count, next_node, callback_0, callback_1, ...]
    this._map.set(children[i], this._next = [
        1,
        0,
        this._next
    ]);
    return props.children;
};
SuspenseList.prototype.componentDidUpdate = SuspenseList.prototype.componentDidMount = function() {
    var _this = this;
    // Iterate through all children after mounting for two reasons:
    // 1. As each node[SUSPENDED_COUNT] starts from 1, this iteration increases
    //    each node[RELEASED_COUNT] by 1, therefore balancing the counters.
    //    The nodes can now be completely consumed from the linked list.
    // 2. Handle nodes that might have gotten resolved between render and
    //    componentDidMount.
    this._map.forEach(function(node, child) {
        resolve(_this, child, node);
    });
};
/**
 * @param {import('../../src/index').RenderableProps<{ context: any }>} props
 */ function ContextProvider(props) {
    this.getChildContext = function() {
        return props.context;
    };
    return props.children;
}
/**
 * Portal component
 * @this {import('./internal').Component}
 * @param {object | null | undefined} props
 *
 * TODO: use createRoot() instead of fake root
 */ function Portal(props) {
    var _this = this;
    var container = props._container;
    _this.componentWillUnmount = function() {
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, _this._temp);
        _this._temp = null;
        _this._container = null;
    };
    // When we change container we should clear our old container and
    // indicate a new mount.
    if (_this._container && _this._container !== container) _this.componentWillUnmount();
    if (!_this._temp) {
        _this._container = container;
        // Create a fake DOM parent node that manages a subset of `container`'s children:
        _this._temp = {
            nodeType: 1,
            parentNode: container,
            childNodes: [],
            contains: function contains() {
                return true;
            },
            appendChild: function appendChild(child) {
                this.childNodes.push(child);
                _this._container.appendChild(child);
            },
            insertBefore: function insertBefore(child, before) {
                this.childNodes.push(child);
                _this._container.appendChild(child);
            },
            removeChild: function removeChild(child) {
                this.childNodes.splice(this.childNodes.indexOf(child) >>> 1, 1);
                _this._container.removeChild(child);
            }
        };
    }
    // Render our wrapping element into temp.
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(ContextProvider, {
        context: _this.context
    }, props.__v), _this._temp);
}
/**
 * Create a `Portal` to continue rendering the vnode tree at a different DOM node
 * @param {import('./internal').VNode} vnode The vnode to render
 * @param {import('./internal').PreactElement} container The DOM node to continue rendering in to.
 */ function createPortal(vnode, container) {
    var el = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(Portal, {
        __v: vnode,
        _container: container
    });
    el.containerInfo = container;
    return el;
}
var REACT_ELEMENT_TYPE = typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;
// Some libraries like `react-virtualized` explicitly check for this.
preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent = {};
// `UNSAFE_*` lifecycle hooks
// Preact only ever invokes the unprefixed methods.
// Here we provide a base "fallback" implementation that calls any defined UNSAFE_ prefixed method.
// - If a component defines its own `componentDidMount()` (including via defineProperty), use that.
// - If a component defines `UNSAFE_componentDidMount()`, `componentDidMount` is the alias getter/setter.
// - If anything assigns to an `UNSAFE_*` property, the assignment is forwarded to the unprefixed property.
// See https://github.com/preactjs/preact/issues/1941
[
    'componentWillMount',
    'componentWillReceiveProps',
    'componentWillUpdate'
].forEach(function(key) {
    Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype, key, {
        configurable: true,
        get: function get() {
            return this['UNSAFE_' + key];
        },
        set: function set(v) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                value: v
            });
        }
    });
});
/**
 * Proxy render() since React returns a Component reference.
 * @param {import('./internal').VNode} vnode VNode tree to render
 * @param {import('./internal').PreactElement} parent DOM node to render vnode tree into
 * @param {() => void} [callback] Optional callback that will be called after rendering
 * @returns {import('./internal').Component | null} The root component reference or null
 */ function render(vnode, parent, callback) {
    // React destroys any existing DOM nodes, see #1727
    // ...but only on the first render, see #1828
    if (parent.__k == null) parent.textContent = '';
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(vnode, parent);
    if (typeof callback == 'function') callback();
    return vnode ? vnode.__c : null;
}
function hydrate(vnode, parent, callback) {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(vnode, parent);
    if (typeof callback == 'function') callback();
    return vnode ? vnode.__c : null;
}
var oldEventHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.event;
preact__WEBPACK_IMPORTED_MODULE_0__.options.event = function(e) {
    if (oldEventHook) e = oldEventHook(e);
    e.persist = empty;
    e.isPropagationStopped = isPropagationStopped;
    e.isDefaultPrevented = isDefaultPrevented;
    return e.nativeEvent = e;
};
function empty() {}
function isPropagationStopped() {
    return this.cancelBubble;
}
function isDefaultPrevented() {
    return this.defaultPrevented;
}
var oldVNodeHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function(vnode) {
    vnode.$$typeof = REACT_ELEMENT_TYPE;
    if (oldVNodeHook) oldVNodeHook(vnode);
};
// This is a very very private internal function for React it
// is used to sort-of do runtime dependency injection.
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
    ReactCurrentDispatcher: {
        current: {
            useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,
            useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,
            useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,
            useDeferredValue: useDeferredValue,
            useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,
            useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,
            useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,
            useInsertionEffect: useInsertionEffect,
            useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,
            useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,
            // useMutableSource, // experimental-only and replaced by uSES, likely not worth supporting
            useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,
            useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,
            useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
            useSyncExternalStore: useSyncExternalStore,
            useTransition: useTransition
        }
    }
};
var version = '18.3.1'; // trick libraries to think we are react
/**
 * Legacy version of createElement.
 * @param {import('./internal').VNode["type"]} type The node name or Component constructor
 */ function createFactory(type) {
    return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null, type);
}
/**
 * Check if the passed element is a valid (p)react node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isValidElement(element) {
    return !!element && element.$$typeof === REACT_ELEMENT_TYPE;
}
/**
 * Check if the passed element is a Fragment node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isFragment(element) {
    return isValidElement(element) && element.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
/**
 * Check if the passed element is a Memo node.
 * @param {*} element The element to check
 * @returns {boolean}
 */ function isMemo(element) {
    return !!element && !!element.displayName && (typeof element.displayName === 'string' || element.displayName instanceof String) && element.displayName.startsWith('Memo(');
}
/**
 * Wrap `cloneElement` to abort if the passed element is not a valid element and apply
 * all vnode normalizations.
 * @param {import('./internal').VNode} element The vnode to clone
 * @param {object} props Props to add when cloning
 * @param {Array<import('./internal').ComponentChildren>} rest Optional component children
 */ function cloneElement(element) {
    if (!isValidElement(element)) return element;
    return preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null, arguments);
}
/**
 * Remove a component tree from the DOM, including state and event handlers.
 * @param {import('./internal').PreactElement} container
 * @returns {boolean}
 */ function unmountComponentAtNode(container) {
    if (container.__k) {
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, container);
        return true;
    }
    return false;
}
/**
 * Get the matching DOM node for a component
 * @param {import('./internal').Component} component
 * @returns {import('./internal').PreactElement | null}
 */ function findDOMNode(component) {
    return component && (component.base || component.nodeType === 1 && component) || null;
}
/**
 * Deprecated way to control batched rendering inside the reconciler, but we
 * already schedule in batches inside our rendering code
 * @template Arg
 * @param {(arg: Arg) => void} callback function that triggers the updated
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 */ // eslint-disable-next-line camelcase
var unstable_batchedUpdates = function unstable_batchedUpdates(callback, arg) {
    return callback(arg);
};
/**
 * In React, `flushSync` flushes the entire tree and forces a rerender. It's
 * implmented here as a no-op.
 * @template Arg
 * @template Result
 * @param {(arg: Arg) => Result} callback function that runs before the flush
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 * @returns
 */ var flushSync = function flushSync(callback, arg) {
    return callback(arg);
};
/**
 * Strict Mode is not implemented in Preact, so we provide a stand-in for it
 * that just renders its children without imposing any restrictions.
 */ var StrictMode = preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
function startTransition(cb) {
    cb();
}
function useDeferredValue(val) {
    return val;
}
function useTransition() {
    return [
        false,
        startTransition
    ];
}
// TODO: in theory this should be done after a VNode is diffed as we want to insert
// styles/... before it attaches
var useInsertionEffect = preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;
// compat to react-is
var isElement = isValidElement;
/**
 * This is taken from https://github.com/facebook/react/blob/main/packages/use-sync-external-store/src/useSyncExternalStoreShimClient.js#L84
 * on a high level this cuts out the warnings, ... and attempts a smaller implementation
 * @typedef {{ _value: any; _getSnapshot: () => any }} Store
 */ function useSyncExternalStore(subscribe, getSnapshot) {
    var value = getSnapshot();
    /**
   * @typedef {{ _instance: Store }} StoreRef
   * @type {[StoreRef, (store: StoreRef) => void]}
   */ var _useState = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({
        _instance: {
            __: value,
            _getSnapshot: getSnapshot
        }
    }), _instance = _useState[0]._instance, forceUpdate = _useState[1];
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function() {
        _instance.__ = value;
        _instance._getSnapshot = getSnapshot;
        if (didSnapshotChange(_instance)) forceUpdate({
            _instance: _instance
        });
    }, [
        subscribe,
        value,
        getSnapshot
    ]);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        if (didSnapshotChange(_instance)) forceUpdate({
            _instance: _instance
        });
        return subscribe(function() {
            if (didSnapshotChange(_instance)) forceUpdate({
                _instance: _instance
            });
        });
    }, [
        subscribe
    ]);
    return value;
}
/** @type {(inst: Store) => boolean} */ function didSnapshotChange(inst) {
    var latestGetSnapshot = inst._getSnapshot;
    var prevValue = inst.__;
    try {
        var nextValue = latestGetSnapshot();
        return !is(prevValue, nextValue);
    } catch (error) {
        return true;
    }
}
// React copies the named exports to the default one.
var index = {
    useState: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,
    useId: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,
    useReducer: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,
    useEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,
    useLayoutEffect: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,
    useInsertionEffect: useInsertionEffect,
    useTransition: useTransition,
    useDeferredValue: useDeferredValue,
    useSyncExternalStore: useSyncExternalStore,
    startTransition: startTransition,
    useRef: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,
    useImperativeHandle: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,
    useMemo: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,
    useCallback: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,
    useContext: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,
    useDebugValue: preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,
    version: version,
    Children: Children,
    render: render,
    hydrate: hydrate,
    unmountComponentAtNode: unmountComponentAtNode,
    createPortal: createPortal,
    createElement: preact__WEBPACK_IMPORTED_MODULE_0__.createElement,
    createContext: preact__WEBPACK_IMPORTED_MODULE_0__.createContext,
    createFactory: createFactory,
    cloneElement: cloneElement,
    createRef: preact__WEBPACK_IMPORTED_MODULE_0__.createRef,
    Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    isValidElement: isValidElement,
    isElement: isElement,
    isFragment: isFragment,
    isMemo: isMemo,
    findDOMNode: findDOMNode,
    Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component,
    PureComponent: PureComponent,
    memo: memo,
    forwardRef: forwardRef,
    flushSync: flushSync,
    unstable_batchedUpdates: unstable_batchedUpdates,
    StrictMode: StrictMode,
    Suspense: Suspense,
    SuspenseList: SuspenseList,
    lazy: lazy,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
};
 //# sourceMappingURL=compat.module.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/preact/debug/dist/debug.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  resetPropWarnings: () => (resetPropWarnings)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");
/* ESM import */var preact_devtools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/preact/devtools/dist/devtools.mjs");


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var loggedTypeFailures = {};
/**
 * Reset the history of which prop type warnings have been logged.
 */ function resetPropWarnings() {
    loggedTypeFailures = {};
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * Adapted from https://github.com/facebook/prop-types/blob/master/checkPropTypes.js
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 */ function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    Object.keys(typeSpecs).forEach(function(typeSpecName) {
        var error;
        try {
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (e) {
            error = e;
        }
        if (error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            console.error("Failed " + location + " type: " + error.message + (getStack && "\n" + getStack() || ''));
        }
    });
}
var ELEMENT_NODE = 1;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;
/**
 * Get human readable name of the component/dom node
 * @param {import('./internal').VNode} vnode
 * @param {import('./internal').VNode} vnode
 * @returns {string}
 */ function getDisplayName(vnode) {
    if (vnode.type === preact__WEBPACK_IMPORTED_MODULE_0__.Fragment) return 'Fragment';
    else if (typeof vnode.type == 'function') return vnode.type.displayName || vnode.type.name;
    else if (typeof vnode.type == 'string') return vnode.type;
    return '#text';
}
/**
 * Used to keep track of the currently rendered `vnode` and print it
 * in debug messages.
 */ var renderStack = [];
/**
 * Keep track of the current owners. An owner describes a component
 * which was responsible to render a specific `vnode`. This exclude
 * children that are passed via `props.children`, because they belong
 * to the parent owner.
 *
 * ```jsx
 * const Foo = props => <div>{props.children}</div> // div's owner is Foo
 * const Bar = props => {
 *   return (
 *     <Foo><span /></Foo> // Foo's owner is Bar, span's owner is Bar
 *   )
 * }
 * ```
 *
 * Note: A `vnode` may be hoisted to the root scope due to compiler
 * optimiztions. In these cases the `_owner` will be different.
 */ var ownerStack = [];
/**
 * Get the currently rendered `vnode`
 * @returns {import('./internal').VNode | null}
 */ function getCurrentVNode() {
    return renderStack.length > 0 ? renderStack[renderStack.length - 1] : null;
}
/**
 * If the user doesn't have `@babel/plugin-transform-react-jsx-source`
 * somewhere in his tool chain we can't print the filename and source
 * location of a component. In that case we just omit that, but we'll
 * print a helpful message to the console, notifying the user of it.
 */ var showJsxSourcePluginWarning = true;
/**
 * Check if a `vnode` is a possible owner.
 * @param {import('./internal').VNode} vnode
 */ function isPossibleOwner(vnode) {
    return typeof vnode.type == 'function' && vnode.type != preact__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
/**
 * Return the component stack that was captured up to this point.
 * @param {import('./internal').VNode} vnode
 * @returns {string}
 */ function getOwnerStack(vnode) {
    var stack = [
        vnode
    ];
    var next = vnode;
    while(next.__o != null){
        stack.push(next.__o);
        next = next.__o;
    }
    return stack.reduce(function(acc, owner) {
        acc += "  in " + getDisplayName(owner);
        var source = owner.__source;
        if (source) acc += " (at " + source.fileName + ":" + source.lineNumber + ")";
        else if (showJsxSourcePluginWarning) console.warn('Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.');
        showJsxSourcePluginWarning = false;
        return acc += '\n';
    }, '');
}
/**
 * Setup code to capture the component trace while rendering. Note that
 * we cannot simply traverse `vnode._parent` upwards, because we have some
 * debug messages for `this.setState` where the `vnode` is `undefined`.
 */ function setupComponentStack() {
    var oldDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;
    var oldDiffed = preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed;
    var oldRoot = preact__WEBPACK_IMPORTED_MODULE_0__.options.__;
    var oldVNode = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
    var oldRender = preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;
    preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed = function(vnode) {
        if (isPossibleOwner(vnode)) ownerStack.pop();
        renderStack.pop();
        if (oldDiffed) oldDiffed(vnode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function(vnode, oldVNode) {
        if (isPossibleOwner(vnode)) renderStack.push(vnode);
        if (oldDiff) oldDiff(vnode, oldVNode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__ = function(vnode, parent) {
        ownerStack = [];
        if (oldRoot) oldRoot(vnode, parent);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function(vnode) {
        vnode.__o = ownerStack.length > 0 ? ownerStack[ownerStack.length - 1] : null;
        if (oldVNode) oldVNode(vnode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__r = function(vnode) {
        if (isPossibleOwner(vnode)) ownerStack.push(vnode);
        if (oldRender) oldRender(vnode);
    };
}
/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function assign(obj, props) {
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
function isNaN(value) {
    return value !== value;
}
var isWeakMapSupported = typeof WeakMap == 'function';
/**
 * @param {import('./internal').VNode} vnode
 * @returns {Array<string>}
 */ function getDomChildren(vnode) {
    var domChildren = [];
    if (!vnode.__k) return domChildren;
    vnode.__k.forEach(function(child) {
        if (child && typeof child.type === 'function') domChildren.push.apply(domChildren, getDomChildren(child));
        else if (child && typeof child.type === 'string') domChildren.push(child.type);
    });
    return domChildren;
}
/**
 * @param {import('./internal').VNode} parent
 * @returns {string}
 */ function getClosestDomNodeParentName(parent) {
    if (!parent) return '';
    if (typeof parent.type == 'function') {
        if (parent.__ == null) {
            if (parent.__e != null && parent.__e.parentNode != null) return parent.__e.parentNode.localName;
            return '';
        }
        return getClosestDomNodeParentName(parent.__);
    }
    return /** @type {string} */ parent.type;
}
function initDebug() {
    setupComponentStack();
    var hooksAllowed = false;
    /* eslint-disable no-console */ var oldBeforeDiff = preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;
    var oldDiffed = preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed;
    var oldVnode = preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;
    var oldRender = preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;
    var oldCatchError = preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;
    var oldRoot = preact__WEBPACK_IMPORTED_MODULE_0__.options.__;
    var oldHook = preact__WEBPACK_IMPORTED_MODULE_0__.options.__h;
    var warnedComponents = !isWeakMapSupported ? null : {
        useEffect: new WeakMap(),
        useLayoutEffect: new WeakMap(),
        lazyPropTypes: new WeakMap()
    };
    var deprecations = [];
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__e = function(error, vnode, oldVNode, errorInfo) {
        var component = vnode && vnode.__c;
        if (component && typeof error.then == 'function') {
            var promise = error;
            error = new Error("Missing Suspense. The throwing component was: " + getDisplayName(vnode));
            var parent = vnode;
            for(; parent; parent = parent.__)if (parent.__c && parent.__c.__c) {
                error = promise;
                break;
            }
            // We haven't recovered and we know at this point that there is no
            // Suspense component higher up in the tree
            if (error instanceof Error) throw error;
        }
        try {
            errorInfo = errorInfo || {};
            errorInfo.componentStack = getOwnerStack(vnode);
            oldCatchError(error, vnode, oldVNode, errorInfo);
            // when an error was handled by an ErrorBoundary we will nonetheless emit an error
            // event on the window object. This is to make up for react compatibility in dev mode
            // and thus make the Next.js dev overlay work.
            if (typeof error.then != 'function') setTimeout(function() {
                throw error;
            });
        } catch (e) {
            throw e;
        }
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__ = function(vnode, parentNode) {
        if (!parentNode) throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
        var isValid;
        switch(parentNode.nodeType){
            case ELEMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
            case DOCUMENT_NODE:
                isValid = true;
                break;
            default:
                isValid = false;
        }
        if (!isValid) {
            var componentName = getDisplayName(vnode);
            throw new Error("Expected a valid HTML node as a second argument to render.\tReceived " + parentNode + " instead: render(<" + componentName + " />, " + parentNode + ");");
        }
        if (oldRoot) oldRoot(vnode, parentNode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__b = function(vnode, oldVNode) {
        var type = vnode.type;
        hooksAllowed = true;
        if (type === undefined) throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
        else if (type != null && typeof type == 'object') {
            if (type.__k !== undefined && type.__e !== undefined) throw new Error("Invalid type passed to createElement(): " + type + "\n\n" + 'Did you accidentally pass a JSX literal as JSX twice?\n\n' + ("  let My" + getDisplayName(vnode) + " = " + serializeVNode(type) + ";\n") + ("  let vnode = <My" + getDisplayName(vnode) + " />;\n\n") + 'This usually happens when you export a JSX literal and not the component.' + ("\n\n" + getOwnerStack(vnode)));
            throw new Error('Invalid type passed to createElement(): ' + (Array.isArray(type) ? 'array' : type));
        }
        if (vnode.ref !== undefined && typeof vnode.ref != 'function' && typeof vnode.ref != 'object' && !('$$typeof' in vnode // allow string refs when preact-compat is installed
        )) throw new Error("Component's \"ref\" property should be a function, or an object created " + ("by createRef(), but got [" + typeof vnode.ref + "] instead\n") + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
        if (typeof vnode.type == 'string') for(var key in vnode.props){
            if (key[0] === 'o' && key[1] === 'n' && typeof vnode.props[key] != 'function' && vnode.props[key] != null) throw new Error("Component's \"" + key + "\" property should be a function, " + ("but got [" + typeof vnode.props[key] + "] instead\n") + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
        }
        // Check prop-types if available
        if (typeof vnode.type == 'function' && vnode.type.propTypes) {
            if (vnode.type.displayName === 'Lazy' && warnedComponents && !warnedComponents.lazyPropTypes.has(vnode.type)) {
                var m = 'PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ';
                try {
                    var lazyVNode = vnode.type();
                    warnedComponents.lazyPropTypes.set(vnode.type, true);
                    console.warn(m + ("Component wrapped in lazy() is " + getDisplayName(lazyVNode)));
                } catch (promise) {
                    console.warn(m + "We will log the wrapped component's name once it is loaded.");
                }
            }
            var values = vnode.props;
            if (vnode.type.__f) {
                values = assign({}, values);
                delete values.ref;
            }
            checkPropTypes(vnode.type.propTypes, values, 'prop', getDisplayName(vnode), function() {
                return getOwnerStack(vnode);
            });
        }
        if (oldBeforeDiff) oldBeforeDiff(vnode, oldVNode);
    };
    var renderCount = 0;
    var currentComponent;
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__r = function(vnode) {
        if (oldRender) oldRender(vnode);
        hooksAllowed = true;
        var nextComponent = vnode.__c;
        if (nextComponent === currentComponent) renderCount++;
        else renderCount = 1;
        if (renderCount >= 25) throw new Error("Too many re-renders. This is limited to prevent an infinite loop " + ("which may lock up your browser. The component causing this is: " + getDisplayName(vnode)));
        currentComponent = nextComponent;
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.__h = function(comp, index, type) {
        if (!comp || !hooksAllowed) throw new Error('Hook can only be invoked from render methods.');
        if (oldHook) oldHook(comp, index, type);
    };
    // Ideally we'd want to print a warning once per component, but we
    // don't have access to the vnode that triggered it here. As a
    // compromise and to avoid flooding the console with warnings we
    // print each deprecation warning only once.
    var warn = function warn(property, message) {
        return {
            get: function get() {
                var key = 'get' + property + message;
                if (deprecations && deprecations.indexOf(key) < 0) {
                    deprecations.push(key);
                    console.warn("getting vnode." + property + " is deprecated, " + message);
                }
            },
            set: function set() {
                var key = 'set' + property + message;
                if (deprecations && deprecations.indexOf(key) < 0) {
                    deprecations.push(key);
                    console.warn("setting vnode." + property + " is not allowed, " + message);
                }
            }
        };
    };
    var deprecatedAttributes = {
        nodeName: warn('nodeName', 'use vnode.type'),
        attributes: warn('attributes', 'use vnode.props'),
        children: warn('children', 'use vnode.props.children')
    };
    var deprecatedProto = Object.create({}, deprecatedAttributes);
    preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode = function(vnode) {
        var props = vnode.props;
        if (vnode.type !== null && props != null && ('__source' in props || '__self' in props)) {
            var newProps = vnode.props = {};
            for(var i in props){
                var v = props[i];
                if (i === '__source') vnode.__source = v;
                else if (i === '__self') vnode.__self = v;
                else newProps[i] = v;
            }
        }
        // eslint-disable-next-line
        vnode.__proto__ = deprecatedProto;
        if (oldVnode) oldVnode(vnode);
    };
    preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed = function(vnode) {
        var type = vnode.type, parent = vnode.__;
        // Check if the user passed plain objects as children. Note that we cannot
        // move this check into `options.vnode` because components can receive
        // children in any shape they want (e.g.
        // `<MyJSONFormatter>{{ foo: 123, bar: "abc" }}</MyJSONFormatter>`).
        // Putting this check in `options.diffed` ensures that
        // `vnode._children` is set and that we only validate the children
        // that were actually rendered.
        if (vnode.__k) vnode.__k.forEach(function(child) {
            if (typeof child === 'object' && child && child.type === undefined) {
                var keys = Object.keys(child).join(',');
                throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + keys + "}." + ("\n\n" + getOwnerStack(vnode)));
            }
        });
        if (vnode.__c === currentComponent) renderCount = 0;
        if (typeof type === 'string' && (isTableElement(type) || type === 'p' || type === 'a' || type === 'button')) {
            // Avoid false positives when Preact only partially rendered the
            // HTML tree. Whilst we attempt to include the outer DOM in our
            // validation, this wouldn't work on the server for
            // `preact-render-to-string`. There we'd otherwise flood the terminal
            // with false positives, which we'd like to avoid.
            var domParentName = getClosestDomNodeParentName(parent);
            if (domParentName !== '' && isTableElement(type)) {
                if (type === 'table' && // Tables can be nested inside each other if it's inside a cell.
                // See https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#nesting_tables
                domParentName !== 'td' && isTableElement(domParentName)) {
                    console.log(domParentName, parent.__e);
                    console.error('Improper nesting of table. Your <table> should not have a table-node parent.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
                } else if ((type === 'thead' || type === 'tfoot' || type === 'tbody') && domParentName !== 'table') console.error('Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
                else if (type === 'tr' && domParentName !== 'thead' && domParentName !== 'tfoot' && domParentName !== 'tbody') console.error('Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
                else if (type === 'td' && domParentName !== 'tr') console.error('Improper nesting of table. Your <td> should have a <tr> parent.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
                else if (type === 'th' && domParentName !== 'tr') console.error('Improper nesting of table. Your <th> should have a <tr>.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
            } else if (type === 'p') {
                var illegalDomChildrenTypes = getDomChildren(vnode).filter(function(childType) {
                    return ILLEGAL_PARAGRAPH_CHILD_ELEMENTS.test(childType);
                });
                if (illegalDomChildrenTypes.length) console.error('Improper nesting of paragraph. Your <p> should not have ' + illegalDomChildrenTypes.join(', ') + 'as child-elements.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
            } else if (type === 'a' || type === 'button') {
                if (getDomChildren(vnode).indexOf(type) !== -1) console.error("Improper nesting of interactive content. Your <" + type + ">" + (" should not have other " + (type === 'a' ? 'anchor' : 'button')) + ' tags as child-elements.' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
            }
        }
        hooksAllowed = false;
        if (oldDiffed) oldDiffed(vnode);
        if (vnode.__k != null) {
            var keys = [];
            for(var i = 0; i < vnode.__k.length; i++){
                var child = vnode.__k[i];
                if (!child || child.key == null) continue;
                var key = child.key;
                if (keys.indexOf(key) !== -1) {
                    console.error('Following component has two or more children with the ' + ("same key attribute: \"" + key + "\". This may cause glitches and misbehavior ") + 'in rendering process. Component: \n\n' + serializeVNode(vnode) + ("\n\n" + getOwnerStack(vnode)));
                    break;
                }
                keys.push(key);
            }
        }
        if (vnode.__c != null && vnode.__c.__H != null) {
            // Validate that none of the hooks in this component contain arguments that are NaN.
            // This is a common mistake that can be hard to debug, so we want to catch it early.
            var hooks = vnode.__c.__H.__;
            if (hooks) for(var _i = 0; _i < hooks.length; _i += 1){
                var hook = hooks[_i];
                if (hook.__H) for(var j = 0; j < hook.__H.length; j++){
                    var arg = hook.__H[j];
                    if (isNaN(arg)) {
                        var componentName = getDisplayName(vnode);
                        throw new Error("Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " + _i + " in component " + componentName + " was called with NaN.");
                    }
                }
            }
        }
    };
}
var setState = preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.setState;
preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.setState = function(update, callback) {
    if (this.__v == null) {
        if (this.state == null) console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set ' + ("\"this.state = {}\" directly.\n\n" + getOwnerStack(getCurrentVNode())));
    }
    return setState.call(this, update, callback);
};
function isTableElement(type) {
    return type === 'table' || type === 'tfoot' || type === 'tbody' || type === 'thead' || type === 'td' || type === 'tr' || type === 'th';
}
var ILLEGAL_PARAGRAPH_CHILD_ELEMENTS = /^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/;
var forceUpdate = preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate;
preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.forceUpdate = function(callback) {
    if (this.__v == null) console.warn("Calling \"this.forceUpdate\" inside the constructor of a component is a " + ("no-op and might be a bug in your application.\n\n" + getOwnerStack(getCurrentVNode())));
    else if (this.__P == null) console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.' + ("\n\n" + getOwnerStack(this.__v)));
    return forceUpdate.call(this, callback);
};
/**
 * Serialize a vnode tree to a string
 * @param {import('./internal').VNode} vnode
 * @returns {string}
 */ function serializeVNode(vnode) {
    var props = vnode.props;
    var name = getDisplayName(vnode);
    var attrs = '';
    for(var prop in props)if (props.hasOwnProperty(prop) && prop !== 'children') {
        var value = props[prop];
        // If it is an object but doesn't have toString(), use Object.toString
        if (typeof value == 'function') value = "function " + (value.displayName || value.name) + "() {}";
        value = Object(value) === value && !value.toString ? Object.prototype.toString.call(value) : value + '';
        attrs += " " + prop + "=" + JSON.stringify(value);
    }
    var children = props.children;
    return "<" + name + attrs + (children && children.length ? '>..</' + name + '>' : ' />');
}
preact__WEBPACK_IMPORTED_MODULE_0__.options.__m = function(newVNode, excessDomChildren) {
    var type = newVNode.type;
    var availableTypes = excessDomChildren.map(function(child) {
        return child.localName;
    });
    console.error("Expected a DOM node of type " + type + " but found " + availableTypes.join(', ') + "as available DOM-node(s), this is caused by the SSR'd HTML containing different DOM-nodes compared to the hydrated one.\n\n" + getOwnerStack(newVNode));
};
initDebug();
 //# sourceMappingURL=debug.module.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/preact/devtools/dist/devtools.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addHookName: () => (addHookName)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");

function initDevTools() {
    var globalVar = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : undefined;
    if (globalVar !== null && globalVar !== undefined && globalVar.__PREACT_DEVTOOLS__) globalVar.__PREACT_DEVTOOLS__.attachPreact('10.24.0', preact__WEBPACK_IMPORTED_MODULE_0__.options, {
        Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component
    });
}
initDevTools();
/**
 * Display a custom label for a custom hook for the devtools panel
 * @type {<T>(value: T, name: string) => T}
 */ function addHookName(value, name) {
    if (preact__WEBPACK_IMPORTED_MODULE_0__.options.__a) preact__WEBPACK_IMPORTED_MODULE_0__.options.__a(name);
    return value;
}
 //# sourceMappingURL=devtools.module.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/preact/dist/preact.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Component: () => (BaseComponent),
  Fragment: () => (Fragment),
  cloneElement: () => (cloneElement),
  createContext: () => (createContext),
  createElement: () => (createElement),
  createRef: () => (createRef),
  h: () => (createElement),
  hydrate: () => (hydrate),
  isValidElement: () => (isValidElement),
  options: () => (options),
  render: () => (render),
  toChildArray: () => (toChildArray)
});
/** Normal hydration that attaches to a DOM tree but does not diff it. */ var MODE_HYDRATE = 32;
/** Signifies this VNode suspended on the previous render */ var MODE_SUSPENDED = 128;
/** Indicates that this node needs to be inserted while patching children */ var INSERT_VNODE = 65536;
/** Indicates a VNode has been matched with another VNode in the diff */ var MATCHED = 131072;
/** Reset all mode flags */ var RESET_MODE = ~(MODE_HYDRATE | MODE_SUSPENDED);
var EMPTY_OBJ = /** @type {any} */ {};
var EMPTY_ARR = [];
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var isArray = Array.isArray;
/**
 * Assign properties from `props` to `obj`
 * @template O, P The obj and props types
 * @param {O} obj The object to copy properties to
 * @param {P} props The object to copy properties from
 * @returns {O & P}
 */ function assign(obj, props) {
    // @ts-expect-error We change the type of `obj` to be `O & P`
    for(var i in props)obj[i] = props[i];
    return /** @type {O & P} */ obj;
}
/**
 * Remove a child node from its parent if attached. This is a workaround for
 * IE11 which doesn't support `Element.prototype.remove()`. Using this function
 * is smaller than including a dedicated polyfill.
 * @param {preact.ContainerNode} node The node to remove
 */ function removeNode(node) {
    if (node && node.parentNode) node.parentNode.removeChild(node);
}
var slice = EMPTY_ARR.slice;
/**
 * Find the closest error boundary to a thrown error and call it
 * @param {object} error The thrown value
 * @param {VNode} vnode The vnode that threw the error that was caught (except
 * for unmounting when this parameter is the highest parent that was being
 * unmounted)
 * @param {VNode} [oldVNode]
 * @param {ErrorInfo} [errorInfo]
 */ function _catchError(error, vnode, oldVNode, errorInfo) {
    /** @type {Component} */ var component, /** @type {ComponentType} */ ctor, /** @type {boolean} */ handled;
    for(; vnode = vnode.__;){
        if ((component = vnode.__c) && !component.__) try {
            ctor = component.constructor;
            if (ctor && ctor.getDerivedStateFromError != null) {
                component.setState(ctor.getDerivedStateFromError(error));
                handled = component.__d;
            }
            if (component.componentDidCatch != null) {
                component.componentDidCatch(error, errorInfo || {});
                handled = component.__d;
            }
            // This is an error boundary. Mark it as having bailed out, and whether it was mid-hydration.
            if (handled) return component.__E = component;
        } catch (e) {
            error = e;
        }
    }
    throw error;
}
/**
 * The `option` object can potentially contain callback functions
 * that are called during various stages of our renderer. This is the
 * foundation on which all our addons like `preact/debug`, `preact/compat`,
 * and `preact/hooks` are based on. See the `Options` type in `internal.d.ts`
 * for a full list of available option hooks (most editors/IDEs allow you to
 * ctrl+click or cmd+click on mac the type definition below).
 * @type {Options}
 */ var options = {
    __e: _catchError
};
var vnodeId = 0;
/**
 * Create an virtual node (used for JSX)
 * @param {VNode["type"]} type The node name or Component constructor for this
 * virtual node
 * @param {object | null | undefined} [props] The properties of the virtual node
 * @param {Array<import('.').ComponentChildren>} [children] The children of the
 * virtual node
 * @returns {VNode}
 */ function createElement(type, props, children) {
    var normalizedProps = {}, key, ref, i;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    // If a Component VNode, check for and apply defaultProps
    // Note: type may be undefined in development, must never error here.
    if (typeof type == 'function' && type.defaultProps != null) {
        for(i in type.defaultProps)if (normalizedProps[i] === undefined) normalizedProps[i] = type.defaultProps[i];
    }
    return createVNode(type, normalizedProps, key, ref, null);
}
/**
 * Create a VNode (used internally by Preact)
 * @param {VNode["type"]} type The node name or Component
 * Constructor for this virtual node
 * @param {object | string | number | null} props The properties of this virtual node.
 * If this virtual node represents a text node, this is the text of the node (string or number).
 * @param {string | number | null} key The key for this virtual node, used when
 * diffing it against its children
 * @param {VNode["ref"]} ref The ref property that will
 * receive a reference to its created child
 * @returns {VNode}
 */ function createVNode(type, props, key, ref, original) {
    // V8 seems to be better at detecting type shapes if the object is allocated from the same call site
    // Do not inline into createElement and coerceToVNode!
    /** @type {VNode} */ var vnode = {
        type: type,
        props: props,
        key: key,
        ref: ref,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        // _nextDom must be initialized to undefined b/c it will eventually
        // be set to dom.nextSibling which can return `null` and it is important
        // to be able to distinguish between an uninitialized _nextDom and
        // a _nextDom that has been set to `null`
        __d: undefined,
        __c: null,
        constructor: undefined,
        __v: original == null ? ++vnodeId : original,
        __i: -1,
        __u: 0
    };
    // Only invoke the vnode hook if this was *not* a direct copy:
    if (original == null && options.vnode != null) options.vnode(vnode);
    return vnode;
}
function createRef() {
    return {
        current: null
    };
}
function Fragment(props) {
    return props.children;
}
/**
 * Check if a the argument is a valid Preact VNode.
 * @param {*} vnode
 * @returns {vnode is VNode}
 */ var isValidElement = function isValidElement(vnode) {
    return vnode != null && vnode.constructor == undefined;
};
/**
 * Base Component class. Provides `setState()` and `forceUpdate()`, which
 * trigger rendering
 * @param {object} props The initial component props
 * @param {object} context The initial context from parent components'
 * getChildContext
 */ function BaseComponent(props, context) {
    this.props = props;
    this.context = context;
}
/**
 * Update component state and schedule a re-render.
 * @this {Component}
 * @param {object | ((s: object, p: object) => object)} update A hash of state
 * properties to update with new values or a function that given the current
 * state and props returns a new partial state
 * @param {() => void} [callback] A function to be called once component state is
 * updated
 */ BaseComponent.prototype.setState = function(update, callback) {
    // only clone state when copying to nextState the first time.
    var s;
    if (this.__s != null && this.__s !== this.state) s = this.__s;
    else s = this.__s = assign({}, this.state);
    if (typeof update == 'function') // preventing us from mutating it, so we need to clone it. See #2716
    update = update(assign({}, s), this.props);
    if (update) assign(s, update);
    // Skip update if updater function returned null
    if (update == null) return;
    if (this.__v) {
        if (callback) this._sb.push(callback);
        enqueueRender(this);
    }
};
/**
 * Immediately perform a synchronous re-render of the component
 * @this {Component}
 * @param {() => void} [callback] A function to be called after component is
 * re-rendered
 */ BaseComponent.prototype.forceUpdate = function(callback) {
    if (this.__v) {
        // Set render mode so that we can differentiate where the render request
        // is coming from. We need this because forceUpdate should never call
        // shouldComponentUpdate
        this.__e = true;
        if (callback) this.__h.push(callback);
        enqueueRender(this);
    }
};
/**
 * Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
 * Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
 * @param {object} props Props (eg: JSX attributes) received from parent
 * element/component
 * @param {object} state The component's current state
 * @param {object} context Context object, as returned by the nearest
 * ancestor's `getChildContext()`
 * @returns {ComponentChildren | void}
 */ BaseComponent.prototype.render = Fragment;
/**
 * @param {VNode} vnode
 * @param {number | null} [childIndex]
 */ function getDomSibling(vnode, childIndex) {
    if (childIndex == null) return vnode.__ ? getDomSibling(vnode.__, vnode.__i + 1) : null;
    var sibling;
    for(; childIndex < vnode.__k.length; childIndex++){
        sibling = vnode.__k[childIndex];
        if (sibling != null && sibling.__e != null) // we can rely on _dom to tell us if this subtree contains a
        // rendered DOM node, and what the first rendered DOM node is
        return sibling.__e;
    }
    // If we get here, we have not found a DOM node in this vnode's children.
    // We must resume from this vnode's sibling (in it's parent _children array)
    // Only climb up and search the parent if we aren't searching through a DOM
    // VNode (meaning we reached the DOM parent of the original vnode that began
    // the search)
    return typeof vnode.type == 'function' ? getDomSibling(vnode) : null;
}
/**
 * Trigger in-place re-rendering of a component.
 * @param {Component} component The component to rerender
 */ function renderComponent(component) {
    var oldVNode = component.__v, oldDom = oldVNode.__e, commitQueue = [], refQueue = [];
    if (component.__P) {
        var newVNode = assign({}, oldVNode);
        newVNode.__v = oldVNode.__v + 1;
        if (options.vnode) options.vnode(newVNode);
        diff(component.__P, newVNode, oldVNode, component.__n, component.__P.namespaceURI, oldVNode.__u & MODE_HYDRATE ? [
            oldDom
        ] : null, commitQueue, oldDom == null ? getDomSibling(oldVNode) : oldDom, !!(oldVNode.__u & MODE_HYDRATE), refQueue);
        newVNode.__v = oldVNode.__v;
        newVNode.__.__k[newVNode.__i] = newVNode;
        commitRoot(commitQueue, newVNode, refQueue);
        if (newVNode.__e != oldDom) updateParentDomPointers(newVNode);
    }
}
/**
 * @param {VNode} vnode
 */ function updateParentDomPointers(vnode) {
    if ((vnode = vnode.__) != null && vnode.__c != null) {
        vnode.__e = vnode.__c.base = null;
        for(var i = 0; i < vnode.__k.length; i++){
            var child = vnode.__k[i];
            if (child != null && child.__e != null) {
                vnode.__e = vnode.__c.base = child.__e;
                break;
            }
        }
        return updateParentDomPointers(vnode);
    }
}
/**
 * The render queue
 * @type {Array<Component>}
 */ var rerenderQueue = [];
/*
 * The value of `Component.debounce` must asynchronously invoke the passed in callback. It is
 * important that contributors to Preact can consistently reason about what calls to `setState`, etc.
 * do, and when their effects will be applied. See the links below for some further reading on designing
 * asynchronous APIs.
 * * [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony)
 * * [Callbacks synchronous and asynchronous](https://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/)
 */ var prevDebounce;
var defer = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
/**
 * Enqueue a rerender of a component
 * @param {Component} c The component to rerender
 */ function enqueueRender(c) {
    if (!c.__d && (c.__d = true) && rerenderQueue.push(c) && !process.__r++ || prevDebounce !== options.debounceRendering) {
        prevDebounce = options.debounceRendering;
        (prevDebounce || defer)(process);
    }
}
/**
 * @param {Component} a
 * @param {Component} b
 */ var depthSort = function depthSort(a, b) {
    return a.__v.__b - b.__v.__b;
};
/** Flush the render queue by rerendering all queued components */ function process() {
    var c;
    rerenderQueue.sort(depthSort);
    // Don't update `renderCount` yet. Keep its value non-zero to prevent unnecessary
    // process() calls from getting scheduled while `queue` is still being consumed.
    while(c = rerenderQueue.shift())if (c.__d) {
        var renderQueueLength = rerenderQueue.length;
        renderComponent(c);
        if (rerenderQueue.length > renderQueueLength) // keep the order from top to bottom with those new items so we can handle them in a
        // single pass
        rerenderQueue.sort(depthSort);
    }
    process.__r = 0;
}
process.__r = 0;
/**
 * Diff the children of a virtual node
 * @param {PreactElement} parentDom The DOM element whose children are being
 * diffed
 * @param {ComponentChildren[]} renderResult
 * @param {VNode} newParentVNode The new virtual node whose children should be
 * diff'ed against oldParentVNode
 * @param {VNode} oldParentVNode The old virtual node whose children should be
 * diff'ed against newParentVNode
 * @param {object} globalContext The current context object - modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */ function diffChildren(parentDom, renderResult, newParentVNode, oldParentVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    var i, /** @type {VNode} */ oldVNode, /** @type {VNode} */ childVNode, /** @type {PreactElement} */ newDom, /** @type {PreactElement} */ firstChildDom;
    // This is a compression of oldParentVNode!=null && oldParentVNode != EMPTY_OBJ && oldParentVNode._children || EMPTY_ARR
    // as EMPTY_OBJ._children should be `undefined`.
    /** @type {VNode[]} */ var oldChildren = oldParentVNode && oldParentVNode.__k || EMPTY_ARR;
    var newChildrenLength = renderResult.length;
    newParentVNode.__d = oldDom;
    constructNewChildrenArray(newParentVNode, renderResult, oldChildren);
    oldDom = newParentVNode.__d;
    for(i = 0; i < newChildrenLength; i++){
        childVNode = newParentVNode.__k[i];
        if (childVNode == null) continue;
        // At this point, constructNewChildrenArray has assigned _index to be the
        // matchingIndex for this VNode's oldVNode (or -1 if there is no oldVNode).
        if (childVNode.__i === -1) oldVNode = EMPTY_OBJ;
        else oldVNode = oldChildren[childVNode.__i] || EMPTY_OBJ;
        // Update childVNode._index to its final index
        childVNode.__i = i;
        // Morph the old element into the new one, but don't append it to the dom yet
        diff(parentDom, childVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        // Adjust DOM nodes
        newDom = childVNode.__e;
        if (childVNode.ref && oldVNode.ref != childVNode.ref) {
            if (oldVNode.ref) applyRef(oldVNode.ref, null, childVNode);
            refQueue.push(childVNode.ref, childVNode.__c || newDom, childVNode);
        }
        if (firstChildDom == null && newDom != null) firstChildDom = newDom;
        if (childVNode.__u & INSERT_VNODE || oldVNode.__k === childVNode.__k) oldDom = insert(childVNode, oldDom, parentDom);
        else if (typeof childVNode.type == 'function' && childVNode.__d !== undefined) // contain multiple DOM nodes as the same level, continue the diff from
        // the sibling of last DOM child of this child VNode
        oldDom = childVNode.__d;
        else if (newDom) oldDom = newDom.nextSibling;
        // Eagerly cleanup _nextDom. We don't need to persist the value because it
        // is only used by `diffChildren` to determine where to resume the diff
        // after diffing Components and Fragments. Once we store it the nextDOM
        // local var, we can clean up the property. Also prevents us hanging on to
        // DOM nodes that may have been unmounted.
        childVNode.__d = undefined;
        // Unset diffing flags
        childVNode.__u &= ~(INSERT_VNODE | MATCHED);
    }
    // TODO: With new child diffing algo, consider alt ways to diff Fragments.
    // Such as dropping oldDom and moving fragments in place
    //
    // Because the newParentVNode is Fragment-like, we need to set it's
    // _nextDom property to the nextSibling of its last child DOM node.
    //
    // `oldDom` contains the correct value here because if the last child
    // is a Fragment-like, then oldDom has already been set to that child's _nextDom.
    // If the last child is a DOM VNode, then oldDom will be set to that DOM
    // node's nextSibling.
    newParentVNode.__d = oldDom;
    newParentVNode.__e = firstChildDom;
}
/**
 * @param {VNode} newParentVNode
 * @param {ComponentChildren[]} renderResult
 * @param {VNode[]} oldChildren
 */ function constructNewChildrenArray(newParentVNode, renderResult, oldChildren) {
    /** @type {number} */ var i;
    /** @type {VNode} */ var childVNode;
    /** @type {VNode} */ var oldVNode;
    var newChildrenLength = renderResult.length;
    var oldChildrenLength = oldChildren.length, remainingOldChildren = oldChildrenLength;
    var skew = 0;
    newParentVNode.__k = [];
    for(i = 0; i < newChildrenLength; i++){
        // @ts-expect-error We are reusing the childVNode variable to hold both the
        // pre and post normalized childVNode
        childVNode = renderResult[i];
        if (childVNode == null || typeof childVNode == 'boolean' || typeof childVNode == 'function') {
            childVNode = newParentVNode.__k[i] = null;
            continue;
        } else if (typeof childVNode == 'string' || typeof childVNode == 'number' || // eslint-disable-next-line valid-typeof
        typeof childVNode == 'bigint' || childVNode.constructor == String) childVNode = newParentVNode.__k[i] = createVNode(null, childVNode, null, null, null);
        else if (isArray(childVNode)) childVNode = newParentVNode.__k[i] = createVNode(Fragment, {
            children: childVNode
        }, null, null, null);
        else if (childVNode.constructor === undefined && childVNode.__b > 0) // scenario:
        //   const reuse = <div />
        //   <div>{reuse}<span />{reuse}</div>
        childVNode = newParentVNode.__k[i] = createVNode(childVNode.type, childVNode.props, childVNode.key, childVNode.ref ? childVNode.ref : null, childVNode.__v);
        else childVNode = newParentVNode.__k[i] = childVNode;
        var skewedIndex = i + skew;
        childVNode.__ = newParentVNode;
        childVNode.__b = newParentVNode.__b + 1;
        // Temporarily store the matchingIndex on the _index property so we can pull
        // out the oldVNode in diffChildren. We'll override this to the VNode's
        // final index after using this property to get the oldVNode
        var matchingIndex = childVNode.__i = findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren);
        oldVNode = null;
        if (matchingIndex !== -1) {
            oldVNode = oldChildren[matchingIndex];
            remainingOldChildren--;
            if (oldVNode) oldVNode.__u |= MATCHED;
        }
        // Here, we define isMounting for the purposes of the skew diffing
        // algorithm. Nodes that are unsuspending are considered mounting and we detect
        // this by checking if oldVNode._original === null
        var isMounting = oldVNode == null || oldVNode.__v === null;
        if (isMounting) {
            if (matchingIndex == -1) skew--;
            // If we are mounting a DOM VNode, mark it for insertion
            if (typeof childVNode.type != 'function') childVNode.__u |= INSERT_VNODE;
        } else if (matchingIndex !== skewedIndex) {
            // When we move elements around i.e. [0, 1, 2] --> [1, 0, 2]
            // --> we diff 1, we find it at position 1 while our skewed index is 0 and our skew is 0
            //     we set the skew to 1 as we found an offset.
            // --> we diff 0, we find it at position 0 while our skewed index is at 2 and our skew is 1
            //     this makes us increase the skew again.
            // --> we diff 2, we find it at position 2 while our skewed index is at 4 and our skew is 2
            //
            // this becomes an optimization question where currently we see a 1 element offset as an insertion
            // or deletion i.e. we optimize for [0, 1, 2] --> [9, 0, 1, 2]
            // while a more than 1 offset we see as a swap.
            // We could probably build heuristics for having an optimized course of action here as well, but
            // might go at the cost of some bytes.
            //
            // If we wanted to optimize for i.e. only swaps we'd just do the last two code-branches and have
            // only the first item be a re-scouting and all the others fall in their skewed counter-part.
            // We could also further optimize for swaps
            if (matchingIndex == skewedIndex - 1) skew--;
            else if (matchingIndex == skewedIndex + 1) skew++;
            else {
                if (matchingIndex > skewedIndex) skew--;
                else skew++;
                // Move this VNode's DOM if the original index (matchingIndex) doesn't
                // match the new skew index (i + new skew)
                // In the former two branches we know that it matches after skewing
                childVNode.__u |= INSERT_VNODE;
            }
        }
    }
    // Remove remaining oldChildren if there are any. Loop forwards so that as we
    // unmount DOM from the beginning of the oldChildren, we can adjust oldDom to
    // point to the next child, which needs to be the first DOM node that won't be
    // unmounted.
    if (remainingOldChildren) for(i = 0; i < oldChildrenLength; i++){
        oldVNode = oldChildren[i];
        if (oldVNode != null && (oldVNode.__u & MATCHED) === 0) {
            if (oldVNode.__e == newParentVNode.__d) newParentVNode.__d = getDomSibling(oldVNode);
            unmount(oldVNode, oldVNode);
        }
    }
}
/**
 * @param {VNode} parentVNode
 * @param {PreactElement} oldDom
 * @param {PreactElement} parentDom
 * @returns {PreactElement}
 */ function insert(parentVNode, oldDom, parentDom) {
    // Note: VNodes in nested suspended trees may be missing _children.
    if (typeof parentVNode.type == 'function') {
        var children = parentVNode.__k;
        for(var i = 0; children && i < children.length; i++)if (children[i]) {
            // If we enter this code path on sCU bailout, where we copy
            // oldVNode._children to newVNode._children, we need to update the old
            // children's _parent pointer to point to the newVNode (parentVNode
            // here).
            children[i].__ = parentVNode;
            oldDom = insert(children[i], oldDom, parentDom);
        }
        return oldDom;
    } else if (parentVNode.__e != oldDom) {
        if (oldDom && parentVNode.type && !parentDom.contains(oldDom)) oldDom = getDomSibling(parentVNode);
        parentDom.insertBefore(parentVNode.__e, oldDom || null);
        oldDom = parentVNode.__e;
    }
    do oldDom = oldDom && oldDom.nextSibling;
    while (oldDom != null && oldDom.nodeType === 8)
    return oldDom;
}
/**
 * Flatten and loop through the children of a virtual node
 * @param {ComponentChildren} children The unflattened children of a virtual
 * node
 * @returns {VNode[]}
 */ function toChildArray(children, out) {
    out = out || [];
    if (children == null || typeof children == 'boolean') ;
    else if (isArray(children)) children.some(function(child) {
        toChildArray(child, out);
    });
    else out.push(children);
    return out;
}
/**
 * @param {VNode} childVNode
 * @param {VNode[]} oldChildren
 * @param {number} skewedIndex
 * @param {number} remainingOldChildren
 * @returns {number}
 */ function findMatchingIndex(childVNode, oldChildren, skewedIndex, remainingOldChildren) {
    var key = childVNode.key;
    var type = childVNode.type;
    var x = skewedIndex - 1;
    var y = skewedIndex + 1;
    var oldVNode = oldChildren[skewedIndex];
    // We only need to perform a search if there are more children
    // (remainingOldChildren) to search. However, if the oldVNode we just looked
    // at skewedIndex was not already used in this diff, then there must be at
    // least 1 other (so greater than 1) remainingOldChildren to attempt to match
    // against. So the following condition checks that ensuring
    // remainingOldChildren > 1 if the oldVNode is not already used/matched. Else
    // if the oldVNode was null or matched, then there could needs to be at least
    // 1 (aka `remainingOldChildren > 0`) children to find and compare against.
    var shouldSearch = remainingOldChildren > (oldVNode != null && (oldVNode.__u & MATCHED) === 0 ? 1 : 0);
    if (oldVNode === null || oldVNode && key == oldVNode.key && type === oldVNode.type && (oldVNode.__u & MATCHED) === 0) return skewedIndex;
    else if (shouldSearch) while(x >= 0 || y < oldChildren.length){
        if (x >= 0) {
            oldVNode = oldChildren[x];
            if (oldVNode && (oldVNode.__u & MATCHED) === 0 && key == oldVNode.key && type === oldVNode.type) return x;
            x--;
        }
        if (y < oldChildren.length) {
            oldVNode = oldChildren[y];
            if (oldVNode && (oldVNode.__u & MATCHED) === 0 && key == oldVNode.key && type === oldVNode.type) return y;
            y++;
        }
    }
    return -1;
}
function setStyle(style, key, value) {
    if (key[0] === '-') style.setProperty(key, value == null ? '' : value);
    else if (value == null) style[key] = '';
    else if (typeof value != 'number' || IS_NON_DIMENSIONAL.test(key)) style[key] = value;
    else style[key] = value + 'px';
}
// A logical clock to solve issues like https://github.com/preactjs/preact/issues/3927.
// When the DOM performs an event it leaves micro-ticks in between bubbling up which means that
// an event can trigger on a newly reated DOM-node while the event bubbles up.
//
// Originally inspired by Vue
// (https://github.com/vuejs/core/blob/caeb8a68811a1b0f79/packages/runtime-dom/src/modules/events.ts#L90-L101),
// but modified to use a logical clock instead of Date.now() in case event handlers get attached
// and events get dispatched during the same millisecond.
//
// The clock is incremented after each new event dispatch. This allows 1 000 000 new events
// per second for over 280 years before the value reaches Number.MAX_SAFE_INTEGER (2**53 - 1).
var eventClock = 0;
/**
 * Set a property value on a DOM node
 * @param {PreactElement} dom The DOM node to modify
 * @param {string} name The name of the property to set
 * @param {*} value The value to set the property to
 * @param {*} oldValue The old value the property had
 * @param {string} namespace Whether or not this DOM node is an SVG node or not
 */ function setProperty(dom, name, value, oldValue, namespace) {
    var useCapture;
    o: if (name === 'style') {
        if (typeof value == 'string') dom.style.cssText = value;
        else {
            if (typeof oldValue == 'string') dom.style.cssText = oldValue = '';
            if (oldValue) {
                for(name in oldValue)if (!(value && name in value)) setStyle(dom.style, name, '');
            }
            if (value) {
                for(name in value)if (!oldValue || value[name] !== oldValue[name]) setStyle(dom.style, name, value[name]);
            }
        }
    } else if (name[0] === 'o' && name[1] === 'n') {
        useCapture = name !== (name = name.replace(/(PointerCapture)$|Capture$/i, '$1'));
        // Infer correct casing for DOM built-in events:
        if (name.toLowerCase() in dom || name === 'onFocusOut' || name === 'onFocusIn') name = name.toLowerCase().slice(2);
        else name = name.slice(2);
        if (!dom.l) dom.l = {};
        dom.l[name + useCapture] = value;
        if (value) {
            if (!oldValue) {
                value._attached = eventClock;
                dom.addEventListener(name, useCapture ? eventProxyCapture : eventProxy, useCapture);
            } else value._attached = oldValue._attached;
        } else dom.removeEventListener(name, useCapture ? eventProxyCapture : eventProxy, useCapture);
    } else {
        if (namespace == 'http://www.w3.org/2000/svg') // - xlink:href / xlinkHref --> href (xlink:href was removed from SVG and isn't needed)
        // - className --> class
        name = name.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
        else if (name != 'width' && name != 'height' && name != 'href' && name != 'list' && name != 'form' && // Default value in browsers is `-1` and an empty string is
        // cast to `0` instead
        name != 'tabIndex' && name != 'download' && name != 'rowSpan' && name != 'colSpan' && name != 'role' && name != 'popover' && name in dom) try {
            dom[name] = value == null ? '' : value;
            break o;
        } catch (e) {}
        // aria- and data- attributes have no boolean representation.
        // A `false` value is different from the attribute not being
        // present, so we can't remove it. For non-boolean aria
        // attributes we could treat false as a removal, but the
        // amount of exceptions would cost too many bytes. On top of
        // that other frameworks generally stringify `false`.
        if (typeof value == 'function') ;
        else if (value != null && (value !== false || name[4] === '-')) dom.setAttribute(name, name == 'popover' && value == true ? '' : value);
        else dom.removeAttribute(name);
    }
}
/**
 * Create an event proxy function.
 * @param {boolean} useCapture Is the event handler for the capture phase.
 * @private
 */ function createEventProxy(useCapture) {
    /**
   * Proxy an event to hooked event handlers
   * @param {PreactEvent} e The event object from the browser
   * @private
   */ return function(e) {
        if (this.l) {
            var eventHandler = this.l[e.type + useCapture];
            if (e._dispatched == null) e._dispatched = eventClock++;
            else if (e._dispatched < eventHandler._attached) return;
            return eventHandler(options.event ? options.event(e) : e);
        }
    };
}
var eventProxy = createEventProxy(false);
var eventProxyCapture = createEventProxy(true);
/**
 * Diff two virtual nodes and apply proper changes to the DOM
 * @param {PreactElement} parentDom The parent of the DOM element
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object. Modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */ function diff(parentDom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue) {
    /** @type {any} */ var tmp, newType = newVNode.type;
    // When passing through createElement it assigns the object
    // constructor as undefined. This to prevent JSON-injection.
    if (newVNode.constructor !== undefined) return null;
    // If the previous diff bailed out, resume creating/hydrating.
    if (oldVNode.__u & MODE_SUSPENDED) {
        isHydrating = !!(oldVNode.__u & MODE_HYDRATE);
        oldDom = newVNode.__e = oldVNode.__e;
        excessDomChildren = [
            oldDom
        ];
    }
    if (tmp = options.__b) tmp(newVNode, oldVNode);
    outer: if (typeof newType == 'function') try {
        var c, isNew, oldProps, oldState, snapshot, clearProcessingException;
        var newProps = newVNode.props;
        var isClassComponent = 'prototype' in newType && newType.prototype.render;
        // Necessary for createContext api. Setting this property will pass
        // the context value as `this.context` just for this component.
        tmp = newType.contextType;
        var provider = tmp && globalContext[tmp.__c];
        var componentContext = tmp ? provider ? provider.props.value : tmp.__ : globalContext;
        // Get component and set it to `c`
        if (oldVNode.__c) {
            c = newVNode.__c = oldVNode.__c;
            clearProcessingException = c.__ = c.__E;
        } else {
            // Instantiate the new component
            if (isClassComponent) newVNode.__c = c = new newType(newProps, componentContext); // eslint-disable-line new-cap
            else {
                // @ts-expect-error Trust me, Component implements the interface we want
                newVNode.__c = c = new BaseComponent(newProps, componentContext);
                c.constructor = newType;
                c.render = doRender;
            }
            if (provider) provider.sub(c);
            c.props = newProps;
            if (!c.state) c.state = {};
            c.context = componentContext;
            c.__n = globalContext;
            isNew = c.__d = true;
            c.__h = [];
            c._sb = [];
        }
        // Invoke getDerivedStateFromProps
        if (isClassComponent && c.__s == null) c.__s = c.state;
        if (isClassComponent && newType.getDerivedStateFromProps != null) {
            if (c.__s == c.state) c.__s = assign({}, c.__s);
            assign(c.__s, newType.getDerivedStateFromProps(newProps, c.__s));
        }
        oldProps = c.props;
        oldState = c.state;
        c.__v = newVNode;
        // Invoke pre-render lifecycle methods
        if (isNew) {
            if (isClassComponent && newType.getDerivedStateFromProps == null && c.componentWillMount != null) c.componentWillMount();
            if (isClassComponent && c.componentDidMount != null) c.__h.push(c.componentDidMount);
        } else {
            if (isClassComponent && newType.getDerivedStateFromProps == null && newProps !== oldProps && c.componentWillReceiveProps != null) c.componentWillReceiveProps(newProps, componentContext);
            if (!c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(newProps, c.__s, componentContext) === false || newVNode.__v === oldVNode.__v)) {
                // More info about this here: https://gist.github.com/JoviDeCroock/bec5f2ce93544d2e6070ef8e0036e4e8
                if (newVNode.__v !== oldVNode.__v) {
                    // When we are dealing with a bail because of sCU we have to update
                    // the props, state and dirty-state.
                    // when we are dealing with strict-equality we don't as the child could still
                    // be dirtied see #3883
                    c.props = newProps;
                    c.state = c.__s;
                    c.__d = false;
                }
                newVNode.__e = oldVNode.__e;
                newVNode.__k = oldVNode.__k;
                newVNode.__k.some(function(vnode) {
                    if (vnode) vnode.__ = newVNode;
                });
                for(var i = 0; i < c._sb.length; i++)c.__h.push(c._sb[i]);
                c._sb = [];
                if (c.__h.length) commitQueue.push(c);
                break outer;
            }
            if (c.componentWillUpdate != null) c.componentWillUpdate(newProps, c.__s, componentContext);
            if (isClassComponent && c.componentDidUpdate != null) c.__h.push(function() {
                c.componentDidUpdate(oldProps, oldState, snapshot);
            });
        }
        c.context = componentContext;
        c.props = newProps;
        c.__P = parentDom;
        c.__e = false;
        var renderHook = options.__r, count = 0;
        if (isClassComponent) {
            c.state = c.__s;
            c.__d = false;
            if (renderHook) renderHook(newVNode);
            tmp = c.render(c.props, c.state, c.context);
            for(var _i = 0; _i < c._sb.length; _i++)c.__h.push(c._sb[_i]);
            c._sb = [];
        } else do {
            c.__d = false;
            if (renderHook) renderHook(newVNode);
            tmp = c.render(c.props, c.state, c.context);
            // Handle setState called in render, see #2553
            c.state = c.__s;
        }while (c.__d && ++count < 25)
        // Handle setState called in render, see #2553
        c.state = c.__s;
        if (c.getChildContext != null) globalContext = assign(assign({}, globalContext), c.getChildContext());
        if (isClassComponent && !isNew && c.getSnapshotBeforeUpdate != null) snapshot = c.getSnapshotBeforeUpdate(oldProps, oldState);
        var isTopLevelFragment = tmp != null && tmp.type === Fragment && tmp.key == null;
        var renderResult = isTopLevelFragment ? tmp.props.children : tmp;
        diffChildren(parentDom, isArray(renderResult) ? renderResult : [
            renderResult
        ], newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, oldDom, isHydrating, refQueue);
        c.base = newVNode.__e;
        // We successfully rendered this VNode, unset any stored hydration/bailout state:
        newVNode.__u &= RESET_MODE;
        if (c.__h.length) commitQueue.push(c);
        if (clearProcessingException) c.__E = c.__ = null;
    } catch (e) {
        newVNode.__v = null;
        // if hydrating or creating initial tree, bailout preserves DOM:
        if (isHydrating || excessDomChildren != null) {
            newVNode.__u |= isHydrating ? MODE_HYDRATE | MODE_SUSPENDED : MODE_HYDRATE;
            while(oldDom && oldDom.nodeType === 8 && oldDom.nextSibling)oldDom = oldDom.nextSibling;
            excessDomChildren[excessDomChildren.indexOf(oldDom)] = null;
            newVNode.__e = oldDom;
        } else {
            newVNode.__e = oldVNode.__e;
            newVNode.__k = oldVNode.__k;
        }
        options.__e(e, newVNode, oldVNode);
    }
    else if (excessDomChildren == null && newVNode.__v === oldVNode.__v) {
        newVNode.__k = oldVNode.__k;
        newVNode.__e = oldVNode.__e;
    } else newVNode.__e = diffElementNodes(oldVNode.__e, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, isHydrating, refQueue);
    if (tmp = options.diffed) tmp(newVNode);
}
/**
 * @param {Array<Component>} commitQueue List of components
 * which have callbacks to invoke in commitRoot
 * @param {VNode} root
 */ function commitRoot(commitQueue, root, refQueue) {
    root.__d = undefined;
    for(var i = 0; i < refQueue.length; i++)applyRef(refQueue[i], refQueue[++i], refQueue[++i]);
    if (options.__c) options.__c(root, commitQueue);
    commitQueue.some(function(c) {
        try {
            // @ts-expect-error Reuse the commitQueue variable here so the type changes
            commitQueue = c.__h;
            c.__h = [];
            commitQueue.some(function(cb) {
                // @ts-expect-error See above comment on commitQueue
                cb.call(c);
            });
        } catch (e) {
            options.__e(e, c.__v);
        }
    });
}
/**
 * Diff two virtual nodes representing DOM element
 * @param {PreactElement} dom The DOM element representing the virtual nodes
 * being diffed
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 * @returns {PreactElement}
 */ function diffElementNodes(dom, newVNode, oldVNode, globalContext, namespace, excessDomChildren, commitQueue, isHydrating, refQueue) {
    var oldProps = oldVNode.props;
    var newProps = newVNode.props;
    var nodeType = /** @type {string} */ newVNode.type;
    /** @type {any} */ var i;
    /** @type {{ __html?: string }} */ var newHtml;
    /** @type {{ __html?: string }} */ var oldHtml;
    /** @type {ComponentChildren} */ var newChildren;
    var value;
    var inputValue;
    var checked;
    // Tracks entering and exiting namespaces when descending through the tree.
    if (nodeType === 'svg') namespace = 'http://www.w3.org/2000/svg';
    else if (nodeType === 'math') namespace = 'http://www.w3.org/1998/Math/MathML';
    else if (!namespace) namespace = 'http://www.w3.org/1999/xhtml';
    if (excessDomChildren != null) for(i = 0; i < excessDomChildren.length; i++){
        value = excessDomChildren[i];
        // if newVNode matches an element in excessDomChildren or the `dom`
        // argument matches an element in excessDomChildren, remove it from
        // excessDomChildren so it isn't later removed in diffChildren
        if (value && 'setAttribute' in value === !!nodeType && (nodeType ? value.localName === nodeType : value.nodeType === 3)) {
            dom = value;
            excessDomChildren[i] = null;
            break;
        }
    }
    if (dom == null) {
        if (nodeType === null) return options.document.createTextNode(newProps);
        dom = options.document.createElementNS(namespace, nodeType, newProps.is && newProps);
        // we are creating a new node, so we can assume this is a new subtree (in
        // case we are hydrating), this deopts the hydrate
        if (isHydrating) {
            if (options.__m) options.__m(newVNode, excessDomChildren);
            isHydrating = false;
        }
        // we created a new parent, so none of the previously attached children can be reused:
        excessDomChildren = null;
    }
    if (nodeType === null) {
        if (oldProps !== newProps && (!isHydrating || dom.data !== newProps)) dom.data = newProps;
    } else {
        // If excessDomChildren was not null, repopulate it with the current element's children:
        excessDomChildren = excessDomChildren && slice.call(dom.childNodes);
        oldProps = oldVNode.props || EMPTY_OBJ;
        // If we are in a situation where we are not hydrating but are using
        // existing DOM (e.g. replaceNode) we should read the existing DOM
        // attributes to diff them
        if (!isHydrating && excessDomChildren != null) {
            oldProps = {};
            for(i = 0; i < dom.attributes.length; i++){
                value = dom.attributes[i];
                oldProps[value.name] = value.value;
            }
        }
        for(i in oldProps){
            value = oldProps[i];
            if (i == 'children') ;
            else if (i == 'dangerouslySetInnerHTML') oldHtml = value;
            else if (!(i in newProps)) {
                if (i == 'value' && 'defaultValue' in newProps || i == 'checked' && 'defaultChecked' in newProps) continue;
                setProperty(dom, i, null, value, namespace);
            }
        }
        // During hydration, props are not diffed at all (including dangerouslySetInnerHTML)
        // @TODO we should warn in debug mode when props don't match here.
        for(i in newProps){
            value = newProps[i];
            if (i == 'children') newChildren = value;
            else if (i == 'dangerouslySetInnerHTML') newHtml = value;
            else if (i == 'value') inputValue = value;
            else if (i == 'checked') checked = value;
            else if ((!isHydrating || typeof value == 'function') && oldProps[i] !== value) setProperty(dom, i, value, oldProps[i], namespace);
        }
        // If the new vnode didn't have dangerouslySetInnerHTML, diff its children
        if (newHtml) {
            // Avoid re-applying the same '__html' if it did not changed between re-render
            if (!isHydrating && (!oldHtml || newHtml.__html !== oldHtml.__html && newHtml.__html !== dom.innerHTML)) dom.innerHTML = newHtml.__html;
            newVNode.__k = [];
        } else {
            if (oldHtml) dom.innerHTML = '';
            diffChildren(dom, isArray(newChildren) ? newChildren : [
                newChildren
            ], newVNode, oldVNode, globalContext, nodeType === 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : namespace, excessDomChildren, commitQueue, excessDomChildren ? excessDomChildren[0] : oldVNode.__k && getDomSibling(oldVNode, 0), isHydrating, refQueue);
            // Remove children that are not part of any vnode.
            if (excessDomChildren != null) for(i = excessDomChildren.length; i--;)removeNode(excessDomChildren[i]);
        }
        // As above, don't diff props during hydration
        if (!isHydrating) {
            i = 'value';
            if (nodeType === 'progress' && inputValue == null) dom.removeAttribute('value');
            else if (inputValue !== undefined && // despite the attribute not being present. When the attribute
            // is missing the progress bar is treated as indeterminate.
            // To fix that we'll always update it when it is 0 for progress elements
            (inputValue !== dom[i] || nodeType === 'progress' && !inputValue || // This is only for IE 11 to fix <select> value not being updated.
            // To avoid a stale select value we need to set the option.value
            // again, which triggers IE11 to re-evaluate the select value
            nodeType === 'option' && inputValue !== oldProps[i])) setProperty(dom, i, inputValue, oldProps[i], namespace);
            i = 'checked';
            if (checked !== undefined && checked !== dom[i]) setProperty(dom, i, checked, oldProps[i], namespace);
        }
    }
    return dom;
}
/**
 * Invoke or update a ref, depending on whether it is a function or object ref.
 * @param {Ref<any> & { _unmount?: unknown }} ref
 * @param {any} value
 * @param {VNode} vnode
 */ function applyRef(ref, value, vnode) {
    try {
        if (typeof ref == 'function') {
            var hasRefUnmount = typeof ref.__u == 'function';
            if (hasRefUnmount) ref.__u();
            if (!hasRefUnmount || value != null) // instance object itself to avoid shape
            // transitioning vnode
            ref.__u = ref(value);
        } else ref.current = value;
    } catch (e) {
        options.__e(e, vnode);
    }
}
/**
 * Unmount a virtual node from the tree and apply DOM changes
 * @param {VNode} vnode The virtual node to unmount
 * @param {VNode} parentVNode The parent of the VNode that initiated the unmount
 * @param {boolean} [skipRemove] Flag that indicates that a parent node of the
 * current element is already detached from the DOM.
 */ function unmount(vnode, parentVNode, skipRemove) {
    var r;
    if (options.unmount) options.unmount(vnode);
    if (r = vnode.ref) {
        if (!r.current || r.current === vnode.__e) applyRef(r, null, parentVNode);
    }
    if ((r = vnode.__c) != null) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount();
        } catch (e) {
            options.__e(e, parentVNode);
        }
        r.base = r.__P = null;
    }
    if (r = vnode.__k) {
        for(var i = 0; i < r.length; i++)if (r[i]) unmount(r[i], parentVNode, skipRemove || typeof vnode.type != 'function');
    }
    if (!skipRemove) removeNode(vnode.__e);
    // Must be set to `undefined` to properly clean up `_nextDom`
    // for which `null` is a valid value. See comment in `create-element.js`
    vnode.__c = vnode.__ = vnode.__e = vnode.__d = undefined;
}
/** The `.render()` method for a PFC backing instance. */ function doRender(props, state, context) {
    return this.constructor(props, context);
}
/**
 * Render a Preact virtual node into a DOM element
 * @param {ComponentChild} vnode The virtual node to render
 * @param {PreactElement} parentDom The DOM element to render into
 * @param {PreactElement | object} [replaceNode] Optional: Attempt to re-use an
 * existing DOM tree rooted at `replaceNode`
 */ function render(vnode, parentDom, replaceNode) {
    if (options.__) options.__(vnode, parentDom);
    // We abuse the `replaceNode` parameter in `hydrate()` to signal if we are in
    // hydration mode or not by passing the `hydrate` function instead of a DOM
    // element..
    var isHydrating = typeof replaceNode == 'function';
    // To be able to support calling `render()` multiple times on the same
    // DOM node, we need to obtain a reference to the previous tree. We do
    // this by assigning a new `_children` property to DOM nodes which points
    // to the last rendered tree. By default this property is not present, which
    // means that we are mounting a new tree for the first time.
    var oldVNode = isHydrating ? null : replaceNode && replaceNode.__k || parentDom.__k;
    vnode = (!isHydrating && replaceNode || parentDom).__k = createElement(Fragment, null, [
        vnode
    ]);
    // List of effects that need to be called after diffing.
    var commitQueue = [], refQueue = [];
    diff(parentDom, // our custom `_children` property.
    vnode, oldVNode || EMPTY_OBJ, EMPTY_OBJ, parentDom.namespaceURI, !isHydrating && replaceNode ? [
        replaceNode
    ] : oldVNode ? null : parentDom.firstChild ? slice.call(parentDom.childNodes) : null, commitQueue, !isHydrating && replaceNode ? replaceNode : oldVNode ? oldVNode.__e : parentDom.firstChild, isHydrating, refQueue);
    // Flush all queued effects
    commitRoot(commitQueue, vnode, refQueue);
}
/**
 * Update an existing DOM element with data from a Preact virtual node
 * @param {ComponentChild} vnode The virtual node to render
 * @param {PreactElement} parentDom The DOM element to update
 */ function hydrate(vnode, parentDom) {
    render(vnode, parentDom, hydrate);
}
/**
 * Clones the given VNode, optionally adding attributes/props and replacing its
 * children.
 * @param {VNode} vnode The virtual DOM element to clone
 * @param {object} props Attributes/props to add when cloning
 * @param {Array<ComponentChildren>} rest Any additional arguments will be used
 * as replacement children.
 * @returns {VNode}
 */ function cloneElement(vnode, props, children) {
    var normalizedProps = assign({}, vnode.props), key, ref, i;
    var defaultProps;
    if (vnode.type && vnode.type.defaultProps) defaultProps = vnode.type.defaultProps;
    for(i in props){
        if (i == 'key') key = props[i];
        else if (i == 'ref') ref = props[i];
        else if (props[i] === undefined && defaultProps !== undefined) normalizedProps[i] = defaultProps[i];
        else normalizedProps[i] = props[i];
    }
    if (arguments.length > 2) normalizedProps.children = arguments.length > 3 ? slice.call(arguments, 2) : children;
    return createVNode(vnode.type, normalizedProps, key || vnode.key, ref || vnode.ref, null);
}
var i = 0;
function createContext(defaultValue, contextId) {
    contextId = '__cC' + i++;
    var context = {
        __c: contextId,
        __: defaultValue,
        /** @type {FunctionComponent} */ Consumer: function Consumer(props, contextValue) {
            // return props.children(
            // 	context[contextId] ? context[contextId].props.value : defaultValue
            // );
            return props.children(contextValue);
        },
        /** @type {FunctionComponent} */ Provider: function Provider(props) {
            if (!this.getChildContext) {
                /** @type {Component[] | null} */ var subs = [];
                var ctx = {};
                ctx[contextId] = this;
                this.getChildContext = function() {
                    return ctx;
                };
                this.componentWillUnmount = function() {
                    subs = null;
                };
                this.shouldComponentUpdate = function(_props) {
                    if (this.props.value !== _props.value) subs.some(function(c) {
                        c.__e = true;
                        enqueueRender(c);
                    });
                };
                this.sub = function(c) {
                    subs.push(c);
                    var old = c.componentWillUnmount;
                    c.componentWillUnmount = function() {
                        if (subs) subs.splice(subs.indexOf(c), 1);
                        if (old) old.call(c);
                    };
                };
            }
            return props.children;
        }
    };
    // Devtools needs access to the context object when it
    // encounters a Provider. This is necessary to support
    // setting `displayName` on the context object instead
    // of on the component itself. See:
    // https://reactjs.org/docs/context.html#contextdisplayname
    return context.Provider.__ = context.Consumer.contextType = context;
}
 //# sourceMappingURL=preact.module.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./node_modules/preact/hooks/dist/hooks.mjs": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useCallback: () => (useCallback),
  useContext: () => (useContext),
  useDebugValue: () => (useDebugValue),
  useEffect: () => (useEffect),
  useErrorBoundary: () => (useErrorBoundary),
  useId: () => (useId),
  useImperativeHandle: () => (useImperativeHandle),
  useLayoutEffect: () => (useLayoutEffect),
  useMemo: () => (useMemo),
  useReducer: () => (useReducer),
  useRef: () => (useRef),
  useState: () => (useState)
});
/* ESM import */var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/preact/dist/preact.mjs");

/** @type {number} */ var currentIndex;
/** @type {import('./internal').Component} */ var currentComponent;
/** @type {import('./internal').Component} */ var previousComponent;
/** @type {number} */ var currentHook = 0;
/** @type {Array<import('./internal').Component>} */ var afterPaintEffects = [];
// Cast to use internal Options type
var options = /** @type {import('./internal').Options} */ preact__WEBPACK_IMPORTED_MODULE_0__.options;
var oldBeforeDiff = options.__b;
var oldBeforeRender = options.__r;
var oldAfterDiff = options.diffed;
var oldCommit = options.__c;
var oldBeforeUnmount = options.unmount;
var oldRoot = options.__;
var RAF_TIMEOUT = 100;
var prevRaf;
/** @type {(vnode: import('./internal').VNode) => void} */ options.__b = function(vnode, oldVNode) {
    currentComponent = null;
    if (oldBeforeDiff) oldBeforeDiff(vnode, oldVNode);
};
options.__ = function(vnode, parentDom) {
    if (vnode && parentDom.__k && parentDom.__k.__m) vnode.__m = parentDom.__k.__m;
    if (oldRoot) oldRoot(vnode, parentDom);
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.__r = function(vnode) {
    if (oldBeforeRender) oldBeforeRender(vnode);
    currentComponent = vnode.__c;
    currentIndex = 0;
    var hooks = currentComponent.__H;
    if (hooks) {
        if (previousComponent === currentComponent) {
            hooks.__h = [];
            currentComponent.__h = [];
            hooks.__.forEach(function(hookItem) {
                if (hookItem.__N) hookItem.__ = hookItem.__N;
                hookItem._pendingArgs = hookItem.__N = undefined;
            });
        } else {
            hooks.__h.forEach(invokeCleanup);
            hooks.__h.forEach(invokeEffect);
            hooks.__h = [];
            currentIndex = 0;
        }
    }
    previousComponent = currentComponent;
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.diffed = function(vnode) {
    if (oldAfterDiff) oldAfterDiff(vnode);
    var c = vnode.__c;
    if (c && c.__H) {
        if (c.__H.__h.length) afterPaint(afterPaintEffects.push(c));
        c.__H.__.forEach(function(hookItem) {
            if (hookItem._pendingArgs) hookItem.__H = hookItem._pendingArgs;
            hookItem._pendingArgs = undefined;
        });
    }
    previousComponent = currentComponent = null;
};
// TODO: Improve typing of commitQueue parameter
/** @type {(vnode: import('./internal').VNode, commitQueue: any) => void} */ options.__c = function(vnode, commitQueue) {
    commitQueue.some(function(component) {
        try {
            component.__h.forEach(invokeCleanup);
            component.__h = component.__h.filter(function(cb) {
                return cb.__ ? invokeEffect(cb) : true;
            });
        } catch (e) {
            commitQueue.some(function(c) {
                if (c.__h) c.__h = [];
            });
            commitQueue = [];
            options.__e(e, component.__v);
        }
    });
    if (oldCommit) oldCommit(vnode, commitQueue);
};
/** @type {(vnode: import('./internal').VNode) => void} */ options.unmount = function(vnode) {
    if (oldBeforeUnmount) oldBeforeUnmount(vnode);
    var c = vnode.__c;
    if (c && c.__H) {
        var hasErrored;
        c.__H.__.forEach(function(s) {
            try {
                invokeCleanup(s);
            } catch (e) {
                hasErrored = e;
            }
        });
        c.__H = undefined;
        if (hasErrored) options.__e(hasErrored, c.__v);
    }
};
/**
 * Get a hook's state from the currentComponent
 * @param {number} index The index of the hook to get
 * @param {number} type The index of the hook to get
 * @returns {any}
 */ function getHookState(index, type) {
    if (options.__h) options.__h(currentComponent, index, currentHook || type);
    currentHook = 0;
    // Largely inspired by:
    // * https://github.com/michael-klein/funcy.js/blob/f6be73468e6ec46b0ff5aa3cc4c9baf72a29025a/src/hooks/core_hooks.mjs
    // * https://github.com/michael-klein/funcy.js/blob/650beaa58c43c33a74820a3c98b3c7079cf2e333/src/renderer.mjs
    // Other implementations to look at:
    // * https://codesandbox.io/s/mnox05qp8
    var hooks = currentComponent.__H || (currentComponent.__H = {
        __: [],
        __h: []
    });
    if (index >= hooks.__.length) hooks.__.push({});
    return hooks.__[index];
}
/**
 * @template {unknown} S
 * @param {import('./index').Dispatch<import('./index').StateUpdater<S>>} [initialState]
 * @returns {[S, (state: S) => void]}
 */ function useState(initialState) {
    currentHook = 1;
    return useReducer(invokeOrReturn, initialState);
}
/**
 * @template {unknown} S
 * @template {unknown} A
 * @param {import('./index').Reducer<S, A>} reducer
 * @param {import('./index').Dispatch<import('./index').StateUpdater<S>>} initialState
 * @param {(initialState: any) => void} [init]
 * @returns {[ S, (state: S) => void ]}
 */ function useReducer(reducer, initialState, init) {
    /** @type {import('./internal').ReducerHookState} */ var hookState = getHookState(currentIndex++, 2);
    hookState._reducer = reducer;
    if (!hookState.__c) {
        hookState.__ = [
            !init ? invokeOrReturn(undefined, initialState) : init(initialState),
            function(action) {
                var currentValue = hookState.__N ? hookState.__N[0] : hookState.__[0];
                var nextValue = hookState._reducer(currentValue, action);
                if (currentValue !== nextValue) {
                    hookState.__N = [
                        nextValue,
                        hookState.__[1]
                    ];
                    hookState.__c.setState({});
                }
            }
        ];
        hookState.__c = currentComponent;
        if (!currentComponent._hasScuFromHooks) {
            // This SCU has the purpose of bailing out after repeated updates
            // to stateful hooks.
            // we store the next value in _nextValue[0] and keep doing that for all
            // state setters, if we have next states and
            // all next states within a component end up being equal to their original state
            // we are safe to bail out for this specific component.
            /**
       *
       * @type {import('./internal').Component["shouldComponentUpdate"]}
       */ // @ts-ignore - We don't use TS to downtranspile
            // eslint-disable-next-line no-inner-declarations
            var updateHookState = function updateHookState(p, s, c) {
                if (!hookState.__c.__H) return true;
                /** @type {(x: import('./internal').HookState) => x is import('./internal').ReducerHookState} */ var isStateHook = function isStateHook(x) {
                    return !!x.__c;
                };
                var stateHooks = hookState.__c.__H.__.filter(isStateHook);
                var allHooksEmpty = stateHooks.every(function(x) {
                    return !x.__N;
                });
                // When we have no updated hooks in the component we invoke the previous SCU or
                // traverse the VDOM tree further.
                if (allHooksEmpty) return prevScu ? prevScu.call(this, p, s, c) : true;
                // We check whether we have components with a nextValue set that
                // have values that aren't equal to one another this pushes
                // us to update further down the tree
                var shouldUpdate = false;
                stateHooks.forEach(function(hookItem) {
                    if (hookItem.__N) {
                        var currentValue = hookItem.__[0];
                        hookItem.__ = hookItem.__N;
                        hookItem.__N = undefined;
                        if (currentValue !== hookItem.__[0]) shouldUpdate = true;
                    }
                });
                return shouldUpdate || hookState.__c.props !== p ? prevScu ? prevScu.call(this, p, s, c) : true : false;
            };
            currentComponent._hasScuFromHooks = true;
            var prevScu = currentComponent.shouldComponentUpdate;
            var prevCWU = currentComponent.componentWillUpdate;
            // If we're dealing with a forced update `shouldComponentUpdate` will
            // not be called. But we use that to update the hook values, so we
            // need to call it.
            currentComponent.componentWillUpdate = function(p, s, c) {
                if (this.__e) {
                    var tmp = prevScu;
                    // Clear to avoid other sCU hooks from being called
                    prevScu = undefined;
                    updateHookState(p, s, c);
                    prevScu = tmp;
                }
                if (prevCWU) prevCWU.call(this, p, s, c);
            };
            currentComponent.shouldComponentUpdate = updateHookState;
        }
    }
    return hookState.__N || hookState.__;
}
/**
 * @param {import('./internal').Effect} callback
 * @param {unknown[]} args
 * @returns {void}
 */ function useEffect(callback, args) {
    /** @type {import('./internal').EffectHookState} */ var state = getHookState(currentIndex++, 3);
    if (!options.__s && argsChanged(state.__H, args)) {
        state.__ = callback;
        state._pendingArgs = args;
        currentComponent.__H.__h.push(state);
    }
}
/**
 * @param {import('./internal').Effect} callback
 * @param {unknown[]} args
 * @returns {void}
 */ function useLayoutEffect(callback, args) {
    /** @type {import('./internal').EffectHookState} */ var state = getHookState(currentIndex++, 4);
    if (!options.__s && argsChanged(state.__H, args)) {
        state.__ = callback;
        state._pendingArgs = args;
        currentComponent.__h.push(state);
    }
}
/** @type {(initialValue: unknown) => unknown} */ function useRef(initialValue) {
    currentHook = 5;
    return useMemo(function() {
        return {
            current: initialValue
        };
    }, []);
}
/**
 * @param {object} ref
 * @param {() => object} createHandle
 * @param {unknown[]} args
 * @returns {void}
 */ function useImperativeHandle(ref, createHandle, args) {
    currentHook = 6;
    useLayoutEffect(function() {
        if (typeof ref == 'function') {
            ref(createHandle());
            return function() {
                return ref(null);
            };
        } else if (ref) {
            ref.current = createHandle();
            return function() {
                return ref.current = null;
            };
        }
    }, args == null ? args : args.concat(ref));
}
/**
 * @template {unknown} T
 * @param {() => T} factory
 * @param {unknown[]} args
 * @returns {T}
 */ function useMemo(factory, args) {
    /** @type {import('./internal').MemoHookState<T>} */ var state = getHookState(currentIndex++, 7);
    if (argsChanged(state.__H, args)) {
        state.__ = factory();
        state.__H = args;
        state.__h = factory;
    }
    return state.__;
}
/**
 * @param {() => void} callback
 * @param {unknown[]} args
 * @returns {() => void}
 */ function useCallback(callback, args) {
    currentHook = 8;
    return useMemo(function() {
        return callback;
    }, args);
}
/**
 * @param {import('./internal').PreactContext} context
 */ function useContext(context) {
    var provider = currentComponent.context[context.__c];
    // We could skip this call here, but than we'd not call
    // `options._hook`. We need to do that in order to make
    // the devtools aware of this hook.
    /** @type {import('./internal').ContextHookState} */ var state = getHookState(currentIndex++, 9);
    // The devtools needs access to the context object to
    // be able to pull of the default value when no provider
    // is present in the tree.
    state.c = context;
    if (!provider) return context.__;
    // This is probably not safe to convert to "!"
    if (state.__ == null) {
        state.__ = true;
        provider.sub(currentComponent);
    }
    return provider.props.value;
}
/**
 * Display a custom label for a custom hook for the devtools panel
 * @type {<T>(value: T, cb?: (value: T) => string | number) => void}
 */ function useDebugValue(value, formatter) {
    if (options.useDebugValue) options.useDebugValue(formatter ? formatter(value) : /** @type {any}*/ value);
}
/**
 * @param {(error: unknown, errorInfo: import('preact').ErrorInfo) => void} cb
 * @returns {[unknown, () => void]}
 */ function useErrorBoundary(cb) {
    /** @type {import('./internal').ErrorBoundaryHookState} */ var state = getHookState(currentIndex++, 10);
    var errState = useState();
    state.__ = cb;
    if (!currentComponent.componentDidCatch) currentComponent.componentDidCatch = function(err, errorInfo) {
        if (state.__) state.__(err, errorInfo);
        errState[1](err);
    };
    return [
        errState[0],
        function() {
            errState[1](undefined);
        }
    ];
}
/** @type {() => string} */ function useId() {
    /** @type {import('./internal').IdHookState} */ var state = getHookState(currentIndex++, 11);
    if (!state.__) {
        // Grab either the root node or the nearest async boundary node.
        /** @type {import('./internal.d').VNode} */ var root = currentComponent.__v;
        while(root !== null && !root.__m && root.__ !== null)root = root.__;
        var mask = root.__m || (root.__m = [
            0,
            0
        ]);
        state.__ = 'P' + mask[0] + '-' + mask[1]++;
    }
    return state.__;
}
/**
 * After paint effects consumer.
 */ function flushAfterPaintEffects() {
    var component;
    while(component = afterPaintEffects.shift()){
        if (!component.__P || !component.__H) continue;
        try {
            component.__H.__h.forEach(invokeCleanup);
            component.__H.__h.forEach(invokeEffect);
            component.__H.__h = [];
        } catch (e) {
            component.__H.__h = [];
            options.__e(e, component.__v);
        }
    }
}
var HAS_RAF = typeof requestAnimationFrame == 'function';
/**
 * Schedule a callback to be invoked after the browser has a chance to paint a new frame.
 * Do this by combining requestAnimationFrame (rAF) + setTimeout to invoke a callback after
 * the next browser frame.
 *
 * Also, schedule a timeout in parallel to the the rAF to ensure the callback is invoked
 * even if RAF doesn't fire (for example if the browser tab is not visible)
 *
 * @param {() => void} callback
 */ function afterNextFrame(callback) {
    var done = function done() {
        clearTimeout(timeout);
        if (HAS_RAF) cancelAnimationFrame(raf);
        setTimeout(callback);
    };
    var timeout = setTimeout(done, RAF_TIMEOUT);
    var raf;
    if (HAS_RAF) raf = requestAnimationFrame(done);
}
// Note: if someone used options.debounceRendering = requestAnimationFrame,
// then effects will ALWAYS run on the NEXT frame instead of the current one, incurring a ~16ms delay.
// Perhaps this is not such a big deal.
/**
 * Schedule afterPaintEffects flush after the browser paints
 * @param {number} newQueueLength
 * @returns {void}
 */ function afterPaint(newQueueLength) {
    if (newQueueLength === 1 || prevRaf !== options.requestAnimationFrame) {
        prevRaf = options.requestAnimationFrame;
        (prevRaf || afterNextFrame)(flushAfterPaintEffects);
    }
}
/**
 * @param {import('./internal').HookState} hook
 * @returns {void}
 */ function invokeCleanup(hook) {
    // A hook cleanup can introduce a call to render which creates a new root, this will call options.vnode
    // and move the currentComponent away.
    var comp = currentComponent;
    var cleanup = hook.__c;
    if (typeof cleanup == 'function') {
        hook.__c = undefined;
        cleanup();
    }
    currentComponent = comp;
}
/**
 * Invoke a Hook's effect
 * @param {import('./internal').EffectHookState} hook
 * @returns {void}
 */ function invokeEffect(hook) {
    // A hook call can introduce a call to render which creates a new root, this will call options.vnode
    // and move the currentComponent away.
    var comp = currentComponent;
    hook.__c = hook.__();
    currentComponent = comp;
}
/**
 * @param {unknown[]} oldArgs
 * @param {unknown[]} newArgs
 * @returns {boolean}
 */ function argsChanged(oldArgs, newArgs) {
    return !oldArgs || oldArgs.length !== newArgs.length || newArgs.some(function(arg, index) {
        return arg !== oldArgs[index];
    });
}
/**
 * @template Arg
 * @param {Arg} arg
 * @param {(arg: Arg) => any} f
 * @returns {any}
 */ function invokeOrReturn(arg, f) {
    return typeof f == 'function' ? f(arg) : f;
}
 //# sourceMappingURL=hooks.module.js.map
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./src/App.jsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  App: () => (App)
});
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./src/components/Navbar.jsx");
/* ESM import */var _components_HomeScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./src/components/HomeScreen.jsx");
/* ESM import */var _components_DashboardScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./src/components/DashboardScreen.jsx");
/* ESM import */var _components_ClassesScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("(react:main-thread)/./src/components/ClassesScreen.jsx");
/* ESM import */var _components_ConnectionsScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("(react:main-thread)/./src/components/ConnectionsScreen.jsx");
/* ESM import */var _components_ControlScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("(react:main-thread)/./src/components/ControlScreen.jsx");
/* ESM import */var _App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("(react:main-thread)/./src/App.css");









const __snapshot_c0e9e_9aa9b_2 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_c0e9e_9aa9b_2", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateScrollView(pageId);
    __SetClasses(el, "MainContent");
    __SetAttribute(el, "scroll-orientation", "vertical");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_c0e9e_9aa9b_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_c0e9e_9aa9b_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "Background");
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "App");
    __AppendElement(el, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el4);
    return [
        el,
        el1,
        el2,
        el3,
        el4
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        3
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ]
], undefined, globDynamicComponentEntry, null);
function App(props) {
    const [currentRoute, setCurrentRoute] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)('home');
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)();
    const handleRouteChange = (route)=>{
        setCurrentRoute(route);
    };
    const renderScreen = ()=>{
        switch(currentRoute){
            case 'home':
                return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeScreen__WEBPACK_IMPORTED_MODULE_3__.HomeScreen, {}, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\App.jsx",
                    lineNumber: 26,
                    columnNumber: 16
                }, this);
            case 'dashboard':
                return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DashboardScreen__WEBPACK_IMPORTED_MODULE_4__.DashboardScreen, {}, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\App.jsx",
                    lineNumber: 28,
                    columnNumber: 16
                }, this);
            case 'classes':
                return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ClassesScreen__WEBPACK_IMPORTED_MODULE_5__.ClassesScreen, {}, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\App.jsx",
                    lineNumber: 30,
                    columnNumber: 16
                }, this);
            case 'connections':
                return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectionsScreen__WEBPACK_IMPORTED_MODULE_6__.ConnectionsScreen, {}, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\App.jsx",
                    lineNumber: 32,
                    columnNumber: 16
                }, this);
            case 'control':
                return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ControlScreen__WEBPACK_IMPORTED_MODULE_7__.ControlScreen, {}, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\App.jsx",
                    lineNumber: 34,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeScreen__WEBPACK_IMPORTED_MODULE_3__.HomeScreen, {}, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\App.jsx",
                    lineNumber: 36,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_c0e9e_9aa9b_1, {
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_c0e9e_9aa9b_2, {
                children: renderScreen()
            }, void 0, false, {
                fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\App.jsx",
                lineNumber: 44,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__.Navbar, {
                    activeRoute: currentRoute,
                    onRouteChange: handleRouteChange
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\App.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\App.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./src/components/ClassesScreen.jsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ClassesScreen: () => (ClassesScreen)
});
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");


const __snapshot_09aa1_eccb7_2 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_2", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "class-title");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_3 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_3", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "class-duration");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_4 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_4", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "class-level");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_5 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_5", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "class-description");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_6 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_6", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "action-button stop");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "action-text");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("\u23F9\uFE0F Detener");
    __AppendElement(el1, el2);
    return [
        el,
        el1,
        el2
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_7 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_7", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "action-button start");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "action-text");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("\u25B6\uFE0F Iniciar");
    __AppendElement(el1, el2);
    return [
        el,
        el1,
        el2
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "class-header");
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "class-status");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __AppendElement(el2, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el4);
    const el5 = __CreateView(pageId);
    __SetClasses(el5, "class-meta");
    __AppendElement(el1, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el5, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el5, el7);
    const el8 = __CreateView(pageId);
    __SetClasses(el8, "class-content");
    __AppendElement(el, el8);
    const el9 = __CreateWrapperElement(pageId);
    __AppendElement(el8, el9);
    const el10 = __CreateText(pageId);
    __SetClasses(el10, "class-subject");
    __AppendElement(el8, el10);
    const el11 = __CreateRawText("Materia: ");
    __AppendElement(el10, el11);
    const el12 = __CreateWrapperElement(pageId);
    __AppendElement(el10, el12);
    const el13 = __CreateText(pageId);
    __SetClasses(el13, "class-schedule");
    __AppendElement(el8, el13);
    const el14 = __CreateRawText("Horario: ");
    __AppendElement(el13, el14);
    const el15 = __CreateWrapperElement(pageId);
    __AppendElement(el13, el15);
    const el16 = __CreateView(pageId);
    __SetClasses(el16, "class-actions");
    __AppendElement(el, el16);
    const el17 = __CreateWrapperElement(pageId);
    __AppendElement(el16, el17);
    const el18 = __CreateView(pageId);
    __SetClasses(el18, "action-button details");
    __AppendElement(el16, el18);
    const el19 = __CreateText(pageId);
    __SetClasses(el19, "action-text");
    __AppendElement(el18, el19);
    const el20 = __CreateRawText("\u{1F4CB} Detalles");
    __AppendElement(el19, el20);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15,
        el16,
        el17,
        el18,
        el19,
        el20
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    },
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[3], ctx.__values[1] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 18, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        9
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        12
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        15
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        17
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_9 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_9", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "details-title");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_10 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_10", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "details-description");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_11 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_11", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "action-item");
    const el1 = __CreateRawText("\u2022 ");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_8 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_8", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "class-details");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "details-header");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "details-meta");
    __AppendElement(el1, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "meta-item");
    __AppendElement(el3, el4);
    const el5 = __CreateRawText("\u23F1\uFE0F ");
    __AppendElement(el4, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el6);
    const el7 = __CreateText(pageId);
    __SetClasses(el7, "meta-item");
    __AppendElement(el3, el7);
    const el8 = __CreateRawText("\u{1F4DA} ");
    __AppendElement(el7, el8);
    const el9 = __CreateWrapperElement(pageId);
    __AppendElement(el7, el9);
    const el10 = __CreateText(pageId);
    __SetClasses(el10, "meta-item");
    __AppendElement(el3, el10);
    const el11 = __CreateRawText("\u{1F3AF} ");
    __AppendElement(el10, el11);
    const el12 = __CreateWrapperElement(pageId);
    __AppendElement(el10, el12);
    const el13 = __CreateView(pageId);
    __SetClasses(el13, "details-content");
    __AppendElement(el, el13);
    const el14 = __CreateWrapperElement(pageId);
    __AppendElement(el13, el14);
    const el15 = __CreateView(pageId);
    __SetClasses(el15, "robot-actions");
    __AppendElement(el13, el15);
    const el16 = __CreateText(pageId);
    __SetClasses(el16, "actions-title");
    __AppendElement(el15, el16);
    const el17 = __CreateRawText("Acciones del Robot:");
    __AppendElement(el16, el17);
    const el18 = __CreateWrapperElement(pageId);
    __AppendElement(el15, el18);
    const el19 = __CreateView(pageId);
    __SetClasses(el19, "class-progress");
    __AppendElement(el13, el19);
    const el20 = __CreateText(pageId);
    __SetClasses(el20, "progress-title");
    __AppendElement(el19, el20);
    const el21 = __CreateRawText("Progreso de la Clase");
    __AppendElement(el20, el21);
    const el22 = __CreateView(pageId);
    __SetClasses(el22, "progress-bar");
    __AppendElement(el19, el22);
    const el23 = __CreateView(pageId);
    __SetClasses(el23, "progress-fill");
    __SetInlineStyles(el23, "width:65%");
    __AppendElement(el22, el23);
    const el24 = __CreateText(pageId);
    __SetClasses(el24, "progress-text");
    __AppendElement(el19, el24);
    const el25 = __CreateRawText("65% completado");
    __AppendElement(el24, el25);
    const el26 = __CreateView(pageId);
    __SetClasses(el26, "details-actions");
    __AppendElement(el, el26);
    const el27 = __CreateView(pageId);
    __SetClasses(el27, "action-button primary");
    __AppendElement(el26, el27);
    const el28 = __CreateText(pageId);
    __SetClasses(el28, "action-text");
    __AppendElement(el27, el28);
    const el29 = __CreateRawText("\u{1F393} Iniciar Clase");
    __AppendElement(el28, el29);
    const el30 = __CreateView(pageId);
    __SetClasses(el30, "action-button secondary");
    __AppendElement(el26, el30);
    const el31 = __CreateText(pageId);
    __SetClasses(el31, "action-text");
    __AppendElement(el30, el31);
    const el32 = __CreateRawText("\u2190 Volver");
    __AppendElement(el31, el32);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15,
        el16,
        el17,
        el18,
        el19,
        el20,
        el21,
        el22,
        el23,
        el24,
        el25,
        el26,
        el27,
        el28,
        el29,
        el30,
        el31,
        el32
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 27, "bindEvent", "tap", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 30, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        9
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        12
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        14
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        18
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_13 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_13", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "active-class-banner");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "banner-icon");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("\u{1F393}");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "banner-content");
    __AppendElement(el, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "banner-title");
    __AppendElement(el3, el4);
    const el5 = __CreateRawText("Clase en Progreso");
    __AppendElement(el4, el5);
    const el6 = __CreateText(pageId);
    __SetClasses(el6, "banner-subtitle");
    __AppendElement(el3, el6);
    const el7 = __CreateRawText("El robot est\xe1 impartiendo una clase");
    __AppendElement(el6, el7);
    const el8 = __CreateView(pageId);
    __SetClasses(el8, "banner-action");
    __AppendElement(el, el8);
    const el9 = __CreateText(pageId);
    __SetClasses(el9, "banner-button");
    __AppendElement(el8, el9);
    const el10 = __CreateRawText("\u23F9\uFE0F Detener");
    __AppendElement(el9, el10);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 8, "bindEvent", "tap", '')
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_14 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_14", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "classes-grid");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_15 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_15", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "stat-number");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_16 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_16", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "stat-number");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_17 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_17", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "stat-number");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_09aa1_eccb7_12 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_09aa1_eccb7_12", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "screen");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "classes-content");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "classes-title");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("Clases Programadas");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "classes-subtitle");
    __AppendElement(el1, el4);
    const el5 = __CreateRawText("Sesiones Educativas del Robot Inmoov");
    __AppendElement(el4, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el6);
    const el7 = __CreateView(pageId);
    __SetClasses(el7, "classes-stats");
    __AppendElement(el1, el7);
    const el8 = __CreateView(pageId);
    __SetClasses(el8, "stat-item");
    __AppendElement(el7, el8);
    const el9 = __CreateWrapperElement(pageId);
    __AppendElement(el8, el9);
    const el10 = __CreateText(pageId);
    __SetClasses(el10, "stat-label");
    __AppendElement(el8, el10);
    const el11 = __CreateRawText("Clases Totales");
    __AppendElement(el10, el11);
    const el12 = __CreateView(pageId);
    __SetClasses(el12, "stat-item");
    __AppendElement(el7, el12);
    const el13 = __CreateWrapperElement(pageId);
    __AppendElement(el12, el13);
    const el14 = __CreateText(pageId);
    __SetClasses(el14, "stat-label");
    __AppendElement(el12, el14);
    const el15 = __CreateRawText("En Progreso");
    __AppendElement(el14, el15);
    const el16 = __CreateView(pageId);
    __SetClasses(el16, "stat-item");
    __AppendElement(el7, el16);
    const el17 = __CreateWrapperElement(pageId);
    __AppendElement(el16, el17);
    const el18 = __CreateText(pageId);
    __SetClasses(el18, "stat-label");
    __AppendElement(el16, el18);
    const el19 = __CreateRawText("Completadas");
    __AppendElement(el18, el19);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15,
        el16,
        el17,
        el18,
        el19
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        9
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        13
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        17
    ]
], undefined, globDynamicComponentEntry, null);
function ClassesScreen() {
    const [selectedClass, setSelectedClass] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isPlaying, setIsPlaying] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [classes] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            id: 1,
            title: "Introducci\xf3n a la Rob\xf3tica",
            duration: '45 min',
            level: "B\xe1sico",
            subject: "Tecnolog\xeda",
            description: "Conceptos fundamentales de rob\xf3tica y automatizaci\xf3n",
            schedule: 'Lunes 9:00 AM',
            status: 'scheduled',
            robotActions: [
                "Demostraci\xf3n de movimientos b\xe1sicos",
                "Explicaci\xf3n de sensores",
                "Interacci\xf3n con estudiantes"
            ]
        },
        {
            id: 2,
            title: "Programaci\xf3n de Movimientos",
            duration: '60 min',
            level: 'Intermedio',
            subject: "Programaci\xf3n",
            description: 'Aprende a programar movimientos complejos del robot',
            schedule: 'Martes 10:30 AM',
            status: 'active',
            robotActions: [
                "Ejecuci\xf3n de secuencias programadas",
                "Demostraci\xf3n de algoritmos",
                "Pr\xe1ctica con estudiantes"
            ]
        },
        {
            id: 3,
            title: "Inteligencia Artificial B\xe1sica",
            duration: '90 min',
            level: 'Avanzado',
            subject: 'IA',
            description: "Introducci\xf3n a conceptos de IA y machine learning",
            schedule: "Mi\xe9rcoles 2:00 PM",
            status: 'scheduled',
            robotActions: [
                "Demostraci\xf3n de reconocimiento de voz",
                "Interacci\xf3n conversacional",
                'Ejemplos de aprendizaje'
            ]
        },
        {
            id: 4,
            title: "Interacci\xf3n Humano-Robot",
            duration: '75 min',
            level: 'Intermedio',
            subject: "Interacci\xf3n",
            description: "C\xf3mo los robots interact\xfaan con humanos",
            schedule: 'Jueves 11:00 AM',
            status: 'completed',
            robotActions: [
                "Demostraci\xf3n de gestos",
                'Reconocimiento facial',
                "Comunicaci\xf3n verbal"
            ]
        },
        {
            id: 5,
            title: "Sensores y Percepci\xf3n",
            duration: '50 min',
            level: "B\xe1sico",
            subject: "Electr\xf3nica",
            description: "C\xf3mo los robots perciben su entorno",
            schedule: 'Viernes 9:30 AM',
            status: 'scheduled',
            robotActions: [
                "Demostraci\xf3n de sensores",
                'Lectura de datos en tiempo real',
                "An\xe1lisis de informaci\xf3n"
            ]
        }
    ]);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{}, []);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{}, []);
    const getStatusColor = (status)=>{
        switch(status){
            case 'active':
                return 'green';
            case 'scheduled':
                return 'blue';
            case 'completed':
                return 'gray';
            default:
                return 'gray';
        }
    };
    const ClassCard = ({ classItem })=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_1, {
            values: [
                `class-card ${classItem.status}`,
                `status-dot ${getStatusColor(classItem.status)}`,
                1
            ],
            children: [
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_2, {
                    children: classItem.title
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_3, {
                    children: classItem.duration
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_4, {
                    children: classItem.level
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_5, {
                    children: classItem.description
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                    children: classItem.subject
                }, void 0, false, void 0, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                    children: classItem.schedule
                }, void 0, false, void 0, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                    children: classItem.status === 'active' ? /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_6, {
                        values: [
                            1
                        ]
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_7, {
                        values: [
                            1
                        ]
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this)
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
            lineNumber: 124,
            columnNumber: 5
        }, this);
    const ClassDetails = ({ classItem })=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_8, {
            values: [
                1,
                1
            ],
            children: [
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_9, {
                    children: classItem.title
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                    children: classItem.duration
                }, void 0, false, void 0, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                    children: classItem.level
                }, void 0, false, void 0, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                    children: classItem.subject
                }, void 0, false, void 0, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_10, {
                    children: classItem.description
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                    children: classItem.robotActions.map((action, index)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_11, {
                            children: action
                        }, index, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this))
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
            lineNumber: 160,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_12, {
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: [
                    isPlaying && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_13, {
                        values: [
                            1
                        ]
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    selectedClass ? /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ClassDetails, {
                        classItem: classes.find((c)=>c.id === selectedClass)
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_14, {
                        children: classes.map((classItem)=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ClassCard, {
                                classItem: classItem
                            }, classItem.id, false, {
                                fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_15, {
                children: classes.length
            }, void 0, false, {
                fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                lineNumber: 231,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_16, {
                children: classes.filter((c)=>c.status === 'active').length
            }, void 0, false, {
                fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                lineNumber: 235,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_09aa1_eccb7_17, {
                children: classes.filter((c)=>c.status === 'completed').length
            }, void 0, false, {
                fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
                lineNumber: 239,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ClassesScreen.jsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./src/components/ConnectionsScreen.jsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ConnectionsScreen: () => (ConnectionsScreen)
});
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");


const __snapshot_02a8a_d196f_2 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_2", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "connection-icon");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_3 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_3", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "connection-title");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_4 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_4", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "connection-url");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_5 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_5", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "connection-ping");
    const el1 = __CreateRawText("\xdaltimo ping: ");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_6 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_6", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "action-button disconnect");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "action-text");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Desconectar");
    __AppendElement(el1, el2);
    return [
        el,
        el1,
        el2
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_7 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_7", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "action-button connect");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "action-text");
    __AppendElement(el, el1);
    return [
        el,
        el1
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        1
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "connection-header");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "connection-info");
    __AppendElement(el1, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el3, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el3, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el3, el6);
    const el7 = __CreateView(pageId);
    __SetClasses(el7, "connection-actions");
    __AppendElement(el, el7);
    const el8 = __CreateWrapperElement(pageId);
    __AppendElement(el7, el8);
    const el9 = __CreateView(pageId);
    __SetClasses(el9, "action-button test");
    __AppendElement(el7, el9);
    const el10 = __CreateText(pageId);
    __SetClasses(el10, "action-text");
    __AppendElement(el9, el10);
    const el11 = __CreateRawText("Probar");
    __AppendElement(el10, el11);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 9, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        8
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_9 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_9", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "status-icon");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_10 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_10", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "status-label");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_11 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_11", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "status-value");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_8 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_8", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "status-indicator");
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "status-content");
    __AppendElement(el, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el4);
    return [
        el,
        el1,
        el2,
        el3,
        el4
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        1
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        3
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_13 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_13", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "status-grid");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_14 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_14", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "connections-grid");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_02a8a_d196f_12 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_02a8a_d196f_12", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "screen");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "connections-content");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "connections-title");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("Conexiones del Robot");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "connections-subtitle");
    __AppendElement(el1, el4);
    const el5 = __CreateRawText("Configuraci\xf3n de Servidores");
    __AppendElement(el4, el5);
    const el6 = __CreateView(pageId);
    __SetClasses(el6, "overall-status");
    __AppendElement(el1, el6);
    const el7 = __CreateText(pageId);
    __SetClasses(el7, "status-title");
    __AppendElement(el6, el7);
    const el8 = __CreateRawText("Estado General");
    __AppendElement(el7, el8);
    const el9 = __CreateWrapperElement(pageId);
    __AppendElement(el6, el9);
    const el10 = __CreateView(pageId);
    __SetClasses(el10, "connections-section");
    __AppendElement(el1, el10);
    const el11 = __CreateText(pageId);
    __SetClasses(el11, "section-title");
    __AppendElement(el10, el11);
    const el12 = __CreateRawText("Servidores");
    __AppendElement(el11, el12);
    const el13 = __CreateWrapperElement(pageId);
    __AppendElement(el10, el13);
    const el14 = __CreateView(pageId);
    __SetClasses(el14, "connections-section");
    __AppendElement(el1, el14);
    const el15 = __CreateText(pageId);
    __SetClasses(el15, "section-title");
    __AppendElement(el14, el15);
    const el16 = __CreateRawText("Registro de Conexiones");
    __AppendElement(el15, el16);
    const el17 = __CreateView(pageId);
    __SetClasses(el17, "connection-log");
    __AppendElement(el14, el17);
    const el18 = __CreateText(pageId);
    __SetClasses(el18, "log-entry");
    __AppendElement(el17, el18);
    const el19 = __CreateRawText("\u{1F7E2} Servidor Principal conectado - 14:30:25");
    __AppendElement(el18, el19);
    const el20 = __CreateText(pageId);
    __SetClasses(el20, "log-entry");
    __AppendElement(el17, el20);
    const el21 = __CreateRawText("\u{1F534} Servidor del Robot desconectado - 14:29:18");
    __AppendElement(el20, el21);
    const el22 = __CreateText(pageId);
    __SetClasses(el22, "log-entry");
    __AppendElement(el17, el22);
    const el23 = __CreateRawText("\u{1F7E1} Intentando conectar a Base de Datos - 14:28:45");
    __AppendElement(el22, el23);
    const el24 = __CreateText(pageId);
    __SetClasses(el24, "log-entry");
    __AppendElement(el17, el24);
    const el25 = __CreateRawText("\u{1F7E2} C\xe1mara conectada - 14:27:32");
    __AppendElement(el24, el25);
    const el26 = __CreateText(pageId);
    __SetClasses(el26, "log-entry");
    __AppendElement(el17, el26);
    const el27 = __CreateRawText("\u{1F534} Servidor Principal desconectado - 14:26:15");
    __AppendElement(el26, el27);
    const el28 = __CreateView(pageId);
    __SetClasses(el28, "connections-section");
    __AppendElement(el1, el28);
    const el29 = __CreateText(pageId);
    __SetClasses(el29, "section-title");
    __AppendElement(el28, el29);
    const el30 = __CreateRawText("Acciones R\xe1pidas");
    __AppendElement(el29, el30);
    const el31 = __CreateView(pageId);
    __SetClasses(el31, "quick-actions");
    __AppendElement(el28, el31);
    const el32 = __CreateView(pageId);
    __SetClasses(el32, "quick-action");
    __AppendElement(el31, el32);
    const el33 = __CreateView(pageId);
    __SetClasses(el33, "action-icon");
    __AppendElement(el32, el33);
    const el34 = __CreateRawText("\u{1F517}");
    __AppendElement(el33, el34);
    const el35 = __CreateText(pageId);
    __SetClasses(el35, "action-label");
    __AppendElement(el32, el35);
    const el36 = __CreateRawText("Conectar Todo");
    __AppendElement(el35, el36);
    const el37 = __CreateView(pageId);
    __SetClasses(el37, "quick-action");
    __AppendElement(el31, el37);
    const el38 = __CreateView(pageId);
    __SetClasses(el38, "action-icon");
    __AppendElement(el37, el38);
    const el39 = __CreateRawText("\u{1F50C}");
    __AppendElement(el38, el39);
    const el40 = __CreateText(pageId);
    __SetClasses(el40, "action-label");
    __AppendElement(el37, el40);
    const el41 = __CreateRawText("Desconectar Todo");
    __AppendElement(el40, el41);
    const el42 = __CreateView(pageId);
    __SetClasses(el42, "quick-action");
    __AppendElement(el31, el42);
    const el43 = __CreateView(pageId);
    __SetClasses(el43, "action-icon");
    __AppendElement(el42, el43);
    const el44 = __CreateRawText("\u{1F50D}");
    __AppendElement(el43, el44);
    const el45 = __CreateText(pageId);
    __SetClasses(el45, "action-label");
    __AppendElement(el42, el45);
    const el46 = __CreateRawText("Probar Todo");
    __AppendElement(el45, el46);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15,
        el16,
        el17,
        el18,
        el19,
        el20,
        el21,
        el22,
        el23,
        el24,
        el25,
        el26,
        el27,
        el28,
        el29,
        el30,
        el31,
        el32,
        el33,
        el34,
        el35,
        el36,
        el37,
        el38,
        el39,
        el40,
        el41,
        el42,
        el43,
        el44,
        el45,
        el46
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 32, "bindEvent", "tap", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 37, "bindEvent", "tap", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 42, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        9
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        13
    ]
], undefined, globDynamicComponentEntry, null);
function ConnectionsScreen() {
    const [connectionStatus, setConnectionStatus] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        mainServer: 'disconnected',
        robotServer: 'disconnected',
        database: 'disconnected',
        camera: 'disconnected'
    });
    const [serverConfig, setServerConfig] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        mainServer: {
            url: '192.168.1.100:8080',
            status: 'disconnected',
            lastPing: null
        },
        robotServer: {
            url: '192.168.1.101:3000',
            status: 'disconnected',
            lastPing: null
        },
        database: {
            url: '192.168.1.102:5432',
            status: 'disconnected',
            lastPing: null
        },
        camera: {
            url: '192.168.1.103:8081',
            status: 'disconnected',
            lastPing: null
        }
    });
    const [isConnecting, setIsConnecting] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{}, []);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{}, []);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{}, []);
    const ConnectionCard = ({ title, serverType, config, status })=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_1, {
            values: [
                `connection-card ${status}`,
                1
            ],
            children: [
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_2, {
                    children: status === 'connected' ? "\u{1F7E2}" : status === 'connecting' ? "\u{1F7E1}" : "\u{1F534}"
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_3, {
                    children: title
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_4, {
                    children: config.url
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                    children: config.lastPing && /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_5, {
                        children: config.lastPing
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this)
                }, void 0, false, void 0, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                    children: status === 'connected' ? /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_6, {
                        values: [
                            1
                        ]
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_7, {
                        values: [
                            1
                        ],
                        children: isConnecting ? 'Conectando...' : 'Conectar'
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
            lineNumber: 95,
            columnNumber: 5
        }, this);
    const StatusIndicator = ({ label, value, icon })=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_8, {
            children: [
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_9, {
                    children: icon
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                    lineNumber: 130,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_10, {
                    children: label
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_11, {
                    children: value
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
            lineNumber: 129,
            columnNumber: 5
        }, this);
    const getOverallStatus = ()=>{
        const connectedCount = Object.values(connectionStatus).filter((status)=>status === 'connected').length;
        const totalCount = Object.keys(connectionStatus).length;
        if (connectedCount === totalCount) return 'Completamente Conectado';
        if (connectedCount > 0) return 'Parcialmente Conectado';
        return 'Desconectado';
    };
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_12, {
        values: [
            1,
            1,
            1
        ],
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_13, {
                children: [
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatusIndicator, {
                        label: "Estado",
                        value: getOverallStatus(),
                        icon: "\u{1F4E1}"
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                        lineNumber: 157,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatusIndicator, {
                        label: "Servidores Activos",
                        value: `${Object.values(connectionStatus).filter((s)=>s === 'connected').length}/${Object.keys(connectionStatus).length}`,
                        icon: "\u{1F5A5}\uFE0F"
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                        lineNumber: 162,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, false, {
                fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                lineNumber: 156,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_02a8a_d196f_14, {
                children: [
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectionCard, {
                        title: "Servidor Principal",
                        serverType: "mainServer",
                        config: serverConfig.mainServer,
                        status: connectionStatus.mainServer
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                        lineNumber: 175,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectionCard, {
                        title: "Servidor del Robot",
                        serverType: "robotServer",
                        config: serverConfig.robotServer,
                        status: connectionStatus.robotServer
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectionCard, {
                        title: "Base de Datos",
                        serverType: "database",
                        config: serverConfig.database,
                        status: connectionStatus.database
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                        lineNumber: 189,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConnectionCard, {
                        title: "C\xe1mara",
                        serverType: "camera",
                        config: serverConfig.camera,
                        status: connectionStatus.camera
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                        lineNumber: 196,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, false, {
                fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
                lineNumber: 174,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ConnectionsScreen.jsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./src/components/ControlScreen.jsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ControlScreen: () => (ControlScreen)
});
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");


const __snapshot_5262b_1ba6b_2 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_2", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "control-label");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_3 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_3", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "control-value");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "arrow-control");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "control-header");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el3);
    const el4 = __CreateView(pageId);
    __SetClasses(el4, "arrow-buttons");
    __AppendElement(el, el4);
    const el5 = __CreateView(pageId);
    __SetClasses(el5, "arrow-button");
    __AppendElement(el4, el5);
    const el6 = __CreateText(pageId);
    __SetClasses(el6, "arrow-text");
    __AppendElement(el5, el6);
    const el7 = __CreateRawText("\u25BC");
    __AppendElement(el6, el7);
    const el8 = __CreateView(pageId);
    __SetClasses(el8, "arrow-button");
    __AppendElement(el4, el8);
    const el9 = __CreateText(pageId);
    __SetClasses(el9, "arrow-text");
    __AppendElement(el8, el9);
    const el10 = __CreateRawText("\u25B2");
    __AppendElement(el9, el10);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 5, "bindEvent", "tap", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 8, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        3
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_5 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_5", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "status-icon");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_6 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_6", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "status-label");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_7 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_7", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "status-value");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_4 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_4", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "status-content");
    __AppendElement(el, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el2, el4);
    return [
        el,
        el1,
        el2,
        el3,
        el4
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        1
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        3
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_9 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_9", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "preset-icon");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_10 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_10", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "preset-name");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_8 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_8", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "preset-button");
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        1
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_12 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_12", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "tab-icon");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_13 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_13", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "tab-label");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_11 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_11", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el, el2);
    return [
        el,
        el1,
        el2
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        1
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_15 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_15", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "status-bar");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_16 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_16", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "button-icon");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_17 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_17", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "button-text");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_14 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_14", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "tab-content");
    const el1 = __CreateWrapperElement(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateView(pageId);
    __SetClasses(el2, "control-section");
    __AppendElement(el, el2);
    const el3 = __CreateText(pageId);
    __SetClasses(el3, "section-title");
    __AppendElement(el2, el3);
    const el4 = __CreateRawText("Control Principal");
    __AppendElement(el3, el4);
    const el5 = __CreateView(pageId);
    __SetClasses(el5, "control-buttons");
    __AppendElement(el2, el5);
    const el6 = __CreateView(pageId);
    __AppendElement(el5, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el6, el7);
    const el8 = __CreateWrapperElement(pageId);
    __AppendElement(el6, el8);
    const el9 = __CreateView(pageId);
    __SetClasses(el9, "control-button emergency");
    __AppendElement(el5, el9);
    const el10 = __CreateView(pageId);
    __SetClasses(el10, "button-icon");
    __AppendElement(el9, el10);
    const el11 = __CreateRawText("\u{1F6D1}");
    __AppendElement(el10, el11);
    const el12 = __CreateText(pageId);
    __SetClasses(el12, "button-text");
    __AppendElement(el9, el12);
    const el13 = __CreateRawText("EMERGENCIA");
    __AppendElement(el12, el13);
    const el14 = __CreateView(pageId);
    __SetClasses(el14, "control-section");
    __AppendElement(el, el14);
    const el15 = __CreateText(pageId);
    __SetClasses(el15, "section-title");
    __AppendElement(el14, el15);
    const el16 = __CreateRawText("Posici\xf3n Actual");
    __AppendElement(el15, el16);
    const el17 = __CreateView(pageId);
    __SetClasses(el17, "position-display");
    __AppendElement(el14, el17);
    const el18 = __CreateText(pageId);
    __SetClasses(el18, "position-text");
    __AppendElement(el17, el18);
    const el19 = __CreateRawText("Cabeza: X:");
    __AppendElement(el18, el19);
    const el20 = __CreateWrapperElement(pageId);
    __AppendElement(el18, el20);
    const el21 = __CreateRawText("\xb0 Y:");
    __AppendElement(el18, el21);
    const el22 = __CreateWrapperElement(pageId);
    __AppendElement(el18, el22);
    const el23 = __CreateRawText("\xb0 Z:");
    __AppendElement(el18, el23);
    const el24 = __CreateWrapperElement(pageId);
    __AppendElement(el18, el24);
    const el25 = __CreateRawText("\xb0");
    __AppendElement(el18, el25);
    const el26 = __CreateText(pageId);
    __SetClasses(el26, "position-text");
    __AppendElement(el17, el26);
    const el27 = __CreateRawText("Brazo Izq: H:");
    __AppendElement(el26, el27);
    const el28 = __CreateWrapperElement(pageId);
    __AppendElement(el26, el28);
    const el29 = __CreateRawText("\xb0 C:");
    __AppendElement(el26, el29);
    const el30 = __CreateWrapperElement(pageId);
    __AppendElement(el26, el30);
    const el31 = __CreateRawText("\xb0 M:");
    __AppendElement(el26, el31);
    const el32 = __CreateWrapperElement(pageId);
    __AppendElement(el26, el32);
    const el33 = __CreateRawText("\xb0");
    __AppendElement(el26, el33);
    const el34 = __CreateText(pageId);
    __SetClasses(el34, "position-text");
    __AppendElement(el17, el34);
    const el35 = __CreateRawText("Brazo Der: H:");
    __AppendElement(el34, el35);
    const el36 = __CreateWrapperElement(pageId);
    __AppendElement(el34, el36);
    const el37 = __CreateRawText("\xb0 C:");
    __AppendElement(el34, el37);
    const el38 = __CreateWrapperElement(pageId);
    __AppendElement(el34, el38);
    const el39 = __CreateRawText("\xb0 M:");
    __AppendElement(el34, el39);
    const el40 = __CreateWrapperElement(pageId);
    __AppendElement(el34, el40);
    const el41 = __CreateRawText("\xb0");
    __AppendElement(el34, el41);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15,
        el16,
        el17,
        el18,
        el19,
        el20,
        el21,
        el22,
        el23,
        el24,
        el25,
        el26,
        el27,
        el28,
        el29,
        el30,
        el31,
        el32,
        el33,
        el34,
        el35,
        el36,
        el37,
        el38,
        el39,
        el40,
        el41
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[6], ctx.__values[0] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 6, "bindEvent", "tap", ''),
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 9, "bindEvent", "tap", '')
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        1
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        8
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        20
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        22
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        24
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        28
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        30
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        32
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        36
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        38
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        40
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_18 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_18", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "tab-content");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "section-title");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Control de Cabeza");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "control-grid");
    __AppendElement(el, el3);
    return [
        el,
        el1,
        el2,
        el3
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        3
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_19 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_19", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "tab-content");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "section-title");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Control de Brazos");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "arms-container");
    __AppendElement(el, el3);
    const el4 = __CreateView(pageId);
    __SetClasses(el4, "arm-control");
    __AppendElement(el3, el4);
    const el5 = __CreateText(pageId);
    __SetClasses(el5, "arm-title");
    __AppendElement(el4, el5);
    const el6 = __CreateRawText("Brazo Izquierdo");
    __AppendElement(el5, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el7);
    const el8 = __CreateView(pageId);
    __SetClasses(el8, "arm-control");
    __AppendElement(el3, el8);
    const el9 = __CreateText(pageId);
    __SetClasses(el9, "arm-title");
    __AppendElement(el8, el9);
    const el10 = __CreateRawText("Brazo Derecho");
    __AppendElement(el9, el10);
    const el11 = __CreateWrapperElement(pageId);
    __AppendElement(el8, el11);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        11
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_21 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_21", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "fingers-grid");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_22 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_22", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "fingers-grid");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_20 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_20", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "tab-content");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "section-title");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Control de Manos");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "hands-container");
    __AppendElement(el, el3);
    const el4 = __CreateView(pageId);
    __SetClasses(el4, "hand-control");
    __AppendElement(el3, el4);
    const el5 = __CreateText(pageId);
    __SetClasses(el5, "hand-title");
    __AppendElement(el4, el5);
    const el6 = __CreateRawText("Mano Izquierda");
    __AppendElement(el5, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el7);
    const el8 = __CreateView(pageId);
    __SetClasses(el8, "hand-control");
    __AppendElement(el3, el8);
    const el9 = __CreateText(pageId);
    __SetClasses(el9, "hand-title");
    __AppendElement(el8, el9);
    const el10 = __CreateRawText("Mano Derecha");
    __AppendElement(el9, el10);
    const el11 = __CreateWrapperElement(pageId);
    __AppendElement(el8, el11);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        11
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_23 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_23", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "tab-content");
    const el1 = __CreateText(pageId);
    __SetClasses(el1, "section-title");
    __AppendElement(el, el1);
    const el2 = __CreateRawText("Presets de Movimiento");
    __AppendElement(el1, el2);
    const el3 = __CreateView(pageId);
    __SetClasses(el3, "presets-grid");
    __AppendElement(el, el3);
    return [
        el,
        el1,
        el2,
        el3
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren */.__DynamicPartChildren),
        3
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_25 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_25", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "tab-navigation");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_5262b_1ba6b_24 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_5262b_1ba6b_24", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "screen");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "control-content");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "control-title");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("Control Inmoov");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "control-subtitle");
    __AppendElement(el1, el4);
    const el5 = __CreateRawText("Panel de Control del Robot");
    __AppendElement(el4, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el6);
    const el7 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el7);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        7
    ]
], undefined, globDynamicComponentEntry, null);
function ControlScreen() {
    const [activeTab, setActiveTab] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)('status');
    const [robotStatus, setRobotStatus] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)('idle') // idle, active, error
    ;
    const [currentPosition, setCurrentPosition] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        head: {
            x: 0,
            y: 0,
            z: 0
        },
        leftArm: {
            shoulder: 0,
            elbow: 0,
            wrist: 0
        },
        rightArm: {
            shoulder: 0,
            elbow: 0,
            wrist: 0
        },
        torso: {
            rotation: 0,
            tilt: 0
        },
        leftHand: {
            thumb: 0,
            index: 0,
            middle: 0,
            ring: 0,
            pinky: 0
        },
        rightHand: {
            thumb: 0,
            index: 0,
            middle: 0,
            ring: 0,
            pinky: 0
        }
    });
    const [batteryLevel, setBatteryLevel] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(87);
    const [temperature, setTemperature] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(42.5);
    const [connectionStatus, setConnectionStatus] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)('connected');
    const handleMovement = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{}, []);
    const handleHandGesture = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{}, []);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{}, []);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{}, []);
    const ArrowControl = ({ label, value, min, max, onChange, unit = "\xb0" })=>{
        return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_1, {
            values: [
                1,
                1
            ],
            children: [
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_2, {
                    children: label
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_3, {
                    children: [
                        value,
                        unit
                    ]
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    };
    const StatusIndicator = ({ label, value, status, icon })=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_4, {
            values: [
                `status-indicator status-${status}`
            ],
            children: [
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_5, {
                    children: icon
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 86,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_6, {
                    children: label
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_7, {
                    children: value
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
            lineNumber: 85,
            columnNumber: 5
        }, this);
    const PresetButton = ({ name, icon, action })=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_8, {
            values: [
                1
            ],
            children: [
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_9, {
                    children: icon
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_10, {
                    children: name
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 97,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
            lineNumber: 95,
            columnNumber: 5
        }, this);
    const TabButton = ({ id, label, icon, isActive })=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_11, {
            values: [
                `tab-button ${isActive ? 'active' : ''}`,
                1
            ],
            children: [
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_12, {
                    children: icon
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 106,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_13, {
                    children: label
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 107,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
            lineNumber: 102,
            columnNumber: 5
        }, this);
    const renderTabContent = ()=>{
        switch(activeTab){
            case 'status':
                return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_14, {
                    values: [
                        `control-button ${robotStatus === 'active' ? 'active' : ''}`,
                        1,
                        1
                    ],
                    children: [
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_15, {
                            children: [
                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatusIndicator, {
                                    label: "Estado",
                                    value: robotStatus === 'idle' ? 'Inactivo' : robotStatus === 'active' ? 'Activo' : 'Error',
                                    status: robotStatus,
                                    icon: robotStatus === 'idle' ? "\u{1F916}" : robotStatus === 'active' ? "\u26A1" : "\u26A0\uFE0F"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatusIndicator, {
                                    label: "Bater\xeda",
                                    value: `${batteryLevel}%`,
                                    status: batteryLevel > 20 ? 'good' : 'warning',
                                    icon: "\u{1F50B}"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatusIndicator, {
                                    label: "Temperatura",
                                    value: `${temperature}\xb0C`,
                                    status: temperature < 50 ? 'good' : 'warning',
                                    icon: "\u{1F321}\uFE0F"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatusIndicator, {
                                    label: "Conexi\xf3n",
                                    value: connectionStatus === 'connected' ? 'Conectado' : 'Desconectado',
                                    status: connectionStatus === 'connected' ? 'good' : 'error',
                                    icon: "\u{1F4E1}"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_16, {
                            children: robotStatus === 'active' ? "\u23F8\uFE0F" : "\u25B6\uFE0F"
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 147,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_17, {
                            children: robotStatus === 'active' ? 'Pausar' : 'Activar'
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 148,
                            columnNumber: 19
                        }, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: currentPosition.head.x
                        }, void 0, false, void 0, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: currentPosition.head.y
                        }, void 0, false, void 0, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: currentPosition.head.z
                        }, void 0, false, void 0, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: currentPosition.leftArm.shoulder
                        }, void 0, false, void 0, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: currentPosition.leftArm.elbow
                        }, void 0, false, void 0, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: currentPosition.leftArm.wrist
                        }, void 0, false, void 0, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: currentPosition.rightArm.shoulder
                        }, void 0, false, void 0, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: currentPosition.rightArm.elbow
                        }, void 0, false, void 0, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: currentPosition.rightArm.wrist
                        }, void 0, false, void 0, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this);
            case 'head':
                return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_18, {
                    children: [
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowControl, {
                            label: "Rotaci\xf3n X",
                            value: currentPosition.head.x,
                            min: -45,
                            max: 45,
                            onChange: (value)=>handleMovement('head', 'x', value)
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 179,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowControl, {
                            label: "Rotaci\xf3n Y",
                            value: currentPosition.head.y,
                            min: -30,
                            max: 30,
                            onChange: (value)=>handleMovement('head', 'y', value)
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 186,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowControl, {
                            label: "Rotaci\xf3n Z",
                            value: currentPosition.head.z,
                            min: -90,
                            max: 90,
                            onChange: (value)=>handleMovement('head', 'z', value)
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 193,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this);
            case 'arms':
                return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_19, {
                    children: [
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: [
                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowControl, {
                                    label: "Hombro",
                                    value: currentPosition.leftArm.shoulder,
                                    min: -90,
                                    max: 90,
                                    onChange: (value)=>handleMovement('leftArm', 'shoulder', value)
                                }, void 0, false, {
                                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowControl, {
                                    label: "Codo",
                                    value: currentPosition.leftArm.elbow,
                                    min: 0,
                                    max: 120,
                                    onChange: (value)=>handleMovement('leftArm', 'elbow', value)
                                }, void 0, false, {
                                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                                    lineNumber: 218,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowControl, {
                                    label: "Mu\xf1eca",
                                    value: currentPosition.leftArm.wrist,
                                    min: -45,
                                    max: 45,
                                    onChange: (value)=>handleMovement('leftArm', 'wrist', value)
                                }, void 0, false, {
                                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                                    lineNumber: 225,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, void 0, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                            children: [
                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowControl, {
                                    label: "Hombro",
                                    value: currentPosition.rightArm.shoulder,
                                    min: -90,
                                    max: 90,
                                    onChange: (value)=>handleMovement('rightArm', 'shoulder', value)
                                }, void 0, false, {
                                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowControl, {
                                    label: "Codo",
                                    value: currentPosition.rightArm.elbow,
                                    min: 0,
                                    max: 120,
                                    onChange: (value)=>handleMovement('rightArm', 'elbow', value)
                                }, void 0, false, {
                                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                                    lineNumber: 243,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowControl, {
                                    label: "Mu\xf1eca",
                                    value: currentPosition.rightArm.wrist,
                                    min: -45,
                                    max: 45,
                                    onChange: (value)=>handleMovement('rightArm', 'wrist', value)
                                }, void 0, false, {
                                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                                    lineNumber: 250,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, void 0, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 206,
                    columnNumber: 11
                }, this);
            case 'hands':
                return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_20, {
                    children: [
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_21, {
                            children: Object.entries(currentPosition.leftHand).map(([finger, value])=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowControl, {
                                    label: finger.charAt(0).toUpperCase() + finger.slice(1),
                                    value: value,
                                    min: 0,
                                    max: 90,
                                    onChange: (newValue)=>handleHandGesture('leftHand', finger, newValue)
                                }, finger, false, {
                                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                                    lineNumber: 271,
                                    columnNumber: 21
                                }, this))
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 269,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_22, {
                            children: Object.entries(currentPosition.rightHand).map(([finger, value])=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowControl, {
                                    label: finger.charAt(0).toUpperCase() + finger.slice(1),
                                    value: value,
                                    min: 0,
                                    max: 90,
                                    onChange: (newValue)=>handleHandGesture('rightHand', finger, newValue)
                                }, finger, false, {
                                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                                    lineNumber: 287,
                                    columnNumber: 21
                                }, this))
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 285,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 264,
                    columnNumber: 11
                }, this);
            case 'presets':
                return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_23, {
                    children: [
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PresetButton, {
                            name: "Saludo",
                            icon: "\u{1F44B}"
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 307,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PresetButton, {
                            name: "Ola",
                            icon: "\u{1F44B}"
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 308,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PresetButton, {
                            name: "Aplauso",
                            icon: "\u{1F44F}"
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 309,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PresetButton, {
                            name: "Punto",
                            icon: "\u{1F446}"
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 310,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PresetButton, {
                            name: "OK",
                            icon: "\u{1F44D}"
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 311,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PresetButton, {
                            name: "Paz",
                            icon: "\u270C\uFE0F"
                        }, void 0, false, {
                            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                            lineNumber: 312,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                    lineNumber: 304,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_24, {
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_5262b_1ba6b_25, {
                children: [
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabButton, {
                        id: "status",
                        label: "Estado",
                        icon: "\u{1F4CA}",
                        isActive: activeTab === 'status'
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                        lineNumber: 330,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabButton, {
                        id: "head",
                        label: "Cabeza",
                        icon: "\u{1F464}",
                        isActive: activeTab === 'head'
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabButton, {
                        id: "arms",
                        label: "Brazos",
                        icon: "\u{1F4AA}",
                        isActive: activeTab === 'arms'
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabButton, {
                        id: "hands",
                        label: "Manos",
                        icon: "\u270B",
                        isActive: activeTab === 'hands'
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabButton, {
                        id: "presets",
                        label: "Presets",
                        icon: "\u{1F3AF}",
                        isActive: activeTab === 'presets'
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                        lineNumber: 334,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, false, {
                fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
                lineNumber: 329,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: renderTabContent()
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\ControlScreen.jsx",
        lineNumber: 323,
        columnNumber: 5
    }, this);
}
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./src/components/DashboardScreen.jsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DashboardScreen: () => (DashboardScreen)
});
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");


const __snapshot_61894_6d2e7_2 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_61894_6d2e7_2", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "stat-icon");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_61894_6d2e7_3 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_61894_6d2e7_3", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "stat-title");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_61894_6d2e7_4 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_61894_6d2e7_4", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "stat-value");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_61894_6d2e7_5 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_61894_6d2e7_5", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "stat-unit");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_61894_6d2e7_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_61894_6d2e7_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "stat-header");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el2);
    const el3 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el3);
    const el4 = __CreateView(pageId);
    __SetClasses(el4, "stat-content");
    __AppendElement(el, el4);
    const el5 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el4, el6);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        3
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        5
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_61894_6d2e7_7 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_61894_6d2e7_7", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetClasses(el, "progress-title");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_61894_6d2e7_6 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_61894_6d2e7_6", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "progress-header");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el2);
    const el3 = __CreateText(pageId);
    __SetClasses(el3, "progress-percentage");
    __AppendElement(el1, el3);
    const el4 = __CreateWrapperElement(pageId);
    __AppendElement(el3, el4);
    const el5 = __CreateRawText("%");
    __AppendElement(el3, el5);
    const el6 = __CreateView(pageId);
    __SetClasses(el6, "progress-bar");
    __AppendElement(el, el6);
    const el7 = __CreateView(pageId);
    __SetClasses(el7, "progress-fill");
    __AppendElement(el6, el7);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[0], ctx.__values[0] || '');
    },
    function(ctx) {
        if (ctx.__elements) __SetInlineStyles(ctx.__elements[7], ctx.__values[1]);
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        4
    ]
], undefined, globDynamicComponentEntry, null);
const __snapshot_61894_6d2e7_9 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_61894_6d2e7_9", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "stats-grid");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_61894_6d2e7_8 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_61894_6d2e7_8", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "screen");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "dashboard-content");
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "dashboard-title");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("Dashboard Imoov");
    __AppendElement(el2, el3);
    const el4 = __CreateText(pageId);
    __SetClasses(el4, "dashboard-subtitle");
    __AppendElement(el1, el4);
    const el5 = __CreateRawText("Estad\xedsticas del Robot");
    __AppendElement(el4, el5);
    const el6 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el6);
    const el7 = __CreateView(pageId);
    __SetClasses(el7, "metrics-section");
    __AppendElement(el1, el7);
    const el8 = __CreateText(pageId);
    __SetClasses(el8, "section-title");
    __AppendElement(el7, el8);
    const el9 = __CreateRawText("M\xe9tricas Detalladas");
    __AppendElement(el8, el9);
    const el10 = __CreateView(pageId);
    __SetClasses(el10, "metrics-grid");
    __AppendElement(el7, el10);
    const el11 = __CreateView(pageId);
    __SetClasses(el11, "metric-item");
    __AppendElement(el10, el11);
    const el12 = __CreateText(pageId);
    __SetClasses(el12, "metric-label");
    __AppendElement(el11, el12);
    const el13 = __CreateRawText("Distancia Total");
    __AppendElement(el12, el13);
    const el14 = __CreateText(pageId);
    __SetClasses(el14, "metric-value");
    __AppendElement(el11, el14);
    const el15 = __CreateWrapperElement(pageId);
    __AppendElement(el14, el15);
    const el16 = __CreateRawText(" km");
    __AppendElement(el14, el16);
    const el17 = __CreateView(pageId);
    __SetClasses(el17, "metric-item");
    __AppendElement(el10, el17);
    const el18 = __CreateText(pageId);
    __SetClasses(el18, "metric-label");
    __AppendElement(el17, el18);
    const el19 = __CreateRawText("Consumo Energ\xe9tico");
    __AppendElement(el18, el19);
    const el20 = __CreateText(pageId);
    __SetClasses(el20, "metric-value");
    __AppendElement(el17, el20);
    const el21 = __CreateWrapperElement(pageId);
    __AppendElement(el20, el21);
    const el22 = __CreateRawText(" kWh");
    __AppendElement(el20, el22);
    const el23 = __CreateView(pageId);
    __SetClasses(el23, "progress-section");
    __AppendElement(el1, el23);
    const el24 = __CreateText(pageId);
    __SetClasses(el24, "section-title");
    __AppendElement(el23, el24);
    const el25 = __CreateRawText("Progreso de Objetivos");
    __AppendElement(el24, el25);
    const el26 = __CreateWrapperElement(pageId);
    __AppendElement(el23, el26);
    const el27 = __CreateView(pageId);
    __SetClasses(el27, "recent-activity");
    __AppendElement(el1, el27);
    const el28 = __CreateText(pageId);
    __SetClasses(el28, "section-title");
    __AppendElement(el27, el28);
    const el29 = __CreateRawText("Actividad Reciente");
    __AppendElement(el28, el29);
    const el30 = __CreateView(pageId);
    __SetClasses(el30, "activity-list");
    __AppendElement(el27, el30);
    const el31 = __CreateView(pageId);
    __SetClasses(el31, "activity-item");
    __AppendElement(el30, el31);
    const el32 = __CreateView(pageId);
    __SetClasses(el32, "activity-icon");
    __AppendElement(el31, el32);
    const el33 = __CreateRawText("\u{1F916}");
    __AppendElement(el32, el33);
    const el34 = __CreateView(pageId);
    __SetClasses(el34, "activity-content");
    __AppendElement(el31, el34);
    const el35 = __CreateText(pageId);
    __SetClasses(el35, "activity-title");
    __AppendElement(el34, el35);
    const el36 = __CreateRawText("Sesi\xf3n completada exitosamente");
    __AppendElement(el35, el36);
    const el37 = __CreateText(pageId);
    __SetClasses(el37, "activity-time");
    __AppendElement(el34, el37);
    const el38 = __CreateRawText("Hace 5 minutos");
    __AppendElement(el37, el38);
    const el39 = __CreateView(pageId);
    __SetClasses(el39, "activity-item");
    __AppendElement(el30, el39);
    const el40 = __CreateView(pageId);
    __SetClasses(el40, "activity-icon");
    __AppendElement(el39, el40);
    const el41 = __CreateRawText("\u26A1");
    __AppendElement(el40, el41);
    const el42 = __CreateView(pageId);
    __SetClasses(el42, "activity-content");
    __AppendElement(el39, el42);
    const el43 = __CreateText(pageId);
    __SetClasses(el43, "activity-title");
    __AppendElement(el42, el43);
    const el44 = __CreateRawText("Actualizaci\xf3n de firmware");
    __AppendElement(el43, el44);
    const el45 = __CreateText(pageId);
    __SetClasses(el45, "activity-time");
    __AppendElement(el42, el45);
    const el46 = __CreateRawText("Hace 1 hora");
    __AppendElement(el45, el46);
    const el47 = __CreateView(pageId);
    __SetClasses(el47, "activity-item");
    __AppendElement(el30, el47);
    const el48 = __CreateView(pageId);
    __SetClasses(el48, "activity-icon");
    __AppendElement(el47, el48);
    const el49 = __CreateRawText("\u{1F527}");
    __AppendElement(el48, el49);
    const el50 = __CreateView(pageId);
    __SetClasses(el50, "activity-content");
    __AppendElement(el47, el50);
    const el51 = __CreateText(pageId);
    __SetClasses(el51, "activity-title");
    __AppendElement(el50, el51);
    const el52 = __CreateRawText("Mantenimiento programado");
    __AppendElement(el51, el52);
    const el53 = __CreateText(pageId);
    __SetClasses(el53, "activity-time");
    __AppendElement(el50, el53);
    const el54 = __CreateRawText("Hace 3 horas");
    __AppendElement(el53, el54);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15,
        el16,
        el17,
        el18,
        el19,
        el20,
        el21,
        el22,
        el23,
        el24,
        el25,
        el26,
        el27,
        el28,
        el29,
        el30,
        el31,
        el32,
        el33,
        el34,
        el35,
        el36,
        el37,
        el38,
        el39,
        el40,
        el41,
        el42,
        el43,
        el44,
        el45,
        el46,
        el47,
        el48,
        el49,
        el50,
        el51,
        el52,
        el53,
        el54
    ];
}, null, [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        6
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        15
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        21
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        26
    ]
], undefined, globDynamicComponentEntry, null);
function DashboardScreen() {
    const [stats, setStats] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        totalSessions: 0,
        averageSessionTime: 0,
        successRate: 0,
        activeUsers: 0,
        totalDistance: 0,
        energyConsumption: 0
    });
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useEffect)();
    const StatCard = ({ title, value, unit, icon, color })=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_61894_6d2e7_1, {
            values: [
                `stat-card stat-card-${color}`
            ],
            children: [
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_61894_6d2e7_2, {
                    children: icon
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_61894_6d2e7_3, {
                    children: title
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_61894_6d2e7_4, {
                    children: value
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_61894_6d2e7_5, {
                    children: unit
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
            lineNumber: 31,
            columnNumber: 5
        }, this);
    const ProgressCard = ({ title, percentage, color })=>/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_61894_6d2e7_6, {
            values: [
                `progress-card progress-card-${color}`,
                {
                    width: `${percentage}%`
                }
            ],
            children: [
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_61894_6d2e7_7, {
                    children: title
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                    children: percentage
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
            lineNumber: 44,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_61894_6d2e7_8, {
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_61894_6d2e7_9, {
                children: [
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatCard, {
                        title: "Sesiones Totales",
                        value: stats.totalSessions,
                        unit: "sesiones",
                        icon: "\u{1F4CA}",
                        color: "blue"
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatCard, {
                        title: "Tiempo Promedio",
                        value: stats.averageSessionTime,
                        unit: "minutos",
                        icon: "\u23F1\uFE0F",
                        color: "green"
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatCard, {
                        title: "Tasa de \xc9xito",
                        value: stats.successRate,
                        unit: "%",
                        icon: "\u2705",
                        color: "purple"
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StatCard, {
                        title: "Usuarios Activos",
                        value: stats.activeUsers,
                        unit: "usuarios",
                        icon: "\u{1F465}",
                        color: "orange"
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, false, {
                fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: stats.totalDistance
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: stats.energyConsumption
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("wrapper", {
                children: [
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressCard, {
                        title: "Eficiencia Operacional",
                        percentage: 87,
                        color: "blue"
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressCard, {
                        title: "Satisfacci\xf3n del Usuario",
                        percentage: 92,
                        color: "green"
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProgressCard, {
                        title: "Mantenimiento Preventivo",
                        percentage: 78,
                        color: "orange"
                    }, void 0, false, {
                        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, void 0, this)
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\DashboardScreen.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./src/components/HomeScreen.jsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HomeScreen: () => (HomeScreen)
});
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _assets_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./src/assets/arrow.png");
/* ESM import */var _assets_lynx_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./src/assets/lynx-logo.png");
/* ESM import */var _assets_react_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("(react:main-thread)/./src/assets/react-logo.png");





const __snapshot_2d4f6_fdb92_3 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_2d4f6_fdb92_3", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateImage(pageId);
    __SetClasses(el, "Logo--react");
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[0], "src", ctx.__values[0]);
    }
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_2d4f6_fdb92_4 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_2d4f6_fdb92_4", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateImage(pageId);
    __SetClasses(el, "Logo--lynx");
    return [
        el
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[0], "src", ctx.__values[0]);
    }
], null, undefined, globDynamicComponentEntry, null);
const __snapshot_2d4f6_fdb92_2 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_2d4f6_fdb92_2", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "Logo");
    return [
        el
    ];
}, [
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 0, "bindEvent", "tap", '')
], (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_2d4f6_fdb92_5 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_2d4f6_fdb92_5", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateText(pageId);
    __SetInlineStyles(el, "font-style:italic;color:rgba(255, 255, 255, 0.85)");
    return [
        el
    ];
}, null, (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartChildren_0 */.__DynamicPartChildren_0), undefined, globDynamicComponentEntry, null);
const __snapshot_2d4f6_fdb92_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_2d4f6_fdb92_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "screen home-screen");
    const el1 = __CreateView(pageId);
    __SetClasses(el1, "Banner");
    __AppendElement(el, el1);
    const el2 = __CreateWrapperElement(pageId);
    __AppendElement(el1, el2);
    const el3 = __CreateText(pageId);
    __SetClasses(el3, "Title");
    __AppendElement(el1, el3);
    const el4 = __CreateRawText("Robot Educativo Unitec");
    __AppendElement(el3, el4);
    const el5 = __CreateText(pageId);
    __SetClasses(el5, "Subtitle");
    __AppendElement(el1, el5);
    const el6 = __CreateRawText("Inmoov");
    __AppendElement(el5, el6);
    const el7 = __CreateView(pageId);
    __SetClasses(el7, "Content");
    __AppendElement(el, el7);
    const el8 = __CreateView(pageId);
    __SetClasses(el8, "inmoov-logo");
    __AppendElement(el7, el8);
    const el9 = __CreateText(pageId);
    __SetClasses(el9, "inmoov-text");
    __AppendElement(el8, el9);
    const el10 = __CreateRawText("\u{1F916}");
    __AppendElement(el9, el10);
    const el11 = __CreateImage(pageId);
    __SetClasses(el11, "Arrow");
    __AppendElement(el7, el11);
    const el12 = __CreateText(pageId);
    __SetClasses(el12, "Description");
    __AppendElement(el7, el12);
    const el13 = __CreateRawText("\xa1Controla el robot Inmoov desde tu dispositivo!");
    __AppendElement(el12, el13);
    const el14 = __CreateText(pageId);
    __SetClasses(el14, "Hint");
    __AppendElement(el7, el14);
    const el15 = __CreateRawText("Usa el panel de");
    __AppendElement(el14, el15);
    const el16 = __CreateWrapperElement(pageId);
    __AppendElement(el14, el16);
    const el17 = __CreateRawText("para mover el robot");
    __AppendElement(el14, el17);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15,
        el16,
        el17
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetAttribute(ctx.__elements[11], "src", ctx.__values[0]);
    }
], [
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        2
    ],
    [
        (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__DynamicPartSlot */.__DynamicPartSlot),
        16
    ]
], undefined, globDynamicComponentEntry, null);
function HomeScreen() {
    const [alterLogo, setAlterLogo] = (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{}, []);
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_2d4f6_fdb92_1, {
        values: [
            _assets_arrow_png__WEBPACK_IMPORTED_MODULE_2__
        ],
        children: [
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_2d4f6_fdb92_2, {
                values: [
                    1
                ],
                children: alterLogo ? /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_2d4f6_fdb92_3, {
                    values: [
                        _assets_react_logo_png__WEBPACK_IMPORTED_MODULE_4__
                    ]
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\HomeScreen.jsx",
                    lineNumber: 19,
                    columnNumber: 15
                }, this) : /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_2d4f6_fdb92_4, {
                    values: [
                        _assets_lynx_logo_png__WEBPACK_IMPORTED_MODULE_3__
                    ]
                }, void 0, false, {
                    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\HomeScreen.jsx",
                    lineNumber: 20,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\HomeScreen.jsx",
                lineNumber: 17,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_2d4f6_fdb92_5, {
                children: ' Control '
            }, void 0, false, {
                fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\HomeScreen.jsx",
                lineNumber: 32,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\HomeScreen.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./src/components/Navbar.jsx": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Navbar: () => (Navbar)
});
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");


const __snapshot_d1eb1_b7bd8_1 = /*#__PURE__*/ (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .createSnapshot */.createSnapshot)("__snapshot_d1eb1_b7bd8_1", function() {
    const pageId = (__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .__pageId */.__pageId);
    const el = __CreateView(pageId);
    __SetClasses(el, "footer-nav");
    const el1 = __CreateView(pageId);
    __AppendElement(el, el1);
    const el2 = __CreateText(pageId);
    __SetClasses(el2, "nav-icon");
    __AppendElement(el1, el2);
    const el3 = __CreateRawText("\u2302");
    __AppendElement(el2, el3);
    const el4 = __CreateView(pageId);
    __AppendElement(el, el4);
    const el5 = __CreateText(pageId);
    __SetClasses(el5, "nav-icon");
    __AppendElement(el4, el5);
    const el6 = __CreateRawText("\u2630");
    __AppendElement(el5, el6);
    const el7 = __CreateView(pageId);
    __AppendElement(el, el7);
    const el8 = __CreateText(pageId);
    __SetClasses(el8, "nav-icon");
    __AppendElement(el7, el8);
    const el9 = __CreateRawText("\u2605");
    __AppendElement(el8, el9);
    const el10 = __CreateView(pageId);
    __AppendElement(el, el10);
    const el11 = __CreateText(pageId);
    __SetClasses(el11, "nav-icon");
    __AppendElement(el10, el11);
    const el12 = __CreateRawText("\u2699");
    __AppendElement(el11, el12);
    const el13 = __CreateView(pageId);
    __AppendElement(el, el13);
    const el14 = __CreateText(pageId);
    __SetClasses(el14, "nav-icon");
    __AppendElement(el13, el14);
    const el15 = __CreateRawText("\u25CF");
    __AppendElement(el14, el15);
    return [
        el,
        el1,
        el2,
        el3,
        el4,
        el5,
        el6,
        el7,
        el8,
        el9,
        el10,
        el11,
        el12,
        el13,
        el14,
        el15
    ];
}, [
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[1], ctx.__values[0] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 1, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[4], ctx.__values[2] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 4, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[7], ctx.__values[4] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 7, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[10], ctx.__values[6] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 10, "bindEvent", "tap", ''),
    function(ctx) {
        if (ctx.__elements) __SetClasses(ctx.__elements[13], ctx.__values[8] || '');
    },
    (snapshot, index, oldValue)=>(__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/internal.js")/* .updateEvent */.updateEvent)(snapshot, index, oldValue, 13, "bindEvent", "tap", '')
], null, undefined, globDynamicComponentEntry, null);
function Navbar({ activeRoute, onRouteChange }) {
    (0,_lynx_js_react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((route)=>{
        onRouteChange === null || onRouteChange === void 0 ? void 0 : onRouteChange(route);
    }, [
        onRouteChange
    ]);
    return /*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(__snapshot_d1eb1_b7bd8_1, {
        values: [
            `footer-nav-item ${activeRoute === 'home' ? 'active' : ''}`,
            1,
            `footer-nav-item ${activeRoute === 'dashboard' ? 'active' : ''}`,
            1,
            `footer-nav-item ${activeRoute === 'classes' ? 'active' : ''}`,
            1,
            `footer-nav-item ${activeRoute === 'connections' ? 'active' : ''}`,
            1,
            `footer-nav-item ${activeRoute === 'control' ? 'active' : ''}`,
            1
        ]
    }, void 0, false, {
        fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\components\\Navbar.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./src/index.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lepus/jsx-runtime/index.js");
/* ESM import */var _lynx_js_react_debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/debug/index.js");
/* ESM import */var _lynx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("(react:main-thread)/./node_modules/@lynx-js/react/runtime/lib/index.js");
/* ESM import */var _App_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("(react:main-thread)/./src/App.jsx");




_lynx_js_react__WEBPACK_IMPORTED_MODULE_2__.root.render(/*#__PURE__*/ (0,_lynx_js_react_lepus_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App_jsx__WEBPACK_IMPORTED_MODULE_3__.App, {}, void 0, false, {
    fileName: "C:\\Users\\josue\\Desktop\\RobotAtlas\\atlas\\src\\index.jsx",
    lineNumber: 6,
    columnNumber: 13
}, undefined));
if (true) module.hot.accept();
// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
    globalThis.$RefreshReg$ = function() {};
    globalThis.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}


}),
"(react:main-thread)/./src/App.css": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
if (cachedModule.error !== undefined) throw cachedModule.error;
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
exports: {}
});
// Execute the module function
try {

var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
module = execOptions.module;
if (!execOptions.factory) {
  console.error("undefined factory", moduleId)
}
execOptions.factory.call(module.exports, module, module.exports, execOptions.require);

} catch (e) {
module.error = e;
throw e;
}
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// expose the module cache
__webpack_require__.c = __webpack_module_cache__;

// expose the module execution interceptor
__webpack_require__.i = [];

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/get_chunk_update_filename
(() => {
__webpack_require__.hu = (chunkId) => ('' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js')
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("61315b913f14bef2")
})();
// webpack/runtime/get_main_filename/update manifest
(() => {
__webpack_require__.hmrF = function () {
            return "main__main-thread." + __webpack_require__.h() + ".hot-update.json";
         };
        
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/hot_module_replacement
(() => {
var currentModuleData = {};
var installedModules = __webpack_require__.c;

// module and require creation
var currentChildModule;
var currentParents = [];

// status
var registeredStatusHandlers = [];
var currentStatus = "idle";

// while downloading
var blockingPromises = 0;
var blockingPromisesWaiting = [];

// The update info
var currentUpdateApplyHandlers;
var queuedInvalidatedModules;

__webpack_require__.hmrD = currentModuleData;
__webpack_require__.i.push(function (options) {
	var module = options.module;
	var require = createRequire(options.require, options.id);
	module.hot = createModuleHotObject(options.id, module);
	module.parents = currentParents;
	module.children = [];
	currentParents = [];
	options.require = require;
});

__webpack_require__.hmrC = {};
__webpack_require__.hmrI = {};

function createRequire(require, moduleId) {
	var me = installedModules[moduleId];
	if (!me) return require;
	var fn = function (request) {
		if (me.hot.active) {
			if (installedModules[request]) {
				var parents = installedModules[request].parents;
				if (parents.indexOf(moduleId) === -1) {
					parents.push(moduleId);
				}
			} else {
				currentParents = [moduleId];
				currentChildModule = request;
			}
			if (me.children.indexOf(request) === -1) {
				me.children.push(request);
			}
		} else {
			console.warn(
				"[HMR] unexpected require(" +
				request +
				") from disposed module " +
				moduleId
			);
			currentParents = [];
		}
		return require(request);
	};
	var createPropertyDescriptor = function (name) {
		return {
			configurable: true,
			enumerable: true,
			get: function () {
				return require[name];
			},
			set: function (value) {
				require[name] = value;
			}
		};
	};
	for (var name in require) {
		if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
			Object.defineProperty(fn, name, createPropertyDescriptor(name));
		}
	}

	fn.e = function (chunkId, fetchPriority) {
		return trackBlockingPromise(require.e(chunkId, fetchPriority));
	};

	return fn;
}

function createModuleHotObject(moduleId, me) {
	var _main = currentChildModule !== moduleId;
	var hot = {
		_acceptedDependencies: {},
		_acceptedErrorHandlers: {},
		_declinedDependencies: {},
		_selfAccepted: false,
		_selfDeclined: false,
		_selfInvalidated: false,
		_disposeHandlers: [],
		_main: _main,
		_requireSelf: function () {
			currentParents = me.parents.slice();
			currentChildModule = _main ? undefined : moduleId;
			__webpack_require__(moduleId);
		},
		active: true,
		accept: function (dep, callback, errorHandler) {
			if (dep === undefined) hot._selfAccepted = true;
			else if (typeof dep === "function") hot._selfAccepted = dep;
			else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._acceptedDependencies[dep[i]] = callback || function () { };
					hot._acceptedErrorHandlers[dep[i]] = errorHandler;
				}
			} else {
				hot._acceptedDependencies[dep] = callback || function () { };
				hot._acceptedErrorHandlers[dep] = errorHandler;
			}
		},
		decline: function (dep) {
			if (dep === undefined) hot._selfDeclined = true;
			else if (typeof dep === "object" && dep !== null)
				for (var i = 0; i < dep.length; i++)
					hot._declinedDependencies[dep[i]] = true;
			else hot._declinedDependencies[dep] = true;
		},
		dispose: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		addDisposeHandler: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		removeDisposeHandler: function (callback) {
			var idx = hot._disposeHandlers.indexOf(callback);
			if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
		},
		invalidate: function () {
			this._selfInvalidated = true;
			switch (currentStatus) {
				case "idle":
					currentUpdateApplyHandlers = [];
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					setStatus("ready");
					break;
				case "ready":
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					break;
				case "prepare":
				case "check":
				case "dispose":
				case "apply":
					(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
						moduleId
					);
					break;
				default:
					break;
			}
		},
		check: hotCheck,
		apply: hotApply,
		status: function (l) {
			if (!l) return currentStatus;
			registeredStatusHandlers.push(l);
		},
		addStatusHandler: function (l) {
			registeredStatusHandlers.push(l);
		},
		removeStatusHandler: function (l) {
			var idx = registeredStatusHandlers.indexOf(l);
			if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
		},
		data: currentModuleData[moduleId]
	};
	currentChildModule = undefined;
	return hot;
}

function setStatus(newStatus) {
	currentStatus = newStatus; 
	var results = [];
	for (var i = 0; i < registeredStatusHandlers.length; i++)
		results[i] = registeredStatusHandlers[i].call(null, newStatus);

	return Promise.all(results).then(function () { });
}

function unblock() {
	if (--blockingPromises === 0) {
		setStatus("ready").then(function () {
			if (blockingPromises === 0) {
				var list = blockingPromisesWaiting;
				blockingPromisesWaiting = [];
				for (var i = 0; i < list.length; i++) {
					list[i]();
				}
			}
		});
	}
}

function trackBlockingPromise(promise) {
	switch (currentStatus) {
		case "ready":
			setStatus("prepare");
		case "prepare":
			blockingPromises++;
			promise.then(unblock, unblock);
			return promise;
		default:
			return promise;
	}
}

function waitForBlockingPromises(fn) {
	if (blockingPromises === 0) return fn();
	return new Promise(function (resolve) {
		blockingPromisesWaiting.push(function () {
			resolve(fn());
		});
	});
}

function hotCheck(applyOnUpdate) {
	if (currentStatus !== "idle") {
		throw new Error("check() is only allowed in idle status");
	} 
	return setStatus("check")
		.then(__webpack_require__.hmrM)
		.then(function (update) {
			if (!update) {
				return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
					function () {
						return null;
					}
				);
			}

			return setStatus("prepare").then(function () {
				var updatedModules = [];
				currentUpdateApplyHandlers = [];

				return Promise.all(
					Object.keys(__webpack_require__.hmrC).reduce(function (
						promises,
						key
					) {
						__webpack_require__.hmrC[key](
							update.c,
							update.r,
							update.m,
							promises,
							currentUpdateApplyHandlers,
							updatedModules
						);
						return promises;
					},
						[])
				).then(function () {
					return waitForBlockingPromises(function () {
						if (applyOnUpdate) {
							return internalApply(applyOnUpdate);
						}
						return setStatus("ready").then(function () {
							return updatedModules;
						});
					});
				});
			});
		});
}

function hotApply(options) {
	if (currentStatus !== "ready") {
		return Promise.resolve().then(function () {
			throw new Error(
				"apply() is only allowed in ready status (state: " + currentStatus + ")"
			);
		});
	}
	return internalApply(options);
}

function internalApply(options) {
	options = options || {};
	applyInvalidatedModules();
	var results = currentUpdateApplyHandlers.map(function (handler) {
		return handler(options);
	});
	currentUpdateApplyHandlers = undefined;
	var errors = results
		.map(function (r) {
			return r.error;
		})
		.filter(Boolean);

	if (errors.length > 0) {
		return setStatus("abort").then(function () {
			throw errors[0];
		});
	}

	var disposePromise = setStatus("dispose");

	results.forEach(function (result) {
		if (result.dispose) result.dispose();
	});

	var applyPromise = setStatus("apply");

	var error;
	var reportError = function (err) {
		if (!error) error = err;
	};

	var outdatedModules = [];
	results.forEach(function (result) {
		if (result.apply) {
			var modules = result.apply(reportError);
			if (modules) {
				for (var i = 0; i < modules.length; i++) {
					outdatedModules.push(modules[i]);
				}
			}
		}
	});

	return Promise.all([disposePromise, applyPromise]).then(function () {
		if (error) {
			return setStatus("fail").then(function () {
				throw error;
			});
		}

		if (queuedInvalidatedModules) {
			return internalApply(options).then(function (list) {
				outdatedModules.forEach(function (moduleId) {
					if (list.indexOf(moduleId) < 0) list.push(moduleId);
				});
				return list;
			});
		}

		return setStatus("idle").then(function () {
			return outdatedModules;
		});
	});
}

function applyInvalidatedModules() {
	if (queuedInvalidatedModules) {
		if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
		Object.keys(__webpack_require__.hmrI).forEach(function (key) {
			queuedInvalidatedModules.forEach(function (moduleId) {
				__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
			});
		});
		queuedInvalidatedModules = undefined;
		return true;
	}
}
// @ts-nocheck
__webpack_require__.i.push(function(options) {
  if (
    // This means this is in main-thread
    !globalThis.__PREFRESH__
    // Loading a module of background layer in main-thread, we replace the layer with the main-thread.
    && options.id.includes('(react:background)')
  ) {
    // We may serialize the snapshot from background to main-thread.
    // The `(react:background)` layer in the module id cannot be found in the main-thread.
    // Thus we replace it here to make HMR work.
    //
    // Maybe it is better to run chunk loading on main thread.
    options.id = options.id.replace(
      `(react:background)`, // This is replaced by ReactRefreshWebpackPlugin
      '(react:main-thread)', // This is replaced by ReactRefreshWebpackPlugin
    );
    const factory = __webpack_modules__[options.id];
    if (factory) {
      options.factory = factory;
    }
    return;
  }
  var originalFactory = options.factory;
  options.factory = function(moduleObject, moduleExports, webpackRequire) {
    var prevRefreshReg = globalThis.$RefreshReg$;
    var prevRefreshSig = globalThis.$RefreshSig$;
    globalThis.$RefreshSig$ = function() {
      var status = 'begin';
      var savedType;

      return function(type, key, forceReset, getCustomHooks) {
        // `globalThis.__PREFRESH__` may not exist when requiring `react`:
        //   - require('react-refresh')
        //     - require('react').options
        //       - require('useSyncExternalStore')
        //         - __REFRESH__.sign // not a function
        // TODO(wangqingyu): Replace globalThis.__PREFRESH__ with lynx.__PREFRESH__
        if (!globalThis.__PREFRESH__) {
          return type;
        }
        if (!savedType) savedType = type;

        status = globalThis.__PREFRESH__.sign(
          type || savedType,
          key,
          forceReset,
          getCustomHooks,
          status,
        );
        return type;
      };
    };
    var reg = function(currentModuleId) {
      globalThis.$RefreshReg$ = function(type, id) {
        // `globalThis.__PREFRESH__` may not exist when requiring `react`:
        //   - require('react-refresh')
        //     - require('react').options
        //       - require('useSyncExternalStore')
        //         - __REFRESH__.sign // not a function
        if (globalThis.__PREFRESH__) {
          globalThis.__PREFRESH__.register(type, currentModuleId + ' ' + id);
        }
      };
    };
    reg();
    try {
      originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
    } finally {
      globalThis.$RefreshReg$ = prevRefreshReg;
      globalThis.$RefreshSig$ = prevRefreshSig;
    }
  };
});

// noop fns to prevent runtime errors during initialization
if (typeof globalThis !== "undefined") {
  globalThis.$RefreshReg$ = function () {};
  globalThis.$RefreshSig$ = function () {
    return function(type) {
      return type;
    };
  };
}
})();
// webpack/runtime/lynx css hot update
(() => {

__webpack_require__.cssHotUpdateList = [["main__main-thread",".rspeedy/main__main-thread/main__main-thread.css.hot-update.json"]];

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "http://172.16.240.200:3000/";
})();
// webpack/runtime/Lynx async chunks
(() => {
// lynx async chunks ids
__webpack_require__.lynx_aci = {}
})();
// webpack/runtime/Lynx chunk loading
(() => {
// object to store loaded chunks
// "1" means "loaded", otherwise not loaded yet
var installedChunks = __webpack_require__.hmrS_require = __webpack_require__.hmrS_require || {
	"main__main-thread": 1
};
// no on chunks loaded
// no chunk install function needed
// no chunk loading

    function loadUpdateChunk(chunkId, updatedModulesList) {
        return new Promise((resolve, reject) => {
            lynx.requireModuleAsync(__webpack_require__.p
                + __webpack_require__.hu(chunkId), (err, update) => {
                if (err) {
                    reject(err);
                    return;
                }
                var updatedModules = update.modules;
                var runtime = update.runtime;
                for (var moduleId in updatedModules) {
                    if (__webpack_require__.o(updatedModules, moduleId)) {
                        currentUpdate[moduleId] = updatedModules[moduleId];
                        if (updatedModulesList)
                            updatedModulesList.push(moduleId);
                    }
                }
                if (runtime)
                    currentUpdateRuntime.push(runtime);
                resolve();
            });
        });
    }

    var currentUpdateChunks;
    var currentUpdate;
    var currentUpdateRemovedChunks;
    var currentUpdateRuntime;
    function applyHandler(options) {
        if (__webpack_require__.f) {
            delete __webpack_require__.f.requireHmr;
        }
        currentUpdateChunks = undefined;
        function getAffectedModuleEffects(updateModuleId) {
            var outdatedModules = [updateModuleId];
            var outdatedDependencies = {};
            var queue = outdatedModules.map(function (id) {
                return {
                    chain: [id],
                    id: id,
                };
            });
            while (queue.length > 0) {
                var queueItem = queue.pop();
                var moduleId = queueItem.id;
                var chain = queueItem.chain;
                var module = __webpack_require__.c[moduleId];
                if (!module
                    || (module.hot._selfAccepted && !module.hot._selfInvalidated)) {
                    continue;
                }
                if (module.hot._selfDeclined) {
                    return {
                        type: 'self-declined',
                        chain: chain,
                        moduleId: moduleId,
                    };
                }
                if (module.hot._main) {
                    return {
                        type: 'unaccepted',
                        chain: chain,
                        moduleId: moduleId,
                    };
                }
                for (var i = 0; i < module.parents.length; i++) {
                    var parentId = module.parents[i];
                    var parent = __webpack_require__.c[parentId];
                    if (!parent)
                        continue;
                    if (parent.hot._declinedDependencies[moduleId]) {
                        return {
                            type: 'declined',
                            chain: chain.concat([parentId]),
                            moduleId: moduleId,
                            parentId: parentId,
                        };
                    }
                    if (outdatedModules.indexOf(parentId) !== -1)
                        continue;
                    if (parent.hot._acceptedDependencies[moduleId]) {
                        if (!outdatedDependencies[parentId]) {
                            outdatedDependencies[parentId] = [];
                        }
                        addAllToSet(outdatedDependencies[parentId], [moduleId]);
                        continue;
                    }
                    delete outdatedDependencies[parentId];
                    outdatedModules.push(parentId);
                    queue.push({
                        chain: chain.concat([parentId]),
                        id: parentId,
                    });
                }
            }
            return {
                type: 'accepted',
                moduleId: updateModuleId,
                outdatedModules: outdatedModules,
                outdatedDependencies: outdatedDependencies,
            };
        }
        function addAllToSet(a, b) {
            for (var i = 0; i < b.length; i++) {
                var item = b[i];
                if (a.indexOf(item) === -1)
                    a.push(item);
            }
        }
        // at begin all updates modules are outdated
        // the "outdated" status can propagate to parents if they don't accept the children
        var outdatedDependencies = {};
        var outdatedModules = [];
        var appliedUpdate = {};
        var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
            console.warn('[HMR] unexpected require(' + module.id + ') to disposed module');
        };
        for (var moduleId in currentUpdate) {
            if (__webpack_require__.o(currentUpdate, moduleId)) {
                var newModuleFactory = currentUpdate[moduleId];
                /** @type {TODO} */
                var result;
                if (newModuleFactory) {
                    result = getAffectedModuleEffects(moduleId);
                }
                else {
                    result = {
                        type: 'disposed',
                        moduleId: moduleId,
                    };
                }
                /** @type {Error|false} */
                var abortError = false;
                var doApply = false;
                var doDispose = false;
                var chainInfo = '';
                if (result.chain) {
                    chainInfo = '\nUpdate propagation: ' + result.chain.join(' -> ');
                }
                switch (result.type) {
                    case 'self-declined':
                        if (options.onDeclined)
                            options.onDeclined(result);
                        if (!options.ignoreDeclined) {
                            abortError = new Error('Aborted because of self decline: '
                                + result.moduleId
                                + chainInfo);
                        }
                        break;
                    case 'declined':
                        if (options.onDeclined)
                            options.onDeclined(result);
                        if (!options.ignoreDeclined) {
                            abortError = new Error('Aborted because of declined dependency: '
                                + result.moduleId
                                + ' in '
                                + result.parentId
                                + chainInfo);
                        }
                        break;
                    case 'unaccepted':
                        if (options.onUnaccepted)
                            options.onUnaccepted(result);
                        if (!options.ignoreUnaccepted) {
                            abortError = new Error('Aborted because ' + moduleId + ' is not accepted' + chainInfo);
                        }
                        break;
                    case 'accepted':
                        if (options.onAccepted)
                            options.onAccepted(result);
                        doApply = true;
                        break;
                    case 'disposed':
                        if (options.onDisposed)
                            options.onDisposed(result);
                        doDispose = true;
                        break;
                    default:
                        throw new Error('Un-exception type ' + result.type);
                }
                if (abortError) {
                    return {
                        error: abortError,
                    };
                }
                if (doApply) {
                    appliedUpdate[moduleId] = newModuleFactory;
                    addAllToSet(outdatedModules, result.outdatedModules);
                    for (moduleId in result.outdatedDependencies) {
                        if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
                            if (!outdatedDependencies[moduleId]) {
                                outdatedDependencies[moduleId] = [];
                            }
                            addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
                        }
                    }
                }
                if (doDispose) {
                    addAllToSet(outdatedModules, [result.moduleId]);
                    appliedUpdate[moduleId] = warnUnexpectedRequire;
                }
            }
        }
        currentUpdate = undefined;
        // Store self accepted outdated modules to require them later by the module system
        var outdatedSelfAcceptedModules = [];
        for (var j = 0; j < outdatedModules.length; j++) {
            var outdatedModuleId = outdatedModules[j];
            var module = __webpack_require__.c[outdatedModuleId];
            if (module
                && (module.hot._selfAccepted || module.hot._main)
                // removed self-accepted modules should not be required
                && appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire
                // when called invalidate self-accepting is not possible
                && !module.hot._selfInvalidated) {
                outdatedSelfAcceptedModules.push({
                    module: outdatedModuleId,
                    require: module.hot._requireSelf,
                    errorHandler: module.hot._selfAccepted,
                });
            }
        }
        var moduleOutdatedDependencies;
        return {
            dispose: function () {
                currentUpdateRemovedChunks.forEach(function (chunkId) {
                    delete installedChunks[chunkId];
                });
                currentUpdateRemovedChunks = undefined;
                var idx;
                var queue = outdatedModules.slice();
                while (queue.length > 0) {
                    var moduleId = queue.pop();
                    var module = __webpack_require__.c[moduleId];
                    if (!module)
                        continue;
                    var data = {};
                    // Call dispose handlers
                    var disposeHandlers = module.hot._disposeHandlers;
                    for (j = 0; j < disposeHandlers.length; j++) {
                        disposeHandlers[j].call(null, data);
                    }
                    __webpack_require__.hmrD[moduleId] = data;
                    // disable module (this disables requires from this module)
                    module.hot.active = false;
                    // remove module from cache
                    delete __webpack_require__.c[moduleId];
                    // when disposing there is no need to call dispose handler
                    delete outdatedDependencies[moduleId];
                    // remove "parents" references from all children
                    for (j = 0; j < module.children.length; j++) {
                        var child = __webpack_require__.c[module.children[j]];
                        if (!child)
                            continue;
                        idx = child.parents.indexOf(moduleId);
                        if (idx >= 0) {
                            child.parents.splice(idx, 1);
                        }
                    }
                }
                // remove outdated dependency from module children
                var dependency;
                for (var outdatedModuleId in outdatedDependencies) {
                    if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
                        module = __webpack_require__.c[outdatedModuleId];
                        if (module) {
                            moduleOutdatedDependencies =
                                outdatedDependencies[outdatedModuleId];
                            for (j = 0; j < moduleOutdatedDependencies.length; j++) {
                                dependency = moduleOutdatedDependencies[j];
                                idx = module.children.indexOf(dependency);
                                if (idx >= 0)
                                    module.children.splice(idx, 1);
                            }
                        }
                    }
                }
            },
            apply: function (reportError) {
                // insert new code
                for (var updateModuleId in appliedUpdate) {
                    if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
                        __webpack_require__.m[updateModuleId] =
                            appliedUpdate[updateModuleId];
                    }
                }
                // run new runtime modules
                for (var i = 0; i < currentUpdateRuntime.length; i++) {
                    currentUpdateRuntime[i](__webpack_require__);
                }
                // call accept handlers
                for (var outdatedModuleId in outdatedDependencies) {
                    if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
                        var module = __webpack_require__.c[outdatedModuleId];
                        if (module) {
                            moduleOutdatedDependencies =
                                outdatedDependencies[outdatedModuleId];
                            var callbacks = [];
                            var errorHandlers = [];
                            var dependenciesForCallbacks = [];
                            for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
                                var dependency = moduleOutdatedDependencies[j];
                                var acceptCallback = module.hot._acceptedDependencies[dependency];
                                var errorHandler = module.hot._acceptedErrorHandlers[dependency];
                                if (acceptCallback) {
                                    if (callbacks.indexOf(acceptCallback) !== -1)
                                        continue;
                                    callbacks.push(acceptCallback);
                                    errorHandlers.push(errorHandler);
                                    dependenciesForCallbacks.push(dependency);
                                }
                            }
                            for (var k = 0; k < callbacks.length; k++) {
                                try {
                                    callbacks[k].call(null, moduleOutdatedDependencies);
                                }
                                catch (err) {
                                    if (typeof errorHandlers[k] === 'function') {
                                        try {
                                            errorHandlers[k](err, {
                                                moduleId: outdatedModuleId,
                                                dependencyId: dependenciesForCallbacks[k],
                                            });
                                        }
                                        catch (err2) {
                                            if (options.onErrored) {
                                                options.onErrored({
                                                    type: 'accept-error-handler-errored',
                                                    moduleId: outdatedModuleId,
                                                    dependencyId: dependenciesForCallbacks[k],
                                                    error: err2,
                                                    originalError: err,
                                                });
                                            }
                                            if (!options.ignoreErrored) {
                                                reportError(err2);
                                                reportError(err);
                                            }
                                        }
                                    }
                                    else {
                                        if (options.onErrored) {
                                            options.onErrored({
                                                type: 'accept-errored',
                                                moduleId: outdatedModuleId,
                                                dependencyId: dependenciesForCallbacks[k],
                                                error: err,
                                            });
                                        }
                                        if (!options.ignoreErrored) {
                                            reportError(err);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // Load self accepted modules
                for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
                    var item = outdatedSelfAcceptedModules[o];
                    var moduleId = item.module;
                    try {
                        item.require(moduleId);
                    }
                    catch (err) {
                        if (typeof item.errorHandler === 'function') {
                            try {
                                item.errorHandler(err, {
                                    moduleId: moduleId,
                                    module: __webpack_require__.c[moduleId],
                                });
                            }
                            catch (err2) {
                                if (options.onErrored) {
                                    options.onErrored({
                                        type: 'self-accept-error-handler-errored',
                                        moduleId: moduleId,
                                        error: err2,
                                        originalError: err,
                                    });
                                }
                                if (!options.ignoreErrored) {
                                    reportError(err2);
                                    reportError(err);
                                }
                            }
                        }
                        else {
                            if (options.onErrored) {
                                options.onErrored({
                                    type: 'self-accept-errored',
                                    moduleId: moduleId,
                                    error: err,
                                });
                            }
                            if (!options.ignoreErrored) {
                                reportError(err);
                            }
                        }
                    }
                }
                return outdatedModules;
            },
        };
    }
    __webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
        if (!currentUpdate) {
            currentUpdate = {};
            currentUpdateRuntime = [];
            currentUpdateRemovedChunks = [];
            applyHandlers.push(applyHandler);
        }
        if (!__webpack_require__.o(currentUpdate, moduleId)) {
            currentUpdate[moduleId] = __webpack_require__.m[moduleId];
        }
    };
    __webpack_require__.hmrC.require = function (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
        applyHandlers.push(applyHandler);
        currentUpdateChunks = {};
        currentUpdateRemovedChunks = removedChunks;
        currentUpdate = removedModules.reduce(function (obj, key) {
            obj[key] = false;
            return obj;
        }, {});
        currentUpdateRuntime = [];
        chunkIds.forEach(function (chunkId) {
            if (__webpack_require__.o(installedChunks, chunkId)
                && installedChunks[chunkId] !== undefined) {
                promises.push(loadUpdateChunk(chunkId, updatedModulesList));
                currentUpdateChunks[chunkId] = true;
            }
            else {
                currentUpdateChunks[chunkId] = false;
            }
        });
        if (__webpack_require__.f) {
            __webpack_require__.f.requireHmr = function (chunkId, promises) {
                if (currentUpdateChunks
                    && __webpack_require__.o(currentUpdateChunks, chunkId)
                    && !currentUpdateChunks[chunkId]) {
                    promises.push(loadUpdateChunk(chunkId));
                    currentUpdateChunks[chunkId] = true;
                }
            };
        }
    };

    __webpack_require__.hmrM = function () {
        return new Promise((resolve, reject) => lynx.requireModuleAsync(__webpack_require__.p
            + __webpack_require__.hmrF(), (err, ret) => {
            if (err)
                return reject(err);
            resolve(ret);
        }))['catch'](function (err) {
            if (err.code !== 'MODULE_NOT_FOUND')
                throw err;
        });
    };
})();
/************************************************************************/
// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports
__webpack_require__("(react:main-thread)/./node_modules/@lynx-js/css-extract-webpack-plugin/runtime/hotModuleReplacement.lepus.cjs");
var __webpack_exports__ = __webpack_require__("(react:main-thread)/./src/index.jsx");

//# sourceMappingURL=http://172.16.240.200:3000/.rspeedy/main/main-thread.js.map