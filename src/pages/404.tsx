import Head from "next/head";

import { NotFoundContainer } from "styles/pages/NotFound";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <Head>
        <link rel="shortcut icon" href="../favicon.png" type="image/png"/>

        <title>NotFound - MultBlog</title>
      </Head>

      <img src="../assets/umbrella_girl.svg" alt="Não há chuva aqui, flor." />

      <h2>Não há chuva aqui, flor.</h2>
    </NotFoundContainer>
  )
}