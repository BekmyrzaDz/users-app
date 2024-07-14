import { useEffect, useState } from 'react'
import { Card, Header } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchUsers } from '../../modules'
import styles from './HomePage.module.scss'

const HomePage = () => {
	const dispatch = useAppDispatch()
	const { usersData } = useAppSelector(state => state.home)

	const likeKey = 'like'
	const like: number[] = JSON.parse(
		(localStorage.getItem(likeKey) as string) ?? '[]'
	)
	const [likes, setLikes] = useState<number[]>(like)

	const userParam = {
		page: 1,
	}

	useEffect(() => {
		dispatch(fetchUsers(userParam))
	}, [dispatch])

	return (
		<div className={styles.home}>
			<Header />
			<div className={styles.homeContent}>
				<div className={styles.container}>
					<div className={styles.homeContentWrapper}>
						{usersData?.data?.map(user => (
							<Card
								key={user.id}
								id={user.id}
								firstName={user.first_name}
								lastName={user.last_name}
								avatar={user.avatar}
								likes={likes}
								setLikes={setLikes}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage
