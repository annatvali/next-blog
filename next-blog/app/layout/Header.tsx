type Props = {};

import React from 'react';

const Header = (props: Props) => {
  return (
    <div>
      <header className='flex justify-between border-b'>
        <div className='text-4xl font-bold px-4 py-4'>
          Next
          <span className='text-lime-600'>Blog</span>
        </div>
        <button className='text-2xl text-white bg-black px-8 py-4'>
          Sing In
        </button>
      </header>
    </div>
  );
}

export default Header;