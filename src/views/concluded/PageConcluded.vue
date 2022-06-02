<template>
  <div class="conclused">
    <div class="conclused__whitebox">
      <header class="concluded__header">
        <h1>Cadastro concluido</h1>
        <p>Obrigado por fazer parte da plataforma</p>
      </header>
      <div class="conclused__main">
        <div class="concluded__text">
          <p>
            Obrigado <strong>{{ this.$store.state.aboutProfessionalData.name }}</strong> por se
            inscrever em nossa plataforma, em nome de toda a equipe da fácil consulta, te desejamos
            boas vinda!
            <br />
            <br />
            Adoraremos ter você na nossa equipe, esperamos que dê tudo certo no setor de
            <strong>{{ this.$store.state.aboutTheService.speciality }}</strong> caso necessite,
            poderá falar conosco no botão <strong>"Dúvidas"</strong>
            <br />
            <br />
            Para demais informações entre em contato conosco em
            <a target="blank" href="https://www.linkedin.com/in/robinndev/">AJUDA</a>
          </p>
        </div>
        <div class="concluded__image">
          <img src="@/assets/conclused.png" alt="" />
        </div>
      </div>
      <ButtonNext styles="primary" class="conclused__button" title="DÚVIDAS" />
    </div>
  </div>
</template>

<script>
import ButtonNext from '@/components/shared/button/ButtonNext.vue';
import Swal from 'sweetalert2';

export default {
  components: {
    ButtonNext,
  },
  methods: {
    alert() {
      Swal.fire({
        icon: 'success',
        title: 'Obrigado!',
        text: 'Agradecemos por se cadastrar em nossa plataforma 😃',
        footer: '<a href="https://facilconsulta.com.br/">Nos contate em caso de dúvida</a>',
      });
    },
  },
  mounted() {
    this.alert();
  },
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
