import { VT323 } from "next/font/google";
import Image from "next/image";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export default function AISummarizer() {
    return (
        <div className={vt323.className}>
            <div className= "flex items-start justify-start">
                <h1 className="text-[#e5e5e5]" style={{ fontSize: "clamp(30px, 2vw, 50px)" }}>AI Summarizer and Translator App</h1>
            </div>
            <div className= "flex flex-col items-center max-w-2xl mx-auto">
                <Image src="/gif/AiSummarizer.gif" alt="Mobile App GIF" width={150} height={150}/>
                <p className= "text-[#787878]" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}> 
                    This cross-platform mobile application built with React Native and Expo streamlines document processing through Artificial Intelligence.
                    The app allows users to seamlessly upload document from their local device and recieve automated summaries and translations. 
                    <br></br>
                    <br></br>
                    Key Features: 
                    <br></br>
                </p>
                <ul className="list-disc list-inside text-[#787878]" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    <li>Integrates "expo-document-picker" to handle various 
                        file types with real-time feedback on file name and size.</li>
                    <li>Utilizes Appwrite Functions as a serverless backend to handle 
                        heavy-lifting AI tasks, keeping the mobile client lightweight and fast.</li>
                    <li>Implements expo-file-system to securely read and transmit document data
                        to the cloud for analysis.</li>
                    <li>Features a dedicated results screen with integrated loading states, error
                        handling, and a clean, scrollable interface for reading AI-generated summaries.</li>
                    <li>Designed with a high-contrast "Midnight & Rose" theme, featuring platform-specific 
                        typography (Avenir Next/Roboto) for a premium native feel.</li>
                </ul>
                <p className= "text-[#787878] text-left w-full" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    <br></br>
                    Technical Stack:
                    <br></br>
                </p>
                <ul className="list-disc list-inside text-[#787878]" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    <li>Mobile frontend: React Native, Expo Router, Expo File System.</li>
                    <li>Backend Logic: Python (handling document analysis and AI integration).</li>
                    <li>Infrastructure: Appwrite (managing serverless function execution and project orchestration).</li>
                    <li>Data Handling: RESTful communication via JSON and Base64 string encoding.</li>
                </ul>
            </div>

        </div>
    );
}