import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  levels: [],
  levelData: [],
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
      // console.log(data);
      state.levelData = data;
    },
    setSelected: (state, actions) => {
      const data = actions.payload;
      state.selected = data;
    },
  },
});

export const { setLevel, setLoading, setLevelsData, setSelected } =
  dataSlice.actions;
export default dataSlice.reducer;
