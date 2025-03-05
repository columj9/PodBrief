import { useState } from "react";
import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Connect Email - AudioInbox" },
    { name: "description", content: "Connect your email accounts to AudioInbox" },
  ];
};

export default function EmailConnect() {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  // Mock connected accounts
  const connectedAccounts = [
    { id: 1, provider: "Gmail", email: "user@gmail.com", status: "Connected", lastSync: "Today, 10:35 AM" },
    { id: 2, provider: "Outlook", email: "user@outlook.com", status: "Connected", lastSync: "Yesterday, 3:22 PM" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">AudioInbox</span>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/dashboard" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </Link>
                <Link to="/podcasts" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  My Podcasts
                </Link>
                <Link to="/email-connect" className="border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Email Connections
                </Link>
                <Link to="/settings" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Settings
                </Link>
              </div>
            </div>            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="ml-3 relative">
                <div>
                  <button type="button" className="bg-white dark:bg-gray-800 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                      U
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Connect Email Accounts</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Connect your email accounts to automatically find and convert newsletters into podcasts. AudioInbox only scans for newsletter content and never accesses personal emails.
          </p>

          {/* Connected Accounts */}
          <h2 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">Connected Accounts</h2>
          <div className="mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md">
            {connectedAccounts.length > 0 ? (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {connectedAccounts.map(account => (
                  <li key={account.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            {account.provider === "Gmail" ? (
                              <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                              </svg>
                            ) : (
                              <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21.17 3.25H2.83c-.76 0-1.38.62-1.38 1.38v14.74c0 .76.62 1.38 1.38 1.38h18.34c.76 0 1.38-.62 1.38-1.38V4.63c0-.76-.62-1.38-1.38-1.38zm-6.99 9.97l-3.43 2.58c-.12.09-.26.14-.41.14-.15 0-.29-.05-.41-.14l-8.18-6.12c-.23-.17-.28-.5-.11-.73.17-.23.5-.28.73-.11l7.97 5.97 10.06-7.55c.23-.17.55-.12.73.11.17.23.12.55-.11.73l-6.85 5.12z" />
                              </svg>
                            )}
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {account.email}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {account.provider} • Last sync: {account.lastSync}
                            </p>
                          </div>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            {account.status}
                          </p>
                          <button 
                            type="button" 
                            className="ml-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                            aria-label="Disconnect account"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-12 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No connected accounts</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by connecting an email account.</p>
              </div>
            )}
          </div>

          {/* Connect New Account */}
          <h2 className="mt-8 text-lg font-medium text-gray-900 dark:text-white">Connect a New Account</h2>
          <div className="mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden rounded-md">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setSelectedProvider("Gmail")}
                  className={`relative block border rounded-lg p-6 focus:outline-none ${
                    selectedProvider === "Gmail" 
                      ? "border-indigo-500 ring-2 ring-indigo-500 dark:border-indigo-400 dark:ring-indigo-400"
                      : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="h-10 w-10 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Google Gmail</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Connect your Gmail account to import newsletters</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedProvider("Outlook")}
                  className={`relative block border rounded-lg p-6 focus:outline-none ${
                    selectedProvider === "Outlook" 
                      ? "border-indigo-500 ring-2 ring-indigo-500 dark:border-indigo-400 dark:ring-indigo-400"
                      : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.17 3.25H2.83c-.76 0-1.38.62-1.38 1.38v14.74c0 .76.62 1.38 1.38 1.38h18.34c.76 0 1.38-.62 1.38-1.38V4.63c0-.76-.62-1.38-1.38-1.38zm-6.99 9.97l-3.43 2.58c-.12.09-.26.14-.41.14-.15 0-.29-.05-.41-.14l-8.18-6.12c-.23-.17-.28-.5-.11-.73.17-.23.5-.28.73-.11l7.97 5.97 10.06-7.55c.23-.17.55-.12.73.11.17.23.12.55-.11.73l-6.85 5.12z" />
                    </svg>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Microsoft Outlook</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Connect your Outlook account to import newsletters</p>
                    </div>
                  </div>
                </button>
              </div>

              {selectedProvider && (
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Connect {selectedProvider}
                  </button>
                  <button
                    type="button"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setSelectedProvider(null)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Privacy Information */}
          <div className="mt-8 bg-blue-50 dark:bg-blue-900 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-blue-700 dark:text-blue-200">
                  AudioInbox only scans for newsletter content and never reads personal emails. We use read-only access with strict privacy controls.
                </p>
                <p className="mt-3 text-sm md:mt-0 md:ml-6">
                  <Link to="/privacy" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600 dark:text-blue-200 dark:hover:text-blue-100">
                    Privacy details <span aria-hidden="true">&rarr;</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
