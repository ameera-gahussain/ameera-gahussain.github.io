function uf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var sf =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function af(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ts = { exports: {} },
  Sl = {},
  Ls = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fr = Symbol.for("react.element"),
  cf = Symbol.for("react.portal"),
  ff = Symbol.for("react.fragment"),
  df = Symbol.for("react.strict_mode"),
  pf = Symbol.for("react.profiler"),
  mf = Symbol.for("react.provider"),
  hf = Symbol.for("react.context"),
  vf = Symbol.for("react.forward_ref"),
  gf = Symbol.for("react.suspense"),
  yf = Symbol.for("react.memo"),
  wf = Symbol.for("react.lazy"),
  fu = Symbol.iterator;
function Sf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fu && e[fu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var js = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zs = Object.assign,
  Os = {};
function Cn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Os),
    (this.updater = n || js);
}
Cn.prototype.isReactComponent = {};
Cn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Cn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Fs() {}
Fs.prototype = Cn.prototype;
function ai(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Os),
    (this.updater = n || js);
}
var ci = (ai.prototype = new Fs());
ci.constructor = ai;
zs(ci, Cn.prototype);
ci.isPureReactComponent = !0;
var du = Array.isArray,
  Ms = Object.prototype.hasOwnProperty,
  fi = { current: null },
  Rs = { key: !0, ref: !0, __self: !0, __source: !0 };
