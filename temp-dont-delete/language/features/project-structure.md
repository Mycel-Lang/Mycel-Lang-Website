# Mycel Project Structure

## 1. Overview

To ensure consistency, predictability, and a clean separation between user code and tool-managed artifacts, Mycel projects follow a standard directory structure. This layout is designed to be familiar to developers coming from other modern ecosystems like Rust (Cargo) and Node.js (npm).

## 2. Standard Project Layout

A typical Mycel project has the following structure at its root:

```
/my-mycel-project
|
|-- mycel.toml
|-- mycel.lock
|-- src/
|   |-- main.mycel
|-- .mycelenv/
|-- .gitignore
```

### 2.1. `mycel.toml` (The Manifest)

- **Purpose:** This is the main configuration file for the project, edited by the user.
- **Contents:** Project metadata (name, version), dependencies (`mycelpkg` packages), and the security policy (permission grants for functions).
- **Version Control:** This file **must** be committed to version control.

### 2.2. `mycel.lock` (The Lockfile)

- **Purpose:** This file guarantees deterministic and reproducible builds by locking the exact versions and checksums of every dependency.
- **Contents:** It is auto-generated and managed by the `mycel-cli` tool. It should **not** be edited by hand.
- **Version Control:** This file **must** be committed to version control so that all developers and build servers use the exact same dependency tree.

### 2.3. `src/` (Source Directory)

- **Purpose:** This directory contains all the Mycel source files written by the user.
- **Convention:** The main or entry-point file for a document is typically named `main.mycel`.
- **Version Control:** This directory **must** be committed to version control.

### 2.4. `.mycelenv/` (Mycel Environment)

- **Purpose:** This directory is managed entirely by the `mycel-cli` toolchain. It contains all temporary build artifacts, downloaded packages, and unpacked WASM modules.
- **Analogy:** It is analogous to `node_modules/` in Node.js or the `target/` directory in Rust.
- **Contents:** The internal structure of this directory is not standardized and may change between versions of the Mycel toolchain. It should not be manually inspected or modified.
- **Version Control:** This directory **must** be ignored by version control.

### 2.5. `.gitignore`

A standard Mycel project should have a `.gitignore` file at its root that contains, at a minimum, the following line:

```
# Ignore the Mycel toolchain environment
.mycelenv/
```
