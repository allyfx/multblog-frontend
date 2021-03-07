import api from "utils/api";

export default {
	login: async (body) => {
		return await api.post(
			`/users/authenticate`,
			body,
		);
	},
}
