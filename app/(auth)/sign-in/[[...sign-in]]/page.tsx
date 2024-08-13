import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="h-screen flex justify-center py-[100px] bg-slate-900"><SignIn />
  </div>;
}