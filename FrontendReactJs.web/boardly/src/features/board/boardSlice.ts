import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BoardState {
  // Define your board state here
}

const initialState: BoardState = {
  // Initial state
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    // Define your board actions here
  },
});

export const { } = boardSlice.actions;
export default boardSlice.reducer;
