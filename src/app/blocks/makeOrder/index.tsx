'use client'

import Button from '@/app/components/button'
import Container from '@/app/components/container'
import { useState } from 'react'
import styles from './styles.module.scss'

const MakeOrder = () => {
	interface FormParams {
		eMail: string
		name: string
		phone: string
		question: string
	}

	const [loading, setLoading] = useState(false)
	const [formParams, setFormParams] = useState<FormParams>({
		eMail: '',
		name: '',
		phone: '',
		question: '',
	})

	const sendForm = async () => {
		try {
			setLoading(true)
			const data = await axios.post(
				'http://localhost:4444/api/order',
				formParams
			)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	console.log(formParams)

	return (
		<div style={{ background: '#D58001', paddingTop: 60 }}>
			<section className={styles.makeOrder} id='contact'>
				<Container>
					<form
						className={styles.orderForm}
						onSubmit={e => {
							e.preventDefault()
							sendForm()
						}}
					>
						<h1>Заказать услугу по оформлению ВНЖ</h1>
						<label htmlFor='eMail'>
							<p className={formParams.eMail.length > 0 ? styles.visible : {}}>
								e-mail
							</p>
							<input
								type='e-mail'
								placeholder='e-mail'
								onChange={e =>
									setFormParams({ ...formParams, eMail: e.target.value })
								}
							/>
						</label>
						<label htmlFor='name'>
							<p className={formParams.name.length > 0 ? styles.visible : {}}>
								Имя Фамилия
							</p>
							<input
								type='name'
								placeholder='Имя Фамилия'
								onChange={e =>
									setFormParams({ ...formParams, name: e.target.value })
								}
							/>
						</label>
						<label htmlFor='phone'>
							<p className={formParams.phone.length > 0 ? styles.visible : {}}>
								Номер телефона
							</p>
							<input
								type='phone'
								placeholder='Номер телефона'
								onChange={e =>
									setFormParams({ ...formParams, phone: e.target.value })
								}
							/>
						</label>
						<label htmlFor='question'>
							<p
								className={formParams.question.length > 0 ? styles.visible : {}}
							>
								Есть вопрос? Напишите его здесь
							</p>
							<input
								type='text'
								placeholder='Есть вопрос? Напишите его здесь'
								onChange={e =>
									setFormParams({ ...formParams, question: e.target.value })
								}
							/>
						</label>
						<p>
							Нажимая на кнопку, вы даете согласие на обработку персональных
							данных и соглашаетесь с политикой конфиденциальности
						</p>
						<Button loading={loading}>Отправить заявку</Button>
					</form>
				</Container>
			</section>
		</div>
	)
}

export default MakeOrder
