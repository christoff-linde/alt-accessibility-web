import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FontSize, LayoutOrientation } from '../types';

export interface ThemeState {
  orientation: LayoutOrientation;
  fontSize: FontSize;
}

const initialState: ThemeState = {
  orientation: LayoutOrientation.right,
  fontSize: FontSize.medium,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setOrientation(state, action: PayloadAction<LayoutOrientation>) {
      state.orientation = action.payload;
    },
    setFontSize(state, action: PayloadAction<FontSize>) {
      state.fontSize = action.payload;
    },
  },
});

export const { setOrientation, setFontSize } = themeSlice.actions;
export default themeSlice.reducer;
