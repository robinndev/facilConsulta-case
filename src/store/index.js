import { createStore } from 'vuex';

export default createStore({
  state: {
    aboutProfessionalData: {
      name: '',
      cpf: '',
      phone: '',
      state: '',
      city: '',
    },
    requestData: '',
  },
  getters: {
  },
  mutations: {
    SET_ABOUTPROFESSIONAL(state, payload) {
      state.aboutProfessionalData = payload;
    },
    SET_REQUEST_DATA(state, payload) {
      state.requestData = payload;
    },
  },
  actions: {
  },
  modules: {
  },
});
