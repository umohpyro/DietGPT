import Image from 'next/image'
import Link from 'next/link'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import Feature from '@/components/Feature'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DietGPT | Home',
  description: 'Your correct health assistant bot',
}

const data = [
  {
    imgsrc:"/bot.png", 
    cardTitle:"Personalized Nutritionist", 
    cardText:"DietGPT offers personalized meal suggestions based on user's dietary restrictions, preferences, and ingredient availability. "
  },
  {
    imgsrc:"/bot.png", 
    cardTitle:"Health Focused", 
    cardText:"It only respond to health related prompts as it prioritizes healthy meal options to help the user meet their fitness goal. "
  },
  {
    imgsrc:"/bot.png", 
    cardTitle:"Integradable", 
    cardText:"DietGPT could be integrated into other health and fitness apps or devices, such as fitness trackers or grocery delivery services. "
  }
]


export default function Home() {
  return (
    <>
      <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold'>
            DietGPT<br /> Your friendly health<br />/diet assistant.
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            DietGPT is your friendly pidgin Smart Diet Suggester and Custom Meal Plan Creator {' '}
            <Link
              href='/login'
              className='underline underline-offset-2 text-black dark:text-light-gold'>
              Get Inside
            </Link>
            .
          </Paragraph>

          <div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
              priority
              className='img-shadow '
              quality={100}
              style={{ objectFit: 'contain' }}
              fill
              src='/bot.png'
              alt='DietGPT' />
          </div>
          </div>
          {/*  */}
 {/* Feature Section */}
<div className='container'>
  <ul className ='flex flex-col md:flex-row gap-y-3 md:gap-x-6'>
    {data.map((datum) => (
      <li key={datum.cardTitle}>
       <Feature imgsrc={datum.imgsrc} cardTitle={datum.cardTitle} cardText={datum.cardText} />
      </li>
    ))}
  </ul>
</div>
          {/*  */}
      </div>
      </div>
 

      </>
  )
}
