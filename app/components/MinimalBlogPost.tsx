import Link from 'next/link';
import { PostData } from '../types';
import TagContainer from './Tags';
import Heading from './Heading';

const MinimalBlogPost = ({ postData }: { postData: PostData }) => {
  return (
    <Link href={`/blog/${postData.id}`}>
      <div className='rounded-lg border border-gray-700 px-6 py-4 transition-colors hover:border-blue-500 hover:bg-slate-900'>
        <Heading>{postData.title}</Heading>
        <div className='mt-3'>
          <TagContainer data={postData.tags} />
        </div>
      </div>
    </Link>
  );
};

export default MinimalBlogPost;
