import '@/styles/globals.css';

import {Montserrat} from "@next/font/google"
import {Roboto} from "@next/font/google"

const roboto = Roboto({
    variable: "--roboto-font",
    weight: "500"
})

const montserrat = Montserrat({
    variable: "--montserrat-font"
})

export default function RootLayout({children}) {
    return (
        <html>
        <head>
            <title>Labellevie</title>
        </head>
        <body className={montserrat.className}>
        {children}
        </body>
        </html>
    )
}
