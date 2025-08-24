import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_2CrHFv4a.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/aaie.astro.mjs');
const _page2 = () => import('./pages/aaie-data-hub.astro.mjs');
const _page3 = () => import('./pages/aaie-design-engineering.astro.mjs');
const _page4 = () => import('./pages/aaie-model-lab.astro.mjs');
const _page5 = () => import('./pages/deprecated.astro.mjs');
const _page6 = () => import('./pages/docs/_---slug_.astro.mjs');
const _page7 = () => import('./pages/forking-worflow.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/aaie/index.astro", _page1],
    ["src/pages/aaie-data-hub/index.astro", _page2],
    ["src/pages/aaie-design-engineering/index.astro", _page3],
    ["src/pages/aaie-model-lab/index.astro", _page4],
    ["src/pages/deprecated/index.astro", _page5],
    ["src/pages/docs/[...slug].astro", _page6],
    ["src/pages/forking-worflow/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
