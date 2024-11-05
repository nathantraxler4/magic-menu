// eslint-disable-next-line no-undef
module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            [
                'module-resolver',
                {
                    extensions: [
                        '.ios.js',
                        '.android.js',
                        '.ios.jsx',
                        '.android.jsx',
                        '.js',
                        '.jsx',
                        '.json',
                        '.ts',
                        '.tsx'
                    ],
                    root: ['.'],
                    alias: {
                        '@/app': './app'
                    }
                }
            ]
        ]
    }
}
