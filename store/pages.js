const ALLOWED_STATUS = "published"; // can be array or string

export const state = () => ({
  page: {}
});

export const mutations = {
  SET_PAGE(state, payload) {
    state.page = payload;
  }
};

export const actions = {
  async getPage({ commit }, { slug }) {
    // const member = (
    //   await this.$axios.get("/api/v2/pages", {
    //     params: {
    //       slug,
    //       status: ALLOWED_STATUS
    //     }
    //   })
    // ).data["hydra:member"];
    const page = await import(`@/static/dump/membership.json`);

    // console.log(member[0].items)
    // for (var i = 0; i < member[0].items.length; i ++) {
    //   console.log(member[0].items[i].image);
    // }
    // console.log(member[0]);
    // console.log(page.default)
    commit("SET_PAGE", page.default);


    return page.default;
  }
};

export const getters = {};
