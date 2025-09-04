import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../components/Vocabularies/DataSlice';

export const store = configureStore({
  reducer: {
    dataR: dataReducer,
  },
});
