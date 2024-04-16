'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const Avatar = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session && (
          <Image
            src={session.user?.image ?? '/default-user-img.png'}
            width={40}
            height={40}
            alt={session.user?.name ?? 'user avatar'}
          />
      )}
    </div>
  );
};

export default Avatar;
