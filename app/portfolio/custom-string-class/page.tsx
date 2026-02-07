import { VT323 } from "next/font/google";
import Image from "next/image";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export default function CustomStringClass() {
    return (
        <div className={vt323.className}> 
            <div className= "flex items-start justify-start">
                <h1 className="text-[#e5e5e5]" style={{ fontSize: "clamp(30px, 2vw, 50px)" }}>Custom String Class</h1>
            </div>
            <div className= "flex flex-col items-center max-w-2xl mx-auto">
                <Image src="/portfolio/gif/customStringClass.gif" alt="Custom String Class GIF" width={400} height={150}/>
            </div>
        </div>

    );
}