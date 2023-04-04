import Image from 'next/image';

const Avatar = ({ imageUrl, user }) => {
  // className='mr-2 h-5 w-5'
  return (
    <div className='w-[20px] h-[20px] mr-2 rounded-full overflow-hidden'>
      <Image src={imageUrl} className='w-full h-full object-cover' alt={user} />
    </div>
  );
};

export default Avatar;
