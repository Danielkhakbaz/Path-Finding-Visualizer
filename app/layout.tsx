import { ReactNode } from "react";
import type { Metadata } from "next";
import { LatoFont } from "@/styles/font";
import { ViewTransitions } from "next-view-transitions";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Path-Finding Visualizer",
  description: "",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "twitter:title": "",
    "twitter:description": "",
    "twitter:url": "",
    "twitter:domain": "",
    "twitter:image": "",
    "twitter:card": "summary_large_image",
    "og:title": "",
    "og:description": "",
    "og:url": "",
    "og:image": "",
    "og:type": "website",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <ViewTransitions>
      <html lang="en" data-theme="dracula">
        <body className={LatoFont.className}>{children}</body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
