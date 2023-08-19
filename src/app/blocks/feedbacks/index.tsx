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
			name: 'Ben Whelan',
			avatar: '/public/dart.png',
			text: 'Проконсультировался с командой по вопросу оформления ВНЖ в Испании — и остался впечатлен! Они сделали всю процедуру гораздо проще и понятнее для меня. Весь процесс был сопровождаем квалифицированными специалистами, которые были внимательны к моим потребностям и вопросам. Они не только помогли с оформлением документов, но и предоставили ценные советы и рекомендации, чтобы я чувствовался уверенно и подготовлено перед интервью. Благодаря команде я успешно получил ВНЖ в Испании и теперь могу начинать новый этап в своей жизни. Рекомендую их услуги всем, кто ищет профессиональную помощь в оформлении ВНЖ. Большое спасибо за отличную поддержку!',
		},
		{
			name: 'Barry Reynolds',
			avatar: '/public/dart.png',
			text: 'Я хотел бы поделиться своим восторгом от сотрудничества с командой Lion and Unicorn в оформлении ВНЖ в Испанию. Они проявили профессионализм, предоставив мне всю необходимую помощь и поддержку на каждом этапе процесса. Специалисты компании помогли мне найти оптимальный маршрут для получения ВНЖ, предоставив детальные консультации и рекомендации. Они были терпеливыми, отзывчивыми и всегда готовы ответить на все мои вопросы, что сделало процесс намного более комфортным и безопасным для меня. Благодаря усилиям команды Lion and Unicorn, я успешно получил ВНЖ в Испании и теперь могу начать новую главу своей жизни.',
		},
		{
			name: 'Аноним',
			avatar: '/public/dart.png',
			text: 'Спасибо, что сделали процесс оформления ВНЖ таким легким и беспроблемным. Команда проявила исключительную профессиональность, всегда была доступна для связи и оперативно отвечала на все вопросы. Они внимательно выслушали все мои пожелания и нашли оптимальные решения для моего индивидуального случая.',
		},
		{
			name: 'Аноним',
			avatar: '/public/dart.png',
			text: 'Я хочу выразить огромную благодарность компании за их незаменимую помощь в оформлении ВНЖ для студента. Без их профессиональной поддержки, я бы, вероятно, столкнулся со множеством трудностей и запутался во всем процессе.',
		},
		{
			name: 'Аноним',
			avatar: '/public/dart.png',
			text: 'Благодаря этой компании, я могу реализовывать свои предпринимательские идеи и развивать свою компанию, имея полное легальное право на работу и проживание в Испании. Они помогли сделать этот процесс безопасным, быстрым и эффективным.Я без колебаний рекомендую эту компанию всем предпринимателям, которые ищут помощи в оформлении ВНЖ в Испании. Они являются надежными партнерами, способными обеспечить профессиональную поддержку и результаты. Большое спасибо!',
		},
		{
			name: 'Аноним',
			avatar: '/public/dart.png',
			text: 'Я очень благодарен компании за их профессионализм и поддержку в оформлении моего ВНЖ в Испании. Они были внимательны и компетентны в каждом шаге процесса, я чувствовал полное доверие и уверенность в каждом документе и рекомендации, которые они предоставили. Благодаря им я теперь могу наслаждаться жизнью в этой прекрасной стране. Они истинные профессионалы, и я рекомендую эту компанию всем, кто ищет помощи в оформлении ВНЖ в Испании!',
		},
	]

	const [startIndex, setStartIndex] = useState(0)

	const handleClickNext = () => {
		const nextIndex = startIndex + 3
		if (nextIndex < feedbacks.length) {
			setStartIndex(nextIndex)
		}
	}

	const handleClickPrev = () => {
		const prevIndex = startIndex - 3
		if (prevIndex >= 0) {
			setStartIndex(prevIndex)
		}
	}

	return (
		<div className={styles.feedbacks} id='feedbacks'>
			<button
				onClick={handleClickPrev}
				className={styles.arrowBtn}
				id={styles.back}
				disabled={startIndex === 0}
			>
				<ArrowLeftIcon />
			</button>
			<button
				onClick={handleClickNext}
				className={styles.arrowBtn}
				id={styles.forward}
				disabled={startIndex + 3 >= feedbacks.length}
			>
				<ArrowRightIcon />
			</button>
			<Container>
				<h2>Отзывы</h2>
				<p>
					У нас {feedbacks.length} довольных клиентов и их число постоянно
					растет
				</p>
				<div className={styles.feedbacksList}>
					{feedbacks.slice(startIndex, startIndex + 3).map(item => (
						<Feedback item={item} />
					))}
				</div>
			</Container>
		</div>
	)
}

export default Feedbacks