export interface IRegisterState {
	username: string
	email: string
	password: string
	confirm_password?: string
}

export interface IUser {
	id: string
	token: string
}

export interface RegisterState {
	user: IUser | null
	isLoading: boolean
	isSuccess: boolean
	isError: boolean
}
