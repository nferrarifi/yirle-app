"use client"
import { useState, useRef } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import excelImage from '../img/tv-series.png'
import moviedbImage from "../img/imdb-movieratings.png"
import bookdbImage from "../img/bookdb.png"
import memearrow2 from "../img/memearrow2.png"
import memetext from "../img/memetext.png"
import { motion } from 'framer-motion'
import Card from './Card'

import dummycards from '../repository/dummycards'


function animationVariation (duration) {
  return {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: duration,
        },
    },
  }
}

const imageStyle = {
  borderRadius: '3px',
  border: '1px solid #fff',
}

console.log (dummycards)


export default function HeroSection() {
  const infoRef = useRef()
  function scrollToInfo (ref) {
    console.log(ref)
    ref.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="w-full h-full">
      <div className="relative isolate px-6 lg:px-8 z-10 h-[90vh]">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[24.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3498db] to-[#1e5a81] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Want to start right away?{' '}
              <a href="/login" className="font-semibold text-[#3498db]">
                <span className="absolute inset-0" aria-hidden="true" />
                Sign Up!
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight  sm:text-6xl">
              Record and review your <span className=' text-[#3498db]'>yearly</span> experiences
            </h1>
            <p className="mt-6 text-lg leading-8 font-semilight ">
              Keeping track of your experiences has never been so easy
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/login"
                className="rounded-md bg-[#3498db] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3e82af] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <button onClick={() => scrollToInfo(infoRef)} className="text-sm font-semibold leading-6 text-gray-900 ">
                Learn more <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#6e91d1] to-[#2218e2] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
      
      <div id="info" ref={infoRef} className="relative isolate px-6 lg:px-8  scroll-smooth">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[24.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3498db] to-[#1e5a81] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="flex flex-col space-y-4 text-3xl font-semibold tracking-tight  sm:text-5xl text-center h-[90vh]">
            <h2 className=' xl:pt-24 pt-60'>
              Keeping track through 
            </h2>
            <h3><span className='text-[#e74c3c]'>Excel sheets</span> and <span className='text-[#e74c3c]'>multiple database websites</span></h3>
            <motion.div initial="hide" whileInView="show" variants={animationVariation (1)} className='2xl:flex hidden py-8 justify-center space-x-8'>
              <Image style={imageStyle} src={excelImage} width={500} height={500}  />
              <Image style={imageStyle} src={moviedbImage} width={500} height={500}  />
              <Image style={imageStyle} src={bookdbImage} width={500} height={500}  />
            </motion.div>
            <h4 className='pt-24 2xl:pt-0' >Is now a thing from the <span className='text-[#e74c3c]'>past</span></h4>
        </div>  


        <div className="flex  xl:flew-row mx-4 xl:mx-32 pt-32 sm:py-48 lg:py-60 items-center justify-center xl:justify-between cursor-default">
          <div className=" mb-24">
            <h1 className="text-3xl font-semibold tracking-tight  sm:text-6xl">
              So... how does it <span className='text-[#3498db]'>work</span>?
            </h1>
            <h3 className='mt-6 text-lg xl:text-2xl'>The process consists of three <span className='text-[#e74c3c]'>simple</span> steps:</h3>
            <ul className="flex flex-col mt-6 ml-4 text-lg xl:text-2xl leading-8 font-light space-y-2 ">
              <li>Create/Login to your account</li>
              <li ><span className='line-through'>End world hunger</span></li>
              <li className='flex items-center'>
                Register your records!
                </li>     
            </ul>

          </div>
          <div  className='hidden xl:flex xl:flex-row space-x-8 ml-24'>
            {
              dummycards.map((record, index) => (
                <motion.div initial="hide"
                whileInView="show" variants={animationVariation(index+0.5)}>
                    <Card record={record} />
                </motion.div>
              ))
            }
          </div>

        </div>
        <div className='flex xl:hidden justify-center'>
            <Card record={dummycards[0]} />
          </div>    
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#6e91d1] to-[#2218e2] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
