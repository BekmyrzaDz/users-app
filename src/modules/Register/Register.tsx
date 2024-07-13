import clsx from 'clsx'
import { Form, Formik } from 'formik'
import { useState } from 'react'
import { Hide, Show } from '../../assets'
import { Button, Input } from '../../components'
import { useAppDispatch } from '../../hooks/redux'
import PassInput from './components/Input/index'
import { createUser } from './redux/asyncActions'
import styles from './Register.module.scss'
import { RegisterSchema } from './Schema/Validation'
import { registerState } from './State'
import { IRegisterState } from './types'

const Register = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const toggleShowPassword = () => setShowPassword(!showPassword)
	const toggleShowConfirmPassword = () =>
		setShowConfirmPassword(!showConfirmPassword)

	const dispatch = useAppDispatch()

	function onSubmit(values: IRegisterState) {
		const { username, email, password } = values
		const newValues = { username, email, password }
		console.log(newValues)

		dispatch(createUser(newValues))
	}

	return (
		<Formik
			initialValues={registerState}
			validationSchema={RegisterSchema}
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
					Зарегистрироваться
				</Button>
			</Form>
		</Formik>
	)
}

export default Register
