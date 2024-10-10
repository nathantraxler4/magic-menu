////////////////////////////////////////////////////////////////////////////
//
// Copyright 2022 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

// eslint-disable-next-line no-undef
module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            '@realm/babel-plugin',
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
                        '@app': './app'
                    }
                }
            ]
        ]
    }
}
