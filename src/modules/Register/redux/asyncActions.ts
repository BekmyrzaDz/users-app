import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import registerService from '../services/registerService'
import { IRegisterState, IUser } from '../types'

// Create User Action
export const createUser = createAsyncThunk<
	IUser,
	IRegisterState,
	{ rejectValue: string }
>('register/createUser', async (userData, thunkAPI) => {
	try {
		const response = await registerService.register(userData)

		return response
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			return thunkAPI.rejectWithValue(error.message)
		}
		throw error
	}
})
