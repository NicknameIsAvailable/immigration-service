'use client'

import Head from 'next/head'
import { useEffect, useState } from 'react'
import AboutUs from './blocks/aboutUs'
import Feedbacks from './blocks/feedbacks'
import Hello from './blocks/hello'
import Information from './blocks/information'
import MakeOrder from './blocks/makeOrder'
import Prices from './blocks/prices'
import ResidentPermitTypes from './blocks/residentPermitTypes'
import FloatingButton from './components/floatingButton'
import Footer from './components/footer'
import Header from './components/header'

export default function Home() {
	const [width, setWidth] = useState<number | undefined>()

	useEffect(() => {
		if (typeof window !== 'undefined') setWidth(window.innerWidth)
	}, [])

	useEffect(() => {
		const handleResize = (event: any) => {
			setWidth(event.target.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

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
				<Header />
				<AboutUs width={width} />
				<Information />
				<ResidentPermitTypes width={width} />
				<Prices />
				<Feedbacks width={width}/>
				<MakeOrder />
				<Footer width={width} />
			</main>
		</>
	)
}
