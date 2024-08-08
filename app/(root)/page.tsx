"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Tilt } from 'react-tilt';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardHeaderTwo
} from "@/components/ui/card";
import { FaLocationArrow } from 'react-icons/fa6';
import { Director, View } from "@millicast/sdk";
import * as React from "react";
import Link from "next/link";
import { Meteors } from "@/components/ui/meteors";
import MagicButton from "@/components/ui/MagicButton";

export default function Home() {
  const MOBILE_NAV_ITEMS = [
    { id: 0, navTitle: "home" },
    { id: 1, navTitle: "showreel" },
    { id: 2, navTitle: "services" },
    { id: 3, navTitle: "about" },
    { id: 4, navTitle: "contact" }
  ];

  const yourStreamAccountId = process.env.NEXT_PUBLIC_ACCOUNT_ID as string;
  const yourStreamName = 'Codeling';
  const [isLive, setIsLive] = React.useState<boolean>(true);

  const tokenGenerator = () => Director.getSubscriber({
    streamName: yourStreamName,
    streamAccountId: yourStreamAccountId
  });

  const [millicastView, setMillicastView] = React.useState<View | null>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, [yourStreamName, yourStreamAccountId, setIsLive]);

  const [text, setText] = React.useState("");
  const [fullText, setFullText] = React.useState("You're in.");
  const [index, setIndex] = React.useState(0);

  const [texttwo, settexttwo] = React.useState("");
  const [fullTextTwo, setFullTextTwo] = React.useState("Welcome to Codeling!");
  const [indextwo, setIndextwo] = React.useState(0);
  const [goal, setGoal] = React.useState(350);
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
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
  }, [indextwo, fullTextTwo]);

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2
      }
    },
    closed: { opacity: 0 }
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1
      }
    }
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  };

  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };

  return (
    <>
      <SignedIn>
        <h1 className='head-text text-[50px] text-left'><ul>{text}</ul></h1>
        <h1 className="mt-4 text-primary font-medium lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-light-1">{texttwo}</h1>
      </SignedIn>
      <SignedOut>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h1 className='head-text text-[32px] text-left animated-nav md:text-[50px]'><ul>2025 Codeling BootCamp Registration<br className="md:hidden"/> is now live!</ul></h1>
          <p className="mb-3 pt-5 font-normal text-gray-300 dark:text-gray-400">Limited Spots<br className="md:hidden"/> </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <div className='w-full  p-[3px] roundedy-[20px] '>
            <div className="">
              <h5 className="mb-2 text-2xl tracking-tight text-white-900 py-5 animated-nav"> {`>`} &nbsp; <b className="">Fun Projects:</b> Work on exciting projects that spark your imagination. <br className="md:hidden"/> </h5>
              <h5 className="mb-2 text-2xl  tracking-tight text-white-900 animated-nav"> {`>`} &nbsp; <b>Interactive Lessons:</b> Enjoy hands-on learning with interactive coding challenges. </h5>
              <h5 className="mb-2 text-2xl  tracking-tight text-white-900 py-5 animated-nav "> {`>`} &nbsp; <b>Certificate of Completion:</b> Earn a cool certificate to show off your new skills!</h5>
            </div>
          </div>
        </motion.div>
      </SignedOut>
      <section className='mt-9 flex flex-col md:flex-row gap-10 '>
        <SignedOut>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Tilt className="xs:w-[250px] w-full">
              <div className="">
                <div className=" w-full relative max-w-xs">
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-[#000319] rounded-full blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </div>
                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                      What will I learn?
                    </h1>
                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                      The fundamentals of programming
                    </p>
                    <a href="https://www.linkedin.com/company/codeling" target="_blank">
                      <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                        Explore
                      </button>
                    </a>
                    <Meteors number={20} />
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Tilt className="xs:w-[250px] w-full">
              <div className="">
                <div className=" w-full relative max-w-xs">
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-[#000319] rounded-full blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </div>
                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                      How will it work?
                    </h1>
                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                      Weekly livestreams hosted on Codeling
                    </p>
                    <a href="https://www.linkedin.com/company/codeling" target="_blank">
                      <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                        Explore
                      </button>
                    </a>
                    <Meteors number={20} />
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Tilt className="xs:w-[250px] w-full">
              <div className="">
                <div className=" w-full relative max-w-xs">
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-[#000319] rounded-full blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </div>
                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                      Assignments
                    </h1>
                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                      Assignments will be given proceeding the lesson
                    </p>
                    <a href="https://www.linkedin.com/company/codeling" target="_blank">
                      <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                        Explore
                      </button>
                    </a>
                    <Meteors number={20} />
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </SignedOut>
        <SignedIn>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-row"
          >
            {isLive ? (
              <Card className="w-[400px] bg-dark-2">
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
                  <Button className="w-full"><a href="/room">Join Live</a></Button>
                </CardFooter>
              </Card>
            ) : (
              <Card className="w-[350px] bg-dark-2">
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
                  <Button className="w-full"><a href="/room">Join Waiting Room </a></Button>
                </CardFooter>
              </Card>
            )}
            <Card className="w-[350px] ml-11  bg-dark-2">
              <CardHeader className="flex">
                <CardTitle className="text-white text-[25px]  ">Assignments</CardTitle>
              </CardHeader>

              <CardHeaderTwo className="flex-row">
                <CardDescription className="w-[10px] h-[10px]  mr-2 mt-2 rounded-full  bg-slate-500  "></CardDescription>
                <CardDescription className=" text-slate-300 ">Go to assignments</CardDescription>
              </CardHeaderTwo>
              <CardHeaderTwo className="flex-row">
                <CardDescription className=" text- mt-3 text-slate-400">Program enrollment starts now!</CardDescription>
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
                <Button className="w-full"><a href="/assignments">Go to assignments </a></Button>
              </CardFooter>
            </Card>
          </motion.div>
        </SignedIn>
      </section>

      <SignedOut>
        <div className="mt-5">
          <Link href="/sign-up" className="my-5 w-full "> <MagicButton icon={<FaLocationArrow />} position='right' title="Sign up" />  </Link>
        </div>
      </SignedOut>
    </>
  );
}
