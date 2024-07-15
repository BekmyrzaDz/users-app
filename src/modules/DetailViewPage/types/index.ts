export interface IDetailViewState {
	userData: IUserData | null
	isLoading: boolean
	isSuccess: boolean
	isError: boolean
}

export interface IUserData {
	data: IUser
	support: ISupport
}

export interface IUser {
	id: number
	email: string
	first_name: string
	last_name: string
	avatar: string
}

export interface ISupport {
	url: string
	text: string
}

export interface IHeader {
	firstName?: string
	lastName?: string
	avatar?: string
}
