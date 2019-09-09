import { h } from 'preact';
import { Text, IntlProvider } from 'preact-i18n';
import definition from '../../i18n/ru.json';

const Content = () => (
	<div>
		<Text id="sample">Fallback</Text>
	</div>
);

const Page = () => (
	<IntlProvider definition={definition}>
		<Content />
	</IntlProvider>
);

export default Page;
