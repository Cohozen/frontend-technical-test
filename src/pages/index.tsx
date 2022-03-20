import Main from '../components/layout/main'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container } from 'semantic-ui-react'

const Home = () => (
  <div >
    <Head>
      <title>Frontend Technical test - Leboncoin</title>
      <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
    </Head>
    <Container>
      <Main />
    </Container>
  </div>
)

export default Home