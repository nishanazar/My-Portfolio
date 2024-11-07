import Link from "next/link"

export default function Button(){
    return(
        <div>
            <button className="bg-[#c2441d] hover:bg-[#d57c61] h-[40px] w-[150px] shadow-xl text-[white] font-bold rounded-2xl mt-[20px]"><Link href="/projects">Projects</Link> </button>
        </div>
    )
} 