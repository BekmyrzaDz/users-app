import { Email, Phone } from '../../../../assets'
import { IDetailViewContent } from '../../types'
import styles from './DetailViewContent.module.scss'

const DetailViewContent = ({ email, phone }: IDetailViewContent) => {
	return (
		<div className={styles.detailViewContent}>
			<div className={styles.container}>
				<div className={styles.detailViewContentInner}>
					<div className={styles.text}>
						<p>
							Клиенты видят в нем эксперта по вопросам разработки комплексных
							решений финансовых продуктов, включая такие аспекты, как
							организационная структура, процессы, аналитика и ИТ-компоненты. Он
							помогает клиентам лучше понимать структуру рисков их бизнеса,
							улучшать процессы за счет применения новейших технологий и
							увеличивать продажи, используя самые современные аналитические
							инструменты.
						</p>
						<br />
						<p>
							В работе с клиентами недостаточно просто решить конкретную
							проблему или помочь справиться с трудностями. Не менее важно
							уделять внимание обмену знаниями: "Один из самых позитивных
							моментов — это осознание того, что ты помог клиенту перейти на
							совершенно новый уровень компетентности, уверенность в том, что
							после окончания проекта у клиента есть все необходимое, чтобы
							дальше развиваться самостоятельно".
						</p>
						<br />
						<p>
							Помимо разнообразных проектов для клиентов финансового сектора,
							Сорин ведет активную предпринимательскую деятельность. Он является
							совладельцем сети клиник эстетической медицины в Швейцарии,
							предлагающей инновационный подход к красоте, а также инвестором
							других бизнес-проектов.
						</p>
					</div>
					<div className={styles.contacts}>
						<div className={styles.phoneWrapper}>
							<img className={styles.phoneImg} src={Phone} alt='phone' />
							<p className={styles.phone}>{phone}</p>
						</div>
						<div className={styles.emailWrapper}>
							<img className={styles.emailImg} src={Email} alt='email' />
							<p className={styles.email}>{email}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailViewContent
