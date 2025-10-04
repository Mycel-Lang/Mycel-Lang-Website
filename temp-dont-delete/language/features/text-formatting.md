# Mycel Text Formatting

## 1. Overview

Mycel provides a clear and consistent syntax for inline text formatting. The design philosophy is to enforce a single, unambiguous syntax for each style, which simplifies parsing, enhances security, and ensures document portability.

## 2. Core Formatting

### 2.1. Bold

- **Syntax:** `*text*`
- **Rationale:** A single asterisk pair is used for bold. This differs from Markdown's dual syntax (`**` or `__`) to eliminate ambiguity.
- **Expected HTML:** `<strong>text</strong>`

**Mycel:**
```mycel
This is *bold* text.
```

### 2.2. Italic

- **Syntax:** `_text_`
- **Rationale:** A single underscore pair is used for italic. Intra-word emphasis (e.g., `my_word`) is disabled by default to prevent accidental formatting but can be enabled in the compiler configuration.
- **Expected HTML:** `<em>text</em>`

**Mycel:**
```mycel
This is _italic_ text.
```

### 2.3. Underline / UnderNote

The hyphen character is used for underlining. This can be a simple underline or an "UnderNote," which provides a tooltip, similar to an `<abbr>` tag.

- **Syntax (Underline):** `-text-`
- **Syntax (UnderNote):** `-text:note-`
- **Expected HTML (Underline):** `<u>text</u>`
- **Expected HTML (UnderNote):** `<u title="note">text</u>` or a similar semantic representation.

**Mycel:**
```mycel
-Simple underline- for emphasis.
-Hover here:for a tooltip note-.
```

### 2.4. Strikethrough

- **Syntax:** `~text~`
- **Rationale:** Follows the widely accepted GitHub Flavored Markdown syntax. A colored strikethrough is also supported for presentational emphasis.
- **Syntax (Colored):** `~text:color~` (where `color` is a CSS color name, e.g., `red`, `blue`)
- **Expected HTML:** `<del>text</del>`
- **Expected HTML (Colored):** `<del style="text-decoration-color: color;">text</del>`

**Mycel:**
```mycel
This is ~struck out~.
This is ~struck out in red:red~.
```

### 2.5. Highlight

- **Syntax:** `=text=`
- **Rationale:** Provides a native way to highlight text, similar to the `==text==` syntax in some Markdown extensions.
- **Syntax (Colored):** `=text:color=` (where `color` is a CSS color name)
- **Expected HTML:** `<mark>text</mark>`
- **Expected HTML (Colored):** `<mark style="background-color: color;">text</mark>`

**Mycel:**
```mycel
This text is =highlighted=.
This text is =highlighted in yellow:yellow=.
```

### 2.6. Superscript and Subscript

To ensure an unambiguous and easily parsable syntax, Mycel uses a unique trigger for each script type, followed by either a single, unbroken word or a braced group for multi-word scripts.

#### 2.6.1. Superscript

- **Trigger:** `^`
- **Syntax:** `word^superscript` or `word^{multi-word superscript}`.
- **Rationale:** This syntax avoids the ambiguity of closing tokens. The parser reads the `^` and then consumes either a single word or a `{...}` group. This is a robust and predictable pattern.
- **Expected HTML:** `word<sup>superscript</sup>`

**Mycel:**
```mycel
E=mc^2
The footnote is here.^{See page 4}
```

#### 2.6.2. Subscript

- **Trigger:** `,,` (double comma)
- **Syntax:** `word,,subscript` or `word,,{multi-word subscript}`.
- **Rationale:** Uses a distinct token to avoid conflicts with grammatical commas or other syntax (like italics). It follows the same robust, unambiguous pattern as superscript for consistency.
- **Expected HTML:** `word<sub>subscript</sub>`

**Mycel:**
```mycel
The formula for water is H,,2O.
This is a,,{very long subscript}.
```

## 3. Security Considerations (ReDoS)

The strict, non-overlapping syntax for bold and italic (`*` and `_` respectively) is a deliberate design choice to mitigate Regular Expression Denial of Service (ReDoS) attacks. By avoiding the complex and ambiguous rules of nested `*` and `_` found in other markup languages, the Mycel parsing grammar remains simple and highly performant, preventing malicious input from causing catastrophic backtracking in the regex engine.
