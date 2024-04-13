import Image from 'next/image';
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-12 gap-8 mt-8'>
      <div className='w-full col-span-6 place-self-center text-center sm:text-left justify-self-start'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl md:leading-normal'>
          News for every urban toursit!
        </h1>
        <button className='text-xl text-white font-bold bg-green-400 boarder-2 rounded shadow-[0.3rem_0.3rem_0px_0px_rgba(0,0,0,0.85)] px-4 sm:px-6 py-2 sm:py-4 mt-4'>
          Explore more
        </button>
      </div>
      <div className='col-span-6 justify-self-center sm:justify-self-end'>
        <Image
          src='/kent-tupas-xVLdFIxcDCc-unsplash.jpg'
          width={516.6}
          height={344.416}
          alt='People crossing pedestrian crossing'
        />
      </div>
    </section>
  );
}

export default Hero;