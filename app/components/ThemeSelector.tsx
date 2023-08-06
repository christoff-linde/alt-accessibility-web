'use client';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { setFontSize } from '../store/themeSlice';
import { FontSize } from '../types';
import CustomButton from './Button';

const useAppDispatch: () => AppDispatch = useDispatch;

const ThemeSelector = () => {
  const dispatch = useAppDispatch();

  const handleClick = (index: number) => {
    let targetFontSize = undefined;
    switch (index) {
      case 0:
        targetFontSize = FontSize.SMALL;
        break;
      case 1:
        targetFontSize = FontSize.NORMAL;
        break;
      case 2:
        targetFontSize = FontSize.MEDIUM;
        break;
      case 3:
        targetFontSize = FontSize.LARGE;
        break;
      default:
        targetFontSize = FontSize.NORMAL;
        break;
    }

    dispatch(setFontSize(targetFontSize));
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
