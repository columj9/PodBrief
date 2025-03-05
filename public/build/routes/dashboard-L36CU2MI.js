import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
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

// app/routes/dashboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1741168944915";
}
var meta = () => {
  return [{
    title: "Dashboard - AudioInbox"
  }, {
    name: "description",
    content: "AudioInbox user dashboard"
  }];
};
function Dashboard() {
  const recentPodcasts = [{
    id: 1,
    title: "Morning Brew - June 23",
    duration: "14:25",
    date: "June 23, 2023"
  }, {
    id: 2,
    title: "The Hustle - June 22",
    duration: "11:38",
    date: "June 22, 2023"
  }, {
    id: 3,
    title: "TLDR Newsletter - June 21",
    duration: "9:17",
    date: "June 21, 2023"
  }];
  const connectedEmails = [{
    id: 1,
    provider: "Gmail",
    email: "user@gmail.com",
    status: "Connected"
  }, {
    id: 2,
    provider: "Outlook",
    email: "user@outlook.com",
    status: "Connected"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 68,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 67,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Dashboard" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 74,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/podcasts", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "My Podcasts" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/email-connect", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Email Connections" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/settings", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Settings" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "bg-white dark:bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 92,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300", children: "U" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 93,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 91,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 90,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 89,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 88,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold text-gray-900 dark:text-white", children: "Dashboard" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-5 sm:p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400 truncate", children: "Total Podcasts" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 114,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-3xl font-semibold text-gray-900 dark:text-white", children: "17" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 117,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 112,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-5 sm:p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400 truncate", children: "Connected Newsletters" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 126,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-3xl font-semibold text-gray-900 dark:text-white", children: "8" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 129,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 125,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 124,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-5 sm:p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400 truncate", children: "Listening Time" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 138,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-3xl font-semibold text-gray-900 dark:text-white", children: "3.5 hrs" }, void 0, false, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 141,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 137,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 136,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-8 text-lg font-medium text-gray-900 dark:text-white", children: "Recent Podcasts" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: recentPodcasts.map((podcast) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/podcasts/${podcast.id}`, className: "block hover:bg-gray-50 dark:hover:bg-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-4 sm:px-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-indigo-600 dark:text-indigo-400 truncate", children: podcast.title }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 157,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2 flex-shrink-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", children: podcast.duration }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 161,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 160,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 156,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 sm:flex sm:justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "flex items-center text-sm text-gray-500 dark:text-gray-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z", clipRule: "evenodd" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 170,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 169,
                columnNumber: 29
              }, this),
              "Generated on ",
              podcast.date
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 168,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 167,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "flex-shrink-0 mr-1.5 h-5 w-5 text-indigo-500 dark:text-indigo-400", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 177,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 176,
                columnNumber: 27
              }, this),
              "Play now"
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 175,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 166,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 155,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 154,
          columnNumber: 19
        }, this) }, podcast.id, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 153,
          columnNumber: 46
        }, this)) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-3 bg-gray-50 dark:bg-gray-700 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/podcasts", className: "text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300", children: "View all podcasts \u2192" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 187,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 186,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-8 text-lg font-medium text-gray-900 dark:text-white", children: "Connected Email Accounts" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 194,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: connectedEmails.map((account) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-4 sm:px-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 dark:text-white truncate", children: account.email }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 200,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2 flex-shrink-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", children: account.status }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 204,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 203,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 199,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 211,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" }, void 0, false, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 212,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 210,
              columnNumber: 23
            }, this),
            account.provider
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 209,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 198,
          columnNumber: 19
        }, this) }, account.id, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 197,
          columnNumber: 47
        }, this)) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-3 bg-gray-50 dark:bg-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/email-connect", className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "Connect New Email" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 220,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 219,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default,
  meta
};
//# sourceMappingURL=/build/routes/dashboard-L36CU2MI.js.map
