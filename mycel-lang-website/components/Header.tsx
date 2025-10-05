"use client";

import Image from "next/image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const sectionName = pathname === "/" ? "" : pathname.split("/").pop()?.replace(/-/g, ' ') || "";
  const displayTitle = sectionName ? `Mycel Lang / ${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}` : "Mycel Lang";

  return (
    <header className="sticky top-0 z-10 bg-substrate/80 backdrop-blur-md border-b border-bedrock">
      <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group" title="Go to Mycel Lang homepage">
          <Image
            src="/logo.svg"
            alt="Mycel Logo"
            width={32}
            height={32}
            className="dark:block hidden transition-transform animate-breathe"
          />
          <Image
            src="/logo-dark.svg"
            alt="Mycel Logo"
            width={32}
            height={32}
            className="dark:hidden block transition-transform animate-breathe"
          />
          <span className="text-xl font-bold text-humus transition-colors group-hover:text-hyphae">{displayTitle}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/docs" title="Explore the Mycel Language documentation">Docs</NavLink>
          <NavLink href="/features" title="Discover Mycel's powerful features">Features</NavLink>
          <NavLink href="/community" title="Join the Mycel community">Community</NavLink>
          <NavLink href="/blog" title="Read the latest Mycel news and articles">Blog</NavLink>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

const NavLink = ({ href, children, title }: { href: string; children: React.ReactNode; title: string }) => {
  const targetHref = (href === "/docs" || href === "/style-guide") ? href : "/under-construction";
  return (
    <Link href={targetHref} className="relative text-humus hover:text-hyphae transition-colors group" title={title}>
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-hyphae transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );
};
