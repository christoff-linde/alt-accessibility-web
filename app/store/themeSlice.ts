import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {FontSize, LayoutOrientation} from '../types';

export interface ThemeState {
    orientation: LayoutOrientation;
    fontSize: FontSize;
    activeIndex: number;
}

const initialState: ThemeState = {
    orientation: LayoutOrientation.RIGHT,
    fontSize: FontSize.NORMAL,
    activeIndex: 0,
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
    },
});

export const {setActiveIndex, setFontSize, setOrientation} =
    themeSlice.actions;
export default themeSlice.reducer;
