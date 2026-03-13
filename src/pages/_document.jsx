import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gainesville Prosthetics - Expert prosthetic fitting and educational facility" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gp-cream text-gp-text">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
