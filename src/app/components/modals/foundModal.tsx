// PostModal.tsx
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'; // Import the useRouter hook


import deleteItemByTitle from "@/app/api/deleteItem";

const FoundModal = (props: any) => {
    const router = useRouter();
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={props.onClose}
        ></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-xl shadow-lg max-w-4xl h-4/5 overflow-y-auto">
          <div>
            {/* Blog Article */}
            <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
              <div className="max-w-2xl">
                {/* Avatar Media */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                    <div className="flex-shrink-0">
                        <Image
                            src={props.item.author_avatar_url}
                            alt={`${props.item.author_username}'s avatar`}
                            width={30}
                            height={30}
                            className='rounded-full scale-125 mr-1'
                         />
                    </div>
                    <div className="grow">
                      <div className="flex justify-between items-center gap-x-2">
                        <div>
                          {/* Tooltip */}
                          <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                            <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                              <span className="font-semibold text-gray-800">
                                {props.item.author_username}
                              </span>
                              {/* Dropdown Card */}
                              <div
                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl"
                                role="tooltip"
                              >
                                {/* Body */}
                                <div className="p-4 sm:p-5">
                                  <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                                    <div className="flex-shrink-0">
                                      <img
                                        className="size-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                        alt="Image Description"
                                      />
                                    </div>
                                    <div className="grow">
                                      <p className="text-lg font-semibold text-gray-200">
                                        Leyla Ludic
                                      </p>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-400">
                                    Leyla is a Customer Success Specialist at
                                    Preline and spends her time speaking to
                                    in-house recruiters all over the world.
                                  </p>
                                </div>
                                {/* End Body */}
                                {/* Footer */}
                                <div className="flex justify-between items-center px-4 py-3 sm:px-5">
                                  <ul className="text-xs space-x-3">
                                    <li className="inline-block">
                                      <span className="font-semibold text-gray-200">
                                        56
                                      </span>
                                      <span className="text-gray-400">
                                        articles
                                      </span>
                                    </li>
                                    <li className="inline-block">
                                      <span className="font-semibold text-gray-200">
                                        1k+
                                      </span>
                                      <span className="text-gray-400">
                                        followers
                                      </span>
                                    </li>
                                  </ul>
                                  <div>
                                    <button
                                      type="button"
                                      className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                      <svg
                                        className="flex-shrink-0 size-3.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        <path
                                          fillRule="evenodd"
                                          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                                        />
                                      </svg>
                                      Follow
                                    </button>
                                  </div>
                                </div>
                                {/* End Footer */}
                              </div>
                              {/* End Dropdown Card */}
                            </div>
                          </div>
                          {/* End Tooltip */}
                          <ul className="text-xs text-gray-500 flex flex-row justify-between">
                            <div>
                            {props.item.location}
                            </div>
                            <div className="px-2">-</div>
                            <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full">
                                {props.item.created_at.toLocaleDateString()} 
                            </li>
                          </ul>
                          
                        </div>
                        {/* End Button Group */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Avatar Media */}
                {/* Content */}
                <div className="space-y-5 md:space-y-8">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold md:text-3xl">
                      {props.item.title}
                    </h2>
                    <p className="text-lg text-gray-800">
                        {props.item.description}
                    </p>
                  </div>
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

                  {/* <div className="space-y-3">
                    <h3 className="text-2xl font-semibold">
                      Сэтгэгдэлүүд:
                    </h3>
                    <p className="text-lg text-gray-800">
                      We know the power of sharing is real, and we want to
                      create an opportunity for everyone to try Preline and
                      explore how transformative open communication can be. Now
                      you can have a team of one or two designers and unlimited
                      spectators (think PMs, management, marketing, etc.) share
                      work and explore the design process earlier.
                    </p>
                  </div> */}
                </div>
                {/* End Content */}
              </div>
            </div>
            {/* End Blog Article */}
            {/* Sticky Share Group */}
            <div className="sticky bottom-6 inset-x-0 text-center">
              <div className="inline-block shadow-md bg-red-500 transform hover:scale-105 duration-200 rounded-xl py-3 px-4">
                <div className="flex items-center gap-x-1.5">
                  <div className="hs-dropdown relative inline-flex">
                    <button
                        onClick={() => {
                            deleteItemByTitle(props.item.title)
                            router.refresh();
                        }}
                      type="button"
                      id="blog-article-share-dropdown"
                      className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-black hover:text-gray-800"
                    >
                      Устгах
                    </button>
                    <div
                      className="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2"
                      aria-labelledby="blog-article-share-dropdown"
                    >
                      <div className="border-t border-gray-600 my-2" />
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        href="#"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                        Share on Twitter
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        href="#"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        Share on Facebook
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        href="#"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                        Share on LinkedIn
                      </a>
                    </div>
                  </div>
                  {/* Button */}
                </div>
              </div>
            </div>
            {/* End Sticky Share Group */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundModal;
