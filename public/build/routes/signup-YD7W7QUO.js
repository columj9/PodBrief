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
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams
} from "/build/_shared/chunk-YY6NFXGK.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-E7EIBVLI.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/signup.tsx
var import_node = __toESM(require_node(), 1);
var import_supabase = __toESM(require_supabase(), 1);
var import_session = __toESM(require_session(), 1);
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/signup.tsx"
  );
  import.meta.hot.lastModified = "1741246731657.4993";
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
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [searchParams] = useSearchParams();
  const error = searchParams.get("error");
  if (actionData?.url) {
    window.location.href = actionData.url;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 147,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 149,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white", children: "Create your account" }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-center text-sm text-gray-600 dark:text-gray-400", children: [
        "Or",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400", children: "sign in to your existing account" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 157,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this),
    (actionData?.error || error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-red-600 text-sm text-center", children: actionData?.error || error }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 163,
      columnNumber: 42
    }, this),
    actionData?.message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-green-600 text-sm text-center", children: actionData.message }, void 0, false, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 164,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "provider", value: "google" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "group relative w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-500 dark:text-gray-400", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 172,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 170,
            columnNumber: 15
          }, this),
          "Sign up with Google"
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "group relative w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600", onClick: () => {
      }, disabled: true, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-gray-500 dark:text-gray-400", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M7.88 12.04c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32zm8.32 0c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32zm8 0c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32z" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 182,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 181,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this),
        "Sign up with Microsoft (Coming Soon)"
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full border-t border-gray-300 dark:border-gray-600" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 190,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 189,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400", children: "Or sign up with email" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 193,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 188,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-4 space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "first-name", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "First name" }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 200,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "first-name", name: "firstName", type: "text", autoComplete: "given-name", required: true, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 204,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 203,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 199,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Last name" }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 208,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "last-name", name: "lastName", type: "text", autoComplete: "family-name", required: true, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 212,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 211,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 198,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email-address", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Email address" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 218,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email-address", name: "email", type: "email", autoComplete: "email", required: true, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 222,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 221,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 217,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Password" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", name: "password", type: "password", autoComplete: "new-password", required: true, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 231,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 230,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "confirm-password", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Confirm password" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 236,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "confirm-password", name: "confirmPassword", type: "password", autoComplete: "new-password", required: true, className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 240,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 239,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 235,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "terms", name: "terms", type: "checkbox", required: true, className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 rounded" }, void 0, false, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 245,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "terms", className: "ml-2 block text-sm text-gray-900 dark:text-gray-300", children: [
            "I agree to the",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/terms", className: "text-indigo-600 hover:text-indigo-500 dark:text-indigo-400", children: "Terms of Service" }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 248,
              columnNumber: 17
            }, this),
            " ",
            "and",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/privacy", className: "text-indigo-600 hover:text-indigo-500 dark:text-indigo-400", children: "Privacy Policy" }, void 0, false, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 252,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 246,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 244,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 disabled:opacity-50", children: isSubmitting ? "Creating account..." : "Create account" }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 259,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 258,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 197,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 166,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 142,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 141,
    columnNumber: 10
  }, this);
}
_s(SignUp, "ClgZ5tI5wpSTHbFT0cOpgVjtWOI=", false, function() {
  return [useActionData, useNavigation, useSearchParams];
});
_c = SignUp;
var _c;
$RefreshReg$(_c, "SignUp");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignUp as default,
  meta
};
//# sourceMappingURL=/build/routes/signup-YD7W7QUO.js.map
