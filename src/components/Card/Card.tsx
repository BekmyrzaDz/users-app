import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Like from '../Likes/Like/Like'
import ActiveLike from '../Likes/LikeActive/LikeActive'
import styles from './Card.module.scss'
import { ICard } from './types'

const Card = ({ id, firstName, lastName, avatar, likes, setLikes }: ICard) => {
	const [isLike, setIsLike] = useState<boolean>(likes.includes(id as number))
	const navigate = useNavigate()
	const likeKey = 'like'

	const addLike = (id: number): void => {
		setLikes([...likes, id])
		localStorage.setItem(likeKey, JSON.stringify([...likes, id]))
		setIsLike(true)
	}

	const removeLike = (id: number): void => {
		setLikes(likes.filter(f => f !== id))
		localStorage.setItem(likeKey, JSON.stringify(likes.filter(f => f !== id)))
		setIsLike(false)
	}

	return (
		<div className={styles.card} onClick={() => navigate(`/:${id}`)}>
			<div className={styles.cardInner}>
				<div className={styles.cardTop}>
					<img className={styles.avatar} src={avatar} alt='Avatar' />
					<h2 className={styles.name}>
						{firstName} {lastName}
					</h2>
				</div>
				<div className={styles.likeWrapper}>
					{isLike ? (
						<ActiveLike id={id} removeLike={removeLike} />
					) : (
						<Like id={id} addLike={addLike} />
					)}
				</div>
			</div>
		</div>
	)
}

export default Card
