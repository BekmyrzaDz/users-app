import { Login } from '../../modules'
import styles from './LoginPage.module.scss'

const LoginPage = () => {
	return (
		<div className={styles.login}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Вход</h2>
				<Login />
			</div>
		</div>
	)
}

export default LoginPage
