/* empty css                                    */
import { a as createComponent, e as renderUniqueStylesheet, f as renderScriptElement, g as createHeadAndContent, d as renderComponent, r as renderTemplate, u as unescapeHTML, c as createAstro, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_GhdY1Ova.mjs';
import 'kleur/colors';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { j as isCoreRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError } from '../../chunks/astro/assets-service_KaWCaEtj.mjs';
import * as devalue from 'devalue';
import { $ as $$Layout } from '../../chunks/Layout_CNqXViRW.mjs';
export { renderers } from '../../renderers.mjs';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isCoreRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('../../chunks/_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://aaie-documentation.netlify.app", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('../../chunks/_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/getting-started.md": () => import('../../chunks/getting-started_CqjO_i9F.mjs'),"/src/content/meetings/scrum-meeting-2024-01-15.md": () => import('../../chunks/scrum-meeting-2024-01-15_B_fHvbqA.mjs'),"/src/content/tech-refs/api-endpoints.md": () => import('../../chunks/api-endpoints_DDyw4IcX.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"meetings":{"type":"content","entries":{"scrum-meeting-2024-01-15":"/src/content/meetings/scrum-meeting-2024-01-15.md"}},"docs":{"type":"content","entries":{"getting-started":"/src/content/docs/getting-started.md"}},"tech-refs":{"type":"content","entries":{"api-endpoints":"/src/content/tech-refs/api-endpoints.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/docs/getting-started.md": () => import('../../chunks/getting-started_S0yqiQzD.mjs'),"/src/content/meetings/scrum-meeting-2024-01-15.md": () => import('../../chunks/scrum-meeting-2024-01-15_BGx2HcgD.mjs'),"/src/content/tech-refs/api-endpoints.md": () => import('../../chunks/api-endpoints_Cx7tgz5a.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

const $$Astro = createAstro("https://aaie-documentation.netlify.app");
async function getStaticPaths() {
  const docs = await getCollection("docs");
  const meetings = await getCollection("meetings");
  const techRefs = await getCollection("tech-refs");
  const paths = [
    // Documentation pages
    ...docs.map((doc) => ({
      params: { slug: doc.slug },
      props: {
        entry: doc,
        type: "doc",
        category: doc.data.category || "general"
      }
    })),
    // Meeting notes
    ...meetings.map((meeting) => ({
      params: { slug: `meetings/${meeting.slug}` },
      props: {
        entry: meeting,
        type: "meeting",
        category: "meetings"
      }
    })),
    // Technical references
    ...techRefs.map((ref) => ({
      params: { slug: `tech-refs/${ref.slug}` },
      props: {
        entry: ref,
        type: "tech-ref",
        category: ref.data.category || "general"
      }
    }))
  ];
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry, type, category } = Astro2.props;
  const { Content } = await entry.render();
  const allDocs = await getCollection("docs");
  const categoryDocs = allDocs.filter((doc) => doc.data.category === category && !doc.data.draft);
  const relatedContent = categoryDocs.filter((doc) => doc.slug !== entry.slug).slice(0, 3);
  const pageTitle = entry.data.title;
  const pageDescription = entry.data.description || `Documentation for ${entry.data.title}`;
  const pageCategory = category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${pageTitle} - AAIE Documentation`, "description": pageDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 sm:px-6 lg:px-8"> <!-- Breadcrumb Navigation --> <div class="mb-8"> <nav class="flex" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-3"> <li class="inline-flex items-center"> <a href="/" class="text-gray-500 hover:text-gray-700">Home</a> </li> <li> <div class="flex items-center"> <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <a${addAttribute(`/${category === "general" ? "" : category}`, "href")} class="ml-1 text-sm font-medium text-gray-500 hover:text-gray-700 md:ml-2"> ${pageCategory} </a> </div> </li> <li> <div class="flex items-center"> <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">${pageTitle}</span> </div> </li> </ol> </nav> </div> <!-- Page Header --> <div class="mb-8"> <div class="flex items-center mb-4"> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"> ${type === "doc" ? "Documentation" : type === "meeting" ? "Meeting Notes" : "Technical Reference"} </span> ${entry.data.category && renderTemplate`<span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"> ${entry.data.category} </span>`} </div> <h1 class="text-3xl font-bold text-gray-900 mb-4">${pageTitle}</h1> ${pageDescription && renderTemplate`<p class="text-lg text-gray-600 mb-4">${pageDescription}</p>`} <!-- Metadata --> <div class="flex flex-wrap items-center text-sm text-gray-500 space-x-4"> ${entry.data.author && renderTemplate`<span>By ${entry.data.author}</span>`} ${entry.data.date && renderTemplate`<span>Published ${formatDate(entry.data.date)}</span>`} ${entry.data.lastUpdated && renderTemplate`<span>Updated ${formatDate(entry.data.lastUpdated)}</span>`} ${entry.data.tags && entry.data.tags.length > 0 && renderTemplate`<div class="flex items-center space-x-2"> <span>Tags:</span> ${entry.data.tags.map((tag) => renderTemplate`<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"> ${tag} </span>`)} </div>`} </div> </div> <!-- Main Content --> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8"> <!-- Content Area --> <div class="lg:col-span-3"> <div class="prose prose-lg max-w-none bg-white rounded-lg shadow-sm p-8"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> <!-- Sidebar --> <div class="lg:col-span-1"> <div class="sticky top-8"> <!-- Table of Contents --> <div class="bg-white rounded-lg shadow-sm p-6 mb-6"> <h3 class="text-lg font-semibold text-gray-900 mb-4">On This Page</h3> <nav class="space-y-2" id="toc"> <!-- TOC will be populated by JavaScript --> </nav> </div> <!-- Related Content --> ${relatedContent.length > 0 && renderTemplate`<div class="bg-white rounded-lg shadow-sm p-6"> <h3 class="text-lg font-semibold text-gray-900 mb-4">Related</h3> <ul class="space-y-3"> ${relatedContent.map((doc) => renderTemplate`<li> <a${addAttribute(`/docs/${doc.slug}`, "href")} class="text-blue-600 hover:text-blue-800 hover:underline"> ${doc.data.title} </a> </li>`)} </ul> </div>`} <!-- Quick Actions --> <div class="bg-white rounded-lg shadow-sm p-6 mt-6"> <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3> <div class="space-y-3"> <a${addAttribute(`/docs/${entry.slug}.md`, "href")} class="flex items-center text-sm text-gray-600 hover:text-gray-900"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path> </svg>
View Source
</a> <a${addAttribute(`https://github.com/KhushiChoubey26/aaie-documentation/edit/development/src/content/docs/${entry.slug}.md`, "href")} class="flex items-center text-sm text-gray-600 hover:text-gray-900"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg>
Edit on GitHub
</a> </div> </div> </div> </div> </div> </div> ` })} `;
}, "/Users/khushichoubey/Desktop/aaie-documentation/src/pages/docs/[...slug].astro", void 0);

const $$file = "/Users/khushichoubey/Desktop/aaie-documentation/src/pages/docs/[...slug].astro";
const $$url = "/docs/[...slug]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
