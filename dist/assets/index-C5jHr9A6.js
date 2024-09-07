(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials" ? (i.credentials = "include") : l.crossOrigin === "anonymous" ? (i.credentials = "omit") : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = t(l);
    fetch(l.href, i);
  }
})();
var Vu = { exports: {} },
  br = {},
  Wu = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yt = Symbol.for("react.element"),
  tc = Symbol.for("react.portal"),
  rc = Symbol.for("react.fragment"),
  lc = Symbol.for("react.strict_mode"),
  ic = Symbol.for("react.profiler"),
  oc = Symbol.for("react.provider"),
  uc = Symbol.for("react.context"),
  sc = Symbol.for("react.forward_ref"),
  ac = Symbol.for("react.suspense"),
  cc = Symbol.for("react.memo"),
  dc = Symbol.for("react.lazy"),
  Ro = Symbol.iterator;
function fc(e) {
  return e === null || typeof e != "object" ? null : ((e = (Ro && e[Ro]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Hu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Qu = Object.assign,
  Ku = {};
function lt(e, n, t) {
  (this.props = e), (this.context = n), (this.refs = Ku), (this.updater = t || Hu);
}
lt.prototype.isReactComponent = {};
lt.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
lt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yu() {}
Yu.prototype = lt.prototype;
function Fi(e, n, t) {
  (this.props = e), (this.context = n), (this.refs = Ku), (this.updater = t || Hu);
}
var Ii = (Fi.prototype = new Yu());
Ii.constructor = Fi;
Qu(Ii, lt.prototype);
Ii.isPureReactComponent = !0;
var Do = Array.isArray,
  Xu = Object.prototype.hasOwnProperty,
  Ui = { current: null },
  Gu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zu(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  if (n != null) for (r in (n.ref !== void 0 && (o = n.ref), n.key !== void 0 && (i = "" + n.key), n)) Xu.call(n, r) && !Gu.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: Yt, type: e, key: i, ref: o, props: l, _owner: Ui.current };
}
function pc(e, n) {
  return { $$typeof: Yt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function $i(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yt;
}
function mc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Oo = /\/+/g;
function yl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? mc("" + e.key) : n.toString(36);
}
function vr(e, n, t, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Yt:
          case tc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + yl(o, 0) : r),
      Do(l)
        ? ((t = ""),
          e != null && (t = e.replace(Oo, "$&/") + "/"),
          vr(l, n, t, "", function (d) {
            return d;
          }))
        : l != null && ($i(l) && (l = pc(l, t + (!l.key || (o && o.key === l.key) ? "" : ("" + l.key).replace(Oo, "$&/") + "/") + e)), n.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Do(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + yl(i, u);
      o += vr(i, n, t, s, l);
    }
  else if (((s = fc(e)), typeof s == "function")) for (e = s.call(e), u = 0; !(i = e.next()).done; ) (i = i.value), (s = r + yl(i, u++)), (o += vr(i, n, t, s, l));
  else if (i === "object")
    throw (
      ((n = String(e)),
      Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."))
    );
  return o;
}
function er(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    vr(e, r, "", "", function (i) {
      return n.call(t, i, l++);
    }),
    r
  );
}
function hc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  yr = { transition: null },
  gc = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: yr, ReactCurrentOwner: Ui };
function Ju() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
  map: er,
  forEach: function (e, n, t) {
    er(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      er(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      er(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!$i(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
L.Component = lt;
L.Fragment = rc;
L.Profiler = ic;
L.PureComponent = Fi;
L.StrictMode = lc;
L.Suspense = ac;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gc;
L.act = Ju;
L.cloneElement = function (e, n, t) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Qu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (n != null) {
    if ((n.ref !== void 0 && ((i = n.ref), (o = Ui.current)), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps)) var u = e.type.defaultProps;
    for (s in n) Xu.call(n, s) && !Gu.hasOwnProperty(s) && (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Yt, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (e) {
  return (e = { $$typeof: uc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: oc, _context: e }), (e.Consumer = e);
};
L.createElement = Zu;
L.createFactory = function (e) {
  var n = Zu.bind(null, e);
  return (n.type = e), n;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: sc, render: e };
};
L.isValidElement = $i;
L.lazy = function (e) {
  return { $$typeof: dc, _payload: { _status: -1, _result: e }, _init: hc };
};
L.memo = function (e, n) {
  return { $$typeof: cc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function (e) {
  var n = yr.transition;
  yr.transition = {};
  try {
    e();
  } finally {
    yr.transition = n;
  }
};
L.unstable_act = Ju;
L.useCallback = function (e, n) {
  return ue.current.useCallback(e, n);
};
L.useContext = function (e) {
  return ue.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
L.useEffect = function (e, n) {
  return ue.current.useEffect(e, n);
};
L.useId = function () {
  return ue.current.useId();
};
L.useImperativeHandle = function (e, n, t) {
  return ue.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function (e, n) {
  return ue.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function (e, n) {
  return ue.current.useLayoutEffect(e, n);
};
L.useMemo = function (e, n) {
  return ue.current.useMemo(e, n);
};
L.useReducer = function (e, n, t) {
  return ue.current.useReducer(e, n, t);
};
L.useRef = function (e) {
  return ue.current.useRef(e);
};
L.useState = function (e) {
  return ue.current.useState(e);
};
L.useSyncExternalStore = function (e, n, t) {
  return ue.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function () {
  return ue.current.useTransition();
};
L.version = "18.3.1";
Wu.exports = L;
var Ai = Wu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vc = Ai,
  yc = Symbol.for("react.element"),
  xc = Symbol.for("react.fragment"),
  wc = Object.prototype.hasOwnProperty,
  kc = vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sc = { key: !0, ref: !0, __self: !0, __source: !0 };
function qu(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  t !== void 0 && (i = "" + t), n.key !== void 0 && (i = "" + n.key), n.ref !== void 0 && (o = n.ref);
  for (r in n) wc.call(n, r) && !Sc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps) for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: yc, type: e, key: i, ref: o, props: l, _owner: kc.current };
}
br.Fragment = xc;
br.jsx = qu;
br.jsxs = qu;
Vu.exports = br;
var c = Vu.exports,
  bu = { exports: {} },
  ye = {},
  es = { exports: {} },
  ns = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(E, P) {
    var z = E.length;
    E.push(P);
    e: for (; 0 < z; ) {
      var H = (z - 1) >>> 1,
        G = E[H];
      if (0 < l(G, P)) (E[H] = P), (E[z] = G), (z = H);
      else break e;
    }
  }
  function t(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var P = E[0],
      z = E.pop();
    if (z !== P) {
      E[0] = z;
      e: for (var H = 0, G = E.length, qt = G >>> 1; H < qt; ) {
        var gn = 2 * (H + 1) - 1,
          vl = E[gn],
          vn = gn + 1,
          bt = E[vn];
        if (0 > l(vl, z)) vn < G && 0 > l(bt, vl) ? ((E[H] = bt), (E[vn] = z), (H = vn)) : ((E[H] = vl), (E[gn] = z), (H = gn));
        else if (vn < G && 0 > l(bt, z)) (E[H] = bt), (E[vn] = z), (H = vn);
        else break e;
      }
    }
    return P;
  }
  function l(E, P) {
    var z = E.sortIndex - P.sortIndex;
    return z !== 0 ? z : E.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    d = [],
    g = 1,
    h = null,
    m = 3,
    x = !1,
    w = !1,
    k = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var P = t(d); P !== null; ) {
      if (P.callback === null) r(d);
      else if (P.startTime <= E) r(d), (P.sortIndex = P.expirationTime), n(s, P);
      else break;
      P = t(d);
    }
  }
  function v(E) {
    if (((k = !1), p(E), !w))
      if (t(s) !== null) (w = !0), hl(N);
      else {
        var P = t(d);
        P !== null && gl(v, P.startTime - E);
      }
  }
  function N(E, P) {
    (w = !1), k && ((k = !1), f(_), (_ = -1)), (x = !0);
    var z = m;
    try {
      for (p(P), h = t(s); h !== null && (!(h.expirationTime > P) || (E && !Ce())); ) {
        var H = h.callback;
        if (typeof H == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var G = H(h.expirationTime <= P);
          (P = e.unstable_now()), typeof G == "function" ? (h.callback = G) : h === t(s) && r(s), p(P);
        } else r(s);
        h = t(s);
      }
      if (h !== null) var qt = !0;
      else {
        var gn = t(d);
        gn !== null && gl(v, gn.startTime - P), (qt = !1);
      }
      return qt;
    } finally {
      (h = null), (m = z), (x = !1);
    }
  }
  var j = !1,
    C = null,
    _ = -1,
    W = 5,
    T = -1;
  function Ce() {
    return !(e.unstable_now() - T < W);
  }
  function ut() {
    if (C !== null) {
      var E = e.unstable_now();
      T = E;
      var P = !0;
      try {
        P = C(!0, E);
      } finally {
        P ? st() : ((j = !1), (C = null));
      }
    } else j = !1;
  }
  var st;
  if (typeof a == "function")
    st = function () {
      a(ut);
    };
  else if (typeof MessageChannel < "u") {
    var Mo = new MessageChannel(),
      nc = Mo.port2;
    (Mo.port1.onmessage = ut),
      (st = function () {
        nc.postMessage(null);
      });
  } else
    st = function () {
      I(ut, 0);
    };
  function hl(E) {
    (C = E), j || ((j = !0), st());
  }
  function gl(E, P) {
    _ = I(function () {
      E(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), hl(N));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (W = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = m;
      }
      var z = m;
      m = P;
      try {
        return E();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, P) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var z = m;
      m = E;
      try {
        return P();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (E, P, z) {
      var H = e.unstable_now();
      switch ((typeof z == "object" && z !== null ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? H + z : H)) : (z = H), E)) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = z + G),
        (E = { id: g++, callback: P, priorityLevel: E, startTime: z, expirationTime: G, sortIndex: -1 }),
        z > H ? ((E.sortIndex = z), n(d, E), t(s) === null && E === t(d) && (k ? (f(_), (_ = -1)) : (k = !0), gl(v, z - H))) : ((E.sortIndex = G), n(s, E), w || x || ((w = !0), hl(N))),
        E
      );
    }),
    (e.unstable_shouldYield = Ce),
    (e.unstable_wrapCallback = function (E) {
      var P = m;
      return function () {
        var z = m;
        m = P;
        try {
          return E.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    });
})(ns);
es.exports = ns;
var Nc = es.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ec = Ai,
  ve = Nc;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ts = new Set(),
  Lt = {};
function Ln(e, n) {
  Jn(e, n), Jn(e + "Capture", n);
}
function Jn(e, n) {
  for (Lt[e] = n, e = 0; e < n.length; e++) ts.add(n[e]);
}
var He = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Hl = Object.prototype.hasOwnProperty,
  jc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fo = {},
  Io = {};
function Cc(e) {
  return Hl.call(Io, e) ? !0 : Hl.call(Fo, e) ? !1 : jc.test(e) ? (Io[e] = !0) : ((Fo[e] = !0), !1);
}
function _c(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Pc(e, n, t, r) {
  if (n === null || typeof n > "u" || _c(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function se(e, n, t, r, l, i, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4), (this.attributeName = r), (this.attributeNamespace = l), (this.mustUseProperty = t), (this.propertyName = e), (this.type = n), (this.sanitizeURL = i), (this.removeEmptyString = o);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  ee[e] = new se(e, 0, !1, e, null, !1, !1);
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ee[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bi = /[\-:]([a-z])/g;
function Vi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Bi, Vi);
    ee[n] = new se(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var n = e.replace(Bi, Vi);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Bi, Vi);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wi(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || (n[0] !== "o" && n[0] !== "O") || (n[1] !== "n" && n[1] !== "N")) &&
    (Pc(n, t, l, r) && (t = null),
    r || l === null
      ? Cc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName), (r = l.attributeNamespace), t === null ? e.removeAttribute(n) : ((l = l.type), (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t), r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Xe = Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  nr = Symbol.for("react.element"),
  Rn = Symbol.for("react.portal"),
  Dn = Symbol.for("react.fragment"),
  Hi = Symbol.for("react.strict_mode"),
  Ql = Symbol.for("react.profiler"),
  rs = Symbol.for("react.provider"),
  ls = Symbol.for("react.context"),
  Qi = Symbol.for("react.forward_ref"),
  Kl = Symbol.for("react.suspense"),
  Yl = Symbol.for("react.suspense_list"),
  Ki = Symbol.for("react.memo"),
  Ze = Symbol.for("react.lazy"),
  is = Symbol.for("react.offscreen"),
  Uo = Symbol.iterator;
function at(e) {
  return e === null || typeof e != "object" ? null : ((e = (Uo && e[Uo]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var B = Object.assign,
  xl;
function vt(e) {
  if (xl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      xl = (n && n[1]) || "";
    }
  return (
    `
` +
    xl +
    e
  );
}
var wl = !1;
function kl(e, n) {
  if (!e || wl) return "";
  wl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (d) {
          r = d;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (wl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? vt(e) : "";
}
function zc(e) {
  switch (e.tag) {
    case 5:
      return vt(e.type);
    case 16:
      return vt("Lazy");
    case 13:
      return vt("Suspense");
    case 19:
      return vt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = kl(e.type, !1)), e;
    case 11:
      return (e = kl(e.type.render, !1)), e;
    case 1:
      return (e = kl(e.type, !0)), e;
    default:
      return "";
  }
}
function Xl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dn:
      return "Fragment";
    case Rn:
      return "Portal";
    case Ql:
      return "Profiler";
    case Hi:
      return "StrictMode";
    case Kl:
      return "Suspense";
    case Yl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ls:
        return (e.displayName || "Context") + ".Consumer";
      case rs:
        return (e._context.displayName || "Context") + ".Provider";
      case Qi:
        var n = e.render;
        return (e = e.displayName), e || ((e = n.displayName || n.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case Ki:
        return (n = e.displayName || null), n !== null ? n : Xl(e.type) || "Memo";
      case Ze:
        (n = e._payload), (e = e._init);
        try {
          return Xl(e(n));
        } catch {}
    }
  return null;
}
function Lc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (e = n.render), (e = e.displayName || e.name || ""), n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xl(n);
    case 8:
      return n === Hi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function os(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function Tc(e) {
  var n = os(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function tr(e) {
  e._valueTracker || (e._valueTracker = Tc(e));
}
function us(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return e && (r = os(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== t ? (n.setValue(e), !0) : !1;
}
function zr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gl(e, n) {
  var t = n.checked;
  return B({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function $o(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = dn(n.value != null ? n.value : t)), (e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null });
}
function ss(e, n) {
  (n = n.checked), n != null && Wi(e, "checked", n, !1);
}
function Zl(e, n) {
  ss(e, n);
  var t = dn(n.value),
    r = n.type;
  if (t != null) r === "number" ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? Jl(e, n.type, t) : n.hasOwnProperty("defaultValue") && Jl(e, n.type, dn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Ao(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!((r !== "submit" && r !== "reset") || (n.value !== void 0 && n.value !== null))) return;
    (n = "" + e._wrapperState.initialValue), t || n === e.value || (e.value = n), (e.defaultValue = n);
  }
  (t = e.name), t !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), t !== "" && (e.name = t);
}
function Jl(e, n, t) {
  (n !== "number" || zr(e.ownerDocument) !== e) && (t == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var yt = Array.isArray;
function Qn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++) (l = n.hasOwnProperty("$" + e[t].value)), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + dn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ql(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return B({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Bo(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (yt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: dn(t) };
}
function as(e, n) {
  var t = dn(n.value),
    r = dn(n.defaultValue);
  t != null && ((t = "" + t), t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function Vo(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function cs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function bl(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? cs(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var rr,
  ds = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
      for (rr = rr || document.createElement("div"), rr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = rr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Tt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var kt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Mc = ["Webkit", "ms", "Moz", "O"];
Object.keys(kt).forEach(function (e) {
  Mc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (kt[n] = kt[e]);
  });
});
function fs(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || (kt.hasOwnProperty(e) && kt[e]) ? ("" + n).trim() : n + "px";
}
function ps(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = fs(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Rc = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ei(e, n) {
  if (n) {
    if (Rc[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function ni(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ti = null;
function Yi(e) {
  return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ri = null,
  Kn = null,
  Yn = null;
function Wo(e) {
  if ((e = Zt(e))) {
    if (typeof ri != "function") throw Error(y(280));
    var n = e.stateNode;
    n && ((n = ll(n)), ri(e.stateNode, e.type, n));
  }
}
function ms(e) {
  Kn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Kn = e);
}
function hs() {
  if (Kn) {
    var e = Kn,
      n = Yn;
    if (((Yn = Kn = null), Wo(e), n)) for (e = 0; e < n.length; e++) Wo(n[e]);
  }
}
function gs(e, n) {
  return e(n);
}
function vs() {}
var Sl = !1;
function ys(e, n, t) {
  if (Sl) return e(n, t);
  Sl = !0;
  try {
    return gs(e, n, t);
  } finally {
    (Sl = !1), (Kn !== null || Yn !== null) && (vs(), hs());
  }
}
function Mt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = ll(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var li = !1;
if (He)
  try {
    var ct = {};
    Object.defineProperty(ct, "passive", {
      get: function () {
        li = !0;
      },
    }),
      window.addEventListener("test", ct, ct),
      window.removeEventListener("test", ct, ct);
  } catch {
    li = !1;
  }
function Dc(e, n, t, r, l, i, o, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, d);
  } catch (g) {
    this.onError(g);
  }
}
var St = !1,
  Lr = null,
  Tr = !1,
  ii = null,
  Oc = {
    onError: function (e) {
      (St = !0), (Lr = e);
    },
  };
function Fc(e, n, t, r, l, i, o, u, s) {
  (St = !1), (Lr = null), Dc.apply(Oc, arguments);
}
function Ic(e, n, t, r, l, i, o, u, s) {
  if ((Fc.apply(this, arguments), St)) {
    if (St) {
      var d = Lr;
      (St = !1), (Lr = null);
    } else throw Error(y(198));
    Tr || ((Tr = !0), (ii = d));
  }
}
function Tn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function xs(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if ((n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)), n !== null)) return n.dehydrated;
  }
  return null;
}
function Ho(e) {
  if (Tn(e) !== e) throw Error(y(188));
}
function Uc(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Tn(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return Ho(l), e;
        if (i === r) return Ho(l), n;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === t) {
          (o = !0), (t = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (t = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === t) {
            (o = !0), (t = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function ws(e) {
  return (e = Uc(e)), e !== null ? ks(e) : null;
}
function ks(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = ks(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var Ss = ve.unstable_scheduleCallback,
  Qo = ve.unstable_cancelCallback,
  $c = ve.unstable_shouldYield,
  Ac = ve.unstable_requestPaint,
  Q = ve.unstable_now,
  Bc = ve.unstable_getCurrentPriorityLevel,
  Xi = ve.unstable_ImmediatePriority,
  Ns = ve.unstable_UserBlockingPriority,
  Mr = ve.unstable_NormalPriority,
  Vc = ve.unstable_LowPriority,
  Es = ve.unstable_IdlePriority,
  el = null,
  Ie = null;
function Wc(e) {
  if (Ie && typeof Ie.onCommitFiberRoot == "function")
    try {
      Ie.onCommitFiberRoot(el, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Te = Math.clz32 ? Math.clz32 : Kc,
  Hc = Math.log,
  Qc = Math.LN2;
function Kc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Hc(e) / Qc) | 0)) | 0;
}
var lr = 64,
  ir = 4194304;
function xt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Rr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = xt(u)) : ((i &= o), i !== 0 && (r = xt(i)));
  } else (o = t & ~l), o !== 0 ? (r = xt(o)) : i !== 0 && (r = xt(i));
  if (r === 0) return 0;
  if (n !== 0 && n !== r && !(n & l) && ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))) return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0)) for (e = e.entanglements, n &= r; 0 < n; ) (t = 31 - Te(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function Yc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Xc(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Te(i),
      u = 1 << o,
      s = l[o];
    s === -1 ? (!(u & t) || u & r) && (l[o] = Yc(u, n)) : s <= n && (e.expiredLanes |= u), (i &= ~u);
  }
}
function oi(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function js() {
  var e = lr;
  return (lr <<= 1), !(lr & 4194240) && (lr = 64), e;
}
function Nl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Xt(e, n, t) {
  (e.pendingLanes |= n), n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (n = 31 - Te(n)), (e[n] = t);
}
function Gc(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= n), (e.mutableReadLanes &= n), (e.entangledLanes &= n), (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Te(t),
      i = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i);
  }
}
function Gi(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Te(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var R = 0;
function Cs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var _s,
  Zi,
  Ps,
  zs,
  Ls,
  ui = !1,
  or = [],
  tn = null,
  rn = null,
  ln = null,
  Rt = new Map(),
  Dt = new Map(),
  qe = [],
  Zc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ko(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      Rt.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dt.delete(n.pointerId);
  }
}
function dt(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }), n !== null && ((n = Zt(n)), n !== null && Zi(n)), e)
    : ((e.eventSystemFlags |= r), (n = e.targetContainers), l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function Jc(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (tn = dt(tn, e, n, t, r, l)), !0;
    case "dragenter":
      return (rn = dt(rn, e, n, t, r, l)), !0;
    case "mouseover":
      return (ln = dt(ln, e, n, t, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Rt.set(i, dt(Rt.get(i) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (i = l.pointerId), Dt.set(i, dt(Dt.get(i) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Ts(e) {
  var n = wn(e.target);
  if (n !== null) {
    var t = Tn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = xs(t)), n !== null)) {
          (e.blockedOn = n),
            Ls(e.priority, function () {
              Ps(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = si(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (ti = r), t.target.dispatchEvent(r), (ti = null);
    } else return (n = Zt(t)), n !== null && Zi(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function Yo(e, n, t) {
  xr(e) && t.delete(n);
}
function qc() {
  (ui = !1), tn !== null && xr(tn) && (tn = null), rn !== null && xr(rn) && (rn = null), ln !== null && xr(ln) && (ln = null), Rt.forEach(Yo), Dt.forEach(Yo);
}
function ft(e, n) {
  e.blockedOn === n && ((e.blockedOn = null), ui || ((ui = !0), ve.unstable_scheduleCallback(ve.unstable_NormalPriority, qc)));
}
function Ot(e) {
  function n(l) {
    return ft(l, e);
  }
  if (0 < or.length) {
    ft(or[0], e);
    for (var t = 1; t < or.length; t++) {
      var r = or[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (tn !== null && ft(tn, e), rn !== null && ft(rn, e), ln !== null && ft(ln, e), Rt.forEach(n), Dt.forEach(n), t = 0; t < qe.length; t++) (r = qe[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && ((t = qe[0]), t.blockedOn === null); ) Ts(t), t.blockedOn === null && qe.shift();
}
var Xn = Xe.ReactCurrentBatchConfig,
  Dr = !0;
function bc(e, n, t, r) {
  var l = R,
    i = Xn.transition;
  Xn.transition = null;
  try {
    (R = 1), Ji(e, n, t, r);
  } finally {
    (R = l), (Xn.transition = i);
  }
}
function ed(e, n, t, r) {
  var l = R,
    i = Xn.transition;
  Xn.transition = null;
  try {
    (R = 4), Ji(e, n, t, r);
  } finally {
    (R = l), (Xn.transition = i);
  }
}
function Ji(e, n, t, r) {
  if (Dr) {
    var l = si(e, n, t, r);
    if (l === null) Rl(e, n, r, Or, t), Ko(e, r);
    else if (Jc(l, e, n, t, r)) r.stopPropagation();
    else if ((Ko(e, r), n & 4 && -1 < Zc.indexOf(e))) {
      for (; l !== null; ) {
        var i = Zt(l);
        if ((i !== null && _s(i), (i = si(e, n, t, r)), i === null && Rl(e, n, r, Or, t), i === l)) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Rl(e, n, r, null, t);
  }
}
var Or = null;
function si(e, n, t, r) {
  if (((Or = null), (e = Yi(r)), (e = wn(e)), e !== null))
    if (((n = Tn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = xs(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Or = e), null;
}
function Ms(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Bc()) {
        case Xi:
          return 1;
        case Ns:
          return 4;
        case Mr:
        case Vc:
          return 16;
        case Es:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  qi = null,
  wr = null;
function Rs() {
  if (wr) return wr;
  var e,
    n = qi,
    t = n.length,
    r,
    l = "value" in en ? en.value : en.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[i - r]; r++);
  return (wr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function kr(e) {
  var n = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && n === 13 && (e = 13)) : (e = n), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function ur() {
  return !0;
}
function Xo() {
  return !1;
}
function xe(e) {
  function n(t, r, l, i, o) {
    (this._reactName = t), (this._targetInst = l), (this.type = r), (this.nativeEvent = i), (this.target = o), (this.currentTarget = null);
    for (var u in e) e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(i) : i[u]));
    return (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ur : Xo), (this.isPropagationStopped = Xo), this;
  }
  return (
    B(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), (this.isDefaultPrevented = ur));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), (this.isPropagationStopped = ur));
      },
      persist: function () {},
      isPersistent: ur,
    }),
    n
  );
}
var it = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  bi = xe(it),
  Gt = B({}, it, { view: 0, detail: 0 }),
  nd = xe(Gt),
  El,
  jl,
  pt,
  nl = B({}, Gt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: eo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e ? e.movementX : (e !== pt && (pt && e.type === "mousemove" ? ((El = e.screenX - pt.screenX), (jl = e.screenY - pt.screenY)) : (jl = El = 0), (pt = e)), El);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : jl;
    },
  }),
  Go = xe(nl),
  td = B({}, nl, { dataTransfer: 0 }),
  rd = xe(td),
  ld = B({}, Gt, { relatedTarget: 0 }),
  Cl = xe(ld),
  id = B({}, it, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  od = xe(id),
  ud = B({}, it, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sd = xe(ud),
  ad = B({}, it, { data: 0 }),
  Zo = xe(ad),
  cd = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
  dd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  fd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function pd(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = fd[e]) ? !!n[e] : !1;
}
function eo() {
  return pd;
}
var md = B({}, Gt, {
    key: function (e) {
      if (e.key) {
        var n = cd[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? ((e = kr(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dd[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: eo,
    charCode: function (e) {
      return e.type === "keypress" ? kr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? kr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  hd = xe(md),
  gd = B({}, nl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
  Jo = xe(gd),
  vd = B({}, Gt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: eo }),
  yd = xe(vd),
  xd = B({}, it, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wd = xe(xd),
  kd = B({}, nl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Sd = xe(kd),
  Nd = [9, 13, 27, 32],
  no = He && "CompositionEvent" in window,
  Nt = null;
He && "documentMode" in document && (Nt = document.documentMode);
var Ed = He && "TextEvent" in window && !Nt,
  Ds = He && (!no || (Nt && 8 < Nt && 11 >= Nt)),
  qo = " ",
  bo = !1;
function Os(e, n) {
  switch (e) {
    case "keyup":
      return Nd.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Fs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function jd(e, n) {
  switch (e) {
    case "compositionend":
      return Fs(n);
    case "keypress":
      return n.which !== 32 ? null : ((bo = !0), qo);
    case "textInput":
      return (e = n.data), e === qo && bo ? null : e;
    default:
      return null;
  }
}
function Cd(e, n) {
  if (On) return e === "compositionend" || (!no && Os(e, n)) ? ((e = Rs()), (wr = qi = en = null), (On = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Ds && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var _d = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function eu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!_d[e.type] : n === "textarea";
}
function Is(e, n, t, r) {
  ms(r), (n = Fr(n, "onChange")), 0 < n.length && ((t = new bi("onChange", "change", null, t, r)), e.push({ event: t, listeners: n }));
}
var Et = null,
  Ft = null;
function Pd(e) {
  Xs(e, 0);
}
function tl(e) {
  var n = Un(e);
  if (us(n)) return e;
}
function zd(e, n) {
  if (e === "change") return n;
}
var Us = !1;
if (He) {
  var _l;
  if (He) {
    var Pl = "oninput" in document;
    if (!Pl) {
      var nu = document.createElement("div");
      nu.setAttribute("oninput", "return;"), (Pl = typeof nu.oninput == "function");
    }
    _l = Pl;
  } else _l = !1;
  Us = _l && (!document.documentMode || 9 < document.documentMode);
}
function tu() {
  Et && (Et.detachEvent("onpropertychange", $s), (Ft = Et = null));
}
function $s(e) {
  if (e.propertyName === "value" && tl(Ft)) {
    var n = [];
    Is(n, Ft, e, Yi(e)), ys(Pd, n);
  }
}
function Ld(e, n, t) {
  e === "focusin" ? (tu(), (Et = n), (Ft = t), Et.attachEvent("onpropertychange", $s)) : e === "focusout" && tu();
}
function Td(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return tl(Ft);
}
function Md(e, n) {
  if (e === "click") return tl(n);
}
function Rd(e, n) {
  if (e === "input" || e === "change") return tl(n);
}
function Dd(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Re = typeof Object.is == "function" ? Object.is : Dd;
function It(e, n) {
  if (Re(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Hl.call(n, l) || !Re(e[l], n[l])) return !1;
  }
  return !0;
}
function ru(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function lu(e, n) {
  var t = ru(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n)) return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = ru(t);
  }
}
function As(e, n) {
  return e && n ? (e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? As(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1) : !1;
}
function Bs() {
  for (var e = window, n = zr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = zr(e.document);
  }
  return n;
}
function to(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && ((n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || n === "textarea" || e.contentEditable === "true");
}
function Od(e) {
  var n = Bs(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && As(t.ownerDocument.documentElement, t)) {
    if (r !== null && to(t)) {
      if (((n = r.start), (e = r.end), e === void 0 && (e = n), "selectionStart" in t)) (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (((e = ((n = t.ownerDocument || document) && n.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)), !e.extend && i > r && ((l = r), (r = i), (i = l)), (l = lu(t, i));
        var o = lu(t, r);
        l &&
          o &&
          (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) &&
          ((n = n.createRange()), n.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) (e = n[t]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Fd = He && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  ai = null,
  jt = null,
  ci = !1;
function iu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  ci ||
    Fn == null ||
    Fn !== zr(r) ||
    ((r = Fn),
    "selectionStart" in r && to(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
    (jt && It(jt, r)) || ((jt = r), (r = Fr(ai, "onSelect")), 0 < r.length && ((n = new bi("onSelect", "select", null, n, t)), e.push({ event: n, listeners: r }), (n.target = Fn))));
}
function sr(e, n) {
  var t = {};
  return (t[e.toLowerCase()] = n.toLowerCase()), (t["Webkit" + e] = "webkit" + n), (t["Moz" + e] = "moz" + n), t;
}
var In = { animationend: sr("Animation", "AnimationEnd"), animationiteration: sr("Animation", "AnimationIteration"), animationstart: sr("Animation", "AnimationStart"), transitionend: sr("Transition", "TransitionEnd") },
  zl = {},
  Vs = {};
He &&
  ((Vs = document.createElement("div").style),
  "AnimationEvent" in window || (delete In.animationend.animation, delete In.animationiteration.animation, delete In.animationstart.animation),
  "TransitionEvent" in window || delete In.transitionend.transition);
function rl(e) {
  if (zl[e]) return zl[e];
  if (!In[e]) return e;
  var n = In[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Vs) return (zl[e] = n[t]);
  return e;
}
var Ws = rl("animationend"),
  Hs = rl("animationiteration"),
  Qs = rl("animationstart"),
  Ks = rl("transitionend"),
  Ys = new Map(),
  ou =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pn(e, n) {
  Ys.set(e, n), Ln(n, [e]);
}
for (var Ll = 0; Ll < ou.length; Ll++) {
  var Tl = ou[Ll],
    Id = Tl.toLowerCase(),
    Ud = Tl[0].toUpperCase() + Tl.slice(1);
  pn(Id, "on" + Ud);
}
pn(Ws, "onAnimationEnd");
pn(Hs, "onAnimationIteration");
pn(Qs, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(Ks, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
Ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var wt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ),
  $d = new Set("cancel close invalid load scroll toggle".split(" ").concat(wt));
function uu(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), Ic(r, n, void 0, e), (e.currentTarget = null);
}
function Xs(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          uu(l, u, d), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (((u = r[o]), (s = u.instance), (d = u.currentTarget), (u = u.listener), s !== i && l.isPropagationStopped())) break e;
          uu(l, u, d), (i = s);
        }
    }
  }
  if (Tr) throw ((e = ii), (Tr = !1), (ii = null), e);
}
function O(e, n) {
  var t = n[hi];
  t === void 0 && (t = n[hi] = new Set());
  var r = e + "__bubble";
  t.has(r) || (Gs(n, e, 2, !1), t.add(r));
}
function Ml(e, n, t) {
  var r = 0;
  n && (r |= 4), Gs(t, e, r, n);
}
var ar = "_reactListening" + Math.random().toString(36).slice(2);
function Ut(e) {
  if (!e[ar]) {
    (e[ar] = !0),
      ts.forEach(function (t) {
        t !== "selectionchange" && ($d.has(t) || Ml(t, !1, e), Ml(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[ar] || ((n[ar] = !0), Ml("selectionchange", !1, n));
  }
}
function Gs(e, n, t, r) {
  switch (Ms(n)) {
    case 1:
      var l = bc;
      break;
    case 4:
      l = ed;
      break;
    default:
      l = Ji;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !li || (n !== "touchstart" && n !== "touchmove" && n !== "wheel") || (l = !0),
    r ? (l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0)) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Rl(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if ((s === 3 || s === 4) && ((s = o.stateNode.containerInfo), s === l || (s.nodeType === 8 && s.parentNode === l))) return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = wn(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ys(function () {
    var d = i,
      g = Yi(t),
      h = [];
    e: {
      var m = Ys.get(e);
      if (m !== void 0) {
        var x = bi,
          w = e;
        switch (e) {
          case "keypress":
            if (kr(t) === 0) break e;
          case "keydown":
          case "keyup":
            x = hd;
            break;
          case "focusin":
            (w = "focus"), (x = Cl);
            break;
          case "focusout":
            (w = "blur"), (x = Cl);
            break;
          case "beforeblur":
          case "afterblur":
            x = Cl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Go;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = rd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = yd;
            break;
          case Ws:
          case Hs:
          case Qs:
            x = od;
            break;
          case Ks:
            x = wd;
            break;
          case "scroll":
            x = nd;
            break;
          case "wheel":
            x = Sd;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = sd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Jo;
        }
        var k = (n & 4) !== 0,
          I = !k && e === "scroll",
          f = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var a = d, p; a !== null; ) {
          p = a;
          var v = p.stateNode;
          if ((p.tag === 5 && v !== null && ((p = v), f !== null && ((v = Mt(a, f)), v != null && k.push($t(a, v, p)))), I)) break;
          a = a.return;
        }
        0 < k.length && ((m = new x(m, w, null, t, g)), h.push({ event: m, listeners: k }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (((m = e === "mouseover" || e === "pointerover"), (x = e === "mouseout" || e === "pointerout"), m && t !== ti && (w = t.relatedTarget || t.fromElement) && (wn(w) || w[Qe]))) break e;
        if (
          (x || m) &&
          ((m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window),
          x ? ((w = t.relatedTarget || t.toElement), (x = d), (w = w ? wn(w) : null), w !== null && ((I = Tn(w)), w !== I || (w.tag !== 5 && w.tag !== 6)) && (w = null)) : ((x = null), (w = d)),
          x !== w)
        ) {
          if (
            ((k = Go),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") && ((k = Jo), (v = "onPointerLeave"), (f = "onPointerEnter"), (a = "pointer")),
            (I = x == null ? m : Un(x)),
            (p = w == null ? m : Un(w)),
            (m = new k(v, a + "leave", x, t, g)),
            (m.target = I),
            (m.relatedTarget = p),
            (v = null),
            wn(g) === d && ((k = new k(f, a + "enter", w, t, g)), (k.target = p), (k.relatedTarget = I), (v = k)),
            (I = v),
            x && w)
          )
            n: {
              for (k = x, f = w, a = 0, p = k; p; p = Mn(p)) a++;
              for (p = 0, v = f; v; v = Mn(v)) p++;
              for (; 0 < a - p; ) (k = Mn(k)), a--;
              for (; 0 < p - a; ) (f = Mn(f)), p--;
              for (; a--; ) {
                if (k === f || (f !== null && k === f.alternate)) break n;
                (k = Mn(k)), (f = Mn(f));
              }
              k = null;
            }
          else k = null;
          x !== null && su(h, m, x, k, !1), w !== null && I !== null && su(h, I, w, k, !0);
        }
      }
      e: {
        if (((m = d ? Un(d) : window), (x = m.nodeName && m.nodeName.toLowerCase()), x === "select" || (x === "input" && m.type === "file"))) var N = zd;
        else if (eu(m))
          if (Us) N = Rd;
          else {
            N = Td;
            var j = Ld;
          }
        else (x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = Md);
        if (N && (N = N(e, d))) {
          Is(h, N, t, g);
          break e;
        }
        j && j(e, m, d), e === "focusout" && (j = m._wrapperState) && j.controlled && m.type === "number" && Jl(m, "number", m.value);
      }
      switch (((j = d ? Un(d) : window), e)) {
        case "focusin":
          (eu(j) || j.contentEditable === "true") && ((Fn = j), (ai = d), (jt = null));
          break;
        case "focusout":
          jt = ai = Fn = null;
          break;
        case "mousedown":
          ci = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ci = !1), iu(h, t, g);
          break;
        case "selectionchange":
          if (Fd) break;
        case "keydown":
        case "keyup":
          iu(h, t, g);
      }
      var C;
      if (no)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else On ? Os(e, t) && (_ = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Ds && t.locale !== "ko" && (On || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && On && (C = Rs()) : ((en = g), (qi = "value" in en ? en.value : en.textContent), (On = !0))),
        (j = Fr(d, _)),
        0 < j.length && ((_ = new Zo(_, e, null, t, g)), h.push({ event: _, listeners: j }), C ? (_.data = C) : ((C = Fs(t)), C !== null && (_.data = C)))),
        (C = Ed ? jd(e, t) : Cd(e, t)) && ((d = Fr(d, "onBeforeInput")), 0 < d.length && ((g = new Zo("onBeforeInput", "beforeinput", null, t, g)), h.push({ event: g, listeners: d }), (g.data = C)));
    }
    Xs(h, n);
  });
}
function $t(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Fr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 && i !== null && ((l = i), (i = Mt(e, t)), i != null && r.unshift($t(e, i, l)), (i = Mt(e, n)), i != null && r.push($t(e, i, l))), (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function su(e, n, t, r, l) {
  for (var i = n._reactName, o = []; t !== null && t !== r; ) {
    var u = t,
      s = u.alternate,
      d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && d !== null && ((u = d), l ? ((s = Mt(t, i)), s != null && o.unshift($t(t, s, u))) : l || ((s = Mt(t, i)), s != null && o.push($t(t, s, u)))), (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var Ad = /\r\n?/g,
  Bd = /\u0000|\uFFFD/g;
function au(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ad,
      `
`
    )
    .replace(Bd, "");
}
function cr(e, n, t) {
  if (((n = au(n)), au(e) !== n && t)) throw Error(y(425));
}
function Ir() {}
var di = null,
  fi = null;
function pi(e, n) {
  return (
    e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || (typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null)
  );
}
var mi = typeof setTimeout == "function" ? setTimeout : void 0,
  Vd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  cu = typeof Promise == "function" ? Promise : void 0,
  Wd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof cu < "u"
      ? function (e) {
          return cu.resolve(null).then(e).catch(Hd);
        }
      : mi;
function Hd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Dl(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Ot(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Ot(n);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function du(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ot = Math.random().toString(36).slice(2),
  Fe = "__reactFiber$" + ot,
  At = "__reactProps$" + ot,
  Qe = "__reactContainer$" + ot,
  hi = "__reactEvents$" + ot,
  Qd = "__reactListeners$" + ot,
  Kd = "__reactHandles$" + ot;
function wn(e) {
  var n = e[Fe];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Qe] || t[Fe])) {
      if (((t = n.alternate), n.child !== null || (t !== null && t.child !== null)))
        for (e = du(e); e !== null; ) {
          if ((t = e[Fe])) return t;
          e = du(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function Zt(e) {
  return (e = e[Fe] || e[Qe]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ll(e) {
  return e[At] || null;
}
var gi = [],
  $n = -1;
function mn(e) {
  return { current: e };
}
function F(e) {
  0 > $n || ((e.current = gi[$n]), (gi[$n] = null), $n--);
}
function D(e, n) {
  $n++, (gi[$n] = e.current), (e.current = n);
}
var fn = {},
  le = mn(fn),
  de = mn(!1),
  jn = fn;
function qn(e, n) {
  var t = e.type.contextTypes;
  if (!t) return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = n), (e.__reactInternalMemoizedMaskedChildContext = l)), l;
}
function fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ur() {
  F(de), F(le);
}
function fu(e, n, t) {
  if (le.current !== fn) throw Error(y(168));
  D(le, n), D(de, t);
}
function Zs(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function")) return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Lc(e) || "Unknown", l));
  return B({}, t, r);
}
function $r(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fn), (jn = le.current), D(le, e), D(de, de.current), !0;
}
function pu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t ? ((e = Zs(e, n, jn)), (r.__reactInternalMemoizedMergedChildContext = e), F(de), F(le), D(le, e)) : F(de), D(de, t);
}
var Ae = null,
  il = !1,
  Ol = !1;
function Js(e) {
  Ae === null ? (Ae = [e]) : Ae.push(e);
}
function Yd(e) {
  (il = !0), Js(e);
}
function hn() {
  if (!Ol && Ae !== null) {
    Ol = !0;
    var e = 0,
      n = R;
    try {
      var t = Ae;
      for (R = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ae = null), (il = !1);
    } catch (l) {
      throw (Ae !== null && (Ae = Ae.slice(e + 1)), Ss(Xi, hn), l);
    } finally {
      (R = n), (Ol = !1);
    }
  }
  return null;
}
var An = [],
  Bn = 0,
  Ar = null,
  Br = 0,
  we = [],
  ke = 0,
  Cn = null,
  Be = 1,
  Ve = "";
function yn(e, n) {
  (An[Bn++] = Br), (An[Bn++] = Ar), (Ar = e), (Br = n);
}
function qs(e, n, t) {
  (we[ke++] = Be), (we[ke++] = Ve), (we[ke++] = Cn), (Cn = e);
  var r = Be;
  e = Ve;
  var l = 32 - Te(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var i = 32 - Te(n) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)), (r >>= o), (l -= o), (Be = (1 << (32 - Te(n) + l)) | (t << l) | r), (Ve = i + e);
  } else (Be = (1 << i) | (t << l) | r), (Ve = e);
}
function ro(e) {
  e.return !== null && (yn(e, 1), qs(e, 1, 0));
}
function lo(e) {
  for (; e === Ar; ) (Ar = An[--Bn]), (An[Bn] = null), (Br = An[--Bn]), (An[Bn] = null);
  for (; e === Cn; ) (Cn = we[--ke]), (we[ke] = null), (Ve = we[--ke]), (we[ke] = null), (Be = we[--ke]), (we[ke] = null);
}
var ge = null,
  he = null,
  U = !1,
  Le = null;
function bs(e, n) {
  var t = Se(5, null, null, 0);
  (t.elementType = "DELETED"), (t.stateNode = n), (t.return = e), (n = e.deletions), n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function mu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n), n !== null ? ((e.stateNode = n), (ge = e), (he = on(n.firstChild)), !0) : !1;
    case 6:
      return (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n), n !== null ? ((e.stateNode = n), (ge = e), (he = null), !0) : !1;
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Cn !== null ? { id: Be, overflow: Ve } : null),
            (e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }),
            (t = Se(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ge = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function vi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function yi(e) {
  if (U) {
    var n = he;
    if (n) {
      var t = n;
      if (!mu(e, n)) {
        if (vi(e)) throw Error(y(418));
        n = on(t.nextSibling);
        var r = ge;
        n && mu(e, n) ? bs(r, t) : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e));
      }
    } else {
      if (vi(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e);
    }
  }
}
function hu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ge = e;
}
function dr(e) {
  if (e !== ge) return !1;
  if (!U) return hu(e), (U = !0), !1;
  var n;
  if (((n = e.tag !== 3) && !(n = e.tag !== 5) && ((n = e.type), (n = n !== "head" && n !== "body" && !pi(e.type, e.memoizedProps))), n && (n = he))) {
    if (vi(e)) throw (ea(), Error(y(418)));
    for (; n; ) bs(e, n), (n = on(n.nextSibling));
  }
  if ((hu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              he = on(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ge ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function ea() {
  for (var e = he; e; ) e = on(e.nextSibling);
}
function bn() {
  (he = ge = null), (U = !1);
}
function io(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var Xd = Xe.ReactCurrentBatchConfig;
function mt(e, n, t) {
  if (((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === i
        ? n.ref
        : ((n = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function fr(e, n) {
  throw ((e = Object.prototype.toString.call(n)), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)));
}
function gu(e) {
  var n = e._init;
  return n(e._payload);
}
function na(e) {
  function n(f, a) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [a]), (f.flags |= 16)) : p.push(a);
    }
  }
  function t(f, a) {
    if (!e) return null;
    for (; a !== null; ) n(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = cn(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, a, p) {
    return (f.index = p), e ? ((p = f.alternate), p !== null ? ((p = p.index), p < a ? ((f.flags |= 2), a) : p) : ((f.flags |= 2), a)) : ((f.flags |= 1048576), a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, p, v) {
    return a === null || a.tag !== 6 ? ((a = Vl(p, f.mode, v)), (a.return = f), a) : ((a = l(a, p)), (a.return = f), a);
  }
  function s(f, a, p, v) {
    var N = p.type;
    return N === Dn
      ? g(f, a, p.props.children, v, p.key)
      : a !== null && (a.elementType === N || (typeof N == "object" && N !== null && N.$$typeof === Ze && gu(N) === a.type))
      ? ((v = l(a, p.props)), (v.ref = mt(f, a, p)), (v.return = f), v)
      : ((v = Pr(p.type, p.key, p.props, null, f.mode, v)), (v.ref = mt(f, a, p)), (v.return = f), v);
  }
  function d(f, a, p, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== p.containerInfo || a.stateNode.implementation !== p.implementation ? ((a = Wl(p, f.mode, v)), (a.return = f), a) : ((a = l(a, p.children || [])), (a.return = f), a);
  }
  function g(f, a, p, v, N) {
    return a === null || a.tag !== 7 ? ((a = En(p, f.mode, v, N)), (a.return = f), a) : ((a = l(a, p)), (a.return = f), a);
  }
  function h(f, a, p) {
    if ((typeof a == "string" && a !== "") || typeof a == "number") return (a = Vl("" + a, f.mode, p)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case nr:
          return (p = Pr(a.type, a.key, a.props, null, f.mode, p)), (p.ref = mt(f, null, a)), (p.return = f), p;
        case Rn:
          return (a = Wl(a, f.mode, p)), (a.return = f), a;
        case Ze:
          var v = a._init;
          return h(f, v(a._payload), p);
      }
      if (yt(a) || at(a)) return (a = En(a, f.mode, p, null)), (a.return = f), a;
      fr(f, a);
    }
    return null;
  }
  function m(f, a, p, v) {
    var N = a !== null ? a.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number") return N !== null ? null : u(f, a, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case nr:
          return p.key === N ? s(f, a, p, v) : null;
        case Rn:
          return p.key === N ? d(f, a, p, v) : null;
        case Ze:
          return (N = p._init), m(f, a, N(p._payload), v);
      }
      if (yt(p) || at(p)) return N !== null ? null : g(f, a, p, v, null);
      fr(f, p);
    }
    return null;
  }
  function x(f, a, p, v, N) {
    if ((typeof v == "string" && v !== "") || typeof v == "number") return (f = f.get(p) || null), u(a, f, "" + v, N);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case nr:
          return (f = f.get(v.key === null ? p : v.key) || null), s(a, f, v, N);
        case Rn:
          return (f = f.get(v.key === null ? p : v.key) || null), d(a, f, v, N);
        case Ze:
          var j = v._init;
          return x(f, a, p, j(v._payload), N);
      }
      if (yt(v) || at(v)) return (f = f.get(p) || null), g(a, f, v, N, null);
      fr(a, v);
    }
    return null;
  }
  function w(f, a, p, v) {
    for (var N = null, j = null, C = a, _ = (a = 0), W = null; C !== null && _ < p.length; _++) {
      C.index > _ ? ((W = C), (C = null)) : (W = C.sibling);
      var T = m(f, C, p[_], v);
      if (T === null) {
        C === null && (C = W);
        break;
      }
      e && C && T.alternate === null && n(f, C), (a = i(T, a, _)), j === null ? (N = T) : (j.sibling = T), (j = T), (C = W);
    }
    if (_ === p.length) return t(f, C), U && yn(f, _), N;
    if (C === null) {
      for (; _ < p.length; _++) (C = h(f, p[_], v)), C !== null && ((a = i(C, a, _)), j === null ? (N = C) : (j.sibling = C), (j = C));
      return U && yn(f, _), N;
    }
    for (C = r(f, C); _ < p.length; _++) (W = x(C, f, _, p[_], v)), W !== null && (e && W.alternate !== null && C.delete(W.key === null ? _ : W.key), (a = i(W, a, _)), j === null ? (N = W) : (j.sibling = W), (j = W));
    return (
      e &&
        C.forEach(function (Ce) {
          return n(f, Ce);
        }),
      U && yn(f, _),
      N
    );
  }
  function k(f, a, p, v) {
    var N = at(p);
    if (typeof N != "function") throw Error(y(150));
    if (((p = N.call(p)), p == null)) throw Error(y(151));
    for (var j = (N = null), C = a, _ = (a = 0), W = null, T = p.next(); C !== null && !T.done; _++, T = p.next()) {
      C.index > _ ? ((W = C), (C = null)) : (W = C.sibling);
      var Ce = m(f, C, T.value, v);
      if (Ce === null) {
        C === null && (C = W);
        break;
      }
      e && C && Ce.alternate === null && n(f, C), (a = i(Ce, a, _)), j === null ? (N = Ce) : (j.sibling = Ce), (j = Ce), (C = W);
    }
    if (T.done) return t(f, C), U && yn(f, _), N;
    if (C === null) {
      for (; !T.done; _++, T = p.next()) (T = h(f, T.value, v)), T !== null && ((a = i(T, a, _)), j === null ? (N = T) : (j.sibling = T), (j = T));
      return U && yn(f, _), N;
    }
    for (C = r(f, C); !T.done; _++, T = p.next()) (T = x(C, f, _, T.value, v)), T !== null && (e && T.alternate !== null && C.delete(T.key === null ? _ : T.key), (a = i(T, a, _)), j === null ? (N = T) : (j.sibling = T), (j = T));
    return (
      e &&
        C.forEach(function (ut) {
          return n(f, ut);
        }),
      U && yn(f, _),
      N
    );
  }
  function I(f, a, p, v) {
    if ((typeof p == "object" && p !== null && p.type === Dn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null)) {
      switch (p.$$typeof) {
        case nr:
          e: {
            for (var N = p.key, j = a; j !== null; ) {
              if (j.key === N) {
                if (((N = p.type), N === Dn)) {
                  if (j.tag === 7) {
                    t(f, j.sibling), (a = l(j, p.props.children)), (a.return = f), (f = a);
                    break e;
                  }
                } else if (j.elementType === N || (typeof N == "object" && N !== null && N.$$typeof === Ze && gu(N) === j.type)) {
                  t(f, j.sibling), (a = l(j, p.props)), (a.ref = mt(f, j, p)), (a.return = f), (f = a);
                  break e;
                }
                t(f, j);
                break;
              } else n(f, j);
              j = j.sibling;
            }
            p.type === Dn ? ((a = En(p.props.children, f.mode, v, p.key)), (a.return = f), (f = a)) : ((v = Pr(p.type, p.key, p.props, null, f.mode, v)), (v.ref = mt(f, a, p)), (v.return = f), (f = v));
          }
          return o(f);
        case Rn:
          e: {
            for (j = p.key; a !== null; ) {
              if (a.key === j)
                if (a.tag === 4 && a.stateNode.containerInfo === p.containerInfo && a.stateNode.implementation === p.implementation) {
                  t(f, a.sibling), (a = l(a, p.children || [])), (a.return = f), (f = a);
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else n(f, a);
              a = a.sibling;
            }
            (a = Wl(p, f.mode, v)), (a.return = f), (f = a);
          }
          return o(f);
        case Ze:
          return (j = p._init), I(f, a, j(p._payload), v);
      }
      if (yt(p)) return w(f, a, p, v);
      if (at(p)) return k(f, a, p, v);
      fr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p), a !== null && a.tag === 6 ? (t(f, a.sibling), (a = l(a, p)), (a.return = f), (f = a)) : (t(f, a), (a = Vl(p, f.mode, v)), (a.return = f), (f = a)), o(f))
      : t(f, a);
  }
  return I;
}
var et = na(!0),
  ta = na(!1),
  Vr = mn(null),
  Wr = null,
  Vn = null,
  oo = null;
function uo() {
  oo = Vn = Wr = null;
}
function so(e) {
  var n = Vr.current;
  F(Vr), (e._currentValue = n);
}
function xi(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (((e.childLanes & n) !== n ? ((e.childLanes |= n), r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)) break;
    e = e.return;
  }
}
function Gn(e, n) {
  (Wr = e), (oo = Vn = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & n && (ce = !0), (e.firstContext = null));
}
function Ee(e) {
  var n = e._currentValue;
  if (oo !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Vn === null)) {
      if (Wr === null) throw Error(y(308));
      (Vn = e), (Wr.dependencies = { lanes: 0, firstContext: e });
    } else Vn = Vn.next = e;
  return n;
}
var kn = null;
function ao(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function ra(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? ((t.next = t), ao(n)) : ((t.next = l.next), (l.next = t)), (n.interleaved = t), Ke(e, r);
}
function Ke(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) (e.childLanes |= n), (t = e.alternate), t !== null && (t.childLanes |= n), (t = e), (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var Je = !1;
function co(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function la(e, n) {
  (e = e.updateQueue), n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function We(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function un(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)), (r.pending = n), Ke(e, t);
  }
  return (l = r.interleaved), l === null ? ((n.next = n), ao(r)) : ((n.next = l.next), (l.next = n)), (r.interleaved = n), Ke(e, t);
}
function Sr(e, n, t) {
  if (((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Gi(e, t);
  }
}
function vu(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        i === null ? (l = i = o) : (i = i.next = o), (t = t.next);
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    (t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }), (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate), e === null ? (t.firstBaseUpdate = n) : (e.next = n), (t.lastBaseUpdate = n);
}
function Hr(e, n, t, r) {
  var l = e.updateQueue;
  Je = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      d = s.next;
    (s.next = null), o === null ? (i = d) : (o.next = d), (o = s);
    var g = e.alternate;
    g !== null && ((g = g.updateQueue), (u = g.lastBaseUpdate), u !== o && (u === null ? (g.firstBaseUpdate = d) : (u.next = d), (g.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (g = d = s = null), (u = i);
    do {
      var m = u.lane,
        x = u.eventTime;
      if ((r & m) === m) {
        g !== null && (g = g.next = { eventTime: x, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null });
        e: {
          var w = e,
            k = u;
          switch (((m = n), (x = t), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                h = w.call(x, h, m);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (((w = k.payload), (m = typeof w == "function" ? w.call(x, h, m) : w), m == null)) break e;
              h = B({}, h, m);
              break e;
            case 2:
              Je = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && ((e.flags |= 64), (m = l.effects), m === null ? (l.effects = [u]) : m.push(u));
      } else (x = { eventTime: x, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }), g === null ? ((d = g = x), (s = h)) : (g = g.next = x), (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u), (u = m.next), (m.next = null), (l.lastBaseUpdate = m), (l.shared.pending = null);
      }
    } while (!0);
    if ((g === null && (s = h), (l.baseState = s), (l.firstBaseUpdate = d), (l.lastBaseUpdate = g), (n = l.shared.interleaved), n !== null)) {
      l = n;
      do (o |= l.lane), (l = l.next);
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    (Pn |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function yu(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function")) throw Error(y(191, l));
        l.call(r);
      }
    }
}
var Jt = {},
  Ue = mn(Jt),
  Bt = mn(Jt),
  Vt = mn(Jt);
function Sn(e) {
  if (e === Jt) throw Error(y(174));
  return e;
}
function fo(e, n) {
  switch ((D(Vt, n), D(Bt, e), D(Ue, Jt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : bl(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n), (n = e.namespaceURI || null), (e = e.tagName), (n = bl(n, e));
  }
  F(Ue), D(Ue, n);
}
function nt() {
  F(Ue), F(Bt), F(Vt);
}
function ia(e) {
  Sn(Vt.current);
  var n = Sn(Ue.current),
    t = bl(n, e.type);
  n !== t && (D(Bt, e), D(Ue, t));
}
function po(e) {
  Bt.current === e && (F(Ue), F(Bt));
}
var $ = mn(0);
function Qr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")) return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Fl = [];
function mo() {
  for (var e = 0; e < Fl.length; e++) Fl[e]._workInProgressVersionPrimary = null;
  Fl.length = 0;
}
var Nr = Xe.ReactCurrentDispatcher,
  Il = Xe.ReactCurrentBatchConfig,
  _n = 0,
  A = null,
  Y = null,
  Z = null,
  Kr = !1,
  Ct = !1,
  Wt = 0,
  Gd = 0;
function ne() {
  throw Error(y(321));
}
function ho(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!Re(e[t], n[t])) return !1;
  return !0;
}
function go(e, n, t, r, l, i) {
  if (((_n = i), (A = n), (n.memoizedState = null), (n.updateQueue = null), (n.lanes = 0), (Nr.current = e === null || e.memoizedState === null ? bd : ef), (e = t(r, l)), Ct)) {
    i = 0;
    do {
      if (((Ct = !1), (Wt = 0), 25 <= i)) throw Error(y(301));
      (i += 1), (Z = Y = null), (n.updateQueue = null), (Nr.current = nf), (e = t(r, l));
    } while (Ct);
  }
  if (((Nr.current = Yr), (n = Y !== null && Y.next !== null), (_n = 0), (Z = Y = A = null), (Kr = !1), n)) throw Error(y(300));
  return e;
}
function vo() {
  var e = Wt !== 0;
  return (Wt = 0), e;
}
function Oe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function je() {
  if (Y === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var n = Z === null ? A.memoizedState : Z.next;
  if (n !== null) (Z = n), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e), (e = { memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null }), Z === null ? (A.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Ht(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Ul(e) {
  var n = je(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (t.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      d = i;
    do {
      var g = d.lane;
      if ((_n & g) === g) s !== null && (s = s.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var h = { lane: g, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h), (A.lanes |= g), (Pn |= g);
      }
      d = d.next;
    } while (d !== null && d !== i);
    s === null ? (o = r) : (s.next = u), Re(r, n.memoizedState) || (ce = !0), (n.memoizedState = r), (n.baseState = o), (n.baseQueue = s), (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (Pn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function $l(e) {
  var n = je(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Re(i, n.memoizedState) || (ce = !0), (n.memoizedState = i), n.baseQueue === null && (n.baseState = i), (t.lastRenderedState = i);
  }
  return [i, r];
}
function oa() {}
function ua(e, n) {
  var t = A,
    r = je(),
    l = n(),
    i = !Re(r.memoizedState, l);
  if ((i && ((r.memoizedState = l), (ce = !0)), (r = r.queue), yo(ca.bind(null, t, r, e), [e]), r.getSnapshot !== n || i || (Z !== null && Z.memoizedState.tag & 1))) {
    if (((t.flags |= 2048), Qt(9, aa.bind(null, t, r, l, n), void 0, null), J === null)) throw Error(y(349));
    _n & 30 || sa(t, n, l);
  }
  return l;
}
function sa(e, n, t) {
  (e.flags |= 16384), (e = { getSnapshot: n, value: t }), (n = A.updateQueue), n === null ? ((n = { lastEffect: null, stores: null }), (A.updateQueue = n), (n.stores = [e])) : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function aa(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), da(n) && fa(e);
}
function ca(e, n, t) {
  return t(function () {
    da(n) && fa(e);
  });
}
function da(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Re(e, t);
  } catch {
    return !0;
  }
}
function fa(e) {
  var n = Ke(e, 1);
  n !== null && Me(n, e, 1, -1);
}
function xu(e) {
  var n = Oe();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ht, lastRenderedState: e }),
    (n.queue = e),
    (e = e.dispatch = qd.bind(null, A, e)),
    [n.memoizedState, e]
  );
}
function Qt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = A.updateQueue),
    n === null ? ((n = { lastEffect: null, stores: null }), (A.updateQueue = n), (n.lastEffect = e.next = e)) : ((t = n.lastEffect), t === null ? (n.lastEffect = e.next = e) : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function pa() {
  return je().memoizedState;
}
function Er(e, n, t, r) {
  var l = Oe();
  (A.flags |= e), (l.memoizedState = Qt(1 | n, t, void 0, r === void 0 ? null : r));
}
function ol(e, n, t, r) {
  var l = je();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((i = o.destroy), r !== null && ho(r, o.deps))) {
      l.memoizedState = Qt(n, t, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Qt(1 | n, t, i, r));
}
function wu(e, n) {
  return Er(8390656, 8, e, n);
}
function yo(e, n) {
  return ol(2048, 8, e, n);
}
function ma(e, n) {
  return ol(4, 2, e, n);
}
function ha(e, n) {
  return ol(4, 4, e, n);
}
function ga(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function va(e, n, t) {
  return (t = t != null ? t.concat([e]) : null), ol(4, 4, ga.bind(null, n, e), t);
}
function xo() {}
function ya(e, n) {
  var t = je();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && ho(n, r[1]) ? r[0] : ((t.memoizedState = [e, n]), e);
}
function xa(e, n) {
  var t = je();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && ho(n, r[1]) ? r[0] : ((e = e()), (t.memoizedState = [e, n]), e);
}
function wa(e, n, t) {
  return _n & 21 ? (Re(t, n) || ((t = js()), (A.lanes |= t), (Pn |= t), (e.baseState = !0)), n) : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = t));
}
function Zd(e, n) {
  var t = R;
  (R = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Il.transition;
  Il.transition = {};
  try {
    e(!1), n();
  } finally {
    (R = t), (Il.transition = r);
  }
}
function ka() {
  return je().memoizedState;
}
function Jd(e, n, t) {
  var r = an(e);
  if (((t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }), Sa(e))) Na(n, t);
  else if (((t = ra(e, n, t, r)), t !== null)) {
    var l = oe();
    Me(t, e, r, l), Ea(t, n, r);
  }
}
function qd(e, n, t) {
  var r = an(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Sa(e)) Na(n, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = n.lastRenderedReducer), i !== null))
      try {
        var o = n.lastRenderedState,
          u = i(o, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), Re(u, o))) {
          var s = n.interleaved;
          s === null ? ((l.next = l), ao(n)) : ((l.next = s.next), (s.next = l)), (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = ra(e, n, l, r)), t !== null && ((l = oe()), Me(t, e, r, l), Ea(t, n, r));
  }
}
function Sa(e) {
  var n = e.alternate;
  return e === A || (n !== null && n === A);
}
function Na(e, n) {
  Ct = Kr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)), (e.pending = n);
}
function Ea(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Gi(e, t);
  }
}
var Yr = {
    readContext: Ee,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  bd = {
    readContext: Ee,
    useCallback: function (e, n) {
      return (Oe().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ee,
    useEffect: wu,
    useImperativeHandle: function (e, n, t) {
      return (t = t != null ? t.concat([e]) : null), Er(4194308, 4, ga.bind(null, n, e), t);
    },
    useLayoutEffect: function (e, n) {
      return Er(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return Er(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = Oe();
      return (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e;
    },
    useReducer: function (e, n, t) {
      var r = Oe();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }),
        (r.queue = e),
        (e = e.dispatch = Jd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = Oe();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: xu,
    useDebugValue: xo,
    useDeferredValue: function (e) {
      return (Oe().memoizedState = e);
    },
    useTransition: function () {
      var e = xu(!1),
        n = e[0];
      return (e = Zd.bind(null, e[1])), (Oe().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = A,
        l = Oe();
      if (U) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), J === null)) throw Error(y(349));
        _n & 30 || sa(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (l.queue = i), wu(ca.bind(null, r, i, e), [e]), (r.flags |= 2048), Qt(9, aa.bind(null, r, i, t, n), void 0, null), t;
    },
    useId: function () {
      var e = Oe(),
        n = J.identifierPrefix;
      if (U) {
        var t = Ve,
          r = Be;
        (t = (r & ~(1 << (32 - Te(r) - 1))).toString(32) + t), (n = ":" + n + "R" + t), (t = Wt++), 0 < t && (n += "H" + t.toString(32)), (n += ":");
      } else (t = Gd++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  ef = {
    readContext: Ee,
    useCallback: ya,
    useContext: Ee,
    useEffect: yo,
    useImperativeHandle: va,
    useInsertionEffect: ma,
    useLayoutEffect: ha,
    useMemo: xa,
    useReducer: Ul,
    useRef: pa,
    useState: function () {
      return Ul(Ht);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var n = je();
      return wa(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Ul(Ht)[0],
        n = je().memoizedState;
      return [e, n];
    },
    useMutableSource: oa,
    useSyncExternalStore: ua,
    useId: ka,
    unstable_isNewReconciler: !1,
  },
  nf = {
    readContext: Ee,
    useCallback: ya,
    useContext: Ee,
    useEffect: yo,
    useImperativeHandle: va,
    useInsertionEffect: ma,
    useLayoutEffect: ha,
    useMemo: xa,
    useReducer: $l,
    useRef: pa,
    useState: function () {
      return $l(Ht);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var n = je();
      return Y === null ? (n.memoizedState = e) : wa(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Ht)[0],
        n = je().memoizedState;
      return [e, n];
    },
    useMutableSource: oa,
    useSyncExternalStore: ua,
    useId: ka,
    unstable_isNewReconciler: !1,
  };
function Pe(e, n) {
  if (e && e.defaultProps) {
    (n = B({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
function wi(e, n, t, r) {
  (n = e.memoizedState), (t = t(r, n)), (t = t == null ? n : B({}, n, t)), (e.memoizedState = t), e.lanes === 0 && (e.updateQueue.baseState = t);
}
var ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = an(e),
      i = We(r, l);
    (i.payload = n), t != null && (i.callback = t), (n = un(e, i, l)), n !== null && (Me(n, e, l, r), Sr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = an(e),
      i = We(r, l);
    (i.tag = 1), (i.payload = n), t != null && (i.callback = t), (n = un(e, i, l)), n !== null && (Me(n, e, l, r), Sr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = oe(),
      r = an(e),
      l = We(t, r);
    (l.tag = 2), n != null && (l.callback = n), (n = un(e, l, r)), n !== null && (Me(n, e, r, t), Sr(n, e, r));
  },
};
function ku(e, n, t, r, l, i, o) {
  return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : n.prototype && n.prototype.isPureReactComponent ? !It(t, r) || !It(l, i) : !0;
}
function ja(e, n, t) {
  var r = !1,
    l = fn,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null ? (i = Ee(i)) : ((l = fe(n) ? jn : le.current), (r = n.contextTypes), (i = (r = r != null) ? qn(e, l) : fn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = ul),
    (e.stateNode = n),
    (n._reactInternals = e),
    r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = l), (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function Su(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && ul.enqueueReplaceState(n, n.state, null);
}
function ki(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = {}), co(e);
  var i = n.contextType;
  typeof i == "object" && i !== null ? (l.context = Ee(i)) : ((i = fe(n) ? jn : le.current), (l.context = qn(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && (wi(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
      n !== l.state && ul.enqueueReplaceState(l, l.state, null),
      Hr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function tt(e, n) {
  try {
    var t = "",
      r = n;
    do (t += zc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Al(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Si(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var tf = typeof WeakMap == "function" ? WeakMap : Map;
function Ca(e, n, t) {
  (t = We(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Gr || ((Gr = !0), (Mi = r)), Si(e, n);
    }),
    t
  );
}
function _a(e, n, t) {
  (t = We(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        Si(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        Si(e, n), typeof r != "function" && (sn === null ? (sn = new Set([this])) : sn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, { componentStack: o !== null ? o : "" });
      }),
    t
  );
}
function Nu(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tf();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = vf.bind(null, e, n, t)), n.then(e, e));
}
function Eu(e) {
  do {
    var n;
    if (((n = e.tag === 13) && ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)), n)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ju(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n ? (e.flags |= 65536) : ((e.flags |= 128), (t.flags |= 131072), (t.flags &= -52805), t.tag === 1 && (t.alternate === null ? (t.tag = 17) : ((n = We(-1, 1)), (n.tag = 2), un(t, n, 1))), (t.lanes |= 1)), e);
}
var rf = Xe.ReactCurrentOwner,
  ce = !1;
function ie(e, n, t, r) {
  n.child = e === null ? ta(n, null, t, r) : et(n, e.child, t, r);
}
function Cu(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return Gn(n, l), (r = go(e, n, t, r, i, l)), (t = vo()), e !== null && !ce ? ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~l), Ye(e, n, l)) : (U && t && ro(n), (n.flags |= 1), ie(e, n, r, l), n.child);
}
function _u(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == "function" && !_o(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Pa(e, n, i, r, l))
      : ((e = Pr(t.type, null, r, n, n.mode, l)), (e.ref = n.ref), (e.return = n), (n.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (((t = t.compare), (t = t !== null ? t : It), t(o, r) && e.ref === n.ref)) return Ye(e, n, l);
  }
  return (n.flags |= 1), (e = cn(i, r)), (e.ref = n.ref), (e.return = n), (n.child = e);
}
function Pa(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (It(i, r) && e.ref === n.ref)
      if (((ce = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0)) e.flags & 131072 && (ce = !0);
      else return (n.lanes = e.lanes), Ye(e, n, l);
  }
  return Ni(e, n, t, r, l);
}
function za(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1)) (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), D(Hn, me), (me |= t);
    else {
      if (!(t & 1073741824)) return (e = i !== null ? i.baseLanes | t : t), (n.lanes = n.childLanes = 1073741824), (n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (n.updateQueue = null), D(Hn, me), (me |= e), null;
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = i !== null ? i.baseLanes : t), D(Hn, me), (me |= r);
    }
  else i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t), D(Hn, me), (me |= r);
  return ie(e, n, l, t), n.child;
}
function La(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) && ((n.flags |= 512), (n.flags |= 2097152));
}
function Ni(e, n, t, r, l) {
  var i = fe(t) ? jn : le.current;
  return (i = qn(n, i)), Gn(n, l), (t = go(e, n, t, r, i, l)), (r = vo()), e !== null && !ce ? ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~l), Ye(e, n, l)) : (U && r && ro(n), (n.flags |= 1), ie(e, n, t, l), n.child);
}
function Pu(e, n, t, r, l) {
  if (fe(t)) {
    var i = !0;
    $r(n);
  } else i = !1;
  if ((Gn(n, l), n.stateNode === null)) jr(e, n), ja(n, t, r), ki(n, t, r, l), (r = !0);
  else if (e === null) {
    var o = n.stateNode,
      u = n.memoizedProps;
    o.props = u;
    var s = o.context,
      d = t.contextType;
    typeof d == "object" && d !== null ? (d = Ee(d)) : ((d = fe(t) ? jn : le.current), (d = qn(n, d)));
    var g = t.getDerivedStateFromProps,
      h = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") || ((u !== r || s !== d) && Su(n, o, r, d)), (Je = !1);
    var m = n.memoizedState;
    (o.state = m),
      Hr(n, r, o, l),
      (s = n.memoizedState),
      u !== r || m !== s || de.current || Je
        ? (typeof g == "function" && (wi(n, t, g, r), (s = n.memoizedState)),
          (u = Je || ku(n, t, u, r, m, s, d))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), (n.memoizedProps = r), (n.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = d),
          (r = u))
        : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), (r = !1));
  } else {
    (o = n.stateNode),
      la(e, n),
      (u = n.memoizedProps),
      (d = n.type === n.elementType ? u : Pe(n.type, u)),
      (o.props = d),
      (h = n.pendingProps),
      (m = o.context),
      (s = t.contextType),
      typeof s == "object" && s !== null ? (s = Ee(s)) : ((s = fe(t) ? jn : le.current), (s = qn(n, s)));
    var x = t.getDerivedStateFromProps;
    (g = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") || ((u !== h || m !== s) && Su(n, o, r, s)),
      (Je = !1),
      (m = n.memoizedState),
      (o.state = m),
      Hr(n, r, o, l);
    var w = n.memoizedState;
    u !== h || m !== w || de.current || Je
      ? (typeof x == "function" && (wi(n, t, x, r), (w = n.memoizedState)),
        (d = Je || ku(n, t, d, r, m, w, s) || !1)
          ? (g ||
              (typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)),
            typeof o.componentDidUpdate == "function" && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" || (u === e.memoizedProps && m === e.memoizedState) || (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" || (u === e.memoizedProps && m === e.memoizedState) || (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = s),
        (r = d))
      : (typeof o.componentDidUpdate != "function" || (u === e.memoizedProps && m === e.memoizedState) || (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || (u === e.memoizedProps && m === e.memoizedState) || (n.flags |= 1024),
        (r = !1));
  }
  return Ei(e, n, t, r, i, l);
}
function Ei(e, n, t, r, l, i) {
  La(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return l && pu(n, t, !1), Ye(e, n, i);
  (r = n.stateNode), (rf.current = n);
  var u = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (n.flags |= 1), e !== null && o ? ((n.child = et(n, e.child, null, i)), (n.child = et(n, null, u, i))) : ie(e, n, u, i), (n.memoizedState = r.state), l && pu(n, t, !0), n.child;
}
function Ta(e) {
  var n = e.stateNode;
  n.pendingContext ? fu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && fu(e, n.context, !1), fo(e, n.containerInfo);
}
function zu(e, n, t, r, l) {
  return bn(), io(l), (n.flags |= 256), ie(e, n, t, r), n.child;
}
var ji = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ci(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ma(e, n, t) {
  var r = n.pendingProps,
    l = $.current,
    i = !1,
    o = (n.flags & 128) !== 0,
    u;
  if (((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? ((i = !0), (n.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1), D($, l & 1), e === null))
    return (
      yi(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1 ? (e.data === "$!" ? (n.lanes = 8) : (n.lanes = 1073741824)) : (n.lanes = 1), null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = o)) : (i = cl(o, r, 0, null)),
              (e = En(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = Ci(t)),
              (n.memoizedState = ji),
              e)
            : wo(n, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null))) return lf(e, n, o, r, u, l, t);
  if (i) {
    (i = r.fallback), (o = n.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && n.child !== l ? ((r = n.child), (r.childLanes = 0), (r.pendingProps = s), (n.deletions = null)) : ((r = cn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = cn(u, i)) : ((i = En(i, o, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (o = e.child.memoizedState),
      (o = o === null ? Ci(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = ji),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = cn(i, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null && ((t = n.deletions), t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function wo(e, n) {
  return (n = cl({ mode: "visible", children: n }, e.mode, 0, null)), (n.return = e), (e.child = n);
}
function pr(e, n, t, r) {
  return r !== null && io(r), et(n, e.child, null, t), (e = wo(n, n.pendingProps.children)), (e.flags |= 2), (n.memoizedState = null), e;
}
function lf(e, n, t, r, l, i, o) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Al(Error(y(422)))), pr(e, n, o, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((i = r.fallback),
        (l = n.mode),
        (r = cl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = En(i, l, o, null)),
        (i.flags |= 2),
        (r.return = n),
        (i.return = n),
        (r.sibling = i),
        (n.child = r),
        n.mode & 1 && et(n, e.child, null, o),
        (n.child.memoizedState = Ci(o)),
        (n.memoizedState = ji),
        i);
  if (!(n.mode & 1)) return pr(e, n, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Al(i, r, void 0)), pr(e, n, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l), l !== 0 && l !== i.retryLane && ((i.retryLane = l), Ke(e, l), Me(r, e, l, -1));
    }
    return Co(), (r = Al(Error(y(421)))), pr(e, n, o, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128), (n.child = e.child), (n = yf.bind(null, e)), (l._reactRetry = n), null)
    : ((e = i.treeContext),
      (he = on(l.nextSibling)),
      (ge = n),
      (U = !0),
      (Le = null),
      e !== null && ((we[ke++] = Be), (we[ke++] = Ve), (we[ke++] = Cn), (Be = e.id), (Ve = e.overflow), (Cn = n)),
      (n = wo(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Lu(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), xi(e.return, n, t);
}
function Bl(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l })
    : ((i.isBackwards = n), (i.rendering = null), (i.renderingStartTime = 0), (i.last = r), (i.tail = t), (i.tailMode = l));
}
function Ra(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, n, r.children, t), (r = $.current), r & 2)) (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Lu(e, t, n);
        else if (e.tag === 19) Lu(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D($, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; ) (e = t.alternate), e !== null && Qr(e) === null && (l = t), (t = t.sibling);
        (t = l), t === null ? ((l = n.child), (n.child = null)) : ((l = t.sibling), (t.sibling = null)), Bl(n, !1, l, t, i);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Qr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Bl(n, !0, t, null, i);
        break;
      case "together":
        Bl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function jr(e, n) {
  !(n.mode & 1) && e !== null && ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ye(e, n, t) {
  if ((e !== null && (n.dependencies = e.dependencies), (Pn |= n.lanes), !(t & n.childLanes))) return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (e = n.child, t = cn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) (e = e.sibling), (t = t.sibling = cn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function of(e, n, t) {
  switch (n.tag) {
    case 3:
      Ta(n), bn();
      break;
    case 5:
      ia(n);
      break;
    case 1:
      fe(n.type) && $r(n);
      break;
    case 4:
      fo(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      D(Vr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null)) return r.dehydrated !== null ? (D($, $.current & 1), (n.flags |= 128), null) : t & n.child.childLanes ? Ma(e, n, t) : (D($, $.current & 1), (e = Ye(e, n, t)), e !== null ? e.sibling : null);
      D($, $.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ra(e, n, t);
        n.flags |= 128;
      }
      if (((l = n.memoizedState), l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), D($, $.current), r)) break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), za(e, n, t);
  }
  return Ye(e, n, t);
}
var Da, _i, Oa, Fa;
Da = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
_i = function () {};
Oa = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), Sn(Ue.current);
    var i = null;
    switch (t) {
      case "input":
        (l = Gl(e, l)), (r = Gl(e, r)), (i = []);
        break;
      case "select":
        (l = B({}, l, { value: void 0 })), (r = B({}, r, { value: void 0 })), (i = []);
        break;
      case "textarea":
        (l = ql(e, l)), (r = ql(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ir);
    }
    ei(t, r);
    var o;
    t = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var u = l[d];
          for (o in u) u.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
        } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Lt.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (((u = l != null ? l[d] : void 0), r.hasOwnProperty(d) && s !== u && (s != null || u != null)))
        if (d === "style")
          if (u) {
            for (o in u) !u.hasOwnProperty(o) || (s && s.hasOwnProperty(o)) || (t || (t = {}), (t[o] = ""));
            for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (t || (t = {}), (t[o] = s[o]));
          } else t || (i || (i = []), i.push(d, t)), (t = s);
        else
          d === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0), (u = u ? u.__html : void 0), s != null && u !== s && (i = i || []).push(d, s))
            : d === "children"
            ? (typeof s != "string" && typeof s != "number") || (i = i || []).push(d, "" + s)
            : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Lt.hasOwnProperty(d) ? (s != null && d === "onScroll" && O("scroll", e), i || u === s || (i = [])) : (i = i || []).push(d, s));
    }
    t && (i = i || []).push("style", t);
    var d = i;
    (n.updateQueue = d) && (n.flags |= 4);
  }
};
Fa = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function ht(e, n) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (n || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function te(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n) for (var l = e.child; l !== null; ) (t |= l.lanes | l.childLanes), (r |= l.subtreeFlags & 14680064), (r |= l.flags & 14680064), (l.return = e), (l = l.sibling);
  else for (l = e.child; l !== null; ) (t |= l.lanes | l.childLanes), (r |= l.subtreeFlags), (r |= l.flags), (l.return = e), (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function uf(e, n, t) {
  var r = n.pendingProps;
  switch ((lo(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return te(n), null;
    case 1:
      return fe(n.type) && Ur(), te(n), null;
    case 3:
      return (
        (r = n.stateNode),
        nt(),
        F(de),
        F(le),
        mo(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) && (dr(n) ? (n.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(n.flags & 256)) || ((n.flags |= 1024), Le !== null && (Oi(Le), (Le = null)))),
        _i(e, n),
        te(n),
        null
      );
    case 5:
      po(n);
      var l = Sn(Vt.current);
      if (((t = n.type), e !== null && n.stateNode != null)) Oa(e, n, t, r, l), e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return te(n), null;
        }
        if (((e = Sn(Ue.current)), dr(n))) {
          (r = n.stateNode), (t = n.type);
          var i = n.memoizedProps;
          switch (((r[Fe] = n), (r[At] = i), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < wt.length; l++) O(wt[l], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O("error", r), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              $o(r, i), O("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }), O("invalid", r);
              break;
            case "textarea":
              Bo(r, i), O("invalid", r);
          }
          ei(t, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && cr(r.textContent, u, e), (l = ["children", u]))
                  : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && cr(r.textContent, u, e), (l = ["children", "" + u]))
                : Lt.hasOwnProperty(o) && u != null && o === "onScroll" && O("scroll", r);
            }
          switch (t) {
            case "input":
              tr(r), Ao(r, i, !0);
              break;
            case "textarea":
              tr(r), Vo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ir);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = cs(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = o.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)), t === "select" && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[Fe] = n),
            (e[At] = r),
            Da(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((o = ni(t, r)), t)) {
              case "dialog":
                O("cancel", e), O("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < wt.length; l++) O(wt[l], e);
                l = r;
                break;
              case "source":
                O("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                O("error", e), O("load", e), (l = r);
                break;
              case "details":
                O("toggle", e), (l = r);
                break;
              case "input":
                $o(e, r), (l = Gl(e, r)), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (l = B({}, r, { value: void 0 })), O("invalid", e);
                break;
              case "textarea":
                Bo(e, r), (l = ql(e, r)), O("invalid", e);
                break;
              default:
                l = r;
            }
            ei(t, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? ps(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ds(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && Tt(e, s)
                    : typeof s == "number" && Tt(e, "" + s)
                  : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Lt.hasOwnProperty(i) ? s != null && i === "onScroll" && O("scroll", e) : s != null && Wi(e, i, s, o));
              }
            switch (t) {
              case "input":
                tr(e), Ao(e, r, !1);
                break;
              case "textarea":
                tr(e), Vo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple), (i = r.value), i != null ? Qn(e, !!r.multiple, i, !1) : r.defaultValue != null && Qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ir);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return te(n), null;
    case 6:
      if (e && n.stateNode != null) Fa(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (((t = Sn(Vt.current)), Sn(Ue.current), dr(n))) {
          if (((r = n.stateNode), (t = n.memoizedProps), (r[Fe] = n), (i = r.nodeValue !== t) && ((e = ge), e !== null)))
            switch (e.tag) {
              case 3:
                cr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && cr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)), (r[Fe] = n), (n.stateNode = r);
      }
      return te(n), null;
    case 13:
      if ((F($), (r = n.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (U && he !== null && n.mode & 1 && !(n.flags & 128)) ea(), bn(), (n.flags |= 98560), (i = !1);
        else if (((i = dr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (((i = n.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(y(317));
            i[Fe] = n;
          } else bn(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          te(n), (i = !1);
        } else Le !== null && (Oi(Le), (Le = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null), r !== (e !== null && e.memoizedState !== null) && r && ((n.child.flags |= 8192), n.mode & 1 && (e === null || $.current & 1 ? X === 0 && (X = 3) : Co())), n.updateQueue !== null && (n.flags |= 4), te(n), null);
    case 4:
      return nt(), _i(e, n), e === null && Ut(n.stateNode.containerInfo), te(n), null;
    case 10:
      return so(n.type._context), te(n), null;
    case 17:
      return fe(n.type) && Ur(), te(n), null;
    case 19:
      if ((F($), (i = n.memoizedState), i === null)) return te(n), null;
      if (((r = (n.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) ht(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((o = Qr(e)), o !== null)) {
                for (n.flags |= 128, ht(i, !1), r = o.updateQueue, r !== null && ((n.updateQueue = r), (n.flags |= 4)), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                  (i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0), (i.lanes = e), (i.child = null), (i.subtreeFlags = 0), (i.memoizedProps = null), (i.memoizedState = null), (i.updateQueue = null), (i.dependencies = null), (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (t = t.sibling);
                return D($, ($.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Q() > rt && ((n.flags |= 128), (r = !0), ht(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Qr(o)), e !== null)) {
            if (((n.flags |= 128), (r = !0), (t = e.updateQueue), t !== null && ((n.updateQueue = t), (n.flags |= 4)), ht(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)) return te(n), null;
          } else 2 * Q() - i.renderingStartTime > rt && t !== 1073741824 && ((n.flags |= 128), (r = !0), ht(i, !1), (n.lanes = 4194304));
        i.isBackwards ? ((o.sibling = n.child), (n.child = o)) : ((t = i.last), t !== null ? (t.sibling = o) : (n.child = o), (i.last = o));
      }
      return i.tail !== null ? ((n = i.tail), (i.rendering = n), (i.tail = n.sibling), (i.renderingStartTime = Q()), (n.sibling = null), (t = $.current), D($, r ? (t & 1) | 2 : t & 1), n) : (te(n), null);
    case 22:
    case 23:
      return jo(), (r = n.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192), r && n.mode & 1 ? me & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : te(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function sf(e, n) {
  switch ((lo(n), n.tag)) {
    case 1:
      return fe(n.type) && Ur(), (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null;
    case 3:
      return nt(), F(de), F(le), mo(), (e = n.flags), e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null;
    case 5:
      return po(n), null;
    case 13:
      if ((F($), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        bn();
      }
      return (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null;
    case 19:
      return F($), null;
    case 4:
      return nt(), null;
    case 10:
      return so(n.type._context), null;
    case 22:
    case 23:
      return jo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var mr = !1,
  re = !1,
  af = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Wn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        V(e, n, r);
      }
    else t.current = null;
}
function Pi(e, n, t) {
  try {
    t();
  } catch (r) {
    V(e, n, r);
  }
}
var Tu = !1;
function cf(e, n) {
  if (((di = Dr), (e = Bs()), to(e))) {
    if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            d = 0,
            g = 0,
            h = e,
            m = null;
          n: for (;;) {
            for (var x; h !== t || (l !== 0 && h.nodeType !== 3) || (u = o + l), h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (x = h.firstChild) !== null; ) (m = h), (h = x);
            for (;;) {
              if (h === e) break n;
              if ((m === t && ++d === l && (u = o), m === i && ++g === r && (s = o), (x = h.nextSibling) !== null)) break;
              (h = m), (m = h.parentNode);
            }
            h = x;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (fi = { focusedElem: e, selectionRange: t }, Dr = !1, S = n; S !== null; )
    if (((n = S), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = n), (S = e);
    else
      for (; S !== null; ) {
        n = S;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    I = w.memoizedState,
                    f = n.stateNode,
                    a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? k : Pe(n.type, k), I);
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var p = n.stateNode.containerInfo;
                p.nodeType === 1 ? (p.textContent = "") : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          V(n, n.return, v);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (S = e);
          break;
        }
        S = n.return;
      }
  return (w = Tu), (Tu = !1), w;
}
function _t(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Pi(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function sl(e, n) {
  if (((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function zi(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Ia(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Ia(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((n = e.stateNode), n !== null && (delete n[Fe], delete n[At], delete n[hi], delete n[Qd], delete n[Kd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ua(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ua(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Li(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8 ? ((n = t.parentNode), n.insertBefore(e, t)) : ((n = t), n.appendChild(e)), (t = t._reactRootContainer), t != null || n.onclick !== null || (n.onclick = Ir));
  else if (r !== 4 && ((e = e.child), e !== null)) for (Li(e, n, t), e = e.sibling; e !== null; ) Li(e, n, t), (e = e.sibling);
}
function Ti(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null)) for (Ti(e, n, t), e = e.sibling; e !== null; ) Ti(e, n, t), (e = e.sibling);
}
var q = null,
  ze = !1;
function Ge(e, n, t) {
  for (t = t.child; t !== null; ) $a(e, n, t), (t = t.sibling);
}
function $a(e, n, t) {
  if (Ie && typeof Ie.onCommitFiberUnmount == "function")
    try {
      Ie.onCommitFiberUnmount(el, t);
    } catch {}
  switch (t.tag) {
    case 5:
      re || Wn(t, n);
    case 6:
      var r = q,
        l = ze;
      (q = null), Ge(e, n, t), (q = r), (ze = l), q !== null && (ze ? ((e = q), (t = t.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : q.removeChild(t.stateNode));
      break;
    case 18:
      q !== null && (ze ? ((e = q), (t = t.stateNode), e.nodeType === 8 ? Dl(e.parentNode, t) : e.nodeType === 1 && Dl(e, t), Ot(e)) : Dl(q, t.stateNode));
      break;
    case 4:
      (r = q), (l = ze), (q = t.stateNode.containerInfo), (ze = !0), Ge(e, n, t), (q = r), (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!re && ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag), o !== void 0 && (i & 2 || i & 4) && Pi(t, n, o), (l = l.next);
        } while (l !== r);
      }
      Ge(e, n, t);
      break;
    case 1:
      if (!re && (Wn(t, n), (r = t.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = t.memoizedProps), (r.state = t.memoizedState), r.componentWillUnmount();
        } catch (u) {
          V(t, n, u);
        }
      Ge(e, n, t);
      break;
    case 21:
      Ge(e, n, t);
      break;
    case 22:
      t.mode & 1 ? ((re = (r = re) || t.memoizedState !== null), Ge(e, n, t), (re = r)) : Ge(e, n, t);
      break;
    default:
      Ge(e, n, t);
  }
}
function Ru(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new af()),
      n.forEach(function (r) {
        var l = xf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function _e(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          o = n,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (ze = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        $a(i, o, l), (q = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (d) {
        V(l, n, d);
      }
    }
  if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) Aa(n, e), (n = n.sibling);
}
function Aa(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_e(n, e), De(e), r & 4)) {
        try {
          _t(3, e, e.return), sl(3, e);
        } catch (k) {
          V(e, e.return, k);
        }
        try {
          _t(5, e, e.return);
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 1:
      _e(n, e), De(e), r & 512 && t !== null && Wn(t, t.return);
      break;
    case 5:
      if ((_e(n, e), De(e), r & 512 && t !== null && Wn(t, t.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          Tt(l, "");
        } catch (k) {
          V(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = t !== null ? t.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && ss(l, i), ni(u, o);
            var d = ni(u, i);
            for (o = 0; o < s.length; o += 2) {
              var g = s[o],
                h = s[o + 1];
              g === "style" ? ps(l, h) : g === "dangerouslySetInnerHTML" ? ds(l, h) : g === "children" ? Tt(l, h) : Wi(l, g, h, d);
            }
            switch (u) {
              case "input":
                Zl(l, i);
                break;
              case "textarea":
                as(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null ? Qn(l, !!i.multiple, x, !1) : m !== !!i.multiple && (i.defaultValue != null ? Qn(l, !!i.multiple, i.defaultValue, !0) : Qn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[At] = i;
          } catch (k) {
            V(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((_e(n, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 3:
      if ((_e(n, e), De(e), r & 4 && t !== null && t.memoizedState.isDehydrated))
        try {
          Ot(n.containerInfo);
        } catch (k) {
          V(e, e.return, k);
        }
      break;
    case 4:
      _e(n, e), De(e);
      break;
    case 13:
      _e(n, e), De(e), (l = e.child), l.flags & 8192 && ((i = l.memoizedState !== null), (l.stateNode.isHidden = i), !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (No = Q())), r & 4 && Ru(e);
      break;
    case 22:
      if (((g = t !== null && t.memoizedState !== null), e.mode & 1 ? ((re = (d = re) || g), _e(n, e), (re = d)) : _e(n, e), De(e), r & 8192)) {
        if (((d = e.memoizedState !== null), (e.stateNode.isHidden = d) && !g && e.mode & 1))
          for (S = e, g = e.child; g !== null; ) {
            for (h = S = g; S !== null; ) {
              switch (((m = S), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _t(4, m, m.return);
                  break;
                case 1:
                  Wn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (t = m.return);
                    try {
                      (n = r), (w.props = n.memoizedProps), (w.state = n.memoizedState), w.componentWillUnmount();
                    } catch (k) {
                      V(r, t, k);
                    }
                  }
                  break;
                case 5:
                  Wn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ou(h);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (S = x)) : Ou(h);
            }
            g = g.sibling;
          }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                (l = h.stateNode),
                  d
                    ? ((i = l.style), typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : (i.display = "none"))
                    : ((u = h.stateNode), (s = h.memoizedProps.style), (o = s != null && s.hasOwnProperty("display") ? s.display : null), (u.style.display = fs("display", o)));
              } catch (k) {
                V(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (g === null)
              try {
                h.stateNode.nodeValue = d ? "" : h.memoizedProps;
              } catch (k) {
                V(e, e.return, k);
              }
          } else if (((h.tag !== 22 && h.tag !== 23) || h.memoizedState === null || h === e) && h.child !== null) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            g === h && (g = null), (h = h.return);
          }
          g === h && (g = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      _e(n, e), De(e), r & 4 && Ru(e);
      break;
    case 21:
      break;
    default:
      _e(n, e), De(e);
  }
}
function De(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Ua(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Tt(l, ""), (r.flags &= -33));
          var i = Mu(e);
          Ti(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Mu(e);
          Li(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function df(e, n, t) {
  (S = e), Ba(e);
}
function Ba(e, n, t) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || mr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = mr;
        var d = re;
        if (((mr = o), (re = s) && !d)) for (S = l; S !== null; ) (o = S), (s = o.child), o.tag === 22 && o.memoizedState !== null ? Fu(l) : s !== null ? ((s.return = o), (S = s)) : Fu(l);
        for (; i !== null; ) (S = i), Ba(i), (i = i.sibling);
        (S = l), (mr = u), (re = d);
      }
      Du(e);
    } else l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Du(e);
  }
}
function Du(e) {
  for (; S !== null; ) {
    var n = S;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              re || sl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !re)
                if (t === null) r.componentDidMount();
                else {
                  var l = n.elementType === n.type ? t.memoizedProps : Pe(n.type, t.memoizedProps);
                  r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = n.updateQueue;
              i !== null && yu(n, i, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                yu(n, o, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var d = n.alternate;
                if (d !== null) {
                  var g = d.memoizedState;
                  if (g !== null) {
                    var h = g.dehydrated;
                    h !== null && Ot(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (n.flags & 512 && zi(n));
      } catch (m) {
        V(n, n.return, m);
      }
    }
    if (n === e) {
      S = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (S = t);
      break;
    }
    S = n.return;
  }
}
function Ou(e) {
  for (; S !== null; ) {
    var n = S;
    if (n === e) {
      S = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (S = t);
      break;
    }
    S = n.return;
  }
}
function Fu(e) {
  for (; S !== null; ) {
    var n = S;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            sl(4, n);
          } catch (s) {
            V(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(n, l, s);
            }
          }
          var i = n.return;
          try {
            zi(n);
          } catch (s) {
            V(n, i, s);
          }
          break;
        case 5:
          var o = n.return;
          try {
            zi(n);
          } catch (s) {
            V(n, o, s);
          }
      }
    } catch (s) {
      V(n, n.return, s);
    }
    if (n === e) {
      S = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (S = u);
      break;
    }
    S = n.return;
  }
}
var ff = Math.ceil,
  Xr = Xe.ReactCurrentDispatcher,
  ko = Xe.ReactCurrentOwner,
  Ne = Xe.ReactCurrentBatchConfig,
  M = 0,
  J = null,
  K = null,
  b = 0,
  me = 0,
  Hn = mn(0),
  X = 0,
  Kt = null,
  Pn = 0,
  al = 0,
  So = 0,
  Pt = null,
  ae = null,
  No = 0,
  rt = 1 / 0,
  $e = null,
  Gr = !1,
  Mi = null,
  sn = null,
  hr = !1,
  nn = null,
  Zr = 0,
  zt = 0,
  Ri = null,
  Cr = -1,
  _r = 0;
function oe() {
  return M & 6 ? Q() : Cr !== -1 ? Cr : (Cr = Q());
}
function an(e) {
  return e.mode & 1 ? (M & 2 && b !== 0 ? b & -b : Xd.transition !== null ? (_r === 0 && (_r = js()), _r) : ((e = R), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ms(e.type))), e)) : 1;
}
function Me(e, n, t, r) {
  if (50 < zt) throw ((zt = 0), (Ri = null), Error(y(185)));
  Xt(e, t, r), (!(M & 2) || e !== J) && (e === J && (!(M & 2) && (al |= t), X === 4 && be(e, b)), pe(e, r), t === 1 && M === 0 && !(n.mode & 1) && ((rt = Q() + 500), il && hn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  Xc(e, n);
  var r = Rr(e, e === J ? b : 0);
  if (r === 0) t !== null && Qo(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Qo(t), n === 1))
      e.tag === 0 ? Yd(Iu.bind(null, e)) : Js(Iu.bind(null, e)),
        Wd(function () {
          !(M & 6) && hn();
        }),
        (t = null);
    else {
      switch (Cs(r)) {
        case 1:
          t = Xi;
          break;
        case 4:
          t = Ns;
          break;
        case 16:
          t = Mr;
          break;
        case 536870912:
          t = Es;
          break;
        default:
          t = Mr;
      }
      t = Ga(t, Va.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Va(e, n) {
  if (((Cr = -1), (_r = 0), M & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (Zn() && e.callbackNode !== t) return null;
  var r = Rr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = Jr(e, r);
  else {
    n = r;
    var l = M;
    M |= 2;
    var i = Ha();
    (J !== e || b !== n) && (($e = null), (rt = Q() + 500), Nn(e, n));
    do
      try {
        hf();
        break;
      } catch (u) {
        Wa(e, u);
      }
    while (!0);
    uo(), (Xr.current = i), (M = l), K !== null ? (n = 0) : ((J = null), (b = 0), (n = X));
  }
  if (n !== 0) {
    if ((n === 2 && ((l = oi(e)), l !== 0 && ((r = l), (n = Di(e, l)))), n === 1)) throw ((t = Kt), Nn(e, 0), be(e, r), pe(e, Q()), t);
    if (n === 6) be(e, r);
    else {
      if (((l = e.current.alternate), !(r & 30) && !pf(l) && ((n = Jr(e, r)), n === 2 && ((i = oi(e)), i !== 0 && ((r = i), (n = Di(e, i)))), n === 1))) throw ((t = Kt), Nn(e, 0), be(e, r), pe(e, Q()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          xn(e, ae, $e);
          break;
        case 3:
          if ((be(e, r), (r & 130023424) === r && ((n = No + 500 - Q()), 10 < n))) {
            if (Rr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = mi(xn.bind(null, e, ae, $e), n);
            break;
          }
          xn(e, ae, $e);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Te(r);
            (i = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~i);
          }
          if (((r = l), (r = Q() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ff(r / 1960)) - r), 10 < r)) {
            e.timeoutHandle = mi(xn.bind(null, e, ae, $e), r);
            break;
          }
          xn(e, ae, $e);
          break;
        case 5:
          xn(e, ae, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === t ? Va.bind(null, e) : null;
}
function Di(e, n) {
  var t = Pt;
  return e.current.memoizedState.isDehydrated && (Nn(e, n).flags |= 256), (e = Jr(e, n)), e !== 2 && ((n = ae), (ae = t), n !== null && Oi(n)), e;
}
function Oi(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function pf(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Re(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null)) (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function be(e, n) {
  for (n &= ~So, n &= ~al, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Te(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Iu(e) {
  if (M & 6) throw Error(y(327));
  Zn();
  var n = Rr(e, 0);
  if (!(n & 1)) return pe(e, Q()), null;
  var t = Jr(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = oi(e);
    r !== 0 && ((n = r), (t = Di(e, r)));
  }
  if (t === 1) throw ((t = Kt), Nn(e, 0), be(e, n), pe(e, Q()), t);
  if (t === 6) throw Error(y(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = n), xn(e, ae, $e), pe(e, Q()), null;
}
function Eo(e, n) {
  var t = M;
  M |= 1;
  try {
    return e(n);
  } finally {
    (M = t), M === 0 && ((rt = Q() + 500), il && hn());
  }
}
function zn(e) {
  nn !== null && nn.tag === 0 && !(M & 6) && Zn();
  var n = M;
  M |= 1;
  var t = Ne.transition,
    r = R;
  try {
    if (((Ne.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (Ne.transition = t), (M = n), !(M & 6) && hn();
  }
}
function jo() {
  (me = Hn.current), F(Hn);
}
function Nn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Vd(t)), K !== null))
    for (t = K.return; t !== null; ) {
      var r = t;
      switch ((lo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ur();
          break;
        case 3:
          nt(), F(de), F(le), mo();
          break;
        case 5:
          po(r);
          break;
        case 4:
          nt();
          break;
        case 13:
          F($);
          break;
        case 19:
          F($);
          break;
        case 10:
          so(r.type._context);
          break;
        case 22:
        case 23:
          jo();
      }
      t = t.return;
    }
  if (((J = e), (K = e = cn(e.current, null)), (b = me = n), (X = 0), (Kt = null), (So = al = Pn = 0), (ae = Pt = null), kn !== null)) {
    for (n = 0; n < kn.length; n++)
      if (((t = kn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        t.pending = r;
      }
    kn = null;
  }
  return e;
}
function Wa(e, n) {
  do {
    var t = K;
    try {
      if ((uo(), (Nr.current = Yr), Kr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Kr = !1;
      }
      if (((_n = 0), (Z = Y = A = null), (Ct = !1), (Wt = 0), (ko.current = null), t === null || t.return === null)) {
        (X = 1), (Kt = n), (K = null);
        break;
      }
      e: {
        var i = e,
          o = t.return,
          u = t,
          s = n;
        if (((n = b), (u.flags |= 32768), s !== null && typeof s == "object" && typeof s.then == "function")) {
          var d = s,
            g = u,
            h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = g.alternate;
            m ? ((g.updateQueue = m.updateQueue), (g.memoizedState = m.memoizedState), (g.lanes = m.lanes)) : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var x = Eu(o);
          if (x !== null) {
            (x.flags &= -257), ju(x, o, u, i, n), x.mode & 1 && Nu(i, d, n), (n = x), (s = d);
            var w = n.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(s), (n.updateQueue = k);
            } else w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Nu(i, d, n), Co();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var I = Eu(o);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), ju(I, o, u, i, n), io(tt(s, u));
            break e;
          }
        }
        (i = s = tt(s, u)), X !== 4 && (X = 2), Pt === null ? (Pt = [i]) : Pt.push(i), (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var f = Ca(i, s, n);
              vu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type,
                p = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || (p !== null && typeof p.componentDidCatch == "function" && (sn === null || !sn.has(p))))) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var v = _a(i, u, n);
                vu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ka(t);
    } catch (N) {
      (n = N), K === t && t !== null && (K = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Ha() {
  var e = Xr.current;
  return (Xr.current = Yr), e === null ? Yr : e;
}
function Co() {
  (X === 0 || X === 3 || X === 2) && (X = 4), J === null || (!(Pn & 268435455) && !(al & 268435455)) || be(J, b);
}
function Jr(e, n) {
  var t = M;
  M |= 2;
  var r = Ha();
  (J !== e || b !== n) && (($e = null), Nn(e, n));
  do
    try {
      mf();
      break;
    } catch (l) {
      Wa(e, l);
    }
  while (!0);
  if ((uo(), (M = t), (Xr.current = r), K !== null)) throw Error(y(261));
  return (J = null), (b = 0), X;
}
function mf() {
  for (; K !== null; ) Qa(K);
}
function hf() {
  for (; K !== null && !$c(); ) Qa(K);
}
function Qa(e) {
  var n = Xa(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps), n === null ? Ka(e) : (K = n), (ko.current = null);
}
function Ka(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = sf(t, n)), t !== null)) {
        (t.flags &= 32767), (K = t);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((t = uf(t, n, me)), t !== null)) {
      K = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      K = n;
      return;
    }
    K = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function xn(e, n, t) {
  var r = R,
    l = Ne.transition;
  try {
    (Ne.transition = null), (R = 1), gf(e, n, t, r);
  } finally {
    (Ne.transition = l), (R = r);
  }
  return null;
}
function gf(e, n, t, r) {
  do Zn();
  while (nn !== null);
  if (M & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current)) throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (Gc(e, i),
    e === J && ((K = J = null), (b = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      hr ||
      ((hr = !0),
      Ga(Mr, function () {
        return Zn(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = Ne.transition), (Ne.transition = null);
    var o = R;
    R = 1;
    var u = M;
    (M |= 4), (ko.current = null), cf(e, t), Aa(t, e), Od(fi), (Dr = !!di), (fi = di = null), (e.current = t), df(t), Ac(), (M = u), (R = o), (Ne.transition = i);
  } else e.current = t;
  if ((hr && ((hr = !1), (nn = e), (Zr = l)), (i = e.pendingLanes), i === 0 && (sn = null), Wc(t.stateNode), pe(e, Q()), n !== null))
    for (r = e.onRecoverableError, t = 0; t < n.length; t++) (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Gr) throw ((Gr = !1), (e = Mi), (Mi = null), e);
  return Zr & 1 && e.tag !== 0 && Zn(), (i = e.pendingLanes), i & 1 ? (e === Ri ? zt++ : ((zt = 0), (Ri = e))) : (zt = 0), hn(), null;
}
function Zn() {
  if (nn !== null) {
    var e = Cs(Zr),
      n = Ne.transition,
      t = R;
    try {
      if (((Ne.transition = null), (R = 16 > e ? 16 : e), nn === null)) var r = !1;
      else {
        if (((e = nn), (nn = null), (Zr = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, S = e.current; S !== null; ) {
          var i = S,
            o = i.child;
          if (S.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var d = u[s];
                for (S = d; S !== null; ) {
                  var g = S;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _t(8, g, i);
                  }
                  var h = g.child;
                  if (h !== null) (h.return = g), (S = h);
                  else
                    for (; S !== null; ) {
                      g = S;
                      var m = g.sibling,
                        x = g.return;
                      if ((Ia(g), g === d)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = x), (S = m);
                        break;
                      }
                      S = x;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var I = k.sibling;
                    (k.sibling = null), (k = I);
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o);
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _t(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (S = f);
                break e;
              }
              S = i.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          o = S;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (S = p);
          else
            e: for (o = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sl(9, u);
                  }
                } catch (N) {
                  V(u, u.return, N);
                }
              if (u === o) {
                S = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (S = v);
                break e;
              }
              S = u.return;
            }
        }
        if (((M = l), hn(), Ie && typeof Ie.onPostCommitFiberRoot == "function"))
          try {
            Ie.onPostCommitFiberRoot(el, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = t), (Ne.transition = n);
    }
  }
  return !1;
}
function Uu(e, n, t) {
  (n = tt(t, n)), (n = Ca(e, n, 1)), (e = un(e, n, 1)), (n = oe()), e !== null && (Xt(e, 1, n), pe(e, n));
}
function V(e, n, t) {
  if (e.tag === 3) Uu(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Uu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (sn === null || !sn.has(r)))) {
          (e = tt(t, e)), (e = _a(n, e, 1)), (n = un(n, e, 1)), (e = oe()), n !== null && (Xt(n, 1, e), pe(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function vf(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), (n = oe()), (e.pingedLanes |= e.suspendedLanes & t), J === e && (b & t) === t && (X === 4 || (X === 3 && (b & 130023424) === b && 500 > Q() - No) ? Nn(e, 0) : (So |= t)), pe(e, n);
}
function Ya(e, n) {
  n === 0 && (e.mode & 1 ? ((n = ir), (ir <<= 1), !(ir & 130023424) && (ir = 4194304)) : (n = 1));
  var t = oe();
  (e = Ke(e, n)), e !== null && (Xt(e, n, t), pe(e, t));
}
function yf(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), Ya(e, t);
}
function xf(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), Ya(e, t);
}
var Xa;
Xa = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || de.current) ce = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (ce = !1), of(e, n, t);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), U && n.flags & 1048576 && qs(n, Br, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      jr(e, n), (e = n.pendingProps);
      var l = qn(n, le.current);
      Gn(n, t), (l = go(null, n, r, e, l, t));
      var i = vo();
      return (
        (n.flags |= 1),
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            fe(r) ? ((i = !0), $r(n)) : (i = !1),
            (n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
            co(n),
            (l.updater = ul),
            (n.stateNode = l),
            (l._reactInternals = n),
            ki(n, r, e, t),
            (n = Ei(null, n, r, !0, i, t)))
          : ((n.tag = 0), U && i && ro(n), ie(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch ((jr(e, n), (e = n.pendingProps), (l = r._init), (r = l(r._payload)), (n.type = r), (l = n.tag = kf(r)), (e = Pe(r, e)), l)) {
          case 0:
            n = Ni(null, n, r, e, t);
            break e;
          case 1:
            n = Pu(null, n, r, e, t);
            break e;
          case 11:
            n = Cu(null, n, r, e, t);
            break e;
          case 14:
            n = _u(null, n, r, Pe(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (r = n.type), (l = n.pendingProps), (l = n.elementType === r ? l : Pe(r, l)), Ni(e, n, r, l, t);
    case 1:
      return (r = n.type), (l = n.pendingProps), (l = n.elementType === r ? l : Pe(r, l)), Pu(e, n, r, l, t);
    case 3:
      e: {
        if ((Ta(n), e === null)) throw Error(y(387));
        (r = n.pendingProps), (i = n.memoizedState), (l = i.element), la(e, n), Hr(n, r, null, t);
        var o = n.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (((i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }), (n.updateQueue.baseState = i), (n.memoizedState = i), n.flags & 256)) {
            (l = tt(Error(y(423)), n)), (n = zu(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = tt(Error(y(424)), n)), (n = zu(e, n, r, t, l));
            break e;
          } else for (he = on(n.stateNode.containerInfo.firstChild), ge = n, U = !0, Le = null, t = ta(n, null, r, t), n.child = t; t; ) (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((bn(), r === l)) {
            n = Ye(e, n, t);
            break e;
          }
          ie(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return ia(n), e === null && yi(n), (r = n.type), (l = n.pendingProps), (i = e !== null ? e.memoizedProps : null), (o = l.children), pi(r, l) ? (o = null) : i !== null && pi(r, i) && (n.flags |= 32), La(e, n), ie(e, n, o, t), n.child;
    case 6:
      return e === null && yi(n), null;
    case 13:
      return Ma(e, n, t);
    case 4:
      return fo(n, n.stateNode.containerInfo), (r = n.pendingProps), e === null ? (n.child = et(n, null, r, t)) : ie(e, n, r, t), n.child;
    case 11:
      return (r = n.type), (l = n.pendingProps), (l = n.elementType === r ? l : Pe(r, l)), Cu(e, n, r, l, t);
    case 7:
      return ie(e, n, n.pendingProps, t), n.child;
    case 8:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (((r = n.type._context), (l = n.pendingProps), (i = n.memoizedProps), (o = l.value), D(Vr, r._currentValue), (r._currentValue = o), i !== null))
          if (Re(i.value, o)) {
            if (i.children === l.children && !de.current) {
              n = Ye(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = We(-1, t & -t)), (s.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var g = d.pending;
                        g === null ? (s.next = s) : ((s.next = g.next), (g.next = s)), (d.pending = s);
                      }
                    }
                    (i.lanes |= t), (s = i.alternate), s !== null && (s.lanes |= t), xi(i.return, t, n), (u.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= t), (u = o.alternate), u !== null && (u.lanes |= t), xi(o, t, n), (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ie(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (l = n.type), (r = n.pendingProps.children), Gn(n, t), (l = Ee(l)), (r = r(l)), (n.flags |= 1), ie(e, n, r, t), n.child;
    case 14:
      return (r = n.type), (l = Pe(r, n.pendingProps)), (l = Pe(r.type, l)), _u(e, n, r, l, t);
    case 15:
      return Pa(e, n, n.type, n.pendingProps, t);
    case 17:
      return (r = n.type), (l = n.pendingProps), (l = n.elementType === r ? l : Pe(r, l)), jr(e, n), (n.tag = 1), fe(r) ? ((e = !0), $r(n)) : (e = !1), Gn(n, t), ja(n, r, l), ki(n, r, l, t), Ei(null, n, r, !0, e, t);
    case 19:
      return Ra(e, n, t);
    case 22:
      return za(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function Ga(e, n) {
  return Ss(e, n);
}
function wf(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Se(e, n, t, r) {
  return new wf(e, n, t, r);
}
function _o(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function kf(e) {
  if (typeof e == "function") return _o(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Qi)) return 11;
    if (e === Ki) return 14;
  }
  return 2;
}
function cn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = Se(e.tag, n, e.key, e.mode)), (t.elementType = e.elementType), (t.type = e.type), (t.stateNode = e.stateNode), (t.alternate = e), (e.alternate = t))
      : ((t.pendingProps = n), (t.type = e.type), (t.flags = 0), (t.subtreeFlags = 0), (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Pr(e, n, t, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) _o(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Dn:
        return En(t.children, l, i, n);
      case Hi:
        (o = 8), (l |= 8);
        break;
      case Ql:
        return (e = Se(12, t, n, l | 2)), (e.elementType = Ql), (e.lanes = i), e;
      case Kl:
        return (e = Se(13, t, n, l)), (e.elementType = Kl), (e.lanes = i), e;
      case Yl:
        return (e = Se(19, t, n, l)), (e.elementType = Yl), (e.lanes = i), e;
      case is:
        return cl(t, l, i, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case rs:
              o = 10;
              break e;
            case ls:
              o = 9;
              break e;
            case Qi:
              o = 11;
              break e;
            case Ki:
              o = 14;
              break e;
            case Ze:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (n = Se(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = i), n;
}
function En(e, n, t, r) {
  return (e = Se(7, e, r, n)), (e.lanes = t), e;
}
function cl(e, n, t, r) {
  return (e = Se(22, e, r, n)), (e.elementType = is), (e.lanes = t), (e.stateNode = { isHidden: !1 }), e;
}
function Vl(e, n, t) {
  return (e = Se(6, e, null, n)), (e.lanes = t), e;
}
function Wl(e, n, t) {
  return (n = Se(4, e.children !== null ? e.children : [], e.key, n)), (n.lanes = t), (n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), n;
}
function Sf(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Po(e, n, t, r, l, i, o, u, s) {
  return (
    (e = new Sf(e, n, t, u, s)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = Se(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
    co(i),
    e
  );
}
function Nf(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Rn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function Za(e) {
  if (!e) return fn;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (fe(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (fe(t)) return Zs(e, t, n);
  }
  return n;
}
function Ja(e, n, t, r, l, i, o, u, s) {
  return (e = Po(t, r, !0, e, l, i, o, u, s)), (e.context = Za(null)), (t = e.current), (r = oe()), (l = an(t)), (i = We(r, l)), (i.callback = n ?? null), un(t, i, l), (e.current.lanes = l), Xt(e, l, r), pe(e, r), e;
}
function dl(e, n, t, r) {
  var l = n.current,
    i = oe(),
    o = an(l);
  return (
    (t = Za(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = We(i, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = un(l, n, o)),
    e !== null && (Me(e, l, o, i), Sr(e, l, o)),
    o
  );
}
function qr(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $u(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function zo(e, n) {
  $u(e, n), (e = e.alternate) && $u(e, n);
}
function Ef() {
  return null;
}
var qa =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Lo(e) {
  this._internalRoot = e;
}
fl.prototype.render = Lo.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  dl(e, n, null, null);
};
fl.prototype.unmount = Lo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    zn(function () {
      dl(null, e, null, null);
    }),
      (n[Qe] = null);
  }
};
function fl(e) {
  this._internalRoot = e;
}
fl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = zs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < qe.length && n !== 0 && n < qe[t].priority; t++);
    qe.splice(t, 0, e), t === 0 && Ts(e);
  }
};
function To(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function pl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function Au() {}
function jf(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = qr(o);
        i.call(d);
      };
    }
    var o = Ja(n, r, e, 0, null, !1, !1, "", Au);
    return (e._reactRootContainer = o), (e[Qe] = o.current), Ut(e.nodeType === 8 ? e.parentNode : e), zn(), o;
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var d = qr(s);
      u.call(d);
    };
  }
  var s = Po(e, 0, !1, null, null, !1, !1, "", Au);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    Ut(e.nodeType === 8 ? e.parentNode : e),
    zn(function () {
      dl(n, s, t, r);
    }),
    s
  );
}
function ml(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = qr(o);
        u.call(s);
      };
    }
    dl(n, o, e, l);
  } else o = jf(t, n, e, l, r);
  return qr(o);
}
_s = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = xt(n.pendingLanes);
        t !== 0 && (Gi(n, t | 1), pe(n, Q()), !(M & 6) && ((rt = Q() + 500), hn()));
      }
      break;
    case 13:
      zn(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = oe();
          Me(r, e, 1, l);
        }
      }),
        zo(e, 1);
  }
};
Zi = function (e) {
  if (e.tag === 13) {
    var n = Ke(e, 134217728);
    if (n !== null) {
      var t = oe();
      Me(n, e, 134217728, t);
    }
    zo(e, 134217728);
  }
};
Ps = function (e) {
  if (e.tag === 13) {
    var n = an(e),
      t = Ke(e, n);
    if (t !== null) {
      var r = oe();
      Me(t, e, n, r);
    }
    zo(e, n);
  }
};
zs = function () {
  return R;
};
Ls = function (e, n) {
  var t = R;
  try {
    return (R = e), n();
  } finally {
    R = t;
  }
};
ri = function (e, n, t) {
  switch (n) {
    case "input":
      if ((Zl(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = ll(r);
            if (!l) throw Error(y(90));
            us(r), Zl(r, l);
          }
        }
      }
      break;
    case "textarea":
      as(e, t);
      break;
    case "select":
      (n = t.value), n != null && Qn(e, !!t.multiple, n, !1);
  }
};
gs = Eo;
vs = zn;
var Cf = { usingClientEntryPoint: !1, Events: [Zt, Un, ll, ms, hs, Eo] },
  gt = { findFiberByHostInstance: wn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
  _f = {
    bundleType: gt.bundleType,
    version: gt.version,
    rendererPackageName: gt.rendererPackageName,
    rendererConfig: gt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ws(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gt.findFiberByHostInstance || Ef,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (el = gr.inject(_f)), (Ie = gr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cf;
ye.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!To(n)) throw Error(y(200));
  return Nf(e, n, null, t);
};
ye.createRoot = function (e, n) {
  if (!To(e)) throw Error(y(299));
  var t = !1,
    r = "",
    l = qa;
  return (
    n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Po(e, 1, !1, null, null, t, !1, r, l)),
    (e[Qe] = n.current),
    Ut(e.nodeType === 8 ? e.parentNode : e),
    new Lo(n)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0) throw typeof e.render == "function" ? Error(y(188)) : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = ws(n)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return zn(e);
};
ye.hydrate = function (e, n, t) {
  if (!pl(n)) throw Error(y(200));
  return ml(null, e, n, !0, t);
};
ye.hydrateRoot = function (e, n, t) {
  if (!To(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = "",
    o = qa;
  if (
    (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = Ja(n, null, e, 1, t ?? null, l, !1, i, o)),
    (e[Qe] = n.current),
    Ut(e),
    r)
  )
    for (e = 0; e < r.length; e++) (t = r[e]), (l = t._getVersion), (l = l(t._source)), n.mutableSourceEagerHydrationData == null ? (n.mutableSourceEagerHydrationData = [t, l]) : n.mutableSourceEagerHydrationData.push(t, l);
  return new fl(n);
};
ye.render = function (e, n, t) {
  if (!pl(n)) throw Error(y(200));
  return ml(null, e, n, !1, t);
};
ye.unmountComponentAtNode = function (e) {
  if (!pl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (zn(function () {
        ml(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qe] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = Eo;
ye.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!pl(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return ml(e, n, t, !1, r);
};
ye.version = "18.3.1-next-f1338f8080-20240426";
function ba() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ba);
    } catch (e) {
      console.error(e);
    }
}
ba(), (bu.exports = ye);
var Pf = bu.exports,
  ec,
  Bu = Pf;
(ec = Bu.createRoot), Bu.hydrateRoot;
function zf() {
  return c.jsx("div", {
    className: "bg-primary px-4 py-3 text-white",
    children: c.jsxs("p", { className: "text-center text-sm font-medium", children: ["Butuh website yang menakjubkan?", c.jsx("a", { href: "#service", className: "inline-block underline", children: "Lihat layanan desain kami!" })] }),
  });
}
function Lf() {
  return c.jsx("section", {
    id: "home",
    className: "bg-gray-50",
    children: c.jsx("div", {
      className: "mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center",
      children: c.jsxs("div", {
        className: "mx-auto max-w-xl text-center",
        children: [
          c.jsxs("h1", { className: "text-3xl font-extrabold sm:text-5xl", children: ["Website impian Anda,", c.jsx("strong", { className: "font-extrabold text-red-700 sm:block", children: " Mulai dari nol. " })] }),
          c.jsx("p", { className: "mt-4 sm:text-xl/relaxed", children: "Dengan harga yang terjangkau, Anda bisa mendapatkan website yang berkualitas." }),
          c.jsxs("div", {
            className: "mt-8 flex flex-wrap justify-center gap-4 px-32 sm:px-0",
            children: [
              c.jsx("a", {
                className: "block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto",
                href: "#contact",
                children: "Konsultasi Gratis Sekarang!",
              }),
              c.jsx("a", { className: "block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto", href: "#service", children: "Pilih Paket!" }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Tf() {
  const e = (n) => {
    n.preventDefault();
  };
  return c.jsx("section", {
    id: "about",
    children: c.jsx("div", {
      className: "max-w-screen-xl px-4 py-12 sm:px-6 lg:mx-auto lg:py-48 lg:flex lg:items-center",
      children: c.jsxs("div", {
        className: "grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16",
        children: [
          c.jsxs("div", {
            className: "mx-auto max-w-lg text-center lg:mx-auto ltr:lg:text-left rtl:lg:text-right",
            children: [
              c.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "Mengapa Memilih Kami?" }),
              c.jsx("p", {
                className: "mt-4 text-gray-600",
                children:
                  "Bosan dengan tampilan website yang itu-itu saja? Kami siap membantu Anda menciptakan website yang unik, menarik, dan efektif. Tim kami yang berpengalaman akan merancang website yang tidak hanya indah secara visual, tetapi juga mudah digunakan dan SEO friendly.",
              }),
              c.jsx("a", {
                href: "#contact",
                className: "mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-yellow-400",
                children: "Konsultasi Gratis Sekarang!",
              }),
            ],
          }),
          c.jsxs("div", {
            className: "grid grid-cols-2 gap-4 sm:grid-cols-2",
            children: [
              c.jsxs("a", {
                className: "block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring",
                href: "#",
                onClick: e,
                children: [
                  c.jsx("span", {
                    className: "inline-block rounded-lg bg-gray-50 p-3",
                    children: c.jsxs("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.4rem",
                      height: "1.4rem",
                      viewBox: "0 0 512 512",
                      children: [
                        c.jsx("rect", { width: "512", height: "512", fill: "none" }),
                        c.jsx("path", {
                          fill: "black",
                          d: "m368.4 18.3l-55.7 55.8l125.2 125.2l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2l-46-46.1c-21.9-21.9-57.3-21.9-79.2 0M288 94.6l-9.2 2.8l-144.1 43.2c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4l153.6-153.5c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1l2.7-9.2z",
                        }),
                      ],
                    }),
                  }),
                  c.jsx("h2", { className: "mt-2 font-bold sm:text-xl", children: "Desain Kreatif" }),
                  c.jsx("p", { className: "hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 lg:text-base", children: "Kami akan menciptakan desain yang sesuai dengan branding bisnis Anda." }),
                ],
              }),
              c.jsxs("a", {
                className: "block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring",
                href: "#",
                onClick: e,
                children: [
                  c.jsx("span", {
                    className: "inline-block rounded-lg bg-gray-50 p-3",
                    children: c.jsxs("svg", {
                      className: "size-6",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.4rem",
                      height: "1.4rem",
                      viewBox: "0 0 24 24",
                      children: [
                        c.jsx("rect", { width: "512", height: "512", fill: "none" }),
                        c.jsx("path", {
                          fill: "black",
                          d: "M2 6c.55 0 1-.45 1-1V4c0-.55.45-1 1-1h1c.55 0 1-.45 1-1s-.45-1-1-1H4C2.34 1 1 2.34 1 4v1c0 .55.45 1 1 1m3 15H4c-.55 0-1-.45-1-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1c0 1.66 1.34 3 3 3h1c.55 0 1-.45 1-1s-.45-1-1-1M20 1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1 .45 1 1v1c0 .55.45 1 1 1s1-.45 1-1V4c0-1.66-1.34-3-3-3m2 17c-.55 0-1 .45-1 1v1c0 .55-.45 1-1 1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c1.66 0 3-1.34 3-3v-1c0-.55-.45-1-1-1m-3-3.13V9.13c0-.72-.38-1.38-1-1.73l-5-2.88c-.31-.18-.65-.27-1-.27s-.69.09-1 .27L6 7.39c-.62.36-1 1.02-1 1.74v5.74c0 .72.38 1.38 1 1.73l5 2.88c.31.18.65.27 1 .27s.69-.09 1-.27l5-2.88c.62-.35 1-1.01 1-1.73m-8 2.3l-4-2.3v-4.63l4 2.33zm1-6.33L8.04 8.53L12 6.25l3.96 2.28zm5 4.03l-4 2.3v-4.6l4-2.33z",
                        }),
                      ],
                    }),
                  }),
                  c.jsx("h2", { className: "mt-2 font-bold sm:text-xl", children: "Teknologi Terbaru" }),
                  c.jsx("p", { className: "hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 lg:text-base", children: "Website Anda akan dibangun dengan teknologi terkini untuk memastikan kinerja yang optimal." }),
                ],
              }),
              c.jsxs("a", {
                className: "block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring",
                href: "#",
                onClick: e,
                children: [
                  c.jsx("span", {
                    className: "inline-block rounded-lg bg-gray-50 p-3",
                    children: c.jsx("svg", {
                      className: "size-6",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.4rem",
                      height: "1.4rem",
                      viewBox: "0 0 24 24",
                      children: c.jsxs("g", {
                        fill: "none",
                        children: [
                          c.jsx("circle", { cx: 12, cy: 9, r: 3, fill: "black" }),
                          c.jsx("path", {
                            fill: "black",
                            fillRule: "evenodd",
                            d: "M17.451 15.908a.24.24 0 0 1-.067.304A8.96 8.96 0 0 1 12 18a8.96 8.96 0 0 1-5.384-1.788a.24.24 0 0 1-.067-.304C7.499 14.192 9.582 13 12 13s4.501 1.191 5.451 2.908",
                            clipRule: "evenodd",
                          }),
                          c.jsx("path", {
                            stroke: "black",
                            strokeLinecap: "round",
                            strokeWidth: 2,
                            d: "M17 4h.502c1.211 0 1.817 0 2.281.232a2.2 2.2 0 0 1 .985.985C21 5.68 21 6.287 21 7.498V8m-4 12h.502c1.211 0 1.817 0 2.281-.232a2.2 2.2 0 0 0 .985-.985c.232-.464.232-1.07.232-2.281V16M7 4h-.502c-1.211 0-1.817 0-2.281.232a2.2 2.2 0 0 0-.985.985C3 5.68 3 6.287 3 7.498V8m4 12h-.502c-1.211 0-1.817 0-2.281-.232a2.2 2.2 0 0 1-.985-.985C3 18.32 3 17.713 3 16.502V16",
                          }),
                        ],
                      }),
                    }),
                  }),
                  c.jsx("h2", { className: "mt-2 font-bold sm:text-xl", children: "Fokus pada Pengguna" }),
                  c.jsx("p", { className: "hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 lg:text-base", children: "Kami mendesain website dengan mempertimbangkan pengalaman pengguna yang optimal." }),
                ],
              }),
              c.jsxs("a", {
                className: "block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring",
                href: "#",
                onClick: e,
                children: [
                  c.jsx("span", {
                    className: "inline-block rounded-lg bg-gray-50 p-3",
                    children: c.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.4rem",
                      height: "1.4rem",
                      viewBox: "0 0 24 24",
                      children: c.jsxs("g", {
                        fill: "none",
                        stroke: "black",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        children: [
                          c.jsx("path", { d: "M9 14c0 1.657 2.686 3 6 3s6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3" }),
                          c.jsx("path", { d: "M9 14v4c0 1.656 2.686 3 6 3s6-1.344 6-3v-4M3 6c0 1.072 1.144 2.062 3 2.598s4.144.536 6 0S15 7.072 15 6s-1.144-2.062-3-2.598s-4.144-.536-6 0S3 4.928 3 6" }),
                          c.jsx("path", { d: "M3 6v10c0 .888.772 1.45 2 2" }),
                          c.jsx("path", { d: "M3 11c0 .888.772 1.45 2 2" }),
                        ],
                      }),
                    }),
                  }),
                  c.jsx("h2", { className: "mt-2 font-bold sm:text-xl", children: "Harga Terjangkau" }),
                  c.jsx("p", { className: "hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 lg:text-base", children: "Kami menawarkan paket yang fleksibel dengan harga yang kompetitif." }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Mf() {
  return c.jsx("section", {
    id: "service",
    children: c.jsxs("div", {
      className: "mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-48",
      children: [
        c.jsx("div", {
          className: "text-center pb-12",
          children: c.jsx("h2", {
            className: "text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl",
            children: c.jsxs("span", { className: "text-gray-900", children: ["Pilih ", c.jsx("span", { className: "text-primary", children: "Paket " }), " yang anda inginkan"] }),
          }),
        }),
        c.jsxs("div", {
          className: "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8",
          children: [
            c.jsxs("div", {
              className: "rounded-2xl border border-primary p-6 shadow-sm ring-1 ring-primary sm:order-last sm:px-8 lg:p-12",
              children: [
                c.jsxs("div", {
                  className: "text-center",
                  children: [
                    c.jsxs("h2", { className: "text-lg font-medium text-gray-900", children: ["Pro", c.jsx("span", { className: "sr-only", children: "Plan" })] }),
                    c.jsxs("p", {
                      className: "flex flex-col mt-2 sm:mt-4",
                      children: [
                        c.jsx("span", { className: "mt-2 text-gray-600 line-through text-lg", children: "Rp. 899.000" }),
                        c.jsxs("strong", { className: "text-3xl font-bold text-gray-900 sm:text-4xl", children: ["Rp. 500.", c.jsx("sup", { className: "text-xl", children: "000" })] }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("ul", {
                  className: "mt-6 space-y-2",
                  children: [
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " Free Hosting " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " Domain .com " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " 3 Email Domain " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " Responsive Design " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " Diiklankan di Google " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " Perpanjang Rp. 300.000 / Tahun " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " Dukungan teknis melalui chat " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-transparent",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " (2x dalam seminggu) " }),
                      ],
                    }),
                  ],
                }),
                c.jsx("a", {
                  href: "#contact",
                  className:
                    "mt-8 block rounded-full border border-primary bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:bg-red-700 hover:ring-1 hover:ring-red-700 focus:outline-none focus:ring active:text-red-500",
                  children: "Pesan Sekarang",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12",
              children: [
                c.jsxs("div", {
                  className: "text-center",
                  children: [
                    c.jsxs("h2", { className: "text-lg font-medium text-gray-900", children: ["Basic", c.jsx("span", { className: "sr-only", children: "Plan" })] }),
                    c.jsxs("p", {
                      className: "flex flex-col mt-2 sm:mt-4",
                      children: [
                        c.jsx("span", { className: "mt-2 text-gray-600 line-through text-lg", children: "Rp. 799.000" }),
                        c.jsxs("strong", { className: "text-3xl font-bold text-gray-900 sm:text-4xl", children: ["Rp. 400.", c.jsx("sup", { className: "text-xl", children: "000" })] }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("ul", {
                  className: "mt-6 space-y-2",
                  children: [
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " Free Hosting " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " Domain .com " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " 3 Email Domain " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " Responsive Design " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " Perpanjang Rp. 300.000 / Tahun " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-red-700",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " Dukungan teknis melalui Chat " }),
                      ],
                    }),
                    c.jsxs("li", {
                      className: "flex items-center gap-1",
                      children: [
                        c.jsx("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "size-5 text-transparent",
                          children: c.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" }),
                        }),
                        c.jsx("span", { className: "text-gray-700", children: " (1x dalam seminggu) " }),
                      ],
                    }),
                  ],
                }),
                c.jsx("a", {
                  href: "#contact",
                  className: "mt-8 block rounded-full border border-primary bg-white px-12 py-3 text-center text-sm font-medium text-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring active:text-red-500",
                  children: "Pesan Sekarang",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Rf() {
  return c.jsx("section", {
    id: "contact",
    className: "bg-white dark:bg-gray-900",
    children: c.jsxs("div", {
      className: "container flex flex-col items-center px-4 py-12 mx-auto text-center",
      children: [
        c.jsx("h2", { className: "text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white", children: "Pesan dan Hubungi kami sekarang." }),
        c.jsx("p", {
          className: "block max-w-4xl mt-4 text-gray-500 dark:text-gray-300",
          children:
            "Kami tidak terafiliasi dengan pihak ketiga mana pun. Hal ini memungkinkan kami memberikan rekomendasi yang objektif dan tidak memihak, sehingga Anda dapat yakin mendapatkan solusi yang paling tepat untuk website bisnis Anda.",
        }),
        c.jsxs("div", {
          className: "mt-6",
          children: [
            c.jsxs("a", {
              href: "#",
              className:
                "inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80",
              children: [
                c.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "1.4rem",
                  height: "1.4rem",
                  viewBox: "0 0 24 24",
                  children: c.jsx("path", { fill: "white", d: "M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z" }),
                }),
                c.jsx("span", { className: "mx-2", children: "Hubungi Sekarang!" }),
              ],
            }),
            c.jsxs("a", {
              href: "#",
              className:
                "inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80",
              children: [
                c.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "1.4rem",
                  height: "1.4rem",
                  viewBox: "0 0 24 24",
                  children: c.jsx("path", {
                    fill: "white",
                    d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01",
                  }),
                }),
                c.jsx("span", { className: "mx-2", children: "Konsultasi Sekarang!" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Df() {
  return c.jsx("footer", {
    id: "footer",
    className: "bg-gray-900",
    children: c.jsx("div", {
      className: "mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8",
      children: c.jsxs("div", {
        className: "sm:flex sm:items-center sm:justify-between",
        children: [
          c.jsx("div", { className: "flex justify-center sm:justify-start text-white", children: c.jsx("a", { href: "#", className: "font-bold text-lg", children: "punyaweb.com" }) }),
          c.jsx("p", { className: "mt-4 text-center text-sm  lg:mt-0 lg:text-right text-gray-400", children: "Copyright © 2022. All rights reserved." }),
        ],
      }),
    }),
  });
}
function Of() {
  return c.jsx("section", {
    children: c.jsxs("div", {
      className: "mx-auto max-w-max px-6 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-48",
      children: [
        c.jsx("div", {
          className: "text-center pb-12",
          children: c.jsx("h2", {
            className: "text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl",
            children: c.jsxs("span", { className: "text-gray-900", children: [c.jsx("span", { className: "text-primary", children: "Syarat " }), " & ketentuan"] }),
          }),
        }),
        c.jsxs("ul", {
          className: "w-full",
          children: [
            c.jsx("li", { className: "w-full border-b-2 border-secondary border-opacity-100 py-4", children: "Pembayaran dilakukan dua tahap: 50% di muka saat proyek dimulai dan sisanya setelah proyek selesai." }),
            c.jsx("li", { className: "w-full border-b-2 border-secondary border-opacity-100 py-4", children: "Harga sudah termasuk domain dan hosting untuk 1 tahun." }),
            c.jsx("li", { className: "w-full border-b-2 border-secondary border-opacity-100 py-4", children: "Perpanjangan domain dan hosting tahun berikutnya sebesar Rp300.000. Harga dapat berubah sewaktu-waktu." }),
            c.jsx("li", { className: "w-full border-b-2 border-secondary border-opacity-100 py-4", children: "Jika Anda sudah memiliki domain dan hosting, akan ada potongan harga sebesar Rp150.000." }),
            c.jsx("li", { className: "w-full border-b-2 border-secondary border-opacity-100 py-4", children: "Konten website tidak boleh mengandung unsur yang melanggar hukum seperti pornografi, perjudian, atau money game." }),
            c.jsx("li", { className: "w-full border-b-2 border-secondary border-opacity-100 py-4", children: "Website dibangun secara custom menggunakan script program sehingga dapat disesuaikan dengan kebutuhan Anda." }),
            c.jsx("li", { className: "w-full border-b-2 border-secondary border-opacity-100 py-4", children: "Waktu pengerjaan dapat bervariasi tergantung kompleksitas proyek." }),
            c.jsx("li", { className: "w-full border-b-2 border-secondary border-opacity-100 py-4", children: "Kami menyediakan backup data internal, namun Anda disarankan untuk melakukan backup secara mandiri." }),
            c.jsx("li", { className: "w-full py-4", children: "Dengan memesan jasa kami, Anda setuju dengan semua syarat dan ketentuan yang berlaku." }),
          ],
        }),
      ],
    }),
  });
}
function Ff() {
  return c.jsxs(c.Fragment, { children: [c.jsx(zf, {}), c.jsx(Lf, {}), c.jsx(Tf, {}), c.jsx(Mf, {}), c.jsx(Of, {}), c.jsx(Rf, {}), c.jsx(Df, {})] });
}
ec(document.getElementById("root")).render(c.jsx(Ai.StrictMode, { children: c.jsx(Ff, {}) }));
