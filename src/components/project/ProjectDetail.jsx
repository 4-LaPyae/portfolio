import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function ProjectDetail({ item }) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);
  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className="py-3 bg-cushadow hover:bg-cu px-6 pb-2 text-xs font-medium uppercase leading-normal text-white"
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
            <div className="flex items-center min-h-screen ">
              <div className="relative w-full max-w-6xl mx-auto p-4 bg-white rounded-md shadow-lg">
                <div className="flex ">
                  <div
                    className="absolute top-0 right-0 px-1"
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon icon={faXmark} size="2xl" />
                  </div>
                  <div className=" text-center md:text-left mt-5 w-full">
                    <div className="block rounded-lg ">
                      <div className="flex flex-wrap">
                        <div className="block w-full shrink-0 grow-0 basis-auto md:flex md:w-4/12">
                          <img
                            src={item?.path}
                            alt="Trendy Pants and Shoes"
                            className="w-full rounded-t-lg md:rounded-tr-none md:rounded-bl-lg"
                          />
                        </div>
                        <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12">
                          <div className="px-6 py-12 md:px-12">
                            <h2 className="mb-6 pb-2 text-3xl font-bold">
                              Project Details
                            </h2>
                            <h2 className="mb-6 pb-2 text-2xl font-bold">
                              {item?.title}
                            </h2>
                            <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className={`w-full text-center cursor-pointer mt-2 p-2.5 flex-1 text-cu hover:bg-cu hover:text-white rounded-md outline-none border ${
                          item?.link === "#"
                            ? "pointer-events-none opacity-25"
                            : ""
                        }`}
                      >
                        <a href={item?.link} target="_blank" rel="website">
                          View Website
                        </a>
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
