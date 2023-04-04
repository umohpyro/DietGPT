import Image from 'next/image';

const Avatar = ({ imageUrl, width, height }) => {
  return (
    //w-[20px] h-[20px] mr-2 rounded-full overflow-hidden
    <div
      className={`w-[${width}px] h-[${height}px] rounded-full overflow-hidden`}
    >
      <Image
        src={imageUrl}
        className='w-full h-full object-cover'
        alt='DietGPT User'
      />
    </div>
  );
};

export default Avatar;
