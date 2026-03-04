/**
 * Template Parser - Demonstrates how to implement a standard CSV parser
 *
 * This file serves as a reference template for AI-generated parsers.
 *
 * When generating a new parser, AI should:
 * 1. Copy this file structure
 * 2. Adjust field mappings based on the actual statement format
 * 3. Add format-specific identify() logic
 * 4. Implement proper date and amount parsing
 * 5. Handle edge cases specific to the institution
 *
 * @example
 * ```typescript
 * // AI-generated parser for ABC Bank
 * export class ABCBankParser implements Parser<RawTransaction> {
 *   identify(filename: string, content: Buffer): boolean {
 *     return filename.includes('abc_bank') && content.includes('ABC Bank');
 *   }
 *
 *   parse(content: Buffer): ParseResult<RawTransaction> {
 *     // ... parsing logic specific to ABC Bank format
 *   }
 * }
 * ```
 */

// Note: These types will be imported from @firela/parser-core after Phase 27-02
// For now, they are defined inline as placeholders

/**
 * Raw transaction data extracted from a statement.
 */
export interface RawTransaction {
  date: Date;
  amount: number;
  currency: string;
  description: string;
  payee?: string;
  metadata?: Record<string, string | number | boolean>;
}

/**
 * Result of parsing a file.
 */
export type ParseResult<T> =
  | { success: true; data: T[]; warnings?: ParseWarning[] }
  | { success: false; errors: ParseError[]; warnings?: ParseWarning[] };

/**
 * Parsing error details.
 */
export interface ParseError {
  type: string;
  message: string;
  line?: number;
  raw?: string;
}

/**
 * Parsing warning details.
 */
export interface ParseWarning {
  type: string;
  message: string;
  line?: number;
  raw?: string;
}

/**
 * Parser interface - pure file format parsing.
 */
export interface Parser<T extends RawTransaction = RawTransaction> {
  identify(filename: string, content: Buffer): boolean;
  parse(content: Buffer): ParseResult<T>;
}

/**
 * Template Parser class demonstrating the standard parser structure.
 */
export class TemplateParser implements Parser<RawTransaction> {
  /**
   * Identify if this parser can handle the given file.
   *
   * Implementation guidelines:
   * - Check filename patterns (e.g., contains bank name)
   * - Check file content for identifying strings
   * - Be specific to avoid false positives
   * - Return true only if confident this is the right parser
   *
   * @param _filename - File name (may include path)
   * @param _content - File content as Buffer
   * @returns true if this parser can handle the file
   */
  identify(_filename: string, _content: Buffer): boolean {
    // TODO: Implement format identification logic
    //
    // Example patterns to check:
    // - filename.includes('bank_name')
    // - content.includes('specific header text')
    // - content.includes('expected column names')
    //
    // Be specific to avoid conflicts with other parsers
    return false;
  }

  /**
   * Parse file content into raw transactions.
   *
   * Implementation guidelines:
   * 1. Read and parse the file format (CSV, Excel, etc.)
   * 2. Extract transaction data from each row
   * 3. Convert dates to Date objects
   * 4. Parse amounts (handle signs, currencies, formats)
   * 5. Collect warnings for non-fatal issues
   * 6. Return early on fatal errors
   *
   * @param _content - File content as Buffer
   * @returns Parse result with transactions or errors
   */
  parse(_content: Buffer): ParseResult<RawTransaction> {
    // TODO: Implement parsing logic
    //
    // Typical flow:
    // 1. Detect encoding and convert to UTF-8 if needed
    // 2. Parse CSV/Excel rows
    // 3. For each row:
    //    - Extract date field and parse it
    //    - Extract amount field and parse it
    //    - Extract description/payee fields
    //    - Handle missing optional fields
    // 4. Collect warnings for skipped rows
    // 5. Return success with transactions, or failure with errors

    return {
      success: false,
      errors: [{ type: 'INVALID_FORMAT', message: 'Not implemented' }],
    };
  }
}
