import { clsx } from 'clsx'
import { useField } from 'formik'
import { FC } from 'react'
import styles from './Input.module.scss'
import { InputProps } from './Input.props'

const Input: FC<InputProps> = ({
	className,
	icon,
	label,
	passwordIcon,
	toggleShowPassword,
	...props
}) => {
	const [field, meta] = useField(props)

	return (
		<div className={clsx(styles.wrapper, className)}>
			{label && <label htmlFor={props.name}>{label}</label>}
			<div className={styles.inputWrapper}>
				{icon && <img src={icon} alt='icon' className={styles.icon} />}
				<input
					className={styles.input}
					{...props}
					{...field}
					placeholder={props.placeholder}
				/>
				{passwordIcon ? (
					<img
						src={passwordIcon}
						alt='eye'
						className={styles.showHide}
						onClick={toggleShowPassword}
					/>
				) : null}
			</div>

			{meta.touched && meta.error ? (
				<small className={styles.error}>{meta.error}</small>
			) : null}
		</div>
	)
}

export default Input
