import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div className='max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <Image
        className='rounded-t-lg'
        src='/about.jpg'
        alt='About'
      />

      <div className='p-5'>
        <Link href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            About DietGPT
          </h5>
        </Link>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {`
          DietGPT was inspired by a personal need for quick and healthy meal ideas. As busy professionals with busy schedules, we found it difficult to consistently make nutritious meals for ourselves and our families. We wanted a solution that was convenient, accessible, and tailored to our specific dietary needs and preferences.
This project was developed as a Portfolio Project for ALX SE Program, as part of our training to become full-stack software engineers. I am proud to have developed a solution that addresses a common problem for many people, and I hope that this chatbot will help others eat healthier and save time in the kitchen.

          `}
        </p>
        <Link
          href='#'
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Read more
          <svg
            aria-hidden='true'
            className='w-4 h-4 ml-2 -mr-1'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default About