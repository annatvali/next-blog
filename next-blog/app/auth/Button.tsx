"use client";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

export const Button = (props: Props) => {
  const { data: session, status } = useSession();

  if (status === "loading") return <div className='text-2xl text-white bg-black px-8 py-4'>Loading...</div>;

  if (session) return <button className='text-2xl text-white bg-black px-8 py-4' onClick={(e) => {
    e.preventDefault();
    signOut();
  }}>Sign Out</button>;

  return <button className='text-2xl text-white bg-black px-8 py-4' onClick={() => signIn()}>Sing In</button>;
};
