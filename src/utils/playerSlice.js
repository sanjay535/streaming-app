import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    isYTPlayerReady: false,
  },
  reducers: {
    updateIsYTPlayerReady: (state, action) => {
      state.isYTPlayerReady = action.payload;
    },
  },
});

export const { updateIsYTPlayerReady } = playerSlice.actions;
export default playerSlice.reducer;
