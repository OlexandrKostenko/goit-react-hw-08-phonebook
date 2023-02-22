import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authslice';
import { contactReducer } from './contactSlice';
import { filtersReducer } from './filterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
    reducer: {
        contact: contactReducer,
        filter: filtersReducer,
        auth: authReducer,
    },

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


