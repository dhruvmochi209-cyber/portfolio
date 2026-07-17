import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-neutral-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-neutral-200 dark:border-white/10 shadow-xl">
          <AlertCircle className="w-8 h-8 text-neutral-500 dark:text-neutral-400" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-600 tracking-tight mb-4">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto mb-8">
          The page you are looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        
        <Link 
          href="/"
          className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-sm hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] border-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient" />
          <span className="relative flex items-center gap-2 z-10 group-hover:text-white transition-colors duration-300">
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
