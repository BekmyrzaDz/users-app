import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import homeService from '../services'
import { IUserData } from '../types'

// Fetch User Action
export const fetchUser = createAsyncThunk<
	IUserData,
	{ id: number },
	{ rejectValue: string }
>('detail/fetchUser', async ({ id }, thunkAPI) => {
	try {
		const response = await homeService.getUserById({ id })
		return response
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			return thunkAPI.rejectWithValue(error.message)
		}
		throw error
	}
})
