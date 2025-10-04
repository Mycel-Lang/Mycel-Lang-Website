
# 1 Headings
standard headings
```mycel
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

```
#1 h1
#2 h2
#3 h3
#4 h4
#5 h5
#6 h6
```

> Why?
> It simplifes and makes it easier to write smaller headings + in a visual sense a `h6` written in markdown seems more important than an `h1`


# 2 Text Formatting

### 2.1.1 Core Inline Formatting
%%
These are non-negotiable. Writers use them constantly:

- **Bold** 
- **Italic** 
- **Underline** / **UnderNote**
- **Strikethrough** 
- **Highlight / Background color**
- **Superscript & Subscript** 

%%

## 2.2 Bold
```mycel
*bold*
```

## 2.3 Italic

```mycel
_italic_
```

By default, intra-word emphasis is disabled. This means that `a_b_c` will be rendered as literal characters. This behavior can be changed in the compiler configuration to allow for intra-word emphasis.

> Note 
>`__something__` and `**something**` are invalid syntax in sml.
> Rationale
> To enforce a single, consistent way of formatting text, which improves readability and simplifies parsing. Using `*` for bold and `_` for italic is the single, endorsed convention.

> Rant
> The seemingly **obvious** choice of allowing multiple syntaxes for the same formatting (e.g., `*` and `_` for italics) and also making them non consistent. (`__ a _ a_ __ a_` yeah good luck understanding this without reading your parser spec.) is the litteral door for hell. It creates parsing ambiguity ando most probably stomach ulcers and cerebral encephalopathy. This _choice_ can lead to inconsistent rendering across different platforms and tools.
>  More critically, it complicates the regular expressions needed to parse the text, opening the door to Regular Expression Denial of Service (ReDoS) attacks. A malicious actor can craft a seemingly simple string that causes the parser to hang, consuming 100% CPU as it backtracks endlessly. see https://github.com/codemirror/codemirror5/issues/7128, there are more like this.
>  This is not a hyphotetical problem; numerous Markdown parsers have had CVEs for this exact issue. By enforcing a single, clean syntax, we eliminate ambiguity, simplify parsing, and enhance security. It's a small price to pay for a more robust and reliable system.
>
> God do I hate the trailing space and these useless syntax of markdown. Utter useless other than to cause parsing problems. 

## 2.4 Underline / UnderNote

To underline text, wrap it in hyphens. To add an undernote, add a colon and the note text before the closing hyphen.

```mycel
-underline-
-text:undernote-
```

## 2.5 Strikethrough

To strikethrough text, wrap it in tildes. To add a color to the strikethrough, add a colon and the color name before the closing tilde.

```mycel
~strikethrough~
~strikethrough:red~
```

## 2.6 Highlight

```mycel
=highlight:color=
=highlight= >> default 
```

## 2.7 Superscript

```mycel
2^2 -> superscript
2^2^2 superer script
2^this-wont-break-unless-broken.
2^{you can also use this syntax too}
btw ^{supers are not attached to anything}

```

## 2.8 Marginella (Marginalia | Margin comment)

These are comments from the author which are explicitly written in the margins of the page

```mycel
Hi                       >> This is a common term used by the people who say hi.
I am the main clause :D |>> We share the same space as the one above

7 >> Why was 6 afraid of 7? 

6 >> 789.
They don't share the same space

 |>> These ones
 |>> 
 |>> Do share the same space
```

marginellas are only connected if they have a `|` before them like lil ropes c:

```mycel
 >> first
|>> second
|>> second
 >> third
```
# 3 Quotes

```mycel
> This is a quote
this is not a quote 
> this is a quote

>> this is a marginella. This is not a quote.
>2 this is what would markdown say as `>>`
>3 and so is this `>>>`
and we are still not a quote here
```


## 3.2 Elision Rules
The default elision char is `\`.
To elide a block of text you can use `\{args}` syntax like this
```mycel
\{the variable _internal_pointer }
```

# 4 Code Blocks and Segments

## 4.1 Code Fences
double backticks  starts a code segment
tripple backticks starts a code block

\`\`\`  \<language\> \n \`\`\`

## 4.2 Inline Code

Use double backticks (\`\`) to create inline code. To add syntax highlighting, add `@` followed by the language name after the closing backticks.

```mycel
This is some inline code: \`\`console.log("Hello, World!");\`\`
This is some highlighted inline code: \`\`console.log("Hello, World!");\`\`@js
```

# 5 Horizontal Rule

`---` is a horizontal rule

# 6 Lists
## 6.1 Bullet Lists

Creates unordered lists. Use `-` as the primary marker. Nest by a tab  per level. Inline formatting works inside items. if you want to extend the item above you must start your line with `|`.  Note that we respect indentation level while continuing 

