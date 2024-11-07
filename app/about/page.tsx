import Image from "next/image"
import pic from "@/public/picc.jpg"

export default function About(){
  return(
    <section className="flex flex-col  items-center md:mt-[150px] mt-[100px] md:flex-row ">
    
      <div className="md:ml-[300px] ml:[10px] md:pr-[50px] p-[10px]">
        <h1 className=" font-bold text-[40px] ">About</h1>
        <h1 className="  text-red-600 text-[20px] ">Get to know me! </h1>
        <p className=" md:pt-[15px] text-[15px]">I am a passionate front-end developer with a strong background in web development.</p>
        <p className="pt-[5px] text-[15px]">My journey began in February 2024, and since then, I have had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving</p>
        <p className="pt-[5px] text-[15px]"> My goal is to continuously improve my coding techniques and deliver high-quality projects that enhance user experience.</p>
        </div>
        <div className="md:mr-[250px] mr-[50px] mt-8">
        <Image className="md:h-[250px] md:w-[680px] h-[250px] w-[250px] rounded-full" src={pic} alt="profile pic"/>
    </div>
    </section>
  )
}
   