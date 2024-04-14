import React from 'react';
import githubIcon from '../../public/github-icon.png';
import discordIcon from '../../public/discord-icon.png';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='w-full bg-black text-white py-12 px-4'>
      <div className='flex flex-col sm:flex-row container justify-between'>
        <div className='flex flex-row items-center pb-6'>
          <div>
            <Link href='/' className='text-4xl text-white font-bold Link p-4'>
              Next
              <span className='text-green-400 ml-2'>Blog</span>
            </Link>
            <div className='text-sm p-4'>© 2024 Next Blog</div>
          </div>
        </div>
        <div className='flex items-center gap-4 mr-4 pl-4'>
          <a href='https://github.com' target='_blank' className='mr-3'>
            <Image src={githubIcon} alt='github' width={32} height={32} />
          </a>
          <a href='https://twitter.com' target='_blank'>
            <Image src={discordIcon} alt='discord' width={48} height={48} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
