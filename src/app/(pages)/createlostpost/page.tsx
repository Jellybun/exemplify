'use client'
import React from 'react'
import { format } from 'date-fns';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import {DatePicker} from "@nextui-org/date-picker";
import {getLocalTimeZone, parseDate, DateValue} from "@internationalized/date"
import {useDateFormatter} from "@react-aria/i18n";
import { UploadDropzone } from "../../api/uploadImage";
import Image from "next/image"; 
import createLostItem from '@/app/api/createLostItem';
import { useRouter } from 'next/navigation'; 





const CreateLostPost = () => {
    const router = useRouter();
    const {user} = useUser();

    const [value, setValue] = React.useState<DateValue>(parseDate("2024-05-17"));
    let formatter = useDateFormatter({dateStyle: "full"});

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [location, setLocation] = useState("")

    const [isUploadComplete, setIsUploadComplete] = useState(false);
    const [uploadImageUrl, setUploadImageUrl] = useState("")


    const lostPostData = {
        title: title,
        description: desc,
        createdAt: new Date(),
        location: location,
        lostDate: value ? formatter.format(value.toDate(getLocalTimeZone())) : "--",
        itemStatus: "Active",
        authorId: user?.id ?? "hidden",
        authorUsername: `${user?.firstName} ${user?.lastName}` ?? "Anonymous",
        lostItemImageUrl: uploadImageUrl,
        authorAvatarUrl: user?.imageUrl
    }

    const handleSubmit = async () => {
        console.log(lostPostData)
        try {
            if (title.length > 0 && desc.length > 0 && location.length > 0 && isUploadComplete) {
                await createLostItem(lostPostData);
                router.push('/lostitems'); // Redirect to /lostitems after successful creation
            } else {
                if (title.length < 1) {
                    const sectionElement = document.getElementById('titleSection');
                    if (sectionElement) {
                    sectionElement.scrollIntoView({ behavior: "smooth" });
                    }
                } else if (desc.length < 1) {
                    const sectionElement = document.getElementById('descSection');
                    if (sectionElement) {
                    sectionElement.scrollIntoView({ behavior: "smooth" });
                    }
                } else if (location.length < 1) {
                    const sectionElement = document.getElementById('locationSection');
                    if (sectionElement) {
                    sectionElement.scrollIntoView({ behavior: "smooth" });
                    }
                } else if (!isUploadComplete) {
                    const sectionElement = document.getElementById('uploadSection');
                    if (sectionElement) {
                    sectionElement.scrollIntoView({ behavior: "smooth" });
                    }
                }
            }
          } catch (error) {
            // Handle the error, e.g., display an error message to the user
            console.error("Error creating lost item:", error);
          }
    }

    return (
        <>
        {/* Card Section */}
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <form>
            {/* Card */}
            <div className="bg-white rounded-xl shadow">
            <div className="text-center mb-2 pt-16 pb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
                    Алдсан зүйлс оруулах:
                </h2>
                <p className="text-sm mt-6 text-gray-500">
                    Үнэн зөв мэдээлэл оруулаарай
                </p>

            </div>
                <div className="pt-0 p-4 sm:pt-0 sm:p-7">
                {/* Grid */}
                <div className="space-y-4 sm:space-y-6">
                    <div id='titleSection' className="space-y-2">
                        <label
                            htmlFor="af-submit-app-project-name"
                            className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                        >
                            Гарчиг
                        </label>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            type="text"
                            className={`py-2 px-3 pe-11 block w-full border-2 shadow-sm rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none ${title.length > 0 ? 'border-gray-200' : 'border-red-500'}`}
                            placeholder="Enter title"
                        />
                    </div>
                    <div id='descSection' className="space-y-2">
                        <label
                            htmlFor="af-submit-app-description"
                            className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                        >
                            тайлбар
                        </label>
                        <textarea
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}
                            id="af-submit-app-description"
                            className={`py-2 px-3 block w-full border-2 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none ${desc.length > 0 ? 'border-gray-200' : 'border-red-500'}`}
                            rows={6}
                            placeholder="A detailed summary will better explain your item to the audiences. "
                        />
                    </div>
                    <div id='locationSection' className="space-y-2">
                        <label
                            htmlFor="af-submit-app-project-name"
                            className="inline-block text-sm font-medium text-gray-800"
                        >
                            Алдсан газар
                        </label>
                        <input
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                            type="text"
                            className={`py-2 px-3 pe-11 block w-full border-2 shadow-sm rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none ${location.length > 0 ? 'border-gray-200' : 'border-red-500'}`}
                            placeholder="Enter location"
                        />
                    </div>
                    <div className="space-y-2">
                    <label
                        htmlFor="af-submit-app-description"
                        className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                        Алдсан хугацаа
                    </label>
                    
                    <DatePicker color="default" className=" max-w-[284px] border-2 border-gray-200 rounded-lg" label="" aria-label='top' value={value} onChange={setValue} isRequired />
                    <p className="text-default-500 text-sm">
                    хугацаа: {value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}
                    </p>
                    
                    </div>
                    <div id='uploadSection' className="space-y-2">
                    <label
                        htmlFor="af-submit-app-upload-images"
                        className="inline-block text-sm font-medium text-gray-800 mt-2.5"
                    >
                        зураг оруулах
                    </label>
          
                    {!isUploadComplete ? (
                        <UploadDropzone
                        className={`border-2 ${isUploadComplete ? 'border-gray-200' : 'border-red-500'}`}
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                        // Do something with the response
                        console.log("Files: ", res[0].url);
                        setUploadImageUrl(res[0].url)
                        setIsUploadComplete(true)
                        }}
                        onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                        }}
                    />
                    ) : (<div className='text-center mx-auto max-w-xl items-center bg-gray-100 rounded-3xl py-3'>
                        <Image
                            src={uploadImageUrl} // Use URL.createObjectURL
                            alt="Image preview"
                            width={300} // Set desired width
                            height={300} // Set desired height
                            className="flex justify-center align-middle items-center mx-auto py-5 rounded-lg text-center"
                        />
                    </div>)}

                    </div>
                </div>
                {/* End Grid */}
                <div className="mt-5 flex justify-center gap-x-2">
                    <button
                    onClick={handleSubmit}
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                    Нэмэх
                    </button>
                </div>
                </div>
            </div>
            {/* End Card */}
            </form>
        </div>
        {/* End Card Section */}
    </>

  )
}

export default CreateLostPost