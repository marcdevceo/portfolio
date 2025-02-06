import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
    image: string
    content: string
    href: string
    alt: string
}

const Card: React.FC<CardProps> = ({ image, content, href, alt }) => {
  return (
    <div className='flex flex-col items-center rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] overflow-hidden p-14 sm:p-5 w-80 mb-5'>
        <div>
            <Link href={href}>
                <Image
                    src={image}
                    alt={alt}
                    width={300}
                    height={300}
                />            
            </Link>
        </div>
        <div className='mt-5 text-center'>
            {content}
        </div>
    </div>
  )
}

export default Card