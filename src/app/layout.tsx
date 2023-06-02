import RootStyleRegistry from "@/app/emotion";
import Providers from "@/app/providers";
import { Inter } from "next/font/google";
import Toast from "../components/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mantine Template",
  description: "Template of NextJS (App Router) with Mantine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <RootStyleRegistry>
          <Providers>{children}</Providers>
          <Toast />
        </RootStyleRegistry>
      </body>
    </html>
  );
}
