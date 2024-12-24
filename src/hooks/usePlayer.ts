import { PlayerContext } from "@/contexts/playerContext";
import { useContext } from "react";

export function usePlayer() {
    return useContext(PlayerContext);
}
