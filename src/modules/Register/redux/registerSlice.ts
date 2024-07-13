import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, RegisterState } from '../types'
import { createUser } from './asyncActions'

const initialState: RegisterState = {
	user: null,
	isLoading: false,
	isSuccess: false,
	isError: false,
}

export const registerSlice = createSlice({
	name: 'register',
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
			.addCase(createUser.pending, state => {
				state.isLoading = true
			})
			.addCase(createUser.fulfilled, (state, action: PayloadAction<IUser>) => {
				state.isLoading = false
				state.isSuccess = true
				state.user = action.payload
			})
			.addCase(createUser.rejected, state => {
				state.isLoading = false
				state.isError = true
			})
	},
})

export const { reset } = registerSlice.actions
export default registerSlice.reducer
