import Head from 'next/head';
import { DashboardContainer } from "styles/pages/Home";

export default function Home() {
	return (
		<>
			<DashboardContainer>
				<Head>
					<title>MultBlog - Ler e compartilhar histórias</title>
				</Head>
			</DashboardContainer>
		</>
	);
}
