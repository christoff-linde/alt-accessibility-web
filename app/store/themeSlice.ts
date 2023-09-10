import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { AvatarSize, FontSize, LayoutOrientation, TagFontSize, TitleFontSize } from '../types';

export interface ThemeState {
  orientation: LayoutOrientation;
  fontSize: FontSize;
  activeIndex: number;
  tagFontSize: TagFontSize;
  titleFontSize: TitleFontSize;
  avatarSize: AvatarSize
}

const initialState: ThemeState = {
  orientation: LayoutOrientation.RIGHT,
  fontSize: FontSize.NORMAL,
  activeIndex: 0,
  tagFontSize: TagFontSize.NORMAL,
  titleFontSize: TitleFontSize.NORMAL,
  avatarSize: AvatarSize.NORMAL
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setActiveIndex(state, action: PayloadAction<number>) {
      state.activeIndex = action.payload;
    },
    setFontSize(state, action: PayloadAction<FontSize>) {
      state.fontSize = action.payload;
    },
    setOrientation(state, action: PayloadAction<LayoutOrientation>) {
      state.orientation = action.payload;
    },
    setTagFontSize(state, action: PayloadAction<TagFontSize>) {
      state.tagFontSize = action.payload;
    },
    setTitleFontSize(state, action: PayloadAction<TitleFontSize>) {
      state.titleFontSize = action.payload;
    },
    setAvatarSize(state, action: PayloadAction<AvatarSize>) {
      state.avatarSize = action.payload;
    },
  },
});

export const { setActiveIndex, setFontSize, setOrientation, setTagFontSize, setTitleFontSize, setAvatarSize } =
  themeSlice.actions;
export default themeSlice.reducer;
