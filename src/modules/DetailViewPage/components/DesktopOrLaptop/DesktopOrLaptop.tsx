import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../components'
import { IHeader } from '../../types'
import styles from './DesktopOrLaptop.module.scss'

const DesktopOrLaptop = ({ firstName, lastName, avatar }: IHeader) => {
	const navigate = useNavigate()

	return (
		<div className={styles.desktopOrLaptop}>
			<Button className={styles.button} onClick={() => navigate(-1)}>
				Назад
			</Button>
			<div className={styles.desktopOrLaptopDetail}>
				<img className={styles.avatar} src={avatar} alt='Avatar' />
				<div className={styles.contentLeft}>
					<h1 className={styles.name}>
						{firstName} {lastName}
					</h1>
					<p className={styles.partner}>Партнер</p>
				</div>
			</div>
			<div className={styles.exit}>
				<Button className={styles.button}>Выход</Button>
			</div>
		</div>
	)
}

export default DesktopOrLaptop
