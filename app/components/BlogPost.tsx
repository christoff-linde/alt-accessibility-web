'use client';

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

const lorem = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam id dui eu gravida. Nunc imperdiet sagittis suscipit. Curabitur nec ultricies tortor, id dictum odio. Mauris et mi et nunc lacinia facilisis vitae sagittis sem. Integer rhoncus lorem in rutrum tincidunt. Maecenas bibendum dui at augue posuere fermentum. Pellentesque velit magna, porta in fringilla id, pretium et odio. Nulla suscipit efficitur sapien, a ornare elit facilisis sed. Curabitur a elementum ex. Aenean mattis ante eget nulla lacinia cursus. Donec sollicitudin vel nisi ac rutrum. Proin sapien lorem, posuere id consectetur eget, aliquam non purus.',
  'Morbi sit amet eros sed ante vestibulum vehicula vel eu nisi. In dictum ante eu mauris hendrerit, in pulvinar est congue. Morbi dictum massa odio, non mattis justo tristique vel. Sed urna tellus, interdum et pharetra sed, ultricies eu orci. Curabitur dignissim, odio vitae tincidunt interdum, justo arcu tempus nibh, sed rutrum nulla libero in massa. Ut sit amet leo et nisi consequat imperdiet. Aliquam eu maximus libero. Praesent volutpat mollis rhoncus. Nunc maximus dolor id mi varius consectetur. Quisque auctor convallis feugiat. Quisque cursus sed massa sed laoreet. Donec id ipsum vitae quam porta vestibulum.',
  'Nunc posuere, arcu a dignissim sodales, nisl velit pulvinar nulla, vitae imperdiet sem sapien eu lacus. Nam erat mi, volutpat a molestie sed, pellentesque nec justo. Nullam non rhoncus odio. Nullam finibus tortor a ligula ultricies, ac rutrum risus molestie. Pellentesque efficitur, lectus in tempus porttitor, dui lorem luctus sem, at mattis ligula lorem ut eros. Phasellus tincidunt arcu ullamcorper felis gravida tincidunt. In vel quam diam. Donec fermentum euismod sem lacinia gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum efficitur in ipsum scelerisque ultrices. Ut velit mi, feugiat vel mi auctor, laoreet auctor orci. Vestibulum orci nibh, viverra nec facilisis a, dignissim vel nunc. Nunc rutrum varius urna sit amet pellentesque. Donec tristique mi auctor, ullamcorper nisl rhoncus, mollis elit. Praesent consequat ultricies velit, vel congue quam ultrices nec. Fusce eu cursus ipsum, ac fringilla erat.',
  'Pellentesque sapien quam, pulvinar eu scelerisque at, egestas ac purus. In varius magna sem, at volutpat magna aliquam vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vestibulum tincidunt nunc, eget tempor eros lobortis auctor. Aliquam tempor varius sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In elementum luctus rhoncus.',
  'Duis quam velit, porttitor ac ullamcorper eleifend, feugiat ut ipsum. Maecenas tincidunt, nisi a vestibulum bibendum, nulla eros vehicula magna, nec porttitor urna magna in nunc. Maecenas sapien urna, semper in tempor in, ultrices venenatis sem. Vivamus ornare erat sit amet tempus auctor. Pellentesque non diam sit amet urna tempus molestie. Fusce eleifend urna semper libero dictum condimentum. Phasellus gravida convallis est vel facilisis. In hac habitasse platea dictumst. Aenean ac malesuada quam. Curabitur sed enim in purus pharetra venenatis sed ac tellus. Proin tempor semper neque, sed auctor velit tincidunt eu. Sed fermentum consequat auctor. Donec ullamcorper, lacus vel tristique aliquet, elit velit bibendum ex, sit amet dignissim metus ipsum vulputate nisi. Curabitur et condimentum enim. Nulla mi nibh, lobortis non quam in, dictum bibendum tortor. Vivamus quis mauris vel orci semper malesuada eget ut tortor.',
];

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const BlogPost = () => {
  const { fontSize } = useAppSelector((state) => state.theme);

  return (
    <div>
      <h1 className='mb-4 text-2xl'>Blog Post</h1>
      <div className={fontSize}>
        {lorem.map((ipsum, index) => (
          <div key={`blog-paragraph-${index}`} className='mt-4'>
            <p className='dark:prose-invert'>{ipsum}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
