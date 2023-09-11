import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  AvatarSize,
  FontSize,
  LayoutOrientation,
  SubTitleFontSize,
  TagFontSize,
  TitleFontSize,
} from '../types';

export interface ThemeState {
  orientation: LayoutOrientation;
  fontSize: FontSize;
  activeIndex: number;
  layoutSwitchActive: boolean;
  tagFontSize: TagFontSize;
  titleFontSize: TitleFontSize;
  subTitleFontSize: SubTitleFontSize;
  avatarSize: AvatarSize;
}

const initialState: ThemeState = {
  orientation: LayoutOrientation.RIGHT,
  fontSize: FontSize.NORMAL,
  activeIndex: 0,
  layoutSwitchActive: false,
  tagFontSize: TagFontSize.NORMAL,
  titleFontSize: TitleFontSize.NORMAL,
  subTitleFontSize: SubTitleFontSize.NORMAL,
  avatarSize: AvatarSize.NORMAL,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setActiveIndex(state, action: PayloadAction<number>) {
      state.activeIndex = action.payload;
    },
    setLayoutSwitchActive(state, action: PayloadAction<boolean>) {
      state.layoutSwitchActive = action.payload;
    },
    setFontSize(state, action: PayloadAction<FontSize>) {
      state.fontSize = action.payload;
    },
    setSubTitleFontSize(state, action: PayloadAction<SubTitleFontSize>) {
      state.subTitleFontSize = action.payload;
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

export const {
  setActiveIndex,
  setLayoutSwitchActive,
  setFontSize,
  setOrientation,
  setTagFontSize,
  setTitleFontSize,
  setSubTitleFontSize,
  setAvatarSize,
} = themeSlice.actions;
export default themeSlice.reducer;
