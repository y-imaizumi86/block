// stylelint.config.cjs

module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier-scss',
  ],
  overrides: [
    {
      files: ['**/*.astro', '**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'property-no-vendor-prefix': null,
    'comment-empty-line-before': null,
    'media-feature-range-notation': 'prefix',
    'no-invalid-position-at-import-rule': null,
    'scss/at-rule-no-unknown': true,
    'selector-class-pattern': [
      '^[a-z0-9\\-]+(?:__[a-z0-9\\-]+)?(?:--[a-z0-9\\-]+)?$',
      {
        message: 'Expected class selector to follow BEM convention (block__element--modifier)',
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'declaration-block-no-redundant-longhand-properties': null,
  },
  ignoreFiles: ['node_modules/**', 'dist/**'],
};
