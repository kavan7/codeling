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
import Image from "next/image";
   

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
    <AccordionTrigger>Day 1 - Introduction to Python </AccordionTrigger>
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
       
        <AccordionContent>
          
        <AccordionItem value="item-20">
  <AccordionTrigger>{`>`} Assignment One</AccordionTrigger>
  <AccordionContent className="text-slate-300">
    <p><strong>Assignment: Basic Grade Calculator</strong></p>
    
    <p><strong>Instructions:</strong></p>
    <p>Write a Python program that calculates the grade of a student based on their exam score.</p>
    
    <p><strong>Requirements:</strong></p>
    <ul className="mt3">
      <li>The program should ask the user to input the exam score as a number.</li>
      <li>If the exam score is 90 or above, the program should print "Grade: A".</li>
      <li>If the exam score is between 80 and 89 (inclusive), the program should print "Grade: B".</li>
      <li>If the exam score is between 70 and 79 (inclusive), the program should print "Grade: C".</li>
      <li>If the exam score is between 60 and 69 (inclusive), the program should print "Grade: D".</li>
      <li>If the exam score is below 60, the program should print "Grade: F".</li>
    </ul>
  </AccordionContent>
</AccordionItem>

          </AccordionContent>
       
      </AccordionItem>

     <AccordionItem value="item-2">{/*Day Two
        <AccordionTrigger>Day 2 - Python For Loops and While Loops<Image src='/lock.svg' height={20} width={20} alt="lock"/></AccordionTrigger>
         <AccordionContent>
        <AccordionItem value="item-11" >  <AccordionTrigger>{`     > `}Introduction to Loops</AccordionTrigger><AccordionContent className="text-slate-300">In programming, loops are used to execute a block of code repeatedly until a certain condition is met.<br/> Python provides two main types of loops: for loops and while loops.</AccordionContent></AccordionItem>
        </AccordionContent> 
         <AccordionContent>
        <AccordionItem value="item-12" >  <AccordionTrigger>{`     > `}For Loops</AccordionTrigger><AccordionContent className="text-slate-300">A for loop is used to iterate over a sequence <br/>(such as a list, tuple, dictionary, or string) and execute a block of code for each element in the sequence.</AccordionContent></AccordionItem>
        </AccordionContent> 
        <AccordionContent>
        <AccordionItem value="item-21" >  <AccordionTrigger>{`     > `}While Loops</AccordionTrigger><AccordionContent className="text-slate-300">A while loop is used to execute a block of code repeatedly<br/> as long as a specified condition is true.</AccordionContent></AccordionItem>
        </AccordionContent> 
        <AccordionContent>
        <AccordionItem value="item-22" >  <AccordionTrigger>{`     > `}Using For Loops and While Loops Together</AccordionTrigger><AccordionContent className="text-slate-300">In Python, it's common to use for loops and while loops together, depending on the <br/> situation and the problem you're solving. Let's see how you can mix them in your code:</AccordionContent></AccordionItem>
        </AccordionContent> 
        <AccordionContent>
        <AccordionItem value="item-23" >  <AccordionTrigger>{`     > `}In-class Assignment</AccordionTrigger><AccordionContent className="text-slate-300"># Using a FOR loop to print numbers from 1 to 5 <br/># Using a WHILE loop to print numbers from 1 to 5</AccordionContent></AccordionItem>
        </AccordionContent> 
        <AccordionContent>
        <AccordionItem value="item-24" >  <AccordionTrigger>{`     > `}Assignment Two</AccordionTrigger><AccordionContent className="text-slate-300">Objective: The objective of this assignment is to practice using Python for loops and while loops to solve various problems.

Instructions:
<ol>
  <li>
    Write Python code to solve each of the following problems using both for loops and while loops.
  </li>
  <li>
    Include comments in your code to explain each step and your approach to solving the problem.
  </li>
  <li>
    Test your code with different inputs to ensure it behaves as expected.
  </li>
  <li>
    Submit your Python code file containing solutions to all the problems.
  </li>
</ol>

Problems:
<ol>
  <li>
    Write a program to calculate the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
  </li>
  <li>
    Write a program to print the Fibonacci series up to a specified number of terms. The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
  </li>
  <li>
    Write a program to find the sum of all the elements in a given list of integers.
  </li>
  <li>
    Write a program to count the number of vowels in a given string. Consider both uppercase and lowercase vowels (i.e., 'a', 'e', 'i', 'o', 'u').
  </li>
  <li>
    Write a program to determine whether a given number is prime or not.
  </li>
</ol></AccordionContent></AccordionItem>
        </AccordionContent> 
        */}
      </AccordionItem> 
      <AccordionItem value="item-3">
        <AccordionTrigger>Day 3   <Image src='/lock.svg' height={20} width={20} alt="lock"/></AccordionTrigger>
        {/* <AccordionContent>
      
        </AccordionContent> */}
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Day 4   <Image src='/lock.svg' height={20} width={20} alt="lock"/></AccordionTrigger>
        {/* <AccordionContent>
        
        </AccordionContent> */}
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Day 5   <Image src='/lock.svg' height={20} width={20} alt="lock"/></AccordionTrigger>
        {/* <AccordionContent>
    
        </AccordionContent>  */}
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