import Button from "./components/Button"
import Image from "next/image"
import logo from "../public/picc.jpg"

export default function Home(){
  return(
    <section className="flex flex-col md:items-center md:mt-[170px] md:ml-[250px] md:flex-row ">
      <div>
        <Image className="md:h-[250px] md:w-[800px] h-[250px] w-[250px] mt-[150px] shadow-2xl  md:mt-[30px] mb-[50px] rounded-full" src={logo} alt="profile pic"/>
      </div>
      <div className="md:ml-[100px] px-[10px]">
        <h1 className="uppercase font-bold text-[30px] ">front-end developer</h1>
        <h1 className="text-[20px] pt-[15px]">Hi, I&apos;m <span className="text-[red]">Nisha Nazar</span></h1>
        <p className="md:pr-[250px] pt-[15px] text-[15px]">I am a passionate Front-End Developer with expertise in creating visually appealing, responsive, and user-friendly web applications using HTML, CSS, and JavaScript. I strive to build seamless user experiences and continuously learn new technologies to improve my skills.</p>
       <Button/>
      </div>
    </section>
  )
}