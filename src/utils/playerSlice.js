import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    ytPlayer: null,
    isYTPlayerReady: false,
  },
  reducers: {
    addPlayer: (state, action) => {
      state.player = action.payload;
    },
    removePlayer: (state, action) => {
      state.player = null;
    },
    updateIsYTPlayerReady: (state, action) => {
      state.isYTPlayerReady = action.payload;
    },
  },
});

export const { addPlayer, removePlayer, updateIsYTPlayerReady } =
  playerSlice.actions;
export default playerSlice.reducer;
