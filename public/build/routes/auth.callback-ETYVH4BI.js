import {
  require_supabase
} from "/build/_shared/chunk-L6MISQIZ.js";
import {
  require_session
} from "/build/_shared/chunk-V22J52NZ.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  useNavigate,
  useSearchParams
} from "/build/_shared/chunk-YY6NFXGK.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-E7EIBVLI.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/auth.callback.tsx
var import_node = __toESM(require_node(), 1);
var import_react = __toESM(require_react(), 1);
var import_supabase = __toESM(require_supabase(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/auth.callback.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/auth.callback.tsx"
  );
  import.meta.hot.lastModified = "1741246885624.4526";
}
function AuthCallback() {
  _s();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const next = searchParams.get("next") || "/dashboard";
  (0, import_react.useEffect)(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const params = new URLSearchParams(hash);
      const accessToken = params.get("access_token");
      console.log("Found access_token in fragment");
      if (accessToken) {
        const form = document.createElement("form");
        form.method = "post";
        form.action = "/auth/session";
        const tokenInput = document.createElement("input");
        tokenInput.type = "hidden";
        tokenInput.name = "access_token";
        tokenInput.value = accessToken;
        const nextInput = document.createElement("input");
        nextInput.type = "hidden";
        nextInput.name = "next";
        nextInput.value = next;
        form.appendChild(tokenInput);
        form.appendChild(nextInput);
        document.body.appendChild(form);
        form.submit();
        return;
      }
    }
    navigate("/login?error=No authentication token provided");
  }, [navigate, next]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-2", children: "Processing authentication..." }, void 0, false, {
      fileName: "app/routes/auth.callback.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 dark:text-gray-400", children: "Please wait while we complete your sign-in." }, void 0, false, {
      fileName: "app/routes/auth.callback.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth.callback.tsx",
    lineNumber: 105,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/auth.callback.tsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
}
_s(AuthCallback, "BL0/uIvqgnY+m2kKjm25nXv/8uc=", false, function() {
  return [useNavigate, useSearchParams];
});
_c = AuthCallback;
var _c;
$RefreshReg$(_c, "AuthCallback");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AuthCallback as default
};
//# sourceMappingURL=/build/routes/auth.callback-ETYVH4BI.js.map
