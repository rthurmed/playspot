"use client";

import { createContext, PropsWithChildren, useState } from "react";

interface IPlayerContext {
    songID?: string;
    setSongID: (value: string | undefined) => void;
}

export const PlayerContext = createContext<IPlayerContext | undefined>(undefined);

export function PlayerProvider({ children }: PropsWithChildren) {
    const [songID, setSongID] = useState<string | undefined>(undefined);
    return (
        <PlayerContext.Provider
            value={{
                songID,
                setSongID
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}
