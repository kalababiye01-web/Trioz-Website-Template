import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Trioz Minneapolis Plumbers & Drain Clean Co. | 24/7 Emergency Plumbing Minneapolis",
      },
      {
        name: "description",
        content:
          "4.9★ rated Minneapolis plumbers. 24/7 emergency plumbing, drain cleaning, water heater repair, leak detection & more. Open 24 hours — call (612) 464-6667 now.",
      },
      { name: "theme-color", content: "#0c4a6e" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content:
          "Trioz Minneapolis Plumbers & Drain Clean Co. | 24/7 Emergency Plumbing",
      },
      {
        property: "og:description",
        content:
          "4.9★ rated Minneapolis plumbers. 24/7 emergency plumbing, drain cleaning & more. Call (612) 464-6667 — open 24 hours.",
      },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary" },
      {
        name: "twitter:title",
        content:
          "Trioz Minneapolis Plumbers & Drain Clean Co. | 24/7 Emergency Plumbing",
      },
      {
        name: "twitter:description",
        content:
          "4.9★ rated Minneapolis plumbers. Open 24 hours. Call (612) 464-6667.",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
