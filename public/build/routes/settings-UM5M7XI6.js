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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/settings.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/settings.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/settings.tsx"
  );
  import.meta.hot.lastModified = "1741168945839";
}
var meta = () => {
  return [{
    title: "Settings - AudioInbox"
  }, {
    name: "description",
    content: "AudioInbox user settings"
  }];
};
function Settings() {
  _s();
  const [voicePreference, setVoicePreference] = (0, import_react.useState)("natural");
  const [deliveryTime, setDeliveryTime] = (0, import_react.useState)("morning");
  const [contentLength, setContentLength] = (0, import_react.useState)("medium");
  const [darkMode, setDarkMode] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 47,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 46,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 49,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 45,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Dashboard" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 53,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/podcasts", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "My Podcasts" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/email-connect", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Email Connections" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/settings", className: "border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Settings" }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "bg-white dark:bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 71,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300", children: "U" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 72,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 70,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 69,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 68,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold text-gray-900 dark:text-white", children: "Settings" }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 space-y-8 divide-y divide-gray-200 dark:divide-gray-700", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg leading-6 font-medium text-gray-900 dark:text-white", children: "Account" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 92,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Manage your account settings and preferences." }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 93,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "first-name", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "First name" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 99,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "first-name", id: "first-name", defaultValue: "Jane", className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 103,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 102,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Last name" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 108,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "last-name", id: "last-name", defaultValue: "Smith", className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 112,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 111,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 107,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Email address" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 117,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", name: "email", type: "email", defaultValue: "jane@example.com", className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 121,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 120,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 116,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg leading-6 font-medium text-gray-900 dark:text-white", children: "Podcast Preferences" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 130,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Customize how your newsletters are converted to audio." }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 131,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 129,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "text-base font-medium text-gray-900 dark:text-white", children: "Voice Type" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 138,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 space-y-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "voice-natural", name: "voice-type", type: "radio", checked: voicePreference === "natural", onChange: () => setVoicePreference("natural"), className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 141,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "voice-natural", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Natural Voice (Premium)" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 142,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 140,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "voice-standard", name: "voice-type", type: "radio", checked: voicePreference === "standard", onChange: () => setVoicePreference("standard"), className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 147,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "voice-standard", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Standard Voice" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 148,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 146,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 139,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 137,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "text-base font-medium text-gray-900 dark:text-white", children: "Delivery Time" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 158,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 space-y-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "time-morning", name: "delivery-time", type: "radio", checked: deliveryTime === "morning", onChange: () => setDeliveryTime("morning"), className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 161,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "time-morning", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Morning (7:00 AM)" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 162,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 160,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "time-afternoon", name: "delivery-time", type: "radio", checked: deliveryTime === "afternoon", onChange: () => setDeliveryTime("afternoon"), className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 167,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "time-afternoon", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Afternoon (12:00 PM)" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 168,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 166,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "time-evening", name: "delivery-time", type: "radio", checked: deliveryTime === "evening", onChange: () => setDeliveryTime("evening"), className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 173,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "time-evening", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Evening (6:00 PM)" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 174,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 172,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 159,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 157,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "text-base font-medium text-gray-900 dark:text-white", children: "Content Length" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 184,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 space-y-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "length-short", name: "content-length", type: "radio", checked: contentLength === "short", onChange: () => setContentLength("short"), className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 187,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "length-short", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Short (~5 minutes) - Brief summary only" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 188,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 186,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "length-medium", name: "content-length", type: "radio", checked: contentLength === "medium", onChange: () => setContentLength("medium"), className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 193,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "length-medium", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Medium (~10-15 minutes) - Key details with some context" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 194,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 192,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "length-full", name: "content-length", type: "radio", checked: contentLength === "full", onChange: () => setContentLength("full"), className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 199,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "length-full", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Comprehensive (~20-30 minutes) - Full newsletter content" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 200,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 198,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 185,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 183,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg leading-6 font-medium text-gray-900 dark:text-white", children: "App Settings" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 212,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Customize the app experience." }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 213,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 211,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center h-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "dark-mode", name: "dark-mode", type: "checkbox", checked: darkMode, onChange: () => setDarkMode(!darkMode), className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 220,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 219,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "dark-mode", className: "font-medium text-gray-700 dark:text-gray-300", children: "Dark Mode" }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 223,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 dark:text-gray-400", children: "Enables dark mode for the application interface." }, void 0, false, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 224,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 222,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 218,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 217,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg leading-6 font-medium text-gray-900 dark:text-white", children: "Subscription" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 233,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Manage your subscription plan." }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 234,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 232,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-5 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg leading-6 font-medium text-gray-900 dark:text-white", children: "Current Plan" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 240,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 239,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-700", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Plan" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 245,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2", children: "Premium" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 246,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 244,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Billing cycle" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 249,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2", children: "Monthly" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 250,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 248,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Next billing date" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 253,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2", children: "July 24, 2023" }, void 0, false, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 254,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 252,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 243,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 242,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600", children: "Manage Subscription" }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 259,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 258,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 238,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 231,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-5 mt-8 border-t border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "bg-white dark:bg-gray-800 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "Cancel" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 269,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600", children: "Save" }, void 0, false, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 272,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 268,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 267,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/settings.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(Settings, "kG90hBdltD2x7TJoThhSn3QMxFE=");
_c = Settings;
var _c;
$RefreshReg$(_c, "Settings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Settings as default,
  meta
};
//# sourceMappingURL=/build/routes/settings-UM5M7XI6.js.map
