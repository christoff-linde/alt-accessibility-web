/* eslint-disable no-unused-vars */
export enum LayoutOrientation {
  LEFT = 'flex-row-reverse',
  RIGHT = 'flex-row',
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
