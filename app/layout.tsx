// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google'; // For custom fonts
import I18nProvider from '../components/I18nProvider'; // Import the I18nProvider component

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Enhance Your Pricing Page with Tooltips & Pricing Parity",
  description: 'Improve your pricing page with interactive tooltips and pricing parity. Boost conversions with Pricing Flow. Try it now!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap your app with the I18nProvider */}
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
