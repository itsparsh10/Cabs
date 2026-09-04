import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucifer Cabs | Travel with Comfort",
  description: "Book comfortable outstation, local, and airport taxis at best rates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('unhandledrejection', function(event) {
                  if (event.reason && (
                    (event.reason.stack && event.reason.stack.includes('chrome-extension:')) ||
                    (event.reason.message && event.reason.message.includes('M_ID'))
                  )) {
                    event.preventDefault();
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body
        className="font-sans antialiased bg-white text-slate-900 flex min-h-screen flex-col"
      >
        {children}
      </body>
    </html>
  );
}

