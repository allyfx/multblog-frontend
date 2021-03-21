import { ApplicationProvider } from "contexts/Application";
import GlobalStyles from "styles/GlobalStyles";
import Footer from "components/Footer";
import Header from "components/Header";
import phrases from "../../phrases.json";

function MyApp({ Component, pageProps }) {
	const randomPhrase = Math.floor(Math.random() * phrases.length);
  return (
		<>
			<GlobalStyles />
			<ApplicationProvider>
        <Header />
				<Component {...pageProps} />
			</ApplicationProvider>
			<Footer phrase={phrases[randomPhrase]} />
		</>
	);
};

export default MyApp;
