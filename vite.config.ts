import { ViteRouter } from '@bracketed/vite-plugin-router';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import url from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';
import { UserConfig } from 'vite';
import checker from 'vite-plugin-checker';
import viteCompression from 'vite-plugin-compression';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
export default {
	server: {
		watch: {
			ignored: ['**/src/Router.tsx', '**/src/configuration/Routes.json', '**/public/sitemap.xml'],
		},
	},
	plugins: [
		react(),
		svgr(),
		tailwindcss(),
		visualizer(),
		viteCompression(),
		checker({
			typescript: true,
		}),
		new ViteRouter({
			dir: 'src/pages',
			output: 'src/Router.tsx',
			onRoutesGenerated: (r) => undefined,
		}).affix(),
	],
	css: {
		modules: {
			generateScopedName: '[hash:base64:48]',
		},
	},
	resolve: {
		alias: [
			{
				find: '@',
				replacement: url.fileURLToPath(new URL('./src', import.meta.url)),
			},
		],
	},
} satisfies UserConfig;
