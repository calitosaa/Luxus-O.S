---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/lib/utils/tree/tree.d.ts
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

export type TreeId = string;

export type Tree<T> = {
	rootMessageId?: TreeId;
	messages: TreeNode<T>[];
};

export type TreeNode<T> = T & {
	id: TreeId;
	ancestors?: TreeId[];
	children?: TreeId[];
};

export type NewNode<T> = Omit<TreeNode<T>, "id">;
