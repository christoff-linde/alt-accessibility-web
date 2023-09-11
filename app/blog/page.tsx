import MinimalBlogPost from '../components/MinimalBlogPost';
import { postData } from '../page';

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
