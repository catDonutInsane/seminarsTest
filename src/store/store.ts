import {configureStore} from '@reduxjs/toolkit'
import reducer from '../reducers/reducer'
// конфигурация стора, подключение редьюсера
const store= configureStore({
    reducer:{
        reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;