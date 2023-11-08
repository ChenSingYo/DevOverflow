"use client"

import { Input } from '@/components/ui/input'
import Image from 'next/image'

interface CustomInputProps {
  route: string
  iconPosition: string
  imgSrc: string
  placeholder: string
  otherClasses?: string
}

const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === 'left' && (
        <Image
          src={imgSrc}
          className="cursor-pointer"
          width={24}
          height={24}
          alt="search"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        value=""
        className="paragraph-regular no-focus placeholder text-dark400_light700 background-light800_darkgradient border-none shadow-none outline-none"
      />
        {iconPosition === 'right' && (
        <Image
          src={imgSrc}
          className="cursor-pointer"
          width={24}
          height={24}
          alt="search"
        />
      )}

    </div>
  )
}

export default LocalSearchBar
