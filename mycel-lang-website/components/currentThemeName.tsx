"use client";
import { useTheme } from "next-themes";

export function CurrentThemeLabel():string | null {
    const { theme } = useTheme();
    if (!theme) return null;
    return `Currently viewing: ${theme === 'dark' ? 'Mycena (Dark)' : 'Evernia (Light)'}`;
}
