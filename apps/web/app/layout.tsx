import type { Metadata } from "next";
import localFont from 'next/font/local'
import './globals.css'  
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Open Plan",
  description: "Open Plan Project by Se Eun",
};

const pretendard = localFont({
  src: [
    {
      path: './assets/fonts/Pretendard-Regular.subset.woff',
      weight: '400',
      style: 'normal',
    }  
  ],
  variable: '--font-pretendard', 
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
