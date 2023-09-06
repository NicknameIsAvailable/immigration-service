import styles from './styles.module.scss'

const Feedback = ({ item, visibleCount, visibleFeedbackCount, index }: { item: any, visibleCount: number, visibleFeedbackCount: number, index: number }) => {

	const visible = index >= visibleCount && index < visibleCount + visibleFeedbackCount;

	return (
		<div className={`${styles.feedback} ${visible ? styles.visible : ''}`}>
			<div className={styles.badge}>
				<div className={styles.avatar} />
				<h3>Аноним</h3>
			</div>
			<p className={styles.feedbackText}>{item.text}</p>
		</div>
	)
}

export default Feedback
