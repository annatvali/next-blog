import Image from 'next/image';
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className='grid grid-cols-1 xl:grid-cols-12 gap-8 mt-12'>
      <div className='w-full col-span-4 place-self-center sm:text-left justify-self-start'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl md:leading-normal'>
          News for every urban toursit!
        </h1>
        <button className='text-xl text-white font-bold bg-green-400 boarder-2 rounded shadow-[0.3rem_0.3rem_0px_0px_rgba(0,0,0,0.85)] px-4 sm:px-6 py-2 sm:py-4 mt-4'>
          Explore more
        </button>
      </div>
      <div className='col-span-8 justify-self-center sm:justify-self-end'>
        <Image
          src='/tbilisi-cover.jpg'
          width={1800}
          height={1200}
          alt='People crossing pedestrian crossing'
        />
      </div>
    </section>
  );
}

export default Hero;