import { useMediaQuery } from 'react-responsive'
import { Button } from '..'
import { Exit } from '../../assets'
import styles from './Header.module.scss'

const Header = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 375px)' })

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.headerTop}>
					{isMobile ? (
						<img className={styles.iconBtn} src={Exit} alt='Exit' />
					) : (
						<Button className={styles.button}>Выход</Button>
					)}
				</div>
				<div className={styles.headerContent}>
					<div className={styles.headerContentWrapper}>
						<h1 className={styles.title}>Наша команда</h1>
						<h2 className={styles.subTitle}>
							Это опытные специалисты, хорошо разбирающиеся во всех задачах,
							которые ложатся на их плечи, и умеющие находить выход из любых,
							даже самых сложных ситуаций.
						</h2>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
