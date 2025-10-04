# Mycel Marginella

## 1. Overview

Marginella (also known as marginalia or margin comments) are notes that are explicitly intended to appear in the margins of a document, adjacent to the main content. They are a first-class citizen in Mycel, designed for annotations, asides, or authorial comments that shouldn't interrupt the main flow of text.

## 2. Syntax

Marginella are created using a `>>` or `|>>` token.

- **`>>`**: Starts a new marginella block.
- **`|>>`**: Continues the previous marginella, allowing for multi-line notes that are visually grouped together.

The marginella is associated with the primary text on the same line.

**Mycel:**
```mycel
This is the main text. >> This is a margin note for the main text.

Another line of text.  >> A new, separate margin note.
|>> This note is connected to the one above.
|>> And so is this one.
```

## 3. Use Cases & Expected HTML

Marginella are a powerful tool for annotation. The HTML rendering should be handled gracefully, likely using `<aside>` elements, and styled with CSS to appear in the document's margin on wider screens, or perhaps as collapsible blocks on mobile.

### Use Case 1: Simple Annotation

**Mycel:**
```mycel
The quick brown fox jumps over the lazy dog. >> A classic pangram.
```

**Expected HTML (Conceptual):**

The renderer should wrap the main text and the marginella in a container to maintain their association.

```html
<div class="line-with-marginella">
  <span>The quick brown fox jumps over the lazy dog.</span>
  <aside class="margin-note">
    <p>A classic pangram.</p>
  </aside>
</div>
```

### Use Case 2: Multi-line and Grouped Annotations

**Mycel:**
```mycel
Mycel aims for an unambiguous grammar. >> This is a core design principle.
|>> It helps prevent ReDoS attacks.
|>> And simplifies parser development.

This principle is applied consistently. >> A new, unrelated note.
```

**Expected HTML (Conceptual):**

```html
<div class="line-with-marginella">
  <span>Mycel aims for an unambiguous grammar.</span>
  <aside class="margin-note">
    <p>This is a core design principle.</p>
    <p>It helps prevent ReDoS attacks.</p>
    <p>And simplifies parser development.</p>
  </aside>
</div>
<div class="line-with-marginella">
  <span>This principle is applied consistently.</span>
  <aside class="margin-note">
    <p>A new, unrelated note.</p>
  </aside>
</div>
```

## 4. Marginella in Lists

Marginella can be attached to list items, providing a way to comment on specific points.

**Mycel:**
```mycel
- Item 1 |>> A note on the first item.
- Item 2
  | This is a continuation of Item 2. |>> The note attaches to the whole item.
- [x] A completed task |>> Approved on 2025-09-20.
```

**Expected HTML (Conceptual):**

```html
<ul>
  <li class="line-with-marginella">
    <span>Item 1</span>
    <aside class="margin-note"><p>A note on the first item.</p></aside>
  </li>
  <li class="line-with-marginella">
    <span>Item 2<br>This is a continuation of Item 2.</span>
    <aside class="margin-note"><p>The note attaches to the whole item.</p></aside>
  </li>
  <li class="line-with-marginella">
    <span><input type="checkbox" checked disabled> A completed task</span>
    <aside class="margin-note"><p>Approved on 2025-09-20.</p></aside>
  </li>
</ul>
```

## 5. Styling Considerations

The final presentation of marginella is heavily dependent on CSS. A default stylesheet should provide sensible defaults, such as:

- On wide screens: Position the `aside` elements in the right or left margin.
- On narrow screens: Render the `aside` elements as a distinct block below their associated text, or make them toggleable with a click.
- The `|>>` connected notes should be rendered as a single visual block.
