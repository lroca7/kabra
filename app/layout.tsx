import { montserrat } from './ui/font';
import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="py10 flex items-center justify-center">
          Hecho con por :)
        </footer>
      </body>
    </html>
  );
}
