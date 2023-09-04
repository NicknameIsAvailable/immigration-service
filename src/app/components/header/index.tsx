import Link from 'next/link'
import Container from '../container'
import styles from './styles.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<Container>
			<div className={styles.headerBlock}>
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
			</div>

			</Container>
			<div className={styles.nextSectionBlock}>
				<div className={styles.nextSection} />
			</div>
		</header>
	)
}

export default Header
