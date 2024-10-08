import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import AccountProfile from "@/components/forms/AccountProfile";


async function Page() {

  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  

  const userData = {
    id: user.id,
  
    username:user.username,
    name: user.firstName ?? "",
   
    image: user.imageUrl,
    onboarded : user.onboarded,
  };
  if (user.onboarded) {
    redirect("/");
   
  }
  return (
    
    <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
      <h1 className='head-text'>Onboarding</h1>
      <p className='mt-3 text-base-regular text-white-2'>
        Just a few more steps.
      </p>

      <section className='mt-9 bg-dark-2 p-10'>
        <AccountProfile user={userData} btnTitle='Continue' />
      </section>
    </main>
  );
}

export default Page;