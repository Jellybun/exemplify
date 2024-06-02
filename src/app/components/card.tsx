'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'

const Card = (props: any) => {
  const { user } = useUser();
  return (
    <div onClick={props.openFunction} className="relative my-6 w-full aspect-[4/3] rounded-lg transform hover:scale-105 duration-150 shadow-lg">
        <Image
        src={props.item.lost_item_image_url}
        alt='image'
        objectFit='cover'
        layout='fill'
        className="mt-4 rounded-md" 
      />
      <div className="absolute inset-0"></div>
        <div className="absolute -bottom-12 left-0 w-full">
          <div className="bg-white p-4 rounded-t-none rounded-b-md">
              <div className='flex flex-row justify-between'>
                <div className='block text-xs text-left text-gray-900'>
                  {user ? (<p>{props.item.author_username}</p>) : (<p>Хэрэглэгч</p>)}
                </div>
                <div className="relative block text-xs text-gray-900 text-right">2024/11/18</div>
              </div>

              <div>
                <h3 className="mt-0.5 text-md font-bold text-gray-900 truncate">{props.item.title}</h3>
              </div>

              <p className="mt-2 line-clamp-2 text-xs/relaxed text-gray-500 text-left truncate">
                {props.item.description}
              </p>
          </div>
        </div>
      </div>

      
  )
}

export default Card