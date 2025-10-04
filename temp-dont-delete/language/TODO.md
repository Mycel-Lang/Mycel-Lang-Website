# Mycel Specification TODO List

This document tracks the final set of tasks required to finalize the Mycel language specification.

---

### P0: Foundational Cleanup

- [ ] **1. Project-Wide Rename:**
  - [ ] Perform a global search-and-replace across all files to rename `Mycel` to `Mycel`, `mycel.toml` to `mycel.toml`, and `mycel-cli` to `mycel-cli`.

- [ ] **2. Resolve Inline Code Attribute Syntax:**
  - [ ] Update all relevant specification documents to replace the ` ``code``@js ` syntax with the new, approved ` ``js:code`` ` syntax.

### P1: Architecture & Performance Specification

- [ ] **3. Specify Secure Ancestor Chain:**
  - [ ] Update `backend/abi.md` to remove the `parent_id` concept.
  - [ ] Formally specify the new "Ancestor Chain" model, where the ABI context for every plugin call includes an `ancestors` array of "Redacted Nodes" (containing only `id`, `element_type`, and `properties`).

- [ ] **4. Formalize Compiler Architecture:**
  - [ ] **A:** Create a new `backend/compiler_architecture.md` file specifying the two-phase model, asynchronous evaluation, and caching for I/O-bound functions.
  - [ ] **B:** Update `backend/abi.md` to refine the `grid_context` payload for performance.

### P2: Documentation & Consolidation

- [ ] **4. Create Canonical Language Specification:**
  - [ ] **A:** Create a new top-level file: `Mycel Language Specification.md`.
  - [ ] **B:** Merge the content from all final specification files (e.g., `features/directives.md`, `features/links.md`, `features/table_syntax.md`, etc.) into the master document.
  - [ ] **C:** Delete the redundant files from the `features/` directory after they have been merged.

- [ ] **5. Define "Level 1 Mycel":**
  - [ ] Create a new `onboarding/level_1_mycel.md` document that defines the simple language subset for beginners.