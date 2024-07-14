import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IHomeState, IUsersData } from '../types'
import { fetchUsers } from './asyncActions'

const initialState: IHomeState = {
	usersData: null,
	isLoading: false,
	isSuccess: false,
	isError: false,
}

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		reset: state => {
			state.isLoading = false
			state.isSuccess = false
			state.isError = false
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchUsers.fulfilled,
				(state, action: PayloadAction<IUsersData>) => {
					state.isLoading = false
					state.isSuccess = true
					state.usersData = action.payload
				}
			)
			.addCase(fetchUsers.rejected, state => {
				state.isLoading = false
				state.isError = true
			})
	},
})

export const { reset } = homeSlice.actions
export default homeSlice.reducer
