# Inclusion: The `@include` Directive

## 1. Overview

In Mycel, you can do more than just *link* to content—you can **include** it directly into another document. The `@include` directive is the single, unified way to embed content, whether it's an entire file or a specific, addressable block of text.

When you use `@include`, Mycel finds the source content, renders it as if it were in its original location, and then injects that final output into the current document. This allows you to maintain a **"single source of truth"** for key ideas, definitions, or data, and reuse them across your entire knowledge base without ever copying and pasting.

This is one of Mycel's most powerful features for creating interconnected, non-redundant, and easily maintainable documents.

---

## 2. How it Works: A Two-Step Process

The inclusion mechanism relies on two distinct but related features working together:

1.  **Block IDs (Optional):** To include a *specific piece* of content, you must first give it a unique, stable "address." This is done by adding a **Block ID** to it.
2.  **The `@include` Directive:** You then use the `@include` directive to call that address and embed the content.

---

## 3. Creating an Includable Block (Block IDs)

To make a piece of content individually includable, you must assign it a Block ID. A Block ID is a unique identifier that acts as an anchor or an address for a specific block of text.

**Syntax:** `...text ^block-id`

A Block ID is created by adding a caret `^` followed by a unique ID string to the very end of a content block.

*   The ID must be a single, contiguous string (no spaces).
*   It can contain letters, numbers, hyphens (`-`), and underscores (`_`).
*   The `^` sigil must be the last thing in the block before a newline.

### Example: Assigning IDs

You can assign a Block ID to almost any block-level element.

**File: `source-of-truth.mycel`**
```mycel
# Core Concepts

This is the official definition of the Mycel compiler's core philosophy.
It emphasizes speed, correctness, and a superior developer experience.
This entire paragraph is now addressable. ^philosophy-main-paragraph

- **Speed:** The compiler must provide instantaneous feedback. ^principle-speed
- **Correctness:** "It just works." No ambiguity. ^principle-correctness
- **DX:** Error messages should be helpful assistants. ^principle-dx

> This is a quote that summarizes our goal. ^goal-quote
```

---

## 4. Using the `@include` Directive

Once you have a file or a block with an ID, you can include it from any other file in your project.

### 4.1. Including an Entire File

To include the entire rendered content of another file, provide the path to that file.

**Syntax:** `@include("path/to/file.mycel")`

**File: `report.mycel`**
```mycel
# Main Report

This report includes the full content of our source of truth document.

@include("./source-of-truth.mycel")
```

### 4.2. Including a Specific Block

To include a specific block from a file, add the Block ID as a fragment to the path.

**Syntax:** `@include("path/to/file.mycel#^block-id")`

**File: `summary-report.mycel`**
```mycel
# Project Summary Report

## Core Philosophy
As defined in our core documentation, the project's philosophy is:

@include("./source-of-truth.mycel#^philosophy-main-paragraph")

## Key Principles
The three key principles driving development are:
- @include("./source-of-truth.mycel#^principle-speed")
- @include("./source-of-truth.mycel#^principle-correctness")
- @include("./source-of-truth.mycel#^principle-dx")
```

### 4.3. Including from the Same File

If you are including a block from within the *same file*, you can omit the file path and just use the anchor.

**File: `meeting-notes.mycel`**
```mycel
# Meeting Notes

... discussion ...

The key decision from this meeting was to focus exclusively on DX for the
next sprint. ^key-decision-sprint-5

... more discussion ...

## Summary of Decisions
- @include("#^key-decision-sprint-5")
```

---

## 6. Scoping and Context

By default, included content is **hygienic**. This means it is rendered in its own isolated scope and does not have access to variables or other context from the document that includes it. This ensures that included content is predictable and does not have unexpected side effects.

### 6.1. Default (Hygienic) Inclusion

In this mode, the included content is rendered as if it were in its own separate file. It cannot access variables from the parent document.

**File: `variables.mycel`**
```mycel
let greeting = "Hello";
```

**File: `main.mycel`**
```mycel
@include("./variables.mycel")

// This will cause an error because `greeting` is not defined in this scope.
@print(greeting)
```

### 6.2. Inherited Scope Inclusion

In some cases, you may want an included file to have access to the parent document's scope. This can be achieved by using the `inherit scope` option in the `@include` directive.

**Syntax:** `@include("path/to/file.mycel", inherit scope: true)`

When `inherit scope` is set to `true`, the included content is rendered within the context of the parent document and has access to its variables.

**File: `main.mycel`**
```mycel
let greeting = "Hello from the parent";

@include("./uses-variable.mycel", inherit scope: true)
```

**File: `uses-variable.mycel`**
```mycel
// This will print "Hello from the parent"
@print(greeting)
```

This explicit approach to scope inheritance makes the inclusion process more transparent and helps prevent unexpected behavior.

