import { ReactNode } from 'react';

const CustomButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className='w-full rounded-lg bg-gray-900 px-4 py-2 text-white transition-colors hover:bg-blue-500'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
