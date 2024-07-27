import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trello",
  description: "Trello-Style Task Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ConfigProvider
        theme={{
          components: {
            Layout: { headerBg: "#F7F7F7", siderBg: "#FFFFFF" },
            Menu: {
              itemSelectedBg: "#DDDDDD",
              itemSelectedColor: "#797979",
              itemHoverBg: "#DDDDDD",
              itemColor: "#797979",
            },
            Button: {
              defaultBorderColor: "transparent",
              defaultHoverBorderColor: "transparent",
              defaultHoverBg: "#DDDDDD",
              defaultBg: "#DDDDDD",
              defaultColor: "#797979",
              defaultHoverColor: "#000000",
              defaultActiveBg: "#DDDDDD",
            },
          },
          token: {},
        }}
      >
        <body className={inter.className}>{children}</body>
      </ConfigProvider>
    </html>
  );
}
