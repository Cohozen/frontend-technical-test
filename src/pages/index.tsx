import Main from '../components/layout/main'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Frontend Technical test - Leboncoin</title>
      <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
    </Head>
    <main className={styles.main}>
      <Main />
    </main>
  </div>
)

export default Home