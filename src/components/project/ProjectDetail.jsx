import { useState } from "react";

export default function ProjectDetail({ item }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className="py-3 bg-cushadow hover:bg-cu px-6 pb-2  text-xs font-medium uppercase leading-normal text-white "
          type="button"
          onClick={() => setShowModal(true)}
        >
          Details
        </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div
              className="fixed inset-0 w-full h-full bg-dark opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-6xl	 p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 flex">
                  <div className=" text-center md:text-left">
                    <div class="block rounded-lg ">
                      <div class="flex flex-wrap">
                        <div class="block w-full shrink-0 grow-0 basis-auto md:flex md:w-4/12">
                          <img
                            src={item?.path}
                            alt="Trendy Pants and Shoes"
                            class="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
                          />
                        </div>
                        <div class="w-full shrink-0 grow-0 basis-auto md:w-8/12">
                          <div class="px-6 py-12 md:px-12">
                            <h2 class="mb-6 pb-2 text-4xl font-bold">
                              Project Details
                            </h2>
                            <h2 class="mb-6 pb-2 text-2xl font-bold">
                              {item?.title}
                            </h2>
                            <p class="mb-6 pb-2 text-neutral-500 dark:text-neutral-300">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. A soluta corporis voluptate ab
                              error quam dolores doloremque, quae consectetur.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-cu hover:bg-cu hover:text-white rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        View
                      </button>
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-cu hover:bg-cu hover:text-white rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
