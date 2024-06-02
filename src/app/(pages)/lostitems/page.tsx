'use server'
import React from 'react'
import Link from 'next/link'
import { SignedIn } from '@clerk/nextjs'

import SearchBar from '@/app/components/searchBar'
import LostItemsDisplay from '@/app/components/lostItemsDisplay'

import getLostItems from '@/app/api/getLostItems'

const LostItems = async () => {
    const lostItems = await getLostItems();
  return (
    <>
        {/* Card Blog */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center my-24 lg:mb-14">
                <h2 className="text-2xl text-neutral-200 font-bold md:text-4xl md:leading-tight">
                    Алдсан зүйлсийн жагсаалт
                </h2>
                <p className="mt-1 text-gray-300">
                    
                </p>
            </div>
            <div className='flex flex-row justify-between py-9' >
                <div>
                    <SearchBar />
                </div>
                <SignedIn>
                    <Link
                        className="inline-block rounded-lg border border-neutral-200 bg-neutral-200 px-12 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-300 hover:text-neutral-900 focus:outline-none focus:ring active:text-neutral-100"
                        href="/createlostpost"
                        >
                        Алдсан зүйл нэмэх
                    </Link>
                </SignedIn>
                
            </div>
            <LostItemsDisplay lostItems={lostItems} />
        </div>
    </>
  )
}

export default LostItems