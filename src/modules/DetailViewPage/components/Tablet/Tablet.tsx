import { useNavigate } from 'react-router-dom'
import { Button } from '../../../../components'
import { IHeader } from '../../types'
import styles from './Tablet.module.scss'

const Tablet = ({ firstName, lastName, avatar }: IHeader) => {
	const navigate = useNavigate()
	const exit = () => {
		localStorage.removeItem('token')
		navigate('/register')
	}

	return (
		<div className={styles.tablet}>
			<Button className={styles.button} onClick={() => navigate(-1)}>
				Назад
			</Button>
			<div className={styles.tabletDetail}>
				<img className={styles.avatar} src={avatar} alt='Avatar' />
				<div className={styles.contentLeft}>
					<h1 className={styles.name}>
						{firstName} {lastName}
					</h1>
					<p className={styles.partner}>Партнер</p>
				</div>
			</div>
			<div className={styles.exit}>
				<Button className={styles.button} onClick={exit}>
					Выход
				</Button>
			</div>
		</div>
	)
}

export default Tablet
