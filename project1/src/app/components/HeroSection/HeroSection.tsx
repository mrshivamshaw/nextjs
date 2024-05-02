"use client";
import Link from 'next/link';
import React from 'react'
import { SpotlightPreview } from '../Spotlight/Spotlight';
import { Button } from '../ui/moving-border';

const HeroSection = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center gap-4 overflow-x-hidden'>
        <SpotlightPreview/>
        <h1 className='text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the magic of Music</h1>
        <p className='w-full text-center text-lg font-light text-white/90'>Dive into our comprehensive music courses and transform <br />
            your musical journey today. Whether you're a beginner or <br />
            looking to refine your skills, join us to unlock your true <br />
            potential.
        </p>
        <Link href={'/courses'}>
            <div className=' text-lg font-medium rounded-3xl mt-2 '>
                    <Button>Explore</Button>
            </div>
        </Link>
    </div>
  )
}

export default HeroSection