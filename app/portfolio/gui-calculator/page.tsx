import { VT323 } from "next/font/google";
import Image from "next/image";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export default function GUICalculator() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return (
        <div className={vt323.className}>
            <div className="flex items-start justify-start">
                <h1 className="text-[#e5e5e5]" style={{ fontSize: "clamp(30px, 2vw, 50px)" }}>GUI Calculator</h1>
            </div>

            <div className= "flex flex-col items-center max-w-2xl mx-auto">
                <Image src={`${basePath}/gif/guiCalculator.gif`} alt="GUI Calculator GIF" width={250} height={150}/>
                <p className= "text-[#787878]" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    This desktop GUI calculator application, developed using C++ and Qt Creator, offers a user-friendly interface for performing basic arithmetic operations.
                    Unlike basic calculators that process operation sequentially, this application implements a full parsing engine to handle complex, multi-operator
                    strings including parentheses and floating-point numbers. The user interface is clean, organized, and designed for ease of use.
                    <br></br>
                    <br></br>
                    Key Features:
                </p>
                <ul className="list-disc list-inside text-[#787878]" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    <li>Users can input complete mathematical expressions rather than one operation at a time.</li>
                    <li>Includes dynamic parenthesis button that toggles between open and closed brackets on the input state.</li>
                    <li>Follows correct PEMDAS order of operations for accurate calculations.</li>
                    <li>Automatically detects and inserts multiplication operators when a number is placed directly before an opening parenthesis.</li>
                </ul>
                <p className= "text-[#787878] text-left w-full" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    <br></br>
                    Technical Stack:
                    <br></br>
                </p>
                <ul className="list-disc list-inside text-[#787878] text-left w-full" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    <li>Language: C++</li>
                    <li>GUI Framework: Qt</li>
                </ul>

            </div>
        </div>
    );
}