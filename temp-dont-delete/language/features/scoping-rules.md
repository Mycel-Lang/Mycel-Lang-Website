# Mycel Scoping Rules

## 1. Overview

"Scope" in Mycel refers to the region of a document that a particular element, format, or directive applies to. A clear and consistent set of scoping rules is a core design principle of the language, ensuring that the writer can predict how the document will be rendered.

## 2. Inline Scope

Applies to formatting within a line of text (e.g., `*bold*`).

- **Mechanism:** Delimiting tokens.
- **Rule:** The scope begins at the opening token and ends at the corresponding closing token. Scopes must be correctly nested.

## 3. List Block Scope

This defines the scope of an entire list (`<ul>`, `<ol>`, etc.).

- **Mechanism:** Contiguous lines of valid list items.
- **Rule:** A list block's scope includes the first valid list item and all subsequent valid list items and continuations. 
- **Termination:** The scope of a list block is terminated by:
  1.  One or more blank lines.
  2.  A line of text that is not a valid list item or a valid continuation for an item within the current list block.

**Example:**
```mycel
- List 1, Item 1
- List 1, Item 2

A blank line ends the first list.

- List 2, Item 1
```

## 4. List Item Scope

This defines the scope of a single list item (`<li>`).

- **Mechanism:** Indentation and the pipe `|` continuation character.
- **Rule:** The scope of a list item includes:
  1.  The line the item is defined on.
  2.  Any nested lists indented further than the item.
  3.  Any continuation line starting with `|` at the same or a lesser indentation level that corresponds to an active parent list item.
- **Termination:** An item's scope ends when a new list item is declared at the same or a lesser indentation level.

**Example:**
```mycel
- Item 1 Scope Starts
  | Still in Item 1's scope.
	- Nested list, also in Item 1's scope.
  | Also continues Item 1.
- Item 2 Starts -> Item 1 Scope Ends
```

## 5. Block Scope

Applies to distinct, multi-line elements like quotes and fenced blocks.

- **Mechanism:** Line prefixes or fences.
- **Rule:**
  - For **prefixed blocks** (e.g., `> quote`), the scope includes any consecutive line that begins with the same prefix.
  - For **fenced blocks** (e.g., ` ``` `), the scope is everything between the opening and closing fence.

## 6. Directive Scope

Applies to [Block Functions](./functions.md) that modify a region of the document.

- **Mechanism:** A scope specifier suffix (e.g., `:p`, `:s`).
- **Rule:** The scope is determined by the specifier (`:p` for the next paragraph, `:s` for the next sentence, etc.).

## 8. Inclusion Scope

The scope of content included via the `@include` directive is **hygienic** by default, meaning it is isolated from the including document. For more details on how to manage scope during inclusion, see the [Inclusion](./inclusion.md#6-scoping-and-context) documentation.