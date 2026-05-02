import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Termination Predictor — Early Warning for Payment Processor Risks",
  description: "Analyze transaction patterns and flag behaviors that commonly lead to Stripe or PayPal account termination. Protect your business before it's too late."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e498c1c2-5a08-4c36-a4d4-7044d346b9fd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
