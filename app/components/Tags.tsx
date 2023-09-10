import { TagFontSize } from "../types";

const TagContainer = ({ tagFontSize, data }: { tagFontSize: TagFontSize, data: string[] }) => {
  return (
    <div className='mt-2 flex gap-2'>
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
