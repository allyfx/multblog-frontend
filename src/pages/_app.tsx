import { ApplicationProvider } from "contexts/Application";
import { useRouter } from "next/router";

import Footer from "components/Footer";
import Header from "components/Header";

import GlobalStyles from "styles/GlobalStyles";

import phrases from "../../phrases.json";

function MyApp({ Component, pageProps }) {
	const randomPhrase = Math.floor(Math.random() * phrases.length);
  const router = useRouter();

  return (
		<>
			<GlobalStyles />
			<ApplicationProvider>
        <Header />
				<Component {...pageProps} />
			</ApplicationProvider>
			{!router.pathname.includes("session") && (
        <Footer phrase={phrases[randomPhrase]} />
      )}
		</>
	);
};

export default MyApp;
