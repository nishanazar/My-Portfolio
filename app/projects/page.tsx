
import Link from "next/link"
import Image from "next/image"
import timer from "@/public/timer.jpg"
import html from "@/public/html,css.jpg"
import resume1 from "@/public/resume1.jpg"
import login from "@/public/login page.jpg"
import final from "@/public/final-html.jpg"
import responsive from "@/public/responsiv.jpg"
import figma from "@/public/figma.jpg"
import instaram from "@/public/instagram ui.jpg"
import fashion from "@/public/fashion-website.jpg"

export default function Projects(){
    return(
      <>
       <div className="mt-[120px]  ">

       <h1 className="  scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl ml-10">
        Project portfolio highlights
        </h1>
        <p className="text-xl pt-3 text-muted-foreground ml-10">
        This section showcases the highlights of my project portfolio, featuring successfully designed projects along with deployment links
        </p>
        <div className="py-3 bg-[#1f1d1c] font-bold lg:w-full w-[350px] text-center text-white mt-[30px] text-[13px] md:text-[16px]">I have been working on website design for the past two months</div>
         </div>
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 px-8  md:mx-auto max-w-screen-lg mt-[50px] text-center">
      
          {/* 1 pic */}
          <div className="h-[300px] w-[300px] shadow-xl ">
          <Image className="mb-[10px]" src={timer} alt="pic" width={300} height={150}></Image>
          <h2><Link className=" font-bold text-[20px]" href={"https://countdown-timer-app-zeta.vercel.app/"}>Countdown Timer</Link></h2>
          <p className="mt-[5px] text-[#574b44] text-[15px] px-[10px]">I created a countdown timer using Next.js and Tailwind CSS.</p>
          </div>

          {/* resume pic */}
          <div className="h-[300px] w-[300px] shadow-xl">
          <Image className="mt-[5px] ml-[25px] " src={resume1} alt="pic" width={250} height={150}></Image>
          <h2><Link className=" font-bold text-[20px]" href={"https://milestone-04-woad.vercel.app/"}>Resume Builder</Link></h2>
          </div>

          {/* 3 pic */}
          <div className="h-[300px] w-[300px] shadow-xl">
          <Image className="mb-[20px]" src={login} alt="pic" width={300} height={150}></Image>
          <h2><Link className=" font-bold  text-[20px]" href={"https://login-page-design-three.vercel.app/"}>Login page desgin</Link></h2>
          <p className="mt-[5px] text-[#574b44] text-[15px] px-[10px]">I created it using HTML and CSS.</p>
          </div>
   

          {/* 4 pic */}
 
          <div className="h-[300px] w-[300px] shadow-xl">
          <Image className="mb-[35px]" src={final} alt="pic" width={300} height={150}></Image>
          <h2><Link className=" font-bold text-[20px] " href={"https://final-assignment-of-html-and-css.vercel.app/"}>Panacloud website</Link></h2>
          <p className="mt-[5px] text-[#574b44] text-[15px] px-[10px]">I created panacloud website using HTML and CSS.</p>
          </div>

         {/* 5 pic */}
         <div className="h-[300px] w-[300px] shadow-xl">
         <Image className="mb-[30px]" src={responsive} alt="pic" width={300} height={150}></Image>
         <h2><Link className=" font-bold text-[20px]" href={"https://responsive-website-project-using-html-css.vercel.app/"}>Responsive website</Link></h2>
         <p className="mt-[5px] text-[#574b44] text-[15px] px-[10px]">A responsive website has been created using HTML and CSS.</p>
         </div>

         {/* 6 pic */}
         <div className="h-[300px] w-[300px] shadow-xl">
         <Image className="mb-[20px]" src={figma} alt="pic" width={300} height={150}></Image>
         <h2><Link className=" font-bold text-[20px]" href={"https://assignment02-next-js-two.vercel.app/"}>Figma Desgin</Link></h2>
         <p className="mt-[5px] text-[#574b44] text-[15px] px-[10px]">A pixel-perfect design has been created using Figma.</p>
         </div>
         {/* 7 pic */}
    
        <div className="h-[300px] w-[300px] shadow-xl ">
        <Image className="mb-[20px]" src={instaram} alt="pic" width={300} height={150}></Image>
        <h2><Link className=" font-bold text-[20px]" href={"https://assignment02-next-js-two.vercel.app/"}>Instagram</Link></h2>
        <p className="mt-[5px] text-[#574b44] text-[15px] px-[10px]">Instagram UI using HTML and CSS. </p>
        </div>
        {/* 8 pic */}
        <div className="h-[300px] w-[300px] shadow-xl ">
        <Image className="mb-[20px]" src={fashion} alt="pic" width={300} height={150}></Image>
        <h2><Link className=" font-bold text-[20px]" href={"https://simple-fashion-website.vercel.app/"}>Fashion Website</Link></h2>
        <p className="mt-[5px] text-[#574b44] text-[15px] px-[10px]">I created a website using Next.js and Tailwind CSS.. </p>
        </div>

        {/* 9 pic */}
        <div className="h-[300px] w-[300px] shadow-xl">
        <Image className="mb-[20px]" src={html} alt="pic" width={300} height={150}></Image>
        <h2><Link className=" font-bold text-[20px]" href={"https://website-html-and-css-rho.vercel.app/"}>Simple Website</Link></h2>
        <p className="mt-[5px] text-[#574b44] text-[15px] px-[10px]">I created it using HTML and CSS.</p>
       </div>
       </div>

   </>
    )
  }
  