/* eslint-disable no-unused-vars */
export enum LayoutOrientation {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum FontSize {
  SMALL = 'text-sm',
  NORMAL = 'text-base',
  MEDIUM = 'text-xl',
  LARGE = 'text-2xl',
}

export type PostData = {
  id: string;
  title: string;
  tags: string[];
  author: string;
};
