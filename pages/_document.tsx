import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="font-sans">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Serif:400,700&display=swap" rel="stylesheet" />

          {/* <!-- generics --> */}
          <link rel="icon" href="/favicons/favicon-32.png" sizes="32x32" />
          <link rel="icon" href="/favicons/favicon-57.png" sizes="57x57" />
          <link rel="icon" href="/favicons/favicon-76.png" sizes="76x76" />
          <link rel="icon" href="/favicons/favicon-96.png" sizes="96x96" />
          <link rel="icon" href="/favicons/favicon-128.png" sizes="128x128" />
          <link rel="icon" href="/favicons/favicon-192.png" sizes="192x192" />
          <link rel="icon" href="/favicons/favicon-228.png" sizes="228x228" />

          {/* <!-- Android --> */}
          <link rel="shortcut icon" sizes="196x196" href="/favicons/favicon-196.png" />

          {/* <!-- iOS --> */}
          <link rel="apple-touch-icon" href="/favicons/favicon-120.png" sizes="120x120" />
          <link rel="apple-touch-icon" href="/favicons/favicon-152.png" sizes="152x152" />
          <link rel="apple-touch-icon" href="/favicons/favicon-180.png" sizes="180x180" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
