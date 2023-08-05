import Card from './components/card';

const postData = [
  {
    id: 'NFEaQJWVZDU',
    title: 'Card 1',
  },
  {
    id: '188BtS7GAy0',
    title: 'Card 2',
  },
  {
    id: 'a-person-standing-in-front-of-a-waterfall-11Uy_LdUzk8',
    title: 'Card 3',
  },
  {
    id: 'a-couple-of-tall-buildings-next-to-each-other-cGMcweFB8go',
    title: 'Card 4',
  },
];

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {postData.map((post) => (
          <Card key={post.id} imageId={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
