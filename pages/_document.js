import Document, { Html, Head, Main, Next, NextScript} from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps}
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="stylesheet" href="https://use.typekit.net/hqg8ecv.css" />
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