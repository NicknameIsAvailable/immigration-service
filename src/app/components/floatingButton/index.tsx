'use client'

import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

const FloatingButton = () => {
	const arrow = '../../../../public/Mask group.png'
	const [isVisible, setIsVisible] = useState(false)

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<button
			onClick={scrollToTop}
			className={styles.floatingButton}
			style={
				isVisible
					? { bottom: '40px', opacity: 1, pointerEvents: 'all' }
					: { bottom: '80px', opacity: 0, pointerEvents: 'none' }
			}
		>
			<div className={styles.arrow} />
		</button>
	)
}

export default FloatingButton
