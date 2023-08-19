'use client'

import Container from '@/app/components/container'
import { useState } from 'react'
import styles from './styles.module.scss'

const ResidentPermitTypes = () => {
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
						Предоставляется иностранцу на 1 год. По истечении указанного срока
						резидент может продлить свой статус сразу на 2 года.
						<br />
						<b> Преимущества: </b>
						<ol>
							<li>
								Испанский резидент имеет право находиться на территории
								Евросоюза и пользоваться всеми привилегиями своего положения до
								окончания срока действия вида на жительство.
							</li>
							<li>
								Владелец карты испанского резидента, а также члены его семьи,
								могут свободно перемещаться по всем странам ЕС и Шенгенского
								договора без оформления виз и прочей въездной документации.
							</li>
							<li>
								Иностранец может купить или арендовать испанскую недвижимость,
								которая относится к одним из самых выгодных объектов для
								инвестирования в Европе.
							</li>
							<li>
								Статус испанского резидента по окончании срока действия можно
								легко продлить, подав соответствующие документы в полицию.
							</li>
							<li>
								В ситуации политической нестабильности испанский ВНЖ станет
								гарантией быстрого переезда в безопасную страну.
							</li>
							<li>
								Владельцы карты ВНЖ в Испании получают доступ к услугам
								государственных образовательных и медицинских учреждений.
							</li>
							<li>
								По сравнению с другими развитыми европейским странами Испания
								предлагает своим резидентам продукты и товары первой
								необходимости по более доступным ценам.
							</li>
							<li>
								Знаменитые курорты Испании будут доступны для резидентов этой
								страны в любое время года.
							</li>
							<li>
								Знаменитые курорты Испании будут доступны для резидентов этой
								страны в любое время года.
							</li>
						</ol>
					</p>
				</>
			),
		},
		{
			name: 'Виза инфестора (Золотая виза)',
			description: (
				<>
					<p>
						Дает зарубежному инвестору право на двухлетний ВНЖ, который можно
						продлить еще на 5 лет. Впоследствии иностранец имеет возможность
						получить ПМЖ и оформить гражданство Испании.
						<br />
						<b>Возможности: </b>
						<ol>
							<li>
								Проживание, а также осуществление профессиональной и
								предпринимательской деятельности в Испании.
							</li>
							<li>
								Пребывание в любой из стран Шенгенской зоны без ограничений во
								времени.
							</li>
							<li>
								Переезд в курортную зону с мягким климатом и комфортными
								условиями жизни.
							</li>
							<li>Иммиграция вместе с членами семьи.</li>
							<li>Оформление в дальнейшем ПМЖ и гражданства Испании.</li>
							<li>Нет необходимости постоянно проживать в Испании.</li>
							<li>
								Можно получить двухлетний вид на жительство и продлить его еще
								на 5 лет.
							</li>
							<li>
								Оформить первичный ВНЖ можно в любое время на протяжении срока
								действия визы инвестора.
							</li>
							<li>
								Длительность визовой процедуры составляет от 10 до 20 дней.
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
					<p>
						Разрешение на проживание в Испании более 90 дней для иностранцев,
						которые планируют обучение в вузах либо на языковых курсах в этой
						стране. Мы Вам поможем правильно подобрать программу языковых
						курсов, получить студенческую визу и оформить на ее основании ВНЖ.
						Срок оформления документа занимает от 2 до 4 месяцев.
						<br />
						<b>Преимущества: </b>
						<ol>
							<li>
								Законное проживание в Испании в течение срока обучения, а также
								право работать до 4-х часов в день. Возможность остаться жить в
								Испании после окончания обучения при наличии работы или бизнеса.
								Право на
							</li>
							<li>
								оформление студенческого ВНЖ с ежегодным продлением одновременно
								с супругом/супругой, отцом, матерью и детьми. Право законно
								находиться в Испании на таких промежуточных этапах, как,
								например, поиск недвижимости для последующего оформления ВНЖ
								инвестора.
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
					<p>
						ВНЖ цифрового кочевника в Испании для удаленных работников
						оформляется в Испании. Документы подаются электронно без присутствия
						заявителя. Обязательное условие: на момент подачи документов
						Заявитель должен находиться на территории Испании.При положительном
						решении ВНЖ цифрового кочевника выдается на 3 года.
						<br />
						<b>Требования:</b>
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
								Подтверждение о наличии трудовых или профессиональных отношений
								между кандидатом и работодателем не менее трех месяцев, а также
								документальное подтверждение о возможности осуществления данной
								деятельности дистанционно.
							</li>
						</ol>
					</p>
				</>
			),
		},
	]

	return (
		<section className={styles.residentPermitTypes}>
			<Container>
				<div className={styles.residentPermitTypes__block}>
					<div className={styles.buttons}>
						{residentPermitTypes.map((item, index) => (
							<button
								className={chosenPermit === index ? styles.chosen : {}}
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
					{residentPermitTypes.map((item, index) => (
						<div
							className={`${styles.article} ${
								index === chosenPermit ? styles.chosen : {}
							}`}
						>
							{item.description}
						</div>
					))}
				</Container>
			</div>

			<div className={styles.nextSection} />
		</section>
	)
}

export default ResidentPermitTypes
