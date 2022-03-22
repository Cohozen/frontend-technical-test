import type { AppProps } from 'next/app'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import store from '../redux/rootReducer'
import Layout from '../components/layout/layout'

// Default way to get a logged user
export const loggedUserId = getLoggedUserId()

const MyApp = ({ Component, pageProps }: AppProps) => {



  return <>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  </>
}

export default MyApp
