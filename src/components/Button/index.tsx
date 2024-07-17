import { clsx } from 'clsx'
import styles from './Button.module.scss'
import { AuthButtonProps } from './Button.props'

const AuthButton = ({ children, className, ...props }: AuthButtonProps) => {
	return (
		<button {...props} className={clsx(styles.button, className)}>
			{children}
		</button>
	)
}

export default AuthButton
