"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Avatar from "./Avatar";

type Props = {};

export const Button = (props: Props) => {
  const { data: session, status } = useSession();

  if (status === "loading") return (
    <div className='text-2xl font-bold text-white rounded bg-purple-400 px-4 py-2'>
      Loading...
    </div>
  );

  if (session) return (
    <div className="flex items-center gap-4">
      <Avatar />
      <button
        className='text-xl font-bold text-white rounded bg-purple-400 px-4 py-2'
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );

  return (
    <button
      className='text-2xl font-bold text-white rounded bg-purple-400 px-4 py-2'
      onClick={() => signIn()}
    >
      Sing In
    </button>
  );
};
