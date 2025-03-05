var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  Layout: () => Layout,
  default: () => App,
  links: () => links
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      children,
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}

// app/routes/email-connect.tsx
var email_connect_exports = {};
__export(email_connect_exports, {
  default: () => EmailConnect,
  meta: () => meta
});
import { useState } from "react";
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Connect Email - AudioInbox" },
  { name: "description", content: "Connect your email accounts to AudioInbox" }
];
function EmailConnect() {
  let [selectedProvider, setSelectedProvider] = useState(null), connectedAccounts = [
    { id: 1, provider: "Gmail", email: "user@gmail.com", status: "Connected", lastSync: "Today, 10:35 AM" },
    { id: 2, provider: "Outlook", email: "user@outlook.com", status: "Connected", lastSync: "Yesterday, 3:22 PM" }
  ];
  return /* @__PURE__ */ jsxDEV3("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsxDEV3("nav", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ jsxDEV3("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "flex", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ jsxDEV3(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV3("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 31,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 30,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV3("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 33,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ jsxDEV3(Link, { to: "/dashboard", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Dashboard" }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 37,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV3(Link, { to: "/podcasts", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "My Podcasts" }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 40,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV3(Link, { to: "/email-connect", className: "border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Email Connections" }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV3(Link, { to: "/settings", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Settings" }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this),
      "            ",
      /* @__PURE__ */ jsxDEV3("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: /* @__PURE__ */ jsxDEV3("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("button", { type: "button", className: "bg-white dark:bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: [
        /* @__PURE__ */ jsxDEV3("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 54,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300", children: "U" }, void 0, !1, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 55,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 53,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 51,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 50,
        columnNumber: 31
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/email-connect.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/email-connect.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/email-connect.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("main", { className: "py-10", children: /* @__PURE__ */ jsxDEV3("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV3("h1", { className: "text-2xl font-semibold text-gray-900 dark:text-white", children: "Connect Email Accounts" }, void 0, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("p", { className: "mt-2 text-sm text-gray-600 dark:text-gray-400", children: "Connect your email accounts to automatically find and convert newsletters into podcasts. AudioInbox only scans for newsletter content and never accesses personal emails." }, void 0, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("h2", { className: "mt-8 text-lg font-medium text-gray-900 dark:text-white", children: "Connected Accounts" }, void 0, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md", children: connectedAccounts.length > 0 ? /* @__PURE__ */ jsxDEV3("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: connectedAccounts.map((account) => /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("div", { className: "px-4 py-4 sm:px-6", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV3("div", { className: "flex-shrink-0", children: account.provider === "Gmail" ? /* @__PURE__ */ jsxDEV3("svg", { className: "h-6 w-6 text-red-500", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 87,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 86,
            columnNumber: 31
          }, this) : /* @__PURE__ */ jsxDEV3("svg", { className: "h-6 w-6 text-blue-500", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { d: "M21.17 3.25H2.83c-.76 0-1.38.62-1.38 1.38v14.74c0 .76.62 1.38 1.38 1.38h18.34c.76 0 1.38-.62 1.38-1.38V4.63c0-.76-.62-1.38-1.38-1.38zm-6.99 9.97l-3.43 2.58c-.12.09-.26.14-.41.14-.15 0-.29-.05-.41-.14l-8.18-6.12c-.23-.17-.28-.5-.11-.73.17-.23.5-.28.73-.11l7.97 5.97 10.06-7.55c.23-.17.55-.12.73.11.17.23.12.55-.11.73l-6.85 5.12z" }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 91,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 90,
            columnNumber: 31
          }, this) }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 84,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ jsxDEV3("div", { className: "ml-4", children: [
            /* @__PURE__ */ jsxDEV3("p", { className: "text-sm font-medium text-gray-900 dark:text-white", children: account.email }, void 0, !1, {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 96,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV3("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: [
              account.provider,
              " \u2022 Last sync: ",
              account.lastSync
            ] }, void 0, !0, {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 99,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 95,
            columnNumber: 27
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 83,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "ml-2 flex-shrink-0 flex", children: [
          /* @__PURE__ */ jsxDEV3("p", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", children: account.status }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 105,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ jsxDEV3(
            "button",
            {
              type: "button",
              className: "ml-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300",
              "aria-label": "Disconnect account",
              children: /* @__PURE__ */ jsxDEV3("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }, void 0, !1, {
                fileName: "app/routes/email-connect.tsx",
                lineNumber: 114,
                columnNumber: 31
              }, this) }, void 0, !1, {
                fileName: "app/routes/email-connect.tsx",
                lineNumber: 113,
                columnNumber: 29
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 108,
              columnNumber: 27
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 104,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 82,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 81,
        columnNumber: 21
      }, this) }, account.id, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 80,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 78,
        columnNumber: 15
      }, this) : /* @__PURE__ */ jsxDEV3("div", { className: "px-4 py-12 text-center", children: [
        /* @__PURE__ */ jsxDEV3("svg", { xmlns: "http://www.w3.org/2000/svg", className: "mx-auto h-12 w-12 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }, void 0, !1, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 126,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 125,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV3("h3", { className: "mt-2 text-sm font-medium text-gray-900 dark:text-white", children: "No connected accounts" }, void 0, !1, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 128,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV3("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Get started by connecting an email account." }, void 0, !1, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 129,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 124,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("h2", { className: "mt-8 text-lg font-medium text-gray-900 dark:text-white", children: "Connect a New Account" }, void 0, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md", children: /* @__PURE__ */ jsxDEV3("div", { className: "px-4 py-5 sm:p-6", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxDEV3(
            "button",
            {
              type: "button",
              onClick: () => setSelectedProvider("Gmail"),
              className: `relative block border rounded-lg p-6 focus:outline-none ${selectedProvider === "Gmail" ? "border-indigo-500 ring-2 ring-indigo-500 dark:border-indigo-400 dark:ring-indigo-400" : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"}`,
              children: /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV3("svg", { className: "h-10 w-10 text-red-500", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" }, void 0, !1, {
                  fileName: "app/routes/email-connect.tsx",
                  lineNumber: 150,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/email-connect.tsx",
                  lineNumber: 149,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { className: "ml-4", children: [
                  /* @__PURE__ */ jsxDEV3("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: "Google Gmail" }, void 0, !1, {
                    fileName: "app/routes/email-connect.tsx",
                    lineNumber: 153,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV3("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Connect your Gmail account to import newsletters" }, void 0, !1, {
                    fileName: "app/routes/email-connect.tsx",
                    lineNumber: 154,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/email-connect.tsx",
                  lineNumber: 152,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/email-connect.tsx",
                lineNumber: 148,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 139,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3(
            "button",
            {
              type: "button",
              onClick: () => setSelectedProvider("Outlook"),
              className: `relative block border rounded-lg p-6 focus:outline-none ${selectedProvider === "Outlook" ? "border-indigo-500 ring-2 ring-indigo-500 dark:border-indigo-400 dark:ring-indigo-400" : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"}`,
              children: /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV3("svg", { className: "h-10 w-10 text-blue-500", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { d: "M21.17 3.25H2.83c-.76 0-1.38.62-1.38 1.38v14.74c0 .76.62 1.38 1.38 1.38h18.34c.76 0 1.38-.62 1.38-1.38V4.63c0-.76-.62-1.38-1.38-1.38zm-6.99 9.97l-3.43 2.58c-.12.09-.26.14-.41.14-.15 0-.29-.05-.41-.14l-8.18-6.12c-.23-.17-.28-.5-.11-.73.17-.23.5-.28.73-.11l7.97 5.97 10.06-7.55c.23-.17.55-.12.73.11.17.23.12.55-.11.73l-6.85 5.12z" }, void 0, !1, {
                  fileName: "app/routes/email-connect.tsx",
                  lineNumber: 170,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/email-connect.tsx",
                  lineNumber: 169,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV3("div", { className: "ml-4", children: [
                  /* @__PURE__ */ jsxDEV3("h3", { className: "text-lg font-medium text-gray-900 dark:text-white", children: "Microsoft Outlook" }, void 0, !1, {
                    fileName: "app/routes/email-connect.tsx",
                    lineNumber: 173,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV3("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Connect your Outlook account to import newsletters" }, void 0, !1, {
                    fileName: "app/routes/email-connect.tsx",
                    lineNumber: 174,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/email-connect.tsx",
                  lineNumber: 172,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/email-connect.tsx",
                lineNumber: 168,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 159,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 138,
          columnNumber: 15
        }, this),
        selectedProvider && /* @__PURE__ */ jsxDEV3("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxDEV3(
            "button",
            {
              type: "button",
              className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: [
                "Connect ",
                selectedProvider
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 182,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ jsxDEV3(
            "button",
            {
              type: "button",
              className: "ml-3 inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              onClick: () => setSelectedProvider(null),
              children: "Cancel"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 188,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 181,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 137,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "mt-8 bg-blue-50 dark:bg-blue-900 rounded-md p-4", children: /* @__PURE__ */ jsxDEV3("div", { className: "flex", children: [
        /* @__PURE__ */ jsxDEV3("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxDEV3("svg", { className: "h-5 w-5 text-blue-400 dark:text-blue-300", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV3("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z", clipRule: "evenodd" }, void 0, !1, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 205,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 204,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 203,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV3("div", { className: "ml-3 flex-1 md:flex md:justify-between", children: [
          /* @__PURE__ */ jsxDEV3("p", { className: "text-sm text-blue-700 dark:text-blue-200", children: "AudioInbox only scans for newsletter content and never reads personal emails. We use read-only access with strict privacy controls." }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 209,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV3("p", { className: "mt-3 text-sm md:mt-0 md:ml-6", children: /* @__PURE__ */ jsxDEV3(Link, { to: "/privacy", className: "whitespace-nowrap font-medium text-blue-700 hover:text-blue-600 dark:text-blue-200 dark:hover:text-blue-100", children: [
            "Privacy details ",
            /* @__PURE__ */ jsxDEV3("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
              fileName: "app/routes/email-connect.tsx",
              lineNumber: 214,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 213,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/email-connect.tsx",
            lineNumber: 212,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/email-connect.tsx",
          lineNumber: 208,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 202,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/email-connect.tsx",
        lineNumber: 201,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/email-connect.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/email-connect.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/email-connect.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  meta: () => meta2
});
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "Dashboard - AudioInbox" },
  { name: "description", content: "AudioInbox user dashboard" }
];
function Dashboard() {
  let recentPodcasts = [
    { id: 1, title: "Morning Brew - June 23", duration: "14:25", date: "June 23, 2023" },
    { id: 2, title: "The Hustle - June 22", duration: "11:38", date: "June 22, 2023" },
    { id: 3, title: "TLDR Newsletter - June 21", duration: "9:17", date: "June 21, 2023" }
  ], connectedEmails = [
    { id: 1, provider: "Gmail", email: "user@gmail.com", status: "Connected" },
    { id: 2, provider: "Outlook", email: "user@outlook.com", status: "Connected" }
  ];
  return /* @__PURE__ */ jsxDEV4("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsxDEV4("nav", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ jsxDEV4("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "flex", children: [
        /* @__PURE__ */ jsxDEV4("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ jsxDEV4(Link2, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV4("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 34,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 33,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV4("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 36,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ jsxDEV4(Link2, { to: "/dashboard", className: "border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Dashboard" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 40,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV4(Link2, { to: "/podcasts", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "My Podcasts" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV4(Link2, { to: "/email-connect", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Email Connections" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV4(Link2, { to: "/settings", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Settings" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 39,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: /* @__PURE__ */ jsxDEV4("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4("button", { type: "button", className: "bg-white dark:bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: [
        /* @__PURE__ */ jsxDEV4("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 58,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300", children: "U" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 59,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 57,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 56,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("main", { className: "py-10", children: /* @__PURE__ */ jsxDEV4("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV4("h1", { className: "text-2xl font-semibold text-gray-900 dark:text-white", children: "Dashboard" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxDEV4("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ jsxDEV4("div", { className: "px-4 py-5 sm:p-6", children: /* @__PURE__ */ jsxDEV4("dl", { children: [
          /* @__PURE__ */ jsxDEV4("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400 truncate", children: "Total Podcasts" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 80,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV4("dd", { className: "mt-1 text-3xl font-semibold text-gray-900 dark:text-white", children: "17" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 83,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ jsxDEV4("div", { className: "px-4 py-5 sm:p-6", children: /* @__PURE__ */ jsxDEV4("dl", { children: [
          /* @__PURE__ */ jsxDEV4("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400 truncate", children: "Connected Newsletters" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 92,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV4("dd", { className: "mt-1 text-3xl font-semibold text-gray-900 dark:text-white", children: "8" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 95,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 91,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg", children: /* @__PURE__ */ jsxDEV4("div", { className: "px-4 py-5 sm:p-6", children: /* @__PURE__ */ jsxDEV4("dl", { children: [
          /* @__PURE__ */ jsxDEV4("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400 truncate", children: "Listening Time" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 104,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV4("dd", { className: "mt-1 text-3xl font-semibold text-gray-900 dark:text-white", children: "3.5 hrs" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 107,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 103,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("h2", { className: "mt-8 text-lg font-medium text-gray-900 dark:text-white", children: "Recent Podcasts" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md", children: [
        /* @__PURE__ */ jsxDEV4("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: recentPodcasts.map((podcast) => /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4(Link2, { to: `/podcasts/${podcast.id}`, className: "block hover:bg-gray-50 dark:hover:bg-gray-700", children: /* @__PURE__ */ jsxDEV4("div", { className: "px-4 py-4 sm:px-6", children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV4("p", { className: "text-sm font-medium text-indigo-600 dark:text-indigo-400 truncate", children: podcast.title }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 124,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "ml-2 flex-shrink-0 flex", children: /* @__PURE__ */ jsxDEV4("p", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", children: podcast.duration }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 128,
              columnNumber: 27
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 127,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 123,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "mt-2 sm:flex sm:justify-between", children: [
            /* @__PURE__ */ jsxDEV4("div", { className: "sm:flex", children: /* @__PURE__ */ jsxDEV4("p", { className: "flex items-center text-sm text-gray-500 dark:text-gray-400", children: [
              /* @__PURE__ */ jsxDEV4("svg", { className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsxDEV4("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z", clipRule: "evenodd" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 137,
                columnNumber: 31
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 136,
                columnNumber: 29
              }, this),
              "Generated on ",
              podcast.date
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 135,
              columnNumber: 27
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 134,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0", children: [
              /* @__PURE__ */ jsxDEV4("svg", { className: "flex-shrink-0 mr-1.5 h-5 w-5 text-indigo-500 dark:text-indigo-400", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsxDEV4("path", { d: "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 144,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 143,
                columnNumber: 27
              }, this),
              "Play now"
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 142,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 133,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 122,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 121,
          columnNumber: 19
        }, this) }, podcast.id, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 120,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 118,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "px-4 py-3 bg-gray-50 dark:bg-gray-700 text-center", children: /* @__PURE__ */ jsxDEV4(Link2, { to: "/podcasts", className: "text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300", children: "View all podcasts \u2192" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 155,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("h2", { className: "mt-8 text-lg font-medium text-gray-900 dark:text-white", children: "Connected Email Accounts" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md", children: [
        /* @__PURE__ */ jsxDEV4("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: connectedEmails.map((account) => /* @__PURE__ */ jsxDEV4("li", { children: /* @__PURE__ */ jsxDEV4("div", { className: "px-4 py-4 sm:px-6", children: [
          /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV4("p", { className: "text-sm font-medium text-gray-900 dark:text-white truncate", children: account.email }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 169,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ jsxDEV4("div", { className: "ml-2 flex-shrink-0 flex", children: /* @__PURE__ */ jsxDEV4("p", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", children: account.status }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 173,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 172,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 168,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV4("div", { className: "mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400", children: [
            /* @__PURE__ */ jsxDEV4("svg", { className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", children: [
              /* @__PURE__ */ jsxDEV4("path", { d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 180,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV4("path", { d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 181,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 179,
              columnNumber: 23
            }, this),
            account.provider
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 178,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 167,
          columnNumber: 19
        }, this) }, account.id, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 166,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "px-4 py-3 bg-gray-50 dark:bg-gray-700", children: /* @__PURE__ */ jsxDEV4(Link2, { to: "/email-connect", className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "Connect New Email" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 190,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 189,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 163,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/podcasts.tsx
var podcasts_exports = {};
__export(podcasts_exports, {
  default: () => Podcasts,
  meta: () => meta3
});
import { useState as useState2 } from "react";
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "My Podcasts - AudioInbox" },
  { name: "description", content: "Your AudioInbox Podcasts" }
];
function Podcasts() {
  let [filter, setFilter] = useState2("all"), podcasts = [
    {
      id: 1,
      title: "Morning Brew - June 23",
      source: "Morning Brew",
      duration: "14:25",
      date: "June 23, 2023",
      listened: !0,
      image: "https://placehold.co/80x80/4F46E5/FFFFFF?text=MB"
    },
    {
      id: 2,
      title: "The Hustle - June 22",
      source: "The Hustle",
      duration: "11:38",
      date: "June 22, 2023",
      listened: !0,
      image: "https://placehold.co/80x80/4F46E5/FFFFFF?text=TH"
    },
    {
      id: 3,
      title: "TLDR Newsletter - June 21",
      source: "TLDR",
      duration: "9:17",
      date: "June 21, 2023",
      listened: !1,
      image: "https://placehold.co/80x80/4F46E5/FFFFFF?text=TLDR"
    },
    {
      id: 4,
      title: "Platformer - June 20",
      source: "Platformer",
      duration: "17:42",
      date: "June 20, 2023",
      listened: !1,
      image: "https://placehold.co/80x80/4F46E5/FFFFFF?text=PF"
    },
    {
      id: 5,
      title: "Benedict Evans - June 18",
      source: "Benedict Evans",
      duration: "12:05",
      date: "June 18, 2023",
      listened: !1,
      image: "https://placehold.co/80x80/4F46E5/FFFFFF?text=BE"
    }
  ], filteredPodcasts = filter === "all" ? podcasts : filter === "unplayed" ? podcasts.filter((p) => !p.listened) : podcasts.filter((p) => p.listened);
  return /* @__PURE__ */ jsxDEV5("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsxDEV5("nav", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ jsxDEV5("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV5("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "flex", children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ jsxDEV5(Link3, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV5("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, !1, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 80,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 79,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV5("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, !1, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 82,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ jsxDEV5(Link3, { to: "/dashboard", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Dashboard" }, void 0, !1, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5(Link3, { to: "/podcasts", className: "border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "My Podcasts" }, void 0, !1, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5(Link3, { to: "/email-connect", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Email Connections" }, void 0, !1, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 92,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV5(Link3, { to: "/settings", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Settings" }, void 0, !1, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 95,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 85,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 76,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: /* @__PURE__ */ jsxDEV5("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5("button", { type: "button", className: "bg-white dark:bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: [
        /* @__PURE__ */ jsxDEV5("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 104,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300", children: "U" }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 105,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 103,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 102,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 101,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/podcasts.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/podcasts.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/podcasts.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("main", { className: "py-10", children: /* @__PURE__ */ jsxDEV5("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxDEV5("h1", { className: "text-2xl font-semibold text-gray-900 dark:text-white", children: "My Podcasts" }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "mt-3 sm:mt-0 flex", children: /* @__PURE__ */ jsxDEV5("div", { className: "inline-flex shadow-sm rounded-md", children: [
          /* @__PURE__ */ jsxDEV5(
            "button",
            {
              type: "button",
              onClick: () => setFilter("all"),
              className: `relative inline-flex items-center px-4 py-2 rounded-l-md border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${filter === "all" ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"}`,
              children: "All"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 123,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV5(
            "button",
            {
              type: "button",
              onClick: () => setFilter("unplayed"),
              className: `relative inline-flex items-center px-4 py-2 border-t border-b text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${filter === "unplayed" ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"}`,
              children: "Unplayed"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 134,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV5(
            "button",
            {
              type: "button",
              onClick: () => setFilter("played"),
              className: `relative inline-flex items-center px-4 py-2 rounded-r-md border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 ${filter === "played" ? "bg-indigo-600 text-white border-indigo-600 dark:bg-indigo-500 dark:border-indigo-500" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"}`,
              children: "Played"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 145,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 121,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md", children: filteredPodcasts.length > 0 ? /* @__PURE__ */ jsxDEV5("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700", children: filteredPodcasts.map((podcast) => /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5(Link3, { to: `/podcasts/${podcast.id}`, className: "block hover:bg-gray-50 dark:hover:bg-gray-700", children: /* @__PURE__ */ jsxDEV5("div", { className: "px-4 py-4 sm:px-6 flex items-center", children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "flex-shrink-0 h-20 w-20 mr-4", children: /* @__PURE__ */ jsxDEV5("img", { src: podcast.image, alt: podcast.source, className: "rounded-md" }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 169,
          columnNumber: 27
        }, this) }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 168,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV5("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV5("p", { className: `text-lg font-medium truncate ${podcast.listened ? "text-gray-500 dark:text-gray-400" : "text-indigo-600 dark:text-indigo-400"}`, children: podcast.title }, void 0, !1, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 173,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "ml-2 flex-shrink-0 flex", children: /* @__PURE__ */ jsxDEV5("p", { className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200", children: podcast.duration }, void 0, !1, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 177,
              columnNumber: 31
            }, this) }, void 0, !1, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 176,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 172,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "mt-2 flex justify-between", children: [
            /* @__PURE__ */ jsxDEV5("div", { className: "flex items-center text-sm text-gray-500 dark:text-gray-400", children: [
              /* @__PURE__ */ jsxDEV5("svg", { xmlns: "http://www.w3.org/2000/svg", className: "flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, !1, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 185,
                columnNumber: 33
              }, this) }, void 0, !1, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 184,
                columnNumber: 31
              }, this),
              podcast.source
            ] }, void 0, !0, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 183,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: podcast.date }, void 0, !1, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 189,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 182,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ jsxDEV5("div", { className: "mt-2 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxDEV5("div", { className: "flex space-x-4", children: [
              /* @__PURE__ */ jsxDEV5("button", { className: "inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300", children: [
                /* @__PURE__ */ jsxDEV5("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-1", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: [
                  /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" }, void 0, !1, {
                    fileName: "app/routes/podcasts.tsx",
                    lineNumber: 197,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }, void 0, !1, {
                    fileName: "app/routes/podcasts.tsx",
                    lineNumber: 198,
                    columnNumber: 35
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/podcasts.tsx",
                  lineNumber: 196,
                  columnNumber: 33
                }, this),
                "Play"
              ] }, void 0, !0, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 195,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ jsxDEV5("button", { className: "inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300", children: [
                /* @__PURE__ */ jsxDEV5("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5 mr-1", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" }, void 0, !1, {
                  fileName: "app/routes/podcasts.tsx",
                  lineNumber: 204,
                  columnNumber: 35
                }, this) }, void 0, !1, {
                  fileName: "app/routes/podcasts.tsx",
                  lineNumber: 203,
                  columnNumber: 33
                }, this),
                "Download"
              ] }, void 0, !0, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 202,
                columnNumber: 31
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 194,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ jsxDEV5("div", { children: podcast.listened ? /* @__PURE__ */ jsxDEV5("span", { className: "inline-flex items-center text-xs text-gray-500 dark:text-gray-400", children: [
              /* @__PURE__ */ jsxDEV5("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-1", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1  1 0 001.414 0l4-4z", clipRule: "evenodd" }, void 0, !1, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 213,
                columnNumber: 37
              }, this) }, void 0, !1, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 212,
                columnNumber: 35
              }, this),
              "Listened"
            ] }, void 0, !0, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 211,
              columnNumber: 33
            }, this) : /* @__PURE__ */ jsxDEV5("span", { className: "inline-flex items-center text-xs text-blue-600 dark:text-blue-400", children: [
              /* @__PURE__ */ jsxDEV5("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 mr-1", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" }, void 0, !1, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 220,
                columnNumber: 37
              }, this) }, void 0, !1, {
                fileName: "app/routes/podcasts.tsx",
                lineNumber: 219,
                columnNumber: 35
              }, this),
              "New"
            ] }, void 0, !0, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 218,
              columnNumber: 33
            }, this) }, void 0, !1, {
              fileName: "app/routes/podcasts.tsx",
              lineNumber: 209,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/podcasts.tsx",
            lineNumber: 193,
            columnNumber: 27
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 171,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 167,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 166,
        columnNumber: 21
      }, this) }, podcast.id, !1, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 165,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 163,
        columnNumber: 15
      }, this) : /* @__PURE__ */ jsxDEV5("div", { className: "px-4 py-12 text-center", children: [
        /* @__PURE__ */ jsxDEV5("svg", { xmlns: "http://www.w3.org/2000/svg", className: "mx-auto h-12 w-12 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV5("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 236,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 235,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5("h3", { className: "mt-2 text-sm font-medium text-gray-900 dark:text-white", children: "No podcasts found" }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 238,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV5("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: filter === "unplayed" ? "You've listened to all your podcasts! Check back later for new content." : filter === "played" ? "You haven't listened to any podcasts yet." : "Connect your email to start receiving newsletter podcasts." }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 239,
          columnNumber: 17
        }, this),
        filter === "all" && /* @__PURE__ */ jsxDEV5("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV5(Link3, { to: "/email-connect", className: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "Connect Email" }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 248,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/podcasts.tsx",
          lineNumber: 247,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 234,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/podcasts.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/podcasts.tsx",
      lineNumber: 118,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/podcasts.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/podcasts.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}

// app/routes/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => Settings,
  meta: () => meta4
});
import { useState as useState3 } from "react";
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "Settings - AudioInbox" },
  { name: "description", content: "AudioInbox user settings" }
];
function Settings() {
  let [voicePreference, setVoicePreference] = useState3("natural"), [deliveryTime, setDeliveryTime] = useState3("morning"), [contentLength, setContentLength] = useState3("medium"), [darkMode, setDarkMode] = useState3(!1);
  return /* @__PURE__ */ jsxDEV6("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsxDEV6("nav", { className: "bg-white dark:bg-gray-800 shadow", children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between h-16", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "flex", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "flex-shrink-0 flex items-center", children: /* @__PURE__ */ jsxDEV6(Link4, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV6("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV6("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 28,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 27,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV6("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 30,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 26,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 25,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
          /* @__PURE__ */ jsxDEV6(Link4, { to: "/dashboard", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Dashboard" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 34,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6(Link4, { to: "/podcasts", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "My Podcasts" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 37,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6(Link4, { to: "/email-connect", className: "border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Email Connections" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 40,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6(Link4, { to: "/settings", className: "border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", children: "Settings" }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 43,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "hidden sm:ml-6 sm:flex sm:items-center", children: /* @__PURE__ */ jsxDEV6("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxDEV6("div", { children: /* @__PURE__ */ jsxDEV6("button", { type: "button", className: "bg-white dark:bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: [
        /* @__PURE__ */ jsxDEV6("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 52,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300", children: "U" }, void 0, !1, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 51,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("main", { className: "py-10", children: /* @__PURE__ */ jsxDEV6("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV6("h1", { className: "text-2xl font-semibold text-gray-900 dark:text-white", children: "Settings" }, void 0, !1, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "mt-6 space-y-8 divide-y divide-gray-200 dark:divide-gray-700", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "pt-8", children: [
          /* @__PURE__ */ jsxDEV6("div", { children: [
            /* @__PURE__ */ jsxDEV6("h3", { className: "text-lg leading-6 font-medium text-gray-900 dark:text-white", children: "Account" }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 73,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Manage your account settings and preferences." }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 74,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "sm:col-span-3", children: [
              /* @__PURE__ */ jsxDEV6("label", { htmlFor: "first-name", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "First name" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 80,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV6(
                "input",
                {
                  type: "text",
                  name: "first-name",
                  id: "first-name",
                  defaultValue: "Jane",
                  className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 84,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 83,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 79,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "sm:col-span-3", children: [
              /* @__PURE__ */ jsxDEV6("label", { htmlFor: "last-name", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Last name" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 95,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV6(
                "input",
                {
                  type: "text",
                  name: "last-name",
                  id: "last-name",
                  defaultValue: "Smith",
                  className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 99,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 98,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 94,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "sm:col-span-4", children: [
              /* @__PURE__ */ jsxDEV6("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Email address" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 110,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV6(
                "input",
                {
                  id: "email",
                  name: "email",
                  type: "email",
                  defaultValue: "jane@example.com",
                  className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 114,
                  columnNumber: 21
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 113,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "pt-8", children: [
          /* @__PURE__ */ jsxDEV6("div", { children: [
            /* @__PURE__ */ jsxDEV6("h3", { className: "text-lg leading-6 font-medium text-gray-900 dark:text-white", children: "Podcast Preferences" }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 129,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Customize how your newsletters are converted to audio." }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 130,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 128,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV6("fieldset", { children: [
            /* @__PURE__ */ jsxDEV6("legend", { className: "text-base font-medium text-gray-900 dark:text-white", children: "Voice Type" }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 137,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "mt-4 space-y-4", children: [
              /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV6(
                  "input",
                  {
                    id: "voice-natural",
                    name: "voice-type",
                    type: "radio",
                    checked: voicePreference === "natural",
                    onChange: () => setVoicePreference("natural"),
                    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 140,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV6("label", { htmlFor: "voice-natural", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Natural Voice (Premium)" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 148,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 139,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV6(
                  "input",
                  {
                    id: "voice-standard",
                    name: "voice-type",
                    type: "radio",
                    checked: voicePreference === "standard",
                    onChange: () => setVoicePreference("standard"),
                    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 153,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV6("label", { htmlFor: "voice-standard", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Standard Voice" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 161,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 152,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 138,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 135,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV6("fieldset", { children: [
            /* @__PURE__ */ jsxDEV6("legend", { className: "text-base font-medium text-gray-900 dark:text-white", children: "Delivery Time" }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 171,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "mt-4 space-y-4", children: [
              /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV6(
                  "input",
                  {
                    id: "time-morning",
                    name: "delivery-time",
                    type: "radio",
                    checked: deliveryTime === "morning",
                    onChange: () => setDeliveryTime("morning"),
                    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 174,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV6("label", { htmlFor: "time-morning", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Morning (7:00 AM)" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 182,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 173,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV6(
                  "input",
                  {
                    id: "time-afternoon",
                    name: "delivery-time",
                    type: "radio",
                    checked: deliveryTime === "afternoon",
                    onChange: () => setDeliveryTime("afternoon"),
                    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 187,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV6("label", { htmlFor: "time-afternoon", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Afternoon (12:00 PM)" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 195,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 186,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV6(
                  "input",
                  {
                    id: "time-evening",
                    name: "delivery-time",
                    type: "radio",
                    checked: deliveryTime === "evening",
                    onChange: () => setDeliveryTime("evening"),
                    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 200,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV6("label", { htmlFor: "time-evening", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Evening (6:00 PM)" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 208,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 199,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 172,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 170,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 169,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV6("fieldset", { children: [
            /* @__PURE__ */ jsxDEV6("legend", { className: "text-base font-medium text-gray-900 dark:text-white", children: "Content Length" }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 218,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "mt-4 space-y-4", children: [
              /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV6(
                  "input",
                  {
                    id: "length-short",
                    name: "content-length",
                    type: "radio",
                    checked: contentLength === "short",
                    onChange: () => setContentLength("short"),
                    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 221,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV6("label", { htmlFor: "length-short", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Short (~5 minutes) - Brief summary only" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 229,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 220,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV6(
                  "input",
                  {
                    id: "length-medium",
                    name: "content-length",
                    type: "radio",
                    checked: contentLength === "medium",
                    onChange: () => setContentLength("medium"),
                    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 234,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV6("label", { htmlFor: "length-medium", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Medium (~10-15 minutes) - Key details with some context" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 242,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 233,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxDEV6(
                  "input",
                  {
                    id: "length-full",
                    name: "content-length",
                    type: "radio",
                    checked: contentLength === "full",
                    onChange: () => setContentLength("full"),
                    className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/settings.tsx",
                    lineNumber: 247,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV6("label", { htmlFor: "length-full", className: "ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Comprehensive (~20-30 minutes) - Full newsletter content" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 255,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 246,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 219,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 217,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 216,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "pt-8", children: [
          /* @__PURE__ */ jsxDEV6("div", { children: [
            /* @__PURE__ */ jsxDEV6("h3", { className: "text-lg leading-6 font-medium text-gray-900 dark:text-white", children: "App Settings" }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 267,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Customize the app experience." }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 268,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 266,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "mt-6", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "flex items-center h-5", children: /* @__PURE__ */ jsxDEV6(
              "input",
              {
                id: "dark-mode",
                name: "dark-mode",
                type: "checkbox",
                checked: darkMode,
                onChange: () => setDarkMode(!darkMode),
                className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/settings.tsx",
                lineNumber: 275,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 274,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "ml-3 text-sm", children: [
              /* @__PURE__ */ jsxDEV6("label", { htmlFor: "dark-mode", className: "font-medium text-gray-700 dark:text-gray-300", children: "Dark Mode" }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 285,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV6("p", { className: "text-gray-500 dark:text-gray-400", children: "Enables dark mode for the application interface." }, void 0, !1, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 286,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 284,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 273,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 272,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 265,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "pt-8", children: [
          /* @__PURE__ */ jsxDEV6("div", { children: [
            /* @__PURE__ */ jsxDEV6("h3", { className: "text-lg leading-6 font-medium text-gray-900 dark:text-white", children: "Subscription" }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 295,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV6("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: "Manage your subscription plan." }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 296,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 294,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("div", { className: "mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg", children: [
            /* @__PURE__ */ jsxDEV6("div", { className: "px-4 py-5 sm:px-6", children: /* @__PURE__ */ jsxDEV6("h3", { className: "text-lg leading-6 font-medium text-gray-900 dark:text-white", children: "Current Plan" }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 302,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 301,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0", children: /* @__PURE__ */ jsxDEV6("dl", { className: "sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-700", children: [
              /* @__PURE__ */ jsxDEV6("div", { className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6", children: [
                /* @__PURE__ */ jsxDEV6("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Plan" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 307,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV6("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2", children: "Premium" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 308,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 306,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6", children: [
                /* @__PURE__ */ jsxDEV6("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Billing cycle" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 311,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV6("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2", children: "Monthly" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 312,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 310,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV6("div", { className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6", children: [
                /* @__PURE__ */ jsxDEV6("dt", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: "Next billing date" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 315,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ jsxDEV6("dd", { className: "mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2", children: "July 24, 2023" }, void 0, !1, {
                  fileName: "app/routes/settings.tsx",
                  lineNumber: 316,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/settings.tsx",
                lineNumber: 314,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 305,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 304,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV6("div", { className: "px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6", children: /* @__PURE__ */ jsxDEV6(
              "button",
              {
                type: "button",
                className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600",
                children: "Manage Subscription"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/settings.tsx",
                lineNumber: 321,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/settings.tsx",
              lineNumber: 320,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/settings.tsx",
            lineNumber: 300,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/settings.tsx",
          lineNumber: 293,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "pt-5 mt-8 border-t border-gray-200 dark:border-gray-700", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-end", children: [
        /* @__PURE__ */ jsxDEV6(
          "button",
          {
            type: "button",
            className: "bg-white dark:bg-gray-800 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Cancel"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/settings.tsx",
            lineNumber: 334,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6(
          "button",
          {
            type: "submit",
            className: "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600",
            children: "Save"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/settings.tsx",
            lineNumber: 340,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 333,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/settings.tsx",
        lineNumber: 332,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/settings.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/settings.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta5
});
import { Link as Link5 } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "AudioInbox - AI-Powered Newsletter Podcasts" },
  { name: "description", content: "Convert your email newsletters into a daily personalized podcast" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV7("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white", children: [
    /* @__PURE__ */ jsxDEV7("header", { className: "pt-6 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 19,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 18,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7("span", { className: "text-xl font-bold", children: "AudioInbox" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "flex gap-4 items-center", children: [
          /* @__PURE__ */ jsxDEV7(Link5, { to: "/login", className: "text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400", children: "Sign In" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 24,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7(Link5, { to: "/signup", className: "bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors", children: "Get Started" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "mt-20 sm:mt-24 max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV7("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight", children: [
          "Your newsletters,",
          /* @__PURE__ */ jsxDEV7("br", {}, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 35,
            columnNumber: 30
          }, this),
          /* @__PURE__ */ jsxDEV7("span", { className: "text-indigo-600 dark:text-indigo-400", children: "read to you daily" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 36,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV7("p", { className: "mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto", children: "AudioInbox turns your favorite newsletters into a personalized podcast. Listen to your curated content on the go, hands-free." }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxDEV7(Link5, { to: "/signup", className: "bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 shadow-lg hover:shadow-xl dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all", children: "Start Your Free Trial" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("section", { className: "py-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV7("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV7("h2", { className: "text-3xl font-bold text-center mb-12", children: "How it Works" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxDEV7("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 58,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 57,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 56,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("h3", { className: "text-xl font-semibold mb-2", children: "Connect Your Email" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-600 dark:text-gray-300", children: "Securely connect your email accounts. We only scan for newsletters, never personal emails." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 69,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 67,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("h3", { className: "text-xl font-semibold mb-2", children: "AI Summarization" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-600 dark:text-gray-300", children: "Our AI extracts key insights and creates engaging, conversational summaries." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-4.242a1 1 0 011.414 0 1 1 0 010 1.414m-2.828 2.828a1 1 0 011.414 0 1 1 0 010 1.414m0-4.242a1 1 0 011.414 0 1 1 0 010 1.414m2.828 2.828a1 1 0 011.414 0 1 1 0 010 1.414m-9.9-2.828a1 1 0 00-1.414 0 1 1 0 000 1.414M8.464 4.464a9 9 0 00-2.828 2.828" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 80,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 78,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("h3", { className: "text-xl font-semibold mb-2", children: "Listen Anywhere" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-600 dark:text-gray-300", children: "Your daily podcast is available in the morning. Listen on our app or your favorite podcast player." }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("section", { className: "py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV7("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV7("h2", { className: "text-3xl font-bold text-center mb-12", children: "What Our Users Say" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxDEV7("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: '"AudioInbox has saved me so much time. I can keep up with all my industry newsletters while commuting."' }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { className: "font-medium", children: "Sarah J., Marketing Director" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: '"The AI summaries are surprisingly good. They capture the key points while keeping things conversational."' }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { className: "font-medium", children: "Michael T., Product Manager" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md", children: [
          /* @__PURE__ */ jsxDEV7("p", { className: "text-gray-600 dark:text-gray-300 mb-4", children: `"I'm consuming twice as much content now, and the voice quality is excellent."` }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV7("p", { className: "font-medium", children: "Emma R., Entrepreneur" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 113,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("section", { className: "py-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV7("div", { className: "max-w-7xl mx-auto bg-indigo-600 dark:bg-indigo-700 rounded-2xl overflow-hidden shadow-xl", children: /* @__PURE__ */ jsxDEV7("div", { className: "px-6 py-12 md:py-16 md:px-12 text-center", children: [
      /* @__PURE__ */ jsxDEV7("h2", { className: "text-3xl font-extrabold text-white mb-6", children: "Ready to transform how you consume newsletters?" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 123,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { className: "text-xl text-indigo-100 mb-8 max-w-2xl mx-auto", children: "Start your 14-day free trial today. No credit card required." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 126,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV7(Link5, { to: "/signup", className: "inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 shadow-md transition-colors", children: "Get Started Now" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 122,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("footer", { className: "bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center", children: [
        /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center gap-2 mb-6 md:mb-0", children: [
          /* @__PURE__ */ jsxDEV7("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV7("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 140,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7("span", { className: "text-lg font-bold", children: "AudioInbox" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 143,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV7("div", { className: "flex gap-8", children: [
          /* @__PURE__ */ jsxDEV7(Link5, { to: "/privacy", className: "text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400", children: "Privacy" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 146,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7(Link5, { to: "/terms", className: "text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400", children: "Terms" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 149,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV7(Link5, { to: "/contact", className: "text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400", children: "Contact" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 152,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400", children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " AudioInbox. All rights reserved."
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  default: () => SignUp,
  meta: () => meta6
});
import { Form, Link as Link6 } from "@remix-run/react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta6 = () => [
  { title: "Sign Up - AudioInbox" },
  { name: "description", content: "Create your AudioInbox account" }
];
function SignUp() {
  return /* @__PURE__ */ jsxDEV8("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV8("div", { className: "max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsxDEV8("div", { children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV8(Link6, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV8("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV8("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, !1, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 19,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 18,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV8("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, !1, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white", children: "Create your account" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("p", { className: "mt-2 text-center text-sm text-gray-600 dark:text-gray-400", children: [
        "Or",
        " ",
        /* @__PURE__ */ jsxDEV8(Link6, { to: "/login", className: "font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400", children: "sign in to your existing account" }, void 0, !1, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxDEV8(
        "button",
        {
          type: "button",
          className: "group relative w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
          onClick: () => {
          },
          children: [
            /* @__PURE__ */ jsxDEV8("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ jsxDEV8("svg", { className: "h-5 w-5 text-gray-500 dark:text-gray-400", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxDEV8("path", { d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 43,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 42,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 41,
              columnNumber: 13
            }, this),
            "Sign up with Google"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 36,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8(
        "button",
        {
          type: "button",
          className: "group relative w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
          onClick: () => {
          },
          children: [
            /* @__PURE__ */ jsxDEV8("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ jsxDEV8("svg", { className: "h-5 w-5 text-gray-500 dark:text-gray-400", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxDEV8("path", { d: "M7.88 12.04c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32zm8.32 0c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32zm8 0c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32z" }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 56,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 55,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 54,
              columnNumber: 13
            }, this),
            "Sign up with Microsoft"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 49,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV8(Form, { method: "post", className: "mt-8 space-y-6", children: [
        /* @__PURE__ */ jsxDEV8("input", { type: "hidden", name: "remember", defaultValue: "true" }, void 0, !1, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { className: "rounded-md shadow-sm -space-y-px", children: [
          /* @__PURE__ */ jsxDEV8("div", { children: [
            /* @__PURE__ */ jsxDEV8("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 66,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV8(
              "input",
              {
                id: "email-address",
                name: "email",
                type: "email",
                autoComplete: "email",
                required: !0,
                className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
                placeholder: "Email address"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 67,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV8("div", { children: [
            /* @__PURE__ */ jsxDEV8("label", { htmlFor: "password", className: "sr-only", children: "Password" }, void 0, !1, {
              fileName: "app/routes/signup.tsx",
              lineNumber: 78,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV8(
              "input",
              {
                id: "password",
                name: "password",
                type: "password",
                autoComplete: "current-password",
                required: !0,
                className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
                placeholder: "Password"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.tsx",
                lineNumber: 79,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/signup.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8(
          "button",
          {
            type: "submit",
            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.tsx",
            lineNumber: 92,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/signup.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  meta: () => meta7
});
import { useState as useState4 } from "react";
import { Form as Form2, Link as Link7 } from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var meta7 = () => [
  { title: "Log In - AudioInbox" },
  { name: "description", content: "Log in to your AudioInbox account" }
];
function Login() {
  let [isEmailLogin, setIsEmailLogin] = useState4(!0);
  return /* @__PURE__ */ jsxDEV9("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV9("div", { className: "max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsxDEV9("div", { children: [
      /* @__PURE__ */ jsxDEV9("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxDEV9(Link7, { to: "/", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxDEV9("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-indigo-600 dark:text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV9("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV9("span", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "AudioInbox" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 24,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white", children: "Sign in to your account" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9("p", { className: "mt-2 text-center text-sm text-gray-600 dark:text-gray-400", children: [
        "Or",
        " ",
        /* @__PURE__ */ jsxDEV9(Link7, { to: "/signup", className: "font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400", children: "create a new account" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxDEV9(
        "button",
        {
          type: "button",
          className: "group relative w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
          onClick: () => {
          },
          children: [
            /* @__PURE__ */ jsxDEV9("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ jsxDEV9("svg", { className: "h-5 w-5 text-gray-500 dark:text-gray-400", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxDEV9("path", { d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 46,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 45,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this),
            "Continue with Google"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 39,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9(
        "button",
        {
          type: "button",
          className: "group relative w-full flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",
          onClick: () => {
          },
          children: [
            /* @__PURE__ */ jsxDEV9("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ jsxDEV9("svg", { className: "h-5 w-5 text-gray-500 dark:text-gray-400", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxDEV9("path", { d: "M7.88 12.04c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32zm8.32 0c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32zm8 0c0 1.28-1.04 2.32-2.32 2.32-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32z" }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 59,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 58,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 57,
              columnNumber: 13
            }, this),
            "Continue with Microsoft"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 52,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9("div", { className: "relative my-2", children: [
        /* @__PURE__ */ jsxDEV9("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxDEV9("div", { className: "w-full border-t border-gray-300 dark:border-gray-600" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "relative flex justify-center text-sm", children: /* @__PURE__ */ jsxDEV9("span", { className: "px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400", children: "Or continue with" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV9(Form2, { method: "post", className: "mt-4 space-y-6", children: [
        /* @__PURE__ */ jsxDEV9("input", { type: "hidden", name: "remember", defaultValue: "true" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 75,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { children: [
          /* @__PURE__ */ jsxDEV9("label", { htmlFor: "email-address", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Email address" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV9(
            "input",
            {
              id: "email-address",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 81,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { children: [
          /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV9("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Password" }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 94,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV9("div", { className: "text-sm", children: /* @__PURE__ */ jsxDEV9(Link7, { to: "/forgot-password", className: "font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400", children: "Forgot your password?" }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 98,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 97,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV9("div", { className: "mt-1", children: /* @__PURE__ */ jsxDEV9(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: !0,
              className: "appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 104,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV9(
            "input",
            {
              id: "remember-me",
              name: "remember-me",
              type: "checkbox",
              className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 rounded"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 117,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ jsxDEV9("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-gray-900 dark:text-gray-300", children: "Remember me" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 115,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV9("div", { children: /* @__PURE__ */ jsxDEV9(
          "button",
          {
            type: "submit",
            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600",
            children: "Sign in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 130,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-VF45YGW6.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-IWU7O6DV.js", "/build/_shared/chunk-HROVJQA4.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XHA7N5JC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-GMHUMI6B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-L36CU2MI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/email-connect": { id: "routes/email-connect", parentId: "root", path: "email-connect", index: void 0, caseSensitive: void 0, module: "/build/routes/email-connect-KOEFTHAI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-4XDH77SW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/podcasts": { id: "routes/podcasts", parentId: "root", path: "podcasts", index: void 0, caseSensitive: void 0, module: "/build/routes/podcasts-C2CYJZFE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/settings": { id: "routes/settings", parentId: "root", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/settings-UM5M7XI6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-LVTJ74ZE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "c9b17cf9", hmr: { runtime: "/build/_shared/chunk-HROVJQA4.js", timestamp: 1741174069203 }, url: "/build/manifest-C9B17CF9.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/email-connect": {
    id: "routes/email-connect",
    parentId: "root",
    path: "email-connect",
    index: void 0,
    caseSensitive: void 0,
    module: email_connect_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/podcasts": {
    id: "routes/podcasts",
    parentId: "root",
    path: "podcasts",
    index: void 0,
    caseSensitive: void 0,
    module: podcasts_exports
  },
  "routes/settings": {
    id: "routes/settings",
    parentId: "root",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
