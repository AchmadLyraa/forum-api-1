const InvariantError = require("./InvariantError");

const DomainErrorTranslator = {
	translate(error) {
		return DomainErrorTranslator._directories[error.message] || error;
	},
};

DomainErrorTranslator._directories = {
	"REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
		"tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada"
	),

	"REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
		"tidak dapat membuat user baru karena tipe data tidak sesuai"
	),
	"REGISTER_USER.USERNAME_LIMIT_CHAR": new InvariantError(
		"tidak dapat membuat user baru karena karakter username melebihi batas limit"
	),
	"REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER": new InvariantError(
		"tidak dapat membuat user baru karena username mengandung karakter terlarang"
	),
	"USER_LOGIN.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
		"harus mengirimkan username dan password"
	),
	"USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
		"username dan password harus string"
	),
	"REFRESH_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN":
		new InvariantError("harus mengirimkan token refresh"),
	"REFRESH_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION":
		new InvariantError("refresh token harus string"),
	"DELETE_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN":
		new InvariantError("harus mengirimkan token refresh"),
	"DELETE_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION":
		new InvariantError("refresh token harus string"),
	"NEW_THREAD.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
		"gagal membuat thread baru karena ada properti yang belum lengkap"
	),
	"NEW_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
		"gagal membuat thread baru karena tipe data tidak sesuai"
	),
	"NEW_THREAD.TITLE_LIMIT_CHAR": new InvariantError(
		"gagal membuat thread baru karena panjang judul melebihi batas yang diizinkan"
	),

	"THREAD_DETAILS.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
		"gagal membuat detail thread baru karena ada properti yang belum lengkap"
	),
	"THREAD_DETAILS.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
		"gagal membuat detail thread baru karena tipe data tidak sesuai"
	),
	"NEW_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
		"gagal membuat komentar baru karena properti yang diperlukan tidak ditemukan"
	),
	"NEW_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
		"gagal membuat komentar baru karena tipe data tidak sesuai"
	),
	"THREAD_DETAILS.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
		"gagal membuat detail thread baru karena ada properti yang belum lengkap"
	),
	"THREAD_DETAILS.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
		"gagal membuat detail thread baru karena tipe data tidak sesuai"
	),
};

module.exports = DomainErrorTranslator;
