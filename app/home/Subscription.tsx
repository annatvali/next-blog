import NewsSubscribe from './NewsSubscribe';
import Image from "next/image";

const Subscription = () => {
  return (
    <div className='bg-purple-300 mt-12 p-8'>
      <div className='grid grid-cols-12 container'>
        <div className='col-span-12 xl:col-span-8 flex flex-col'>
          <h2 className='text-purple-700 semi-bold text-4xl mb-5'>
            Subscribe for Exclusive Insights!
          </h2>
          <p className='max-w-2xl text-purple-700'>
            Stay updated with the latest travel tips, cultural insights, and
            hidden gems in Georgia, ensuring you make the most of your visit to
            this enchanting country. Receive exclusive deals, discounts, and
            insider recommendations straight to your inbox, making your Georgian
            adventure truly unforgettable. Join our community of fellow
            travelers and Georgia enthusiasts, and embark on a journey of
            discovery through the sights, sounds, and flavors of this vibrant
            destination.
          </p>
          <NewsSubscribe />
        </div>
        <div className='col-span-12 xl:col-span-4 rounded-full border-purple-600  border-4 w-[100px] h-[100px] md:w-[300px] md:h-[300px] relative xl:place-self-end mt-4'>
          <Image
            src='/newsletter-subscription.png'
            alt='ewsletter icon'
            width={300}
            height={300}
            className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'
          />
        </div>
      </div>
    </div>
  );
}

export default Subscription