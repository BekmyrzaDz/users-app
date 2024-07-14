export interface IHomeState {
	usersData: IUsersData | null
	isLoading: boolean
	isSuccess: boolean
	isError: boolean
}

export interface IUsersData {
	page: number
	per_page: number
	total: number
	total_pages: number
	data: IUser[]
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

export interface IHomeParams {
	page: number
}
