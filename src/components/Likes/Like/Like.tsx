import { DefaultLike } from '../../../assets'
import { ILikeProps } from '../types'
import styles from './Like.module.scss'

const Like = ({ id, addLike }: ILikeProps) => {
	return (
		<div
			className={styles.wrapper}
			onClick={() => addLike && addLike(id as number)}
		>
			<img src={DefaultLike} alt='like' />
		</div>
	)
}

export default Like
