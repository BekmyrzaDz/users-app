import axios from '../../../api/axios'
import { IRegisterState, IUser } from '../types'

// Register user
const register = async (userData: IRegisterState): Promise<IUser> => {
	const response = await axios.post('register', userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}
	return response.data
}

const registerService = {
	register,
}

export default registerService
