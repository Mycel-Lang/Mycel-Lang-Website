# Mycel Quotes

## 1. Overview

Quotes (or blockquotes) are used to indicate text that is quoted from another source. Mycel's syntax is similar to Markdown's but with a stricter continuation rule to improve predictability.

## 2. Syntax

A quote is created by starting a line with the `>` character, followed by a space.

**Mycel:**
```mycel
> This is a quote.
```

### 2.1. Continuation

Unlike many Markdown flavors, a blockquote block is not "sticky." Only lines that explicitly start with `>` are part of the quote. This removes ambiguity about where a quote ends.

**Mycel:**
```mycel
> This line is in the quote.
This line is *not* in the quote.
> This line is part of a new quote block.
```

To create a multi-line quote, every line must start with `>`.

**Mycel:**
```mycel
> This is the first line of a quote.
> This is the second line of the same quote.
> - Lists and other block elements are allowed.
```

### 2.2. Nested Quotes

Mycel supports nested quotes using `>N` where `N` is the nesting level. This provides a clear and explicit alternative to the `>>` syntax in Markdown, which is reserved for Marginella in Mycel.

**Mycel:**
```mycel
> Level 1 quote.
>2 Level 2 quote, nested inside.
>3 Level 3, even deeper.
>2 Back to level 2.
> Still at level 1.
```

## 3. Use Cases & Expected HTML

Blockquotes are rendered using the `<blockquote>` HTML element.

### Use Case 1: Simple Quote

**Mycel:**
```mycel
> To be, or not to be, that is the question.
```

**Expected HTML:**
```html
<blockquote>
  <p>To be, or not to be, that is the question.</p>
</blockquote>
```

### Use Case 2: Nested Quotes

**Mycel:**
```mycel
> User A wrote:
>2 User B replied:
>3 I disagree.
```

**Expected HTML:**
```html
<blockquote>
  <p>User A wrote:</p>
  <blockquote>
    <p>User B replied:</p>
    <blockquote>
      <p>I disagree.</p>
    </blockquote>
  </blockquote>
</blockquote>
```

## 4. Interaction with Marginella

It is important to note that the `>>` token is **not** a nested quote in Mycel. It is the syntax for a [Marginella](./marginella.md). This is a key difference from other markup languages.

**Mycel:**
```mycel
> This is a quote. >> This is a margin note *about* the quote.
```

**Expected HTML (Conceptual):**
```html
<div class="line-with-marginella">
  <blockquote>
    <p>This is a quote.</p>
  </blockquote>
  <aside class="margin-note">
    <p>This is a margin note <em>about</em> the quote.</p>
  </aside>
</div>
```
