'use client';

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="inline-flex items-center" suppressHydrationWarning>
      <SignedOut>
        <Link 
          href="/sign-in" 
          className="group inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-white/10"
          suppressHydrationWarning
        >
          <User className="w-5 h-5 text-current transition-transform group-hover:scale-110" />
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton 
          appearance={{ 
            elements: { 
              userButtonAvatarBox: { 
                width: "36px",
                height: "36px",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
              },
              userButtonPopoverCard: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px"
              }
            } 
          }} 
        />
      </SignedIn>
    </div>
  );
}