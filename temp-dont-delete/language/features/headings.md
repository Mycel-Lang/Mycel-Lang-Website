# Mycel Headings

## 1. Overview

Headings are used to structure a document and create a hierarchy of content. Mycel provides two alternative syntaxes for defining headings, designed to be both familiar to Markdown users and slightly more concise.

## 2. Syntax

Mycel supports two primary syntaxes for heading levels 1 through 6.

### 2.1. Standard Syntax

This syntax is identical to the common Markdown syntax.

**Mycel:**
```mycel
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

### 2.2. Numbered Syntax

This syntax provides a more compact alternative, where the number of hashes is replaced by a single hash followed by a digit from 1 to 6.

**Mycel:**
```mycel
#1 Heading 1
#2 Heading 2
#3 Heading 3
#4 Heading 4
#5 Heading 5
#6 Heading 6
```

**Rationale:** This alternative simplifies parsing slightly and can be quicker to type. It also creates a stronger visual distinction between heading levels in the raw text.

## 3. Use Cases & Expected HTML

Headings are fundamental for document structure. The renderer must generate corresponding `<h1>` through `<h6>` tags.

### Use Case: Structuring a document

**Mycel:**
```mycel
#1 My Document Title

This is the introduction.

#2 Section A

Content for section A.

#3 Subsection A.1

Details for subsection A.1.
```

**Expected HTML:**
```html
<h1>My Document Title</h1>
<p>This is the introduction.</p>
<h2>Section A</h2>
<p>Content for section A.</p>
<h3>Subsection A.1</h3>
<p>Details for subsection A.1.</p>
```

## 4. Edge Cases & Considerations

- **Whitespace:** At least one space is required between the heading marker (`#`, `##`, `#1`, etc.) and the heading text.
- **No Closing Hashes:** Mycel does not support the closing hash syntax (e.g., `# Heading 1 #`).
- **Mixing Syntaxes:** A renderer should treat both syntaxes identically. It is valid to mix both syntaxes within the same document, though consistency is recommended for readability.

**Invalid Syntax:**
```mycel
#Heading 1      (Missing space )
# 7 Heading 7   (Invalid level )
##2 Heading     (Can't use both) 
```
