"use client";
import { UserButton } from "@clerk/nextjs";

import {Tilt} from 'react-tilt';

export default function Home(){
  return (
    <>
    <h1 className='head-text text-left'><ul>You're in.</ul></h1>

   
        <h2 className=" mt-4 text-primary font-medium lg:text-[20px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">Welcome to the March Break coding bootcamp!</h2>
        <section className='mt-9 flex flex-row gap-10'>
        <Tilt className="xs:w-[250px] w-full">
      <div
 

      className='w-full  p-[3px] rounded-[20px] shadow-card'>
<div className="max-w-sm bg-black-900 border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">

    <div className="p-5">
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900"> > &nbsp; What will I learn?</h5>
      
        <p className="mb-3 py-5 font-normal text-gray-300 dark:text-gray-400">Getting started on the fundamentals of python for beginners </p>
       
    </div>
</div>
      </div>
    </Tilt>
    <Tilt className="xs:w-[250px] w-full">
      <div
 

      className='w-full  p-[3px] rounded-[20px] shadow-card'>
<div className="max-w-sm bg-black-900 border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">

    <div className="p-5">
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900"> > &nbsp; How will it work? </h5>
      
        <p className="mb-3 py-5 font-normal text-gray-300 dark:text-gray-400">There will be a daily presentation on the Kavan Codes platform </p>
       
    </div>
</div>
      </div>
      
    </Tilt>
    <Tilt className="xs:w-[250px] w-full">
      <div
 

      className='w-full  p-[3px] rounded-[20px] shadow-card'>


    <div className="p-5">
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900"> > &nbsp; More questions?  </h5>
      
        <p className="mb-3 py-5 font-normal text-gray-300 dark:text-gray-400">Feel free to reach kavancodes@gmail.com </p>
       
    </div>
</div>
     
      
    </Tilt>
    </section>

  </>
  )
}