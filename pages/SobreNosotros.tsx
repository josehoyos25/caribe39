import Image from 'next/image'
import React from 'react'

const SobreNosotros = () => {
  return (
    <div>SobreNosotros
            <Image src="/caribe.png"
            alt='Caribe Logo' 
            width={250}
            height={80}
            className='object-contain'
            /></div>
  )
}

export default SobreNosotros