---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/src/routes/api/v2/conversations/[id]/message/[messageId]/+server.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { error, type RequestHandler } from "@sveltejs/kit";
import { superjsonResponse } from "$lib/server/api/utils/superjsonResponse";
import { requireAuth } from "$lib/server/api/utils/requireAuth";
import { resolveConversation } from "$lib/server/api/utils/resolveConversation";
import { collections } from "$lib/server/database";
import { authCondition } from "$lib/server/auth";
import { ObjectId } from "mongodb";

export const DELETE: RequestHandler = async ({ locals, params }) => {
	requireAuth(locals);

	const id = params.id ?? "";
	const messageId = params.messageId ?? "";

	const conversation = await resolveConversation(id, locals);

	if (!conversation.messages.map((m) => m.id).includes(messageId)) {
		error(404, "Message not found");
	}

	const filteredMessages = conversation.messages
		.filter(
			(message) =>
				!(message.id === messageId) && message.ancestors && !message.ancestors.includes(messageId)
		)
		.map((message) => {
			if (message.children && message.children.includes(messageId)) {
				message.children = message.children.filter((child) => child !== messageId);
			}
			return message;
		});

	const res = await collections.conversations.updateOne(
		{ _id: new ObjectId(conversation._id), ...authCondition(locals) },
		{ $set: { messages: filteredMessages } }
	);

	if (res.modifiedCount === 0) {
		error(500, "Deleting message failed");
	}

	return superjsonResponse({ success: true });
};
