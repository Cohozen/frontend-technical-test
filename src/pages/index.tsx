import Main from '../components/layout/main'
import Head from 'next/head'
import { Container } from 'semantic-ui-react'

const Home = () => (
  <>
    <Head>
      <title>Frontend Technical test - Leboncoin</title>
      <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
    </Head>
    <Container style={{ paddingTop: 20 }}>
      <Main />
    </Container>
  </>
);

export const getStaticProps = async () => {
  return {
    props: {
      messages: (await import(`../../messages/fr.json`)).default
    }
  };
}

export default Home