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
    aboutTheService: {
      speciality: '',
      price: '',
      paymentForm: [],
      paymentFormCredit: [],
      parcelsCredit: '',
    },
    requestData: '',
  },
  getters: {
  },
  mutations: {
    SET_ABOUTPROFESSIONAL(state, payload) {
      state.aboutProfessionalData = payload;
    },
    SET_ABOUTSERVICE(state, payload) {
      state.aboutTheService = payload;
    },
    DELETE_CREDITPARCEL(state, payload) {
      state.aboutTheService.parcelsCredit = payload;
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
