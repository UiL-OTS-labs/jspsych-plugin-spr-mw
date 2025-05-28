import * as esbuild from 'esbuild'

await esbuild.build({
    entryPoints: [
        './src/jspsych-spr-moving-window.js',
    ],
    bundle:true,
    outdir: 'dist',
    minify: false,
    sourcemap: true,
    format: "esm"
})

await esbuild.build({
    entryPoints: [
        './test/test.js'
    ],
    bundle:true,
    outdir: 'dist-test',
    minify: false,
    sourcemap: true,
    format: "esm"
})
