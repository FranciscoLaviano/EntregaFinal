import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import shopReducer from "../funciones/shop/shopSlice"
import { shopApi } from './services/ShopService'
import { authApi } from './services/Auth'
import cartReducer from "../funciones/carro/CartSlice"
import authReducer from "../funciones/auth/AuthSlice"

export const store = configureStore({
  reducer: {
    shop:shopReducer,
    cart:cartReducer,
    auth:authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware),
  
})

setupListeners(store.dispatch)