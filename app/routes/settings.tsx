import { useState } from "react";
import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Settings - AudioInbox" },
    { name: "description", content: "AudioInbox user settings" },
  ];
};

export default function Settings() {
  const [voicePreference, setVoicePreference] = useState("natural");
  const [deliveryTime, setDeliveryTime] = useState("morning");
  const [contentLength, setContentLength] = useState("medium");
  const [darkMode, setDarkMode] = useState(false);

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
                <Link to="/email-connect" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Email Connections
                </Link>
                <Link to="/settings" className="border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Settings
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
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
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Settings</h1>
          
          <div className="mt-6 space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
            {/* Account Settings */}
            <div className="pt-8">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Account</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Manage your account settings and preferences.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      defaultValue="Jane"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      defaultValue="Smith"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      defaultValue="jane@example.com"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Podcast Preferences */}
            <div className="pt-8">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Podcast Preferences</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Customize how your newsletters are converted to audio.
                </p>
              </div>

              <div className="mt-6">
                <fieldset>
                  <legend className="text-base font-medium text-gray-900 dark:text-white">Voice Type</legend>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="voice-natural"
                        name="voice-type"
                        type="radio"
                        checked={voicePreference === "natural"}
                        onChange={() => setVoicePreference("natural")}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                      />
                      <label htmlFor="voice-natural" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Natural Voice (Premium)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="voice-standard"
                        name="voice-type"
                        type="radio"
                        checked={voicePreference === "standard"}
                        onChange={() => setVoicePreference("standard")}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                      />
                      <label htmlFor="voice-standard" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Standard Voice
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="mt-6">
                <fieldset>
                  <legend className="text-base font-medium text-gray-900 dark:text-white">Delivery Time</legend>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="time-morning"
                        name="delivery-time"
                        type="radio"
                        checked={deliveryTime === "morning"}
                        onChange={() => setDeliveryTime("morning")}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                      />
                      <label htmlFor="time-morning" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Morning (7:00 AM)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="time-afternoon"
                        name="delivery-time"
                        type="radio"
                        checked={deliveryTime === "afternoon"}
                        onChange={() => setDeliveryTime("afternoon")}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                      />
                      <label htmlFor="time-afternoon" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Afternoon (12:00 PM)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="time-evening"
                        name="delivery-time"
                        type="radio"
                        checked={deliveryTime === "evening"}
                        onChange={() => setDeliveryTime("evening")}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                      />
                      <label htmlFor="time-evening" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Evening (6:00 PM)
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="mt-6">
                <fieldset>
                  <legend className="text-base font-medium text-gray-900 dark:text-white">Content Length</legend>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                      <input
                        id="length-short"
                        name="content-length"
                        type="radio"
                        checked={contentLength === "short"}
                        onChange={() => setContentLength("short")}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                      />
                      <label htmlFor="length-short" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Short (~5 minutes) - Brief summary only
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="length-medium"
                        name="content-length"
                        type="radio"
                        checked={contentLength === "medium"}
                        onChange={() => setContentLength("medium")}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                      />
                      <label htmlFor="length-medium" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Medium (~10-15 minutes) - Key details with some context
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="length-full"
                        name="content-length"
                        type="radio"
                        checked={contentLength === "full"}
                        onChange={() => setContentLength("full")}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600"
                      />
                      <label htmlFor="length-full" className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Comprehensive (~20-30 minutes) - Full newsletter content
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            {/* App Settings */}
            <div className="pt-8">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">App Settings</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Customize the app experience.
                </p>
              </div>
              <div className="mt-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="dark-mode"
                      name="dark-mode"
                      type="checkbox"
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="dark-mode" className="font-medium text-gray-700 dark:text-gray-300">Dark Mode</label>
                    <p className="text-gray-500 dark:text-gray-400">Enables dark mode for the application interface.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Information */}
            <div className="pt-8">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Subscription</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Manage your subscription plan.
                </p>
              </div>
              <div className="mt-6 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Current Plan</h3>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200 dark:sm:divide-gray-700">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Plan</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">Premium</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Billing cycle</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">Monthly</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Next billing date</dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">July 24, 2023</dd>
                    </div>
                  </dl>
                </div>
                <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700 text-right sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                  >
                    Manage Subscription
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 mt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white dark:bg-gray-800 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
