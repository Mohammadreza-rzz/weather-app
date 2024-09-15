"use client";
import "@/assets/styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <div>{children}</div>
      </body>
    </html>
  );
}
