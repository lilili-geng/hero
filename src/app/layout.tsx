import '@/app/globals.css';
import Header from './components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-pt-[var(--header-height)] scroll-smooth scrollbar-none md:scroll-pt-20 w-full h-full">
      <body className='w-full h-full'>
        <div className='w-full h-full'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
