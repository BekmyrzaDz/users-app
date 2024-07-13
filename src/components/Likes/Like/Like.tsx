import { DefaultLike } from '../../../assets'
import { ILikeProps } from '../types'
import styles from './Like.module.scss'

const Like = ({ setActive }: ILikeProps) => {
	const active = () => setActive(prev => !prev)

	return (
		<div className={styles.wrapper} onClick={active}>
			<img src={DefaultLike} alt='like' />
		</div>
	)
}

export default Like
