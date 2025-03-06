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

// app/routes/podcasts.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/podcasts.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/podcasts.tsx"
  );
  import.meta.hot.lastModified = "1741220843107.5298";
}
var meta = () => {
  return [{
    title: "My Podcasts - AudioInbox"
  }, {
    name: "description",
    content: "Your AudioInbox Podcasts"
  }];
};
function Podcasts() {
  _s();
  const [filter, setFilter] = (0, import_react.useState)("all");
  const podcasts = [{
    id: 1,
    title: "Morning Brew - June 23",
    source: "Morning Brew",
    duration: "14:25",
    date: "June 23, 2023",
    listened: true,
    image: "https://placehold.co/80x80/4F46E5/FFFFFF?text=MB"
  }, {
    id: 2,
    title: "The Hustle - June 22",
    source: "The Hustle",
    duration: "11:38",
    date: "June 22, 2023",
    listened: true,
    image: "https://placehold.co/80x80/4F46E5/FFFFFF?text=TH"
  }, {
    id: 3,
    title: "TLDR Newsletter - June 21",
    source: "TLDR",
    duration: "9:17",
    date: "June 21, 2023",
    listened: false,
    image: "https://placehold.co/80x80/4F46E5/FFFFFF?text=TLDR"
  }, {
    id: 4,
    title: "Platformer - June 20",
    source: "Platformer",
    duration: "17:42",
    date: "June 20, 2023",
    listened: false,
    image: "https://placehold.co/80x80/4F46E5/FFFFFF?text=PF"
  }, {
    id: 5,
    title: "Benedict Evans - June 18",
    source: "Benedict Evans",
    duration: "12:05",
    date: "June 18, 2023",
    listened: false,
    image: "https://placehold.co/80x80/4F46E5/FFFFFF?text=BE"
  }];
  const filteredPodcasts = filter === "all" ? podcasts : filter === "unplayed" ? podcasts.filter((p) => !p.listened) : podcasts.filter((p) => p.listened);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, false, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 88,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, false, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 90,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/dashboard", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Dashboard" }, void 0, false, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/podcasts", className: "border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "My Podcasts" }, void 0, false, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 97,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/email-connect", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Email Connections" }, void 0, false, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/settings", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Settings" }, void 0, false, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 93,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "bg-white dark:bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 112,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300", children: "U" }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 113,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 111,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 110,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 109,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/podcasts.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/podcasts.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/podcasts.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold text-gray-900 dark:text-white", children: "My Podcasts" }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 sm:mt-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex shadow-sm rounded-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setFilter("all"), className: `relative inline-flex items-center px-4 py-2 rounded-l-md border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${filter === "all" ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"}`, children: "All" }, void 0, false, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setFilter("unplayed"), className: `relative inline-flex items-center px-4 py-2 border-t border-b text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${filter === "unplayed" ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"}`, children: "Unplayed" }, void 0, false, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setFilter("played"), className: `relative inline-flex items-center px-4 py-2 rounded-r-md border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${filter === "played" ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"}`, children: "Played" }, void 0, false, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 137,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 127,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md", children: filteredPodcasts.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: filteredPodcasts.map((podcast) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/podcasts/${podcast.id}`, className: "block hover:bg-gray-50 dark:hover:bg-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-4 sm:px-6 flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0 h-20 w-20 mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: podcast.image, alt: podcast.source, className: "rounded-md" }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 151,
          columnNumber: 27
        }, this) }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 150,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: `text-lg font-medium truncate ${podcast.listened ? "text-gray-500 dark:text-gray-400" : "text-indigo-600 dark:text-indigo-400"}`, children: podcast.title }, void 0, false, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 155,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-2 flex-shrink-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200", children: podcast.duration }, void 0, false, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 159,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 158,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 154,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center text-sm text-gray-500 dark:text-gray-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, false, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 167,
                columnNumber: 33
              }, this) }, void 0, false, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 166,
                columnNumber: 31
              }, this),
              podcast.source
            ] }, void 0, true, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 165,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: podcast.date }, void 0, false, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 171,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 164,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex justify-between items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-1", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" }, void 0, false, {
                    fileName: "app/routes/podcasts.tsx",
                    lineNumber: 179,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, false, {
                    fileName: "app/routes/podcasts.tsx",
                    lineNumber: 180,
                    columnNumber: 35
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/podcasts.tsx",
                  lineNumber: 178,
                  columnNumber: 33
                }, this),
                "Play"
              ] }, void 0, true, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 177,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-1", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" }, void 0, false, {
                  fileName: "app/routes/podcasts.tsx",
                  lineNumber: 186,
                  columnNumber: 35
                }, this) }, void 0, false, {
                  fileName: "app/routes/podcasts.tsx",
                  lineNumber: 185,
                  columnNumber: 33
                }, this),
                "Download"
              ] }, void 0, true, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 184,
                columnNumber: 31
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 176,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: podcast.listened ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-xs text-gray-500 dark:text-gray-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-1", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1  1 0 001.414 0l4-4z", clipRule: "evenodd" }, void 0, false, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 194,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 193,
                columnNumber: 35
              }, this),
              "Listened"
            ] }, void 0, true, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 192,
              columnNumber: 51
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-xs text-blue-600 dark:text-blue-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-1", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" }, void 0, false, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 199,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 198,
                columnNumber: 35
              }, this),
              "New"
            ] }, void 0, true, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 197,
              columnNumber: 43
            }, this) }, void 0, false, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 191,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 175,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 153,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 149,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 148,
        columnNumber: 21
      }, this) }, podcast.id, false, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 147,
        columnNumber: 50
      }, this)) }, void 0, false, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 146,
        columnNumber: 44
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-12 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "mx-auto h-12 w-12 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 211,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 210,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mt-2 text-sm font-medium text-gray-900 dark:text-white", children: "No podcasts found" }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 213,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: filter === "unplayed" ? "You've listened to all your podcasts! Check back later for new content." : filter === "played" ? "You haven't listened to any podcasts yet." : "Connect your email to start receiving newsletter podcasts." }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 214,
          columnNumber: 17
        }, this),
        filter === "all" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/email-connect", className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "Connect Email" }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 218,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 217,
          columnNumber: 38
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 209,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 145,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/podcasts.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/podcasts.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/podcasts.tsx",
    lineNumber: 79,
    columnNumber: 10
  }, this);
}
_s(Podcasts, "boPJerHaELAyf+PNkR+Y8+JetQg=");
_c = Podcasts;
var _c;
$RefreshReg$(_c, "Podcasts");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Podcasts as default,
  meta
};
//# sourceMappingURL=/build/routes/podcasts-KNSWUBX3.js.map
