export const state = () => ({
  ConsulationPopup: false,
  MenuPopup: false,
  JoinusPopup: false,
  joinusEmail: ""
});

export const mutations = {
  SET_CONSULATIONPOPUP(state, event) {
    state.ConsulationPopup = event;
  },
  SET_MENUPOPUP(state, event) {
    state.MenuPopup = event;
  },
  SET_JOINUSPOPUP(state, event) {
    state.JoinusPopup = event;
  },
  SET_JOINUSEMAIL(state, payload) {
    state.joinusEmail = payload;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    // Not working for error page in production with generate => moved to layouts
    // await dispatch("menus/getMenus");
    // await dispatch("services/getServices");
    // await dispatch("presses/getPresses");
  }
};

export const getters = {};
