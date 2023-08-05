import Image from 'next/image';
import { Suspense } from 'react';
import Loading from '../loading';

interface CardProps {
  imageId: string;
}

const Card = ({ imageId }: CardProps) => {
  const url = `https://source.unsplash.com/${imageId}`;
  console.log(url);
  return (
    <div className='w-full rounded-lg bg-gray-200 p-3 text-gray-950'>
      <h1 className='text-3xl font-bold uppercase'>Card</h1>
      <Suspense fallback={<Loading />}>
        <Image
          className='rounded-lg'
          src={url}
          alt='placeholder'
          width={400}
          height={400}
        />
      </Suspense>
    </div>
  );
};

export default Card;
