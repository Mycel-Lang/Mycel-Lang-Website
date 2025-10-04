# Mycel Link Syntax

## 1. Overview

Mycel treats linking as a first-class feature, essential for building interconnected personal knowledge and documentation systems. The syntax is designed to be powerful, flexible, and immediately familiar, blending the best of Markdown's web links with a robust system for internal, cross-document referencing.

---

## 2. Web Links

For linking to external websites, Mycel uses the standard, industry-recognized Markdown syntax.

**Syntax:** `[Display Text](URL "Optional Tooltip Title")`

### Examples

```mycel
// Basic web link
Check out the [Mycel Project Website](https://mycel-lang.org).

// Link with a tooltip
Our work is inspired by tools like [Obsidian](https://obsidian.md "A powerful knowledge base on top of a local folder of plain text Markdown files.").
```

---

## 3. Internal Links

Internal links are the backbone of a Mycel knowledge base. They allow you to connect documents, and specific sections within them, with a clean and powerful syntax.

**Base Syntax:** `[./path/to/file.mycel#Heading Anchor]`

### 3.1. Linking to Files

You can link to any file using a relative or project-root-relative path.

- **Relative Path:** `[./relative/path/to/file.mycel]`
- **Root-Relative Path:** `[/absolute/path/from/root/file.mycel]`
- The `.mycel` extension is optional.

**Examples:**

```mycel
// Link to a file in the same directory
See our [./table_syntax] for more details.

// Link to a file in a subdirectory
Our color system is defined in [./marketing/design_language].

// Link to a file using a path from the project root
Our core principles are in [/language-manifest].
```

### 3.2. Linking to Headings (Anchors)

You can link directly to any heading within the current document or another document.

#### By Heading Title

Mycel generates an automatic anchor for every heading based on its text. The link is case-insensitive and ignores punctuation.

**Syntax:** `[#Heading Text]`

```mycel
// Link to a heading in the current document
As discussed in [#Internal Links], the syntax is powerful.

// Combined with a file path
For details on the ABI, see [./backend/abi#Core Philosophy].
```

#### By Heading Hierarchy

For more precise linking, you can reference headings by their numerical position in the document structure.

**Syntax:** `[#N.M.P]` (e.g., `#1` for the first H1, `#1.2` for the second H2 under the first H1).

```mycel
// Link to the very first H1 heading in the document
[#1]

// Link to the third H2 under the second H1
[#2.3]

// Combined with a file path
See the introduction to the toolchain spec in [./features/toolchain#1].
```

### 3.3. Custom Display Text

By default, the link's display text is the path or heading name. To specify custom text, provide it as the first part of the link.

**Syntax:** `[Custom Display Text](./path#anchor)`

```mycel
[The full specification for tables|./features/table_syntax] is quite detailed.

As we decided [in our meeting|./marketing/Marketing main.md#The Two-Phase Strategy], we will focus on experts first.
```

--- 

## 4. Edge Cases

- **Broken Links:** If a link target (file or heading) cannot be found, the Mycel compiler will produce a warning during compilation. The link will be rendered as plain text in the output to indicate the error.
- **Ambiguous Anchors:** If multiple headings resolve to the same text anchor (e.g., two sections named "Overview"), a link to `[#Overview]` will point to the first one encountered in the document. The compiler will issue a warning about the ambiguity.
- **Escaping:** To display literal brackets, you can escape them with a backslash: `\[This is not a link\]`.
