const ALLOWED_STATUS = "published"; // can be array or string

export const state = () => ({
  articles: [],
  article: {}
});

export const mutations = {
  SET_ARTICLES(state, payload) {
    state.articles = payload;
  },
  SET_ARTICLE(state, payload) {
    state.article = payload;
  }
};

export const actions = {
  async getArticles({ commit }, params) {
    const member = (
      await this.$axios.get("/api/v2/articles", {
        params: {
          ...params,
          status: ALLOWED_STATUS
        }
      })
    ).data["hydra:member"];
    commit("SET_ARTICLES", member);
  },
  async getArticle({ commit }, slug) {
    const member = (
      await this.$axios.get("/api/v2/articles", {
        params: {
          slug,
          status: ALLOWED_STATUS
        }
      })
    ).data["hydra:member"];

    if (!member[0]) {
      throw `Can't find article by slug.`;
    }

    commit("SET_ARTICLE", member[0]);

    return member[0];
  }
};

export const getters = {};
