import { ActiveLike } from '../../../assets'
import { ILikeProps } from '../types'
import styles from './LikeActive.module.scss'

const LikeActive = ({ setActive }: ILikeProps) => {
	const active = () => setActive(prev => !prev)

	return (
		<div className={styles.wrapper} onClick={active}>
			<img className={styles.like} src={ActiveLike} alt='active like' />
		</div>
	)
}

export default LikeActive
