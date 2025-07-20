import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="연세남성합창단" />
          <meta property="og:site_name" content="글리클럽 창단 40주년 연주회" />
          <meta property="og:description" content="연세남성합창단" />
          <meta property="og:title" content="글리클럽 창단 40주년 연주회" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="글리클럽 창단 40주년 연주회" />
          <meta
            name="twitter:description"
            content="글리클럽 창단 40주년 연주회."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
