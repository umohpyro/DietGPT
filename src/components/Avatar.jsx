import Image from 'next/image';

const Avatar = ({ imageUrl }) => {
  return (
    <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
      <Image
        src={imageUrl}
        className='w-full h-full object-cover'
        alt='DietGPT User'
      />
    </div>
  );
};

export default Avatar;
