'use client'

import Container from '@/app/components/container'
import { useEffect, useState } from 'react'
import Arrow from '../../../../public/icons/arrow'
import styles from './styles.module.scss'

const ResidentPermitTypes = ({width}: {width: number | undefined}) => {
	const [chosenPermit, setChosenPermit] = useState(0)

	interface ResidentPermitType {
		name: string
		description: any
	}

	const residentPermitTypes: ResidentPermitType[] = [
		{
			name: 'ВНЖ для финансово независимых лиц',
			description: (
				<>
					{' '}
					<p>
						Предоставляется иностранцу на&nbsp;1&nbsp;год. По&nbsp;истечении
						указанного срока резидент может продлить свой статус сразу
						на&nbsp;2&nbsp;года.
						<br />
						<br />
						<br />
						<b> Преимущества: </b>
						<br />
						<br />
						<ol>
							<li>
								Испанский резидент имеет право находиться на&nbsp;территории
								Евросоюза и&nbsp;пользоваться всеми привилегиями своего
								положения до окончания срока действия вида на&nbsp;жительство.
							</li>
							<li>
								Владелец карты испанского резидента, а&nbsp;также члены его
								семьи, могут свободно перемещаться по&nbsp;всем странам&nbsp;ЕС
								и&nbsp;Шенгенского договора без оформления виз и&nbsp;прочей
								въездной документации.
							</li>
							<li>
								Иностранец может купить или арендовать испанскую недвижимость,
								которая относится к&nbsp;одним из&nbsp;самых выгодных объектов
								для инвестирования в&nbsp;Европе.
							</li>
							<li>
								Статус испанского резидента по&nbsp;окончании срока действия
								можно легко продлить, подав соответствующие документы
								в&nbsp;полицию.
							</li>
							<li>
								В&nbsp;ситуации политической нестабильности испанский ВНЖ станет
								гарантией быстрого переезда в&nbsp;безопасную страну.
							</li>
							<li>
								Владельцы карты ВНЖ в&nbsp;Испании получают доступ
								к&nbsp;услугам государственных образовательных
								и&nbsp;медицинских учреждений.
							</li>
							<li>
								По&nbsp;сравнению с&nbsp;другими развитыми европейским странами
								Испания предлагает своим резидентам продукты и&nbsp;товары
								первой необходимости по&nbsp;более доступным ценам.
							</li>
							<li>
								Знаменитые курорты Испании будут доступны для резидентов этой
								страны в&nbsp;любое время года.
							</li>
						</ol>
					</p>
				</>
			),
		},
		{
			name: 'Виза инвестора (Золотая виза)',
			description: (
				<>
					<p className='other'>
						Дает зарубежному инвестору право на&nbsp;двухлетний ВНЖ, который
						можно продлить еще на&nbsp;5&nbsp;лет. Впоследствии иностранец имеет
						возможность получить ПМЖ и&nbsp;оформить гражданство Испании.
						<br />
						<br />
						<br />
						<b>Возможности: </b>
						<br />
						<br />
						<ol>
							<li>
								Проживание, а&nbsp;также осуществление профессиональной и
								предпринимательской деятельности в&nbsp;Испании.
							</li>
							<li>
								Пребывание в&nbsp;любой из&nbsp;стран Шенгенской зоны без
								ограничений во времени.
							</li>
							<li>
								Переезд в&nbsp;курортную зону с&nbsp;мягким климатом
								и&nbsp;комфортными условиями жизни.
							</li>
							<li>Иммиграция вместе с&nbsp;членами семьи.</li>
							<li>
								Оформление в&nbsp;дальнейшем ПМЖ и&nbsp;гражданства Испании.
							</li>
							<li>Нет необходимости постоянно проживать в&nbsp;Испании.</li>
							<li>
								Можно получить двухлетний вид на&nbsp;жительство и&nbsp;продлить
								его еще на&nbsp;5&nbsp;лет.
							</li>
							<li>
								Оформить первичный ВНЖ можно в&nbsp;любое время
								на&nbsp;протяжении срока действия визы инвестора.
							</li>
							<li>
								Длительность визовой процедуры составляет
								от&nbsp;10&nbsp;до&nbsp;20&nbsp;дней.
							</li>
						</ol>
					</p>
				</>
			),
		},
		{
			name: 'ВНЖ по студенческой визе',
			description: (
				<>
					<p className='other'>
						Разрешение на&nbsp;проживание в&nbsp;Испании более 90&nbsp;дней для
						иностранцев, которые планируют обучение в&nbsp;вузах либо
						на&nbsp;языковых курсах в&nbsp;этой стране. Мы&nbsp;Вам поможем
						правильно подобрать программу языковых курсов, получить студенческую
						визу и&nbsp;оформить на&nbsp;ее&nbsp;основании ВНЖ. Срок оформления
						документа занимает от&nbsp;2&nbsp;до&nbsp;4&nbsp;месяцев.
						<br />
						<br />
						<br />
						<b>Преимущества: </b>
						<br />
						<br />
						<ol>
							<li>
								Законное проживание в&nbsp;Испании в&nbsp;течение срока
								обучения, а&nbsp;также право работать до&nbsp;4-х часов
								в&nbsp;день. Возможность остаться жить в Испании после окончания
								обучения при наличии работы или бизнеса. Право на
							</li>
							<li>
								оформление студенческого ВНЖ с&nbsp;ежегодным продлением
								одновременно с&nbsp;супругом/супругой, отцом, матерью
								и&nbsp;детьми. Право законно находиться в&nbsp;Испании
								на&nbsp;таких промежуточных этапах, как, например, поиск
								недвижимости для последующего оформления ВНЖ инвестора.
							</li>
						</ol>
					</p>
				</>
			),
		},
		{
			name: 'ВНЖ цифровой кочевник',
			description: (
				<>
					<p className='other'>
						ВНЖ цифрового кочевника в&nbsp;Испании для удаленных работников
						оформляется в&nbsp;Испании. Документы подаются электронно без
						присутствия заявителя. Обязательное условие: на&nbsp;момент подачи
						документов Заявитель должен находиться на&nbsp;территории
						Испании.При положительном решении ВНЖ цифрового кочевника выдается
						на&nbsp;3&nbsp;года.
						<br />
						<br />
						<br />
						<b>Требования:</b>
						<br />
						<br />
						<ol>
							<li>
								документальное подтверждение университетского образования в
								котирующихся ВУЗах, профессионального образования, образования в
								престижных бизнес-школах или наличие профессионального опыта не
								менее трех лет;
							</li>
							<li>
								Наличие реальной продолжительной деятельности компании, с
								которой заключен трудовой договор;
							</li>
							<li>
								Документальное подтверждение наличие трудовых или
								профессиональных отношений, позволяющих дистанционно работать
								или оказывать услуги;
							</li>
							<li>
								Подтверждение о&nbsp;наличии трудовых или профессиональных
								отношений между кандидатом и&nbsp;работодателем не&nbsp;менее
								трех месяцев, а&nbsp;также документальное подтверждение
								о&nbsp;возможности осуществления данной деятельности
								дистанционно.
							</li>
						</ol>
					</p>
				</>
			),
		},
	]

	return (
		<section id='top' className={styles.residentPermitTypes}>
			<div
				className={styles.background}
				// style={{
				// 		transform: `translateY(${offset * 0.3}px)`,
				// 	}}
			/>

			<Container>
				<div className={styles.residentPermitTypes__block}>
					<div className={styles.buttons}>
						{residentPermitTypes.map((item, index) => (
							<button
								className={chosenPermit === index ? styles.chosen : ''}
								onClick={() => setChosenPermit(index)}
							>
								{item.name}
							</button>
						))}
					</div>
				</div>
			</Container>
			<div className={styles.description}>
				<Container>
					<div className={styles.article}>
						{residentPermitTypes[0].description}
					</div>
					{residentPermitTypes.map((item, index) => (
						<div
							className={`${styles.article} ${styles.other} ${
								index === chosenPermit ? styles.chosen : ''
							}`}
						>
							{item.description}
						</div>
					))}
				</Container>
			</div>
			{width && width <= 640 
			? <a href="#top">
					<button className={styles.goUp}>
						<Arrow/>
					</button>
				</a>  
				: ''
}
			<div className={styles.nextSection} />
		</section>
	)
}

export default ResidentPermitTypes
