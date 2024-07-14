import axios from '../../../api/axios'
import { IUsersData } from '../types'

// Get Users
const getUsersByType = async ({
	page,
}: {
	page: number
}): Promise<IUsersData> => {
	const response = await axios.get(`users?page=${page}`)

	return response.data
}

const homeService = {
	getUsersByType,
}

export default homeService
