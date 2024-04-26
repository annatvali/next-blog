import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/' className='text-4xl text-white font-bold Link p-4'>
      Next
      <span className='text-indigo-400 ml-2'>Blog</span>
    </Link>
  );
}

export default Logo;