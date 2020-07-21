import Document, { Head, Main, NextScript } from 'next/document'

//_document agrego el lang al html
export default class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}