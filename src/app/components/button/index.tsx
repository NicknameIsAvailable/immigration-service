import styles from './styles.module.scss'

const Button = ({ children, loading }: { children: any; loading: boolean }) => {
	return (
		<button className={styles.button} disabled={loading}>
			<div className={`${styles.loading} ${loading ? styles.visible : {}}`}>
				<div className={styles.ringLoader} />
			</div>
			{children}
		</button>
	)
}

export default Button