function _s(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ms.call(t, r) && !Rs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: fr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: fi.current,
  };
}
function kf(e, t) {
  return {
    $$typeof: fr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function di(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fr;
}
function xf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pu = /\/+/g;
function Ul(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? xf("" + e.key)
    : t.toString(36);
}
function Ar(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case fr:
          case cf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Ul(i, 0) : r),
      du(l)
        ? ((n = ""),
          e != null && (n = e.replace(pu, "$&/") + "/"),
          Ar(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (di(l) &&
            (l = kf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(pu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), du(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Ul(o, u);
      i += Ar(o, t, n, s, l);
    }
  else if (((s = Sf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Ul(o, u++)), (i += Ar(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Sr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ar(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Ef(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var he = { current: null },
  Dr = { transition: null },
  Cf = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: Dr,
    ReactCurrentOwner: fi,
  };
function Is() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = {
  map: Sr,
  forEach: function (e, t, n) {
    Sr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!di(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
D.Component = Cn;
D.Fragment = ff;
D.Profiler = pf;
D.PureComponent = ai;
D.StrictMode = df;
D.Suspense = gf;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cf;
D.act = Is;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = zs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = fi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Ms.call(t, s) &&
        !Rs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: fr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: hf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: mf, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = _s;
D.createFactory = function (e) {
  var t = _s.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: vf, render: e };
};
D.isValidElement = di;
D.lazy = function (e) {
  return { $$typeof: wf, _payload: { _status: -1, _result: e }, _init: Ef };
};
D.memo = function (e, t) {
  return { $$typeof: yf, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = Dr.transition;
  Dr.transition = {};
  try {
    e();
  } finally {
    Dr.transition = t;
  }
};
D.unstable_act = Is;
D.useCallback = function (e, t) {
  return he.current.useCallback(e, t);
};
D.useContext = function (e) {
  return he.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return he.current.useEffect(e, t);
};
D.useId = function () {
  return he.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return he.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return he.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return he.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return he.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return he.current.useRef(e);
};
D.useState = function (e) {
  return he.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return he.current.useTransition();
};
D.version = "18.3.1";
Ls.exports = D;
var re = Ls.exports;
const As = af(re),
  Nf = uf({ __proto__: null, default: As }, [re]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pf = re,
  Tf = Symbol.for("react.element"),
  Lf = Symbol.for("react.fragment"),
  jf = Object.prototype.hasOwnProperty,
  zf = Pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Of = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ds(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) jf.call(t, r) && !Of.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Tf,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: zf.current,
  };
}
Sl.Fragment = Lf;
Sl.jsx = Ds;
Sl.jsxs = Ds;
Ts.exports = Sl;
var g = Ts.exports,
  mo = {},
  Us = { exports: {} },
  Te = {},
  Bs = { exports: {} },
  Ws = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, _) {
    var I = N.length;
    N.push(_);
    e: for (; 0 < I; ) {
      var Q = (I - 1) >>> 1,
        Z = N[Q];
      if (0 < l(Z, _)) (N[Q] = _), (N[I] = Z), (I = Q);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var _ = N[0],
      I = N.pop();
    if (I !== _) {
      N[0] = I;
      e: for (var Q = 0, Z = N.length, Ft = Z >>> 1; Q < Ft; ) {
        var He = 2 * (Q + 1) - 1,
          Mt = N[He],
          Ve = He + 1,
          Ze = N[Ve];
        if (0 > l(Mt, I))
          Ve < Z && 0 > l(Ze, Mt)
            ? ((N[Q] = Ze), (N[Ve] = I), (Q = Ve))
            : ((N[Q] = Mt), (N[He] = I), (Q = He));
        else if (Ve < Z && 0 > l(Ze, I)) (N[Q] = Ze), (N[Ve] = I), (Q = Ve);
        else break e;
      }
    }
    return _;
  }
  function l(N, _) {
    var I = N.sortIndex - _.sortIndex;
    return I !== 0 ? I : N.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    f = [],
    v = 1,
    h = null,
    m = 3,
    S = !1,
    x = !1,
    k = !1,
    M = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var _ = n(f); _ !== null; ) {
      if (_.callback === null) r(f);
      else if (_.startTime <= N)
        r(f), (_.sortIndex = _.expirationTime), t(s, _);
      else break;
      _ = n(f);
    }
  }
  function y(N) {
    if (((k = !1), p(N), !x))
      if (n(s) !== null) (x = !0), zt(C);
      else {
        var _ = n(f);
        _ !== null && Ot(y, _.startTime - N);
      }
  }
  function C(N, _) {
    (x = !1), k && ((k = !1), d(F), (F = -1)), (S = !0);
    var I = m;
    try {
      for (
        p(_), h = n(s);
        h !== null && (!(h.expirationTime > _) || (N && !se()));

      ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var Z = Q(h.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof Z == "function" ? (h.callback = Z) : h === n(s) && r(s),
            p(_);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var Ft = !0;
      else {
        var He = n(f);
        He !== null && Ot(y, He.startTime - _), (Ft = !1);
      }
      return Ft;
    } finally {
      (h = null), (m = I), (S = !1);
    }
  }
  var O = !1,
    z = null,
    F = -1,
    T = 5,
    A = -1;
  function se() {
    return !(e.unstable_now() - A < T);
  }
  function xe() {
    if (z !== null) {
      var N = e.unstable_now();
      A = N;
      var _ = !0;
      try {
        _ = z(!0, N);
      } finally {
        _ ? Xe() : ((O = !1), (z = null));
      }
    } else O = !1;
  }
  var Xe;
  if (typeof c == "function")
    Xe = function () {
      c(xe);
    };
  else if (typeof MessageChannel < "u") {
    var st = new MessageChannel(),
      Zt = st.port2;
    (st.port1.onmessage = xe),
      (Xe = function () {
        Zt.postMessage(null);
      });
  } else
    Xe = function () {
      M(xe, 0);
    };
  function zt(N) {
    (z = N), O || ((O = !0), Xe());
  }
  function Ot(N, _) {
    F = M(function () {
      N(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || S || ((x = !0), zt(C));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = m;
      }
      var I = m;
      m = _;
      try {
        return N();
      } finally {
        m = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, _) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var I = m;
      m = N;
      try {
        return _();
      } finally {
        m = I;
      }
    }),
    (e.unstable_scheduleCallback = function (N, _, I) {
      var Q = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? Q + I : Q))
          : (I = Q),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = I + Z),
        (N = {
          id: v++,
          callback: _,
          priorityLevel: N,
          startTime: I,
          expirationTime: Z,
          sortIndex: -1,
        }),
        I > Q
          ? ((N.sortIndex = I),
            t(f, N),
            n(s) === null &&
              N === n(f) &&
              (k ? (d(F), (F = -1)) : (k = !0), Ot(y, I - Q)))
          : ((N.sortIndex = Z), t(s, N), x || S || ((x = !0), zt(C))),
        N
      );
    }),
    (e.unstable_shouldYield = se),
    (e.unstable_wrapCallback = function (N) {
      var _ = m;
      return function () {
        var I = m;
        m = _;
        try {
          return N.apply(this, arguments);
        } finally {
          m = I;
        }
      };
    });
})(Ws);
Bs.exports = Ws;
var Ff = Bs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mf = re,
  Pe = Ff;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Hs = new Set(),
  $n = {};
function $t(e, t) {
  gn(e, t), gn(e + "Capture", t);
}
function gn(e, t) {
  for ($n[e] = t, e = 0; e < t.length; e++) Hs.add(t[e]);
}
var rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ho = Object.prototype.hasOwnProperty,
  Rf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mu = {},
  hu = {};
function _f(e) {
  return ho.call(hu, e)
    ? !0
    : ho.call(mu, e)
    ? !1
    : Rf.test(e)
    ? (hu[e] = !0)
    : ((mu[e] = !0), !1);
}
function If(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Af(e, t, n, r) {
  if (t === null || typeof t > "u" || If(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ve(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ue[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ue[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ue[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ue[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ue[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pi = /[\-:]([a-z])/g;
function mi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pi, mi);
    ue[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pi, mi);
    ue[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(pi, mi);
  ue[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function hi(e, t, n, r) {
  var l = ue.hasOwnProperty(t) ? ue[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Af(t, n, l, r) && (n = null),
    r || l === null
      ? _f(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ut = Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kr = Symbol.for("react.element"),
  qt = Symbol.for("react.portal"),
  bt = Symbol.for("react.fragment"),
  vi = Symbol.for("react.strict_mode"),
  vo = Symbol.for("react.profiler"),
  Vs = Symbol.for("react.provider"),
  Qs = Symbol.for("react.context"),
  gi = Symbol.for("react.forward_ref"),
  go = Symbol.for("react.suspense"),
  yo = Symbol.for("react.suspense_list"),
  yi = Symbol.for("react.memo"),
  ft = Symbol.for("react.lazy"),
  Gs = Symbol.for("react.offscreen"),
  vu = Symbol.iterator;
function Tn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vu && e[vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $ = Object.assign,
  Bl;
function _n(e) {
  if (Bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bl = (t && t[1]) || "";
    }
  return (
    `
` +
    Bl +
    e
  );
}
var Wl = !1;
function Hl(e, t) {
  if (!e || Wl) return "";
  Wl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Wl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? _n(e) : "";
}
function Df(e) {
  switch (e.tag) {
    case 5:
      return _n(e.type);
    case 16:
      return _n("Lazy");
    case 13:
      return _n("Suspense");
    case 19:
      return _n("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Hl(e.type, !1)), e;
    case 11:
      return (e = Hl(e.type.render, !1)), e;
    case 1:
      return (e = Hl(e.type, !0)), e;
    default:
      return "";
  }
}
function wo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bt:
      return "Fragment";
    case qt:
      return "Portal";
    case vo:
      return "Profiler";
    case vi:
      return "StrictMode";
    case go:
      return "Suspense";
    case yo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Qs:
        return (e.displayName || "Context") + ".Consumer";
      case Vs:
        return (e._context.displayName || "Context") + ".Provider";
      case gi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case yi:
        return (
          (t = e.displayName || null), t !== null ? t : wo(e.type) || "Memo"
        );
      case ft:
        (t = e._payload), (e = e._init);
        try {
          return wo(e(t));
        } catch {}
    }
  return null;
}
function Uf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wo(t);
    case 8:
      return t === vi ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Nt(e) {
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
function Ks(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Bf(e) {
  var t = Ks(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xr(e) {
  e._valueTracker || (e._valueTracker = Bf(e));
}
function Ys(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ks(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function So(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Nt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function $s(e, t) {
  (t = t.checked), t != null && hi(e, "checked", t, !1);
}
function ko(e, t) {
  $s(e, t);
  var n = Nt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? xo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && xo(e, t.type, Nt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function xo(e, t, n) {
  (t !== "number" || Xr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var In = Array.isArray;
function fn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Nt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Eo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function wu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (In(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Nt(n) };
}
function Xs(e, t) {
  var n = Nt(t.value),
    r = Nt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Su(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Co(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Er,
  Js = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Er = Er || document.createElement("div"),
          Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Er.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Un = {
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
  Wf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Un).forEach(function (e) {
  Wf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Un[t] = Un[e]);
  });
});
function qs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Un.hasOwnProperty(e) && Un[e])
    ? ("" + t).trim()
    : t + "px";
}
function bs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = qs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Hf = $(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function No(e, t) {
  if (t) {
    if (Hf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function Po(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var To = null;
function wi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Lo = null,
  dn = null,
  pn = null;
function ku(e) {
  if ((e = mr(e))) {
    if (typeof Lo != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = Nl(t)), Lo(e.stateNode, e.type, t));
  }
}
function ea(e) {
  dn ? (pn ? pn.push(e) : (pn = [e])) : (dn = e);
}
function ta() {
  if (dn) {
    var e = dn,
      t = pn;
    if (((pn = dn = null), ku(e), t)) for (e = 0; e < t.length; e++) ku(t[e]);
  }
}
function na(e, t) {
  return e(t);
}
function ra() {}
var Vl = !1;
function la(e, t, n) {
  if (Vl) return e(t, n);
  Vl = !0;
  try {
    return na(e, t, n);
  } finally {
    (Vl = !1), (dn !== null || pn !== null) && (ra(), ta());
  }
}
function Zn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var jo = !1;
if (rt)
  try {
    var Ln = {};
    Object.defineProperty(Ln, "passive", {
      get: function () {
        jo = !0;
      },
    }),
      window.addEventListener("test", Ln, Ln),
      window.removeEventListener("test", Ln, Ln);
  } catch {
    jo = !1;
  }
function Vf(e, t, n, r, l, o, i, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (v) {
    this.onError(v);
  }
}
var Bn = !1,
  Zr = null,
  Jr = !1,
  zo = null,
  Qf = {
    onError: function (e) {
      (Bn = !0), (Zr = e);
    },
  };
function Gf(e, t, n, r, l, o, i, u, s) {
  (Bn = !1), (Zr = null), Vf.apply(Qf, arguments);
}
function Kf(e, t, n, r, l, o, i, u, s) {
  if ((Gf.apply(this, arguments), Bn)) {
    if (Bn) {
      var f = Zr;
      (Bn = !1), (Zr = null);
    } else throw Error(w(198));
    Jr || ((Jr = !0), (zo = f));
  }
}
function Xt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function oa(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function xu(e) {
  if (Xt(e) !== e) throw Error(w(188));
}
function Yf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xt(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return xu(l), e;
        if (o === r) return xu(l), t;
        o = o.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function ia(e) {
  return (e = Yf(e)), e !== null ? ua(e) : null;
}
function ua(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ua(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sa = Pe.unstable_scheduleCallback,
  Eu = Pe.unstable_cancelCallback,
  $f = Pe.unstable_shouldYield,
  Xf = Pe.unstable_requestPaint,
  J = Pe.unstable_now,
  Zf = Pe.unstable_getCurrentPriorityLevel,
  Si = Pe.unstable_ImmediatePriority,
  aa = Pe.unstable_UserBlockingPriority,
  qr = Pe.unstable_NormalPriority,
  Jf = Pe.unstable_LowPriority,
  ca = Pe.unstable_IdlePriority,
  kl = null,
  Ye = null;
function qf(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function")
    try {
      Ye.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : td,
  bf = Math.log,
  ed = Math.LN2;
function td(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bf(e) / ed) | 0)) | 0;
}
var Cr = 64,
  Nr = 4194304;
function An(e) {
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
function br(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = An(u)) : ((o &= i), o !== 0 && (r = An(o)));
  } else (i = n & ~l), i !== 0 ? (r = An(i)) : o !== 0 && (r = An(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ue(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function nd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function rd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ue(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = nd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Oo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fa() {
  var e = Cr;
  return (Cr <<= 1), !(Cr & 4194240) && (Cr = 64), e;
}
function Ql(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ue(t)),
    (e[t] = n);
}
function ld(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ue(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ki(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var B = 0;
function da(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pa,
  xi,
  ma,
  ha,
  va,
  Fo = !1,
  Pr = [],
  gt = null,
  yt = null,
  wt = null,
  Jn = new Map(),
  qn = new Map(),
  pt = [],
  od =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Cu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gt = null;
      break;
    case "dragenter":
    case "dragleave":
      yt = null;
      break;
    case "mouseover":
    case "mouseout":
      wt = null;
      break;
    case "pointerover":
    case "pointerout":
      Jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qn.delete(t.pointerId);
  }
}
function jn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = mr(t)), t !== null && xi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function id(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (gt = jn(gt, e, t, n, r, l)), !0;
    case "dragenter":
      return (yt = jn(yt, e, t, n, r, l)), !0;
    case "mouseover":
      return (wt = jn(wt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Jn.set(o, jn(Jn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), qn.set(o, jn(qn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ga(e) {
  var t = At(e.target);
  if (t !== null) {
    var n = Xt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = oa(n)), t !== null)) {
          (e.blockedOn = t),
            va(e.priority, function () {
              ma(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ur(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (To = r), n.target.dispatchEvent(r), (To = null);
    } else return (t = mr(n)), t !== null && xi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Nu(e, t, n) {
  Ur(e) && n.delete(t);
}
function ud() {
  (Fo = !1),
    gt !== null && Ur(gt) && (gt = null),
    yt !== null && Ur(yt) && (yt = null),
    wt !== null && Ur(wt) && (wt = null),
    Jn.forEach(Nu),
    qn.forEach(Nu);
}
function zn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fo ||
      ((Fo = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, ud)));
}
function bn(e) {
  function t(l) {
    return zn(l, e);
  }
  if (0 < Pr.length) {
    zn(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
      var r = Pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    gt !== null && zn(gt, e),
      yt !== null && zn(yt, e),
      wt !== null && zn(wt, e),
      Jn.forEach(t),
      qn.forEach(t),
      n = 0;
    n < pt.length;
    n++
  )
    (r = pt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pt.length && ((n = pt[0]), n.blockedOn === null); )
    ga(n), n.blockedOn === null && pt.shift();
}
var mn = ut.ReactCurrentBatchConfig,
  el = !0;
function sd(e, t, n, r) {
  var l = B,
    o = mn.transition;
  mn.transition = null;
  try {
    (B = 1), Ei(e, t, n, r);
  } finally {
    (B = l), (mn.transition = o);
  }
}
function ad(e, t, n, r) {
  var l = B,
    o = mn.transition;
  mn.transition = null;
  try {
    (B = 4), Ei(e, t, n, r);
  } finally {
    (B = l), (mn.transition = o);
  }
}
function Ei(e, t, n, r) {
  if (el) {
    var l = Mo(e, t, n, r);
    if (l === null) eo(e, t, r, tl, n), Cu(e, r);
    else if (id(l, e, t, n, r)) r.stopPropagation();
    else if ((Cu(e, r), t & 4 && -1 < od.indexOf(e))) {
      for (; l !== null; ) {
        var o = mr(l);
        if (
          (o !== null && pa(o),
          (o = Mo(e, t, n, r)),
          o === null && eo(e, t, r, tl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else eo(e, t, r, null, n);
  }
}
var tl = null;
function Mo(e, t, n, r) {
  if (((tl = null), (e = wi(r)), (e = At(e)), e !== null))
    if (((t = Xt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = oa(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (tl = e), null;
}
function ya(e) {
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
      switch (Zf()) {
        case Si:
          return 1;
        case aa:
          return 4;
        case qr:
        case Jf:
          return 16;
        case ca:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ht = null,
  Ci = null,
  Br = null;
function wa() {
  if (Br) return Br;
  var e,
    t = Ci,
    n = t.length,
    r,
    l = "value" in ht ? ht.value : ht.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Br = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Wr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Tr() {
  return !0;
}
function Pu() {
  return !1;
}
function Le(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Tr
        : Pu),
      (this.isPropagationStopped = Pu),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Tr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Tr));
      },
      persist: function () {},
      isPersistent: Tr,
    }),
    t
  );
}
var Nn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ni = Le(Nn),
  pr = $({}, Nn, { view: 0, detail: 0 }),
  cd = Le(pr),
  Gl,
  Kl,
  On,
  xl = $({}, pr, {
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
    getModifierState: Pi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== On &&
            (On && e.type === "mousemove"
              ? ((Gl = e.screenX - On.screenX), (Kl = e.screenY - On.screenY))
              : (Kl = Gl = 0),
            (On = e)),
          Gl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Kl;
    },
  }),
  Tu = Le(xl),
  fd = $({}, xl, { dataTransfer: 0 }),
  dd = Le(fd),
  pd = $({}, pr, { relatedTarget: 0 }),
  Yl = Le(pd),
  md = $({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hd = Le(md),
  vd = $({}, Nn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gd = Le(vd),
  yd = $({}, Nn, { data: 0 }),
  Lu = Le(yd),
  wd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Sd = {
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
  kd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function xd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kd[e]) ? !!t[e] : !1;
}
function Pi() {
  return xd;
}
var Ed = $({}, pr, {
    key: function (e) {
      if (e.key) {
        var t = wd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pi,
    charCode: function (e) {
      return e.type === "keypress" ? Wr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Wr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Cd = Le(Ed),
  Nd = $({}, xl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ju = Le(Nd),
  Pd = $({}, pr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pi,
  }),
  Td = Le(Pd),
  Ld = $({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jd = Le(Ld),
  zd = $({}, xl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Od = Le(zd),
  Fd = [9, 13, 27, 32],
  Ti = rt && "CompositionEvent" in window,
  Wn = null;
rt && "documentMode" in document && (Wn = document.documentMode);
var Md = rt && "TextEvent" in window && !Wn,
  Sa = rt && (!Ti || (Wn && 8 < Wn && 11 >= Wn)),
  zu = " ",
  Ou = !1;
function ka(e, t) {
  switch (e) {
    case "keyup":
      return Fd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function xa(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function Rd(e, t) {
  switch (e) {
    case "compositionend":
      return xa(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ou = !0), zu);
    case "textInput":
      return (e = t.data), e === zu && Ou ? null : e;
    default:
      return null;
  }
}
function _d(e, t) {
  if (en)
    return e === "compositionend" || (!Ti && ka(e, t))
      ? ((e = wa()), (Br = Ci = ht = null), (en = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Sa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Id = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Id[e.type] : t === "textarea";
}
function Ea(e, t, n, r) {
  ea(r),
    (t = nl(t, "onChange")),
    0 < t.length &&
      ((n = new Ni("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Hn = null,
  er = null;
function Ad(e) {
  Ra(e, 0);
}
function El(e) {
  var t = rn(e);
  if (Ys(t)) return e;
}
function Dd(e, t) {
  if (e === "change") return t;
}
var Ca = !1;
if (rt) {
  var $l;
  if (rt) {
    var Xl = "oninput" in document;
    if (!Xl) {
      var Mu = document.createElement("div");
      Mu.setAttribute("oninput", "return;"),
        (Xl = typeof Mu.oninput == "function");
    }
    $l = Xl;
  } else $l = !1;
  Ca = $l && (!document.documentMode || 9 < document.documentMode);
}
function Ru() {
  Hn && (Hn.detachEvent("onpropertychange", Na), (er = Hn = null));
}
function Na(e) {
  if (e.propertyName === "value" && El(er)) {
    var t = [];
    Ea(t, er, e, wi(e)), la(Ad, t);
  }
}
function Ud(e, t, n) {
  e === "focusin"
    ? (Ru(), (Hn = t), (er = n), Hn.attachEvent("onpropertychange", Na))
    : e === "focusout" && Ru();
}
function Bd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return El(er);
}
function Wd(e, t) {
  if (e === "click") return El(t);
}
function Hd(e, t) {
  if (e === "input" || e === "change") return El(t);
}
function Vd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var We = typeof Object.is == "function" ? Object.is : Vd;
function tr(e, t) {
  if (We(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ho.call(t, l) || !We(e[l], t[l])) return !1;
  }
  return !0;
}
function _u(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Iu(e, t) {
  var n = _u(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _u(n);
  }
}
function Pa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Pa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ta() {
  for (var e = window, t = Xr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xr(e.document);
  }
  return t;
}
function Li(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Qd(e) {
  var t = Ta(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Pa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Li(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Iu(n, o));
        var i = Iu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Gd = rt && "documentMode" in document && 11 >= document.documentMode,
  tn = null,
  Ro = null,
  Vn = null,
  _o = !1;
function Au(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _o ||
    tn == null ||
    tn !== Xr(r) ||
    ((r = tn),
    "selectionStart" in r && Li(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Vn && tr(Vn, r)) ||
      ((Vn = r),
      (r = nl(Ro, "onSelect")),
      0 < r.length &&
        ((t = new Ni("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tn))));
}
function Lr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var nn = {
    animationend: Lr("Animation", "AnimationEnd"),
    animationiteration: Lr("Animation", "AnimationIteration"),
    animationstart: Lr("Animation", "AnimationStart"),
    transitionend: Lr("Transition", "TransitionEnd"),
  },
  Zl = {},
  La = {};
rt &&
  ((La = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nn.animationend.animation,
    delete nn.animationiteration.animation,
    delete nn.animationstart.animation),
  "TransitionEvent" in window || delete nn.transitionend.transition);
function Cl(e) {
  if (Zl[e]) return Zl[e];
  if (!nn[e]) return e;
  var t = nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in La) return (Zl[e] = t[n]);
  return e;
}
var ja = Cl("animationend"),
  za = Cl("animationiteration"),
  Oa = Cl("animationstart"),
  Fa = Cl("transitionend"),
  Ma = new Map(),
  Du =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Tt(e, t) {
  Ma.set(e, t), $t(t, [e]);
}
for (var Jl = 0; Jl < Du.length; Jl++) {
  var ql = Du[Jl],
    Kd = ql.toLowerCase(),
    Yd = ql[0].toUpperCase() + ql.slice(1);
  Tt(Kd, "on" + Yd);
}
Tt(ja, "onAnimationEnd");
Tt(za, "onAnimationIteration");
Tt(Oa, "onAnimationStart");
Tt("dblclick", "onDoubleClick");
Tt("focusin", "onFocus");
Tt("focusout", "onBlur");
Tt(Fa, "onTransitionEnd");
gn("onMouseEnter", ["mouseout", "mouseover"]);
gn("onMouseLeave", ["mouseout", "mouseover"]);
gn("onPointerEnter", ["pointerout", "pointerover"]);
gn("onPointerLeave", ["pointerout", "pointerover"]);
$t(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
$t(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
$t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$t(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
$t(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
$t(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Dn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $d = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));
function Uu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Kf(r, t, void 0, e), (e.currentTarget = null);
}
function Ra(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          Uu(l, u, f), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          Uu(l, u, f), (o = s);
        }
    }
  }
  if (Jr) throw ((e = zo), (Jr = !1), (zo = null), e);
}
function H(e, t) {
  var n = t[Bo];
  n === void 0 && (n = t[Bo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (_a(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  t && (r |= 4), _a(n, e, r, t);
}
var jr = "_reactListening" + Math.random().toString(36).slice(2);
function nr(e) {
  if (!e[jr]) {
    (e[jr] = !0),
      Hs.forEach(function (n) {
        n !== "selectionchange" && ($d.has(n) || bl(n, !1, e), bl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jr] || ((t[jr] = !0), bl("selectionchange", !1, t));
  }
}
function _a(e, t, n, r) {
  switch (ya(t)) {
    case 1:
      var l = sd;
      break;
    case 4:
      l = ad;
      break;
    default:
      l = Ei;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !jo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function eo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = At(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  la(function () {
    var f = o,
      v = wi(n),
      h = [];
    e: {
      var m = Ma.get(e);
      if (m !== void 0) {
        var S = Ni,
          x = e;
        switch (e) {
          case "keypress":
            if (Wr(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Cd;
            break;
          case "focusin":
            (x = "focus"), (S = Yl);
            break;
          case "focusout":
            (x = "blur"), (S = Yl);
            break;
          case "beforeblur":
          case "afterblur":
            S = Yl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Tu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Td;
            break;
          case ja:
          case za:
          case Oa:
            S = hd;
            break;
          case Fa:
            S = jd;
            break;
          case "scroll":
            S = cd;
            break;
          case "wheel":
            S = Od;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = gd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = ju;
        }
        var k = (t & 4) !== 0,
          M = !k && e === "scroll",
          d = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var c = f, p; c !== null; ) {
          p = c;
          var y = p.stateNode;
          if (
            (p.tag === 5 &&
              y !== null &&
              ((p = y),
              d !== null && ((y = Zn(c, d)), y != null && k.push(rr(c, y, p)))),
            M)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((m = new S(m, x, null, n, v)), h.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          m &&
            n !== To &&
            (x = n.relatedTarget || n.fromElement) &&
            (At(x) || x[lt]))
        )
          break e;
        if (
          (S || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          S
            ? ((x = n.relatedTarget || n.toElement),
              (S = f),
              (x = x ? At(x) : null),
              x !== null &&
                ((M = Xt(x)), x !== M || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((S = null), (x = f)),
          S !== x)
        ) {
          if (
            ((k = Tu),
            (y = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = ju),
              (y = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (M = S == null ? m : rn(S)),
            (p = x == null ? m : rn(x)),
            (m = new k(y, c + "leave", S, n, v)),
            (m.target = M),
            (m.relatedTarget = p),
            (y = null),
            At(v) === f &&
              ((k = new k(d, c + "enter", x, n, v)),
              (k.target = p),
              (k.relatedTarget = M),
              (y = k)),
            (M = y),
            S && x)
          )
            t: {
              for (k = S, d = x, c = 0, p = k; p; p = Jt(p)) c++;
              for (p = 0, y = d; y; y = Jt(y)) p++;
              for (; 0 < c - p; ) (k = Jt(k)), c--;
              for (; 0 < p - c; ) (d = Jt(d)), p--;
              for (; c--; ) {
                if (k === d || (d !== null && k === d.alternate)) break t;
                (k = Jt(k)), (d = Jt(d));
              }
              k = null;
            }
          else k = null;
          S !== null && Bu(h, m, S, k, !1),
            x !== null && M !== null && Bu(h, M, x, k, !0);
        }
      }
      e: {
        if (
          ((m = f ? rn(f) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === "select" || (S === "input" && m.type === "file"))
        )
          var C = Dd;
        else if (Fu(m))
          if (Ca) C = Hd;
          else {
            C = Bd;
            var O = Ud;
          }
        else
          (S = m.nodeName) &&
            S.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = Wd);
        if (C && (C = C(e, f))) {
          Ea(h, C, n, v);
          break e;
        }
        O && O(e, m, f),
          e === "focusout" &&
            (O = m._wrapperState) &&
            O.controlled &&
            m.type === "number" &&
            xo(m, "number", m.value);
      }
      switch (((O = f ? rn(f) : window), e)) {
        case "focusin":
          (Fu(O) || O.contentEditable === "true") &&
            ((tn = O), (Ro = f), (Vn = null));
          break;
        case "focusout":
          Vn = Ro = tn = null;
          break;
        case "mousedown":
          _o = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_o = !1), Au(h, n, v);
          break;
        case "selectionchange":
          if (Gd) break;
        case "keydown":
        case "keyup":
          Au(h, n, v);
      }
      var z;
      if (Ti)
        e: {
          switch (e) {
            case "compositionstart":
              var F = "onCompositionStart";
              break e;
            case "compositionend":
              F = "onCompositionEnd";
              break e;
            case "compositionupdate":
              F = "onCompositionUpdate";
              break e;
          }
          F = void 0;
        }
      else
        en
          ? ka(e, n) && (F = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
      F &&
        (Sa &&
          n.locale !== "ko" &&
          (en || F !== "onCompositionStart"
            ? F === "onCompositionEnd" && en && (z = wa())
            : ((ht = v),
              (Ci = "value" in ht ? ht.value : ht.textContent),
              (en = !0))),
        (O = nl(f, F)),
        0 < O.length &&
          ((F = new Lu(F, e, null, n, v)),
          h.push({ event: F, listeners: O }),
          z ? (F.data = z) : ((z = xa(n)), z !== null && (F.data = z)))),
        (z = Md ? Rd(e, n) : _d(e, n)) &&
          ((f = nl(f, "onBeforeInput")),
          0 < f.length &&
            ((v = new Lu("onBeforeInput", "beforeinput", null, n, v)),
            h.push({ event: v, listeners: f }),
            (v.data = z)));
    }
    Ra(h, t);
  });
}
function rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Zn(e, n)),
      o != null && r.unshift(rr(e, o, l)),
      (o = Zn(e, t)),
      o != null && r.push(rr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Jt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((s = Zn(n, o)), s != null && i.unshift(rr(n, s, u)))
        : l || ((s = Zn(n, o)), s != null && i.push(rr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Xd = /\r\n?/g,
  Zd = /\u0000|\uFFFD/g;
function Wu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Xd,
      `
`
    )
    .replace(Zd, "");
}
function zr(e, t, n) {
  if (((t = Wu(t)), Wu(e) !== t && n)) throw Error(w(425));
}
function rl() {}
var Io = null,
  Ao = null;
function Do(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Uo = typeof setTimeout == "function" ? setTimeout : void 0,
  Jd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hu = typeof Promise == "function" ? Promise : void 0,
  qd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hu < "u"
      ? function (e) {
          return Hu.resolve(null).then(e).catch(bd);
        }
      : Uo;
function bd(e) {
  setTimeout(function () {
    throw e;
  });
}
function to(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), bn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  bn(t);
}
function St(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Vu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Pn = Math.random().toString(36).slice(2),
  Ke = "__reactFiber$" + Pn,
  lr = "__reactProps$" + Pn,
  lt = "__reactContainer$" + Pn,
  Bo = "__reactEvents$" + Pn,
  e0 = "__reactListeners$" + Pn,
  t0 = "__reactHandles$" + Pn;
function At(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[lt] || n[Ke])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vu(e); e !== null; ) {
          if ((n = e[Ke])) return n;
          e = Vu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function mr(e) {
  return (
    (e = e[Ke] || e[lt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function Nl(e) {
  return e[lr] || null;
}
var Wo = [],
  ln = -1;
function Lt(e) {
  return { current: e };
}
function V(e) {
  0 > ln || ((e.current = Wo[ln]), (Wo[ln] = null), ln--);
}
function W(e, t) {
  ln++, (Wo[ln] = e.current), (e.current = t);
}
var Pt = {},
  de = Lt(Pt),
  we = Lt(!1),
  Vt = Pt;
function yn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Se(e) {
  return (e = e.childContextTypes), e != null;
}
function ll() {
  V(we), V(de);
}
function Qu(e, t, n) {
  if (de.current !== Pt) throw Error(w(168));
  W(de, t), W(we, n);
}
function Ia(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, Uf(e) || "Unknown", l));
  return $({}, n, r);
}
function ol(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pt),
    (Vt = de.current),
    W(de, e),
    W(we, we.current),
    !0
  );
}
function Gu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = Ia(e, t, Vt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(we),
      V(de),
      W(de, e))
    : V(we),
    W(we, n);
}
var be = null,
  Pl = !1,
  no = !1;
function Aa(e) {
  be === null ? (be = [e]) : be.push(e);
}
function n0(e) {
  (Pl = !0), Aa(e);
}
function jt() {
  if (!no && be !== null) {
    no = !0;
    var e = 0,
      t = B;
    try {
      var n = be;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (be = null), (Pl = !1);
    } catch (l) {
      throw (be !== null && (be = be.slice(e + 1)), sa(Si, jt), l);
    } finally {
      (B = t), (no = !1);
    }
  }
  return null;
}
var on = [],
  un = 0,
  il = null,
  ul = 0,
  je = [],
  ze = 0,
  Qt = null,
  et = 1,
  tt = "";
function _t(e, t) {
  (on[un++] = ul), (on[un++] = il), (il = e), (ul = t);
}
function Da(e, t, n) {
  (je[ze++] = et), (je[ze++] = tt), (je[ze++] = Qt), (Qt = e);
  var r = et;
  e = tt;
  var l = 32 - Ue(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ue(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (et = (1 << (32 - Ue(t) + l)) | (n << l) | r),
      (tt = o + e);
  } else (et = (1 << o) | (n << l) | r), (tt = e);
}
function ji(e) {
  e.return !== null && (_t(e, 1), Da(e, 1, 0));
}
function zi(e) {
  for (; e === il; )
    (il = on[--un]), (on[un] = null), (ul = on[--un]), (on[un] = null);
  for (; e === Qt; )
    (Qt = je[--ze]),
      (je[ze] = null),
      (tt = je[--ze]),
      (je[ze] = null),
      (et = je[--ze]),
      (je[ze] = null);
}
var Ne = null,
  Ce = null,
  G = !1,
  De = null;
function Ua(e, t) {
  var n = Oe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ku(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ne = e), (Ce = St(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ne = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qt !== null ? { id: et, overflow: tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Oe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ne = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ho(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vo(e) {
  if (G) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!Ku(e, t)) {
        if (Ho(e)) throw Error(w(418));
        t = St(n.nextSibling);
        var r = Ne;
        t && Ku(e, t)
          ? Ua(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (Ne = e));
      }
    } else {
      if (Ho(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (Ne = e);
    }
  }
}
function Yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ne = e;
}
function Or(e) {
  if (e !== Ne) return !1;
  if (!G) return Yu(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Do(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (Ho(e)) throw (Ba(), Error(w(418)));
    for (; t; ) Ua(e, t), (t = St(t.nextSibling));
  }
  if ((Yu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = St(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = Ne ? St(e.stateNode.nextSibling) : null;
  return !0;
}
function Ba() {
  for (var e = Ce; e; ) e = St(e.nextSibling);
}
function wn() {
  (Ce = Ne = null), (G = !1);
}
function Oi(e) {
  De === null ? (De = [e]) : De.push(e);
}
var r0 = ut.ReactCurrentBatchConfig;
function Fn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Fr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function $u(e) {
  var t = e._init;
  return t(e._payload);
}
function Wa(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = Ct(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, p, y) {
    return c === null || c.tag !== 6
      ? ((c = ao(p, d.mode, y)), (c.return = d), c)
      : ((c = l(c, p)), (c.return = d), c);
  }
  function s(d, c, p, y) {
    var C = p.type;
    return C === bt
      ? v(d, c, p.props.children, y, p.key)
      : c !== null &&
        (c.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === ft &&
            $u(C) === c.type))
      ? ((y = l(c, p.props)), (y.ref = Fn(d, c, p)), (y.return = d), y)
      : ((y = $r(p.type, p.key, p.props, null, d.mode, y)),
        (y.ref = Fn(d, c, p)),
        (y.return = d),
        y);
  }
  function f(d, c, p, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = co(p, d.mode, y)), (c.return = d), c)
      : ((c = l(c, p.children || [])), (c.return = d), c);
  }
  function v(d, c, p, y, C) {
    return c === null || c.tag !== 7
      ? ((c = Ht(p, d.mode, y, C)), (c.return = d), c)
      : ((c = l(c, p)), (c.return = d), c);
  }
  function h(d, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ao("" + c, d.mode, p)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case kr:
          return (
            (p = $r(c.type, c.key, c.props, null, d.mode, p)),
            (p.ref = Fn(d, null, c)),
            (p.return = d),
            p
          );
        case qt:
          return (c = co(c, d.mode, p)), (c.return = d), c;
        case ft:
          var y = c._init;
          return h(d, y(c._payload), p);
      }
      if (In(c) || Tn(c))
        return (c = Ht(c, d.mode, p, null)), (c.return = d), c;
      Fr(d, c);
    }
    return null;
  }
  function m(d, c, p, y) {
    var C = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return C !== null ? null : u(d, c, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case kr:
          return p.key === C ? s(d, c, p, y) : null;
        case qt:
          return p.key === C ? f(d, c, p, y) : null;
        case ft:
          return (C = p._init), m(d, c, C(p._payload), y);
      }
      if (In(p) || Tn(p)) return C !== null ? null : v(d, c, p, y, null);
      Fr(d, p);
    }
    return null;
  }
  function S(d, c, p, y, C) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (d = d.get(p) || null), u(c, d, "" + y, C);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case kr:
          return (d = d.get(y.key === null ? p : y.key) || null), s(c, d, y, C);
        case qt:
          return (d = d.get(y.key === null ? p : y.key) || null), f(c, d, y, C);
        case ft:
          var O = y._init;
          return S(d, c, p, O(y._payload), C);
      }
      if (In(y) || Tn(y)) return (d = d.get(p) || null), v(c, d, y, C, null);
      Fr(c, y);
    }
    return null;
  }
  function x(d, c, p, y) {
    for (
      var C = null, O = null, z = c, F = (c = 0), T = null;
      z !== null && F < p.length;
      F++
    ) {
      z.index > F ? ((T = z), (z = null)) : (T = z.sibling);
      var A = m(d, z, p[F], y);
      if (A === null) {
        z === null && (z = T);
        break;
      }
      e && z && A.alternate === null && t(d, z),
        (c = o(A, c, F)),
        O === null ? (C = A) : (O.sibling = A),
        (O = A),
        (z = T);
    }
    if (F === p.length) return n(d, z), G && _t(d, F), C;
    if (z === null) {
      for (; F < p.length; F++)
        (z = h(d, p[F], y)),
          z !== null &&
            ((c = o(z, c, F)), O === null ? (C = z) : (O.sibling = z), (O = z));
      return G && _t(d, F), C;
    }
    for (z = r(d, z); F < p.length; F++)
      (T = S(z, d, F, p[F], y)),
        T !== null &&
          (e && T.alternate !== null && z.delete(T.key === null ? F : T.key),
          (c = o(T, c, F)),
          O === null ? (C = T) : (O.sibling = T),
          (O = T));
    return (
      e &&
        z.forEach(function (se) {
          return t(d, se);
        }),
      G && _t(d, F),
      C
    );
  }
  function k(d, c, p, y) {
    var C = Tn(p);
    if (typeof C != "function") throw Error(w(150));
    if (((p = C.call(p)), p == null)) throw Error(w(151));
    for (
      var O = (C = null), z = c, F = (c = 0), T = null, A = p.next();
      z !== null && !A.done;
      F++, A = p.next()
    ) {
      z.index > F ? ((T = z), (z = null)) : (T = z.sibling);
      var se = m(d, z, A.value, y);
      if (se === null) {
        z === null && (z = T);
        break;
      }
      e && z && se.alternate === null && t(d, z),
        (c = o(se, c, F)),
        O === null ? (C = se) : (O.sibling = se),
        (O = se),
        (z = T);
    }
    if (A.done) return n(d, z), G && _t(d, F), C;
    if (z === null) {
      for (; !A.done; F++, A = p.next())
        (A = h(d, A.value, y)),
          A !== null &&
            ((c = o(A, c, F)), O === null ? (C = A) : (O.sibling = A), (O = A));
      return G && _t(d, F), C;
    }
    for (z = r(d, z); !A.done; F++, A = p.next())
      (A = S(z, d, F, A.value, y)),
        A !== null &&
          (e && A.alternate !== null && z.delete(A.key === null ? F : A.key),
          (c = o(A, c, F)),
          O === null ? (C = A) : (O.sibling = A),
          (O = A));
    return (
      e &&
        z.forEach(function (xe) {
          return t(d, xe);
        }),
      G && _t(d, F),
      C
    );
  }
  function M(d, c, p, y) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === bt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case kr:
          e: {
            for (var C = p.key, O = c; O !== null; ) {
              if (O.key === C) {
                if (((C = p.type), C === bt)) {
                  if (O.tag === 7) {
                    n(d, O.sibling),
                      (c = l(O, p.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  O.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === ft &&
                    $u(C) === O.type)
                ) {
                  n(d, O.sibling),
                    (c = l(O, p.props)),
                    (c.ref = Fn(d, O, p)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, O);
                break;
              } else t(d, O);
              O = O.sibling;
            }
            p.type === bt
              ? ((c = Ht(p.props.children, d.mode, y, p.key)),
                (c.return = d),
                (d = c))
              : ((y = $r(p.type, p.key, p.props, null, d.mode, y)),
                (y.ref = Fn(d, c, p)),
                (y.return = d),
                (d = y));
          }
          return i(d);
        case qt:
          e: {
            for (O = p.key; c !== null; ) {
              if (c.key === O)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = co(p, d.mode, y)), (c.return = d), (d = c);
          }
          return i(d);
        case ft:
          return (O = p._init), M(d, c, O(p._payload), y);
      }
      if (In(p)) return x(d, c, p, y);
      if (Tn(p)) return k(d, c, p, y);
      Fr(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, p)), (c.return = d), (d = c))
          : (n(d, c), (c = ao(p, d.mode, y)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return M;
}
var Sn = Wa(!0),
  Ha = Wa(!1),
  sl = Lt(null),
  al = null,
  sn = null,
  Fi = null;
function Mi() {
  Fi = sn = al = null;
}
function Ri(e) {
  var t = sl.current;
  V(sl), (e._currentValue = t);
}
function Qo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function hn(e, t) {
  (al = e),
    (Fi = sn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ye = !0), (e.firstContext = null));
}
function Me(e) {
  var t = e._currentValue;
  if (Fi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), sn === null)) {
      if (al === null) throw Error(w(308));
      (sn = e), (al.dependencies = { lanes: 0, firstContext: e });
    } else sn = sn.next = e;
  return t;
}
var Dt = null;
function _i(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function Va(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), _i(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    ot(e, r)
  );
}
function ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var dt = !1;
function Ii(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Qa(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      ot(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), _i(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    ot(e, n)
  );
}
function Hr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ki(e, n);
  }
}
function Xu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function cl(e, t, n, r) {
  var l = e.updateQueue;
  dt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      f = s.next;
    (s.next = null), i === null ? (o = f) : (i.next = f), (i = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== i &&
        (u === null ? (v.firstBaseUpdate = f) : (u.next = f),
        (v.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var h = l.baseState;
    (i = 0), (v = f = s = null), (u = o);
    do {
      var m = u.lane,
        S = u.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            k = u;
          switch (((m = t), (S = n), k.tag)) {
            case 1:
              if (((x = k.payload), typeof x == "function")) {
                h = x.call(S, h, m);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = k.payload),
                (m = typeof x == "function" ? x.call(S, h, m) : x),
                m == null)
              )
                break e;
              h = $({}, h, m);
              break e;
            case 2:
              dt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (S = {
          eventTime: S,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((f = v = S), (s = h)) : (v = v.next = S),
          (i |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Kt |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function Zu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(w(191, l));
        l.call(r);
      }
    }
}
var hr = {},
  $e = Lt(hr),
  or = Lt(hr),
  ir = Lt(hr);
function Ut(e) {
  if (e === hr) throw Error(w(174));
  return e;
}
function Ai(e, t) {
  switch ((W(ir, t), W(or, e), W($e, hr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Co(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Co(t, e));
  }
  V($e), W($e, t);
}
function kn() {
  V($e), V(or), V(ir);
}
function Ga(e) {
  Ut(ir.current);
  var t = Ut($e.current),
    n = Co(t, e.type);
  t !== n && (W(or, e), W($e, n));
}
function Di(e) {
  or.current === e && (V($e), V(or));
}
var K = Lt(0);
function fl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ro = [];
function Ui() {
  for (var e = 0; e < ro.length; e++)
    ro[e]._workInProgressVersionPrimary = null;
  ro.length = 0;
}
var Vr = ut.ReactCurrentDispatcher,
  lo = ut.ReactCurrentBatchConfig,
  Gt = 0,
  Y = null,
  b = null,
  ne = null,
  dl = !1,
  Qn = !1,
  ur = 0,
  l0 = 0;
function ae() {
  throw Error(w(321));
}
function Bi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!We(e[n], t[n])) return !1;
  return !0;
}
function Wi(e, t, n, r, l, o) {
  if (
    ((Gt = o),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vr.current = e === null || e.memoizedState === null ? s0 : a0),
    (e = n(r, l)),
    Qn)
  ) {
    o = 0;
    do {
      if (((Qn = !1), (ur = 0), 25 <= o)) throw Error(w(301));
      (o += 1),
        (ne = b = null),
        (t.updateQueue = null),
        (Vr.current = c0),
        (e = n(r, l));
    } while (Qn);
  }
  if (
    ((Vr.current = pl),
    (t = b !== null && b.next !== null),
    (Gt = 0),
    (ne = b = Y = null),
    (dl = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function Hi() {
  var e = ur !== 0;
  return (ur = 0), e;
}
function Ge() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (Y.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function Re() {
  if (b === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = b.next;
  var t = ne === null ? Y.memoizedState : ne.next;
  if (t !== null) (ne = t), (b = e);
  else {
    if (e === null) throw Error(w(310));
    (b = e),
      (e = {
        memoizedState: b.memoizedState,
        baseState: b.baseState,
        baseQueue: b.baseQueue,
        queue: b.queue,
        next: null,
      }),
      ne === null ? (Y.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oo(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = b,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      f = o;
    do {
      var v = f.lane;
      if ((Gt & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var h = {
          lane: v,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
          (Y.lanes |= v),
          (Kt |= v);
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? (i = r) : (s.next = u),
      We(r, t.memoizedState) || (ye = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Y.lanes |= o), (Kt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function io(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    We(o, t.memoizedState) || (ye = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ka() {}
function Ya(e, t) {
  var n = Y,
    r = Re(),
    l = t(),
    o = !We(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ye = !0)),
    (r = r.queue),
    Vi(Za.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ar(9, Xa.bind(null, n, r, l, t), void 0, null),
      le === null)
    )
      throw Error(w(349));
    Gt & 30 || $a(n, t, l);
  }
  return l;
}
function $a(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ja(t) && qa(e);
}
function Za(e, t, n) {
  return n(function () {
    Ja(t) && qa(e);
  });
}
function Ja(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !We(e, n);
  } catch {
    return !0;
  }
}
function qa(e) {
  var t = ot(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function Ju(e) {
  var t = Ge();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = u0.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function ar(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ba() {
  return Re().memoizedState;
}
function Qr(e, t, n, r) {
  var l = Ge();
  (Y.flags |= e),
    (l.memoizedState = ar(1 | t, n, void 0, r === void 0 ? null : r));
}
function Tl(e, t, n, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (b !== null) {
    var i = b.memoizedState;
    if (((o = i.destroy), r !== null && Bi(r, i.deps))) {
      l.memoizedState = ar(t, n, o, r);
      return;
    }
  }
  (Y.flags |= e), (l.memoizedState = ar(1 | t, n, o, r));
}
function qu(e, t) {
  return Qr(8390656, 8, e, t);
}
function Vi(e, t) {
  return Tl(2048, 8, e, t);
}
function ec(e, t) {
  return Tl(4, 2, e, t);
}
function tc(e, t) {
  return Tl(4, 4, e, t);
}
function nc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function rc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Tl(4, 4, nc.bind(null, t, e), n)
  );
}
function Qi() {}
function lc(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function oc(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ic(e, t, n) {
  return Gt & 21
    ? (We(n, t) || ((n = fa()), (Y.lanes |= n), (Kt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function o0(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = lo.transition;
  lo.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (lo.transition = r);
  }
}
function uc() {
  return Re().memoizedState;
}
function i0(e, t, n) {
  var r = Et(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sc(e))
  )
    ac(t, n);
  else if (((n = Va(e, t, n, r)), n !== null)) {
    var l = me();
    Be(n, e, r, l), cc(n, t, r);
  }
}
function u0(e, t, n) {
  var r = Et(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sc(e)) ac(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), We(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), _i(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Va(e, t, l, r)),
      n !== null && ((l = me()), Be(n, e, r, l), cc(n, t, r));
  }
}
function sc(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function ac(e, t) {
  Qn = dl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function cc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ki(e, n);
  }
}
var pl = {
    readContext: Me,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1,
  },
  s0 = {
    readContext: Me,
    useCallback: function (e, t) {
      return (Ge().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Me,
    useEffect: qu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qr(4194308, 4, nc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ge();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ge();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = i0.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ge();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ju,
    useDebugValue: Qi,
    useDeferredValue: function (e) {
      return (Ge().memoizedState = e);
    },
    useTransition: function () {
      var e = Ju(!1),
        t = e[0];
      return (e = o0.bind(null, e[1])), (Ge().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        l = Ge();
      if (G) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(w(349));
        Gt & 30 || $a(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        qu(Za.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ar(9, Xa.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ge(),
        t = le.identifierPrefix;
      if (G) {
        var n = tt,
          r = et;
        (n = (r & ~(1 << (32 - Ue(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ur++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = l0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  a0 = {
    readContext: Me,
    useCallback: lc,
    useContext: Me,
    useEffect: Vi,
    useImperativeHandle: rc,
    useInsertionEffect: ec,
    useLayoutEffect: tc,
    useMemo: oc,
    useReducer: oo,
    useRef: ba,
    useState: function () {
      return oo(sr);
    },
    useDebugValue: Qi,
    useDeferredValue: function (e) {
      var t = Re();
      return ic(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = oo(sr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Ka,
    useSyncExternalStore: Ya,
    useId: uc,
    unstable_isNewReconciler: !1,
  },
  c0 = {
    readContext: Me,
    useCallback: lc,
    useContext: Me,
    useEffect: Vi,
    useImperativeHandle: rc,
    useInsertionEffect: ec,
    useLayoutEffect: tc,
    useMemo: oc,
    useReducer: io,
    useRef: ba,
    useState: function () {
      return io(sr);
    },
    useDebugValue: Qi,
    useDeferredValue: function (e) {
      var t = Re();
      return b === null ? (t.memoizedState = e) : ic(t, b.memoizedState, e);
    },
    useTransition: function () {
      var e = io(sr)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Ka,
    useSyncExternalStore: Ya,
    useId: uc,
    unstable_isNewReconciler: !1,
  };
function Ie(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Go(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ll = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      l = Et(e),
      o = nt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = kt(e, o, l)),
      t !== null && (Be(t, e, l, r), Hr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      l = Et(e),
      o = nt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = kt(e, o, l)),
      t !== null && (Be(t, e, l, r), Hr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = Et(e),
      l = nt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = kt(e, l, r)),
      t !== null && (Be(t, e, r, n), Hr(t, e, r));
  },
};
function bu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !tr(n, r) || !tr(l, o)
      : !0
  );
}
function fc(e, t, n) {
  var r = !1,
    l = Pt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Me(o))
      : ((l = Se(t) ? Vt : de.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? yn(e, l) : Pt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ll),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function es(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ll.enqueueReplaceState(t, t.state, null);
}
function Ko(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ii(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Me(o))
    : ((o = Se(t) ? Vt : de.current), (l.context = yn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Go(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ll.enqueueReplaceState(l, l.state, null),
      cl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function xn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Df(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function uo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var f0 = typeof WeakMap == "function" ? WeakMap : Map;
function dc(e, t, n) {
  (n = nt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      hl || ((hl = !0), (ri = r)), Yo(e, t);
    }),
    n
  );
}
function pc(e, t, n) {
  (n = nt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Yo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Yo(e, t),
          typeof r != "function" &&
            (xt === null ? (xt = new Set([this])) : xt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ts(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new f0();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = N0.bind(null, e, t, n)), t.then(e, e));
}
function ns(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = nt(-1, 1)), (t.tag = 2), kt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var d0 = ut.ReactCurrentOwner,
  ye = !1;
function pe(e, t, n, r) {
  t.child = e === null ? Ha(t, null, n, r) : Sn(t, e.child, n, r);
}
function ls(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    hn(t, l),
    (r = Wi(e, t, n, r, o, l)),
    (n = Hi()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        it(e, t, l))
      : (G && n && ji(t), (t.flags |= 1), pe(e, t, r, l), t.child)
  );
}
function os(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !qi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), mc(e, t, o, r, l))
      : ((e = $r(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : tr), n(i, r) && e.ref === t.ref)
    )
      return it(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function mc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (tr(o, r) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), it(e, t, l);
  }
  return $o(e, t, n, r, l);
}
function hc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(cn, Ee),
        (Ee |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(cn, Ee),
          (Ee |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        W(cn, Ee),
        (Ee |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(cn, Ee),
      (Ee |= r);
  return pe(e, t, l, n), t.child;
}
function vc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $o(e, t, n, r, l) {
  var o = Se(n) ? Vt : de.current;
  return (
    (o = yn(t, o)),
    hn(t, l),
    (n = Wi(e, t, n, r, o, l)),
    (r = Hi()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        it(e, t, l))
      : (G && r && ji(t), (t.flags |= 1), pe(e, t, n, l), t.child)
  );
}
function is(e, t, n, r, l) {
  if (Se(n)) {
    var o = !0;
    ol(t);
  } else o = !1;
  if ((hn(t, l), t.stateNode === null))
    Gr(e, t), fc(t, n, r), Ko(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = Me(f))
      : ((f = Se(n) ? Vt : de.current), (f = yn(t, f)));
    var v = n.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== f) && es(t, i, r, f)),
      (dt = !1);
    var m = t.memoizedState;
    (i.state = m),
      cl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || m !== s || we.current || dt
        ? (typeof v == "function" && (Go(t, n, v, r), (s = t.memoizedState)),
          (u = dt || bu(t, n, u, r, m, s, f))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = f),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Qa(e, t),
      (u = t.memoizedProps),
      (f = t.type === t.elementType ? u : Ie(t.type, u)),
      (i.props = f),
      (h = t.pendingProps),
      (m = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Me(s))
        : ((s = Se(n) ? Vt : de.current), (s = yn(t, s)));
    var S = n.getDerivedStateFromProps;
    (v =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && es(t, i, r, s)),
      (dt = !1),
      (m = t.memoizedState),
      (i.state = m),
      cl(t, r, i, l);
    var x = t.memoizedState;
    u !== h || m !== x || we.current || dt
      ? (typeof S == "function" && (Go(t, n, S, r), (x = t.memoizedState)),
        (f = dt || bu(t, n, f, r, m, x, s) || !1)
          ? (v ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = s),
        (r = f))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xo(e, t, n, r, o, l);
}
function Xo(e, t, n, r, l, o) {
  vc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Gu(t, n, !1), it(e, t, o);
  (r = t.stateNode), (d0.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Sn(t, e.child, null, o)), (t.child = Sn(t, null, u, o)))
      : pe(e, t, u, o),
    (t.memoizedState = r.state),
    l && Gu(t, n, !0),
    t.child
  );
}
function gc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qu(e, t.context, !1),
    Ai(e, t.containerInfo);
}
function us(e, t, n, r, l) {
  return wn(), Oi(l), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var Zo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Jo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yc(e, t, n) {
  var r = t.pendingProps,
    l = K.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    W(K, l & 1),
    e === null)
  )
    return (
      Vo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ol(i, r, 0, null)),
              (e = Ht(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Jo(n)),
              (t.memoizedState = Zo),
              e)
            : Gi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return p0(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Ct(u, o)) : ((o = Ht(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Jo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Zo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ct(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Gi(e, t) {
  return (
    (t = Ol({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Mr(e, t, n, r) {
  return (
    r !== null && Oi(r),
    Sn(t, e.child, null, n),
    (e = Gi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function p0(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = uo(Error(w(422)))), Mr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Ol({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Ht(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Sn(t, e.child, null, i),
        (t.child.memoizedState = Jo(i)),
        (t.memoizedState = Zo),
        o);
  if (!(t.mode & 1)) return Mr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(w(419))), (r = uo(o, r, void 0)), Mr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ye || u)) {
    if (((r = le), r !== null)) {
      switch (i & -i) {
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
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), ot(e, l), Be(r, e, l, -1));
    }
    return Ji(), (r = uo(Error(w(421)))), Mr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = P0.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ce = St(l.nextSibling)),
      (Ne = t),
      (G = !0),
      (De = null),
      e !== null &&
        ((je[ze++] = et),
        (je[ze++] = tt),
        (je[ze++] = Qt),
        (et = e.id),
        (tt = e.overflow),
        (Qt = t)),
      (t = Gi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ss(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Qo(e.return, t, n);
}
function so(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function wc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((pe(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ss(e, n, t);
        else if (e.tag === 19) ss(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && fl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          so(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && fl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        so(t, !0, n, null, o);
        break;
      case "together":
        so(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Gr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function it(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function m0(e, t, n) {
  switch (t.tag) {
    case 3:
      gc(t), wn();
      break;
    case 5:
      Ga(t);
      break;
    case 1:
      Se(t.type) && ol(t);
      break;
    case 4:
      Ai(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      W(sl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? yc(e, t, n)
          : (W(K, K.current & 1),
            (e = it(e, t, n)),
            e !== null ? e.sibling : null);
      W(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return wc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        W(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hc(e, t, n);
  }
  return it(e, t, n);
}
var Sc, qo, kc, xc;
Sc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
qo = function () {};
kc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ut($e.current);
    var o = null;
    switch (n) {
      case "input":
        (l = So(e, l)), (r = So(e, r)), (o = []);
        break;
      case "select":
        (l = $({}, l, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Eo(e, l)), (r = Eo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = rl);
    }
    No(n, r);
    var i;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            ($n.hasOwnProperty(f)
              ? o || (o = [])
              : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (
        ((u = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && s !== u && (s != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(f, n)), (n = s);
        else
          f === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(f, s))
            : f === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(f, "" + s)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              ($n.hasOwnProperty(f)
                ? (s != null && f === "onScroll" && H("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(f, s));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
xc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mn(e, t) {
  if (!G)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function h0(e, t, n) {
  var r = t.pendingProps;
  switch ((zi(t), t.tag)) {
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
      return ce(t), null;
    case 1:
      return Se(t.type) && ll(), ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        kn(),
        V(we),
        V(de),
        Ui(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Or(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (ii(De), (De = null)))),
        qo(e, t),
        ce(t),
        null
      );
    case 5:
      Di(t);
      var l = Ut(ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return ce(t), null;
        }
        if (((e = Ut($e.current)), Or(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ke] = t), (r[lr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Dn.length; l++) H(Dn[l], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              gu(r, o), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              wu(r, o), H("invalid", r);
          }
          No(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      zr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      zr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : $n.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              xr(r), yu(r, o, !0);
              break;
            case "textarea":
              xr(r), Su(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = rl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ke] = t),
            (e[lr] = r),
            Sc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Po(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Dn.length; l++) H(Dn[l], e);
                l = r;
                break;
              case "source":
                H("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (l = r);
                break;
              case "details":
                H("toggle", e), (l = r);
                break;
              case "input":
                gu(e, r), (l = So(e, r)), H("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = $({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                wu(e, r), (l = Eo(e, r)), H("invalid", e);
                break;
              default:
                l = r;
            }
            No(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? bs(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Js(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Xn(e, s)
                    : typeof s == "number" && Xn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    ($n.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && H("scroll", e)
                      : s != null && hi(e, o, s, i));
              }
            switch (n) {
              case "input":
                xr(e), yu(e, r, !1);
                break;
              case "textarea":
                xr(e), Su(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Nt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? fn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      fn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = rl);
            }
            switch (n) {
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
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ce(t), null;
    case 6:
      if (e && t.stateNode != null) xc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = Ut(ir.current)), Ut($e.current), Or(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (o = r.nodeValue !== n) && ((e = Ne), e !== null))
          )
            switch (e.tag) {
              case 3:
                zr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ke] = t),
            (t.stateNode = r);
      }
      return ce(t), null;
    case 13:
      if (
        (V(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Ce !== null && t.mode & 1 && !(t.flags & 128))
          Ba(), wn(), (t.flags |= 98560), (o = !1);
        else if (((o = Or(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(w(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(w(317));
            o[Ke] = t;
          } else
            wn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ce(t), (o = !1);
        } else De !== null && (ii(De), (De = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? ee === 0 && (ee = 3) : Ji())),
          t.updateQueue !== null && (t.flags |= 4),
          ce(t),
          null);
    case 4:
      return (
        kn(), qo(e, t), e === null && nr(t.stateNode.containerInfo), ce(t), null
      );
    case 10:
      return Ri(t.type._context), ce(t), null;
    case 17:
      return Se(t.type) && ll(), ce(t), null;
    case 19:
      if ((V(K), (o = t.memoizedState), o === null)) return ce(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Mn(o, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = fl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Mn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            J() > En &&
            ((t.flags |= 128), (r = !0), Mn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Mn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !G)
            )
              return ce(t), null;
          } else
            2 * J() - o.renderingStartTime > En &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Mn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = J()),
          (t.sibling = null),
          (n = K.current),
          W(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (ce(t), null);
    case 22:
    case 23:
      return (
        Zi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ee & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function v0(e, t) {
  switch ((zi(t), t.tag)) {
    case 1:
      return (
        Se(t.type) && ll(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        kn(),
        V(we),
        V(de),
        Ui(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Di(t), null;
    case 13:
      if ((V(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        wn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return V(K), null;
    case 4:
      return kn(), null;
    case 10:
      return Ri(t.type._context), null;
    case 22:
    case 23:
      return Zi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Rr = !1,
  fe = !1,
  g0 = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function an(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function bo(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var as = !1;
function y0(e, t) {
  if (((Io = el), (e = Ta()), Li(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            f = 0,
            v = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var S;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = i + l),
                h !== o || (r !== 0 && h.nodeType !== 3) || (s = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (S = h.firstChild) !== null;

            )
              (m = h), (h = S);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++f === l && (u = i),
                m === o && ++v === r && (s = i),
                (S = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = S;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ao = { focusedElem: e, selectionRange: n }, el = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var k = x.memoizedProps,
                    M = x.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Ie(t.type, k),
                      M
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (y) {
          X(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (x = as), (as = !1), x;
}
function Gn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && bo(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function jl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ei(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ec(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ec(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[lr], delete t[Bo], delete t[e0], delete t[t0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Cc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ti(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = rl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ti(e, t, n), e = e.sibling; e !== null; ) ti(e, t, n), (e = e.sibling);
}
function ni(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ni(e, t, n), e = e.sibling; e !== null; ) ni(e, t, n), (e = e.sibling);
}
var oe = null,
  Ae = !1;
function ct(e, t, n) {
  for (n = n.child; n !== null; ) Nc(e, t, n), (n = n.sibling);
}
function Nc(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function")
    try {
      Ye.onCommitFiberUnmount(kl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || an(n, t);
    case 6:
      var r = oe,
        l = Ae;
      (oe = null),
        ct(e, t, n),
        (oe = r),
        (Ae = l),
        oe !== null &&
          (Ae
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        (Ae
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? to(e.parentNode, n)
              : e.nodeType === 1 && to(e, n),
            bn(e))
          : to(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (l = Ae),
        (oe = n.stateNode.containerInfo),
        (Ae = !0),
        ct(e, t, n),
        (oe = r),
        (Ae = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && bo(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      ct(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (an(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          X(n, t, u);
        }
      ct(e, t, n);
      break;
    case 21:
      ct(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), ct(e, t, n), (fe = r))
        : ct(e, t, n);
      break;
    default:
      ct(e, t, n);
  }
}
function fs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new g0()),
      t.forEach(function (r) {
        var l = T0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function _e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (oe = u.stateNode), (Ae = !1);
              break e;
            case 3:
              (oe = u.stateNode.containerInfo), (Ae = !0);
              break e;
            case 4:
              (oe = u.stateNode.containerInfo), (Ae = !0);
              break e;
          }
          u = u.return;
        }
        if (oe === null) throw Error(w(160));
        Nc(o, i, l), (oe = null), (Ae = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (f) {
        X(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pc(t, e), (t = t.sibling);
}
function Pc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_e(t, e), Qe(e), r & 4)) {
        try {
          Gn(3, e, e.return), jl(3, e);
        } catch (k) {
          X(e, e.return, k);
        }
        try {
          Gn(5, e, e.return);
        } catch (k) {
          X(e, e.return, k);
        }
      }
      break;
    case 1:
      _e(t, e), Qe(e), r & 512 && n !== null && an(n, n.return);
      break;
    case 5:
      if (
        (_e(t, e),
        Qe(e),
        r & 512 && n !== null && an(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Xn(l, "");
        } catch (k) {
          X(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && $s(l, o),
              Po(u, i);
            var f = Po(u, o);
            for (i = 0; i < s.length; i += 2) {
              var v = s[i],
                h = s[i + 1];
              v === "style"
                ? bs(l, h)
                : v === "dangerouslySetInnerHTML"
                ? Js(l, h)
                : v === "children"
                ? Xn(l, h)
                : hi(l, v, h, f);
            }
            switch (u) {
              case "input":
                ko(l, o);
                break;
              case "textarea":
                Xs(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? fn(l, !!o.multiple, S, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? fn(l, !!o.multiple, o.defaultValue, !0)
                      : fn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[lr] = o;
          } catch (k) {
            X(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((_e(t, e), Qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (k) {
          X(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (_e(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          bn(t.containerInfo);
        } catch (k) {
          X(e, e.return, k);
        }
      break;
    case 4:
      _e(t, e), Qe(e);
      break;
    case 13:
      _e(t, e),
        Qe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            ($i = J())),
        r & 4 && fs(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (f = fe) || v), _e(t, e), (fe = f)) : _e(t, e),
        Qe(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !v && e.mode & 1)
        )
          for (j = e, v = e.child; v !== null; ) {
            for (h = j = v; j !== null; ) {
              switch (((m = j), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gn(4, m, m.return);
                  break;
                case 1:
                  an(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (k) {
                      X(r, n, k);
                    }
                  }
                  break;
                case 5:
                  an(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    ps(h);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (j = S)) : ps(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  f
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = qs("display", i)));
              } catch (k) {
                X(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = f ? "" : h.memoizedProps;
              } catch (k) {
                X(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      _e(t, e), Qe(e), r & 4 && fs(e);
      break;
    case 21:
      break;
    default:
      _e(t, e), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Cc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Xn(l, ""), (r.flags &= -33));
          var o = cs(e);
          ni(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = cs(e);
          ti(e, u, i);
          break;
        default:
          throw Error(w(161));
      }
    } catch (s) {
      X(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function w0(e, t, n) {
  (j = e), Tc(e);
}
function Tc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Rr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || fe;
        u = Rr;
        var f = fe;
        if (((Rr = i), (fe = s) && !f))
          for (j = l; j !== null; )
            (i = j),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ms(l)
                : s !== null
                ? ((s.return = i), (j = s))
                : ms(l);
        for (; o !== null; ) (j = o), Tc(o), (o = o.sibling);
        (j = l), (Rr = u), (fe = f);
      }
      ds(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (j = o)) : ds(e);
  }
}
function ds(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ie(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Zu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Zu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var v = f.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && bn(h);
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
              throw Error(w(163));
          }
        fe || (t.flags & 512 && ei(t));
      } catch (m) {
        X(t, t.return, m);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function ps(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function ms(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t);
          } catch (s) {
            X(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              X(t, l, s);
            }
          }
          var o = t.return;
          try {
            ei(t);
          } catch (s) {
            X(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ei(t);
          } catch (s) {
            X(t, i, s);
          }
      }
    } catch (s) {
      X(t, t.return, s);
    }
    if (t === e) {
      j = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (j = u);
      break;
    }
    j = t.return;
  }
}
var S0 = Math.ceil,
  ml = ut.ReactCurrentDispatcher,
  Ki = ut.ReactCurrentOwner,
  Fe = ut.ReactCurrentBatchConfig,
  U = 0,
  le = null,
  q = null,
  ie = 0,
  Ee = 0,
  cn = Lt(0),
  ee = 0,
  cr = null,
  Kt = 0,
  zl = 0,
  Yi = 0,
  Kn = null,
  ge = null,
  $i = 0,
  En = 1 / 0,
  qe = null,
  hl = !1,
  ri = null,
  xt = null,
  _r = !1,
  vt = null,
  vl = 0,
  Yn = 0,
  li = null,
  Kr = -1,
  Yr = 0;
function me() {
  return U & 6 ? J() : Kr !== -1 ? Kr : (Kr = J());
}
function Et(e) {
  return e.mode & 1
    ? U & 2 && ie !== 0
      ? ie & -ie
      : r0.transition !== null
      ? (Yr === 0 && (Yr = fa()), Yr)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ya(e.type))),
        e)
    : 1;
}
function Be(e, t, n, r) {
  if (50 < Yn) throw ((Yn = 0), (li = null), Error(w(185)));
  dr(e, n, r),
    (!(U & 2) || e !== le) &&
      (e === le && (!(U & 2) && (zl |= n), ee === 4 && mt(e, ie)),
      ke(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((En = J() + 500), Pl && jt()));
}
function ke(e, t) {
  var n = e.callbackNode;
  rd(e, t);
  var r = br(e, e === le ? ie : 0);
  if (r === 0)
    n !== null && Eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Eu(n), t === 1))
      e.tag === 0 ? n0(hs.bind(null, e)) : Aa(hs.bind(null, e)),
        qd(function () {
          !(U & 6) && jt();
        }),
        (n = null);
    else {
      switch (da(r)) {
        case 1:
          n = Si;
          break;
        case 4:
          n = aa;
          break;
        case 16:
          n = qr;
          break;
        case 536870912:
          n = ca;
          break;
        default:
          n = qr;
      }
      n = _c(n, Lc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Lc(e, t) {
  if (((Kr = -1), (Yr = 0), U & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (vn() && e.callbackNode !== n) return null;
  var r = br(e, e === le ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gl(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var o = zc();
    (le !== e || ie !== t) && ((qe = null), (En = J() + 500), Wt(e, t));
    do
      try {
        E0();
        break;
      } catch (u) {
        jc(e, u);
      }
    while (!0);
    Mi(),
      (ml.current = o),
      (U = l),
      q !== null ? (t = 0) : ((le = null), (ie = 0), (t = ee));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Oo(e)), l !== 0 && ((r = l), (t = oi(e, l)))), t === 1)
    )
      throw ((n = cr), Wt(e, 0), mt(e, r), ke(e, J()), n);
    if (t === 6) mt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !k0(l) &&
          ((t = gl(e, r)),
          t === 2 && ((o = Oo(e)), o !== 0 && ((r = o), (t = oi(e, o)))),
          t === 1))
      )
        throw ((n = cr), Wt(e, 0), mt(e, r), ke(e, J()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          It(e, ge, qe);
          break;
        case 3:
          if (
            (mt(e, r), (r & 130023424) === r && ((t = $i + 500 - J()), 10 < t))
          ) {
            if (br(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Uo(It.bind(null, e, ge, qe), t);
            break;
          }
          It(e, ge, qe);
          break;
        case 4:
          if ((mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ue(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * S0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Uo(It.bind(null, e, ge, qe), r);
            break;
          }
          It(e, ge, qe);
          break;
        case 5:
          It(e, ge, qe);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return ke(e, J()), e.callbackNode === n ? Lc.bind(null, e) : null;
}
function oi(e, t) {
  var n = Kn;
  return (
    e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256),
    (e = gl(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && ii(t)),
    e
  );
}
function ii(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function k0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!We(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function mt(e, t) {
  for (
    t &= ~Yi,
      t &= ~zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ue(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function hs(e) {
  if (U & 6) throw Error(w(327));
  vn();
  var t = br(e, 0);
  if (!(t & 1)) return ke(e, J()), null;
  var n = gl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oo(e);
    r !== 0 && ((t = r), (n = oi(e, r)));
  }
  if (n === 1) throw ((n = cr), Wt(e, 0), mt(e, t), ke(e, J()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    It(e, ge, qe),
    ke(e, J()),
    null
  );
}
function Xi(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((En = J() + 500), Pl && jt());
  }
}
function Yt(e) {
  vt !== null && vt.tag === 0 && !(U & 6) && vn();
  var t = U;
  U |= 1;
  var n = Fe.transition,
    r = B;
  try {
    if (((Fe.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Fe.transition = n), (U = t), !(U & 6) && jt();
  }
}
function Zi() {
  (Ee = cn.current), V(cn);
}
function Wt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jd(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((zi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ll();
          break;
        case 3:
          kn(), V(we), V(de), Ui();
          break;
        case 5:
          Di(r);
          break;
        case 4:
          kn();
          break;
        case 13:
          V(K);
          break;
        case 19:
          V(K);
          break;
        case 10:
          Ri(r.type._context);
          break;
        case 22:
        case 23:
          Zi();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (q = e = Ct(e.current, null)),
    (ie = Ee = t),
    (ee = 0),
    (cr = null),
    (Yi = zl = Kt = 0),
    (ge = Kn = null),
    Dt !== null)
  ) {
    for (t = 0; t < Dt.length; t++)
      if (((n = Dt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Dt = null;
  }
  return e;
}
function jc(e, t) {
  do {
    var n = q;
    try {
      if ((Mi(), (Vr.current = pl), dl)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        dl = !1;
      }
      if (
        ((Gt = 0),
        (ne = b = Y = null),
        (Qn = !1),
        (ur = 0),
        (Ki.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (cr = t), (q = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ie),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var f = s,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var S = ns(i);
          if (S !== null) {
            (S.flags &= -257),
              rs(S, i, u, o, t),
              S.mode & 1 && ts(o, f, t),
              (t = S),
              (s = f);
            var x = t.updateQueue;
            if (x === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ts(o, f, t), Ji();
              break e;
            }
            s = Error(w(426));
          }
        } else if (G && u.mode & 1) {
          var M = ns(i);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256),
              rs(M, i, u, o, t),
              Oi(xn(s, u));
            break e;
          }
        }
        (o = s = xn(s, u)),
          ee !== 4 && (ee = 2),
          Kn === null ? (Kn = [o]) : Kn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = dc(o, s, t);
              Xu(o, d);
              break e;
            case 1:
              u = s;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (xt === null || !xt.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = pc(o, u, t);
                Xu(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Fc(n);
    } catch (C) {
      (t = C), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function zc() {
  var e = ml.current;
  return (ml.current = pl), e === null ? pl : e;
}
function Ji() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    le === null || (!(Kt & 268435455) && !(zl & 268435455)) || mt(le, ie);
}
function gl(e, t) {
  var n = U;
  U |= 2;
  var r = zc();
  (le !== e || ie !== t) && ((qe = null), Wt(e, t));
  do
    try {
      x0();
      break;
    } catch (l) {
      jc(e, l);
    }
  while (!0);
  if ((Mi(), (U = n), (ml.current = r), q !== null)) throw Error(w(261));
  return (le = null), (ie = 0), ee;
}
function x0() {
  for (; q !== null; ) Oc(q);
}
function E0() {
  for (; q !== null && !$f(); ) Oc(q);
}
function Oc(e) {
  var t = Rc(e.alternate, e, Ee);
  (e.memoizedProps = e.pendingProps),
    t === null ? Fc(e) : (q = t),
    (Ki.current = null);
}
function Fc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = v0(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (q = null);
        return;
      }
    } else if (((n = h0(n, t, Ee)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function It(e, t, n) {
  var r = B,
    l = Fe.transition;
  try {
    (Fe.transition = null), (B = 1), C0(e, t, n, r);
  } finally {
    (Fe.transition = l), (B = r);
  }
  return null;
}
function C0(e, t, n, r) {
  do vn();
  while (vt !== null);
  if (U & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (ld(e, o),
    e === le && ((q = le = null), (ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _r ||
      ((_r = !0),
      _c(qr, function () {
        return vn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Fe.transition), (Fe.transition = null);
    var i = B;
    B = 1;
    var u = U;
    (U |= 4),
      (Ki.current = null),
      y0(e, n),
      Pc(n, e),
      Qd(Ao),
      (el = !!Io),
      (Ao = Io = null),
      (e.current = n),
      w0(n),
      Xf(),
      (U = u),
      (B = i),
      (Fe.transition = o);
  } else e.current = n;
  if (
    (_r && ((_r = !1), (vt = e), (vl = l)),
    (o = e.pendingLanes),
    o === 0 && (xt = null),
    qf(n.stateNode),
    ke(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (hl) throw ((hl = !1), (e = ri), (ri = null), e);
  return (
    vl & 1 && e.tag !== 0 && vn(),
    (o = e.pendingLanes),
    o & 1 ? (e === li ? Yn++ : ((Yn = 0), (li = e))) : (Yn = 0),
    jt(),
    null
  );
}
function vn() {
  if (vt !== null) {
    var e = da(vl),
      t = Fe.transition,
      n = B;
    try {
      if (((Fe.transition = null), (B = 16 > e ? 16 : e), vt === null))
        var r = !1;
      else {
        if (((e = vt), (vt = null), (vl = 0), U & 6)) throw Error(w(331));
        var l = U;
        for (U |= 4, j = e.current; j !== null; ) {
          var o = j,
            i = o.child;
          if (j.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (j = f; j !== null; ) {
                  var v = j;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gn(8, v, o);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (j = h);
                  else
                    for (; j !== null; ) {
                      v = j;
                      var m = v.sibling,
                        S = v.return;
                      if ((Ec(v), v === f)) {
                        j = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (j = m);
                        break;
                      }
                      j = S;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var M = k.sibling;
                    (k.sibling = null), (k = M);
                  } while (k !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (j = i);
          else
            e: for (; j !== null; ) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gn(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (j = d);
                break e;
              }
              j = o.return;
            }
        }
        var c = e.current;
        for (j = c; j !== null; ) {
          i = j;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (j = p);
          else
            e: for (i = c; j !== null; ) {
              if (((u = j), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jl(9, u);
                  }
                } catch (C) {
                  X(u, u.return, C);
                }
              if (u === i) {
                j = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (j = y);
                break e;
              }
              j = u.return;
            }
        }
        if (
          ((U = l), jt(), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        )
          try {
            Ye.onPostCommitFiberRoot(kl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Fe.transition = t);
    }
  }
  return !1;
}
function vs(e, t, n) {
  (t = xn(n, t)),
    (t = dc(e, t, 1)),
    (e = kt(e, t, 1)),
    (t = me()),
    e !== null && (dr(e, 1, t), ke(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) vs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (xt === null || !xt.has(r)))
        ) {
          (e = xn(n, e)),
            (e = pc(t, e, 1)),
            (t = kt(t, e, 1)),
            (e = me()),
            t !== null && (dr(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function N0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ie & n) === n &&
      (ee === 4 || (ee === 3 && (ie & 130023424) === ie && 500 > J() - $i)
        ? Wt(e, 0)
        : (Yi |= n)),
    ke(e, t);
}
function Mc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Nr), (Nr <<= 1), !(Nr & 130023424) && (Nr = 4194304))
      : (t = 1));
  var n = me();
  (e = ot(e, t)), e !== null && (dr(e, t, n), ke(e, n));
}
function P0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Mc(e, n);
}
function T0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), Mc(e, n);
}
var Rc;
Rc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), m0(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), G && t.flags & 1048576 && Da(t, ul, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Gr(e, t), (e = t.pendingProps);
      var l = yn(t, de.current);
      hn(t, n), (l = Wi(null, t, r, e, l, n));
      var o = Hi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Se(r) ? ((o = !0), ol(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ii(t),
            (l.updater = Ll),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ko(t, r, e, n),
            (t = Xo(null, t, r, !0, o, n)))
          : ((t.tag = 0), G && o && ji(t), pe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Gr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = j0(r)),
          (e = Ie(r, e)),
          l)
        ) {
          case 0:
            t = $o(null, t, r, e, n);
            break e;
          case 1:
            t = is(null, t, r, e, n);
            break e;
          case 11:
            t = ls(null, t, r, e, n);
            break e;
          case 14:
            t = os(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        $o(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        is(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((gc(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Qa(e, t),
          cl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = xn(Error(w(423)), t)), (t = us(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = xn(Error(w(424)), t)), (t = us(e, t, r, n, l));
            break e;
          } else
            for (
              Ce = St(t.stateNode.containerInfo.firstChild),
                Ne = t,
                G = !0,
                De = null,
                n = Ha(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((wn(), r === l)) {
            t = it(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ga(t),
        e === null && Vo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Do(r, l) ? (i = null) : o !== null && Do(r, o) && (t.flags |= 32),
        vc(e, t),
        pe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Vo(t), null;
    case 13:
      return yc(e, t, n);
    case 4:
      return (
        Ai(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Sn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        ls(e, t, r, l, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          W(sl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (We(o.value, i)) {
            if (o.children === l.children && !we.current) {
              t = it(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = nt(-1, n & -n)), (s.tag = 2);
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var v = f.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (f.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Qo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(w(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Qo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        pe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        hn(t, n),
        (l = Me(l)),
        (r = r(l)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ie(r, t.pendingProps)),
        (l = Ie(r.type, l)),
        os(e, t, r, l, n)
      );
    case 15:
      return mc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ie(r, l)),
        Gr(e, t),
        (t.tag = 1),
        Se(r) ? ((e = !0), ol(t)) : (e = !1),
        hn(t, n),
        fc(t, r, l),
        Ko(t, r, l, n),
        Xo(null, t, r, !0, e, n)
      );
    case 19:
      return wc(e, t, n);
    case 22:
      return hc(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function _c(e, t) {
  return sa(e, t);
}
function L0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Oe(e, t, n, r) {
  return new L0(e, t, n, r);
}
function qi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function j0(e) {
  if (typeof e == "function") return qi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gi)) return 11;
    if (e === yi) return 14;
  }
  return 2;
}
function Ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Oe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function $r(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) qi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case bt:
        return Ht(n.children, l, o, t);
      case vi:
        (i = 8), (l |= 8);
        break;
      case vo:
        return (
          (e = Oe(12, n, t, l | 2)), (e.elementType = vo), (e.lanes = o), e
        );
      case go:
        return (e = Oe(13, n, t, l)), (e.elementType = go), (e.lanes = o), e;
      case yo:
        return (e = Oe(19, n, t, l)), (e.elementType = yo), (e.lanes = o), e;
      case Gs:
        return Ol(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Vs:
              i = 10;
              break e;
            case Qs:
              i = 9;
              break e;
            case gi:
              i = 11;
              break e;
            case yi:
              i = 14;
              break e;
            case ft:
              (i = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Oe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ht(e, t, n, r) {
  return (e = Oe(7, e, r, t)), (e.lanes = n), e;
}
function Ol(e, t, n, r) {
  return (
    (e = Oe(22, e, r, t)),
    (e.elementType = Gs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ao(e, t, n) {
  return (e = Oe(6, e, null, t)), (e.lanes = n), e;
}
function co(e, t, n) {
  return (
    (t = Oe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function z0(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ql(0)),
    (this.expirationTimes = Ql(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ql(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function bi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new z0(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Oe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ii(o),
    e
  );
}
function O0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: qt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ic(e) {
  if (!e) return Pt;
  e = e._reactInternals;
  e: {
    if (Xt(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Se(n)) return Ia(e, n, t);
  }
  return t;
}
function Ac(e, t, n, r, l, o, i, u, s) {
  return (
    (e = bi(n, r, !0, e, l, o, i, u, s)),
    (e.context = Ic(null)),
    (n = e.current),
    (r = me()),
    (l = Et(n)),
    (o = nt(r, l)),
    (o.callback = t ?? null),
    kt(n, o, l),
    (e.current.lanes = l),
    dr(e, l, r),
    ke(e, r),
    e
  );
}
function Fl(e, t, n, r) {
  var l = t.current,
    o = me(),
    i = Et(l);
  return (
    (n = Ic(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kt(l, t, i)),
    e !== null && (Be(e, l, i, o), Hr(e, l, i)),
    i
  );
}
function yl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function eu(e, t) {
  gs(e, t), (e = e.alternate) && gs(e, t);
}
var Dc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function tu(e) {
  this._internalRoot = e;
}
Ml.prototype.render = tu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  Fl(e, t, null, null);
};
Ml.prototype.unmount = tu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yt(function () {
      Fl(null, e, null, null);
    }),
      (t[lt] = null);
  }
};
function Ml(e) {
  this._internalRoot = e;
}
Ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ha();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pt.length && t !== 0 && t < pt[n].priority; n++);
    pt.splice(n, 0, e), n === 0 && ga(e);
  }
};
function nu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ys() {}
function F0(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var f = yl(i);
        o.call(f);
      };
    }
    var i = Ac(t, r, e, 0, null, !1, !1, "", ys);
    return (
      (e._reactRootContainer = i),
      (e[lt] = i.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      Yt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = yl(s);
      u.call(f);
    };
  }
  var s = bi(e, 0, !1, null, null, !1, !1, "", ys);
  return (
    (e._reactRootContainer = s),
    (e[lt] = s.current),
    nr(e.nodeType === 8 ? e.parentNode : e),
    Yt(function () {
      Fl(t, s, n, r);
    }),
    s
  );
}
function _l(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = yl(i);
        u.call(s);
      };
    }
    Fl(t, i, e, l);
  } else i = F0(n, t, e, l, r);
  return yl(i);
}
pa = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = An(t.pendingLanes);
        n !== 0 &&
          (ki(t, n | 1), ke(t, J()), !(U & 6) && ((En = J() + 500), jt()));
      }
      break;
    case 13:
      Yt(function () {
        var r = ot(e, 1);
        if (r !== null) {
          var l = me();
          Be(r, e, 1, l);
        }
      }),
        eu(e, 1);
  }
};
xi = function (e) {
  if (e.tag === 13) {
    var t = ot(e, 134217728);
    if (t !== null) {
      var n = me();
      Be(t, e, 134217728, n);
    }
    eu(e, 134217728);
  }
};
ma = function (e) {
  if (e.tag === 13) {
    var t = Et(e),
      n = ot(e, t);
    if (n !== null) {
      var r = me();
      Be(n, e, t, r);
    }
    eu(e, t);
  }
};
ha = function () {
  return B;
};
va = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Lo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ko(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Nl(r);
            if (!l) throw Error(w(90));
            Ys(r), ko(r, l);
          }
        }
      }
      break;
    case "textarea":
      Xs(e, n);
      break;
    case "select":
      (t = n.value), t != null && fn(e, !!n.multiple, t, !1);
  }
};
na = Xi;
ra = Yt;
var M0 = { usingClientEntryPoint: !1, Events: [mr, rn, Nl, ea, ta, Xi] },
  Rn = {
    findFiberByHostInstance: At,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  R0 = {
    bundleType: Rn.bundleType,
    version: Rn.version,
    rendererPackageName: Rn.rendererPackageName,
    rendererConfig: Rn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ia(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Rn.findFiberByHostInstance,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ir.isDisabled && Ir.supportsFiber)
    try {
      (kl = Ir.inject(R0)), (Ye = Ir);
    } catch {}
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M0;
Te.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nu(t)) throw Error(w(200));
  return O0(e, t, null, n);
};
Te.createRoot = function (e, t) {
  if (!nu(e)) throw Error(w(299));
  var n = !1,
    r = "",
    l = Dc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = bi(e, 1, !1, null, null, n, !1, r, l)),
    (e[lt] = t.current),
    nr(e.nodeType === 8 ? e.parentNode : e),
    new tu(t)
  );
};
Te.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = ia(t)), (e = e === null ? null : e.stateNode), e;
};
Te.flushSync = function (e) {
  return Yt(e);
};
Te.hydrate = function (e, t, n) {
  if (!Rl(t)) throw Error(w(200));
  return _l(null, e, t, !0, n);
};
Te.hydrateRoot = function (e, t, n) {
  if (!nu(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Dc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ac(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[lt] = t.current),
    nr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ml(t);
};
Te.render = function (e, t, n) {
  if (!Rl(t)) throw Error(w(200));
  return _l(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function (e) {
  if (!Rl(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (Yt(function () {
        _l(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[lt] = null);
        });
      }),
      !0)
    : !1;
};
Te.unstable_batchedUpdates = Xi;
Te.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Rl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return _l(e, t, n, !1, r);
};
Te.version = "18.3.1-next-f1338f8080-20240426";
function Uc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc);
    } catch (e) {
      console.error(e);
    }
}
Uc(), (Us.exports = Te);
var _0 = Us.exports,
  ws = _0;
(mo.createRoot = ws.createRoot), (mo.hydrateRoot = ws.hydrateRoot);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wl() {
  return (
    (wl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    wl.apply(this, arguments)
  );
}
var Bt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Bt || (Bt = {}));
const Ss = "popstate";
function I0(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return ui(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Bc(l);
  }
  return D0(t, n, null, e);
}
function ru(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function A0() {
  return Math.random().toString(36).substr(2, 8);
}
function ks(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ui(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    wl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Wc(t) : t,
      { state: n, key: (t && t.key) || r || A0() }
    )
  );
}
function Bc(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Wc(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function D0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = Bt.Pop,
    s = null,
    f = v();
  f == null && ((f = 0), i.replaceState(wl({}, i.state, { idx: f }), ""));
  function v() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    u = Bt.Pop;
    let M = v(),
      d = M == null ? null : M - f;
    (f = M), s && s({ action: u, location: k.location, delta: d });
  }
  function m(M, d) {
    u = Bt.Push;
    let c = ui(k.location, M, d);
    f = v() + 1;
    let p = ks(c, f),
      y = k.createHref(c);
    try {
      i.pushState(p, "", y);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      l.location.assign(y);
    }
    o && s && s({ action: u, location: k.location, delta: 1 });
  }
  function S(M, d) {
    u = Bt.Replace;
    let c = ui(k.location, M, d);
    f = v();
    let p = ks(c, f),
      y = k.createHref(c);
    i.replaceState(p, "", y),
      o && s && s({ action: u, location: k.location, delta: 0 });
  }
  function x(M) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof M == "string" ? M : Bc(M);
    return (
      (c = c.replace(/ $/, "%20")),
      ru(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, d)
    );
  }
  let k = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(M) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Ss, h),
        (s = M),
        () => {
          l.removeEventListener(Ss, h), (s = null);
        }
      );
    },
    createHref(M) {
      return t(l, M);
    },
    createURL: x,
    encodeLocation(M) {
      let d = x(M);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: S,
    go(M) {
      return i.go(M);
    },
  };
  return k;
}
var xs;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(xs || (xs = {}));
function U0(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Hc = ["post", "put", "patch", "delete"];
new Set(Hc);
const B0 = ["get", ...Hc];
new Set(B0);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function si() {
  return (
    (si = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    si.apply(this, arguments)
  );
}
const W0 = re.createContext(null),
  lu = re.createContext(null);
function Vc() {
  return re.useContext(lu) != null;
}
function H0() {
  return Vc() || ru(!1), re.useContext(lu).location;
}
function V0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = Bt.Pop,
    navigator: o,
    static: i = !1,
    future: u,
  } = e;
  Vc() && ru(!1);
  let s = t.replace(/^\/*/, "/"),
    f = re.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: i,
        future: si({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, o, i]
    );
  typeof r == "string" && (r = Wc(r));
  let {
      pathname: v = "/",
      search: h = "",
      hash: m = "",
      state: S = null,
      key: x = "default",
    } = r,
    k = re.useMemo(() => {
      let M = U0(v, s);
      return M == null
        ? null
        : {
            location: { pathname: M, search: h, hash: m, state: S, key: x },
            navigationType: l,
          };
    }, [s, v, h, m, S, x, l]);
  return k == null
    ? null
    : re.createElement(
        W0.Provider,
        { value: f },
        re.createElement(lu.Provider, { children: n, value: k })
      );
}
new Promise(() => {});
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Q0 = "6";
try {
  window.__reactRouterVersion = Q0;
} catch {}
const G0 = "startTransition",
  Es = Nf[G0];
function K0(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = re.useRef();
  o.current == null && (o.current = I0({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = re.useState({ action: i.action, location: i.location }),
    { v7_startTransition: f } = r || {},
    v = re.useCallback(
      (h) => {
        f && Es ? Es(() => s(h)) : s(h);
      },
      [s, f]
    );
  return (
    re.useLayoutEffect(() => i.listen(v), [i, v]),
    re.createElement(V0, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
      future: r,
    })
  );
}
var Cs;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Cs || (Cs = {}));
var Ns;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ns || (Ns = {}));
var Qc = { exports: {} };
(function (e, t) {
  (function (r, l) {
    e.exports = l();
  })(sf, function () {
    return (function (n) {
      var r = {};
      function l(o) {
        if (r[o]) return r[o].exports;
        var i = (r[o] = { i: o, l: !1, exports: {} });
        return n[o].call(i.exports, i, i.exports, l), (i.l = !0), i.exports;
      }
      return (
        (l.m = n),
        (l.c = r),
        (l.d = function (o, i, u) {
          l.o(o, i) || Object.defineProperty(o, i, { enumerable: !0, get: u });
        }),
        (l.r = function (o) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(o, "__esModule", { value: !0 });
        }),
        (l.t = function (o, i) {
          if (
            (i & 1 && (o = l(o)),
            i & 8 || (i & 4 && typeof o == "object" && o && o.__esModule))
          )
            return o;
          var u = Object.create(null);
          if (
            (l.r(u),
            Object.defineProperty(u, "default", { enumerable: !0, value: o }),
            i & 2 && typeof o != "string")
          )
            for (var s in o)
              l.d(
                u,
                s,
                function (f) {
                  return o[f];
                }.bind(null, s)
              );
          return u;
        }),
        (l.n = function (o) {
          var i =
            o && o.__esModule
              ? function () {
                  return o.default;
                }
              : function () {
                  return o;
                };
          return l.d(i, "a", i), i;
        }),
        (l.o = function (o, i) {
          return Object.prototype.hasOwnProperty.call(o, i);
        }),
        (l.p = ""),
        l((l.s = 0))
      );
    })([
      function (n, r, l) {
        l.r(r);
        var o = function (a) {
            return Array.isArray(a) ? a : [a];
          },
          i = function (a) {
            return a instanceof Node;
          },
          u = function (a) {
            return a instanceof NodeList;
          },
          s = function (a, E) {
            if (a && E) {
              a = u(a) ? a : [a];
              for (var L = 0; L < a.length && E(a[L], L, a.length) !== !0; L++);
            }
          },
          f = function (a) {
            return console.error("[scroll-lock] ".concat(a));
          },
          v = function (a) {
            if (Array.isArray(a)) {
              var E = a.join(", ");
              return E;
            }
          },
          h = function (a) {
            var E = [];
            return (
              s(a, function (L) {
                return E.push(L);
              }),
              E
            );
          },
          m = function (a, E) {
            var L =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : !0,
              R =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : document;
            if (L && h(R.querySelectorAll(E)).indexOf(a) !== -1) return a;
            for (
              ;
              (a = a.parentElement) &&
              h(R.querySelectorAll(E)).indexOf(a) === -1;

            );
            return a;
          },
          S = function (a, E) {
            var L =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : document,
              R = h(L.querySelectorAll(E)).indexOf(a) !== -1;
            return R;
          },
          x = function (a) {
            if (a) {
              var E = getComputedStyle(a),
                L = E.overflow === "hidden";
              return L;
            }
          },
          k = function (a) {
            if (a) {
              if (x(a)) return !0;
              var E = a.scrollTop;
              return E <= 0;
            }
          },
          M = function (a) {
            if (a) {
              if (x(a)) return !0;
              var E = a.scrollTop,
                L = a.scrollHeight,
                R = E + a.offsetHeight;
              return R >= L;
            }
          },
          d = function (a) {
            if (a) {
              if (x(a)) return !0;
              var E = a.scrollLeft;
              return E <= 0;
            }
          },
          c = function (a) {
            if (a) {
              if (x(a)) return !0;
              var E = a.scrollLeft,
                L = a.scrollWidth,
                R = E + a.offsetWidth;
              return R >= L;
            }
          },
          p = function (a) {
            var E = 'textarea, [contenteditable="true"]';
            return S(a, E);
          },
          y = function (a) {
            var E = 'input[type="range"]';
            return S(a, E);
          };
        l.d(r, "disablePageScroll", function () {
          return A;
        }),
          l.d(r, "enablePageScroll", function () {
            return se;
          }),
          l.d(r, "getScrollState", function () {
            return xe;
          }),
          l.d(r, "clearQueueScrollLocks", function () {
            return Xe;
          }),
          l.d(r, "getTargetScrollBarWidth", function () {
            return st;
          }),
          l.d(r, "getCurrentTargetScrollBarWidth", function () {
            return Zt;
          }),
          l.d(r, "getPageScrollBarWidth", function () {
            return zt;
          }),
          l.d(r, "getCurrentPageScrollBarWidth", function () {
            return Ot;
          }),
          l.d(r, "addScrollableTarget", function () {
            return N;
          }),
          l.d(r, "removeScrollableTarget", function () {
            return _;
          }),
          l.d(r, "addScrollableSelector", function () {
            return I;
          }),
          l.d(r, "removeScrollableSelector", function () {
            return Q;
          }),
          l.d(r, "addLockableTarget", function () {
            return Z;
          }),
          l.d(r, "addLockableSelector", function () {
            return Ft;
          }),
          l.d(r, "setFillGapMethod", function () {
            return He;
          }),
          l.d(r, "addFillGapTarget", function () {
            return Mt;
          }),
          l.d(r, "removeFillGapTarget", function () {
            return Ve;
          }),
          l.d(r, "addFillGapSelector", function () {
            return Ze;
          }),
          l.d(r, "removeFillGapSelector", function () {
            return ou;
          }),
          l.d(r, "refillGaps", function () {
            return gr;
          });
        function C(P) {
          for (var a = 1; a < arguments.length; a++) {
            var E = arguments[a] != null ? arguments[a] : {},
              L = Object.keys(E);
            typeof Object.getOwnPropertySymbols == "function" &&
              (L = L.concat(
                Object.getOwnPropertySymbols(E).filter(function (R) {
                  return Object.getOwnPropertyDescriptor(E, R).enumerable;
                })
              )),
              L.forEach(function (R) {
                O(P, R, E[R]);
              });
          }
          return P;
        }
        function O(P, a, E) {
          return (
            a in P
              ? Object.defineProperty(P, a, {
                  value: E,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (P[a] = E),
            P
          );
        }
        var z = ["padding", "margin", "width", "max-width", "none"],
          F = 3,
          T = {
            scroll: !0,
            queue: 0,
            scrollableSelectors: ["[data-scroll-lock-scrollable]"],
            lockableSelectors: ["body", "[data-scroll-lock-lockable]"],
            fillGapSelectors: [
              "body",
              "[data-scroll-lock-fill-gap]",
              "[data-scroll-lock-lockable]",
            ],
            fillGapMethod: z[0],
            startTouchY: 0,
            startTouchX: 0,
          },
          A = function (a) {
            T.queue <= 0 && ((T.scroll = !1), Il(), iu()), N(a), T.queue++;
          },
          se = function (a) {
            T.queue > 0 && T.queue--,
              T.queue <= 0 && ((T.scroll = !0), Kc(), Jc()),
              _(a);
          },
          xe = function () {
            return T.scroll;
          },
          Xe = function () {
            T.queue = 0;
          },
          st = function (a) {
            var E =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1;
            if (i(a)) {
              var L = a.style.overflowY;
              E
                ? xe() ||
                  (a.style.overflowY = a.getAttribute(
                    "data-scroll-lock-saved-overflow-y-property"
                  ))
                : (a.style.overflowY = "scroll");
              var R = Zt(a);
              return (a.style.overflowY = L), R;
            } else return 0;
          },
          Zt = function (a) {
            if (i(a))
              if (a === document.body) {
                var E = document.documentElement.clientWidth,
                  L = window.innerWidth,
                  R = L - E;
                return R;
              } else {
                var Je = a.style.borderLeftWidth,
                  Rt = a.style.borderRightWidth;
                (a.style.borderLeftWidth = "0px"),
                  (a.style.borderRightWidth = "0px");
                var at = a.offsetWidth - a.clientWidth;
                return (
                  (a.style.borderLeftWidth = Je),
                  (a.style.borderRightWidth = Rt),
                  at
                );
              }
            else return 0;
          },
          zt = function () {
            var a =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : !1;
            return st(document.body, a);
          },
          Ot = function () {
            return Zt(document.body);
          },
          N = function (a) {
            if (a) {
              var E = o(a);
              E.map(function (L) {
                s(L, function (R) {
                  i(R)
                    ? R.setAttribute("data-scroll-lock-scrollable", "")
                    : f('"'.concat(R, '" is not a Element.'));
                });
              });
            }
          },
          _ = function (a) {
            if (a) {
              var E = o(a);
              E.map(function (L) {
                s(L, function (R) {
                  i(R)
                    ? R.removeAttribute("data-scroll-lock-scrollable")
                    : f('"'.concat(R, '" is not a Element.'));
                });
              });
            }
          },
          I = function (a) {
            if (a) {
              var E = o(a);
              E.map(function (L) {
                T.scrollableSelectors.push(L);
              });
            }
          },
          Q = function (a) {
            if (a) {
              var E = o(a);
              E.map(function (L) {
                T.scrollableSelectors = T.scrollableSelectors.filter(function (
                  R
                ) {
                  return R !== L;
                });
              });
            }
          },
          Z = function (a) {
            if (a) {
              var E = o(a);
              E.map(function (L) {
                s(L, function (R) {
                  i(R)
                    ? R.setAttribute("data-scroll-lock-lockable", "")
                    : f('"'.concat(R, '" is not a Element.'));
                });
              }),
                xe() || Il();
            }
          },
          Ft = function (a) {
            if (a) {
              var E = o(a);
              E.map(function (L) {
                T.lockableSelectors.push(L);
              }),
                xe() || Il(),
                Ze(a);
            }
          },
          He = function (a) {
            if (a)
              if (z.indexOf(a) !== -1) (T.fillGapMethod = a), gr();
              else {
                var E = z.join(", ");
                f(
                  '"'
                    .concat(
                      a,
                      `" method is not available!
Available fill gap methods: `
                    )
                    .concat(E, ".")
                );
              }
          },
          Mt = function (a) {
            if (a) {
              var E = o(a);
              E.map(function (L) {
                s(L, function (R) {
                  i(R)
                    ? (R.setAttribute("data-scroll-lock-fill-gap", ""),
                      T.scroll || su(R))
                    : f('"'.concat(R, '" is not a Element.'));
                });
              });
            }
          },
          Ve = function (a) {
            if (a) {
              var E = o(a);
              E.map(function (L) {
                s(L, function (R) {
                  i(R)
                    ? (R.removeAttribute("data-scroll-lock-fill-gap"),
                      T.scroll || Al(R))
                    : f('"'.concat(R, '" is not a Element.'));
                });
              });
            }
          },
          Ze = function (a) {
            if (a) {
              var E = o(a);
              E.map(function (L) {
                T.fillGapSelectors.indexOf(L) === -1 &&
                  (T.fillGapSelectors.push(L), T.scroll || uu(L));
              });
            }
          },
          ou = function (a) {
            if (a) {
              var E = o(a);
              E.map(function (L) {
                (T.fillGapSelectors = T.fillGapSelectors.filter(function (R) {
                  return R !== L;
                })),
                  T.scroll || au(L);
              });
            }
          },
          gr = function () {
            T.scroll || iu();
          },
          Il = function () {
            var a = v(T.lockableSelectors);
            Yc(a);
          },
          Kc = function () {
            var a = v(T.lockableSelectors);
            $c(a);
          },
          Yc = function (a) {
            var E = document.querySelectorAll(a);
            s(E, function (L) {
              Xc(L);
            });
          },
          $c = function (a) {
            var E = document.querySelectorAll(a);
            s(E, function (L) {
              Zc(L);
            });
          },
          Xc = function (a) {
            if (i(a) && a.getAttribute("data-scroll-lock-locked") !== "true") {
              var E = window.getComputedStyle(a);
              a.setAttribute(
                "data-scroll-lock-saved-overflow-y-property",
                E.overflowY
              ),
                a.setAttribute(
                  "data-scroll-lock-saved-inline-overflow-property",
                  a.style.overflow
                ),
                a.setAttribute(
                  "data-scroll-lock-saved-inline-overflow-y-property",
                  a.style.overflowY
                ),
                (a.style.overflow = "hidden"),
                a.setAttribute("data-scroll-lock-locked", "true");
            }
          },
          Zc = function (a) {
            i(a) &&
              a.getAttribute("data-scroll-lock-locked") === "true" &&
              ((a.style.overflow = a.getAttribute(
                "data-scroll-lock-saved-inline-overflow-property"
              )),
              (a.style.overflowY = a.getAttribute(
                "data-scroll-lock-saved-inline-overflow-y-property"
              )),
              a.removeAttribute("data-scroll-lock-saved-overflow-property"),
              a.removeAttribute(
                "data-scroll-lock-saved-inline-overflow-property"
              ),
              a.removeAttribute(
                "data-scroll-lock-saved-inline-overflow-y-property"
              ),
              a.removeAttribute("data-scroll-lock-locked"));
          },
          iu = function () {
            T.fillGapSelectors.map(function (a) {
              uu(a);
            });
          },
          Jc = function () {
            T.fillGapSelectors.map(function (a) {
              au(a);
            });
          },
          uu = function (a) {
            var E = document.querySelectorAll(a),
              L = T.lockableSelectors.indexOf(a) !== -1;
            s(E, function (R) {
              su(R, L);
            });
          },
          su = function (a) {
            var E =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1;
            if (i(a)) {
              var L;
              if (a.getAttribute("data-scroll-lock-lockable") === "" || E)
                L = st(a, !0);
              else {
                var R = m(a, v(T.lockableSelectors));
                L = st(R, !0);
              }
              a.getAttribute("data-scroll-lock-filled-gap") === "true" && Al(a);
              var Je = window.getComputedStyle(a);
              if (
                (a.setAttribute("data-scroll-lock-filled-gap", "true"),
                a.setAttribute(
                  "data-scroll-lock-current-fill-gap-method",
                  T.fillGapMethod
                ),
                T.fillGapMethod === "margin")
              ) {
                var Rt = parseFloat(Je.marginRight);
                a.style.marginRight = "".concat(Rt + L, "px");
              } else if (T.fillGapMethod === "width")
                a.style.width = "calc(100% - ".concat(L, "px)");
              else if (T.fillGapMethod === "max-width")
                a.style.maxWidth = "calc(100% - ".concat(L, "px)");
              else if (T.fillGapMethod === "padding") {
                var at = parseFloat(Je.paddingRight);
                a.style.paddingRight = "".concat(at + L, "px");
              }
            }
          },
          au = function (a) {
            var E = document.querySelectorAll(a);
            s(E, function (L) {
              Al(L);
            });
          },
          Al = function (a) {
            if (
              i(a) &&
              a.getAttribute("data-scroll-lock-filled-gap") === "true"
            ) {
              var E = a.getAttribute(
                "data-scroll-lock-current-fill-gap-method"
              );
              a.removeAttribute("data-scroll-lock-filled-gap"),
                a.removeAttribute("data-scroll-lock-current-fill-gap-method"),
                E === "margin"
                  ? (a.style.marginRight = "")
                  : E === "width"
                  ? (a.style.width = "")
                  : E === "max-width"
                  ? (a.style.maxWidth = "")
                  : E === "padding" && (a.style.paddingRight = "");
            }
          },
          qc = function (a) {
            gr();
          },
          bc = function (a) {
            T.scroll ||
              ((T.startTouchY = a.touches[0].clientY),
              (T.startTouchX = a.touches[0].clientX));
          },
          ef = function (a) {
            if (!T.scroll) {
              var E = T.startTouchY,
                L = T.startTouchX,
                R = a.touches[0].clientY,
                Je = a.touches[0].clientX;
              if (a.touches.length < 2) {
                var Rt = v(T.scrollableSelectors),
                  at = { up: E < R, down: E > R, left: L < Je, right: L > Je },
                  yr = {
                    up: E + F < R,
                    down: E - F > R,
                    left: L + F < Je,
                    right: L - F > Je,
                  },
                  lf = function cu(te) {
                    var of =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1;
                    if (te) {
                      var Dl = m(te, Rt, !1);
                      if (y(te)) return !1;
                      if (of || (p(te) && m(te, Rt)) || S(te, Rt)) {
                        var wr = !1;
                        d(te) && c(te)
                          ? ((at.up && k(te)) || (at.down && M(te))) &&
                            (wr = !0)
                          : k(te) && M(te)
                          ? ((at.left && d(te)) || (at.right && c(te))) &&
                            (wr = !0)
                          : ((yr.up && k(te)) ||
                              (yr.down && M(te)) ||
                              (yr.left && d(te)) ||
                              (yr.right && c(te))) &&
                            (wr = !0),
                          wr &&
                            (Dl
                              ? cu(Dl, !0)
                              : a.cancelable && a.preventDefault());
                      } else cu(Dl);
                    } else a.cancelable && a.preventDefault();
                  };
                lf(a.target);
              }
            }
          },
          tf = function (a) {
            T.scroll || ((T.startTouchY = 0), (T.startTouchX = 0));
          };
        typeof window < "u" && window.addEventListener("resize", qc),
          typeof document < "u" &&
            (document.addEventListener("touchstart", bc),
            document.addEventListener("touchmove", ef, { passive: !1 }),
            document.addEventListener("touchend", tf));
        var nf = {
            hide: function (a) {
              f(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),
                A(a);
            },
            show: function (a) {
              f(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),
                se(a);
            },
            toggle: function (a) {
              f('"toggle" is deprecated! Do not use it.'), xe() ? A() : se(a);
            },
            getState: function () {
              return (
                f(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),
                xe()
              );
            },
            getWidth: function () {
              return (
                f(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),
                zt()
              );
            },
            getCurrentWidth: function () {
              return (
                f(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),
                Ot()
              );
            },
            setScrollableTargets: function (a) {
              f(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),
                N(a);
            },
            setFillGapSelectors: function (a) {
              f(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),
                Ze(a);
            },
            setFillGapTargets: function (a) {
              f(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),
                Mt(a);
            },
            clearQueue: function () {
              f(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),
                Xe();
            },
          },
          rf = C(
            {
              disablePageScroll: A,
              enablePageScroll: se,
              getScrollState: xe,
              clearQueueScrollLocks: Xe,
              getTargetScrollBarWidth: st,
              getCurrentTargetScrollBarWidth: Zt,
              getPageScrollBarWidth: zt,
              getCurrentPageScrollBarWidth: Ot,
              addScrollableSelector: I,
              removeScrollableSelector: Q,
              addScrollableTarget: N,
              removeScrollableTarget: _,
              addLockableSelector: Ft,
              addLockableTarget: Z,
              addFillGapSelector: Ze,
              removeFillGapSelector: ou,
              addFillGapTarget: Mt,
              removeFillGapTarget: Ve,
              setFillGapMethod: He,
              refillGaps: gr,
              _state: T,
            },
            nf
          );
        r.default = rf;
      },
    ]).default;
  });
})(Qc);
var fo = Qc.exports;
const Ps =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%234693DF'%3e%3cpath%20d='M400-280v-400l200%20200-200%20200Z'/%3e%3c/svg%3e",
  Y0 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fbf7f9'%3e%3cpath%20d='M240-200h120v-240h240v240h120v-360L480-740%20240-560v360Zm-80%2080v-480l320-240%20320%20240v480H520v-240h-80v240H160Zm320-350Z'/%3e%3c/svg%3e",
  $0 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fbf7f9'%3e%3cpath%20d='M160-160q-33%200-56.5-23.5T80-240v-480q0-33%2023.5-56.5T160-800h640q33%200%2056.5%2023.5T880-720v480q0%2033-23.5%2056.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80%20320-200H160l320%20200ZM160-640v-80%20480-400Z'/%3e%3c/svg%3e",
  X0 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23fbf7f9'%3e%3cpath%20d='M480-80q-83%200-156-31.5T197-197q-54-54-85.5-127T80-480q0-83%2031.5-156T197-763q54-54%20127-85.5T480-880q65%200%20123%2019t107%2053l-58%2059q-38-24-81-37.5T480-800q-133%200-226.5%2093.5T160-480q0%20133%2093.5%20226.5T480-160q133%200%20226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11%2032%2017%2066t6%2070q0%2083-31.5%20156T763-197q-54%2054-127%2085.5T480-80Zm-56-216L254-466l56-56%20114%20114%20400-401%2056%2056-456%20457Z'/%3e%3c/svg%3e",
  Z0 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23fbf7f9'%20d='M304%2048a48%2048%200%201%200%20-96%200%2048%2048%200%201%200%2096%200zm0%20416a48%2048%200%201%200%20-96%200%2048%2048%200%201%200%2096%200zM48%20304a48%2048%200%201%200%200-96%2048%2048%200%201%200%200%2096zm464-48a48%2048%200%201%200%20-96%200%2048%2048%200%201%200%2096%200zM142.9%20437A48%2048%200%201%200%2075%20369.1%2048%2048%200%201%200%20142.9%20437zm0-294.2A48%2048%200%201%200%2075%2075a48%2048%200%201%200%2067.9%2067.9zM369.1%20437A48%2048%200%201%200%20437%20369.1%2048%2048%200%201%200%20369.1%20437z'/%3e%3c/svg%3e",
  J0 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20448%20512'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23fbf7f9'%20d='M246.6%209.4c-12.5-12.5-32.8-12.5-45.3%200l-128%20128c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L192%20109.3%20192%20320c0%2017.7%2014.3%2032%2032%2032s32-14.3%2032-32l0-210.7%2073.4%2073.4c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3l-128-128zM64%20352c0-17.7-14.3-32-32-32s-32%2014.3-32%2032l0%2064c0%2053%2043%2096%2096%2096l256%200c53%200%2096-43%2096-96l0-64c0-17.7-14.3-32-32-32s-32%2014.3-32%2032l0%2064c0%2017.7-14.3%2032-32%2032L96%20448c-17.7%200-32-14.3-32-32l0-64z'/%3e%3c/svg%3e",
  q0 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20512'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23fbf7f9'%20d='M524.5%2069.8a1.5%201.5%200%200%200%20-.8-.7A485.1%20485.1%200%200%200%20404.1%2032a1.8%201.8%200%200%200%20-1.9%20.9%20337.5%20337.5%200%200%200%20-14.9%2030.6%20447.8%20447.8%200%200%200%20-134.4%200%20309.5%20309.5%200%200%200%20-15.1-30.6%201.9%201.9%200%200%200%20-1.9-.9A483.7%20483.7%200%200%200%20116.1%2069.1a1.7%201.7%200%200%200%20-.8%20.7C39.1%20183.7%2018.2%20294.7%2028.4%20404.4a2%202%200%200%200%20.8%201.4A487.7%20487.7%200%200%200%20176%20479.9a1.9%201.9%200%200%200%202.1-.7A348.2%20348.2%200%200%200%20208.1%20430.4a1.9%201.9%200%200%200%20-1-2.6%20321.2%20321.2%200%200%201%20-45.9-21.9%201.9%201.9%200%200%201%20-.2-3.1c3.1-2.3%206.2-4.7%209.1-7.1a1.8%201.8%200%200%201%201.9-.3c96.2%2043.9%20200.4%2043.9%20295.5%200a1.8%201.8%200%200%201%201.9%20.2c2.9%202.4%206%204.9%209.1%207.2a1.9%201.9%200%200%201%20-.2%203.1%20301.4%20301.4%200%200%201%20-45.9%2021.8%201.9%201.9%200%200%200%20-1%202.6%20391.1%20391.1%200%200%200%2030%2048.8%201.9%201.9%200%200%200%202.1%20.7A486%20486%200%200%200%20610.7%20405.7a1.9%201.9%200%200%200%20.8-1.4C623.7%20277.6%20590.9%20167.5%20524.5%2069.8zM222.5%20337.6c-29%200-52.8-26.6-52.8-59.2S193.1%20219.1%20222.5%20219.1c29.7%200%2053.3%2026.8%2052.8%2059.2C275.3%20311%20251.9%20337.6%20222.5%20337.6zm195.4%200c-29%200-52.8-26.6-52.8-59.2S388.4%20219.1%20417.9%20219.1c29.7%200%2053.3%2026.8%2052.8%2059.2C470.7%20311%20447.5%20337.6%20417.9%20337.6z'/%3e%3c/svg%3e",
  b0 =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20576%20512'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23fbf7f9'%20d='M97.2%2096.2c10.4-10.7%2016-17.1%2016-21.9%200-2.8-1.9-5.5-3.8-7.4A14.8%2014.8%200%200%200%20101%2064.1c-8.5%200-20.9%208.8-35.8%2025.7C23.7%20137%202.5%20182.8%203.4%20250.3s17.5%20117%2054.1%20161.9C76.2%20435.9%2090.6%20448%20100.9%20448a13.6%2013.6%200%200%200%208.4-3.8c1.9-2.8%203.8-5.6%203.8-8.4%200-5.6-3.9-12.2-13.2-20.6-44.5-42.3-67.3-97-67.5-165C32.3%20188.8%2054%20137.8%2097.2%2096.2zM239.5%20420.1c.6%20.4%20.9%20.6%20.9%20.6zm93.8%20.6%20.2-.1C333.2%20420.6%20333.2%20420.7%20333.3%20420.6zm3.1-158.2c-16.2-4.2%2050.4-82.9-68.1-177.2%200%200%2015.5%2049.4-62.8%20159.6-74.3%20104.4%2023.5%20168.7%2034%20175.2-6.7-4.4-47.4-35.7%209.6-128.6%2011-18.3%2025.5-34.9%2043.5-72.2%200%200%2015.9%2022.5%207.6%2071.1C287.7%20364%20354%20342.9%20355%20343.9c22.8%2026.8-17.7%2073.5-21.6%2076.6%205.5-3.7%20117.7-78%2033-188.1C360.4%20238.4%20352.6%20266.6%20336.4%20262.4zM510.9%2089.7C496%2072.8%20483.5%2064%20475%2064a14.8%2014.8%200%200%200%20-8.4%202.8c-1.9%201.9-3.8%204.7-3.8%207.4%200%204.8%205.6%2011.3%2016%2021.9%2043.2%2041.6%2065%2092.6%2064.8%20154.1-.2%2068-23%20122.6-67.5%20165-9.3%208.4-13.2%2014.9-13.2%2020.6%200%202.8%201.9%205.6%203.8%208.4A13.6%2013.6%200%200%200%20475.1%20448c10.3%200%2024.7-12.1%2043.5-35.8%2036.6-44.9%2053.1-94.4%2054.1-161.9S552.3%20137%20510.9%2089.7z'/%3e%3c/svg%3e",
  Gc =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20496%20512'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23fbf7f9'%20d='M165.9%20397.4c0%202-2.3%203.6-5.2%203.6-3.3%20.3-5.6-1.3-5.6-3.6%200-2%202.3-3.6%205.2-3.6%203-.3%205.6%201.3%205.6%203.6zm-31.1-4.5c-.7%202%201.3%204.3%204.3%204.9%202.6%201%205.6%200%206.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5%20.3-6.2%202.3zm44.2-1.7c-2.9%20.7-4.9%202.6-4.6%204.9%20.3%202%202.9%203.3%205.9%202.6%202.9-.7%204.9-2.6%204.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8%208C106.1%208%200%20113.3%200%20252c0%20110.9%2069.8%20205.8%20169.5%20239.2%2012.8%202.3%2017.3-5.6%2017.3-12.1%200-6.2-.3-40.4-.3-61.4%200%200-70%2015-84.7-29.8%200%200-11.4-29.1-27.8-36.6%200%200-22.9-15.7%201.6-15.4%200%200%2024.9%202%2038.6%2025.8%2021.9%2038.6%2058.6%2027.5%2072.9%2020.9%202.3-16%208.8-27.1%2016-33.7-55.9-6.2-112.3-14.3-112.3-110.5%200-27.5%207.6-41.3%2023.6-58.9-2.6-6.5-11.1-33.3%202.6-67.9%2020.9-6.5%2069%2027%2069%2027%2020-5.6%2041.5-8.5%2062.8-8.5s42.8%202.9%2062.8%208.5c0%200%2048.1-33.6%2069-27%2013.7%2034.7%205.2%2061.4%202.6%2067.9%2016%2017.7%2025.8%2031.5%2025.8%2058.9%200%2096.5-58.9%20104.2-114.8%20110.5%209.2%207.9%2017%2022.9%2017%2046.4%200%2033.7-.3%2075.4-.3%2083.6%200%206.5%204.6%2014.4%2017.3%2012.1C428.2%20457.8%20496%20362.9%20496%20252%20496%20113.3%20383.5%208%20244.8%208zM97.2%20352.9c-1.3%201-1%203.3%20.7%205.2%201.6%201.6%203.9%202.3%205.2%201%201.3-1%201-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7%201.3%20.3%202.9%202.3%203.9%201.6%201%203.6%20.7%204.3-.7%20.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3%20.7zm32.4%2035.6c-1.6%201.3-1%204.3%201.3%206.2%202.3%202.3%205.2%202.6%206.5%201%201.3-1.3%20.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6%201-1.6%203.6%200%205.9%201.6%202.3%204.3%203.3%205.6%202.3%201.6-1.3%201.6-3.9%200-6.2-1.4-2.3-4-3.3-5.6-2z'/%3e%3c/svg%3e",
  ep =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20448%20512'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23fbf7f9'%20d='M416%2032H31.9C14.3%2032%200%2046.5%200%2064.3v383.4C0%20465.5%2014.3%20480%2031.9%20480H416c17.6%200%2032-14.5%2032-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4%20416H69V202.2h66.5V416zm-33.2-243c-21.3%200-38.5-17.3-38.5-38.5S80.9%2096%20102.2%2096c21.2%200%2038.5%2017.3%2038.5%2038.5%200%2021.3-17.2%2038.5-38.5%2038.5zm282.1%20243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6%200-39.9%2027-39.9%2054.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8%2030.6-34.5%2062.9-34.5%2067.2%200%2079.7%2044.3%2079.7%20101.9V416z'/%3e%3c/svg%3e",
  tp = [
    { id: "0", title: "About", url: "#about" },
    { id: "1", title: "Projects", url: "#projects" },
    { id: "2", title: "Say hi!", url: "#sayhi" },
  ],
  np = [
    { id: "0", title: "Email", iconUrl: $0, url: "#" },
    { id: "1", title: "Github", iconUrl: Gc, url: "#" },
    { id: "2", title: "LinkedIn", iconUrl: ep, url: "#" },
    { id: "3", title: "Discord", iconUrl: q0, url: "#" },
    { id: "4", title: "freeCodeCamp", iconUrl: b0, url: "#" },
  ],
  po = [
    {
      id: "0",
      title: "About Me",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam mi. Nam purus ex, viverra eget tristique non, cursus rutrum mauris. Quisque efficitur dui libero, at auctor velit viverra ac. Maecenas aliquam nisl augue. Nulla dolor felis, fringilla nec sodales vel, ultrices sit amet lectus. Vestibulum placerat porttitor magna ut ornare. Proin ut malesuada velit. Etiam imperdiet tellus vitae faucibus porttitor.",
      text2:
        "When I'm not working, I go for long drives, coffee in cafes, madness with my cats and a good curl up with a book.",
      text3: "Currently working hard  for a Triumph Speed 400.",
    },
  ],
  rp = [
    { id: "0", skill: "React.js" },
    { id: "1", skill: "Javascript ES6+" },
    { id: "2", skill: "Phyton" },
    { id: "3", skill: "HTML" },
    { id: "4", skill: "CSS" },
    { id: "5", skill: "Figma" },
    { id: "6", skill: "Webflow" },
    { id: "7", skill: "Adobe Photoshop" },
    { id: "8", skill: "Adobe Illustrator" },
    { id: "9", skill: "Procreate" },
  ],
  lp = [
    {
      id: "0",
      title: "Social Media Marketing Portfolio",
      description:
        "A commissioned project for a social media marketing consultant.",
      techUsed: "Figma, webflow, Adobe",
      status: "In  progress",
    },
    {
      id: "1",
      title: "SparkTech",
      description:
        "A short, live challenge requiring participants to design and put together a website within 2 hours.",
      status: "done",
    },
    {
      id: "2",
      title: "The Palindrome Checker",
      description:
        "A certification project on freeCodeCamp for a web-app that checks whether text entered is a palindrome.",
      status: "done",
    },
    {
      id: "3",
      title: "Survey Form",
      description:
        "Mini project for freeCodeCamp to create a survey form to practice HTML and CSS.",
      status: "done",
    },
    {
      id: "4",
      title: "Technical Documentation",
      description:
        "Certification  project for freeCodeCamp where 3eikhekjte kjtlejtlejkt lektlrktlrktrlkt.",
      status: "done",
    },
    {
      id: "5",
      title: "Product Landing Page",
      description:
        "Certification  project for freeCodeCamp to design your own product landing page utilising...",
      status: "done",
    },
  ],
  op = [
    { id: "0", title: "Github", iconUrl: Gc, url: "#" },
    { id: "1", title: "Preview", iconUrl: J0, url: "#" },
  ],
  ip = () =>
    g.jsx("div", {
      className: "absolute inset-0 pointer-events-none lg:hidden",
      children: g.jsx("div", { className: "absolute inset-0 opacity-[.03]" }),
    }),
  up = (e) =>
    g.jsxs(g.Fragment, {
      children: [
        g.jsx("svg", {
          className: "absolute top-0 left-0",
          width: "21",
          height: "44",
          viewBox: "0 0 21 44",
          children: g.jsx("path", {
            fill: e ? "white" : "none",
            stroke: e ? "white" : "url(#btn-left)",
            strokeWidth: "2",
            d: "M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1",
          }),
        }),
        g.jsx("svg", {
          className: "absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]",
          height: "44",
          viewBox: "0 0 100 44",
          preserveAspectRatio: "none",
          fill: e ? "white" : "none",
          children: e
            ? g.jsx("polygon", {
                fill: "white",
                fillRule: "nonzero",
                points: "100 0 100 44 0 44 0 0",
              })
            : g.jsxs(g.Fragment, {
                children: [
                  g.jsx("polygon", {
                    fill: "url(#btn-top)",
                    fillRule: "nonzero",
                    points: "100 42 100 44 0 44 0 42",
                  }),
                  g.jsx("polygon", {
                    fill: "url(#btn-bottom)",
                    fillRule: "nonzero",
                    points: "100 0 100 2 0 2 0 0",
                  }),
                ],
              }),
        }),
        g.jsx("svg", {
          className: "absolute top-0 right-0",
          width: "21",
          height: "44",
          viewBox: "0 0 21 44",
          children: g.jsx("path", {
            fill: e ? "white" : "none",
            stroke: e ? "white" : "url(#btn-right)",
            strokeWidth: "2",
            d: "M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1",
          }),
        }),
      ],
    }),
  sp = ({
    className: e,
    href: t,
    onClick: n,
    children: r,
    px: l,
    white: o,
  }) => {
    const i = `button relative inline-flex items-center justify-center h-11 transition-colors <hover:text-color-1></hover:text-color-1> ${
        l || "px-7"
      } ${o ? "text-n-8" : "text-n-1"} ${e || ""}`,
      u = "relative z-10";
    return g.jsxs("button", {
      className: i,
      onClick: n,
      children: [g.jsx("span", { className: u, children: r }), up(o)],
    });
  },
  ap = ({ openNavigation: e }) =>
    g.jsxs("svg", {
      className: "overflow-visible",
      width: "20",
      height: "12",
      viewBox: "0 0 20 12",
      children: [
        g.jsx("rect", {
          className: "transition-all origin-center",
          y: e ? "5" : "0",
          width: "20",
          height: "2",
          rx: "1",
          fill: "white",
          transform: `rotate(${e ? "45" : "0"})`,
        }),
        g.jsx("rect", {
          className: "transition-all origin-center",
          y: e ? "5" : "10",
          width: "20",
          height: "2",
          rx: "1",
          fill: "white",
          transform: `rotate(${e ? "-45" : "0"})`,
        }),
      ],
    }),
  cp = () => {
    const e = H0(),
      [t, n] = re.useState(!1),
      r = () => {
        t ? (n(!1), fo.enablePageScroll()) : (n(!0), fo.disablePageScroll());
      },
      l = () => {
        t && (fo.enablePageScroll(), n(!1));
      };
    return g.jsx("div", {
      className: `fixed top-0 left-0 w-full z-50 border-b border-n-5 lg:bg-n-3/90 lg:backdrop-blur-sm ${
        t ? "bg-n-3" : "bg-n-3/90 backdrop-blur-sm"
      }`,
      children: g.jsxs("div", {
        className: "flex items-center px-6 lg:px-6.5 xl:px-10 max-lg:py-3",
        children: [
          g.jsx("a", {
            className: "block w-[7rem] xl:mr-5",
            href: "#hero",
            children: g.jsx("img", {
              src: Y0,
              width: 30,
              height: 35,
              alt: "home",
            }),
          }),
          g.jsxs("nav", {
            className: `${
              t ? "flex" : "hidden"
            } fixed top-[4rem] left-0 right-0 bottom-0 bg-n-3 lg:static lg:flex lg:mx-auto lg:bg-transparent`,
            children: [
              g.jsx("div", {
                className:
                  "relative z-2 flex flex-col justify-center items-center m-auto lg:flex-row",
                children: tp.map((o) =>
                  g.jsx(
                    "a",
                    {
                      href: o.url,
                      onClick: l,
                      className: `block relative font-robotoMono text-2xl uppercase text-n-2 text-center transition-colors hover:text-color-1 ${
                        o.onlyMobile ? "lg:hidden" : ""
                      } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-[0.85rem] lg:font-semibold ${
                        o.url === e.hash ? "z-2 lg:text-n-2" : "lg:text-n-2/50"
                      } lg:leading-5 lg:hover:text-n-2 xl:px-12`,
                      children: o.title,
                    },
                    o.id
                  )
                ),
              }),
              g.jsx(ip, {}),
            ],
          }),
          g.jsx(sp, {
            className: "ml-auto lg:hidden",
            px: "px-3",
            onClick: r,
            children: g.jsx(ap, { openNavigation: t }),
          }),
        ],
      }),
    });
  },
  vr = ({ className: e, id: t, customPaddings: n, children: r }) =>
    g.jsxs("div", {
      id: t,
      className: `relative ${n || "py-10 lg:py-16 xl:py-20"} ${e || ""}`,
      children: [
        r,
        g.jsx("div", {
          className:
            "hidden absolute top-0 left-5 w-0.25 h-full pointer-events-none md:block lg:left-7.5 xl:left-10",
        }),
        g.jsx("div", {
          className:
            "hidden absolute top-0 right-5 w-0.25 h-full pointer-events-none md:block lg:right-7.5 xl:right-10",
        }),
      ],
    }),
  fp = () => {
    function e(t) {
      return new Promise((n) => setTimeout(n, t));
    }
    setTimeout(() => {
      const t = ["Developer", "Designer"],
        n = document.getElementById("typewriter");
      let r = 100,
        l = 0;
      (async () => {
        for (;;) {
          let i = t[l];
          for (let u = 0; u < i.length; u++)
            (n.innerText = i.substring(0, u + 1)), await e(r);
          await e(r * 10);
          for (let u = i.length; u > 0; u--)
            (n.innerText = i.substring(0, u - 1)), await e(r);
          await e(r * 5), l === t.length - 1 ? (l = 0) : l++;
        }
      })();
    }, 2e3);
  },
  dp = () =>
    g.jsx(vr, {
      className: "!px-0 !py-10 min-h-screen flex justify-center items-center",
      id: "hero",
      children: g.jsx("div", {
        className: "container",
        children: g.jsxs("div", {
          className: "max-w-[62rem] mx-auto",
          children: [
            g.jsxs("h5", {
              className: "h5 text-center",
              children: [
                "Hi, I'm ",
                g.jsx("span", { children: "Ameera" }),
                " & I'm a",
              ],
            }),
            g.jsxs("h1", {
              className: "h1 text-center",
              children: [
                "Web ",
                g.jsx("span", { id: "typewriter", children: g.jsx(fp, {}) }),
                g.jsx("span", { id: "cursor", children: "|" }),
              ],
            }),
          ],
        }),
      }),
    }),
  pp = () =>
    g.jsx(vr, {
      className: "bg-n-3",
      id: "about",
      children: g.jsx("div", {
        className: "container py-7 lg:py-16 xl:py-20 z-2",
        children: g.jsx("div", {
          className: "container flex justify-center items-center",
          children: g.jsxs("div", {
            className: "max-w-[45rem]",
            children: [
              g.jsx("h2", { className: "h2", children: "./About Me" }),
              g.jsxs("div", {
                children: [
                  g.jsx("p", {
                    className: "p",
                    children: po.map((e) =>
                      g.jsx(
                        "div",
                        {
                          className: "mb-3 py-3",
                          children:
                            e.text &&
                            g.jsx("p", {
                              className: "body-2 mt-3 text-n-2",
                              children: e.text,
                            }),
                        },
                        e.id
                      )
                    ),
                  }),
                  g.jsx("div", {
                    children: g.jsx("p", {
                      className: "body-2 mt-3 text-n-2",
                      children:
                        "Here are some technologies I've been working with:",
                    }),
                  }),
                  g.jsx("div", {
                    className: "mt-3 grid grid-cols-2 gap-2",
                    children: rp.map((e) =>
                      g.jsxs(
                        "div",
                        {
                          className: "flex flex-wrap",
                          children: [
                            g.jsx("img", {
                              className: "body-2 mt-2",
                              src: Ps,
                              width: 24,
                              height: 24,
                              alt: Ps,
                            }),
                            e.skill &&
                              g.jsx("p", {
                                className: "body-2 mt-2 text-n-2",
                                children: e.skill,
                              }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
                  g.jsx("p", {
                    className: "p",
                    children: po.map((e) =>
                      g.jsx(
                        "div",
                        {
                          className: "mb-2 py-3",
                          children:
                            e.text2 &&
                            g.jsx("p", {
                              className: "body-2 mt-3 text-n-2",
                              children: e.text2,
                            }),
                        },
                        e.id
                      )
                    ),
                  }),
                  g.jsx("p", {
                    className: "p",
                    children: po.map((e) =>
                      g.jsx(
                        "div",
                        {
                          className: "mb-3 py-2",
                          children:
                            e.text3 &&
                            g.jsx("p", {
                              className: "body-2 mt-2 text-n-2",
                              children: e.text3,
                            }),
                        },
                        e.id
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  mp = () =>
    g.jsx("div", {
      className:
        "absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#20306c] to-[#20306c]/0 to-60% pointer-events-none",
    }),
  hp = () =>
    g.jsx(vr, {
      className: "bg-n-3",
      id: "projects",
      children: g.jsxs("div", {
        className: "container py-7 lg:py-16 xl:py-20 z-1",
        children: [
          g.jsx("h2", { className: "h2", children: "./Projects" }),
          g.jsx("div", {
            className:
              "flex flex-wrap justify-center items-center gap-8 mt-8 mb-10",
            children: lp.map((e) => {
              const t = e.status === "done" ? "Completed" : "In progress";
              return g.jsxs(
                "div",
                {
                  className:
                    "block relative p-1 bg-no-repeat bg-[length:100%_100%] border border-solid border-n-4 rounded-[2.5rem] sm:max-w-[24rem] transition delay-150 hover:bg-color-4 hover:translate-y-1",
                  children: [
                    g.jsx(mp, {}),
                    g.jsxs("div", {
                      className:
                        "relative flex flex-col min-h-[22rem] p-[2.4rem] pointer-events: auto",
                      children: [
                        g.jsxs("div", {
                          children: [
                            g.jsx("h5", {
                              className: "h5 mb-5",
                              children: e.title,
                            }),
                            g.jsx("p", {
                              className: "inline-block body-2 mb-6 text-n-2",
                              children: e.description,
                            }),
                          ],
                        }),
                        g.jsxs("div", {
                          className:
                            "flex grid-cols-2 justify-between mt-auto z-2",
                          children: [
                            g.jsx("div", {
                              children: g.jsxs("p", {
                                className:
                                  "ml-auto font-robotoMono text-xs font-bold text-n-1 uppercase tracking-wider",
                                children: [
                                  g.jsx("img", {
                                    className: "inline-block mr-1.5",
                                    src: e.status === "done" ? X0 : Z0,
                                    width: 18,
                                    height: 18,
                                    alt: t,
                                  }),
                                  g.jsx("span", { children: t }),
                                ],
                              }),
                            }),
                            g.jsx("div", {
                              className: "flex flex-wrap gap-3 z-3",
                              children: op.map((n) =>
                                g.jsx(
                                  "div",
                                  {
                                    children: g.jsx("a", {
                                      href: n.url,
                                      target: "_blank",
                                      className:
                                        "h-9 w-9 md:h-10 md:w-10 rounded-full transition-colors hover:bg-n-6",
                                      children: g.jsx("img", {
                                        src: n.iconUrl,
                                        width: 20,
                                        height: 20,
                                        alt: n.iconUrl,
                                        className:
                                          "md:h-7 md:w-7 rounded-full transition-colors hover:bg-n-6",
                                      }),
                                    }),
                                  },
                                  n.id
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.id
              );
            }),
          }),
        ],
      }),
    }),
  vp = () =>
    g.jsx(vr, {
      className: "bg-n-3 py-7 lg:py-16 xl:py-20 z-1",
      customPaddings: !0,
      id: "sayhi",
      children: g.jsx("div", {
        className: "container py-7 lg:py-16 xl:py-20 z-2",
        children: g.jsx("div", {
          className: "container flex justify-center items-center",
          children: g.jsxs("div", {
            className: "max-w-[45rem] mb-8",
            children: [
              g.jsx("h2", {
                className: "h2 text-center",
                children: "./Drop me a message",
              }),
              g.jsx("div", {
                className: "flex justify-center items-center mt-5",
                children: g.jsx("ul", {
                  className: "flex gap-5 flex-wrap",
                  children: np.map((e) =>
                    g.jsx(
                      "a",
                      {
                        href: e.url,
                        target: "_blank",
                        className:
                          "w-9 h-9 md:w-11 md:h-11 flex items-center justify-center bg-n-3 rounded-full transition-colors hover:bg-n-6",
                        children: g.jsx("img", {
                          src: e.iconUrl,
                          width: 30,
                          height: 30,
                          alt: e.title,
                          className: "text-center md:h-10 md:w-10",
                        }),
                      },
                      e.id
                    )
                  ),
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  gp = () =>
    g.jsx(vr, {
      className: "!px-0 !py-10",
      children: g.jsxs("div", {
        className: "container block ",
        children: [
          g.jsx("p", {
            className: "caption text-color-2 text-center",
            children: "Built and designed by Ameera.",
          }),
          g.jsxs("p", {
            className: "caption mt-1 text-color-2 text-center",
            children: [
              "© ",
              new Date().getFullYear(),
              ". All rights reserved.",
            ],
          }),
        ],
      }),
    }),
  yp = () =>
    g.jsx(g.Fragment, {
      children: g.jsxs("div", {
        className: "pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden",
        children: [
          g.jsx(cp, {}),
          g.jsx(dp, {}),
          g.jsx(pp, {}),
          g.jsx(hp, {}),
          g.jsx(vp, {}),
          g.jsx(gp, {}),
        ],
      }),
    });
mo.createRoot(document.getElementById("root")).render(
  g.jsx(As.StrictMode, { children: g.jsx(K0, { children: g.jsx(yp, {}) }) })
);
