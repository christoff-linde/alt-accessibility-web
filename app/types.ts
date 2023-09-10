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

export enum TagFontSize {
  SMALL = 'text-xs',
  NORMAL = 'text-sm',
  MEDIUM = 'text-base',
  LARGE = 'text-lg'
}

export enum TitleFontSize {
  SMALL = 'text-base',
  NORMAL = 'text-lg',
  MEDIUM = 'text-xl',
  LARGE = 'text-2xl',
}

export enum AvatarSize {
  SMALL = 'h-8 w-8',
  NORMAL = 'h-10 w-10',
  MEDIUM = 'h-12 w-12',
  LARGE = 'h-14 w-14',
}

export type PostData = {
  id: string;
  title: string;
  tags: string[];
  author: string;
};
