# Substrate Color Usage Guide

**Philosophy:** We do not choose colors; we choose roles. This guide defines the specific role for each color in the Substrate system to ensure consistency, clarity, and beauty across the entire brand ecosystem—from the application UI and syntax highlighting to the website and marketing materials.

---

## 1. The Tones: The UI Foundation

These six colors form the bedrock of our application's interface. They are used for all backgrounds, text, and borders.

*   `Substrate`: **The App Background.** The color of the main content area or window. It is the canvas.
*   `Mantle`: **UI Surfaces.** The background for distinct UI regions like sidebars, panels, or cards that sit on top of the `Substrate`.
*   `Crust`: **Interactive Surfaces.** The background for elements that a user is actively interacting with, such as a hovered item in a list or a pressed button state.
*   `Bedrock`: **Borders and Dividers.** The color for all borders, separators, and keylines that structure the UI.
*   `Humus`: **Primary Text.** Used for all primary content, such as paragraph text and important labels. This should be the most common text color.
*   `Loam`: **Secondary Text.** Used for less important information that needs to recede visually. This includes code comments, metadata, timestamps, disabled text, and placeholder text in input fields.

---

## 2. The Syntax Colors: The Voice of the Content

These eight colors bring life to code and documents. Their application should be consistent to make code instantly scannable.

*   `Mycelium`: **Primary Identifiers.** Use for the most important names in a scope, such as class names, primary variable declarations, or module names.
*   `Hyphae`: **Functions & Types.** Use for function calls, type annotations, and inherited classes. This color represents action and definition.
*   `Lichen`: **Strings & Data.** Use for all string literals, as well as data-centric formats like JSON values or CSS property values.
*   `Indigo`: **Control Flow.** Use for keywords that control the flow of logic, such as `if`, `else`, `for`, `while`, and `return`.
*   `Mauve`: **Operators & Statements.** Use for operators (`+`, `-`, `*`, `=>`), module-level statements (`import`, `export`), and special keywords like `this` or `self`.
*   `Amanita`: **Special Constants.** Use for language constants like `true`, `false`, and `null`, and for regular expressions.
*   `Chitin`: **Numbers & Parameters.** Use for all numerical literals (integers, floats) and for function parameters/arguments.
*   `Spore`: **Decorators & Metadata.** Use for pre-processor statements, annotations, decorators (`@decorator`), and markup elements like HTML tags or CSS selectors.

---

## 3. The Semantic Colors: The UI Voice

These four colors are reserved exclusively for communicating UI state and feedback. **They should never be used for syntax highlighting.** This ensures their meaning is always clear and unambiguous.

*   `Success`: **Positive Confirmation.** Use for success notifications ("File Saved!"), passing test statuses, and validation checkmarks.
*   `Warning`: **Cautionary Feedback.** Use for non-critical alerts, linter warnings that are not errors, and confirmation dialogs ("Are you sure?").
*   `Error`: **Critical Failure.** Use for error messages, failing test statuses, and highlighting invalid fields in a form.
*   `Info`: **Neutral Information.** Use for informational banners ("New feature available!"), welcome messages, and the highlight color for the active item in a list or menu.

---

## 4. Branding & Marketing Usage

On our website and in marketing materials, the colors take on slightly broader roles to create a compelling brand presence.

*   **Hero Color:** The `Hyphae` (from Mycena) or `Lichen` (from Evernia) color is our primary call-to-action color for buttons, links, and key highlights. It's the most vibrant and action-oriented hue.
*   **Primary Backgrounds:** The website will use the `Substrate` and `Mantle` tones to create a clean, structured feel consistent with the application itself.
*   **Headlines:** Headlines should use the `Humus` color for maximum readability.
*   **Secondary Accents:** The `Spore` and `Amanita` colors can be used sparingly for secondary highlights or to draw attention to specific features on the webpage.
