import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Header } from '../../modules'
import { extractFirstNumberFromString } from '../../modules/DetailViewPage/helpers'
import { fetchUser } from '../../modules/DetailViewPage/redux/asyncActions'
import styles from './DetailViewPage.module.scss'

const DetailViewPage = () => {
	const dispatch = useAppDispatch()
	const { userData } = useAppSelector(state => state.detail)
	const location = useLocation()
	const id: number | null = extractFirstNumberFromString(location.pathname)

	useEffect(() => {
		dispatch(fetchUser({ id: id as number }))
	}, [dispatch])

	const firstName = userData?.data?.first_name
	const lastName = userData?.data?.last_name
	const avatar = userData?.data?.avatar

	return (
		<div className={styles.detailView}>
			<Header
				firstName={firstName as string}
				lastName={lastName as string}
				avatar={avatar as string}
			/>
		</div>
	)
}

export default DetailViewPage
