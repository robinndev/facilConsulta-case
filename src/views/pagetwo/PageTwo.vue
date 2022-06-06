<template>
  <div class="pagetwo">
    <div class="pagetwo__whitebox">
      <header class="pagetwo__header">
        <h1>Sobre o atendimento</h1>
        <p>Detalhes do atendimento</p>
      </header>
      <div class="pagetwo__main">
        <form class="pagetwo__form" action="">
          <p class="pagetwo__speciality">Especialidade principal*</p>
          <b-form-select
            class="pagetwo__select"
            v-model="specialitySelected"
            :options="optionSpeciality"
          ></b-form-select>
          <p class="pagetwo__consult__prince">Informe o preço da consulta*</p>
          <b-input-group class="pagetwo__value_div" size="md" prepend="R$" variant="info">
            <b-form-input class="pagetwo__value"></b-form-input>
          </b-input-group>
          <div class="pagetwo__payments">
            <p>Formas de pagamento da consulta*</p>
            <div class="pagetwo__pix">
              <b-form-checkbox>ﾠﾠﾠPix</b-form-checkbox>
            </div>
          </div>
          <div class="pagetwo__payments">
            <div class="pagetwo__pix">
              <b-form-checkbox>ﾠﾠﾠEm dinheiro</b-form-checkbox>
            </div>
          </div>
          <div class="pagetwo__payments">
            <div class="pagetwo__credit">
              <b-form-checkbox @click="clickToCredit">ﾠﾠﾠCartão de crédito</b-form-checkbox>
              <div v-if="credit" class="pagetwo__installment">
                <p>Parcelamento em</p>
                <b-form-radio name="some-radios" value="A">1x, sem juros </b-form-radio>
                <br />
                <b-form-radio name="some-radios" value="A">2x, sem juros </b-form-radio>
                <br />
                <b-form-radio name="some-radios" value="A">3x, sem juros </b-form-radio>
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
        <router-link :to="{name: 'pagethree'}">
        <ButtonNext styles="primary" class="pagetwo__button" title="PRÓXIMO" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingBar from '@/components/shared/loading-bar/LoadingBar.vue';
import ButtonNext from '@/components/shared/button/ButtonNext.vue';

export default {
  data() {
    return {
      credit: false,
      specialitySelected: '',
      optionSpeciality: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    };
  },

  components: {
    LoadingBar,
    ButtonNext,
  },

  methods: {
    clickToCredit() {
      console.log('CLICOU');
      if (this.credit === false) {
        this.credit = true;
        console.log('adas');
      } else {
        this.credit = false;
      }
      console.log(this.credit);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
@import './style.css';
</style>
