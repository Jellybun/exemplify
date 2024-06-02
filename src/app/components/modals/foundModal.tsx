// PostModal.tsx
import React from 'react';
import Image from 'next/image';
const FoundModal = (props: any) => {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={props.onClose}></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-lg max-w-4xl h-4/5 overflow-y-auto">
                <div className="max-w-3xl mx-auto">
                {/* Your mini blog content */}
                <div className="max-w-2xl">
                    {/* Avatar Media */}
                    <div className="flex justify-between items-center mb-6">
                    {/* Avatar */}
                    <div className="flex row w-full sm:items-center gap-x-5 sm:gap-x-3">
                        <div className="flex-shrink-0">
                        </div>
                        {/* Author Info */}
                        <div className="text-left flex-grow">
                            <div className="flex flex-row justify-between items-center gap-x-2">
                                <div className='flex flex-row justify-between'>
                                {/* Author Name */}
                                <Image
                                    src={props.item.author_avatar_url}
                                    alt={`${props.item.author_username}'s avatar`}
                                    width={30}
                                    height={30}
                                    className='rounded-full mb-2 mr-2'
                                />
                                <span className="font-semibold text-gray-800 mt-1">{props.item.author_username ?? "Anonymous"}</span>
                                </div>
                            </div>
                        {/* Date and Read Time */}
                            <ul className="text-xs text-gray-500">
                                <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                                    {props.item.created_at.toLocaleDateString()} 
                                </li>
                            </ul>
                        </div>
                        <div className='text-gray-700 text-sm'>
                            <p>Олсон газар: {props.item.location}</p>
                            <p>Олсон хугацаа: {props.item.found_date}</p>

                        </div>
                    </div>
                    </div>
                    {/* Blog Content */}
                    <div className="space-y-5 md:space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-2xl text-center text-neutral-700 font-bold md:text-3xl">
                        {props.item.title}
                        </h2>
                        <p className="text-md text-gray-700">
                        {props.item.description}
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative w-full mx-auto flex justify-center items-center"> {/* Maintain aspect ratio using the parent div */}
                        <Image
                            src={props.item.found_item_image_url}
                            alt="Image Description"
                            width={400}
                            height={400}
                            style={{ objectFit: 'cover' }}  // Maintain aspect ratio and cover
                            className="rounded-xl"  // Add rounded corners
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default FoundModal;
