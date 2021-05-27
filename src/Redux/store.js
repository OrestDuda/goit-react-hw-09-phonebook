import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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
import contactsReducer from "./Phonebook/contacts-reducer";
import userReducer from "./Authentification/auth-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const loggedInPersistConfig = {
  key: "loggedIn",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    userData: persistReducer(loggedInPersistConfig, userReducer),
    phonebook: contactsReducer,
  },
  middleware: middleware,
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
