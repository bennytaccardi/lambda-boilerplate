const { build } = require('esbuild')

build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    external: ['pg-native', 'oracledb', 'sqlite3', 'better-sqlite3', 'tedious', 'mysql', 'pg', 'pg-query-stream'],
    platform: 'node',
    outdir: 'dist',
});