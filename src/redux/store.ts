import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/features/authSlice";
import wishlistReducer from "@/redux/features/wishlist/wishlistSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage, { storageLocal } from "./storage";

// persist configure for auth
const persistConfig = {
  key: "auth",
  storage,
};

// persist reducer for auth
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// persist configuration for wishlist
const persistConfigWishlist = {
  key: "wishlist",
  storage: storageLocal,
};

// persist reducer for wishlist
const persistedWishlistReducer = persistReducer(
  persistConfigWishlist,
  wishlistReducer
);

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: persistedAuthReducer,
      wishlist: persistedWishlistReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
