'use server'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server';

import getMyFoundItems from '@/app/api/getMyFoundItems'
import getMyLostItems from '@/app/api/getMyLostItems'

import DisplayMyFoundItems from '@/app/components/displayMyFoundItems'
import DisplayMyLostItems from '@/app/components/displayMyLostItems'

const Dashboard = async () => {
    const user = await currentUser();
    console.log("GOT THE USER: ", user)
    const myFoundItems = await getMyFoundItems(user?.id ?? "");
    const myLostItems = await getMyLostItems(user?.id ?? "");
    console.log("what", myLostItems)
  return (
    <>
        {/* Card Blog */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center my-24 lg:mb-14">
                <h2 className="text-2xl text-neutral-200 font-bold md:text-4xl md:leading-tight">
                    Миний жагсаалт
                </h2>
            </div>
            <h2 className="text-2xl text-neutral-200 font-bold md:text-4xl md:leading-tight">
                Олсон зүйлсийн жагсаалт:
            </h2>
            <DisplayMyFoundItems myItems={myFoundItems} />
            <h2 className="text-2xl text-neutral-200 mt-32 font-bold md:text-4xl md:leading-tight">
                Алдсан зүйлсийн жагсаалт:
            </h2>
            <DisplayMyLostItems myItems={myLostItems} />
        </div>
    </>
  )
}

export default Dashboard