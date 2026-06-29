import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './src/App'

const prerenderHomepage = {
  name: 'prerender-homepage',
  apply: 'build' as const,
  transformIndexHtml(html: string) {
    const app = createElement(StaticRouter, { location: '/' }, createElement(App))
    const markup = renderToString(app)
    return html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
  },
}

export default defineConfig({
  plugins: [react(), prerenderHomepage],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  build: {
    target: 'es2022',
    modulePreload: { polyfill: false },
  },
})
