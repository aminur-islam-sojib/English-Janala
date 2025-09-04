import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  levels: [],
  levelData: [],
  detailsData: [],
  loading: false,
  selected: false,
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLevel: (state, actions) => {
      const data = actions.payload;
      state.levels = data;
    },
    setLoading: (state, actions) => {
      const load = actions.payload;
      state.loading = load;
    },
    setLevelsData: (state, actions) => {
      const data = actions.payload;
      state.levelData = data;
    },
    setSelected: (state, actions) => {
      const data = actions.payload;
      state.selected = data;
    },
    setDetailsData: (state, actions) => {
      const data = actions.payload;
      state.detailsData = data;
    },
  },
});

export const {
  setLevel,
  setLoading,
  setLevelsData,
  setSelected,
  setDetailsData,
} = dataSlice.actions;
export default dataSlice.reducer;
