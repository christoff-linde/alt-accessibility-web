import BlogPost from '../components/BlogPost';
import { postData } from '../page';

const BlogPage = async () => {
  return (
    <div>
      {postData.map((post) => (
        <BlogPost key={`blog-post-${post.id}`} />
      ))}
    </div>
  );
};

export default BlogPage;
