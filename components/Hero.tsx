"use client"

import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'
import { SlSocialInstagram } from "react-icons/sl";

const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className="hero__title">
            RENAULT CARIBE CALI
        </h1>
        <p className='hero__subtitle'>
            Explora nuestros autos y cotiza el que más te guste!
        </p>
        <CustomButton
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/sandero.jpeg" alt="hero" fill className='object-contain' />
          <div className='hero__image-overlay'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
