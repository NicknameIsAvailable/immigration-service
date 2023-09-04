import Container from '@/app/components/container'
import styles from './styles.module.scss'

const AboutUs = ({width} : {width: number}) => {

	console.log(width <= 430)
 
	return (width <= 430 ? 		<div className={styles.aboutUs} id='about-us'>
	<Container>
		<div className={styles.info}>
			<div className={styles.hero}>
				<h2>О нас</h2>
				<div className={styles.image} id={styles.spain} />
				<p>
					Мы&nbsp;&mdash; компания, которая помогает русскоязычным гражданам
					оформить ВНЖ (вид на&nbsp;жительство) в&nbsp;Испании.
					Мы&nbsp;осознаем, как важно иметь квалифицированных специалистов
					рядом с&nbsp;собой в&nbsp;этом процессе, поэтому мы&nbsp;гордимся
					тем, что работаем в&nbsp;тесном сотрудничестве с испанскими
					адвокатами и&nbsp;юристами. <br />
					Наша команда состоит из&nbsp;опытных профессионалов, которые
					готовы предоставить вам индивидуальный подход и&nbsp;решить все
					вопросы, связанные с&nbsp;получением резиденции в&nbsp;Испании.
					Мы&nbsp;оказываем поддержку нашим клиентам на&nbsp;каждом этапе
					оформления ВНЖ, начиная от&nbsp;сбора необходимых документов,
					заканчивая отправкой их&nbsp;на рассмотрение властям.
				</p>
			</div>
		</div>
		<div className={styles.info}>
			<div className={styles.hero}>
				<h2>Мы понимаем</h2>
				<p>
					что процесс получения ВНЖ может быть сложным и&nbsp;запутанным,
					особенно для тех, кто не&nbsp;говорит на&nbsp;испанском языке или
					не&nbsp;знаком с&nbsp;местными законодательными процедурами.
					Поэтому мы&nbsp;делаем все возможное, чтобы помочь нашим клиентам
					преодолеть любые трудности и&nbsp;сделать этот процесс максимально
					простым и&nbsp;удобным для них.
				</p>
			<div className={`${styles.image} ${styles.icon}`} id={styles.personsGroup} />
			</div>
		</div>
		<div className={styles.info}>
			<div className={styles.hero}>
				<h2>Наша цель</h2>
				<p>
					обеспечить нашим клиентам легальный и&nbsp;безопасный путь
					к&nbsp;обретению резиденции в&nbsp;Испании. Мы&nbsp;гарантируем
					конфиденциальность информации, внимательное отношение
					к&nbsp;каждому клиенту и оперативность в&nbsp;решении всех
					возникающих вопросов.
				</p>
			<div className={`${styles.image} ${styles.icon}`} id={styles.dart} />
			</div>
		</div>
		<div className={styles.info}>
			<div className={styles.hero}>
				<h2>Помощь и поддержка</h2>
				<p>
					это то&nbsp;что готова предоставить наша компания если
					вы&nbsp;хотите получить ВНЖ в&nbsp;Испании. Обращайтесь
					к&nbsp;нам, и&nbsp;мы&nbsp;сделаем все возможное, чтобы ваше
					оформление резиденции прошло успешно и&nbsp;без лишних
					затруднений.
				</p>
			<div className={`${styles.image} ${styles.icon}`} id={styles.hands} />
			</div>
		</div>
		<div className={styles.info}>
			<div className={styles.hero}>
				<h2>Мы находимся</h2>
				<p>
					по&nbsp;адресу Marbella (Malaga), Calle Ricardo Soriano&nbsp;31,
					1A, но&nbsp;это не&nbsp;мешает нам помогать вам в&nbsp;оформлении
					визы D&nbsp;в Москве, а&nbsp;также помочь вам подготовиться
					к&nbsp;собеседованию в&nbsp;Консульстве Испании
				</p>
			<div className={`${styles.image} ${styles.icon}`} id={styles.map} />
			</div>
		</div>
	</Container>
</div> : 	
		<div className={styles.aboutUs} id='about-us'>
		<Container>
			<div className={styles.info}>
				<div className={styles.hero}>
					<h2>О нас</h2>
					<p>
						Мы&nbsp;&mdash; компания, которая помогает русскоязычным гражданам
						оформить ВНЖ (вид на&nbsp;жительство) в&nbsp;Испании.
						Мы&nbsp;осознаем, как важно иметь квалифицированных специалистов
						рядом с&nbsp;собой в&nbsp;этом процессе, поэтому мы&nbsp;гордимся
						тем, что работаем в&nbsp;тесном сотрудничестве с испанскими
						адвокатами и&nbsp;юристами. <br />
						Наша команда состоит из&nbsp;опытных профессионалов, которые
						готовы предоставить вам индивидуальный подход и&nbsp;решить все
						вопросы, связанные с&nbsp;получением резиденции в&nbsp;Испании.
						Мы&nbsp;оказываем поддержку нашим клиентам на&nbsp;каждом этапе
						оформления ВНЖ, начиная от&nbsp;сбора необходимых документов,
						заканчивая отправкой их&nbsp;на рассмотрение властям.
					</p>
				</div>
				<div className={styles.image} id={styles.spain} />
			</div>
			<div className={styles.info}>
				<div className={styles.hero}>
					<h2>Мы понимаем</h2>
					<p>
						что процесс получения ВНЖ может быть сложным и&nbsp;запутанным,
						особенно для тех, кто не&nbsp;говорит на&nbsp;испанском языке или
						не&nbsp;знаком с&nbsp;местными законодательными процедурами.
						Поэтому мы&nbsp;делаем все возможное, чтобы помочь нашим клиентам
						преодолеть любые трудности и&nbsp;сделать этот процесс максимально
						простым и&nbsp;удобным для них.
					</p>
				</div>
				<div className={styles.image} id={styles.personsGroup} />
			</div>
			<div className={styles.info}>
				<div className={styles.hero}>
					<h2>Наша цель</h2>
					<p>
						обеспечить нашим клиентам легальный и&nbsp;безопасный путь
						к&nbsp;обретению резиденции в&nbsp;Испании. Мы&nbsp;гарантируем
						конфиденциальность информации, внимательное отношение
						к&nbsp;каждому клиенту и оперативность в&nbsp;решении всех
						возникающих вопросов.
					</p>
				</div>
				<div className={styles.image} id={styles.dart} />
			</div>
			<div className={styles.info}>
				<div className={styles.hero}>
					<h2>Помощь и поддержка</h2>
					<p>
						это то&nbsp;что готова предоставить наша компания если
						вы&nbsp;хотите получить ВНЖ в&nbsp;Испании. Обращайтесь
						к&nbsp;нам, и&nbsp;мы&nbsp;сделаем все возможное, чтобы ваше
						оформление резиденции прошло успешно и&nbsp;без лишних
						затруднений.
					</p>
				</div>
				<div className={styles.image} id={styles.hands} />
			</div>
			<div className={styles.info}>
				<div className={styles.hero}>
					<h2>Мы находимся</h2>
					<p>
						по&nbsp;адресу Marbella (Malaga), Calle Ricardo Soriano&nbsp;31,
						1A, но&nbsp;это не&nbsp;мешает нам помогать вам в&nbsp;оформлении
						визы D&nbsp;в Москве, а&nbsp;также помочь вам подготовиться
						к&nbsp;собеседованию в&nbsp;Консульстве Испании
					</p>
				</div>
				<div className={styles.image} id={styles.map} />
			</div>
		</Container>
	</div>);
}

export default AboutUs;
