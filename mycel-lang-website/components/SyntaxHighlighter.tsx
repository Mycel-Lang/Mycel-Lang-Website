'use server';

import {createHighlighter, type BundledLanguage} from 'shiki';
import mycelGrammar from '@/lib/mycel.tmLanguage.json';



const highlighterPromise = createHighlighter({
    themes: ['catppuccin-macchiato', 'catppuccin-mocha'],
    langs: [
        mycelGrammar,
        'javascript',
        'typescript',
        'html',
        'markdown',
    ],
});

export async function highlight(code: string, lang: BundledLanguage | 'mycel') {
    const highlighter = await highlighterPromise;
    return highlighter.codeToHtml(code, {
        lang,
        themes: {
            light: 'none',
            dark: 'catppuccin-mocha',
        },
    });

}

export default async function SyntaxHighlighter({
                                                    code,
                                                    language,
                                                }: {
    code: string;
    language: BundledLanguage | 'mycel';
}) {
    const html = await highlight(code, language);
    return <div dangerouslySetInnerHTML={{__html: html}}/>;
}
