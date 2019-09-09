import { h } from 'preact';
import { Text, IntlProvider } from 'preact-i18n';
import definition from '../../i18n/en.json';

const Comp = () => (
	<Text id="sample" />
);

const Home = () => (
	<IntlProvider definition={definition}>
		<Comp />
	</IntlProvider>
);

export default Home;
