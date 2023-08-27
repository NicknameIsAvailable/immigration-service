import Head from 'next/head'
import AboutUs from './blocks/aboutUs'
import Feedbacks from './blocks/feedbacks'
import Hello from './blocks/hello'
import Information from './blocks/information'
import MakeOrder from './blocks/makeOrder'
import Prices from './blocks/prices'
import ResidentPermitTypes from './blocks/residentPermitTypes'
import FloatingButton from './components/floatingButton'
import Footer from './components/footer'

export default function Home() {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link rel='icon' href='/favicon.svg' sizes='any' />
				<link rel='apple-touch-icon' href='/favicon.ico' sizes='any' />
				<link rel='apple-touch-icon' href='/favicon.svg' sizes='any' />
			</Head>
			<main>
				<FloatingButton />
				<Hello />
				<AboutUs />
				<Information />
				<ResidentPermitTypes />
				<Prices />
				<Feedbacks />
				<MakeOrder />
				<Footer />
			</main>
		</>
	)
}
