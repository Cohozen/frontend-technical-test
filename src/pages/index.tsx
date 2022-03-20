import Head from 'next/head'
import { useEffect, useState } from 'react'
import Logo from '../assets/lbc-logo.webp'
import styles from '../styles/Home.module.css'
import { User } from '../types/user'
import * as usersService from '../services/usersService'
import { List, Image } from 'semantic-ui-react'

const Home = () => {
  const [users, setUsers] = useState<User[]>([])
  const year = new Date().getFullYear()

  const getUsers = () => {
    usersService.list().then(response => setUsers(response))
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
      </Head>

      <main className={styles.main}>
        <Image src={Logo} alt="Leboncoin's logo" width={400} height={125} />
        <h1 className={styles.title}>
          Welcome !
        </h1>

        <List selection verticalAlign='middle'>
          {
            users.map(user => {
              return (<List.Item>
                <Image avatar src='/images/avatar/small/helen.jpg' />
                <List.Content>
                  <List.Header>{user.nickname}</List.Header>
                </List.Content>
              </List.Item>)
            })
          }
        </List>

      </main>

      <footer className={styles.footer}>
        &copy; leboncoin - {year}
      </footer>
    </div>
  )
}

export default Home