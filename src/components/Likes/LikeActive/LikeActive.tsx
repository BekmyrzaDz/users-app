import { ActiveLike } from '../../../assets'
import { ILikeProps } from '../types'
import styles from './LikeActive.module.scss'

const LikeActive = ({ id, removeLike }: ILikeProps) => {
	return (
		<div
			className={styles.wrapper}
			onClick={() => removeLike && removeLike(id as number)}
		>
			<img className={styles.like} src={ActiveLike} alt='active like' />
		</div>
	)
}

export default LikeActive
