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
            <input class="pageone__name" id="fullname" type="text" />
          </label>
          <label for="cpf">
            CPF*
            <input class="pageone__cpf" id="cpf" type="text" />
          </label>
          <label for="phone">
            Número de celular*
            <input class="pageone__phone" id="phone" type="text" />
          </label>
          <div class="pageone__dropdown">
            <label class="pageone__drop" for="states">
              Estado*
              <select name="" id="states"></select>
            </label>
            <label class="pageone__drop" for="states">
              Cidade*
              <select name="" id="states"></select>
            </label>
          </div>
        </form>
        <div class="pageone__image">
          <img src="@/assets/page-one.png" alt="" />
        </div>
      </div>
      <div class="pageone__next">
        <LoadingBar number="1 de 2" class="pageone__loadingbar" :percentage="50" />
        <ButtonNext
          styles="primary"
          class="pageone__button"
          title="PRÓXIMO"
        />
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
// @ is an alias to /src

export default {
  name: 'PageOne',
  components: {
    LoadingBar,
    ButtonNext,
  },
};
</script>
