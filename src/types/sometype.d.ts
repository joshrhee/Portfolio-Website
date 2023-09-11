import { projectsData } from "@/lib/data";
import { links } from "@/lib/data";

export type SectionNameType = (typeof links)[number]["name"];

export type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

export type ActiveSectionContextType = {
    activeSection: SectionNameType;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionNameType>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type ProjectProps = (typeof projectsData)[number];

export type useSectionInViewProps = {
    sectionName: SectionNameType;
};

export type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export type ThemeContextProviderProps = {
    children: React.ReactNode;
};
