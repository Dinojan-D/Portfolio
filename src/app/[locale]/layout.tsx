import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "./globals.css"

export const metadata: Metadata = {
  title: "Dinojan | Portfolio",
  keywords: "cybersécurité, développement web, portfolio, terminal, console, Dinojan, hacking éthique, programmation, cybersecurity, web development, portfolio, terminal, console, ethical hacking, programming",
  description: "Portfolio de Dinojan.cybersécurité et développement app/web/games.",  
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
   
      <body className='h-screen w-screen' >
        <NextIntlClientProvider  messages={messages}>
          {children}
          <Analytics/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}