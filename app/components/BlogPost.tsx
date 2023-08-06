'use client';

import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const BlogPost = () => {
  const { fontSize } = useAppSelector((state) => state.theme);

  return (
    <div>
      <h1 className='mb-4 text-2xl'>Blog Post</h1>
      <div className={fontSize}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          accusamus voluptate eius deleniti quos sequi, officia eaque minima
          repellendus blanditiis? Repudiandae consequuntur alias illum pariatur
          doloribus sint, laborum placeat velit.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
          tempore illo autem iure, vel labore nulla esse impedit sint, vero
          tempora aliquam maiores repellendus eligendi nihil dolor numquam
          suscipit ea!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
