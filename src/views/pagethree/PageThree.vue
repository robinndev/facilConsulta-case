<template>
  <div class="pagethree">
    <div class="pagethree__whitebox">
      <header class="pagethree__header">
        <h1>Sobre o atendimento</h1>
        <p>Detalhes do atendimento</p>
      </header>
      <div class="pagethree__main">
        <div action="" class="pagethree__info">
          <p class="title__info">Nome completo</p>
          <p class="info__answer">Fabrício Rodrigues de Oliveira</p>
          <p class="title__info">CPF</p>
          <p class="info__answer">703.246.294-43</p>
          <p class="title__info">Número de celular ou telefone</p>
          <p class="info__answer">(81) 98824-9472</p>
          <p class="title__info">Estado/Cidade</p>
          <p class="info__answer">Recife / Pernambuco</p>
          <p class="title__info">Especialidade principal</p>
          <p class="info__answer">Front-End Web</p>
          <p class="title__info">Preço da consulta</p>
          <p class="info__answer">R$ 200,00</p>
          <p class="title__info">Formas de pagamento da consulta</p>
          <p class="info__answer">Cartão de crédito - Parcelamento em 2x sem juros</p>
        </div>
        <div class="pagethree__image">
          <img src="@/assets/page-three.png" alt="" />
        </div>
      </div>
      <div class="pagethree__next">
        <router-link :to="{ name: 'pagethree' }">
          <ButtonNext styles="primary" class="pagethree__button" title="PRÓXIMO" />
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
  components: {
    ButtonNext,
  },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
