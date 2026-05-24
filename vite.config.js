import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { createHtmlPlugin } from 'vite-plugin-html-transformer'
import Pages from 'vite-plugin-pages'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const filenamePath =
    process.env.VITE_MODE === 'production'
      ? '../layout/index.ejs'
      : 'index.html'
  const templatePath =
    process.env.VITE_MODE === 'production'
      ? 'templates/index_prod.html'
      : 'templates/index.html'

  return defineConfig({
    build: {
      outDir: 'source',
      assetsDir: 'static',
      rollupOptions: {
        output: {
          assetFileNames: assetInfo => {
            let extType = assetInfo.name.split('.').at(1)
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img'
            }
            return `static/${extType}/[hash][extname]`
          },
          chunkFileNames: 'static/js/[hash].js',
          entryFileNames: 'static/js/[hash].js'
        },
        plugins: []
      }
    },
    plugins: [
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',

        /**
         * custom insert position
         * @default: body-last
         */
        // inject: 'body-last' | 'body-first',

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: '__svg__icons__dom__'
      }),
      createHtmlPlugin({
        minify: true,
        entry: '/src/main.ts',
        filename: filenamePath,
        template: templatePath
      }),
      vue(),
      Pages({}),
      // Inject directly into the head tag
      {
        name: 'hexo-ejs-injector',
        enforce: 'post', // Ensures this runs AFTER vite-plugin-html's strict parsing
        transformIndexHtml(html) {

          const hexoTags = `
    <title><%- page.title ? page.title + " | " + config.title : config.title %></title>
    <%- open_graph() %>
`;

          // Find the <head> tag and insert our tags left after it
          return html.replace('<head>', `<head>${hexoTags}`);
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:4000/api',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        },
        '/assets': {
          target: 'http://localhost:4000/assets',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/assets/, '')
        }
      }
    }
  })
}
