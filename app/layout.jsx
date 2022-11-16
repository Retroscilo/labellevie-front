import "@/styles/globals.css";

import { Raleway, Montserrat } from "@next/font/google";

const raleway = Raleway();
const montserrat = Montserrat();

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Labellevie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body className={`${montserrat.className} text-body`}>{children}</body>
    </html>
  );
}
