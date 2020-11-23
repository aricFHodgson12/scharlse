export const state = () => ({
  services: []
});

export const mutations = {
  SET_SERVICES: (state, data) => (state.services = data)
};

export const actions = {
  async getServices({ commit }) {
    const { data } = await this.$axios.get("/api/v2/services");

    commit("SET_SERVICES", data["hydra:member"]);
  }
};

export const getters = {};
