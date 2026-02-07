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
    return (
        <div className={vt323.className + " min-h-screen"}>

            {/*Contact Me Text*/}
            <div className= " flex items-start justify-start">
                <h1 className="text-[#e5e5e5]" style={{ fontSize: "clamp(30px, 2vw, 50px)" }}>Contact Information</h1>
            </div>

            {/*link and email section*/}
            <div className= "flex items-center justify-center min-h-[calc(100vh-100px)]">

                <div className= "flex items-center justify-center">
                    <Image src="/portfolio/icons/linkedin.jpg" alt="Linkedin" width={50} height={50} className= "rounded-full" style= {{ width: "clamp(20px, 5vw, 80px)", height: "clamp(20px, 5vw, 80px)" }}/>
                    <Link href="https://www.linkedin.com/in/emmanuel-ceja/" target="_blank" rel="noopener noreferrer" className="text-[#787878] ml-2" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}> 
                        Emmanuel-Ceja
                    </Link>
                
                    <Image src="/portfolio/icons/email.jpg" alt="Email" width={50} height={50} className= "rounded-full ml-4" style= {{ width: "clamp(20px, 5vw, 80px)", height: "clamp(20px, 5vw, 80px)" }}/>
                    <button onClick={handleClick} className= "text-[#787878] ml-2" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                        {copied ? "Copied!" : email}
                    </button>
                </div>


            </div>
        </div>

    )
}