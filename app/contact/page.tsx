'use client';

import { VT323 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const email = "Emmanuelceja135@outlook.com";

    const handleClick = async () => {
        

        console.log("Button was clicked");

        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);

            console.log("Email copied to clipboard");
        } catch (err) {
            console.error("Failed to copy email: ", err);
        }
        
    }
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return (
        <div className={vt323.className + " min-h-screen"}>

            {/*Contact Me Text*/}
            <div className= " flex items-start justify-start">
                <h1 className="text-[#e5e5e5]" style={{ fontSize: "clamp(30px, 2vw, 50px)" }}>Contact Information</h1>
            </div>

            {/*link and email section*/}
            <div className= "flex items-center justify-center min-h-[calc(100vh-100px)]">

                <div className= "flex items-center justify-center">
                    <Link href="https://www.linkedin.com/in/emmanuel-ceja/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-[#787878] ml-2" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                        <Image src={`${basePath}/icons/linkedin.jpg`} alt="Linkedin" width={50} height={50} className= "rounded-full" style= {{ width: "clamp(20px, 5vw, 80px)", height: "clamp(20px, 5vw, 80px)" }}/>
                        Emmanuel-Ceja
                    </Link>
                    <button onClick={handleClick} className= "flex items-center justify-center text-[#787878] ml-2" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                        <Image src={`${basePath}/icons/email.jpg`} alt="Email" width={50} height={50} className= "rounded-full ml-4" style= {{ width: "clamp(20px, 5vw, 80px)", height: "clamp(20px, 5vw, 80px)" }}/>
                        {copied ? "Copied!" : email}
                    </button>
                    <Link href="https://github.com/Emmanuel-Ceja" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-[#787878] ml-2" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                        <Image src={`${basePath}/icons/github.png`} alt="Github" width={50} height={50} className= "rounded-full" style= {{ width: "clamp(20px, 5vw, 80px)", height: "clamp(20px, 5vw, 80px)" }}/>
                        Emmanuel-Ceja
                    </Link>
                </div>


            </div>
        </div>

    )
}