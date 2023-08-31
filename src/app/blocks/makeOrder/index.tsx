'use client'

import Button from '@/app/components/button'
import Container from '@/app/components/container'
import Document from '@/app/components/document'
import axios from 'axios'
import { useState } from 'react'
import styles from './styles.module.scss'

const MakeOrder = () => {
	const [open, setOpen] = useState(false)

	interface FormParams {
		email: string
		name: string
		phone: string
		question: string
	}

	const [loading, setLoading] = useState(false)
	const [isSended, setIsSended] = useState(false)
	const [formParams, setFormParams] = useState<FormParams>({
		email: '',
		name: '',
		phone: '',
		question: '',
	})

	const sendForm = async () => {
		try {
			setLoading(true)
			const data = await axios.post(
				`http://95.163.241.37:8080/api/get-in-touch`,
				formParams
			)
			setIsSended(true)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	return (
		<div style={{ background: '#D58001', paddingTop: 60 }}>
			<Document open={open} setOpen={setOpen} />
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
							<p className={formParams.email.length > 0 ? styles.visible : ''}>
								e-mail
							</p>
							<input
								type='e-mail'
								placeholder='E-mail'
								required
								onChange={e =>
									setFormParams({ ...formParams, email: e.target.value })
								}
							/>
						</label>
						<label htmlFor='name'>
							<p className={formParams.email.length > 0 ? styles.visible : ''}>
								Имя Фамилия
							</p>
							<input
								type='name'
								placeholder='Имя Фамилия'
								required
								onChange={e =>
									setFormParams({ ...formParams, name: e.target.value })
								}
							/>
						</label>
						<label htmlFor='phone'>
							<p className={formParams.email.length > 0 ? styles.visible : ''}>
								Номер телефона
							</p>
							<input
								type='phone'
								placeholder='Номер телефона'
								required
								onChange={e =>
									setFormParams({ ...formParams, phone: e.target.value })
								}
							/>
						</label>
						<label htmlFor='question'>
							<p className={formParams.email.length > 0 ? styles.visible : ''}>
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
							данных и соглашаетесь с{' '}
							<span
								className={styles.documentLink}
								onClick={() => setOpen(true)}
							>
								политикой конфиденциальности
							</span>
						</p>
						<Button loading={loading}>
							{isSended ? 'Данные отправлены' : 'Отправить заявку'}
						</Button>
					</form>
				</Container>
			</section>
		</div>
	)
}

export default MakeOrder
