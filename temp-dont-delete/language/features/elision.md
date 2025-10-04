# Mycel Elision and Raw Text

## 1. Overview

Mycel provides robust mechanisms for escaping and protecting text, ensuring that it is rendered literally by the compiler. This is crucial for writing about Mycel itself or for guaranteeing that certain sections are displayed exactly as typed.

There are three levels of elision:
1.  **Inline Escaping:** For single characters.
2.  **Inline Block Elision:** For a few words within a sentence.
3.  **Fenced Raw Blocks:** For multi-line blocks of text that must be rendered literally.

## 2. Inline Escaping

The backslash (`\`) is the default elision character. It escapes the immediately following character, forcing it to be rendered as a literal.

- **Syntax:** `\{character}`
- **Use Case:** Escaping a single formatting character.

**Mycel:**
```mycel
To create bold text, use \*asterisks\*.
```

**Expected HTML:**
```html
<p>To create bold text, use *asterisks*.</p>
```

## 3. Inline Block Elision

For eliding a small group of words within a sentence, the `\\{...}` syntax is used. Everything within the curly braces is treated as literal text within the flow of the paragraph.

- **Syntax:** `\\{...text...}`
- **Use Case:** Preventing accidental formatting in a short phrase.

**Mycel:**
```mycel
This example \\{_is not italic_} demonstrates the inline block.
```

**Expected HTML:**
```html
<p>This example _is not italic_ demonstrates the inline block.</p>
```

## 4. Fenced Raw Blocks

To guarantee that a larger, multi-line block of text is rendered literally, Mycel uses a fenced block designated with `raw`. This is the most powerful elision tool.

- **Syntax:**
  ````
  ```raw
  ... your raw text here ...
  ```
  ````
- **Rationale:** This feature provides an absolute guarantee that the enclosed block will be rendered as-is, with all whitespace and line breaks preserved, and without any Mycel formatting being applied. It is semantically different from a code block, as it represents generic pre-formatted text, not necessarily computer code.

- **Expected HTML:** The content is rendered inside a `<pre>` tag to preserve whitespace and ensure a literal representation. It does not use a `<code>` tag.

### Use Case: Displaying Examples with No Formatting

**Mycel:**
````mycel
Here is an example of some text that should not be formatted:

```raw
This block contains characters like * and _.

It also preserves line breaks.
  And indentation.

No Mycel syntax will be applied here.
```
````

**Expected HTML:**
```html
<p>Here is an example of some text that should not be formatted:</p>
<pre>This block contains characters like * and _.

It also preserves line breaks.
  And indentation.

No Mycel syntax will be applied here.</pre>
```

## 5. Elision vs. Code Blocks

It is important to choose the correct tool for the job:

- **Elision (`\`, `\\{...}`, ` ```raw `):** Use this when you want to *prevent formatting* on text that is not semantically code. The goal is to display the text literally.
- **Code Blocks (` ```lang `):** Use this when you are semantically marking a block of text *as computer code*. This will typically render the content in a monospaced font inside `<pre><code>...</code></pre>` tags and may include syntax highlighting.
