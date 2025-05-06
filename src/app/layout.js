import { Pointer } from "@/components/magicui/pointer";
import "./globals.css";
export const metadata = {
  title: "KASIM SAIFI",
  description: "Kasim Saifi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
