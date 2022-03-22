import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/layout/layout';
import store from '../redux/rootReducer';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<Provider store={store}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</Provider>
);

export default MyApp;
