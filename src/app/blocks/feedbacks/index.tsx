'use client'

import Container from '@/app/components/container'
import { useState } from 'react'
import ArrowLeftIcon from '../../../../public/icons/arrowLeft'
import ArrowRightIcon from '../../../../public/icons/arrowRight'
import Feedback from './components/feedback'
import styles from './styles.module.scss'

const Feedbacks = () => {
	const feedbacks = [
		{
			text: (
				<>
					Проконсультировался с&nbsp;командой по&nbsp;вопросу оформления ВНЖ
					в&nbsp;Испании&nbsp;&mdash; и&nbsp;остался впечатлен! Они сделали всю
					процедуру гораздо проще и&nbsp;понятнее для меня. Весь процесс был
					сопровождаем квалифицированными специалистами, которые были
					внимательны к&nbsp;моим потребностям и&nbsp;вопросам. Они
					не&nbsp;только помогли с&nbsp;оформлением документов,
					но&nbsp;и&nbsp;предоставили ценные советы и&nbsp;рекомендации, чтобы
					я&nbsp;чувствовался уверенно и&nbsp;подготовлено перед интервью.
					Благодаря команде я&nbsp;успешно получил ВНЖ в&nbsp;Испании
					и&nbsp;теперь могу начинать новый этап в&nbsp;своей жизни. Рекомендую
					их&nbsp;услуги всем, кто ищет профессиональную помощь
					в&nbsp;оформлении ВНЖ. Большое спасибо за&nbsp;отличную поддержку!
				</>
			),
		},
		{
			text: (
				<>
					Я&nbsp;хотел&nbsp;бы поделиться своим восторгом от&nbsp;сотрудничества
					с&nbsp;командой Lion and Unicorn в&nbsp;оформлении ВНЖ в&nbsp;Испанию.
					Они проявили профессионализм, предоставив мне всю необходимую помощь
					и&nbsp;поддержку на&nbsp;каждом этапе процесса. Специалисты компании
					помогли мне найти оптимальный маршрут для получения ВНЖ, предоставив
					детальные консультации и&nbsp;рекомендации. Они были терпеливыми,
					отзывчивыми и&nbsp;всегда готовы ответить на&nbsp;все мои вопросы, что
					сделало процесс намного более комфортным и&nbsp;безопасным для меня.
					Благодаря усилиям команды Lion and Unicorn, я&nbsp;успешно получил ВНЖ
					в&nbsp;Испании и&nbsp;теперь могу начать новую главу своей жизни.
				</>
			),
		},
		{
			text: (
				<>
					Спасибо, что сделали процесс оформления ВНЖ таким легким
					и&nbsp;беспроблемным. Команда проявила исключительную
					профессиональность, всегда была доступна для связи и&nbsp;оперативно
					отвечала на&nbsp;все вопросы. Они внимательно выслушали все мои
					пожелания и&nbsp;нашли оптимальные решения для моего индивидуального
					случая.
				</>
			),
		},
		{
			text: (
				<>
					Я&nbsp;хочу выразить огромную благодарность компании
					за&nbsp;их&nbsp;незаменимую помощь в&nbsp;оформлении ВНЖ для студента.
					Без их&nbsp;профессиональной поддержки, я&nbsp;бы, вероятно,
					столкнулся со&nbsp;множеством трудностей и&nbsp;запутался во&nbsp;всем
					процессе.
				</>
			),
		},
		{
			text: (
				<>
					Благодаря этой компании, я&nbsp;могу реализовывать свои
					предпринимательские идеи и&nbsp;развивать свою компанию, имея полное
					легальное право на&nbsp;работу и&nbsp;проживание в&nbsp;Испании. Они
					помогли сделать этот процесс безопасным, быстрым и&nbsp;эффективным.Я
					без колебаний рекомендую эту компанию всем предпринимателям, которые
					ищут помощи в&nbsp;оформлении ВНЖ в&nbsp;Испании. Они являются
					надежными партнерами, способными обеспечить профессиональную поддержку
					и&nbsp;результаты. Большое спасибо!
				</>
			),
		},
		{
			text: (
				<>
					Я&nbsp;очень благодарен компании за&nbsp;их&nbsp;профессионализм
					и&nbsp;поддержку в&nbsp;оформлении моего ВНЖ в&nbsp;Испании. Они были
					внимательны и&nbsp;компетентны в&nbsp;каждом шаге процесса,
					я&nbsp;чувствовал полное доверие и&nbsp;уверенность в&nbsp;каждом
					документе и&nbsp;рекомендации, которые они предоставили. Благодаря
					им&nbsp;я&nbsp;теперь могу наслаждаться жизнью в&nbsp;этой прекрасной
					стране. Они истинные профессионалы, и&nbsp;я&nbsp;рекомендую эту
					компанию всем, кто ищет помощи в&nbsp;оформлении ВНЖ в&nbsp;Испании!
				</>
			),
		},
	]

	const [firstVisible, setFirstVisible] = useState(true)
	const [secondVisible, setSecondVisible] = useState(false)

	const handleClickNext = () => {
		if (!secondVisible) {
			setFirstVisible(false)
			setSecondVisible(true)
		}
	}

	const handleClickPrev = () => {
		if (!firstVisible) {
			setFirstVisible(true)
			setSecondVisible(false)
		}
	}

	return (
		<div className={styles.feedbacks} id='feedbacks'>
			<button
				onClick={handleClickPrev}
				className={styles.arrowBtn}
				id={styles.back}
				disabled={firstVisible}
			>
				<ArrowLeftIcon />
			</button>
			<button
				onClick={handleClickNext}
				className={styles.arrowBtn}
				id={styles.forward}
				disabled={secondVisible}
			>
				<ArrowRightIcon />
			</button>
			<Container>
				<h2>Отзывы</h2>
				<p>У нас более 100 довольных клиентов и их число постоянно растет!</p>
				<div className={styles.allFeedbacks}>
					<div
						className={`${styles.feedbacksList} ${
							firstVisible ? styles.open : ''
						}`}
						id={styles.first}
					>
						{feedbacks.slice(0, 3).map(item => (
							<Feedback item={item} />
						))}
					</div>
					<div
						className={`${styles.feedbacksList} ${
							secondVisible ? styles.open : ''
						}`}
						id={styles.second}
					>
						{feedbacks.slice(3, 6).map(item => (
							<Feedback item={item} />
						))}
					</div>
				</div>
			</Container>
		</div>
	)
}

export default Feedbacks
