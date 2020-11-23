export const state = () => ({
  menus: []
});

export const mutations = {
  SET_MENUS(state, payload) {
    state.menus = payload;
  }
};

export const actions = {
  async getMenus({ commit }, payload) {
  // const { data } = await this.$axios.get("/api/v2/menus", payload);
	const menu = await import(`@/static/dump/menu.json`);
	// console.log(data["hydra:member"]);

	// for (var i = 0; i < data["hydra:member"].length; i ++) {
	// 	console.log(data["hydra:member"][i].menuItems);
	// }
	// console.log(menu.default)
    commit("SET_MENUS", menu.default);
    // commit("SET_MENUS", data["hydra:member"]);
  }
};

export const getters = {};
