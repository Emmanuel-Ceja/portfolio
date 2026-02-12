import { VT323 } from "next/font/google";
import Image from "next/image";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export default function CustomStringClass() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return (
        <div className={vt323.className}> 
            <div className= "flex items-start justify-start">
                <h1 className="text-[#e5e5e5]" style={{ fontSize: "clamp(30px, 2vw, 50px)" }}>Custom String Class</h1>
            </div>
            <div className= "flex flex-col items-center max-w-2xl mx-auto">
                <Image src={`${basePath}/gif/customStringClass.gif`} alt="Custom String Class GIF" width={400} height={150}/>
                <p className= "text-[#787878]" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}> 
                    A high-performance C++ library featuring a custom String class (ECString) and a sorted
                    doubly linked list implementation. It focuses on low-level memory management, operator overloading,
                    and efficient data traversal.
                    <br></br>
                    <br></br>
                    Key Features: 
                    <br></br>
                </p>
                <ul className="list-disc list-inside text-[#787878]" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    <li>Implemented custom constructors, copy constructors, assignment operators, and destructor
                        to prevent memory leaks and ensure deep copying.</li>
                    <li>Integrated static counters to monitor the real-time lifecycle of objects, tracking total
                        allocations versus active instances.</li>
                    <li> Enchanced usability by overloading +, [], &lt;&lt;, &gt;&gt;, and comparison operators, allowing custom objects
                    to behave like native C++ types.</li>
                    <li>Built a robust doubly linked list that maintains sorted order upon insertion, featuring a custom iterator
                        pattern for seamless traversal.</li>
                    <li>Developed a custom "compareTo" algorithm that handles case-insensitivity and filters punctuation, ensuring accurate
                        alphabetical sorting for text analysis.</li>
                </ul>
                <p className= "text-[#787878] text-left w-full" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    <br></br>
                    Technical Stack:
                    <br></br>
                </p>
                <ul className="list-disc list-inside text-[#787878]" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    <li>Language: C++</li>
                    <li>Concept: Object-Oriented Progamming (OOP), dynamic memory allocation, pointer arithmetic, data structures.</li>
                </ul>
            </div>
        </div>

    );
}