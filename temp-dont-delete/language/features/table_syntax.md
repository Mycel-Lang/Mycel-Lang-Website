# Mycel Table Syntax

## 1. Overview & Philosophy

Mycel tables are designed to be both structurally robust and dynamically powerful. Our system is built on a core principle: the separation of a table's **structure** from its **content**. 

- **Structure** is defined by a clean, pipe-based syntax for layout, including cell merging and alignment.
- **Content** can be either static text or dynamic, compile-time functions that can perform calculations, fetch data, and reference other cells.

This document is the canonical specification for both aspects.

---

## 2. Table Structure

Mycel adopts a consistent syntax for all structural layout.

### 2.1. Basic Syntax

A table is defined by rows flanked by `|`. Cells are separated by `|`. A header is optional and is separated by a line of hyphens.

```mycel
| Header 1 | Header 2 |
|----------|----------|
| Cell A1  | Cell B1  |
| Cell A2  | Cell B2  |
```

### 2.2. Cell Merging

- `|>`: Merges the current cell with the cell to its right (creating a `colspan`).
- `|v`: Merges the current cell with the cell below it (creating a `rowspan`).
- Content in merged cells is concatenated with a newline character, in left-to-right, top-to-bottom order.

```mycel
| 2-Column Header |>| 
|---|---|
| Merged |>|
| Cell A | Cell B |
```

### 2.3. Advanced Cell Formatting

Styling is applied with a `::key:value` syntax within a cell.

- `::align:<left|center|right>`
- `::valign:<top|middle|bottom>`
- `::bg:<hex_color>`
- `::text:<hex_color>`

```mycel
| Header ::align:center | Value ::bg:#191C23 ::text:#E3E7F0 |
|---|---|
| ... | ... |
```

---

## 3. Grid Functions (`@=`)

To make tables dynamic, Mycel supports a special class of **Grid Functions**. These functions are table-aware and use a distinct syntax to differentiate them from standard document functions.

**A cell's content can be either static text OR a single Grid Function.** For the full specification of all directive types, see [[./directives.md]].

### 3.1. Syntax

Grid Functions are prefixed with `@=`.

`@=FUNCTION_NAME(arguments)`

### 3.2. A1 Coordinate System

Grid Functions use standard spreadsheet-style `A1` notation to reference cells and ranges within the current table.

- **Coordinates:** `A` is the first column, `1` is the first *data* row (the row after the header). `A1` refers to the top-left data cell.
- **Header Row:** The header row is addressable with `H` as the row index (e.g., `A_H`, `B_H`).
- **Ranges:** Ranges are specified with a colon (e.g., `A1:A10`, `A1:D5`).

### 3.3. Using Imported Data

Grid Functions can operate on data loaded into the document's context using the `@:import` directive. This allows tables to become powerful data dashboards.

```mycel
// Import a data source and give it a local name
@:import "./quarterly_reports.mycel#Q3" as q3

// Now, reference the imported data in a Grid Function
| Metric | Value |
|---|---|
| Total Revenue | @=SUM(q3!B2:B50) |
| Growth | @=GET(q3!F1) |
```

> **Important Scope Rule**
> Only Grid Functions (`@=`) can access data loaded via `@:import`. Standard Content Functions (`@`) operate in a more limited context and cannot access imported namespaces. This is a deliberate security and design choice.

---

## 4. Built-in Grid Functions

Mycel includes a powerful set of built-in Grid Functions that are supported directly by the compiler. 

### 4.1. Mathematical & Aggregation

*   `@=SUM(range)`: Calculates the sum of all numerical values in a range.
    *   Example: `@=SUM(B1:B10)`
*   `@=AVG(range)`: Calculates the average of the numerical values in a range.
*   `@=MIN(range)` / `@=MAX(range)`: Returns the minimum or maximum value in a range.
*   `@=PRODUCT(cell1, cell2, ...)`: Multiplies the values of the specified cells.

### 4.2. Data & Text

*   `@=GET(cell)`: Returns the raw value of the specified cell. Useful for referencing.
    *   Example: `@=GET(A1)`
*   `@=CONCAT(value1, value2, ...)`: Concatenates multiple strings or cell values.
    *   Example: `@=CONCAT(GET(A1), ": ", GET(B1))`
*   `@=COUNT(range)`: Counts the number of non-empty cells in a range.

### 4.3. Logic

*   `@=IF(condition, value_if_true, value_if_false)`: Returns a value based on a condition.
    *   Example: `@=IF(GET(B2) > 100, "High", "Low")`

### 4.4. External Data

These functions are powerful but require explicit user permission in the project configuration file.

*   `@=FETCH(url)`: Performs an HTTP GET request to the given URL and returns the response body as a string. Requires `network` permission.
    *   Example: `@=FETCH("https://api.example.com/price/BTC")`
*   `@=READFILE(path)`: Reads a file from the local project directory and returns its content. Requires `filesystem_read` permission.
    *   Example: `@=READFILE("./data/version.txt")`

---

## 5. Custom Grid Functions

In addition to the built-in functions, developers can create their own custom Grid Functions using Mycel's WASM-based plugin system. These custom functions are invoked with the same `@=` syntax.

When a Grid Function is called, the compiler passes a special `grid_context` object to the WASM plugin, giving it access to the entire table's data model. For the full specification, see `backend/abi.md`.
