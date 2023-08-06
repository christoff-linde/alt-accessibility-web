import Link from 'next/link';
import TagContainer from '../components/Tags';
import { postData } from '../page';
import { PostData } from '../types';

const MinimalBlogPost = ({ postData }: { postData: PostData }) => {
  return (
    <Link href={`/blog/${postData.id}`}>
      <div className='rounded-lg border border-gray-700 px-6 py-4 transition-colors hover:border-blue-500 hover:bg-slate-900'>
        <h1 className='text-2xl font-bold text-gray-100'>{postData.title}</h1>
        <p className='text-gray-500'>{postData.author}</p>
        <TagContainer data={postData.tags} />
      </div>
    </Link>
  );
};

const BlogPage = async () => {
  return (
    <div className='flex flex-col gap-2'>
      {postData.map((post) => (
        <MinimalBlogPost key={`blog-post-${post.id}`} postData={post} />
      ))}
    </div>
  );
};

export default BlogPage;
