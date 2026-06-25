import type { ReactNode } from 'react';
export declare function SectionHeader({ index, label, title, text }: {
    index: string;
    label: string;
    title: ReactNode;
    text?: string;
}): import("react").JSX.Element;
export declare function ArrowLink({ to, children, light }: {
    to: string;
    children: ReactNode;
    light?: boolean;
}): import("react").JSX.Element;
export declare function PageHero({ code, index, title, lead }: {
    code: string;
    index: string;
    title: ReactNode;
    lead: string;
}): import("react").JSX.Element;
export declare function FinalCTA(): import("react").JSX.Element;
