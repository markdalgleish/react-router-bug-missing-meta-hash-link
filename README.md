# react-router-bug-missing-meta-hash-link

Minimal reproduction of the issue fixed by https://github.com/remix-run/react-router-website/commit/c8d00aa87f76ef5d9234590ebe01d46b092c22e6.

Steps to reproduce:

1. `pnpm install`
2. `pnpm build`
3. `pnpm start`
4. Go to `http://localhost:3000/catchall` to view the catchall route
5. Click on "Hash link"
6. See that the CSS is now missing and the page title is removed

For comparison, you can see that both the home route and the explicit "/non-catchall" route don't have this issue.

Note that while the CSS issue doesn't show up in development due to the way CSS is injected into the page, all other meta tags for the catchall route are missing.
