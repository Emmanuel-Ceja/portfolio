import { VT323 } from "next/font/google";
import Image from "next/image"

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export default function Portfolio() {
    return (
        <div className={vt323.className + " min-h-screen"}> 
           
            <div className= "flex items-start justify-start">
                <p className= "text-[#e5e5e5]" style={{ fontSize: "clamp(30px, 2vw, 50px)" }}>My Portfolio</p>
            </div>

            <div className= "grid grid-cols-3 min-h-[calc(100vh-100px)]">
                {/* AI Summarizer and Translator*/}
                <div className="flex flex-col items-center">
                    <p className="text-[#e5e5e5] text-center"> AI Summarizer and Translator App</p>
                    <Image src="/images/Mobile-App.jpeg" alt="Mobile App Image" width={100} height={100}/>
                    <p className="text-[#787878] text-center">Smart summaries and real-time translations powered by Gemini AI.</p>
                </div>
                {/* GUI Calculator Desktop App*/}
                <div className="flex flex-col items-center"> 
                    <p className="text-[#e5e5e5] text-center"> GUI Calculator</p>
                    <Image src="/images/GUI-Calculator.png" alt="GUI Calculator Image" width={228} height={228}/>
                    <p className="text-[#787878] text-center"> A lightweight GUI calculator designed using Qt Creator.</p>
                </div>

            </div>
        </div>
    )
}