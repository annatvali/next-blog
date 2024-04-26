"use client";
import Logo from './Logo';
import { Button as AuthButton } from '@/auth/Button';
import { SessionProvider } from 'next-auth/react';

type Props = {};

const Header = (props: Props) => {
  return (
    <SessionProvider>
        <header className='flex justify-between bg-slate-950 p-4'>
          <Logo />
          <AuthButton />
        </header>
    </SessionProvider>
  );
}

export default Header;