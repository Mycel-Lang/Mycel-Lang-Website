"use client";

import React from "react";

// This is a simplified tokenizer. For a production app, a more robust library
// like Prism.js, Highlight.js, or Shikiji would be recommended.
const tokenize = (code: string, language: string) => {
  // For this generic example, we'll use a simple set of rules.
  // A real implementation would have different rules per language.
  const tokenPatterns = [
    { type: "comment", pattern: /\/\/.*|\/\*([\s\S]*?)\*\// },
    { type: "string", pattern: /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`/ },
    { type: "number", pattern: /\b\d+(\.\d+)?\b/ },
    { type: "boolean", pattern: /\b(true|false|null|undefined)\b/ },
    { type: "keyword", pattern: /\b(import|export|from|class|if|return|const|let|new|function|for|of|in|fn|struct|impl|string|number|boolean)\b/ },
    { type: "control", pattern: /\b(if|else|for|while|return|switch|case|break|continue|match)\b/ },
    { type: "function", pattern: /\b[a-zA-Z_][a-zA-Z0-9_]*(?=\()/ },
    { type: "operator", pattern: /[=+\-*\/%<>!&|?^~@:]/ },
    { type: "punctuation", pattern: /[{}[\]();,.:]/ },
    { type: "variable", pattern: /\b[a-zA-Z_][a-zA-Z0-9_]*\b/ },
  ];

  const tokens: { type: string; value: string }[] = [];
  let remainingCode = code;

  while (remainingCode.length > 0) {
    let matchFound = false;
    // Try to match the longest possible token first
    for (const { type, pattern } of tokenPatterns) {
      const regex = new RegExp(`^(${pattern.source})`);
      const result = regex.exec(remainingCode);
      if (result) {
        tokens.push({ type, value: result[0] });
        remainingCode = remainingCode.substring(result[0].length);
        matchFound = true;
        break;
      }
    }

    if (!matchFound) {
      // If no token matches, consume one character as plain text
      const char = remainingCode[0];
      const lastToken = tokens[tokens.length - 1];
      // Coalesce whitespace or plain text characters into the last token if it's of the same type
      if (lastToken && lastToken.type === "text") {
        lastToken.value += char;
      } else {
        tokens.push({ type: "text", value: char });
      }
      remainingCode = remainingCode.substring(1);
    }
  }

  return tokens;
};

const getTokenColorVar = (tokenType: string) => {
  switch (tokenType) {
    case "comment":
      return "var(--loam)";
    case "keyword":
    case "control":
      return "var(--indigo)";
    case "string":
      return "var(--lichen)";
    case "number":
      return "var(--chitin)";
    case "boolean":
      return "var(--amanita)";
    case "function":
      return "var(--hyphae)";
    case "type":
        return "var(--spore)";
    case "operator":
      return "var(--mauve)";
    case "punctuation":
        return "var(--loam)";
    case "variable":
    default:
      return "var(--humus)";
  }
};

const SyntaxHighlighter = ({ code, language }: { code: string; language: string }) => {
  const tokens = tokenize(code, language);

  return (
    <pre className="font-mono text-sm leading-relaxed bg-mantle rounded-lg border border-bedrock p-4 sm:p-6 overflow-x-auto">
      <code>
        {tokens.map((token, index) => (
          <span key={index} style={{ color: getTokenColorVar(token.type) }}>
            {token.value}
          </span>
        ))}
      </code>
    </pre>
  );
};
export const color_scheme_version = "0.0.1"
export default SyntaxHighlighter;