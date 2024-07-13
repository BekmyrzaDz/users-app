import { Ellipse } from '../../assets'
import { Card, Header } from '../../components'
import styles from './HomePage.module.scss'

const HomePage = () => {
	return (
		<div className={styles.home}>
			<Header />
			<div className={styles.homeContent}>
				<div className={styles.container}>
					<div className={styles.homeContentWrapper}>
						<Card firstName={'Артур'} lastName={'Королёв'} avatar={Ellipse} />
						<Card firstName={'Артур'} lastName={'Королёв'} avatar={Ellipse} />
						<Card firstName={'Артур'} lastName={'Королёв'} avatar={Ellipse} />
						<Card firstName={'Артур'} lastName={'Королёв'} avatar={Ellipse} />
						<Card firstName={'Артур'} lastName={'Королёв'} avatar={Ellipse} />
						<Card firstName={'Артур'} lastName={'Королёв'} avatar={Ellipse} />
						<Card firstName={'Артур'} lastName={'Королёв'} avatar={Ellipse} />
						<Card firstName={'Артур'} lastName={'Королёв'} avatar={Ellipse} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage
