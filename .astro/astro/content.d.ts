declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"aaie": {
"overview.md": {
	id: "overview.md";
  slug: "overview";
  body: string;
  collection: "aaie";
  data: InferEntrySchema<"aaie">
} & { render(): Render[".md"] };
};
"aaie-data-hub": {
"overview.md": {
	id: "overview.md";
  slug: "overview";
  body: string;
  collection: "aaie-data-hub";
  data: InferEntrySchema<"aaie-data-hub">
} & { render(): Render[".md"] };
};
"aaie-design-engineering": {
"overview.md": {
	id: "overview.md";
  slug: "overview";
  body: string;
  collection: "aaie-design-engineering";
  data: InferEntrySchema<"aaie-design-engineering">
} & { render(): Render[".md"] };
};
"aaie-model-lab": {
"overview.md": {
	id: "overview.md";
  slug: "overview";
  body: string;
  collection: "aaie-model-lab";
  data: InferEntrySchema<"aaie-model-lab">
} & { render(): Render[".md"] };
};
"deprecated": {
"archive-overview.md": {
	id: "archive-overview.md";
  slug: "archive-overview";
  body: string;
  collection: "deprecated";
  data: InferEntrySchema<"deprecated">
} & { render(): Render[".md"] };
"sprint-goals.md": {
	id: "sprint-goals.md";
  slug: "sprint-goals";
  body: string;
  collection: "deprecated";
  data: InferEntrySchema<"deprecated">
} & { render(): Render[".md"] };
"team-proposal.md": {
	id: "team-proposal.md";
  slug: "team-proposal";
  body: string;
  collection: "deprecated";
  data: InferEntrySchema<"deprecated">
} & { render(): Render[".md"] };
"weekly-workflow-automation.md": {
	id: "weekly-workflow-automation.md";
  slug: "weekly-workflow-automation";
  body: string;
  collection: "deprecated";
  data: InferEntrySchema<"deprecated">
} & { render(): Render[".md"] };
};
"forking-worflow": {
"contribution-overview.md": {
	id: "contribution-overview.md";
  slug: "contribution-overview";
  body: string;
  collection: "forking-worflow";
  data: InferEntrySchema<"forking-worflow">
} & { render(): Render[".md"] };
"contributor-workflow.md": {
	id: "contributor-workflow.md";
  slug: "contributor-workflow";
  body: string;
  collection: "forking-worflow";
  data: InferEntrySchema<"forking-worflow">
} & { render(): Render[".md"] };
"folder-structure-policy.md": {
	id: "folder-structure-policy.md";
  slug: "folder-structure-policy";
  body: string;
  collection: "forking-worflow";
  data: InferEntrySchema<"forking-worflow">
} & { render(): Render[".md"] };
"guidelines-and-enforcement.md": {
	id: "guidelines-and-enforcement.md";
  slug: "guidelines-and-enforcement";
  body: string;
  collection: "forking-worflow";
  data: InferEntrySchema<"forking-worflow">
} & { render(): Render[".md"] };
"overview.md": {
	id: "overview.md";
  slug: "overview";
  body: string;
  collection: "forking-worflow";
  data: InferEntrySchema<"forking-worflow">
} & { render(): Render[".md"] };
"pr-review-process.md": {
	id: "pr-review-process.md";
  slug: "pr-review-process";
  body: string;
  collection: "forking-worflow";
  data: InferEntrySchema<"forking-worflow">
} & { render(): Render[".md"] };
"repository-structure.md": {
	id: "repository-structure.md";
  slug: "repository-structure";
  body: string;
  collection: "forking-worflow";
  data: InferEntrySchema<"forking-worflow">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