Example — simple + nested + marginella:

```mycel
- this 
- is 
- a 
- list
| I'm continuing this list
	- I'm a child of that list
	  | And I'm in the next line! whoo!
```

```mycel
- Item 1
- Item 2       |>> margin note for Item 2
  |also item 2 |>> additional marginella line for Item 2
- Item 3 with _italic_ and *bold* and a flanking underscore at end _
- Item 4 with escaped underscores: this\_is\_literal
- Item 5
	- Subitem 5a |>> subitem marginella
	- Subitem 5b with ~strikethrough~
 | I'm continuing item 5, since I'm in the same indent level
		| I can't continue subitem 5b here tho. I just look stupid not. :c
```


---

## 6.2 Ordered Lists

Use numeric, alpha, or roman markers. Nest by 2 spaces per level. Renderer should respect style used.

Example — numeric start and alpha nested:

```mycel
1. First item
2. Second item |>> note for second
   a. Subitem a
   b. Subitem b |>> subitem note
3. Third item
```

custom start and roman style:

```mycel
5. Start at five
6. Next
I. Roman-style top-level (renderer should switch when marker style changes)
II. Continue Roman
IX. I'm discreete as hell here.
CC. We are arbitrary by definition.
III. Unless well, you aren't increasing by default.
^^^ -> not connected to the list above
```

mixing ordered + unordered + multi-paragraph nested:

```mycel
1. Top item
  - Nested bullet inside an ordered item
  - Another nested bullet
2. Next top item with a paragraph
| we also work in this way too! >> quite the conundrum if you ask me :D
  Continued paragraph text still belongs to item 2.
```

---

## 6.3 Definition Lists

Creates a list of terms and their corresponding definitions. Based on PHP Markdown Extra.

A term is followed by a colon on the next line. To add more definitions to the same term, each definition must start with a colon. A blank line must separate a term from the previous definition.

```mycel
Apple
: Pomaceous fruit of plants of the genus Malus in the family Rosaceae.
: An American computer company.

Orange
: The fruit of an evergreen tree of the genus Citrus.
  It is known for its vibrant color and high vitamin C content.
```

---

## 6.4 Task Lists

Checklist syntax uses `- [ ]` and `- [x]`. Works at any nesting level. Marginella allowed.

Example — simple tasks + nested tasks:

```mycel
- [x] Write specification             |>> approved by lead
- [ ] Implement parser                |>> blocked by tokenizer
  - [ ] Subtask: write tokenizer
  - [x] Subtask: design grammar
- [ ] Test Mycel lists with nested marginella
   | Damn this is hard. 
```

Edge-case — task items with escaped brackets and inline code:

```mycel
- [ ] Fix parsing for literal "[x]" in text (use \[x\] to escape)
- [ ] Use `- [ ]` inside code samples — must be fenced to avoid task parsing
```

---

## 6.5 Table of Contents (TOC)

Macro: `@toc()` or `@toc(max_level=N)` — generates a linked TOC up to the given heading depth. Place anywhere.

Example — TOC placement and headings:

```mycel
@toc(max_level=3)

# Introduction
## Syntax
### Inline Formatting
### Lists
# Usage
```

Edge-case — multiple TOCs and limited depth:

```mycel
@toc(max_level=2)

# One
## Two
### Three (won't be included)
## Four
```

---

## 6.7 Marginella inside Lists (rules & examples)

Inline marginella: append `|>>` after the item text. Multi-line marginella: subsequent lines begin with `|>>` at same indent.

Example — single-line + multi-line:

```mycel
- Item with single margin |>> short note
- Item with multi-line margin |>> note line 1
  |>> note line 2
  |>> note line 3
```

Example — marginella with formatting and flanking:

```mycel
- Complex item |>> note with *bold* and _italic_
  |>> second margin line with ~strike~ and escaped \_underscore\_
```

Edge-case — marginella on nested items and task lists:

```mycel
- Parent item              |>> parent margin
                           |>> parent margin extra
  - Child item             |>> still Parent margin
    - Grandchild           |>> also continuing it margin
- [ ] Task with marginella |>> why it's pending?
      
	- Child(2)              |>> child(2)
 
```

---

## 6.8 Elision & Escaping inside Lists

Default elision char: `\`. Use `\{...}` to elide or protect content.

Example — elision and escaped sequences:

```mycel
- Show variable: \{internal_pointer}
- Literal backslash: \\ results in a single backslash
- Escape flanking: \_not italic\_
```

Edge-case — eliding long chunks and mixing with inline formatting:

```mycel
- Doc snippet: \{this is elided and treated as literal content _with_ markers}
```

---

# 7 Links

## 7.1 Internal Links

```mycel
[./somefile.sml]
```

- Links can point to internal `.sml` or `.md` files.
- Paths may be **relative**, **content-root**, or **absolute**.
- The **content root** is the directory containing `.smlconf.toml`.  
    If no such file exists, the content root defaults to the current working directory.
    

### 7.1.1 Path Rules

```bash
.
|---f1.sml
|---f2.sml
|---important/
	|----important.sml
	|----unimportant.sml
