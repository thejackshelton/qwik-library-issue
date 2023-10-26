import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'node:path'

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite({ client: {outDir: '../../'}, ssr: {outDir: '../../'} }), tsconfigPaths(), {
      name: 'package-fix',
      resolveId(source, importer, options) {
        if(source.startsWith('../node_modules/@qwik-ui/headless/')) {
          const newPath = source.replace('../node_modules/', 'node_modules/');
          return newPath;
        }
        console.log('RESOLVE:', source, importer, options);
      },
      load(id, options) {
        console.log('LOAD:', id, options);
      },
    },],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
