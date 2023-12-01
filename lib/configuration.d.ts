/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Configuration {
  /**
   * JSON Schema URI (expected by some editors)
   */
  $schema?: string;
  /**
   * Default state for all rules
   */
  default?: boolean;
  /**
   * Path to configuration file to extend
   */
  extends?: string | null;
  /**
   * MD001/heading-increment : Heading levels should only increment by one level at a time : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md001.md
   */
  MD001?: boolean;
  /**
   * MD001/heading-increment : Heading levels should only increment by one level at a time : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md001.md
   */
  "heading-increment"?: boolean;
  /**
   * MD003/heading-style : Heading style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md003.md
   */
  MD003?:
    | boolean
    | {
        /**
         * Heading style
         */
        style?: "consistent" | "atx" | "atx_closed" | "setext" | "setext_with_atx" | "setext_with_atx_closed";
      };
  /**
   * MD003/heading-style : Heading style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md003.md
   */
  "heading-style"?:
    | boolean
    | {
        /**
         * Heading style
         */
        style?: "consistent" | "atx" | "atx_closed" | "setext" | "setext_with_atx" | "setext_with_atx_closed";
      };
  /**
   * MD004/ul-style : Unordered list style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md004.md
   */
  MD004?:
    | boolean
    | {
        /**
         * List style
         */
        style?: "consistent" | "asterisk" | "plus" | "dash" | "sublist";
      };
  /**
   * MD004/ul-style : Unordered list style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md004.md
   */
  "ul-style"?:
    | boolean
    | {
        /**
         * List style
         */
        style?: "consistent" | "asterisk" | "plus" | "dash" | "sublist";
      };
  /**
   * MD005/list-indent : Inconsistent indentation for list items at the same level : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md005.md
   */
  MD005?: boolean;
  /**
   * MD005/list-indent : Inconsistent indentation for list items at the same level : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md005.md
   */
  "list-indent"?: boolean;
  /**
   * MD007/ul-indent : Unordered list indentation : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md007.md
   */
  MD007?:
    | boolean
    | {
        /**
         * Spaces for indent
         */
        indent?: number;
        /**
         * Whether to indent the first level of the list
         */
        start_indented?: boolean;
        /**
         * Spaces for first level indent (when start_indented is set)
         */
        start_indent?: number;
      };
  /**
   * MD007/ul-indent : Unordered list indentation : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md007.md
   */
  "ul-indent"?:
    | boolean
    | {
        /**
         * Spaces for indent
         */
        indent?: number;
        /**
         * Whether to indent the first level of the list
         */
        start_indented?: boolean;
        /**
         * Spaces for first level indent (when start_indented is set)
         */
        start_indent?: number;
      };
  /**
   * MD009/no-trailing-spaces : Trailing spaces : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md009.md
   */
  MD009?:
    | boolean
    | {
        /**
         * Spaces for line break
         */
        br_spaces?: number;
        /**
         * Allow spaces for empty lines in list items
         */
        list_item_empty_lines?: boolean;
        /**
         * Include unnecessary breaks
         */
        strict?: boolean;
      };
  /**
   * MD009/no-trailing-spaces : Trailing spaces : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md009.md
   */
  "no-trailing-spaces"?:
    | boolean
    | {
        /**
         * Spaces for line break
         */
        br_spaces?: number;
        /**
         * Allow spaces for empty lines in list items
         */
        list_item_empty_lines?: boolean;
        /**
         * Include unnecessary breaks
         */
        strict?: boolean;
      };
  /**
   * MD010/no-hard-tabs : Hard tabs : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md010.md
   */
  MD010?:
    | boolean
    | {
        /**
         * Include code blocks
         */
        code_blocks?: boolean;
        /**
         * Fenced code languages to ignore
         */
        ignore_code_languages?: string[];
        /**
         * Number of spaces for each hard tab
         */
        spaces_per_tab?: number;
      };
  /**
   * MD010/no-hard-tabs : Hard tabs : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md010.md
   */
  "no-hard-tabs"?:
    | boolean
    | {
        /**
         * Include code blocks
         */
        code_blocks?: boolean;
        /**
         * Fenced code languages to ignore
         */
        ignore_code_languages?: string[];
        /**
         * Number of spaces for each hard tab
         */
        spaces_per_tab?: number;
      };
  /**
   * MD011/no-reversed-links : Reversed link syntax : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md011.md
   */
  MD011?: boolean;
  /**
   * MD011/no-reversed-links : Reversed link syntax : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md011.md
   */
  "no-reversed-links"?: boolean;
  /**
   * MD012/no-multiple-blanks : Multiple consecutive blank lines : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md012.md
   */
  MD012?:
    | boolean
    | {
        /**
         * Consecutive blank lines
         */
        maximum?: number;
      };
  /**
   * MD012/no-multiple-blanks : Multiple consecutive blank lines : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md012.md
   */
  "no-multiple-blanks"?:
    | boolean
    | {
        /**
         * Consecutive blank lines
         */
        maximum?: number;
      };
  /**
   * MD013/line-length : Line length : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md013.md
   */
  MD013?:
    | boolean
    | {
        /**
         * Number of characters
         */
        line_length?: number;
        /**
         * Number of characters for headings
         */
        heading_line_length?: number;
        /**
         * Number of characters for code blocks
         */
        code_block_line_length?: number;
        /**
         * Include code blocks
         */
        code_blocks?: boolean;
        /**
         * Include tables
         */
        tables?: boolean;
        /**
         * Include headings
         */
        headings?: boolean;
        /**
         * Strict length checking
         */
        strict?: boolean;
        /**
         * Stern length checking
         */
        stern?: boolean;
      };
  /**
   * MD013/line-length : Line length : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md013.md
   */
  "line-length"?:
    | boolean
    | {
        /**
         * Number of characters
         */
        line_length?: number;
        /**
         * Number of characters for headings
         */
        heading_line_length?: number;
        /**
         * Number of characters for code blocks
         */
        code_block_line_length?: number;
        /**
         * Include code blocks
         */
        code_blocks?: boolean;
        /**
         * Include tables
         */
        tables?: boolean;
        /**
         * Include headings
         */
        headings?: boolean;
        /**
         * Strict length checking
         */
        strict?: boolean;
        /**
         * Stern length checking
         */
        stern?: boolean;
      };
  /**
   * MD014/commands-show-output : Dollar signs used before commands without showing output : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md014.md
   */
  MD014?: boolean;
  /**
   * MD014/commands-show-output : Dollar signs used before commands without showing output : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md014.md
   */
  "commands-show-output"?: boolean;
  /**
   * MD018/no-missing-space-atx : No space after hash on atx style heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md018.md
   */
  MD018?: boolean;
  /**
   * MD018/no-missing-space-atx : No space after hash on atx style heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md018.md
   */
  "no-missing-space-atx"?: boolean;
  /**
   * MD019/no-multiple-space-atx : Multiple spaces after hash on atx style heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md019.md
   */
  MD019?: boolean;
  /**
   * MD019/no-multiple-space-atx : Multiple spaces after hash on atx style heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md019.md
   */
  "no-multiple-space-atx"?: boolean;
  /**
   * MD020/no-missing-space-closed-atx : No space inside hashes on closed atx style heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md020.md
   */
  MD020?: boolean;
  /**
   * MD020/no-missing-space-closed-atx : No space inside hashes on closed atx style heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md020.md
   */
  "no-missing-space-closed-atx"?: boolean;
  /**
   * MD021/no-multiple-space-closed-atx : Multiple spaces inside hashes on closed atx style heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md021.md
   */
  MD021?: boolean;
  /**
   * MD021/no-multiple-space-closed-atx : Multiple spaces inside hashes on closed atx style heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md021.md
   */
  "no-multiple-space-closed-atx"?: boolean;
  /**
   * MD022/blanks-around-headings : Headings should be surrounded by blank lines : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md022.md
   */
  MD022?:
    | boolean
    | {
        /**
         * Blank lines above heading
         */
        lines_above?: number | number[];
        /**
         * Blank lines below heading
         */
        lines_below?: number | number[];
      };
  /**
   * MD022/blanks-around-headings : Headings should be surrounded by blank lines : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md022.md
   */
  "blanks-around-headings"?:
    | boolean
    | {
        /**
         * Blank lines above heading
         */
        lines_above?: number | number[];
        /**
         * Blank lines below heading
         */
        lines_below?: number | number[];
      };
  /**
   * MD023/heading-start-left : Headings must start at the beginning of the line : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md023.md
   */
  MD023?: boolean;
  /**
   * MD023/heading-start-left : Headings must start at the beginning of the line : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md023.md
   */
  "heading-start-left"?: boolean;
  /**
   * MD024/no-duplicate-heading : Multiple headings with the same content : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md024.md
   */
  MD024?:
    | boolean
    | {
        /**
         * Only check sibling headings
         */
        allow_different_nesting?: boolean;
        /**
         * Only check sibling headings
         */
        siblings_only?: boolean;
      };
  /**
   * MD024/no-duplicate-heading : Multiple headings with the same content : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md024.md
   */
  "no-duplicate-heading"?:
    | boolean
    | {
        /**
         * Only check sibling headings
         */
        allow_different_nesting?: boolean;
        /**
         * Only check sibling headings
         */
        siblings_only?: boolean;
      };
  /**
   * MD025/single-title/single-h1 : Multiple top-level headings in the same document : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md025.md
   */
  MD025?:
    | boolean
    | {
        /**
         * Heading level
         */
        level?: number;
        /**
         * RegExp for matching title in front matter
         */
        front_matter_title?: string;
      };
  /**
   * MD025/single-title/single-h1 : Multiple top-level headings in the same document : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md025.md
   */
  "single-title"?:
    | boolean
    | {
        /**
         * Heading level
         */
        level?: number;
        /**
         * RegExp for matching title in front matter
         */
        front_matter_title?: string;
      };
  /**
   * MD025/single-title/single-h1 : Multiple top-level headings in the same document : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md025.md
   */
  "single-h1"?:
    | boolean
    | {
        /**
         * Heading level
         */
        level?: number;
        /**
         * RegExp for matching title in front matter
         */
        front_matter_title?: string;
      };
  /**
   * MD026/no-trailing-punctuation : Trailing punctuation in heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md026.md
   */
  MD026?:
    | boolean
    | {
        /**
         * Punctuation characters
         */
        punctuation?: string;
      };
  /**
   * MD026/no-trailing-punctuation : Trailing punctuation in heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md026.md
   */
  "no-trailing-punctuation"?:
    | boolean
    | {
        /**
         * Punctuation characters
         */
        punctuation?: string;
      };
  /**
   * MD027/no-multiple-space-blockquote : Multiple spaces after blockquote symbol : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md027.md
   */
  MD027?: boolean;
  /**
   * MD027/no-multiple-space-blockquote : Multiple spaces after blockquote symbol : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md027.md
   */
  "no-multiple-space-blockquote"?: boolean;
  /**
   * MD028/no-blanks-blockquote : Blank line inside blockquote : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md028.md
   */
  MD028?: boolean;
  /**
   * MD028/no-blanks-blockquote : Blank line inside blockquote : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md028.md
   */
  "no-blanks-blockquote"?: boolean;
  /**
   * MD029/ol-prefix : Ordered list item prefix : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md029.md
   */
  MD029?:
    | boolean
    | {
        /**
         * List style
         */
        style?: "one" | "ordered" | "one_or_ordered" | "zero";
      };
  /**
   * MD029/ol-prefix : Ordered list item prefix : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md029.md
   */
  "ol-prefix"?:
    | boolean
    | {
        /**
         * List style
         */
        style?: "one" | "ordered" | "one_or_ordered" | "zero";
      };
  /**
   * MD030/list-marker-space : Spaces after list markers : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md030.md
   */
  MD030?:
    | boolean
    | {
        /**
         * Spaces for single-line unordered list items
         */
        ul_single?: number;
        /**
         * Spaces for single-line ordered list items
         */
        ol_single?: number;
        /**
         * Spaces for multi-line unordered list items
         */
        ul_multi?: number;
        /**
         * Spaces for multi-line ordered list items
         */
        ol_multi?: number;
      };
  /**
   * MD030/list-marker-space : Spaces after list markers : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md030.md
   */
  "list-marker-space"?:
    | boolean
    | {
        /**
         * Spaces for single-line unordered list items
         */
        ul_single?: number;
        /**
         * Spaces for single-line ordered list items
         */
        ol_single?: number;
        /**
         * Spaces for multi-line unordered list items
         */
        ul_multi?: number;
        /**
         * Spaces for multi-line ordered list items
         */
        ol_multi?: number;
      };
  /**
   * MD031/blanks-around-fences : Fenced code blocks should be surrounded by blank lines : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md031.md
   */
  MD031?:
    | boolean
    | {
        /**
         * Include list items
         */
        list_items?: boolean;
      };
  /**
   * MD031/blanks-around-fences : Fenced code blocks should be surrounded by blank lines : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md031.md
   */
  "blanks-around-fences"?:
    | boolean
    | {
        /**
         * Include list items
         */
        list_items?: boolean;
      };
  /**
   * MD032/blanks-around-lists : Lists should be surrounded by blank lines : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md032.md
   */
  MD032?: boolean;
  /**
   * MD032/blanks-around-lists : Lists should be surrounded by blank lines : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md032.md
   */
  "blanks-around-lists"?: boolean;
  /**
   * MD033/no-inline-html : Inline HTML : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md033.md
   */
  MD033?:
    | boolean
    | {
        /**
         * Allowed elements
         */
        allowed_elements?: string[];
      };
  /**
   * MD033/no-inline-html : Inline HTML : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md033.md
   */
  "no-inline-html"?:
    | boolean
    | {
        /**
         * Allowed elements
         */
        allowed_elements?: string[];
      };
  /**
   * MD034/no-bare-urls : Bare URL used : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md034.md
   */
  MD034?: boolean;
  /**
   * MD034/no-bare-urls : Bare URL used : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md034.md
   */
  "no-bare-urls"?: boolean;
  /**
   * MD035/hr-style : Horizontal rule style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md035.md
   */
  MD035?:
    | boolean
    | {
        /**
         * Horizontal rule style
         */
        style?: string;
      };
  /**
   * MD035/hr-style : Horizontal rule style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md035.md
   */
  "hr-style"?:
    | boolean
    | {
        /**
         * Horizontal rule style
         */
        style?: string;
      };
  /**
   * MD036/no-emphasis-as-heading : Emphasis used instead of a heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md036.md
   */
  MD036?:
    | boolean
    | {
        /**
         * Punctuation characters
         */
        punctuation?: string;
      };
  /**
   * MD036/no-emphasis-as-heading : Emphasis used instead of a heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md036.md
   */
  "no-emphasis-as-heading"?:
    | boolean
    | {
        /**
         * Punctuation characters
         */
        punctuation?: string;
      };
  /**
   * MD037/no-space-in-emphasis : Spaces inside emphasis markers : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md037.md
   */
  MD037?: boolean;
  /**
   * MD037/no-space-in-emphasis : Spaces inside emphasis markers : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md037.md
   */
  "no-space-in-emphasis"?: boolean;
  /**
   * MD038/no-space-in-code : Spaces inside code span elements : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md038.md
   */
  MD038?: boolean;
  /**
   * MD038/no-space-in-code : Spaces inside code span elements : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md038.md
   */
  "no-space-in-code"?: boolean;
  /**
   * MD039/no-space-in-links : Spaces inside link text : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md039.md
   */
  MD039?: boolean;
  /**
   * MD039/no-space-in-links : Spaces inside link text : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md039.md
   */
  "no-space-in-links"?: boolean;
  /**
   * MD040/fenced-code-language : Fenced code blocks should have a language specified : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md040.md
   */
  MD040?:
    | boolean
    | {
        /**
         * List of languages
         */
        allowed_languages?: string[];
        /**
         * Require language only
         */
        language_only?: boolean;
      };
  /**
   * MD040/fenced-code-language : Fenced code blocks should have a language specified : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md040.md
   */
  "fenced-code-language"?:
    | boolean
    | {
        /**
         * List of languages
         */
        allowed_languages?: string[];
        /**
         * Require language only
         */
        language_only?: boolean;
      };
  /**
   * MD041/first-line-heading/first-line-h1 : First line in a file should be a top-level heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md041.md
   */
  MD041?:
    | boolean
    | {
        /**
         * Heading level
         */
        level?: number;
        /**
         * RegExp for matching title in front matter
         */
        front_matter_title?: string;
      };
  /**
   * MD041/first-line-heading/first-line-h1 : First line in a file should be a top-level heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md041.md
   */
  "first-line-heading"?:
    | boolean
    | {
        /**
         * Heading level
         */
        level?: number;
        /**
         * RegExp for matching title in front matter
         */
        front_matter_title?: string;
      };
  /**
   * MD041/first-line-heading/first-line-h1 : First line in a file should be a top-level heading : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md041.md
   */
  "first-line-h1"?:
    | boolean
    | {
        /**
         * Heading level
         */
        level?: number;
        /**
         * RegExp for matching title in front matter
         */
        front_matter_title?: string;
      };
  /**
   * MD042/no-empty-links : No empty links : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md042.md
   */
  MD042?: boolean;
  /**
   * MD042/no-empty-links : No empty links : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md042.md
   */
  "no-empty-links"?: boolean;
  /**
   * MD043/required-headings : Required heading structure : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md043.md
   */
  MD043?:
    | boolean
    | {
        /**
         * List of headings
         */
        headings?: string[];
        /**
         * Match case of headings
         */
        match_case?: boolean;
      };
  /**
   * MD043/required-headings : Required heading structure : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md043.md
   */
  "required-headings"?:
    | boolean
    | {
        /**
         * List of headings
         */
        headings?: string[];
        /**
         * Match case of headings
         */
        match_case?: boolean;
      };
  /**
   * MD044/proper-names : Proper names should have the correct capitalization : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md044.md
   */
  MD044?:
    | boolean
    | {
        /**
         * List of proper names
         */
        names?: string[];
        /**
         * Include code blocks
         */
        code_blocks?: boolean;
        /**
         * Include HTML elements
         */
        html_elements?: boolean;
      };
  /**
   * MD044/proper-names : Proper names should have the correct capitalization : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md044.md
   */
  "proper-names"?:
    | boolean
    | {
        /**
         * List of proper names
         */
        names?: string[];
        /**
         * Include code blocks
         */
        code_blocks?: boolean;
        /**
         * Include HTML elements
         */
        html_elements?: boolean;
      };
  /**
   * MD045/no-alt-text : Images should have alternate text (alt text) : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md045.md
   */
  MD045?: boolean;
  /**
   * MD045/no-alt-text : Images should have alternate text (alt text) : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md045.md
   */
  "no-alt-text"?: boolean;
  /**
   * MD046/code-block-style : Code block style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md046.md
   */
  MD046?:
    | boolean
    | {
        /**
         * Block style
         */
        style?: "consistent" | "fenced" | "indented";
      };
  /**
   * MD046/code-block-style : Code block style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md046.md
   */
  "code-block-style"?:
    | boolean
    | {
        /**
         * Block style
         */
        style?: "consistent" | "fenced" | "indented";
      };
  /**
   * MD047/single-trailing-newline : Files should end with a single newline character : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md047.md
   */
  MD047?: boolean;
  /**
   * MD047/single-trailing-newline : Files should end with a single newline character : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md047.md
   */
  "single-trailing-newline"?: boolean;
  /**
   * MD048/code-fence-style : Code fence style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md048.md
   */
  MD048?:
    | boolean
    | {
        /**
         * Code fence style
         */
        style?: "consistent" | "backtick" | "tilde";
      };
  /**
   * MD048/code-fence-style : Code fence style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md048.md
   */
  "code-fence-style"?:
    | boolean
    | {
        /**
         * Code fence style
         */
        style?: "consistent" | "backtick" | "tilde";
      };
  /**
   * MD049/emphasis-style : Emphasis style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md049.md
   */
  MD049?:
    | boolean
    | {
        /**
         * Emphasis style
         */
        style?: "consistent" | "asterisk" | "underscore";
      };
  /**
   * MD049/emphasis-style : Emphasis style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md049.md
   */
  "emphasis-style"?:
    | boolean
    | {
        /**
         * Emphasis style
         */
        style?: "consistent" | "asterisk" | "underscore";
      };
  /**
   * MD050/strong-style : Strong style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md050.md
   */
  MD050?:
    | boolean
    | {
        /**
         * Strong style
         */
        style?: "consistent" | "asterisk" | "underscore";
      };
  /**
   * MD050/strong-style : Strong style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md050.md
   */
  "strong-style"?:
    | boolean
    | {
        /**
         * Strong style
         */
        style?: "consistent" | "asterisk" | "underscore";
      };
  /**
   * MD051/link-fragments : Link fragments should be valid : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md051.md
   */
  MD051?: boolean;
  /**
   * MD051/link-fragments : Link fragments should be valid : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md051.md
   */
  "link-fragments"?: boolean;
  /**
   * MD052/reference-links-images : Reference links and images should use a label that is defined : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md052.md
   */
  MD052?:
    | boolean
    | {
        /**
         * Include shortcut syntax
         */
        shortcut_syntax?: boolean;
      };
  /**
   * MD052/reference-links-images : Reference links and images should use a label that is defined : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md052.md
   */
  "reference-links-images"?:
    | boolean
    | {
        /**
         * Include shortcut syntax
         */
        shortcut_syntax?: boolean;
      };
  /**
   * MD053/link-image-reference-definitions : Link and image reference definitions should be needed : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md053.md
   */
  MD053?:
    | boolean
    | {
        /**
         * Ignored definitions
         */
        ignored_definitions?: string[];
      };
  /**
   * MD053/link-image-reference-definitions : Link and image reference definitions should be needed : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md053.md
   */
  "link-image-reference-definitions"?:
    | boolean
    | {
        /**
         * Ignored definitions
         */
        ignored_definitions?: string[];
      };
  /**
   * MD054/link-image-style : Link and image style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md054.md
   */
  MD054?:
    | boolean
    | {
        /**
         * Allow autolinks
         */
        autolink?: boolean;
        /**
         * Allow inline links and images
         */
        inline?: boolean;
        /**
         * Allow full reference links and images
         */
        full?: boolean;
        /**
         * Allow collapsed reference links and images
         */
        collapsed?: boolean;
        /**
         * Allow shortcut reference links and images
         */
        shortcut?: boolean;
        /**
         * Allow URLs as inline links
         */
        url_inline?: boolean;
      };
  /**
   * MD054/link-image-style : Link and image style : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md054.md
   */
  "link-image-style"?:
    | boolean
    | {
        /**
         * Allow autolinks
         */
        autolink?: boolean;
        /**
         * Allow inline links and images
         */
        inline?: boolean;
        /**
         * Allow full reference links and images
         */
        full?: boolean;
        /**
         * Allow collapsed reference links and images
         */
        collapsed?: boolean;
        /**
         * Allow shortcut reference links and images
         */
        shortcut?: boolean;
        /**
         * Allow URLs as inline links
         */
        url_inline?: boolean;
      };
  /**
   * MD055/table-missing-border : Table is missing leading or trailing pipe character : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md055.md
   */
  MD055?: boolean;
  /**
   * MD055/table-missing-border : Table is missing leading or trailing pipe character : https://github.com/DavidAnson/markdownlint/blob/v0.32.1/doc/md055.md
   */
  "table-missing-border"?: boolean;
  /**
   * headings : MD001, MD003, MD018, MD019, MD020, MD021, MD022, MD023, MD024, MD025, MD026, MD036, MD041, MD043
   */
  headings?: boolean;
  /**
   * bullet : MD004, MD005, MD007, MD032
   */
  bullet?: boolean;
  /**
   * ul : MD004, MD005, MD007, MD030, MD032
   */
  ul?: boolean;
  /**
   * indentation : MD005, MD007, MD027
   */
  indentation?: boolean;
  /**
   * whitespace : MD009, MD010, MD012, MD027, MD028, MD030, MD037, MD038, MD039
   */
  whitespace?: boolean;
  /**
   * hard_tab : MD010
   */
  hard_tab?: boolean;
  /**
   * links : MD011, MD034, MD039, MD042, MD051, MD052, MD053, MD054
   */
  links?: boolean;
  /**
   * blank_lines : MD012, MD022, MD031, MD032, MD047
   */
  blank_lines?: boolean;
  /**
   * line_length : MD013
   */
  line_length?: boolean;
  /**
   * code : MD014, MD031, MD038, MD040, MD046, MD048
   */
  code?: boolean;
  /**
   * atx : MD018, MD019
   */
  atx?: boolean;
  /**
   * spaces : MD018, MD019, MD020, MD021, MD023
   */
  spaces?: boolean;
  /**
   * atx_closed : MD020, MD021
   */
  atx_closed?: boolean;
  /**
   * blockquote : MD027, MD028
   */
  blockquote?: boolean;
  /**
   * ol : MD029, MD030, MD032
   */
  ol?: boolean;
  /**
   * html : MD033
   */
  html?: boolean;
  /**
   * url : MD034
   */
  url?: boolean;
  /**
   * hr : MD035
   */
  hr?: boolean;
  /**
   * emphasis : MD036, MD037, MD049, MD050
   */
  emphasis?: boolean;
  /**
   * language : MD040
   */
  language?: boolean;
  /**
   * spelling : MD044
   */
  spelling?: boolean;
  /**
   * accessibility : MD045
   */
  accessibility?: boolean;
  /**
   * images : MD045, MD052, MD053, MD054
   */
  images?: boolean;
  /**
   * table : MD055
   */
  table?: boolean;
  [k: string]: unknown;
}
