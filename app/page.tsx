import Card from './components/Card';
import { PostData } from './types';

export const postData: PostData[] = [
  {
    id: 'a-small-waterfall-in-the-middle-of-a-mountain-ILPltHaJzOU',
    title: 'A Small Waterfall In The Middle Of A Mountain',
    tags: ['waterfall', 'mountain', 'nature'],
    author: 'John Doe',
  },
  {
    id: 'a-close-up-of-a-black-rock-surface-dY9wfdwDML4',
    title: 'A Close Up Of A Black Rock Surface',
    tags: ['rock', 'surface', 'black', 'dark'],
    author: 'Jane Doe',
  },
  {
    id: 'a-person-standing-in-front-of-a-waterfall-11Uy_LdUzk8',
    title: 'A Person Standing In Front Of A Waterfall',
    tags: ['waterfall', 'person', 'nature'],
    author: 'John Doe',
  },
  {
    id: 'a-couple-of-tall-buildings-next-to-each-other-cGMcweFB8go',
    title: 'A Couple Of Tall Buildings Next To Each Other',
    tags: ['building', 'city', 'sky'],
    author: 'Jane Doe',
  },
  {
    id: 'an-airplane-flying-through-a-very-tall-building-eJILNcigV88',
    title: 'An Airplane Flying Through A Very Tall Building',
    tags: ['airplane', 'building', 'city'],
    author: 'John Doe',
  },
  {
    id: 'a-close-up-of-a-green-plant-with-lots-of-leaves-ubpEcJVum7o',
    title: 'A Close Up Of A Green Plant With Lots Of Leaves',
    tags: ['plant', 'leaves', 'green'],
    author: 'Jane Doe',
  },
  {
    id: 'a-small-waterfall-cascading-down-a-mountain-side-frmQlTzIf5E',
    title: 'A Small Waterfall Cascading Down A Mountain Side',
    tags: ['waterfall', 'mountain', 'nature'],
    author: 'John Doe',
  },
];

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Home</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {postData.map((post) => (
          <Card
            key={`blog-post-${post.id}`}
            imageId={post.id}
            title={post.title}
            tags={post.tags}
            author={post.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
