import { Silkscreen } from "next/font/google";
import { VT323 } from "next/font/google";
import Image from "next/image";

const silkscreen = Silkscreen ({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() { 
  return (
    
    <div className={silkscreen.className + " flex justify-between items-center min-h-screen px-10"}>

      {/* Text Section */}
      <div className= "text-center text-[#787878]">
        <p className= " text-[#e5e5e5] text-[clamp(40px,5vw,80px)]">My Projects</p>
        <p className= "text-[clamp(16px, 1.8vw, 35px)]">Hi, I am Emmanuel Ceja, im a</p>
        <p className= "text-[clamp(16px, 1.8vw, 35px)]">computer science student who </p>
        <p className= "text-[clamp(16px, 1.8vw, 35px)]">likes turning ideas into</p>
        <p className= "text-[clamp(16px, 1.8vw, 35px)]">working applications.</p>
      </div>
    
    
    {/*Tech Stack Section*/}
     <div className= "grid grid-cols-2 gap-4">
      <Image src="/icons/c++.jpg" alt="C++" width={150} height={150} className= "rounded-full w-[clamp(80px, 8vw, 180px)] h-[clamp(80px, 8vw, 180px)]"/>
      <Image src="/icons/python.png" alt="Python" width={150} height={150} className= "rounded-full w-[clamp(80px, 8vw, 180px)] h-[clamp(80px, 8vw, 180px)]"/>
      <Image src="/icons/typescript.jpg" alt="TypeScript" width={150} height={150} className= "rounded-full w-[clamp(80px, 8vw, 180px)] h-[clamp(80px, 8vw, 180px)]"/>
      <Image src="/icons/nextjs.jpg" alt="Next.js" width={150} height={150} className= "rounded-full w-[clamp(80px, 8vw, 180px)] h-[clamp(80px, 8vw, 180px)]"/>
      </div>

    </div>
  )
}
