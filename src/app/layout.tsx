"use client";
import "@/assets/styles/globals.scss";
import { SideBar } from "@/view";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative grid h-screen w-screen place-items-center">
        <div className="max-w-[1140px] min-w-[750px] h-[650px] flex rounded-lg overflow-hidden">
          <SideBar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
