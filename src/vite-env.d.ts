/// <reference types="node" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.css' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.scss' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.svg' {
	import React from 'react';
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}

declare module '*.sass' {
	const classes: { readonly [key: string]: string };
	export default classes;
}
