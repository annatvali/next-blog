"use client";
import Link from 'next/link';
import { Button as AuthButton } from '@/auth/Button';
import { SessionProvider } from 'next-auth/react';

type Props = {};

const Header = (props: Props) => {
  return (
    <SessionProvider>
      <div>
        <header className='flex justify-between bg-slate-950 p-4'>
          <Link
            href='/'
            className='text-4xl text-white font-bold Link p-4'
          >
            Next
            <span className='text-green-400 ml-2'>Blog</span>
          </Link>
          <AuthButton />
        </header>
      </div>
    </SessionProvider>
  );
}

export default Header;