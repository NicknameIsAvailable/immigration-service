import Image from 'next/image'
import styles from './styles.module.scss'

const Feedback = ({ item }) => {
	const avatar = item.avatar

	return (
		<div className={styles.feedback}>
			<div className={styles.badge}>
				<Image width={120} height={120} src={avatar} alt={item.name} />
				<h3>{item.name}</h3>
			</div>
			<p className={styles.feedbackText}>{item.text}</p>
		</div>
	)
}

export default Feedback