```

If we are in `f1.sml`:

```mycel
[./f1.sml]    -> self referential  
[./f2.sml]    -> goes to ~/f2.sml  
[./f2]        -> `.sml` can be omitted  
[.f2]         -> omit the leading `/`, but keep the dot  
[~f2]         -> quick-lookup from content root  
[/f2]         -> absolute import (rooted at filesystem)  

[./important/important] -> into subdirectory `important`
```

---

## 7.2 Anchors

Anchors allow navigation within or across documents.

### 7.2.1 Basic Usage

```mycel
[#a title]
[# a title  ]
[ # a Title ]
[ #a tItle ]
```

- Case insensitive by default.
    
- For **exact matching**, wrap the string in quotes:
    

```mycel
[#"Exact Title With Case"]
```

### 7.2.2 Hierarchical Indexing

Headers in a file:

```mycel
# t1
## t1.1
### t1.1.1
# t2
## t2.1
# t3
### t3.0.1
```

Anchor references:

```mycel
[#1]      -> t1  
[#1.1]    -> t1.1  
[#1.0]    -> t1  
[#1.0.0]  -> t1  
[#2.3]    -> resolves up to t2 (warns: t2.3 missing)  

[#0]      -> beginning of file  
[#-1]     -> last header  
[#-2]     -> second-to-last header
```

### 7.2.3 In-text Reference Example

```mycel
# Why use a spoon as a fork?
it can cut things.

# Why should a spoon be elected as a mayor
well as discussed previously on [# why use a spoon as a fork]
```

---

## 7.3 References with Anchors Across Files

```mycel
%%f1.sml%%
# Up
something something important
# Down
something something unimportant
```

```mycel
%%f2.mycel%%
There are always upsides to life like [.f1#Up].  
But you can only appreciate the meaning if you have downs too [.f1#2]
```

---

## 7.4 Images

Images follow **Markdown syntax**:

```mycel
![alt text](path/to/pic.png)
![alt text](path/to/pic.png "optional title")
```

- `alt text` → description text
- `title` → optional tooltip

---

## 7.5 Web Links

Web links are **Markdown-compatible**:

```mycel
[Google](https://google.com)
```

### 7.5.1 Named Anchors

Anchors can be given **display text** like links:

```mycel
[see discussion](# why use a spoon as a fork)
[go to upsides](.f1#Up)
```

# 10 Footnotes

Footnotes are a critical feature for academic writing and personal knowledge management. This language provides a powerful and flexible system for creating and managing footnotes.

## 10.1 Basic Footnotes

A basic footnote consists of two parts: a reference in the text and a definition. The definition can be placed anywhere in the document, but it is common to place it at the end.

**Syntax:**

*   **Reference:** `[^name]`
*   **Definition:** `[^name]: Footnote text`

**Examples:**

```mycel
This is some text with a footnote[^1].

[^1]: This is the text of the footnote.
```

### Rendered HTML

```html
<p>This is some text with a footnote<sup id="fnref:1"><a href="#fn:1" class="footnote-ref">1</a></sup>.</p>

<div class="footnotes">
<hr>
<ol>
<li id="fn:1">
<p>This is the text of the footnote.&#160;<a href="#fnref:1" class="footnote-backref">&#8617;</a></p>
</li>
</ol>
</div>
```

**Multi-line Footnotes:**

Footnote definitions can span multiple lines. Subsequent lines must be indented.

```mycel
This is another footnote[^longnote].

[^longnote]: This is a longer footnote that spans
  multiple lines. You can even have multiple
  paragraphs by indenting them.

  This is a second paragraph in the same footnote.
```

### Rendered HTML

```html
<p>This is another footnote<sup id="fnref:longnote"><a href="#fn:longnote" class="footnote-ref">2</a></sup>.</p>

<div class="footnotes">
<hr>
<ol>
<li id="fn:longnote">
<p>This is a longer footnote that spans
multiple lines. You can even have multiple
paragraphs by indenting them.</p>
<p>This is a second paragraph in the same footnote.&#160;<a href="#fnref:longnote" class="footnote-backref">&#8617;</a></p>
</li>
</ol>
</div>
```

## 10.2 Inline Footnotes

For shorter notes, you can use inline footnotes to keep the content and the reference in the same place. This is especially useful for quick asides or definitions.

**Syntax:** `^[footnote text]`

**Example:**

```mycel
This is some text with an inline footnote.^[This is the footnote text.]
```

### Rendered HTML

```html
<p>This is some text with an inline footnote.<sup id="fnref:3"><a href="#fn:3" class="footnote-ref">3</a></sup></p>

<div class="footnotes">
<hr>
<ol>
<li id="fn:3">
<p>This is the footnote text.&#160;<a href="#fnref:3" class="footnote-backref">&#8617;</a></p>
</li>
</ol>
</div>
```

## 10.3 Advanced Features

Here are some advanced features that make footnotes in this language particularly powerful.

### 10.3.1 Named Footnotes

While you can use numbers for footnote references, you can also use meaningful names. This is especially useful for personal knowledge management, as it allows you to create more descriptive links to your notes.

**Example:**

```mycel
In his book, Smith argues that...[^smith-on-widgets]

### Rendered HTML

```html
<p>In his book, Smith argues that...<sup id="fnref:smith-on-widgets"><a href="#fn:smith-on-widgets" class="footnote-ref">4</a></sup></p>

<div class="footnotes">
<hr>
<ol>
<li id="fn:smith-on-widgets">
<p>Smith, J. (2023). <em>A Treatise on Widgets</em>. Widget Press.&#160;<a href="#fnref:smith-on-widgets" class="footnote-backref">&#8617;</a></p>
</li>
</ol>
</div>
```

### 10.3.2 Backlinking and Tooltips

To create a seamless reading experience, footnotes are rendered with automatic backlinks and tooltips.

*   **Backlinking:** The footnote reference in the text becomes a link to the footnote definition, and the footnote definition has a link back to the reference.
*   **Tooltips:** When you hover over a footnote reference, the content of the footnote will appear in a tooltip.

### 10.3.3 Styling Footnotes

You can style footnotes using the same syntax as other text formatting. You can style the reference, the definition, or both.

**Example:**

```mycel
This is a highlighted footnote reference: =[^1]=.

[^1]: This is a normal footnote.

This is a normal footnote reference[^2].

### Rendered HTML

```html
<p>This is a highlighted footnote reference: <mark><sup id="fnref:5"><a href="#fn:5" class="footnote-ref">5</a></sup></mark>.</p>

<p>This is a normal footnote reference<sup id="fnref:6"><a href="#fn:6" class="footnote-ref">6</a></sup>.</p>

<div class="footnotes">
<hr>
<ol>
<li id="fn:5">
<p>This is a normal footnote.&#160;<a href="#fnref:5" class="footnote-backref">&#8617;</a></p>
</li>
<li id="fn:6">
<p><mark>This is a highlighted footnote definition.</mark>&#160;<a href="#fnref:6" class="footnote-backref">&#8617;</a></p>
</li>
</ol>
</div>
```

### 10.3.4 Rich Content in Footnotes

Footnotes can contain any block-level element, including lists, code blocks, and blockquotes.

**Example with a list:**

```mycel
This is a footnote with a list[^list-note].

### Rendered HTML

```html
<p>This is a footnote with a list<sup id="fnref:list-note"><a href="#fn:list-note" class="footnote-ref">7</a></sup>.</p>

<div class="footnotes">
<hr>
<ol>
<li id="fn:list-note">
<p>Here is a list in a footnote:</p>
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
<a href="#fnref:list-note" class="footnote-backref">&#8617;</a>
</li>
</ol>
</div>
```

**Example with a code block:**

```mycel
This is a footnote with a code block[^code-note].

### Rendered HTML

```html
<p>This is a footnote with a code block<sup id="fnref:code-note"><a href="#fn:code-note" class="footnote-ref">8</a></sup>.</p>

<div class="footnotes">
<hr>
<ol>
<li id="fn:code-note">
<p>Here is a code block in a footnote:</p>
<pre><code class="language-python">def hello():
    print("Hello, from a footnote!")
</code></pre>
<a href="#fnref:code-note" class="footnote-backref">&#8617;</a>
</li>
</ol>
</div>
```

**Example with a blockquote:**

```mycel
This is a footnote with a blockquote[^quote-note].

### Rendered HTML

```html
<p>This is a footnote with a blockquote<sup id="fnref:quote-note"><a href="#fn:quote-note" class="footnote-ref">9</a></sup>.</p>

<div class="footnotes">
<hr>
<ol>
<li id="fn:quote-note">
<p>Here is a blockquote in a footnote:</p>
<blockquote>
<p>This is a quote inside a footnote.</p>
</blockquote>
<a href="#fnref:quote-note" class="footnote-backref">&#8617;</a>
</li>
</ol>
</div>
```


# HTML
html is disallowed.d.