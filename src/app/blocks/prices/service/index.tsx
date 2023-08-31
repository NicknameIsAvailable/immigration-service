import Link from 'next/link'
import styles from './styles.module.scss'

const Service = ({ item }: { item: any }) => {
	return (
		<Link className={styles.link} href='#contact'>
			<div className={styles.service}>
				<h3>{item.title}</h3>
				<p>{item.description}</p>
				<h3 className={styles.price}>{item.price}</h3>
			</div>
		</Link>
	)
}

export default Service
