import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Form,
  Link
} from "/build/_shared/chunk-IWU7O6DV.js";
import {
  createHotContext
} from "/build/_shared/chunk-HROVJQA4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/login.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/login.tsx"
  );
  import.meta.hot.lastModified = "1741168944885";
}
var meta = () => {
  return [{
    title: "Log In - AudioInbox"
  }, {
    name: "description",
    content: "Log in to your AudioInbox account"
  }];
};
function Login() {
  _s();
  const [isEmailLogin, setIsEmailLogin] = (0, import_react.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white", children: "Sign in to your account" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-sm text-gray-600 dark:text-gray-400", children: [
        "Or",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/signup", className: "font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400", children: "create a new account" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "group relative w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600", onClick: () => {
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-500 dark:text-gray-400", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 61,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 60,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        "Continue with Google"
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "group relative w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600", onClick: () => {
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-500 dark:text-gray-400", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M7.88 12.04c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32zm8.32 0c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32zm8 0c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32z" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        "Continue with Microsoft"
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-t border-gray-300 dark:border-gray-600" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400", children: "Or continue with" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-4 space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "remember", defaultValue: "true" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email-address", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Email address" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 88,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email-address", name: "email", type: "email", autoComplete: "email", required: true, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Password" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/forgot-password", className: "font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400", children: "Forgot your password?" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 102,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 101,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 108,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "remember-me", name: "remember-me", type: "checkbox", className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 rounded" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 114,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-gray-900 dark:text-gray-300", children: "Remember me" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 115,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 113,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600", children: "Sign in" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(Login, "VTCuaTY/Bc4VdEpTL6Sf0+bU8rI=");
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default,
  meta
};
//# sourceMappingURL=/build/routes/login-4XDH77SW.js.map
