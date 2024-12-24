"use client"

import { PlayerProvider } from "@/contexts/playerContext";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
    return (
        <PlayerProvider>
            {children}
        </PlayerProvider>        
    )
}
