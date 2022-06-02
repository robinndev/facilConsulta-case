<template>
  <div class="pagethree">
    <router-link to="/page-two"
      ><img class="back" src="@/assets/back-button.png" alt=""
    /></router-link>
    <div class="pagethree__whitebox">
      <header class="pagethree__header">
        <h1>Sobre o atendimento</h1>
        <p>Detalhes do atendimento</p>
      </header>
      <div class="pagethree__main">
        <div action="" class="pagethree__info">
          <p class="title__info">Nome completo</p>
          <p class="info__answer">{{ this.$store.state.aboutProfessionalData.name }}</p>
          <p class="title__info">CPF</p>
          <p class="info__answer">{{ this.$store.state.aboutProfessionalData.cpf }}</p>
          <p class="title__info">Número de celular ou telefone</p>
          <p class="info__answer">{{ this.$store.state.aboutProfessionalData.phone }}</p>
          <p class="title__info">Estado/Cidade</p>
          <p class="info__answer">
            {{ this.$store.state.aboutProfessionalData.state }} /
            {{ this.$store.state.aboutProfessionalData.city }}
          </p>
          <p class="title__info">Especialidade principal</p>
          <p class="info__answer">{{ this.$store.state.aboutTheService.speciality }}</p>
          <p class="title__info">Preço da consulta</p>
          <p class="info__answer">{{ this.$store.state.aboutTheService.price }}</p>
          <p class="title__info">Formas de pagamento da consulta</p>
          <p
            v-for="(formPayment, index) in this.$store.state.aboutTheService.paymentForm"
            :key="index"
            class="info__answer"
          >
            {{ formPayment }}
          </p>
          <div class="credit__div">
            <span
              v-for="(formPaymentCredit, index) in this.$store.state.aboutTheService
                .paymentFormCredit"
              :key="index"
              class="info__answer"
            >
              {{ formPaymentCredit }} -
            </span>
            <span>{{ this.$store.state.aboutTheService.parcelsCredit }}</span>
          </div>
        </div>
        <div class="pagethree__image">
          <img src="@/assets/page-three.png" alt="" />
        </div>
      </div>
      <div class="pagethree__next">
        <router-link :to="{ name: 'conclused' }">
          <ButtonNext styles="primary" class="pagethree__button" title="CADASTRAR PROFISSIONAL" />
        </router-link>
        <router-link :to="{ name: 'home' }">
          <ButtonNext
            styles="primary"
            class="pagethree__button_edit pagethree__button"
            title="Editar cadastro"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonNext from '@/components/shared/button/ButtonNext.vue';

export default {
  methods: {},

  components: {
    ButtonNext,
  },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
