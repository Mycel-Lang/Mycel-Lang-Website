"use client";

import {useTheme} from "next-themes";
import {JSX, useEffect, useState} from "react";

// --- Helper Components ---

const Section = ({icon, title, description, children}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    children: React.ReactNode;
}) => (
    <section className="py-16 border-b border-bedrock">
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4">
                <div className="text-hyphae">{icon}</div>
                <h2 className=" text-3xl font-bold text-mycelium">{title}</h2>
            </div>
            <p className="mt-2 text-loam max-w-3xl">{description}</p>
            <div className="mt-10">{children}</div>
        </div>
    </section>
);

const ColorCard = ({name, hex, role}: { name: string; hex: string; role: string; }) => (
    <div className="flex items-center gap-4 p-4 bg-mantle rounded-lg border border-bedrock">
        <div
            className="w-16 h-16 rounded-md border border-crust flex-shrink-0"
            style={{backgroundColor: hex}}
        />
        <div>
            <h4 className="font-mono font-semibold text-humus">{name}</h4>
            <p className="font-mono text-sm text-loam">{hex.toUpperCase()}</p>
            <p className="text-xs text-loam mt-1">{role}</p>
        </div>
    </div>
);

const TypeSpecimen = ({
                          element: Element = "p",
                          name,
                          font,
                          className,
                          details
                      }: {
    element?: keyof JSX.IntrinsicElements;
    name: string;
    font: string;
    className: string;
    details: string;
}) => (
    <div className="py-4">
        <Element className={`${className} text-humus`}>
            The quick brown fox jumps over
        </Element>
        <div className="flex items-baseline justify-between mt-2">
            <p className="font-mono text-sm text-loam">{name}</p>
            <p className="font-mono text-xs text-loam text-right">{font} / {details}</p>
        </div>
    </div>
);

const PaletteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                               className="w-8 h-8">
    <path
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10c.34 0 .67-.02 1-.05-.33-1.42-.2-2.9.39-4.26 1.2-2.74 4.06-4.69 7.48-4.69.13 0 .26 0 .39.02C20.56 5.2 16.65 2 12 2zm0 4c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm.25 8.25l-2.5-2.5 1.41-1.41 1.09 1.09 2.59-2.59L16.25 8 12.25 12z"/>
</svg>;
const TypographyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                  className="w-8 h-8">
    <path
        d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.18z"/>
</svg>;
const ComponentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-8 h-8">
    <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/>
</svg>;

// --- Main Page Component ---

