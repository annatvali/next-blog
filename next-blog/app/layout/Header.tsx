"use client";
import Link from 'next/link';
import { Button as AuthButton } from '@/auth/Button';
import { SessionProvider } from 'next-auth/react';

type Props = {};

const Header = (props: Props) => {
  return (
    <SessionProvider>
      <div>
        <header className='flex justify-between border-b'>
          <Link href='/' className='text-4xl font-bold Linkx-4 py-4'>
            Next
            <span className='text-green-400'>Blog</span>
          </Link>
          <AuthButton />
        </header>
      </div>
    </SessionProvider>
  );
}

export default Header;