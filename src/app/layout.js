import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from './Header';
import { Scroll } from './scroll';

export const metadata = {
  title: 'SNOW FIELD',
  description: 'Digital Menu for Amigonostray',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Scroll />
        <Header />
        <br /><br /><br />
        <main className="App">
          {children}
        </main>
      </body>
    </html>
  );
}
