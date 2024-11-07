
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo.jpeg"
import { Menu } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"

  export default function Navbar(){
return(
    
        <header className="h-20 w-full bg-black text-[white] lg:flex  flex justify-between items-center fixed top-0 ">
            <div className="mt-2">
                <Image className="h-14 w-14 rounded-full ml-[30px] md:ml-[80px] " src={logo} alt="logo"/>
            </div>
            <div className="mr-28 font-bold text-[20px] md: space-x-20 md:block hidden">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                </div>
                <Sheet>
            <SheetTrigger className=" mr-8  md:hidden "><Menu className="text-white "/></SheetTrigger>
           <SheetContent>
                <div className="mt-8">
                <Image className="h-14 w-14 rounded-full ml-[30px]  " src={logo} alt="logo"/>
                </div>
              <div className="mt-7 ml-5 font-extrabold text-[25px] flex flex-col space-y-8 text-[#c2441d] ">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                </div>
                </SheetContent>
               </Sheet>   
                </header>
    )
  }