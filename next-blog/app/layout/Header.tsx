type Props = {};

import React from 'react';

const Header = (props: Props) => {
  return (
    <div>
      <header className='flex justify-between border-b'>
        <p className='text-4xl font-bold px-4 py-4'>
          Next
          <span className='text-green-400'>Blog</span>
        </p>
        <button className='text-2xl text-white bg-black px-8 py-4'>
          Sing In
        </button>
      </header>
    </div>
  );
}

export default Header;