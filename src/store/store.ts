import { combineReducers, configureStore } from '@reduxjs/toolkit'
import detailPageReducer from '../modules/DetailViewPage/redux/detailPageSlice'
import homePageReducer from '../modules/HomePage/redux/homePageSlice'
import registerReducer from '../modules/Register/redux/registerSlice'

const rootReducer = combineReducers({
	register: registerReducer,
	home: homePageReducer,
	detail: detailPageReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
