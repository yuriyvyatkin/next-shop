import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { ReduxProvider } from '@/app/redux/provider';

export const metadata: Metadata = {
  title: {
    template: '%s | Products',
    default: 'Products',
  },
  description: 'React (Next.js) E-commerce Product Listing Page with Server Side Rendering',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
