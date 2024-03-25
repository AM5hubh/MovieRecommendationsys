import { configureStore } from '@reduxjs/toolkit'
import { TMDBAPI } from '../services/Api'



export default configureStore({
  reducer: {
    [TMDBAPI.reducerPath]: TMDBAPI.reducer,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(TMDBAPI.middleware)
})