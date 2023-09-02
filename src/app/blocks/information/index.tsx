import Container from '@/app/components/container'
import styles from './styles.module.scss'

const Information = () => {
	return (
		<section className={styles.information} id='info'>
			<div className={styles.blur} />
			<div className={styles.gradient} />
			<Container>
				<div className={styles.information__block}>
					<h2>Информация о ВНЖ</h2>
					<p>
						Вид на&nbsp;жительство в&nbsp;Испании&nbsp;&mdash; это документ,
						с&nbsp;которым иностранцу разрешено временно находиться
						на&nbsp;территории страны. В&nbsp;зависимости от основания выдачи
						данного статуса может быть разрешена трудовая деятельность или нет.
						ВНЖ преимущественно действует от&nbsp;12&nbsp;до&nbsp;24 месяцев
						с&nbsp;возможностью продления в&nbsp;отличие от&nbsp;ПМЖ, который
						выдается на&nbsp;5&nbsp;лет и&nbsp;не&nbsp;ограничивает владельца
						в&nbsp;выборе деятельности. Имея вид на&nbsp;жительство
						в&nbsp;Испании, есть возможность путешествовать без виз по
						Шенгенской зоне и&nbsp;территории ЕС. Миграционная политика страны
						регулируется законами{' '}
						<a
							className={styles.a}
							href='https://www.boe.es/buscar/act.php?id=BOE-A-2000-544'
							target='_blank'
						>
							{' '}
							&laquo;О&nbsp;правах и&nbsp;свободах иностранцев
							{' '}и&nbsp;их&nbsp;социальной интеграции&raquo; 
						</a>
						{' '}
							и
						{' '}
						<a
							className={styles.a}
							href='https://www.boe.es/buscar/act.php?id=BOE-A-2013-10074'
						>
							{' '}
							&laquo;О&nbsp;поддержке предпринимателей
						</a>

						<a
							className={styles.a}
							href='https://www.boe.es/buscar/act.php?id=BOE-A-2013-10074'
						>
					   и&nbsp;их&nbsp;интернационализации&raquo;
						</a>

						. Иностранцам для пересечения границы и&nbsp;последующего оформления
						ВНЖ необходимо получить национальную визу категории
						D.&nbsp;Законодательством предусмотрены несколько механизмов
						интеграции мигрантов в социально-экономическую жизнь страны, которые
						далее в&nbsp;статье рассмотрены более подробно.
					</p>
				</div>
			</Container>

			<div className={styles.warning}>
				<Container>
					<div className={styles.warning__block}>
						<h2> Внимание!</h2>
						<p>
							Документ, позволяющий временное или постоянное проживание в
							Испании, выглядит как пластиковая карта с&nbsp;фото
							и&nbsp;основными данными владельца, включая идентификационный
							номер NIE, который присваивается иностранцу при оформлении ВНЖ
							автоматически.
						</p>
					</div>
				</Container>
			</div>
		</section>
	)
}

export default Information
