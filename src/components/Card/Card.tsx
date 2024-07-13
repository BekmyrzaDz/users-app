import { useState } from 'react'
import Like from '../Likes/Like/Like'
import ActiveLike from '../Likes/LikeActive/LikeActive'
import styles from './Card.module.scss'
import { ICard } from './types'

const Card = ({ firstName, lastName, avatar }: ICard) => {
	const [active, setActive] = useState<boolean>(false)

	return (
		<div className={styles.card}>
			<div className={styles.cardInner}>
				<div className={styles.cardTop}>
					<img src={avatar} alt='Avatar' className={styles.avatar} />
					<h2 className={styles.name}>
						{firstName} {lastName}
					</h2>
				</div>
				<div className={styles.likeWrapper}>
					{active ? (
						<ActiveLike setActive={setActive} />
					) : (
						<Like setActive={setActive} />
					)}
				</div>
			</div>
		</div>
	)
}

export default Card
