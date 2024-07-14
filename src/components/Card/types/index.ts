export interface ICard {
	id: number
	firstName: string
	lastName: string
	avatar: string
	likes: number[]
	setLikes: React.Dispatch<React.SetStateAction<number[]>>
}
