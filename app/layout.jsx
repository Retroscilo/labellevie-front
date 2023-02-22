import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import getUrl from "@/lib/strapi/getUrl";
import Theme from "@/lib/contexts/Theme";

async function fetchData() {
  const url = getUrl();
  const res = await fetch(`${url}/api/pages?populate=deep`);
  const pages = await res.json();
  return pages.data;
}

import { Raleway, Montserrat, Petit_Formal_Script } from "@next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
});
const raleway = Raleway({
  variable: "--font-raleway",
});
const formal = Petit_Formal_Script({
  weight: "400",
  variable: "--font-formal",
});

export default async function RootLayout({ children }) {
  const data = await fetchData();
  return (
    <html>
      <head>
        <title>Labellevie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body className={`${montserrat.variable} ${raleway.variable} ${formal.variable} font-sans text-body`}>
        <Theme>
          <Navbar pages={data} />
          <Footer pages={data} />
          {children}
        </Theme>
      </body>
    </html>
  );
}
