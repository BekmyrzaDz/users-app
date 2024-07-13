import { combineReducers, configureStore } from '@reduxjs/toolkit'
import registerReducer from '../modules/Register/redux/registerSlice'

const rootReducer = combineReducers({
	register: registerReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
