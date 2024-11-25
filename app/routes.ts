import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  // This route doesn't have the issue
  route("non-catchall", "routes/non-catchall.tsx"),

  // The issue is with this catchall route
  route("*", "routes/catchall.tsx"),

  // Replacing the catchall route with this fixes it:
  // route("*?", "routes/catchall.tsx"),
] satisfies RouteConfig;
