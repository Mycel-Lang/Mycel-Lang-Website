'use client'

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Or a placeholder button
  }

  return (
    <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="font-sans text-sm font-semibold py-2 px-4 rounded-md transition-colors bg-mantle text-humus border border-bedrock hover:bg-crust"
    >
        Switch to {theme === "dark" ? "Light" : "Dark"} Theme
    </button>
  )
}
