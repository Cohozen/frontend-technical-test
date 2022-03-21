import type { AppProps } from 'next/app'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import { NextIntlProvider } from 'next-intl';
import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import store from '../redux/rootReducer'

// Default way to get a logged user
export const loggedUserId = getLoggedUserId()

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <>
    <Provider store={store}>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </Provider>
  </>
}

export default MyApp
