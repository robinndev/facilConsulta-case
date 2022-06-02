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
              v-model.lazy="aboutProfessionalData.name"
              class="pageone__name"
              id="fullname"
              type="text"
            />
            <p class="error" v-if="fullNameError">Error message</p>
          </label>
          <label for="cpf">
            CPF*
            <input
              v-model="aboutProfessionalData.cpf"
              class="pageone__cpf"
              id="cpf"
              type="text"
              v-maska="'###.###.###-##'"
            />
            <p v-if="cpfInputError" class="error">CPF já cadastrado</p>
          </label>
          <label for="phone">
            Número de celular*
            <input
              v-model="aboutProfessionalData.phone"
              class="pageone__phone"
              id="phone"
              type="text"
              v-maska="'(##) # ####-####'"
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
                  v-bind:value="[state.nome, state.id]"
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
          <img src="@/assets/page-one.png" alt="animação de dois médicos conversando" />;
        </div>
      </div>
      <div class="pageone__next">
        <LoadingBar number="1 de 2" class="pageone__loadingbar" :percentage="50" />
        <ButtonNext @click="commit" styles="primary" class="pageone__button" title="PRÓXIMO" />
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
import Swal from 'sweetalert2';

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
      fullNameError: false,
      cpfInputError: false,
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

  methods: {
    // COMMIT FOR VUEX
    commit() {
      if (
        this.aboutProfessionalData.name.length > 0
        && this.fullNameError === false
        && this.aboutProfessionalData.phone.replace(/[^\d]+/g, '').length === 11
        && this.cpfInputError === false
        && this.aboutProfessionalData.state !== ''
        && this.aboutProfessionalData.city !== ''
        && this.aboutProfessionalData.cpf.replace(/[^\d]+/g, '').length === 11
      ) {
        this.$router.push({ name: 'pagetwo' });
        this.$store.commit('SET_ABOUTPROFESSIONAL', this.aboutProfessionalData);
      } else {
        this.alert();
      }
    },

    // INPUT VALIDATES
    nameIsValid() {
      const el = document.getElementById('fullname');
      if (
        this.aboutProfessionalData.name.length >= 3
        && this.aboutProfessionalData.name.length <= 48
      ) {
        this.fullNameError = false;
        el.style.border = '1px solid #483698';
      } else {
        el.style.border = '1px solid red';
        this.fullNameError = true;
      }
    },

    // REQUEST AND FILTER CPF
    requestForCpf() {
      http
        .get('/profissionais')
        .then((res) => {
          this.cpfRequest = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // FILTER FOR CPF
    cpfFiltered() {
      const el = document.getElementById('cpf');
      const cpfForFiltered = this.aboutProfessionalData.cpf.replace(/[^\d]+/g, '');
      const newArray = this.cpfRequest.filter((cpfs) => cpfs.cpf === cpfForFiltered);
      if (newArray.length !== 0) {
        el.style.border = '1px solid red';
        this.cpfInputError = true;
      } else {
        this.cpfInputError = false;
        el.style.border = '1px solid #483698';
      }
    },

    // REQUEST FOR STATES
    requestForStates() {
      http
        .get('https://api-teste-front-end-fc.herokuapp.com/estados')
        .then((res) => {
          this.states = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // REQUEST FOR CITY's
    requestForCity() {
      http
        .get(
          `https://api-teste-front-end-fc.herokuapp.com/cidades?estadoId=${this.aboutProfessionalData.state[1]}`,
        )
        .then((res) => {
          this.citys = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // ALERT

    alert() {
      Swal.fire({
        icon: 'error',
        title: 'Tente novamente!',
        text: 'Você esqueceu de preencher algo campo 😧',
        footer: '<a href="https://facilconsulta.com.br/">Nos contate, caso tenha dúvidas</a>',
      });
    },
  },
  watch: {
    'aboutProfessionalData.state': 'requestForCity',
    'aboutProfessionalData.name': 'nameIsValid',
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
