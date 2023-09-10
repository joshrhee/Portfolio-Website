"use client";

import React, { useState, useCallback, createContext } from "react";
import type {
    SectionNameType,
    ActiveSectionContextType,
    ActiveSectionContextProviderProps
} from "@/types/sometype";

export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionNameType>("Home");
    // we need to keep track of this to do disable the observer temporaily when user clicks on a link
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}
