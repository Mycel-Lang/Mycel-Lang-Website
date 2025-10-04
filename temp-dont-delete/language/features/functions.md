# Mycel Functions

## 1. Overview

Functions are the primary mechanism for extending Mycel's capabilities. They allow for custom logic to be executed at compile-time, enabling dynamic content generation, data manipulation, and complex formatting. All functions are executed in a **secure, sandboxed environment** by default, ensuring that they cannot access sensitive resources without explicit permission.

The primary backend for functions is **WASM (WebAssembly)**, which allows for safe, high-performance, and language-agnostic extensions.

## 2. Function Syntax

Mycel introduces a more formal syntax for defining and using functions, including optional type annotations for improved safety and tooling.

### 2.1. Function Definition

Function definitions are inspired by modern programming languages and support optional typing.

**Syntax:**
`fn functionName(param1: type, param2: type) -> returnType { ... }`

- **`fn`**: The keyword to define a new function.
- **`functionName`**: The name of the function, which must be `camelCase`.
- **`parameters`**: A comma-separated list of parameters with optional `type` annotations.
- **`returnType`**: An optional type annotation for the function's return value.

**Example: A simple function with type annotations**
```mycel
fn add(a: number, b: number) -> number {
  return a + b;
}
```

### 2.2. Function Calls

Functions are called using the `@` symbol.

**Syntax:** `@functionName(arg1, arg2, ...)`

**Example:**
```mycel
The result of adding 5 and 3 is: @add(5, 3)
```

This would be rendered as:
> The result of adding 5 and 3 is: 8

## 3. Sandboxing and Permissions

Security is a core principle of Mycel's function system. By default, all functions run in a tightly controlled sandbox with no access to the file system, network, or environment variables.

### 3.1. The Sandbox

- **No I/O:** Functions cannot read from or write to the file system.
- **No Network:** Functions cannot make network requests.
- **Isolated Memory:** Each function runs in its own memory space, preventing interference with the compiler or other functions.

### 3.2. The Permission Model

To access resources outside the sandbox, a function must be explicitly granted permissions in the project's `mycel.toml` configuration file. This provides a clear and auditable security policy.

**Example: `mycel.toml`**
```toml
[permissions]

# Grant the @fetchBtcPrice function access to a specific API endpoint
"https://api.coindesk.com/v1/bpi/currentprice/BTC.json" = ["@fetchBtcPrice"]

# Grant the @readFile function read-only access to the "./data" directory
"file://./data/*" = { permissions = ["read"], functions = ["@readFile"] }
```

This model ensures that users are always in control of what their documents can do.

## 4. Type System

Mycel's optional type system helps prevent common errors and improves the developer experience.

### 4.1. Primitive Types

- `string`: A sequence of characters.
- `number`: A floating-point number.
- `boolean`: `true` or `false`.
- `any`: Any type (the default if no type is specified).

### 4.2. Type Checking

When type annotations are used, the Mycel compiler will perform type checking at compile-time. If a function is called with arguments of the wrong type, the compiler will raise an error.

**Example:**
```mycel
fn greet(name: string) -> string {
  return "Hello, " + name;
}

@greet(123) // This will cause a compile-time error
```

## 5. Use Cases

### Use Case 1: A Simple, Typed Function

**Mycel:**
```mycel
fn multiply(a: number, b: number) -> number {
  return a * b;
}

4 * 7 = @multiply(4, 7)
```

### Use Case 2: A Function Requiring Network Access

**Mycel:**
```mycel
// This function requires permission in mycel.toml
fn fetchBtcPrice() -> string {
  // Logic to fetch data from the permitted URL
  // would be implemented in the WASM module.
}

The current price of BTC is @fetchBtcPrice().
```

This revised function system provides a more secure, robust, and developer-friendly platform for extending Mycel, laying a strong foundation for a rich ecosystem of tools and extensions.