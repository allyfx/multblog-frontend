import { ApplicationProvider } from "contexts/Application";
import GlobalStyles from "styles/GlobalStyles";
import phrases from "../../phrases.json";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }) {
	const randomPhrase = Math.floor(Math.random() * phrases.length);
  return (
		<>
			<GlobalStyles />
			<ApplicationProvider>
				<Component {...pageProps} />
			</ApplicationProvider>
			<Footer phrase={phrases[randomPhrase]} />
		</>
	);
};

export default MyApp;