export default function StyleGuidePage() {
    const { theme } = useTheme();
    const [, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);


    const tones = {
        light: [
            {name: "Substrate", hex: "#FBF9F4", role: "The main app background or canvas."},
            {name: "Mantle", hex: "#F5F2E9", role: "UI surfaces like sidebars and panels."},
            {name: "Crust", hex: "#E9E5D9", role: "Interactive surfaces like hovered items."},
            {name: "Bedrock", hex: "#D2CCBC", role: "Borders, dividers, and keylines."},
            {name: "Humus", hex: "#433F38", role: "Primary text for content and labels."},
            {name: "Loam", hex: "#857F72", role: "Secondary text for metadata and comments."},
        ],
        dark: [
            {name: "Substrate", hex: "#191C23", role: "The main app background or canvas."},
            {name: "Mantle", hex: "#232731", role: "UI surfaces like sidebars and panels."},
            {name: "Crust", hex: "#3A404E", role: "Interactive surfaces like hovered items."},
            {name: "Bedrock", hex: "#2D323E", role: "Borders, dividers, and keylines."},
            {name: "Humus", hex: "#E3E7F0", role: "Primary text for content and labels."},
            {name: "Loam", hex: "#7C849A", role: "Secondary text for metadata and comments."},
        ],
    };

    const syntaxColors = {
        light: [
            {name: "Mycelium", hex: "#4C566A", role: "Primary identifiers, class names."},
            {name: "Hyphae", hex: "#5E8D87", role: "Functions, types, action-oriented items."},
            {name: "Lichen", hex: "#7A8754", role: "Strings and data-centric values."},
            {name: "Indigo", hex: "#8F7C97", role: "Control flow keywords (if, else, for)."},
            {name: "Mauve", hex: "#A86F7E", role: "Operators and module statements (import)."},
            {name: "Amanita", hex: "#B45B5B", role: "Special constants (true, false, null)."},
            {name: "Chitin", hex: "#C47A4F", role: "Numbers and function parameters."},
            {name: "Spore", hex: "#D0A048", role: "Decorators, annotations, metadata."},
        ],
        dark: [
            {name: "Mycelium", hex: "#FFFFFF", role: "Primary identifiers, class names."},
            {name: "Hyphae", hex: "#79E6F3", role: "Functions, types, action-oriented items."},
            {name: "Lichen", hex: "#A2E07B", role: "Strings and data-centric values."},
            {name: "Indigo", hex: "#C792EA", role: "Control flow keywords (if, else, for)."},
            {name: "Mauve", hex: "#F087BD", role: "Operators and module statements (import)."},
            {name: "Amanita", hex: "#F47171", role: "Special constants (true, false, null)."},
            {name: "Chitin", hex: "#FCA778", role: "Numbers and function parameters."},
            {name: "Spore", hex: "#F7D97F", role: "Decorators, annotations, metadata."},
        ],
    };

    const semanticColors = {
        light: [
            {name: "Success", hex: "#72A96C", role: "Positive confirmation, passing tests."},
            {name: "Warning", hex: "#DAAD53", role: "Cautionary feedback, linter warnings."},
            {name: "Error", hex: "#CF5C5C", role: "Critical failures, errors, invalid fields."},
            {name: "Info", hex: "#58A398", role: "Neutral information, active item highlight."},
        ],
        dark: [
            {name: "Success", hex: "#82E05A", role: "Positive confirmation, passing tests."},
            {name: "Warning", hex: "#FADE5A", role: "Critical failures, errors, invalid fields."},
            {name: "Info", hex: "#5AC8FA", role: "Neutral information, active item highlight."},
            {name: "Error", hex: "#FA5050", role: "Critical failures, errors, invalid fields."},
        ],
    };

    const currentTones = theme === 'dark' ? tones.dark : tones.light;
    const currentSyntax = theme === 'dark' ? syntaxColors.dark : syntaxColors.light;
    const currentSemantic = theme === 'dark' ? semanticColors.dark : semanticColors.light;

    return (
        <div className="bg-substrate font-inter h-screen flex flex-col overflow-hidden">

            <main className="flex-grow overflow-y-scroll px-4 ">
                <div className="text-center py-20 md:py-28 border-b border-bedrock bg-mantle">
                    <div className="max-w-3xl mx-auto">
                        <h1 className=" text-4xl md:text-5xl font-bold text-mycelium">Form is Function</h1>
                        <p className="text-loam mt-4 text-lg leading-relaxed">
                            An intelligent, structured, and opinionated design language. Every element is meticulously
                            crafted to serve our <strong className="text-humus">&quotleaf admirer&quot</strong> audience who
                            appreciates depth and intentionality.
                        </p>
                    </div>
                </div>

                <Section
                    icon={<PaletteIcon/>}
                    title="Color System"
                    description={`The Substrate-22 color system is a dual-theme model. Colors are not chosen, they are assigned roles to ensure consistency. Currently viewing: ${theme === 'dark' ? 'Mycena (Dark)' : 'Evernia (Light)'}.`}
                >
                    <div className="space-y-12">
                        <div>
                            <h3 className=" text-2xl font-semibold text-humus mb-2">Tones</h3>
                            <p className="text-loam max-w-2xl mb-6">The six foundational colors for all backgrounds,
                                text, and borders that form the bedrock of the UI.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {currentTones.map(c => <ColorCard key={c.name} {...c} />)}
                            </div>
                        </div>
                        <div>
                            <h3 className=" text-2xl font-semibold text-humus mb-2">Syntax</h3>
                            <p className="text-loam max-w-2xl mb-6">The eight colors that bring life to code and
                                documents, making them instantly scannable and beautiful.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {currentSyntax.map(c => <ColorCard key={c.name} {...c} />)}
                            </div>
                        </div>
                        <div>
                            <h3 className=" text-2xl font-semibold text-humus mb-2">Semantic</h3>
                            <p className="text-loam max-w-2xl mb-6">Four colors reserved exclusively for communicating
                                UI state and feedback. <strong className="text-humus">Do not</strong> use these for
                                syntax highlighting, as this ensures their meaning is always clear and unambiguous.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {currentSemantic.map(c => <ColorCard key={c.name} {...c} />)}
                            </div>
                        </div>
                    </div>
                </Section>

                <Section
                    icon={<TypographyIcon/>}
                    title="Typography"
                    description="Our typography blends academic gravity with modern screen-first legibility. Lora is for headings, Inter for body and UI, and JetBrains Mono for all things code."
                >
                    <div className="bg-mantle p-8 rounded-lg border border-bedrock space-y-4">
                        <TypeSpecimen element="h1" name="Heading 1" font="Times New Roman" details="Bold, 48px"
                                      className=" text-5xl font-bold"/>
                        <TypeSpecimen element="h2" name="Heading 2" font="Times New Roman" details="Bold, 36px"
                                      className=" text-4xl font-bold"/>
                        <TypeSpecimen element="h3" name="Heading 3" font="Times New Roman" details="SemiBold, 24px"
                                      className=" text-2xl font-semibold"/>
                        <div className="py-4">
                            <p className="text-humus font-inter text-base leading-relaxed">
                                This is a standard paragraph of body text. It is designed for maximum <strong
                                style={{color: 'var(--mycelium)'}}>readability</strong> on screens. It pairs nicely with
                                the classic feel of Lora used in the headings. This is where long-form content will
                                live. It uses the <code className="text-humus">humus</code> color for primary text.
                            </p>
                            <p className="font-mono text-xs text-loam mt-2">Inter / Regular, 16px</p>
                        </div>
                        <div className="py-4">
                            <p className="text-loam font-inter text-sm leading-relaxed">
                                This is secondary body text, for less important information that needs to recede
                                visually, such as <strong style={{color: 'var(--loam)'}}>metadata or timestamps</strong>.
                                It uses the <code className="text-loam">loam</code> color.
                            </p>
                            <p className="font-mono text-xs text-loam mt-2">Inter / Regular, 14px</p>
                        </div>
                    </div>
                </Section>

                <Section
                    icon={<ComponentIcon/>}
                    title="Components"
                    description="Core UI elements built with the Substrate system. Their appearance and state are derived from the color and typography rules."
                >
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                        <div className="space-y-8">
                            <h3 className=" text-2xl font-semibold text-humus">Buttons</h3>
                            <div className="space-y-4">
                                <p className="text-loam text-sm"><strong className="text-humus">Primary:</strong> Use
                                    for the main call to action. There should be only one primary button per view.
                                    Uses <code className="text-hyphae">hyphae</code>.</p>
                                <button
                                    className="font-sans font-semibold py-2 px-6 rounded-md transition-colors bg-hyphae text-substrate hover:opacity-80">Primary
                                    Action
                                </button>
                            </div>
                            <div className="space-y-4">
                                <p className="text-loam text-sm"><strong className="text-humus">Secondary:</strong> For
                                    less critical actions or alternatives to the primary action. Uses <code
                                        className="text-humus">mantle</code>.</p>
                                <button
                                    className="font-sans font-semibold py-2 px-6 rounded-md transition-colors bg-mantle text-humus border border-bedrock hover:bg-crust">Secondary
                                    Action
                                </button>
                            </div>
                            <div className="space-y-4">
                                <p className="text-loam text-sm"><strong
                                    className="text-humus">Disabled:</strong> Indicates an action that is not currently
                                    available. Uses <code className="text-loam">loam</code>.</p>
                                <button
                                    className="font-sans font-semibold py-2 px-6 rounded-md bg-mantle text-loam border border-bedrock cursor-not-allowed opacity-60">Disabled
                                </button>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h3 className=" text-2xl font-semibold text-humus">Alerts</h3>
                            <p className="text-loam text-sm">Alerts use semantic colors to convey specific meaning about
                                system status. The border and text color should match the semantic role.</p>
                            <div className="space-y-4">
                                <div className="p-4 rounded-md border bg-mantle border-info text-info"><strong
                                    style={{color: 'var(--info)'}}>Info:</strong> A new version of Mycel is available.
                                </div>
                                <div className="p-4 rounded-md border bg-mantle border-success text-success"><strong
                                    style={{color: 'var(--success)'}}>Success:</strong> Your document was saved
                                    successfully.
                                </div>
                                <div className="p-4 rounded-md border bg-mantle border-warning text-warning"><strong
                                    style={{color: 'var(--warning)'}}>Warning:</strong> This document has not been saved
                                    in over an hour.
                                </div>
                                <div className="p-4 rounded-md border bg-mantle border-error text-error"><strong
                                    style={{color: 'var(--error)'}}>Error:</strong> Failed to compile document.
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/*<Section*/}
                {/*    icon={<ComponentIcon/>}*/}
                {/*    title="Code Blocks"*/}
                {/*    description="Code is rendered using JetBrains Mono and the dedicated syntax color palette to ensure clarity and readability."*/}
                {/*>*/}
                {/*    /!*<SyntaxHighlighter language="typescript"*!/*/}
                {/*    /!*                   code={`@MycelComponent()\nexport class Document {\n  title: string = 'Substrate Specimen';\n  isPublished: boolean = true;\n\n  constructor(version: number) {\n    // A comment explaining the logic\n    if (version > 0) {\n      console.log(\`Version: ${color_scheme_version}\`);\n    }\n  }\n`}/>*!/*/}
                {/*</Section>*/}
            </main>
        </div>
    );
}