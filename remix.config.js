/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  serverPlatform: "node",
  tailwind: true,
  postcss: true,
  watchPaths: ["./tailwind.config.ts"],
  dev: {
    port: 3000
  },
  serverEnvironmentVariables: ["SUPABASE_URL", "SUPABASE_ANON_KEY", "SESSION_SECRET"]
};
