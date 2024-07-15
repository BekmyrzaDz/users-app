import { useMediaQuery } from 'react-responsive'
import { IHeader } from '../../types'
import DesktopOrLaptop from '../DesktopOrLaptop/DesktopOrLaptop'
import Mobile from '../Mobile/Mobile'
import Tablet from '../Tablet/Tablet'
import styles from './Header.module.scss'

const Header = ({ firstName, lastName, avatar }: IHeader) => {
	const isDesktopOrLaptop = useMediaQuery({ minWidth: 875 })
	const isTablet = useMediaQuery({ minWidth: 610, maxWidth: 874 })
	const isMobile = useMediaQuery({ maxWidth: 609 })

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				{isDesktopOrLaptop && (
					<DesktopOrLaptop
						firstName={firstName}
						lastName={lastName}
						avatar={avatar}
					/>
				)}
				{isTablet && (
					<Tablet firstName={firstName} lastName={lastName} avatar={avatar} />
				)}
				{isMobile && (
					<Mobile firstName={firstName} lastName={lastName} avatar={avatar} />
				)}
			</div>
		</header>
	)
}

export default Header
