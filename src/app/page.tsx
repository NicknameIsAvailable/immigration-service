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
	const [height, setHeight] = useState<number | undefined>()

	useEffect(() => {
		if (typeof window !== 'undefined') setWidth(window.innerWidth)
		if (typeof window !== 'undefined') setHeight(window.innerHeight)
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
		<div style={{width: '100vw'}}>
			<Head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link rel='icon' href='/favicon.svg' sizes='any' />
				<link rel='apple-touch-icon' href='/favicon.ico' sizes='any' />
				<link rel='apple-touch-icon' href='/favicon.svg' sizes='any' />
			</Head>
			<main>
			<script
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(94824466, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
            }}
          />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/94824466" style={{ position:'absolute', left:'-9999px' }} alt="" />
          </div>
        </noscript>
				<FloatingButton />
				<Hello width={width}/>
				<Header />
				<AboutUs width={width} />
				<Information />
				<ResidentPermitTypes width={width} />
				<Prices />
				<Feedbacks width={width} height={height}/>
				<MakeOrder />
				<Footer width={width} />
			</main>
		</div>
	)
}
