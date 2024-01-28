import Link from "next/link";
import Image from "next/image";
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import { organizations } from "@clerk/clerk-sdk-node";

function Topbar(){
    const isUserLoggedIn = true;
    return <nav className="topbar">
        <Link href="/" className="flex items-center gap-4">
            <Image src='/logoicon.png' alt="logo" width={125} height={125} />
            <p className="text-heading2-bold animated-nav text-light-1 max-xs:hidden">
                Kavan Codes

            </p>
        </Link>

        <div className="flex items-center gap-1">
            <div className="block md:hidden">
                <SignedIn>
                    <SignOutButton>
                        <div className="flex cursor-pointer">
                            <Image src="/assets/logout.svg" alt="Sign Out" width={24} height={24}/>

                        </div>
                    </SignOutButton>



                </SignedIn>
               
            </div>

        <OrganizationSwitcher appearance={{elements: {organizationSwitcherTrigger: "py-2 px-4"}}}/>
        </div>
    </nav>
}

export default Topbar;