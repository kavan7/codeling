"use client";
import { SignedIn } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {Tilt} from 'react-tilt';
import { SignedOut } from "@clerk/clerk-react";
import Link from "next/link";
import * as React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   

export default function Home(){
  const [text, setText] = React.useState("");
  const [fullText, setFullText] = React.useState("Assignments");
  const [index, setIndex] = React.useState(0);

  const [texttwo, settexttwo] = React.useState("")
  const [fullTextTwo, setFullTextTwo] = React.useState("");
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
    <Accordion type="multiple"  className="w-full">
  <AccordionItem value="item-1"> {/*Day One*/}
    <AccordionTrigger>Day 1</AccordionTrigger>
        <AccordionContent>
        <AccordionItem value="item-6" >  <AccordionTrigger>{`    > `}Using Replit</AccordionTrigger><AccordionContent className="text-slate-300">In this course, we will be using an online python compiler called Repl.it. <br/>Please visit repl.it and start a new python project.</AccordionContent></AccordionItem>
        </AccordionContent>
        <AccordionContent>
        <AccordionItem value="item-7" >  <AccordionTrigger>{`     > `}Python basics</AccordionTrigger><AccordionContent className="text-slate-300">Python is very similar to a regular language.<br/> It takes instructions through code and compiles it together.</AccordionContent></AccordionItem>
        </AccordionContent>
        <AccordionContent>
        <AccordionItem value="item-8" >  <AccordionTrigger>{`     > `}Variables</AccordionTrigger><AccordionContent className="text-slate-300">Variables are very crucial when programming. Variables are considered 'storage' where we assign a value to a variable. <br/></AccordionContent></AccordionItem>
        </AccordionContent>

        <AccordionContent>
        <AccordionItem value="item-9"> <AccordionTrigger>{`     > `}Types of Variables</AccordionTrigger> <AccordionContent className="text-slate-300">Each variable will have a set type. For example numbers are 'int' for integer and sentences are 'str' for string.</AccordionContent></AccordionItem>
        </AccordionContent>

        <AccordionContent>
          
        <AccordionItem value="item-10" >  <AccordionTrigger>{`     > `}Receving User Input</AccordionTrigger><AccordionContent className="text-slate-300">So we understand that programming compiles instructions through code. <br/> However, some instructions may need to be added by the user to give the program more user friendly.<br/></AccordionContent></AccordionItem>
        </AccordionContent>
       
        
       
      </AccordionItem>

     <AccordionItem value="item-2">{/*Day Two*/}
        <AccordionTrigger>Day 2</AccordionTrigger>
        <AccordionContent>
        <AccordionItem value="item-11" >  <AccordionTrigger>{`     > `}Conditions</AccordionTrigger><AccordionContent className="text-slate-300">Conditions in programming Conditions are basic “if, then” logic statements that modify how code is executed. Conditions are a key part of the decision-making process for computers.</AccordionContent></AccordionItem>
        </AccordionContent>
        <AccordionContent>
        <AccordionItem value="item-12" >  <AccordionTrigger>{`     > `}If, else statements</AccordionTrigger><AccordionContent className="text-slate-300">If statements are used to execute code when there is a condition present. For example, if (True), *Code*.</AccordionContent></AccordionItem>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">{/*Day Three*/}
        <AccordionTrigger>Day 3</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">{/*Day Four*/}
        <AccordionTrigger>Day 4</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">{/*Day Five*/}
        <AccordionTrigger>Day 5</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    
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