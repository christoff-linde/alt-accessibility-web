'use client';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import {
  setAvatarSize,
  setFontSize,
  setTagFontSize,
  setTitleFontSize,
  setSubTitleFontSize,
} from '../store/themeSlice';
import {
  AvatarSize,
  FontSize,
  TagFontSize,
  TitleFontSize,
  SubTitleFontSize,
} from '../types';
import CustomButton from './Button';

const useAppDispatch: () => AppDispatch = useDispatch;

const ThemeSelector = () => {
  const dispatch = useAppDispatch();

  const handleClick = (index: number) => {
    let targetFontSize = undefined;
    let targetTagSize = undefined;
    let targetTitleSize = undefined;
    let targetSubTitleSize = undefined;
    let targetAvatarSize = undefined;
    switch (index) {
      case 0: {
        targetFontSize = FontSize.SMALL;
        targetTagSize = TagFontSize.SMALL;
        targetTitleSize = TitleFontSize.SMALL;
        targetSubTitleSize = SubTitleFontSize.SMALL;
        targetAvatarSize = AvatarSize.SMALL;
        break;
      }
      case 1: {
        targetFontSize = FontSize.NORMAL;
        targetTagSize = TagFontSize.NORMAL;
        targetTitleSize = TitleFontSize.NORMAL;
        targetSubTitleSize = SubTitleFontSize.NORMAL;
        targetAvatarSize = AvatarSize.NORMAL;
        break;
      }
      case 2: {
        targetFontSize = FontSize.MEDIUM;
        targetTagSize = TagFontSize.MEDIUM;
        targetTitleSize = TitleFontSize.MEDIUM;
        targetSubTitleSize = SubTitleFontSize.MEDIUM;
        targetAvatarSize = AvatarSize.MEDIUM;
        break;
      }
      case 3: {
        targetFontSize = FontSize.LARGE;
        targetTagSize = TagFontSize.LARGE;
        targetTitleSize = TitleFontSize.LARGE;
        targetSubTitleSize = SubTitleFontSize.LARGE;
        targetAvatarSize = AvatarSize.LARGE;
        break;
      }
      default: {
        targetFontSize = FontSize.NORMAL;
        targetTagSize = TagFontSize.NORMAL;
        targetTitleSize = TitleFontSize.NORMAL;
        targetSubTitleSize = SubTitleFontSize.NORMAL;
        targetAvatarSize = AvatarSize.NORMAL;
        break;
      }
    }

    dispatch(setFontSize(targetFontSize));
    dispatch(setTagFontSize(targetTagSize));
    dispatch(setTitleFontSize(targetTitleSize));
    dispatch(setSubTitleFontSize(targetSubTitleSize));
    dispatch(setAvatarSize(targetAvatarSize));
  };
  return (
    <div className='mt-4 flex gap-2'>
      <CustomButton onClick={() => handleClick(0)}>XS</CustomButton>
      <CustomButton onClick={() => handleClick(1)}>BASE</CustomButton>
      <CustomButton onClick={() => handleClick(2)}>XL</CustomButton>
      <CustomButton onClick={() => handleClick(3)}>2XL</CustomButton>
    </div>
  );
};

export default ThemeSelector;
