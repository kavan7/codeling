"use client";
import { SignedIn } from "@clerk/nextjs";
import {motion} from 'framer-motion';
import { Button } from "@/components/ui/button";
import {Tilt} from 'react-tilt';
import { SignedOut } from "@clerk/clerk-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardHeaderTwo
} from "@/components/ui/card"
//@ts-ignore
import { Director, View } from "@millicast/sdk";

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export default function Home(){

  const yourStreamAccountId = process.env.NEXT_PUBLIC_ACCOUNT_ID as string;
  const yourStreamName = 'Codeling';
  const [isLive, setIsLive] = React.useState<boolean>(true)

  const tokenGenerator = () => Director.getSubscriber({
    streamName: yourStreamName,
    streamAccountId: yourStreamAccountId
  });
  
  const [millicastView, setMillicastView] = React.useState<View | null>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const videoNode = videoRef.current;

    const initializeMillicastView = async () => {
      try {
        const view = new View(yourStreamName, tokenGenerator);
        //@ts-ignore
        view.on('track', (event) => {
          console.log('Stream has started.');
          if (videoNode) {
            videoNode.srcObject = event.streams[0];
            videoNode.hidden = false;
            videoNode.autoplay = true;
          }
        });
        await view.connect();
        setMillicastView(view);

      } catch (error) {
        setIsLive(false);
        console.error('Connection failed:', error);
      }
    };

    initializeMillicastView();
  }, [yourStreamName, yourStreamAccountId, setIsLive]);

  
  const [text, setText] = React.useState("");
  const [fullText, setFullText] = React.useState("You're in.");
  const [index, setIndex] = React.useState(0);

  const [texttwo, settexttwo] = React.useState("")
  const [fullTextTwo, setFullTextTwo] = React.useState("Welcome to Codeling!");
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
   
    <h1 className='head-text text-[32px] text-left md:text-[50px]'><ul>2025 Codeling BootCamp Registration<br className="md:hidden"/> is now live!</ul></h1>
    <p className="mb-3 pt-5 font-normal text-gray-300 dark:text-gray-400">Free feedback program  <br className="md:hidden"/>has limited spots </p>
  

    <div
 

 className='w-full  p-[3px] roundedy-[20px] '>


<div className="">

       <h5 className="mb-2 text-2xl tracking-tight text-white-900 py-5"> {`>`} &nbsp; <b className="">Fun Projects:</b> Work on exciting projects that spark your imagination. <br className="md:hidden"/> </h5>
 

   <h5 className="mb-2 text-2xl  tracking-tight text-white-900"> {`>`} &nbsp; <b>Interactive Lessons:</b> Enjoy hands-on learning with interactive coding challenges. </h5>
   <h5 className="mb-2 text-2xl  tracking-tight text-white-900 py-5"> {`>`} &nbsp; <b>Certificate of Completion:</b> Earn a cool certificate to show off your new skills!</h5>
  
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
      
        <p className="mb-3 py-5 font-normal text-gray-300 dark:text-gray-400">The fundamentals of computer programming </p>
       
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
      
        <p className="mb-3 py-5 font-normal text-gray-300 dark:text-gray-400">Livestream on the Codeling platform &nbsp;&nbsp;&nbsp;
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
      
        <p className="mb-3 py-5 font-normal text-gray-300 dark:text-gray-400">Task given after each session&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
       
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
  className="flex flex-row"
>

  {isLive ? (  <Card className="w-[400px] bg-dark-2">
      <CardHeader className="flex">
        <CardTitle className="text-white">Join Livestream</CardTitle>
        </CardHeader>
        <CardHeaderTwo className="flex-row">
        <CardDescription className="w-[10px] h-[10px]  mr-2 mt-2 rounded-full  bg-[#1bc912]  "></CardDescription>
        <CardDescription className=" text-slate-300">Online</CardDescription>
        </CardHeaderTwo>
        <CardHeaderTwo className="flex-row">
       
        <CardDescription className=" mt-5 text- text-slate-400">11:00AM-12:00PM</CardDescription>
        </CardHeaderTwo>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            ``
            </div>
            <div className="flex flex-col space-y-1.5">
             
             
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
       
        <Button  className="w-full"><a  href="/room">Join Live</a></Button>
      </CardFooter>
    </Card>) : (  <Card className="w-[350px] bg-dark-2">
      <CardHeader className="flex">
        <CardTitle className="text-white ">Join Presentation</CardTitle>
        </CardHeader>
        <CardHeaderTwo className="flex-row">
        <CardDescription className="w-[10px] h-[10px]  mr-2 mt-2 rounded-full  bg-slate-500  "></CardDescription>
        <CardDescription className=" text-slate-300 ">Offline</CardDescription>
        </CardHeaderTwo>
        <CardHeaderTwo className="flex-row">
       
        <CardDescription className=" mt-5 text- text-slate-400">11:00AM-12:00PM</CardDescription>
        </CardHeaderTwo>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            ``
            </div>
            <div className="flex flex-col space-y-1.5">
             
             
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
       
        <Button  className="w-full"><a  href="/room">Join Waiting Room </a></Button>
      </CardFooter>
    </Card>)}
    <Card className="w-[350px] ml-11  bg-dark-2">
      <CardHeader className="flex">
        <CardTitle className="text-white text-[25px]  ">Assignments</CardTitle>
        </CardHeader>
      
        <CardHeaderTwo className="flex-row">
        <CardDescription className="w-[10px] h-[10px]  mr-2 mt-2 rounded-full  bg-slate-500  "></CardDescription>
        <CardDescription className=" text-slate-300 ">Due March 23, 2024 </CardDescription>
        </CardHeaderTwo>
        <CardHeaderTwo className="flex-row">
  
       <CardDescription className=" text- mt-3 text-slate-400">Check out this weeks problem</CardDescription>
       </CardHeaderTwo>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            ``
            </div>
            <div className="flex flex-col space-y-1.5">
             
             
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
       
        <Button  className="w-full"><a  href="/assignments">Go to assignments </a></Button>
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