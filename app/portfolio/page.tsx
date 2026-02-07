import { VT323 } from "next/font/google";
import Image from "next/image"
import Link from "next/link";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export default function Portfolio() {
    return (
        <div className={vt323.className + " min-h-screen"}> 
           
            <div className= "flex items-start justify-start">
                <h1 className= "text-[#e5e5e5]" style={{ fontSize: "clamp(30px, 2vw, 50px)" }}>My Portfolio</h1>
            </div>

            <div className= "grid grid-cols-3 gap-4">
                {/* AI Summarizer and Translator*/}
                <Link href="/portfolio/ai-summarizer">
                    <div className="flex flex-col items-center border-2 border-[#e5e5e5] rounded-lg">
                        <p className="text-[#e5e5e5] text-center"> AI Summarizer and Translator App</p>
                        <Image src="/portfolio/images/Mobile-App.jpeg" alt="Mobile App Image" width={100} height={100}/>
                        <p className="text-[#787878] text-center">Smart summaries and real-time translations powered by Gemini AI.</p>
                    </div>
                </Link>
                {/* GUI Calculator Desktop App*/}
                <Link href="/portfolio/gui-calculator">
                    <div className="flex flex-col items-center border-2 border-[#e5e5e5] rounded-lg"> 
                        <p className="text-[#e5e5e5] text-center"> GUI Calculator</p>
                        <Image src="/portfolio/images/GUI-Calculator.png" alt="GUI Calculator Image" width={228} height={228}/>
                        <p className="text-[#787878] text-center"> A lightweight GUI calculator designed using Qt Creator.</p>
                    </div>
                </Link>
                {/* Custom String Class */}
                <Link href="/portfolio/custom-string-class">
                    <div className= "flex flex-col items-center border-2 border-[#e5e5e5] rounded-lg"> 
                        <p className="text-[#e5e5e5] text-center"> Custom String Class in C++</p>
                        <Image src="/portfolio/images/custom-string-class.png" alt="Custom String Class Image" width={163} height={228}/>
                        <p className="text-[#787878] text-center"> A custom implementation of a string class in C++ with overloaded operators and memory management.</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}