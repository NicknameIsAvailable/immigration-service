import MailIcon from '../../../../public/icons/mailIcon'
import TelegramIcon from '../../../../public/icons/telegramIcon'
import WhatsappIcon from '../../../../public/icons/whatsappIcon'
import Container from '../container'
import styles from './styles.module.scss'

const Footer = ({ width }: { width: number | undefined }) => {
	return (
		<footer className={styles.footer} id='footer'>
			<Container>
				<div className={styles.footerBlock}>
					<div className={styles.address}>
						{width && width <= 640 ? 
							<p className={styles.link}>29660 Marbella (Malaga) Calle Ricardo Soriano 31, 1A</p>
							: 
							<>
								<p className={styles.link}>29660</p>
								<p className={styles.link}>Marbella (Malaga)</p>
								<p className={styles.link}>Calle Ricardo Soriano 31, 1A</p>
							</>
						}
					</div>

					<div className={styles.contacts}>
						{
							width && width <= 640 ?
								<>
						<div className={width && width <= 640 ? styles.phones : ''}>
							<WhatsappIcon/>
							<p className={styles.link}>+34 685 54 27 31</p> 
							<p className={styles.link}>+34 633 51 02 26</p>
						</div>

						<div style={{ display: 'flex', alignItems: 'center' }}>
							<a href='mailto:immigrationservice.spain@gmail.com' style={{display: 'flex', alignItems: 'center', gap: 20}}>
							<MailIcon/>
								<p className={styles.link} style={{ marginTop: 10}}>
									immigrationservice.spain@gmail.com
								</p>
							</a>

						<a href='https://t.me/ImmigrationServiceEs' target='_blank' style={{marginTop: 4}}>
							<TelegramIcon width={width} styles={styles}/>
						</a>
						</div>
								</>
							:
							<>
							<div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
							<MailIcon/>
							<a href='mailto:immigrationservice.spain@gmail.com'>
								<p className={styles.link}>
									immigrationservice.spain@gmail.com
								</p>
							</a>
						</div>

						<div style={{display: 'flex', gap: 20}}>
							<div>
							<WhatsappIcon/>
							</div>
							<p className={styles.link}>+34 685 54 27 31</p>
							<p className={styles.link}>+34 633 51 02 26</p>
						</div>
							</>
						}
					</div>
					{width && width > 640 ? 
						<div className={styles.telegram}>
						<a href='https://t.me/ImmigrationServiceEs' target='_blank'>
							<TelegramIcon width={width} styles={styles}/>
						</a>
					</div>
				: ''
				}
				</div>	
			</Container>
			<Container>
				<p className={styles.smallText}>
					Информационный портал "Immigration service". Копирование и использование
					материалов портала без письменного согласия автора является нарушением
					авторских прав и преследуется законом
				</p>
			</Container>
		</footer>
	)
}

export default Footer
