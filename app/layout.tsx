import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= "flex min-h-screen bg-[#0f0f0f]">
        <div className= "flex flex-col bg-[#1a1a1a] w-14 items-center py-5 gap-15">
        
         <Link href="/">
          <button>
            <Image src="/icons/home.png" alt="Home" width={30} height={30}/>
          </button>
          </Link>
        
          <Link href="/portfolio">
           <button>
            <Image src="/icons/portfolio.png" alt="Portfolio" width={30} height={30}/>
           </button>
          </Link>

          <Link href="/contact">
            <button>
              <Image src="/icons/contact.png" alt="Contact" width={30} height={30}/>
            </button>
          </Link>
        </div>
      
        <main className= "flex-1">
        {children}
        </main>
      </body>
    </html>
  );
}
