import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import homeService from '../services'
import { IHomeParams, IUsersData } from '../types'

// Fetch Users Action
export const fetchUsers = createAsyncThunk<
	IUsersData,
	IHomeParams,
	{ rejectValue: string }
>('home/fetchUsers', async (homeParams, thunkAPI) => {
	try {
		const response = await homeService.getUsersByType(homeParams)
		return response
	} catch (error: unknown) {
		if (error instanceof AxiosError) {
			return thunkAPI.rejectWithValue(error.message)
		}
		throw error
	}
})
