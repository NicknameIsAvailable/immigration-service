import styles from './styles.module.scss'

const Service = ({ item }) => {
	return (
		<div className={styles.service}>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
			<h3 className={styles.price}>{item.price}</h3>
		</div>
	)
}

export default Service
