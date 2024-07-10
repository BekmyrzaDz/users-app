import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	name: string
	icon?: string
	label?: string
	passwordIcon?: string
	toggleShowPassword?: () => void
}
