"use client"
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function DeleteModal({open, setOpen, deleteRecord, title}) {


  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="flex flex-col  bg-gray-50 justify-center items-center transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:h-40 space-y-4">
                <h1 className=' text-xl font-light'>Delete record <span className=' text-[#3498db] font-semibold'>{title}</span>?</h1>
                <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="rounded-md bg-[#e75757] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#8b3030] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all"
                    onClick={() => deleteRecord()}
                    ref={cancelButtonRef}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-[#3498db] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3e82af] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Go back
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
