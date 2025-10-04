# Mycel Toolchain Specification

## 1. Overview

This document specifies the command-line interface, configuration files, and core workflow for the Mycel toolchain. The primary entry point for all operations is a single executable named `mycel-cli`.

## 2. Configuration Files

### 2.1. `mycel.toml` (Project Manifest)

This file is the heart of a Mycel project, defining metadata, dependencies, and the security policy.

- **Purpose:** A declarative manifest for a Mycel project.
- **Location:** The root of a Mycel project.

Below is a detailed breakdown of the tables and keys within a `mycel.toml` file.

```toml
# mycel.toml - Configuration file for Mycel projects

# 1. Project Metadata (Standard TOML)
[project]
name = "Mycel Docs"
version = "1.0.0"
authors = ["Your Name <you@example.com>"]
description = "A description of your project."

# 2. Mycel-Specific Configuration
[tool.mycel]
compiler_version = "1.0"

# 3. Dependencies
# Declare the mycelpkg packages this project depends on.
[tool.mycel.dependencies]
# e.g., online-maps = "1.2"
local-utils = { path = "./packages/utils.mycelpkg" }

# 4. Security & Permissions
# Grant permissions to functions provided by your dependencies.
# This is the implementation of the "Walled Garden" security model.
[tool.mycel.permissions]

# Grant the `toUpperCase` function from the `local-utils` package no permissions.
"local-utils.toUpperCase" = {}

# Grant a hypothetical `renderMap` function network access to a specific domain.
# "online-maps.renderMap" = {
#   network = ["tile.openstreetmap.org"],
#   filesystem_read = ["./data/"]
# }
```

### 2.2. `mycel.lock` (Lockfile)

This file ensures that builds are deterministic and reproducible by locking the exact versions and checksums of every dependency.

- **It is auto-generated and managed by `mycel-cli` and should not be edited by hand.**
- **It must be committed to version control.**

## 4. Caching and Performance

To ensure fast build times, the `mycel-cli` build tool implements a sophisticated caching mechanism. By default, the results of expensive operations are cached, so they don't have to be re-computed on every build.

### 4.1. What is Cached

The following items are cached:

- **Remote Content:** The content of remote files included via the `@include` directive is cached locally.
- **Function Results:** The results of pure functions (functions that are deterministic and have no side effects) are cached. The compiler assumes that functions are pure unless they are explicitly marked as impure.

### 4.2. Cache Invalidation

The cache is automatically invalidated when:

- **A file is modified:** The hash of a file's content is used as part of the cache key. If the file is modified, the hash changes, and the cache is invalidated.
- **A function's signature changes:** If the signature of a function (i.e., its name and parameters) changes, the cache for that function is invalidated.
- **The cache is manually cleared:** The cache can be manually cleared by running the `mycel-cli clean` command.

### 4.3. Configuration

The caching behavior can be configured in the `mycel.toml` file.

**Example: `mycel.toml`**
```toml
[tool.mycel.caching]
# Disable caching entirely
enabled = false

# Set the cache directory
directory = ".mycel-cache"

# Set the cache expiration time (in seconds)
max_age = 3600 # 1 hour
```

### 4.4. The `mycel-cli clean` Command

This command will remove the cache directory, forcing a full rebuild of the project.

**Usage:**
`mycel-cli clean`