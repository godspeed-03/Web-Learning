export default [
  {
    files: [ "**/*.js", "**/*.cjs", "**/*.mjs" ],
    rules: {
      "prefer-const": "warn",
      "no-constant-binary-expression": "error",
      "quotes": [ "error", "double" ],
      "indent": [ "error", 2 ],
      "no-tabs": "error",
      "semi": [ "error", "always" ],
      "space-in-parens": [ "error", "always" ],
      "array-bracket-spacing": [ "error", "always" ],
      "object-curly-spacing": [ "error", "always" ],
      "key-spacing": [
        "error",
        {
          "beforeColon": false,
          "afterColon": true
        }
      ],
      "space-before-blocks": [ "error", "always" ],
      "padding-line-between-statements": [
        "error", // This is the severity level
        { "blankLine": "always", "prev": "*", "next": [ "const", "let", "var" ] }, // Blank line before variable declarations
        { "blankLine": "always", "prev": [ "const", "let", "var" ], "next": "*" }  // Blank line after variable declarations
      ],
      "brace-style": [ "error", "1tbs" ],
      "newline-before-return": "error",
      "eol-last": [ "error", "always" ],
      "no-multiple-empty-lines": [ "error", { "max": 1, "maxEOF": 1 } ]
    }
  }
];
