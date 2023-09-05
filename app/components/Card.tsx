import Image from 'next/image';
import { Suspense } from 'react';
import Loading from '../loading';
import Link from 'next/link';
import TagContainer from './Tags';

interface CardProps {
  imageId: string;
  title: string;
  tags: string[];
  author: string;
}

const Card = ({ imageId, title, tags, author }: CardProps) => {
  const url = `https://source.unsplash.com/${imageId}`;

  return (
    <div className='w-full rounded-lg bg-gray-900 text-white'>
      <Link href={`/blog/${imageId}`}>
        <Suspense fallback={<Loading />}>
          <Image
            className='h-64 w-full rounded-lg object-cover'
            src={url}
            alt='placeholder'
            width={400}
            height={400}
          />
        </Suspense>
        <div className='px-4 py-4'>
          <div className='flex items-center gap-4 overflow-hidden'>
            <div className='inline-block h-10 w-10 rounded-full bg-slate-400' />
            <h1 className='font-bold lowercase'>{author}</h1>
          </div>
          <div>
            <h2 className='pt-2 font-bold'>{title}</h2>
            <p className='hidden'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae placeat cupiditate esse non corrupti ullam modi
            </p>
            <TagContainer data={tags} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;