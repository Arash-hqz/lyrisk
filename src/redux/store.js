import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ShazamApi } from './service/ShazamCore';

import playerReducer from './features/playerSlice';

export const store = configureStore({

  reducer: {
    [ShazamApi.reducerPath]: ShazamApi.reducer,

    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ShazamApi.middleware)
});
