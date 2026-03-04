# @firela/parser-core

Core parser interfaces and utilities for financial institution statement parsing.

## Installation

```bash
npm install @firela/parser-core
# or
pnpm add @firela/parser-core
```

## Usage

```typescript
import { Parser, RawTransaction, ParseResult } from '@firela/parser-core';

class MyParser implements Parser<RawTransaction> {
  identify(filename: string, content: Buffer): boolean {
    // Implement format detection
    return false;
  }

  parse(content: Buffer): ParseResult<RawTransaction> {
    // Implement parsing logic
    return {
      success: true,
      data: [],
    };
  }
}
```

## API Reference

### Types

- `Parser<T>` - Interface for implementing a parser
- `RawTransaction` - Standard transaction output format
- `ParseResult<T>` - Result type for parse operations
- `Result<T, E>` - Generic result type for error handling

### Utilities

_This package will include the following utilities (to be migrated):_

- `readCsvAsObjects()` - CSV file reading with encoding detection
- `parseDate()` - Flexible date parsing
- `parseAmount()` - Amount parsing with currency support
- `detectEncoding()` - File encoding detection
- `convertEncoding()` - Encoding conversion

## License

MIT
