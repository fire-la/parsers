# @firela/parser-template

Template parser for AI-generated financial institution statement parsers.

## Purpose

This package serves as a reference template for creating new parsers. When AI (Claude) generates a new parser for a specific financial institution, it should follow the structure and patterns demonstrated here.

## AI Generation Guide

When generating a new parser, follow these steps:

### 1. Copy the Template Structure

```
packages/parser-[institution]/
├── src/
│   ├── [institution]-parser.ts  # Main parser implementation
│   └── index.ts                 # Exports
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── README.md
```

### 2. Implement the Parser Interface

```typescript
import { Parser, RawTransaction, ParseResult } from '@firela/parser-core';

export class InstitutionParser implements Parser<RawTransaction> {
  identify(filename: string, content: Buffer): boolean {
    // Check for institution-specific identifiers
  }

  parse(content: Buffer): ParseResult<RawTransaction> {
    // Parse the statement format
  }
}
```

### 3. Key Implementation Points

#### identify() Method

- Check filename patterns
- Look for identifying strings in content
- Be specific to avoid false positives

#### parse() Method

1. **Encoding Detection**: Handle non-UTF-8 encodings (GBK for Chinese banks)
2. **CSV Parsing**: Use `readCsvAsObjects()` from parser-core
3. **Date Parsing**: Use `parseDate()` for flexible date formats
4. **Amount Parsing**: Use `parseAmount()` for currency handling
5. **Error Handling**: Return `ParseFailure` for fatal errors
6. **Warnings**: Collect non-fatal issues in `warnings` array

### 4. Package Configuration

```json
{
  "name": "@firela/parser-[institution]",
  "version": "1.0.0",
  "dependencies": {
    "@firela/parser-core": "workspace:*"
  }
}
```

## Example Output

A successfully parsed transaction:

```typescript
{
  date: new Date('2024-01-15'),
  amount: new Decimal('-123.45'),  // negative = expense
  currency: 'CNY',
  description: 'Payment to merchant',
  payee: 'Merchant Name',
  metadata: {
    transactionId: 'TXN123456',
  },
}
```

## Related

- [@firela/parser-core](../parser-core) - Core interfaces and utilities

## License

MIT
