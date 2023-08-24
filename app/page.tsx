import About from '@/components/About/About';
import Header from '@/components/Header/Header';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<Header />
			<About />
		</>
	);
};

export default Home;
