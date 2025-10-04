# Mycel Horizontal Rule

## 1. Overview

A horizontal rule is used to create a thematic break in the content, such as separating sections of a document. In Mycel, the syntax is simple and unambiguous.

## 2. Syntax

A horizontal rule is created by placing three or more hyphens (`-`) on a line by themselves.

**Mycel:**
```mycel
---
```

### 2.1. Variations

You can use more than three hyphens. Spaces between the hyphens are not allowed.

**Valid:**
```mycel
----
---------
```

**Invalid:**
```mycel
- - -
--
```

**Rationale:** Requiring three or more *unbroken* hyphens on a line by itself avoids confusion with other syntax, such as list items or underlines. It is a clear, explicit signal to the parser.

## 3. Use Cases & Expected HTML

The primary use case is to create a visual and semantic separation between blocks of content.

**Mycel:**
```mycel
# Section 1

Content for the first section.

---

# Section 2

Content for the second section.
```

**Expected HTML:**
The horizontal rule should be rendered as an `<hr>` tag.

```html
<h1>Section 1</h1>
<p>Content for the first section.</p>
<hr>
<h2>Section 2</h2>
<p>Content for the second section.</p>
```

## 4. Comparison to Other Markup

Unlike some Markdown flavors, Mycel does not support using asterisks (`***`) or underscores (`___`) to create horizontal rules. This is a deliberate design choice to ensure that each special character has a single, primary purpose, which aligns with the Mycel goal of being unambiguous and easy to parse.
