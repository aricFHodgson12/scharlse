export const state = () => ({});

export const mutations = {};

export const actions = {
  async getSetting(ctx, { code }) {
    const { data } = await this.$axios.get("/api/v2/settings", {
      params: { code }
    });

    return data["hydra:member"].find(o => o.code === code).value;
  }
};

export const getters = {};
