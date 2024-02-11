"use client";
import { SignedIn } from "@clerk/nextjs";
import {motion} from 'framer-motion';
import { Button } from "@/components/ui/button";
import {Tilt} from 'react-tilt';
import { SignedOut } from "@clerk/clerk-react";
import Link from "next/link";
import * as React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardHeaderTwo
} from "@/components/ui/card"


export default function Home(){
  const [text, setText] = React.useState("");
  const [fullText, setFullText] = React.useState("You're in.");
  const [index, setIndex] = React.useState(0);

  const [texttwo, settexttwo] = React.useState("")
  const [fullTextTwo, setFullTextTwo] = React.useState("Welcome to the March Break coding bootcamp!");
  const [indextwo, setIndextwo] = React.useState(0);
  const [goal, setGoal] = React.useState(350)
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }


  React.useEffect(() => {
    if (index < fullText.length) {  
      setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 65);
    }
  }, [index, fullText]);

  React.useEffect(() => {
    if (indextwo < fullTextTwo.length) {  
      setTimeout(() => {
        settexttwo(fullTextTwo.slice(0, indextwo + 1));
        setIndextwo(indextwo + 1);
      }, 35);
    }
  }, [indextwo, fullText]);
  return (
    <>
    <SignedIn>
   
    <h1 className='head-text text-[50px] text-left'><ul>{text}</ul></h1>
    <h1 className=" mt-4 text-primary font-medium lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-light-1">{texttwo}</h1>

    </SignedIn>
   
    <SignedOut>
   
    <h1 className='head-text text-[32px] text-left md:text-[50px]'><ul>2024 March Break <br className="md:hidden"/>Coding Bootcamp</ul></h1>
    <p className="mb-3 pt-5 font-normal text-gray-300 dark:text-gray-400">This course is completely free <br className="md:hidden"/>and beginner friendly </p>
  

    <div
 

 className='w-full  p-[3px] roundedy-[20px] '>


<div className="">

       <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 py-5"> {`>`} &nbsp; Learn something new <br className="md:hidden"/>during the March Break </h5>
 

   <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900"> {`>`} &nbsp; Will run from March 12-16</h5>
   <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 py-5"> {`>`} &nbsp; Limited Spots</h5>
  
</div>
</div>

              </SignedOut>
     
        <section className='mt-9 flex flex-col md:flex-row gap-10 '>
    <SignedOut>
        <Tilt className="xs:w-[250px] w-full">
      <div
 

      className='w-full  h-[200px] p-[3px] rounded-[20px] shadow-card'>
<div className="max-w-sm bg-black-900 border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">

    <div className="p-5">
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900"> {`>`} &nbsp; What will I learn?</h5>
      
        <p className="mb-3 py-5 font-normal text-gray-300 dark:text-gray-400">Getting started on the fundamentals of python for beginners </p>
       
    </div>
</div>
      </div>
    </Tilt>
    <Tilt className="xs:w-[250px]  h-[200px] w-full">
      <div
 

      className='w-full  p-[3px] rounded-[20px] shadow-card'>
<div className="max-w-sm bg-black-900 border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">

    <div className="p-5">
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900">  {`>`} &nbsp; How will it work? </h5>
      
        <p className="mb-3 py-5 font-normal text-gray-300 dark:text-gray-400">Presentation on the Kavan Codes platform &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
       
    </div>
</div>
      </div>
      
    </Tilt>
    <Tilt className="xs:w-[250px] w-full">
      <div
 
 
      className='w-full  p-[3px] rounded-[20px] shadow-card'>
<div className="max-w-sm bg-black-900 border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">

    <div className="p-5">
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900"> {`>`} &nbsp; Assignments </h5>
      
        <p className="mb-3 py-5 font-normal text-gray-300 dark:text-gray-400">Daily task given after each lesson&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
       
    </div>
</div>
      </div>
      
    </Tilt>
  
    </SignedOut>
    <SignedIn>
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
    <Card className="w-[350px] bg-dark-2">
      <CardHeader className="flex">
        <CardTitle className="text-white">Join Presentation</CardTitle>
        </CardHeader>
        <CardHeaderTwo className="flex-row">
        <CardDescription className="w-[10px] h-[10px]  mr-2 mt-2 rounded-full  bg-slate-500  "></CardDescription>
        <CardDescription className=" text-slate-300">Offline</CardDescription>
        </CardHeaderTwo>
        <CardHeaderTwo className="flex-row">
       
        <CardDescription className=" mt-5 text- text-slate-400">11:00AM-12:00PM</CardDescription>
        </CardHeaderTwo>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            
            </div>
            <div className="flex flex-col space-y-1.5">
             
             
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
       
        <Button  className="w-full"><Link href="https://meet.google.com/jon-qbmu-dfu">Join</Link></Button>
      </CardFooter>
    </Card>
    
    </motion.div>
    </SignedIn>
    </section>

    <SignedOut>


    <Button className="mt-5" asChild>
      
      <Link href="/sign-up" className="mt-5 w-full "> Sign Up  </Link>
    </Button>




    </SignedOut>
  </>
  )
}