import antfu from '@antfu/eslint-config';

export default antfu({
  formatters: true,
  vue: true,
  unocss: true,
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
}, {
  rules: {
    'style/semi': ['error', 'always'],
    'vue/max-len': ['error', { code: 100 }],
    'no-console': 'warn',
    'antfu/if-newline': 'off',
    'vue/block-order': ['error', {
      order: [['template', 'script'], 'style'],
    }],
  },
});
