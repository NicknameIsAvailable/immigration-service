import styles from './styles.module.scss'

const Feedback = ({ item }: { item: any }) => {
	return (
		<div className={styles.feedback}>
			<div className={styles.badge}>
				<div className={styles.avatar} />
				<h3>Аноним</h3>
			</div>
			<p className={styles.feedbackText}>{item.text}</p>
		</div>
	)
}

export default Feedback
