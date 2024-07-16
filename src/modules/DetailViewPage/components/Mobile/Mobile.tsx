import { useNavigate } from 'react-router-dom'
import { ArrowBack, Exit } from '../../../../assets'
import { IHeader } from '../../types'
import styles from './Mobile.module.scss'

const Mobile = ({ firstName, lastName, avatar }: IHeader) => {
	const navigate = useNavigate()
	const exit = () => {
		localStorage.removeItem('token')
		navigate('/register')
	}

	return (
		<div className={styles.mobile}>
			<div className={styles.mobileTop}>
				<img
					className={styles.iconBtn}
					src={ArrowBack}
					alt='arrow back'
					onClick={() => navigate(-1)}
				/>
				<div className={styles.exit}>
					<img
						className={styles.iconBtn}
						src={Exit}
						alt='Exit'
						onClick={exit}
					/>
				</div>
			</div>
			<div className={styles.mobileDetail}>
				<h1 className={styles.name}>
					{firstName} {lastName}
				</h1>
				<p className={styles.partner}>Партнер</p>
				<img className={styles.avatar} src={avatar} alt='Avatar' />
			</div>
		</div>
	)
}

export default Mobile
