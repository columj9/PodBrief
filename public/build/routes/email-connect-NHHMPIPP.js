import {
  Link
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

// app/routes/email-connect.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/email-connect.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/email-connect.tsx"
  );
  import.meta.hot.lastModified = "1741220843106.851";
}
var meta = () => {
  return [{
    title: "Connect Email - AudioInbox"
  }, {
    name: "description",
    content: "Connect your email accounts to AudioInbox"
  }];
};
function EmailConnect() {
  _s();
  const [selectedProvider, setSelectedProvider] = (0, import_react.useState)(null);
  const connectedAccounts = [{
    id: 1,
    provider: "Gmail",
    email: "user@gmail.com",
    status: "Connected",
    lastSync: "Today, 10:35 AM"
  }, {
    id: 2,
    provider: "Outlook",
    email: "user@outlook.com",
    status: "Connected",
    lastSync: "Yesterday, 3:22 PM"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 59,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 58,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 61,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Dashboard" }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 65,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/podcasts", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "My Podcasts" }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/email-connect", className: "border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Email Connections" }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/settings", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Settings" }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      "            ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "bg-white dark:bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, false, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 82,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300", children: "U" }, void 0, false, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 83,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 81,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 79,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 78,
        columnNumber: 31
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/email-connect.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/email-connect.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/email-connect.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold text-gray-900 dark:text-white", children: "Connect Email Accounts" }, void 0, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-400", children: "Connect your email accounts to automatically find and convert newsletters into podcasts. AudioInbox only scans for newsletter content and never accesses personal emails." }, void 0, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-8 text-lg font-medium text-gray-900 dark:text-white", children: "Connected Accounts" }, void 0, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md", children: connectedAccounts.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: connectedAccounts.map((account) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-4 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: account.provider === "Gmail" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6 text-red-500", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 112,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 111,
            columnNumber: 61
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-6 w-6 text-blue-500", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M21.17 3.25H2.83c-.76 0-1.38.62-1.38 1.38v14.74c0 .76.62 1.38 1.38 1.38h18.34c.76 0 1.38-.62 1.38-1.38V4.63c0-.76-.62-1.38-1.38-1.38zm-6.99 9.97l-3.43 2.58c-.12.09-.26.14-.41.14-.15 0-.29-.05-.41-.14l-8.18-6.12c-.23-.17-.28-.5-.11-.73.17-.23.5-.28.73-.11l7.97 5.97 10.06-7.55c.23-.17.55-.12.73.11.17.23.12.55-.11.73l-6.85 5.12z" }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 114,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 113,
            columnNumber: 40
          }, this) }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 110,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 dark:text-white", children: account.email }, void 0, false, {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 118,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
              account.provider,
              " \u2022 Last sync: ",
              account.lastSync
            ] }, void 0, true, {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 121,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 117,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 109,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2 flex-shrink-0 flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", children: account.status }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 127,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "ml-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300", "aria-label": "Disconnect account", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 132,
            columnNumber: 31
          }, this) }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 131,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 130,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 126,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 108,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 107,
        columnNumber: 21
      }, this) }, account.id, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 106,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 105,
        columnNumber: 45
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-12 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "mx-auto h-12 w-12 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }, void 0, false, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 141,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 140,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-2 text-sm font-medium text-gray-900 dark:text-white", children: "No connected accounts" }, void 0, false, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 143,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Get started by connecting an email account." }, void 0, false, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 144,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 139,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-8 text-lg font-medium text-gray-900 dark:text-white", children: "Connect a New Account" }, void 0, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 149,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-5 sm:p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setSelectedProvider("Gmail"), className: `relative block border rounded-lg p-6 focus:outline-none ${selectedProvider === "Gmail" ? "border-indigo-500 ring-2 ring-indigo-500 dark:border-indigo-400 dark:ring-indigo-400" : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-10 w-10 text-red-500", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" }, void 0, false, {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 156,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 155,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: "Google Gmail" }, void 0, false, {
                fileName: "app/routes/email-connect.tsx",
                lineNumber: 159,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Connect your Gmail account to import newsletters" }, void 0, false, {
                fileName: "app/routes/email-connect.tsx",
                lineNumber: 160,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 158,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 154,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 153,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setSelectedProvider("Outlook"), className: `relative block border rounded-lg p-6 focus:outline-none ${selectedProvider === "Outlook" ? "border-indigo-500 ring-2 ring-indigo-500 dark:border-indigo-400 dark:ring-indigo-400" : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-10 w-10 text-blue-500", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M21.17 3.25H2.83c-.76 0-1.38.62-1.38 1.38v14.74c0 .76.62 1.38 1.38 1.38h18.34c.76 0 1.38-.62 1.38-1.38V4.63c0-.76-.62-1.38-1.38-1.38zm-6.99 9.97l-3.43 2.58c-.12.09-.26.14-.41.14-.15 0-.29-.05-.41-.14l-8.18-6.12c-.23-.17-.28-.5-.11-.73.17-.23.5-.28.73-.11l7.97 5.97 10.06-7.55c.23-.17.55-.12.73.11.17.23.12.55-.11.73l-6.85 5.12z" }, void 0, false, {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 168,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 167,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: "Microsoft Outlook" }, void 0, false, {
                fileName: "app/routes/email-connect.tsx",
                lineNumber: 171,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Connect your Outlook account to import newsletters" }, void 0, false, {
                fileName: "app/routes/email-connect.tsx",
                lineNumber: 172,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 170,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 166,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this),
        selectedProvider && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: [
            "Connect ",
            selectedProvider
          ] }, void 0, true, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 179,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "ml-3 inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", onClick: () => setSelectedProvider(null), children: "Cancel" }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 182,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 178,
          columnNumber: 36
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 bg-blue-50 dark:bg-blue-900 rounded-md p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 text-blue-400 dark:text-blue-300", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 194,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 193,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 192,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 flex-1 md:flex md:justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-blue-700 dark:text-blue-200", children: "AudioInbox only scans for newsletter content and never reads personal emails. We use read-only access with strict privacy controls." }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 198,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-sm md:mt-0 md:ml-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/privacy", className: "whitespace-nowrap font-medium text-blue-700 hover:text-blue-600 dark:text-blue-200 dark:hover:text-blue-100", children: [
            "Privacy details ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 203,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 202,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 201,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 197,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 191,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/email-connect.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/email-connect.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/email-connect.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(EmailConnect, "wC/LCyMFTi8Q2JBpH82pVI/gsdA=");
_c = EmailConnect;
var _c;
$RefreshReg$(_c, "EmailConnect");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EmailConnect as default,
  meta
};
//# sourceMappingURL=/build/routes/email-connect-NHHMPIPP.js.map
