# Mycel Precedence and Parsing Order

## 1. Overview

This document resolves potential ambiguity by defining the formal order of operations for the Mycel parser. It establishes a clear precedence for block-level elements, ensuring that even deeply nested documents are parsed in a predictable and consistent manner.

## 2. Core Parsing Principles

1.  **Sequential Line Processing:** The parser reads a document one line at a time, from top to bottom.
2.  **Prefix Priority:** The character(s) at the beginning of a line are the most important tokens for determining the context of a block.
3.  **Indentation Defines Nesting:** The indentation level of a line determines its relationship to the current container block. Greater indentation creates a nested block.
4.  **Containers Hold Content:** Most block elements (lists, quotes, etc.) are "containers" that can hold other blocks.

## 3. The Rule of Fences (Absolute Precedence)

A fenced block, such as a code block (```) or a raw block (```raw), takes absolute precedence over all other rules.

- **Rule:** Once a fenced block is opened, the parser enters a special mode where it consumes all subsequent lines as literal content, ignoring all other Mycel syntax, until it encounters the matching closing fence.

## 4. The Rule of Containers (Block Precedence)

For any line that is not inside a fenced block, the parser checks for block-starting prefixes in the following strict order of precedence:

1.  **List Marker:** (-, 1., a., i., etc.)
2.  **Quote Marker:** (>)
3.  **Definition List:** (A line followed by an indented line starting with :)
4.  **Horizontal Rule:** (--- on a line by itself)

This order means a line like `> - Item` is interpreted as a list item *inside* a quote, because the quote marker `>` is processed first, establishing the container for the line.

## 5. Block-Level Directives

To ensure consistency, block-level directives (like a hypothetical `@admonition`) do not use {} braces. Instead, they act as container blocks whose scope is defined by indentation.

- **Syntax:**
  ```mycel
  @admonition(type="note")
    This content is inside the admonition.
    - As is this list.

  This content is outside.
  ```
- **Rule:** A block-level directive establishes a container. All subsequent, more-indented content belongs to it. The block terminates when a line is encountered at the same or a lesser indentation level.

## 6. A Complex Example (Trace)

Let's trace the parsing of a complex, nested structure based on these rules:

**Mycel:**
```mycel
@admonition(type="note")
  > A quote inside the note.
  > - A list inside the quote.
  >   | Continuation of the list item.
  > - A second list item.

  A new paragraph, still inside the note.
```

**Parsing Trace:**

1.  **Line 1:** `@admonition(...)` - The parser opens an **admonition** container.
2.  **Line 2:** `  > A quote...` - This line is indented, so it is inside the **admonition**. The parser sees the `>` prefix and opens a **quote** container inside the **admonition**.
3.  **Line 3:** `  > - A list...` - Same indentation, same `>` prefix. The line is inside the **quote**. The parser then sees the `-` prefix and opens a **list** container inside the **quote**.
4.  **Line 4:** `  >   | ...` - Same indentation, same `>` prefix. The line is inside the **quote**. The parser then sees the `|` and applies the list continuation rule to the list item from Line 3.
5.  **Line 5:** `  > - A second...` - Same indentation, same `>` prefix. The line is inside the **quote**. The `-` creates a new item in the **list**.
6.  **Line 6:** (Blank Line) - A blank line terminates the **list** and the **quote**.
7.  **Line 7:** `  A new paragraph...` - This line is indented, so it is still inside the **admonition** container. It starts a new paragraph block.
8.  (End of File) - All open blocks are closed.

This demonstrates a clear, predictable, and robust order of operations that can handle any level of nesting.
