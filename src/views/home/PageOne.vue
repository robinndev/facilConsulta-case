<template>
  <div class="pageone">
    <div class="pageone__whitebox">
      <header class="pageone__header">
        <h1>Sobre o profissional</h1>
        <p>Dados do profissional</p>
      </header>
      <div class="pageone__main">
        <form action="">
          <label for="fullname">
            Nome completo*
            <input
              v-model="aboutProfessionalData.name"
              class="pageone__name"
              id="fullname"
              type="text"
            />
            <!-- <h1 v-if="inputErrorFunction">ERROR</h1> -->
          </label>
          <label for="cpf">
            CPF*
            <input v-model="aboutProfessionalData.cpf" class="pageone__cpf" id="cpf" type="text" />
          </label>
          <label for="phone">
            Número de celular*
            <input
              v-model="aboutProfessionalData.phone"
              class="pageone__phone"
              id="phone"
              type="text"
            />
          </label>
          <div class="pageone__dropdown">
            <label class="pageone__drop" for="states">
              Estado*
              <select v-model="aboutProfessionalData.state" name="" id="states">
                <option
                  @click="clickTeste"
                  v-for="(state, index) in states"
                  v-bind:key="index"
                  v-bind:value="state.id"
                >
                  {{ state.nome }}
                </option>
              </select>
            </label>
            <label class="pageone__drop" for="states">
              Cidade*
              <select v-model="aboutProfessionalData.city" name="" id="statcase_facil-consultaes">
                <option
                  selected="clickTeste"
                  v-for="(city, index) in citys"
                  :key="index"
                  v-bind:value="city.id"
                >
                  {{ city.nome }}
                </option>
              </select>
            </label>
          </div>
        </form>
        <div class="pageone__image">
          <img src="@/assets/page-one.png" alt="" />
        </div>
      </div>
      <div class="pageone__next">
        <LoadingBar number="1 de 2" class="pageone__loadingbar" :percentage="50" />
        <ButtonNext @click="clickTeste" styles="primary" class="pageone__button" title="PRÓXIMO" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>

<script>
import LoadingBar from '@/components/shared/loading-bar/LoadingBar.vue';
import ButtonNext from '@/components/shared/button/ButtonNext.vue';
import axios from 'axios';

export default {
  name: 'PageOne',
  data() {
    return {
      aboutProfessionalData: {
        name: this.$store.state.aboutProfessionalData.name,
        cpf: this.$store.state.aboutProfessionalData.cpf,
        phone: this.$store.state.aboutProfessionalData.phone,
        state: this.$store.state.aboutProfessionalData.state,
        city: this.$store.state.aboutProfessionalData.city,
      },
      states: [],
      citys: [],
      teste1: '',
      inputError: false,
    };
  },
  components: {
    LoadingBar,
    ButtonNext,
  },
  methods: {
    clickTeste() {
      console.log(String(this.aboutProfessionalData.name).length);
      console.log(this.aboutProfessionalData.name);
      console.log('Clicou');
      this.setProfissional();
      // console.log(this.aboutProfessionalData.state);
      // console.log(this.states);
    },
    setProfissional() {
      this.$store.commit('SET_ABOUTPROFESSIONAL', this.aboutProfessionalData);
    },
    // inputErrorFunction() {
    //   if (
    //     this.aboutProfessionalData.name.length >= 1
    //     && this.aboutProfessionalData.name.length <= 3
    //   ) {
    //     console.log('ERROR');
    //   }
    // },
    requestForStates() {
      axios
        .get('https://api-teste-front-end-fc.herokuapp.com/estados')
        .then((res) => {
          this.states = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    requestForCity() {
      axios
        .get(
          `https://api-teste-front-end-fc.herokuapp.com/cidades?estadoId=${this.aboutProfessionalData.state}`,
        )
        .then((res) => {
          this.citys = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    'aboutProfessionalData.state': 'requestForCity',
    // 'aboutProfessionalData.name': 'inputErrorFunction',
  },
  mounted() {
    this.requestForStates();
    this.requestForCity();
  },
};
</script>
