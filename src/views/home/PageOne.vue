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
                  v-bind:value="city.nome"
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
        <router-link :to="{ name: 'pagetwo' }"
          ><ButtonNext @click="commit" styles="primary" class="pageone__button" title="PRÓXIMO"
        /></router-link>
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
import http from '@/services/http';

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
      cpfRequest: '',
      inputError: false,
    };
  },
  components: {
    LoadingBar,
    ButtonNext,
  },

  computed: {},

  methods: {
    commit() {
      this.$store.commit('SET_ABOUTPROFESSIONAL', this.aboutProfessionalData);
    },
    // clickTeste() {
    //   console.log(String(this.aboutProfessionalData.name).length);
    //   console.log(this.aboutProfessionalData.name);
    //   console.log('Clicou');
    //   this.setProfissional();
    // console.log(this.aboutProfessionalData.state);
    // console.log(this.states);
    // },
    // setProfissional() {
    //   this.$store.commit('SET_ABOUTPROFESSIONAL', this.aboutProfessionalData);
    // },
    // inputErrorFunction() {
    //   if (
    //     this.aboutProfessionalData.name.length >= 1
    //     && this.aboutProfessionalData.name.length <= 3
    //   ) {
    //     console.log('ERROR');
    //   }
    // },

    requestForCpf() {
      http
        .get('/profissionais')
        .then((res) => {
          // const cpfs = res.data;
          this.cpfRequest = res.data;
          console.log('ENVIANDO', this.cpfRequest);
          // console.log(cpfs.filter((c) => c.cpf === '90238490293'));
          // this.cpfRequest = res.data;
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cpfFiltered() {
      const el = document.getElementById('cpf');
      const newArray = this.cpfRequest.filter(
        (cpfs) => cpfs.cpf === this.aboutProfessionalData.cpf,
      );
      if (newArray.length !== 0) {
        el.style.border = '1px solid red';
        console.log('ERROR');
        // console.log(newArray);
      } else {
        el.style.border = '1px solid #483698';
        // console.log(newArray);
        // console.log('PASSOU');
      }
    },
    // verifyCpf() {
    //   this.cpfFiltered();
    // },
    requestForStates() {
      http
        .get('https://api-teste-front-end-fc.herokuapp.com/estados')
        .then((res) => {
          console.log(res);
          this.states = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    requestForCity() {
      http
        .get(
          `https://api-teste-front-end-fc.herokuapp.com/cidades?estadoId=${this.aboutProfessionalData.state}`,
        )
        .then((res) => {
          this.citys = res.data;
          console.log('TESTE', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    'aboutProfessionalData.state': 'requestForCity',
    'aboutProfessionalData.cpf': 'cpfFiltered',
    // 'aboutProfessionalData.name': 'inputErrorFunction',
  },
  mounted() {
    this.requestForStates();
    this.requestForCity();
    this.requestForCpf();
  },
};
</script>
