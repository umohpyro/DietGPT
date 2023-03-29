import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { FC } from 'react'
import 'simplebar-react/dist/simplebar.min.css'

import DocumentationTabs from '@/components/DocumentationTabs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DietGPT API | Documentation',
  description: 'Your correct health assistant bot',
}

const page: FC = () => {
  return (
    <div className='container max-w-7xl mx-auto mt-12'>
      <div className='flex flex-col items-center gap-6'>
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/endpoint</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  )
}

export default page
