import { ViteRouter } from '@bracketed/vite-plugin-router';
import react from '@vitejs/plugin-react';
import url from 'node:url';
import { UserConfig } from 'vite';
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
		new ViteRouter({
			dir: 'src/pages',
			output: 'src/Router.tsx',
			onRoutesGenerated: (r) => undefined,
		}).affix(),
	],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: url.fileURLToPath(new URL('.', import.meta.url)),
			},
			{
				find: '@src',
				replacement: url.fileURLToPath(new URL('./src', import.meta.url)),
			},
			{
				find: '@components',
				replacement: url.fileURLToPath(new URL('./src/components', import.meta.url)),
			},
			{
				find: '@pages',
				replacement: url.fileURLToPath(new URL('./src/pages', import.meta.url)),
			},
			{
				find: '@css',
				replacement: url.fileURLToPath(new URL('./src/css', import.meta.url)),
			},
			{
				find: '@content',
				replacement: url.fileURLToPath(new URL('./src/content', import.meta.url)),
			},
		],
	},
} satisfies UserConfig;
