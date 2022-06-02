<template>
  <div class="pagetwo">
    <router-link to="/"><img class="back" src="@/assets/back-button.png" alt="" /></router-link>
    <div class="pagetwo__whitebox">
      <header class="pagetwo__header">
        <h1>Sobre o atendimento</h1>
        <p>Detalhes do atendimento</p>
      </header>
      <div class="pagetwo__main">
        <form class="pagetwo__form" action="">
          <p class="pagetwo__speciality">Especialidade principal*</p>
          <b-form-select class="pagetwo__select" v-model="aboutTheService.speciality">
            <option
              :value="speciality.nome"
              v-for="(speciality, index) in optionSpeciality"
              :key="index"
            >
              {{ speciality.nome }}
            </option>
          </b-form-select>
          <p class="pagetwo__consult__prince">Informe o preço da consulta*</p>
          <b-input-group class="pagetwo__value_div" size="md" prepend="R$" variant="info">
            <b-form-input v-model="aboutTheService.price" class="pagetwo__value"></b-form-input>
          </b-input-group>
          <div class="pagetwo__payments">
            <p>Formas de pagamento da consulta*</p>
            <div class="pagetwo__pix">
              <b-form-checkbox value="Pix" v-model="aboutTheService.paymentForm"
                >ﾠﾠﾠPix</b-form-checkbox
              >
            </div>
          </div>
          <div class="pagetwo__payments">
            <div class="pagetwo__pix">
              <b-form-checkbox value="Em dinheiro" v-model="aboutTheService.paymentForm"
                >ﾠﾠﾠEm dinheiro</b-form-checkbox
              >
            </div>
          </div>
          <div class="pagetwo__payments">
            <div class="pagetwo__credit">
              <b-form-checkbox
                value="Cartão de crédito"
                v-model="aboutTheService.paymentFormCredit"
                @click="clickToCredit"
                >ﾠﾠﾠCartão de crédito</b-form-checkbox
              >
              <div v-if="credit" class="pagetwo__installment">
                <p>Parcelamento em</p>
                <b-form-radio
                  v-model="aboutTheService.parcelsCredit"
                  name="some-radios"
                  value="1x, sem juros"
                  >1x, sem juros
                </b-form-radio>
                <br />
                <b-form-radio
                  v-model="aboutTheService.parcelsCredit"
                  name="some-radios"
                  value="2x, sem juros"
                  >2x, sem juros
                </b-form-radio>
                <br />
                <b-form-radio
                  v-model="aboutTheService.parcelsCredit"
                  name="some-radios"
                  value="3x, sem juros"
                  >3x, sem juros
                </b-form-radio>
              </div>
            </div>
          </div>
        </form>
        <div class="pagetwo__image">
          <img src="@/assets/page-two.png" alt="" />
        </div>
      </div>
      <div class="pagetwo__next">
        <LoadingBar number="2 de 2" class="pagetwo__loadingbar" :percentage="50" />
        <router-link :to="{ name: 'pagethree' }">
        <ButtonNext @click="commit" styles="primary" class="pagetwo__button" title="PRÓXIMO" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingBar from '@/components/shared/loading-bar/LoadingBar.vue';
import ButtonNext from '@/components/shared/button/ButtonNext.vue';
import http from '@/services/http';

export default {
  data() {
    return {
      aboutTheService: {
        speciality: this.$store.state.aboutTheService.speciality,
        price: this.$store.state.aboutTheService.price,
        paymentForm: this.$store.state.aboutTheService.paymentForm,
        paymentFormCredit: this.$store.state.aboutTheService.paymentFormCredit,
        parcelsCredit: this.$store.state.aboutTheService.parcelsCredit,
      },
      credit: false,
      specialitySelected: '',
      optionSpeciality: [],
    };
  },

  components: {
    LoadingBar,
    ButtonNext,
  },

  methods: {
    commit() {
      this.$store.commit('SET_ABOUTSERVICE', this.aboutTheService);
    },
    clickToCredit() {
      // const vazio = '';
      console.log('CLICOU');
      if (this.credit === false) {
        this.credit = true;
        console.log(true);
      } else {
        this.credit = false;
        console.log(false);
        // this.parcelsCredit = vazio;
        // this.$store.commit('DELETE_CREDITPARCEL', vazio);
        // this.parcelsCredit = '';
      }
      // console.log(this.credit);
    },
    requestForSpeciality() {
      http
        .get('especialidades')
        .then((res) => {
          this.optionSpeciality = res.data;
          console.log('TESTE', this.optionSpeciality);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.requestForSpeciality();
  },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
@import './style.css';
</style>
