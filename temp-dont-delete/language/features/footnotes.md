# Mycel Footnotes

## 1. Overview

Mycel provides a comprehensive footnote system that supports both standard, multi-line footnotes and shorter inline footnotes. The syntax is designed to be powerful enough for academic writing while remaining easy to use.

## 2. Standard Footnotes

A standard footnote consists of two parts: a reference in the text and a definition containing the footnote's content.

- **Reference Syntax:** `[^name]`
- **Definition Syntax:** `[^name]: Footnote content.`

  - **`name`**: The identifier for the footnote. Can be a number or a descriptive name (e.g., `[^1]`, `[^smith-2023]`).
  - **Content**: The text of the footnote. It can span multiple lines if subsequent lines are indented.

### Use Case: Basic Footnote

**Mycel:**
```mycel
This is some text with a footnote reference.[^1]

[^1]: This is the text of the footnote.
```

### Use Case: Multi-line Footnote

**Mycel:**
```mycel
Footnotes can also contain block-level content.[^long-note]

[^long-note]: This is a longer footnote.
  | It can span multiple lines using the pipe character.
  
  It can also contain multiple paragraphs.
```

**Expected HTML (Conceptual):**
```html
<p>Footnotes can also contain block-level content.<sup id="fnref:long-note"><a href="#fn:long-note">1</a></sup></p>

<div class="footnotes">
<hr>
<ol>
  <li id="fn:long-note">
    <p>This is a longer footnote.<br>It can span multiple lines using the pipe character.</p>
    <p>It can also contain multiple paragraphs. <a href="#fnref:long-note">&#8617;</a></p>
  </li>
</ol>
</div>
```

## 3. Inline Footnotes

For shorter notes or asides, inline footnotes provide a way to write the footnote content directly in the text.

- **Syntax:** `^[Footnote content]`

**Mycel:**
```mycel
This is some text with an inline footnote.^[This is the footnote text, which will be automatically numbered and moved to the end.]
```

**Expected HTML (Conceptual):**
```html
<p>This is some text with an inline footnote.<sup id="fnref:2"><a href="#fn:2">2</a></sup></p>

<div class="footnotes">
<hr>
<ol>
  <li id="fn:2">
    <p>This is the footnote text, which will be automatically numbered and moved to the end. <a href="#fnref:2">&#8617;</a></p>
  </li>
</ol>
</div>
```

## 4. Features

- **Automatic Numbering:** The renderer is responsible for numbering the footnotes sequentially, regardless of the names used in the `[^name]` identifiers.
- **Backlinking:** The renderer should generate links from the reference to the note and a backlink from the note to the reference for a seamless user experience.
- **Rich Content:** Footnotes can contain other Mycel block elements, such as lists, quotes, and code blocks.
