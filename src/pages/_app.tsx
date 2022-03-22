import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/layout/layout';
import store from '../redux/rootReducer';
import '../styles/globals.css';
import { getLoggedUserId } from '../utils/getLoggedUserId';

// Default way to get a logged user
export const loggedUserId = getLoggedUserId();

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</>
	);
};

export default MyApp;
