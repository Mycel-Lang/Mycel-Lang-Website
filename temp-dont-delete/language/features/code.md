# Mycel Code Blocks and Segments

## 1. Overview

Mycel provides distinct syntax for block-level code (fenced blocks) and inline code segments. This allows for clear semantic distinction between larger code examples and small code snippets within a line of text.

For a full explanation of the `@` symbol, see the [Directives](./directives.md) specification.

## 2. Fenced Code Blocks

Fenced code blocks are used for multi-line code examples. They are opened and closed with triple backticks (```).

- **Syntax:**
  ```language
  ... your code here ...
  ```
- **`language`**: An optional language identifier (e.g., `python`, `javascript`, `c++`) used by syntax highlighters.

### Use Case: Displaying a Python function

**Mycel:**
````mycel
Here is a simple function in Python:

```python
def hello(name):
    print(f"Hello, {name}!")
```
````

**Expected HTML:**
```html
<p>Here is a simple function in Python:</p>
<pre><code class="language-python">def hello(name):
    print(f"Hello, {name}!")</code></pre>
```

## 3. Inline Code

Inline code is used for short code snippets, variable names, or commands within a paragraph.

- **Syntax:** ` ``code`` ` (double backticks).
- **Rationale:** Using double backticks (` `` `) instead of single backticks (` ` `) helps to avoid accidental formatting when a single backtick is needed as a literal character (e.g., in shell commands).

### 3.1. Basic Inline Code

**Mycel:**
```mycel
The `printf()` function is part of the C standard library.
```

**Expected HTML:**
```html
<p>The <code>printf()</code> function is part of the C standard library.</p>
```

### 3.2. Inline Code with Language Attribute

To add syntax highlighting information to an inline code segment, Mycel uses an **Attribute-Style Directive**.

- **Syntax:** ` ``code``@language `
- **Rationale:** The `@language` is an attribute directive that attaches metadata to the preceding inline code element. This provides a concise and clear way to specify the language for highlighting.

**Mycel:**
```mycel
Consider the JavaScript snippet ` ``js:const x = 10;`` ` to declare a constant.
```

**Expected HTML:**
```html
<p>Consider the JavaScript snippet <code class="language-js">const x = 10;</code> to declare a constant.</p>
```

## 4. Escaping Backticks

To include literal backticks inside an inline code segment, you can use the [Elision](./elision.md) syntax.

**Mycel:**
```mycel
To create an inline code block, use the {`` ``} syntax.
```

**Expected HTML:**
```html
<p>To create an inline code block, use the `` `` syntax.</p>
```
o create an inline code block, use the `` `` syntax.</p>
```
