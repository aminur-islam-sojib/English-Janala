import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  levels: [],
  levelData: [],
  allData: [],
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
    setAllData: (state, actions) => {
      const data = actions.payload;
      state.allData = data;
    },
  },
});

export const { setLevel, setLoading, setLevelsData, setSelected, setAllData } =
  dataSlice.actions;
export default dataSlice.reducer;
