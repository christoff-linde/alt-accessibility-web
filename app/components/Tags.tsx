'use client';

import { useAppSelector } from './Navigation';

const TagContainer = ({ data }: { data: string[] }) => {
  const tagFontSize = useAppSelector((state) => state.theme.tagFontSize);
  return (
    <div className={`mt-2 flex flex-wrap gap-2 ${tagFontSize}`}>
      {data.map((tag) => (
        <span
          key={`post-title-tag-${tag}`}
          className={`inline-flex items-center rounded-md bg-cyan-600/10 px-2 py-1 ${tagFontSize} font-medium text-cyan-500 ring-1 ring-inset ring-cyan-200/10`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagContainer;
