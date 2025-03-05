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
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/signup.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/signup.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/signup.tsx"
  );
  import.meta.hot.lastModified = "1741169622149";
}
var meta = () => {
  return [{
    title: "Sign Up - AudioInbox"
  }, {
    name: "description",
    content: "Create your AudioInbox account"
  }];
};
function SignUp() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 39,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white", children: "Create your account" }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-sm text-gray-600 dark:text-gray-400", children: [
        "Or",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400", children: "sign in to your existing account" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "group relative w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600", onClick: () => {
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-500 dark:text-gray-400", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        "Sign up with Google"
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "group relative w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600", onClick: () => {
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-500 dark:text-gray-400", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M7.88 12.04c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32zm8.32 0c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32zm8 0c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32z" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        "Sign up with Microsoft"
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-8 space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "remember", defaultValue: "true" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-md shadow-sm -space-y-px", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 76,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email-address", name: "email", type: "email", autoComplete: "email", required: true, className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm", placeholder: "Email address" }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 77,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "sr-only", children: "Password" }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 80,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "current-password", required: true, className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm", placeholder: "Password" }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 81,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "Sign up" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = SignUp;
var _c;
$RefreshReg$(_c, "SignUp");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignUp as default,
  meta
};
//# sourceMappingURL=/build/routes/signup-LVTJ74ZE.js.map
