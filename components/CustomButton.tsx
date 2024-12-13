"use client";
import { CustomButtonProps } from '@/types';
import { title } from 'process';
import Image from 'react'

const CustomButton = ({title, containerStyles, handleClick, btnType }: CustomButtonProps) => {
  return (
    <button 
    disabled={false} 
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={() => {}}
    >
        <span className={`flex-1`}>
            {title}
        </span>

    </button>
  )
}

export default CustomButton
