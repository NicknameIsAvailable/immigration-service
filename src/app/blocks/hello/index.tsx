'use client'

import Button from '@/app/components/button'
import Container from '@/app/components/container'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from '../../../../public/icons/logo'
import styles from './styles.module.scss'

const Hello = () => {
	const [offset, setOffset] = useState(0)

	const handleScroll = () => {
		setOffset(window.pageYOffset)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className={styles.hello}>
			<div
				className={styles.helloBlock}
			>
				<Container>
					<div className={styles.helloContainer}>
						<header style={{ paddingTop: 20 }}>
							<div className={styles.logo}>
								<div className={styles.blur} />
								<Logo />
							</div>
							<nav className={styles.links}>
								<div className={styles.phones}>
									<p>+34 633 51 02 26</p>
									<p>+34 685 54 27 31</p>
									
									<div className={styles.whatsappIcon}/>
								</div>
								<a href='mailto:immigrationservice.spain@gmail.com' className={styles.mailLink}>
									<p>
										immigrationservice.spain@gmail.com
									</p>
									<div className={styles.mailIcon}/>
								</a>
							</nav>
						</header>

						<div className={styles.hero}>
							<div className={styles.blur} />
							<h1 className={styles.title}>Осуществите свою мечту о&nbsp;жизни в&nbsp;Испании</h1>
							<p className={styles.heroText}>
								Наша команда экспертов поможет вам сделать первый шаг
								к&nbsp;новому захватывающему приключению и&nbsp;найти свое
								счастье в&nbsp;этой удивительной стране!
							</p>
						</div>

						<div className={styles.buttons}>
							<Link className={styles.link} href='#contact'>
								<Button loading={false}>{'Оставить заявку'}</Button>
							</Link>
							<p className={styles.address}>
								29660, Marbella (Malaga), Calle Ricardo Soriano 31, 1A{' '}
								<div id={styles.locationIcon} />
							</p>
						</div>
					</div>
				</Container>
			</div>

			<div
				className={styles.helloBG}
				style={{
					transform: `translateY(${offset * 0.3}px)`,
					zIndex: -1,
				}}
			/>
		</div>
	)
}

export default Hello
