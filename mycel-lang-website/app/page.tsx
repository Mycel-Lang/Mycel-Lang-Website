import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { AnimateInView } from "@/components/AnimateInView";
import { LanguageComparisonTable } from "@/components/LanguageComparisonTable";
import { highlight } from "@/components/SyntaxHighlighter";
import {
  Atom,
  Braces,
  Code,
  FileText,
  GitFork,
  Globe,
  Lock,
  Sparkles,
  Github,
  Twitter,
  MessageSquare,
} from "lucide-react";

export default async function Home() {
  const comparisonData = {
    features: [
      "Basic Formatting",
      "Footnotes & Citations",
      "Advanced Lists",
      "Side Notes (Marginella)",
      "Transclusion (Linking)",
    ],
    rows: await Promise.all([
      {
        mycel: highlight("*Bold* & _Italic_", "mycel"),
        markdown: highlight("**Bold** or __Bold__ & *Italic* or _Italic_", "markdown"),
        rendered: "<strong>Bold</strong> & <em>Italic</em>",
      },
      {
        mycel: highlight("Text[^1]. And an inline note.^[Note text]", "mycel"),
        markdown: highlight("Text[^1]. (Inline requires HTML or is unsupported)", "markdown"),
        rendered: "Text<sup>1</sup>. And an inline note.<sup>2</sup>",
      },
      {
        mycel: highlight("- Item 1 [^a]\n  | Continued text\n- Item 2", "mycel"),
        markdown: highlight("- Item 1 [^a]\n\n  Continued text is harder\n- Item 2", "markdown"),
        rendered: "<ul><li>Item 1 <sup><a href='#'>a</a></sup><br/>Continued text</li><li>Item 2</li></ul>",
      },
      {
        mycel: highlight("Main text. >> A note in the margin.", "mycel"),
        markdown: highlight("(No direct equivalent)", "markdown"),
        rendered: "<div style='display: flex; justify-content: space-between; align-items: center;'><span>Main text.</span><aside style='opacity: 0.7; font-style: italic;'>A note in the margin.</aside></div>",
      },
      {
        mycel: highlight("See details in [./file#Heading]", "mycel"),
        markdown: highlight("See details in [file.md#heading-slug](file.md#heading-slug)", "markdown"),
        rendered: "See details in <a>file#Heading</a>",
      },
    ].map(async (row) => ({
      mycelCodeHtml: await row.mycel,
      markdownCodeHtml: await row.markdown,
      renderedOutput: row.rendered,
    }))),
  };
  return (
    <div className="bg-substrate font-inter text-humus h-screen flex flex-col overflow-hidden">
      <Header />

      <main className="flex-grow overflow-y-scroll">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center bg-mantle border-b border-bedrock w-full relative">
          <AnimateInView>
            <div className="max-w-5xl mx-auto px-4 text-center w-full">
              <h1 className="text-4xl md:text-6xl font-bold font-heading text-mycelium leading-tight mb-4">
                Mycel: Form is Function.
              </h1>
              <p className="text-lg md:text-xl text-loam max-w-3xl mx-auto mb-8">
                The Markup Language for Serious Documentation. Unambiguous syntax,
                powerful WASM plugins, and a secure, predictable ecosystem.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/under-construction" passHref>
                  <button className="btn btn--primary">Get Started</button>
                </Link>
                <Link href="/style-guide" passHref>
                  <button className="btn btn--secondary">Style Guide</button>
                </Link>
              </div>
            </div>
          </AnimateInView>
        </section>

        {/* Feature Highlights Section */}
        <section className="min-h-screen flex items-center bg-substrate w-full">
          <AnimateInView>
            <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 w-full">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-mycelium">
                Why Mycel?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Braces className="size-8 text-hyphae" />}
                  title="Unambiguous Syntax"
                  description="A strict, predictable grammar eliminates parsing ambiguities and ensures consistent rendering across all platforms."
                />
                <FeatureCard
                  icon={<Atom className="size-8 text-lichen" />}
                  title="WASM-Powered Extensibility"
                  description="Extend Mycel with high-performance, sandboxed functions written in any language that compiles to WebAssembly."
                />
                <FeatureCard
                  icon={<Lock className="size-8 text-amanita" />}
                  title="Secure by Design"
                  description="A 'Walled Garden' security model with explicit permissions for network and filesystem access, protecting your projects."
                />
                <FeatureCard
                  icon={<FileText className="size-8 text-indigo" />}
                  title="Rich Documentation"
                  description="Native support for complex tables, footnotes, citations, and cross-references, ideal for academic and technical writing."
                />
                <FeatureCard
                  icon={<GitFork className="size-8 text-chitin" />}
                  title="Single Source of Truth"
                  description="Include content from other files or specific blocks, ensuring consistency and reducing duplication across your documents."
                />
                <FeatureCard
                  icon={<Sparkles className="size-8 text-spore" />}
                  title="Elegant Design System"
                  description="Built on the Substrate Design System, Mycel documents are beautiful, readable, and meticulously crafted."
                />
              </div>
            </div>
          </AnimateInView>
        </section>

        {/* Language Overview Section */}
        <section className="min-h-screen flex items-center bg-mantle border-t border-b border-bedrock w-full">
          <AnimateInView>
            <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 w-full">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-mycelium">
                Mycel vs. Markdown
              </h2>
              <LanguageComparisonTable rows={comparisonData.rows} features={comparisonData.features} />
            </div>
          </AnimateInView>
        </section>

        {/* Call to Action / Community Section */}
        <section className="min-h-screen flex items-center bg-substrate w-full">
          <AnimateInView>
            <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center w-full">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-mycelium mb-6">
                Join the Mycel Guild
              </h2>
              <p className="text-lg text-loam max-w-3xl mx-auto mb-8">
                Become a "leaf admirer" and help shape the future of documentation.
                Explore our docs, contribute to the project, or join our community.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/docs" passHref>
                  <button className="btn btn--primary">Read the Docs</button>
                </Link>
                <a
                  href="https://github.com/mycel-lang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn--secondary">GitHub</button>
                </a>
              </div>
            </div>
          </AnimateInView>
        </section>

        {/* Footer */}
        <footer className="min-h-screen flex items-center justify-center bg-mantle border-t border-bedrock py-8 text-center text-loam text-sm">
          <div className="max-w-5xl mx-auto px-4 w-full">
            <p className="mb-4">&copy; {new Date().getFullYear()} Mycel Lang. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-2">
              <a href="https://github.com/mycel-lang" target="_blank" rel="noopener noreferrer" title="Mycel Lang GitHub">
                <Github className="size-6 text-humus hover:text-hyphae transition-all duration-200 transform hover:scale-110 hover:-translate-y-0.5 active:scale-95" />
              </a>
              <a href="https://twitter.com/mycel_lang" target="_blank" rel="noopener noreferrer" title="Mycel Lang on Twitter">
                <Twitter className="size-6 text-humus hover:text-hyphae transition-all duration-200 transform hover:scale-110 hover:-translate-y-0.5 active:scale-95" />
              </a>
              <a href="https://discord.gg/mycel-lang" target="_blank" rel="noopener noreferrer" title="Mycel Lang Discord">
                <MessageSquare className="size-6 text-humus hover:text-hyphae transition-all duration-200 transform hover:scale-110 hover:-translate-y-0.5 active:scale-95" />
              </a>
            </div>
            <div className="flex justify-center gap-4 mt-4">
                          <Link href="/under-construction" className="hover:underline">
                            Privacy Policy
                          </Link>
                          <Link href="/under-construction" className="hover:underline">
                            Terms of Service
                          </Link>            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Helper Component for Feature Cards
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-crust p-6 rounded-lg border border-bedrock flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-humus mb-2">{title}</h3>
      <p className="text-loam">{description}</p>
    </div>
  );
};