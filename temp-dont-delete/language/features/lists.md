# Mycel Lists

## 1. Overview

Mycel supports a variety of list types with powerful and precise rules for nesting and continuation. For a formal definition of how scope is calculated, see the [Scoping Rules](./scoping-rules.md) specification.

## 2. Common List Features

### 2.1. Nesting

To create a nested list, indent the new list item further than its parent. 

**Mycel:**
```mycel
- Item 1
	- Nested Item 1a
	- Nested Item 1b
- Item 2
```

**Expected HTML:**
```html
<ul>
  <li>Item 1
    <ul>
      <li>Nested Item 1a</li>
      <li>Nested Item 1b</li>
    </ul>
  </li>
  <li>Item 2</li>
</ul>
```

### 2.2. Basic Continuation

To continue the text of a list item onto a new line, start the new line with a pipe `|`.

**Mycel:**
```mycel
- This is the first line of a list item.
  | This is the second line of the same item.
```

**Expected HTML:**
```html
<ul>
  <li>This is the first line of a list item.<br>This is the second line of the same item.</li>
</ul>
```

## 3. List Types

### 3.1. Bullet Lists (Unordered)

- **Marker:** `-`

**Mycel:**
```mycel
- Apples
- Oranges
- Bananas
```

### 3.2. Ordered Lists
	
- **Markers:** `1.`, `a.`, `I.`, etc. The starting number and style are taken from the first item.

**Mycel:**
```mycel
a. First item
b. Second item
c. Third item
```

### 3.3. Definition Lists

A definition list is for presenting terms and their corresponding definitions. It is ideal for glossaries or annotating key concepts.

- **Term:** A single line of text.
- **Definition:** Indented on the next line, starting with a colon `:`. 

**Basic Example:**
```mycel
Mycel
  : A markup language.
```

**Expected HTML:**
```html
<dl>
  <dt>Mycel</dt>
  <dd>A markup language.</dd>
</dl>
```

**Example (Multiple and Continued Definitions):**
```mycel
Apple
  : Pomaceous fruit of plants of the genus Malus.
  | It is one of the most widely cultivated tree fruits.
  : An American computer company.

Orange
  : The fruit of an evergreen tree of the genus Citrus.
```

**Expected HTML:**
```html
<dl>
  <dt>Apple</dt>
  <dd>Pomaceous fruit of plants of the genus Malus.<br>It is one of the most widely cultivated tree fruits.</dd>
  <dd>An American computer company.</dd>
  <dt>Orange</dt>
  <dd>The fruit of an evergreen tree of the genus Citrus.</dd>
</dl>
```

### 3.4. Task Lists

- **Markers:** `- [ ]` (incomplete) or `- [x]` (complete).

**Mycel:**
```mycel
- [x] Write specification
- [ ] Implement parser
- [ ] Write tests
```

## 4. Advanced Scoping and Boundaries

(Content from previous version remains the same...)

### 4.1. The Continuation Rule

The pipe `|` character continues the most recent list item at the **same or a lesser indentation level**.

### 4.2. Dangling Continuations

A `|` at an indentation level that does not correspond to an active list item is rendered as literal text.

### 4.3. List Boundaries

A list is terminated by one or more blank lines or by other content that is not a valid list item.

**Example with Roman Numerals:**

```mycel
VIII. The eighth item.
IX. The ninth item.
X. The tenth item.

XII. This is item 1 of a *new* list because of the blank line above.
```