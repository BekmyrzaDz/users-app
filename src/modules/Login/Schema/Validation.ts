import * as Yup from 'yup'

// Login Schema
export const LoginSchema = Yup.object({
	username: Yup.string()
		.typeError('Должно быть строкой')
		.min(2, 'Минимум 2 символа')
		.max(30, 'Максимум 30 символа')
		.required('Обязательное поле'),
	email: Yup.string()
		.email('Введите верную почту')
		.required('Обязательное поле'),
	password: Yup.string()
		.min(8, 'Пароль должен быть не менее 8 символов')
		.required('Обязательное поле'),
	confirm_password: Yup.string()
		.min(8, 'Пароль должен содержать не менее 8 символов')
		.oneOf([Yup.ref('password'), undefined], 'Пароли не совпадают')
		.required('Обязательное поле'),
})
