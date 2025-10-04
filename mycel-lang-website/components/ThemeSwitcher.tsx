'use client'

import * as React from "react"
import { useTheme } from "next-themes"
import { ThemeToggleButton, useThemeTransition } from "@/components/ui/shadcn-io/theme-toggle-button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const { startTransition } = useThemeTransition();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Or a placeholder button
  }

  return (
    <ThemeToggleButton
      theme={theme as "light" | "dark"}
      variant="circle" // Or "circle-blur" for a slightly different effect
      start="top-right"
      onClick={() => {
        startTransition(() => {
          setTheme(theme === "dark" ? "light" : "dark");
        });
      }}
    />
  )
}
