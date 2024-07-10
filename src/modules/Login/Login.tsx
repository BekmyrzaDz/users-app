import clsx from 'clsx'
import { Form, Formik } from 'formik'
import { useState } from 'react'
import { Hide, Show } from '../../assets'
import { Button, Input } from '../../components'
import PassInput from './components/Input/index'
import styles from './Login.module.scss'
import { LoginSchema } from './Schema/Validation'
import { loginState } from './State'
import { ILoginState } from './types'

const Login = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const toggleShowPassword = () => setShowPassword(!showPassword)
	const toggleShowConfirmPassword = () =>
		setShowConfirmPassword(!showConfirmPassword)

	function onSubmit(values: ILoginState) {
		console.log(values)
	}
	return (
		<Formik
			initialValues={loginState}
			validationSchema={LoginSchema}
			onSubmit={onSubmit}
		>
			<Form className={styles.form}>
				<Input
					label='Имя'
					name='username'
					id='username'
					type='text'
					className={styles.input}
					placeholder='Артур'
				/>
				<Input
					label='Электронная почта'
					name='email'
					id='email'
					type='email'
					className={styles.input}
					placeholder='example@mail.ru'
				/>
				<PassInput
					label='Пароль'
					name='password'
					id='password'
					type={showPassword ? 'text' : 'password'}
					className={clsx(styles.input, styles.passInput)}
					placeholder='******'
					passwordIcon={showPassword ? Show : Hide}
					toggleShowPassword={toggleShowPassword}
				/>
				<PassInput
					label='Подтвердите пароль'
					name='confirm_password'
					id='confirm_password'
					type={showConfirmPassword ? 'text' : 'password'}
					className={clsx(styles.input, styles.passInput)}
					placeholder='******'
					passwordIcon={showConfirmPassword ? Show : Hide}
					toggleShowPassword={toggleShowConfirmPassword}
				/>
				<Button className={styles.button} type='submit'>
					Войти
				</Button>
			</Form>
		</Formik>
	)
}

export default Login
