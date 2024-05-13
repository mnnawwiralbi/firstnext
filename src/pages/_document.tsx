import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Tempatkan elemen head lainnya di sini */}
        </Head>
        <body>
          <Main/>
          <p>Text</p>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
