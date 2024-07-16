import { Register } from '../../modules'
import styles from './RegisterPage.module.scss'

const RegisterPage = () => {
	return (
		<div className={styles.register}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Регистрация</h2>
				<Register />
			</div>
		</div>
	)
}

export default RegisterPage
