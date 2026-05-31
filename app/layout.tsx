import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PR Time Estimator – Estimate GitHub PR Review Time",
  description: "Analyze code changes and predict PR review time using ML on historical data. Built for engineering teams and project managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c7152f1a-f3cc-4498-9366-1a413046732e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
