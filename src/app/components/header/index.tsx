import Link from 'next/link'
import styles from './styles.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
				<nav className={styles.links}>
					<Link className={styles.link} href='#about-us'>
						О нас
					</Link>
					<Link className={styles.link} href='#info'>
						Информация о ВНЖ
					</Link>
					<Link className={styles.link} href='#prices'>
						Цены и услуги
					</Link>
					<Link className={styles.link} href='#feedbacks'>
						Отзывы
					</Link>
					<Link className={styles.link} href='#contact'>
						Связаться с нами{' '}
					</Link>
				</nav>
			<div className={styles.nextSectionBlock}>
				<div className={styles.nextSection} />
			</div>
		</header>
	)
}

export default Header
