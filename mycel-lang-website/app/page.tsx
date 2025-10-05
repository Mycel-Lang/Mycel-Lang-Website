import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { LanguageComparisonTable } from "@/components/LanguageComparisonTable";
import {highlight} from "@/components/SyntaxHighlighter";
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
    Youtube,
    Twitch,
    LucideBadgeX,
} from "lucide-react";
import {AnimateInView} from "@/components/AnimateInView";

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

            <main className="flex-grow overflow-y-scroll">
        {/* Hero Section */}
        <HeroSection />

                {/* Feature Highlights Section */}
                <section className="min-h-screen flex items-center bg-substrate w-full">
                    <AnimateInView>
                        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 w-full">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-mycelium">
                                Why Mycel?
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <FeatureCard
                                    icon={<Braces className="size-8 text-hyphae"/>}
                                    title="Unambiguous Syntax"
                                    description="A strict, predictable grammar eliminates parsing ambiguities and ensures consistent rendering across all platforms."
                                />
                                <FeatureCard
                                    icon={<Atom className="size-8 text-lichen"/>}
                                    title="WASM-Powered Extensibility"
                                    description="Extend Mycel with high-performance, sandboxed functions written in any language that compiles to WebAssembly."
                                />
                                <FeatureCard
                                    icon={<Lock className="size-8 text-amanita"/>}
                                    title="Secure by Design"
                                    description="A 'Walled Garden' security model with explicit permissions for network and filesystem access, protecting your projects."
                                />
                                <FeatureCard
                                    icon={<FileText className="size-8 text-indigo"/>}
                                    title="Rich Documentation"
                                    description="Native support for complex tables, footnotes, citations, and cross-references, ideal for academic and technical writing."
                                />
                                <FeatureCard
                                    icon={<GitFork className="size-8 text-chitin"/>}
                                    title="Single Source of Truth"
                                    description="Include content from other files or specific blocks, ensuring consistency and reducing duplication across your documents."
                                />
                                <FeatureCard
                                    icon={<Sparkles className="size-8 text-spore"/>}
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
                            <LanguageComparisonTable rows={comparisonData.rows} features={comparisonData.features}/>
                        </div>
                    </AnimateInView>
                </section>

                {/* Call to Action / Community Section */}
                <section className="min-h-screen flex items-center bg-substrate w-full">
                    <AnimateInView>
                        <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 text-center w-full">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-mycelium mb-6">
                                Join the Garden
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
                <footer className="bg-mantle border-t border-bedrock text-sm text-loam">
                    <div className="max-w-5xl mx-auto px-4 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
                            {/* Column 1: Brand */}
                            <div className="flex flex-col items-center md:items-start space-y-4">
                                <Link href="/" className="flex items-center gap-3 group">
                                    <Image src="/logo.svg" alt="Mycel Logo" width={28} height={28} className="dark:block hidden"/>
                                    <Image src="/logo-dark.svg" alt="Mycel Logo" width={28} height={28} className="dark:hidden block"/>
                                    <span className="text-lg font-bold text-humus">Mycel Lang</span>
                                </Link>
                                <p className="text-xs max-w-xs">
                                    The Markup Language where Form is function.
                                </p>
                            </div>

                            {/* Column 2: Navigate */}
                            <div>
                                <h3 className="font-semibold text-humus mb-4">Navigate</h3>
                                <ul className="space-y-2">
                                    <li><Link href="/docs" className="hover:text-hyphae hover:underline">Docs</Link></li>
                                    <li><Link href="/style-guide" className="hover:text-hyphae hover:underline">Style Guide</Link></li>
                                    <li><Link href="/features" className="hover:text-hyphae hover:underline">Features</Link></li>
                                    <li><Link href="/blog" className="hover:text-hyphae hover:underline">Blog</Link></li>
                                </ul>
                            </div>

                            {/* Column 3: Community */}
                            <div>
                                <h3 className="font-semibold text-humus mb-4">Community</h3>
                                <ul className="space-y-2">
                                    <li><a href="https://github.com/mycel-lang" target="_blank" rel="noopener noreferrer" className="hover:text-hyphae hover:underline">GitHub</a></li>
                                    <li><a href="https://x.com/MycelLang" target="_blank" rel="noopener noreferrer" className="hover:text-hyphae hover:underline">X / Twitter</a></li>
                                </ul>
                            </div>

                            {/* Column 4: Author */}
                            <div>
                                <h3 className="font-semibold text-humus mb-4">Author</h3>
                                <ul className="space-y-2">
                                    <li><a href="https://github.com/ImTheShrub" target="_blank" rel="noopener noreferrer" className="hover:text-hyphae hover:underline">GitHub</a></li>
                                    <li><a href="https://x.com/ImTheShrub" target="_blank" rel="noopener noreferrer" className="hover:text-hyphae hover:underline">X / Twitter</a></li>
                                    <li><a href="https://www.youtube.com/@ImTheShrub" target="_blank" rel="noopener noreferrer" className="hover:text-hyphae hover:underline">YouTube</a></li>
                                    <li><a href="https://www.twitch.tv/imtheshrublive" target="_blank" rel="noopener noreferrer" className="hover:text-hyphae hover:underline">Twitch</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Sub-footer */}
                        <div className="mt-12 pt-8 border-t border-bedrock flex flex-col sm:flex-row justify-between items-center">
                            <p className="text-xs">&copy; {new Date().getFullYear()} Mycel Lang. All rights reserved.</p>
                            <div className="flex gap-4 mt-4 sm:mt-0">
                                <Link href="/under-construction" className="text-xs hover:underline">Privacy Policy</Link>
                                <Link href="/under-construction" className="text-xs hover:underline">Terms of Service</Link>
                            </div>
                        </div>
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
        <div
            className="bg-crust p-6 rounded-lg border border-bedrock flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-humus mb-2">{title}</h3>
            <p className="text-loam">{description}</p>
        </div>
    );
};