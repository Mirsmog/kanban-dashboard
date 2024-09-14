// TODO: I CAN BE MUCH BETTER
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { TypedUseSelectorHook, useDispatch, useSelector, Provider } from 'react-redux'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { PersistGate } from 'redux-persist/integration/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { useRef } from 'react'

import globalReducer from '@/lib/store/'
import { api } from '@/lib/store/api'

const createNoopStorage = () => {
	return {
		getItem(_key: unknown) {
			return Promise.resolve(null)
		},
		setItem(_key: unknown, value: unknown) {
			return Promise.resolve(value)
		},
		removeItem(_key: unknown) {
			return Promise.resolve()
		}
	}
}

const storage = typeof window === 'undefined' ? createNoopStorage() : createWebStorage('local')

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['global']
}
const rootReducer = combineReducers({
	global: globalReducer,
	[api.reducerPath]: api.reducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const makeStore = () => {
	return configureStore({
		reducer: persistedReducer,
		middleware: getDefault =>
			getDefault({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
				}
			}).concat(api.middleware)
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default function StoreProvider({ children }: { children: React.ReactNode }) {
	const storeRef = useRef<AppStore>()
	if (!storeRef.current) {
		storeRef.current = makeStore()
		setupListeners(storeRef.current.dispatch)
	}
	const persistor = persistStore(storeRef.current)

	return (
		<Provider store={storeRef.current}>
			<PersistGate
				loading={null}
				persistor={persistor}
			>
				{children}
			</PersistGate>
		</Provider>
	)
}
