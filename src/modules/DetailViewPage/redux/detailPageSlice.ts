import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IDetailViewState, IUserData } from '../types'
import { fetchUser } from './asyncActions'

const initialState: IDetailViewState = {
	userData: null,
	isLoading: false,
	isSuccess: false,
	isError: false,
}

export const detailSlice = createSlice({
	name: 'detail',
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
			.addCase(fetchUser.pending, state => {
				state.isLoading = true
			})
			.addCase(
				fetchUser.fulfilled,
				(state, action: PayloadAction<IUserData>) => {
					state.isLoading = false
					state.isSuccess = true
					state.userData = action.payload
				}
			)
			.addCase(fetchUser.rejected, state => {
				state.isLoading = false
				state.isError = true
			})
	},
})

export const { reset } = detailSlice.actions
export default detailSlice.reducer
