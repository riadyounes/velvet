/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
                normalizeWhitespace: true,
                colormin: true,
                minifyFontValues: true,
                minifySelectors: true,
                mergeLonghand: true,
                mergeRules: true,
                reduceIdents: false,
                reduceInitial: true,
                reduceTransforms: true,
                zindex: false,
              },
            ],
          },
        }
      : {}),
  },
}
