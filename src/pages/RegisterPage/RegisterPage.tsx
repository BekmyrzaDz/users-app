import { Link } from 'react-router-dom'
import { Register } from '../../modules'
import styles from './RegisterPage.module.scss'

const RegisterPage = () => {
	return (
		<div className={styles.register}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Регистрация</h2>
				<Register />
				<p className={styles.text}>
					Уже зарегистрированы?{' '}
					<span>
						<Link to='/login'>Войти</Link>
					</span>
				</p>
			</div>
		</div>
	)
}

export default RegisterPage
