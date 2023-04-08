/* eslint-disable no-useless-catch */
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error: any) {
      throw error;
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="-1" />
          <meta name="robots" content="index, follow" />
          <meta name="google" content="notranslate" />
          <link rel="apple-touch-icon" sizes="57x57" href="/stock-calc/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/stock-calc/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/stock-calc/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/stock-calc/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/stock-calc/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/stock-calc/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/stock-calc/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/stock-calc/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/stock-calc/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/stock-calc/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/stock-calc/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/stock-calc/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/stock-calc/favicon-16x16.png" />
          <link rel="manifest" href="/stock-calc/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/stock-calc/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
