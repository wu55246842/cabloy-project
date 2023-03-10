module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: false,
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-syntax-jsx'],
  comments: false,
};
