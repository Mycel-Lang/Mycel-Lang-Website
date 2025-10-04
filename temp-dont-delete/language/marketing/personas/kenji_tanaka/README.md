# Persona: Kenji Tanaka

**Role:** Lead Developer at a 50-person tech startup.

**Background:** Bleeding-edge macOS user. Lives in VS Code and iTerm2. His company is building a complex API product, and their documentation is a key part of their success.

**Motivation:** His team's success depends on shipping features fast and having great documentation so users can adopt them. He is a professional who values tools that are powerful, efficient, and have a great developer experience.

**Goals & Use Cases:**

*   **Living Documentation:** Wants to build a documentation site that is never out of date. This means pulling in information directly from the source code and APIs.
*   **Interactive Examples:** Needs to embed interactive code samples, API explorers (e.g., Swagger/OpenAPI), and even live demos directly into the documentation pages.
*   **Component-Based Writing:** Wants to treat documentation like a modern frontend framework, creating reusable components for things like callouts, warnings, and complex product-specific embeds.
*   **CI/CD Integration:** The entire documentation build process must be scriptable and run in their CI/CD pipeline (Linux-based).

**Frustrations (Pain Points):**

*   **MDX/Jamstack:** Finds the current ecosystem powerful but chaotic. "I have a `node_modules` folder with 2,000 dependencies just to render a blog post. The build is slow, and a random dependency update can break everything. It's a house of cards."
*   **Security:** He is deeply concerned about the security of running hundreds of unaudited npm packages in their build process.

**What He Wants from Mycel's ABI:**

*   A clean, well-documented, and language-agnostic interface (WASM) so his team can write plugins in Rust or Go, not just JavaScript.
*   A fast, performant way to make network and filesystem requests at compile-time.
*   A secure, sandboxed environment for plugins with a clear permissions model.
