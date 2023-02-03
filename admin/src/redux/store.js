import { configureStore, combineReducers } from "@reduxjs/toolkit";import { setupListeners } from "@reduxjs/toolkit/query";
import {productApi} from "./productSlice";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";


const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  [productApi.reducerPath]: productApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      {serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },},   
    ).concat(productApi.middleware),
});

setupListeners(store.dispatch)

export let persistor = persistStore(store);