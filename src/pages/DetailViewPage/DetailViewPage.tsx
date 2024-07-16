import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { DetailViewContent, Header } from '../../modules'
import { extractFirstNumberFromString } from '../../modules/DetailViewPage/helpers'
import { fetchUser } from '../../modules/DetailViewPage/redux/asyncActions'

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
	const email = userData?.data?.email

	return (
		<>
			<Header
				firstName={firstName as string}
				lastName={lastName as string}
				avatar={avatar as string}
			/>
			<DetailViewContent email={email as string} phone={'+7 (954) 333-44-55'} />
		</>
	)
}

export default DetailViewPage
