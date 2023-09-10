import { ActiveSectionContext } from "@/context/active-section-context";
import { useContext } from "react";

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSectionContext muse be used with an ActiveSectionProvider"
        );
    }

    return context;
};
