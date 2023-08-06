'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { postData } from '../page';
import { RootState } from '../store';

const lorem = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam id dui eu gravida. Nunc imperdiet sagittis suscipit. Curabitur nec ultricies tortor, id dictum odio. Mauris et mi et nunc lacinia facilisis vitae sagittis sem. Integer rhoncus lorem in rutrum tincidunt. Maecenas bibendum dui at augue posuere fermentum. Pellentesque velit magna, porta in fringilla id, pretium et odio. Nulla suscipit efficitur sapien, a ornare elit facilisis sed. Curabitur a elementum ex. Aenean mattis ante eget nulla lacinia cursus. Donec sollicitudin vel nisi ac rutrum. Proin sapien lorem, posuere id consectetur eget, aliquam non purus.',
  'Morbi sit amet eros sed ante vestibulum vehicula vel eu nisi. In dictum ante eu mauris hendrerit, in pulvinar est congue. Morbi dictum massa odio, non mattis justo tristique vel. Sed urna tellus, interdum et pharetra sed, ultricies eu orci. Curabitur dignissim, odio vitae tincidunt interdum, justo arcu tempus nibh, sed rutrum nulla libero in massa. Ut sit amet leo et nisi consequat imperdiet. Aliquam eu maximus libero. Praesent volutpat mollis rhoncus. Nunc maximus dolor id mi varius consectetur. Quisque auctor convallis feugiat. Quisque cursus sed massa sed laoreet. Donec id ipsum vitae quam porta vestibulum.',
  'Nunc posuere, arcu a dignissim sodales, nisl velit pulvinar nulla, vitae imperdiet sem sapien eu lacus. Nam erat mi, volutpat a molestie sed, pellentesque nec justo. Nullam non rhoncus odio. Nullam finibus tortor a ligula ultricies, ac rutrum risus molestie. Pellentesque efficitur, lectus in tempus porttitor, dui lorem luctus sem, at mattis ligula lorem ut eros. Phasellus tincidunt arcu ullamcorper felis gravida tincidunt. In vel quam diam. Donec fermentum euismod sem lacinia gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum efficitur in ipsum scelerisque ultrices. Ut velit mi, feugiat vel mi auctor, laoreet auctor orci. Vestibulum orci nibh, viverra nec facilisis a, dignissim vel nunc. Nunc rutrum varius urna sit amet pellentesque. Donec tristique mi auctor, ullamcorper nisl rhoncus, mollis elit. Praesent consequat ultricies velit, vel congue quam ultrices nec. Fusce eu cursus ipsum, ac fringilla erat.',
  'Pellentesque sapien quam, pulvinar eu scelerisque at, egestas ac purus. In varius magna sem, at volutpat magna aliquam vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vestibulum tincidunt nunc, eget tempor eros lobortis auctor. Aliquam tempor varius sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In elementum luctus rhoncus.',
  'Duis quam velit, porttitor ac ullamcorper eleifend, feugiat ut ipsum. Maecenas tincidunt, nisi a vestibulum bibendum, nulla eros vehicula magna, nec porttitor urna magna in nunc. Maecenas sapien urna, semper in tempor in, ultrices venenatis sem. Vivamus ornare erat sit amet tempus auctor. Pellentesque non diam sit amet urna tempus molestie. Fusce eleifend urna semper libero dictum condimentum. Phasellus gravida convallis est vel facilisis. In hac habitasse platea dictumst. Aenean ac malesuada quam. Curabitur sed enim in purus pharetra venenatis sed ac tellus. Proin tempor semper neque, sed auctor velit tincidunt eu. Sed fermentum consequat auctor. Donec ullamcorper, lacus vel tristique aliquet, elit velit bibendum ex, sit amet dignissim metus ipsum vulputate nisi. Curabitur et condimentum enim. Nulla mi nibh, lobortis non quam in, dictum bibendum tortor. Vivamus quis mauris vel orci semper malesuada eget ut tortor.',
];

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const DynamicBlogPost = () => {
  const { fontSize } = useAppSelector((state) => state.theme);
  const params = useParams();

  const data = postData.filter((post) => post.id === params.id)[0];
  const url = `https://source.unsplash.com/${data.id}`;

  return (
    <div>
      <h1 className='text-3xl font-bold'>{data.title}</h1>
      <h2 className='pt-2 font-bold'>
        <span className='font-normal italic'>written by </span>
        {data.author}
      </h2>
      <div className='mt-2 flex gap-2'>
        {data.tags.map((tag) => (
          <span
            key={`post-title-tag-${tag}`}
            className='inline-flex items-center rounded-md bg-cyan-600/10 px-2 py-1 text-xs font-medium text-cyan-500 ring-1 ring-inset ring-cyan-200/10'
          >
            {tag}
          </span>
        ))}
      </div>
      <Image
        className='mt-4 h-96 w-full rounded-lg object-cover'
        src={url}
        alt='placeholder'
        width={1920}
        height={384}
      />
      <span className='text-sm text-gray-500'>
        Photo by <Link href={url}>Unsplash</Link>
      </span>
      <div className={fontSize}>
        {lorem.map((para, index) => (
          <p key={`post-para-${index}`} className='mb-4'>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DynamicBlogPost;
