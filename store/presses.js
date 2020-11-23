export const state = () => ({
  presses: []
});

export const mutations = {
  SET_PRESSES(state, payload) {
    state.presses = payload;
  }
};

export const actions = {
  async getPresses({ commit }, payload) {
    const { data } = await this.$axios.get("/api/v2/press", payload);

    commit("SET_PRESSES", data["hydra:member"]);
  }
};

export const getters = {};
