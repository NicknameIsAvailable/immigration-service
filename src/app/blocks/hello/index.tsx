import Button from '@/app/components/button'
import Container from '@/app/components/container'
import Header from '@/app/components/header'
import Link from 'next/link'
import Logo from '../../../../public/icons/logo'
import styles from './styles.module.scss'

const Hello = () => {
	return (
		<div className={styles.hello}>
			<Container>
				<header>
					<div className={styles.logo}>
						<Logo />
					</div>
					<nav>
						<div className={styles.phones}>
							<p>+34 633 51 02 26</p>
							<p>+34 685 54 27 31</p>
						</div>
						<a href='mailto:immigrationservice.spain@gmail.com'>
							<p>immigrationservice.spain@gmail.com</p>
						</a>
					</nav>
				</header>

				<div className={styles.hero}>
					<h1>Осуществите свою мечту о жизни в Испании </h1>
					<h3>
						Наша команда экспертов поможет вам сделать первый шаг к новому
						захватывающему приключению и найти свое счастье в этой удивительной
						стране!
					</h3>
				</div>

				<div className={styles.buttons}>
					<Link className={styles.link} href='#contact'>
						<Button>Оставить заявку</Button>
					</Link>
				</div>
			</Container>

			<Header />
		</div>
	)
}

export default Hello
