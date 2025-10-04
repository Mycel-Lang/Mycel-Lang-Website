# Mycel Error Code Registry

This document is the central registry for all compiler error and warning codes in the Mycel language. It serves as a reference for developers and a tracking system to prevent duplicate codes.

## Code Format

- **Errors:** `E` followed by a four-digit number (e.g., `E0001`).
- **Warnings:** `W` followed by a four-digit number (e.g., `W0001`).

## Error Code Categories

*   **`E0001` - `E0999`:** Syntax and Parsing Errors
*   **`E1000` - `E1999`:** Functions, Types, and Variables
*   **`E2000` - `E2999`:** Inclusion, Filesystem, and Network
*   **`E3000` - `E3999`:** Permissions and Security
*   **`E4000` - `E4999`:** Toolchain, Configuration, and Caching
*   **`E5000` - `E5999`:** System, Runtime, and Resource Errors

---

## Registered Errors

### Syntax and Parsing (`E0001` - `E0999`)

| Code  | Description                               |
| :---- | :---------------------------------------- |
| `E0001` | Unclosed delimiter (e.g., `*`, `_`, `"`). |
| `E0002` | Invalid table formatting: incorrect column count. |
| `E0003` | Unexpected character or token.            |
| `E0004` | Invalid heading syntax.                   |
| `E0005` | Malformed Block ID.                       |
| `E0006` | Invalid directive syntax.                 |
| `E0007` | Misaligned pipes in a table.              |
| `E0008` | Footnote definition without a corresponding reference. |
| `E0009` | Duplicate Block ID in the same document.  |

### Functions, Types, and Variables (`E1000` - `E1999`)

| Code  | Description                               |
| :---- | :---------------------------------------- |
| `E1000` | Mismatched types in function call.        |
| `E1001` | Undefined function or variable.           |
| `E1002` | Incorrect number of arguments for a function. |
| `E1003` | Attempted to re-assign a constant variable. |
| `E1004` | Invalid return type for a function.       |
| `E1005` | Function or variable name does not follow `camelCase` convention. |
| `E1006` | Operation on incompatible types (e.g., `"a" + 1`). |

### Inclusion, Filesystem, and Network (`E2000` - `E2999`)

| Code  | Description                               |
| :---- | :---------------------------------------- |
| `E2000` | File not found for `@include`.            |
| `E2001` | Block ID not found for `@include`.        |
| `E2002` | Circular inclusion detected.              |
| `E2003` | Network error while fetching remote content. |
| `E2004` | Failed to parse included data (e.g., invalid JSON, CSV). |
| `E2005` | Attempted to include a binary file not supported for inclusion. |

### Permissions and Security (`E3000` - `E3999`)

| Code  | Description                               |
| :---- | :---------------------------------------- |
| `E3000` | Network access denied for a function.     |
| `E3001` | Filesystem read access denied for a function. |
| `E3002` | Filesystem write access denied for a function. |
| `E3003` | Environment variable access denied.       |

### Toolchain, Configuration, and Caching (`E4000` - `E4999`)

| Code  | Description                               |
| :---- | :---------------------------------------- |
| `E4000` | Invalid `mycel.toml` configuration file.  |
| `E4001` | Could not resolve a dependency.           |
| `E4002` | Lockfile is out of sync with manifest.    |
| `E4003` | Failed to write to cache directory.       |
| `E4004` | Incompatible compiler version specified in manifest. |

### System, Runtime, and Resource Errors (`E5000` - `E5999`)

| Code  | Description                               |
| :---- | :---------------------------------------- |
| `E5000` | Out of memory (OOM) during compilation.   |
| `E5001` | Stack overflow (e.g., infinite recursion in a function). |
| `E5002` | Could not create output file or directory (permission denied). |
| `E5003` | Could not read source file (permission denied). |
| `E5004` | WASM module panicked during execution.      |
| `E5005` | Filesystem error: Disk is full.           |
