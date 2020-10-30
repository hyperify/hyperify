import { terser } from "rollup-plugin-terser";
import typescript from 'rollup-plugin-typescript2';

export default {
    input: './ts/index.ts',

    output: [
        {
            file: './dist/js/hyperify.js',
            format: 'iife',
            name: 'hyperify'
        },
        {
            file: './dist/js/hyperify.min.js',
            format: 'iife',
            name: 'hyperify',
            plugins: [
                terser()
            ]
        },

        {
            file: "./dist/js/hyperify.esm.js",
            format: "esm",
            name: 'hyperify'
        },
        {
            file: "./dist/js/hyperify.esm.min.js",
            format: "esm",
            name: 'hyperify',
            plugins: [
                terser()
            ]
        },

        {
            file: "./dist/js/hyperify.amd.js",
            format: "amd",
            name: 'hyperify'
        },
        {
            file: "./dist/js/hyperify.amd.min.js",
            format: "amd",
            name: 'hyperify',
            plugins: [
                terser()
            ]
        },

        {
            file: "./dist/js/hyperify.umd.js",
            format: "umd",
            name: 'hyperify'
        },
        {
            file: "./dist/js/hyperify.umd.min.js",
            format: "umd",
            name: 'hyperify',
            plugins: [
                terser()
            ]
        }
    ],

    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',
        })
    ]
}