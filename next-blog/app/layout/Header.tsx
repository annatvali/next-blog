import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <header className='flex justify-between border-b'>
        <Link href="/" className='text-4xl font-bold Linkx-4 py-4'>
          Next
          <span className='text-green-400'>Blog</span>
        </Link>
        <button className='text-2xl text-white bg-black px-8 py-4'>
          Sing In
        </button>
      </header>
    </div>
  );
}

export default Header;