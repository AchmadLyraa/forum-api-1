class CommentDetails {
	constructor(payload) {
		this.comments = payload.map((comment) => {
			this._verifyPayload(comment);

			const newComment = {
				id: comment.id,
				username: comment.username,
				date: comment.date,
				content: comment.content,
			};

			if (comment.isDelete) {
				newComment.content = "**komentar telah dihapus**";
			}

			return newComment;
		});
	}

	_verifyPayload({ id, username, date, content, isDelete }) {
		if (!id || !username || !date || !content || isDelete === undefined) {
			throw new Error("COMMENT_DETAILS.NOT_CONTAIN_NEEDED_PROPERTY");
		}

		if (
			typeof id !== "string" ||
			typeof username !== "string" ||
			typeof date !== "object" ||
			typeof content !== "string" ||
			typeof isDelete !== "boolean"
		) {
			throw new Error("COMMENT_DETAILS.NOT_MEET_DATA_TYPE_SPECIFICATION");
		}
	}
}

module.exports = CommentDetails;
