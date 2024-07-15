import axios from '../../../api/axios'
import { IUserData } from '../types'

// Get User By ID
const getUserById = async ({ id }: { id: number }): Promise<IUserData> => {
	const response = await axios.get(`users/${id}`)

	return response.data
}

const detailViewService = {
	getUserById,
}

export default detailViewService
