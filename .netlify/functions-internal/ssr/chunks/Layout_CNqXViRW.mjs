import { c as createAstro, a as createComponent, b as addAttribute, h as renderHead, i as renderSlot, r as renderTemplate } from './astro/server_GhdY1Ova.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://aaie-documentation.netlify.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "AAIE Documentation - Artificial Assessment Intelligence for Educators" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-gray-50 min-h-screen"> <header class="bg-white shadow-sm border-b border-gray-200"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center py-6"> <div class="flex items-center"> <h1 class="text-2xl font-bold text-gray-900">AAIE Documentation</h1> </div> <nav class="hidden md:flex space-x-8"> <a href="/" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a> <a href="/aaie/" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Core AAIE</a> <a href="/aaie-data-hub/" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Data Hub</a> <a href="/aaie-model-lab/" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Model Lab</a> <a href="/aaie-design-engineering/" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Design Engineering</a> </nav> </div> </div> </header> <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="bg-white border-t border-gray-200 mt-12"> <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> <div class="text-center text-gray-500 text-sm"> <p>&copy; 2024 AAIE Project. All rights reserved.</p> </div> </div> </footer> </body></html>`;
}, "/Users/khushichoubey/Desktop/aaie-documentation/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
