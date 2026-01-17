import { configureStore } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import { authReducer } from "./auth/slice";
import { errorMiddleware } from "./middleware/errorMiddleware";
import { settingsReducer } from "./settings/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const settingsPersistConfig = {
  key: "settings",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filters: filtersReducer,
    settings: persistReducer(settingsPersistConfig, settingsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(errorMiddleware),
});

export const persistor = persistStore(store);
