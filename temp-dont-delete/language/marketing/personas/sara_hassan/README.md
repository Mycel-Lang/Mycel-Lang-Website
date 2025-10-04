# Persona: Sara Hassan

**Role:** Senior Technical Writer at a large enterprise company.

**Background:** Corporate-issued Windows machine. She is not a developer, but is highly technical and manages a massive documentation portal with thousands of pages.

**Motivation:** Her job is to ensure the company's documentation is accurate, consistent, and easy for customers to navigate. She is judged on her ability to manage complexity and reduce support tickets. This is a serious job that requires professional-grade tools.

**Goals & Use Cases:**

*   **Content Reuse (Transclusion):** This is her number one need. She wants to write a single snippet (like a legal disclaimer or an installation instruction) and include it in hundreds of different pages. When the snippet is updated, all pages must update automatically.
*   **Conditional Content:** Needs to generate different versions of the documentation for different customer tiers (e.g., 'Free', 'Pro', 'Enterprise') or deployment targets (e.g., 'Cloud', 'On-Premise') from a single source.
*   **Data-Driven Tables:** Wants to create large, complex tables of product features or API parameters that are populated from a central data file (e.g., a CSV or JSON file managed by the engineering team).
*   **Review & Collaboration:** Needs a workflow where she can write, and then subject matter experts (SMEs) can easily review and comment, without needing to be developers.

**Frustrations (Pain Points):**

*   **Proprietary XML Systems (DITA, DocBook):** Finds these systems incredibly powerful for her use cases but hates the verbose syntax, the expensive, slow tooling, and the steep learning curve. "It takes six months to train a new writer on our XML system."
*   **Markdown:** Her SMEs love writing in Markdown, but it completely lacks the features she needs for content reuse and conditional logic, forcing her team to manage thousands of duplicated snippets by hand.

**What She Wants from Mycel's ABI:**

*   Doesn't care about the ABI itself, but cares deeply about the **built-in functions** it enables. She wants features like `@:import` for data, `@:alias` for shortcuts, `@=READFILE` for table-rendering, and a hypothetical `@:if` to be robust, reliable, and easy to use.
*   Stability. She works for a large company; the toolchain needs to be backward-compatible and not introduce breaking changes every six months.
