export interface ILikeProps {
	setActive?: React.Dispatch<React.SetStateAction<boolean>>
	id?: number
	addLike?: (id: number) => void
	removeLike?: (id: number) => void
}
