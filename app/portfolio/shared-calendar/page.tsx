import { VT323 } from "next/font/google";
import Image from "next/image";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export default function SharedCalendar() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return (
        <div className={vt323.className}>
            <div className= "flex items-start justify-start">
                <h1 className="text-[#e5e5e5]" style={{ fontSize: "clamp(30px, 2vw, 50px)" }}>Shared Calendar Web Application</h1>
            </div>
            <div className= "flex flex-col items-center max-w-2xl mx-auto">
                <Image src={`${basePath}/gif/sharedCalendar.gif`} alt="Shared Calendar GIF" width={800} height={150}/>
                <p className= "text-[#787878]" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}> 
                    This shared calendar web application is built using Next.js, Google Calendar API, and SupaBase. It allows partners to manage events collaboratively, 
                    providing a seamless experience for scheduling and organizing activities. The application leverages the power of modern web technologies to ensure 
                    real-time updates and efficient data management. 
                    <br></br>
                    <br></br>
                    Key Features: 
                    <br></br>
                </p>
                <ul className="list-disc list-inside text-[#787878]" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    <li>Real-time event synchronization across sessions via SupaBase.</li>
                    <li>Google Calendar API integration for bidirectional event sync; create/delete events directly in the app or Google Calendar.</li>
                    <li>OAuth 2.0 authentication with NextAuth for secure per-user session management and Google access.</li>
                    <li>Multi-day and all-day event support with proper date range handling across week boundaries on both desktop and mobile.</li>
                    <li>Color-coded events (blue/pink) and event type (purple for date nights); bulk import from Google Calendar with automatic duplicate prevention</li>
                </ul>
                <p className= "text-[#787878] text-left w-full" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    <br></br>
                    Technical Stack:
                    <br></br>
                </p>
                <ul className="list-disc list-inside text-[#787878]" style= {{ fontSize: "clamp(16px, 2vw, 30px)" }}>
                    <li>Frontend: Next.js, TypeScript, React, Tailwind CSS, FullCalendar.</li>
                    <li>Backend: Next.js API Routes, Node.js.</li>
                    <li>Database: Supabase (PostgreSQL).</li>
                    <li>Authentication: NextAuth.js with Google OAuth 2.0.</li>
                    <li>APIs: Google Calendar API for event synchronization.</li>
                    <li>Deployment: Vercel with automatic CI/CD from GitHub</li>
                </ul>
            </div>

        </div>
    );
}