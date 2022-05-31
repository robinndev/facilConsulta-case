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
            Obrigado por se inscrever em nossa plataforma, em nome de toda a equipe da fácil
            consulta, te desejamos boas vinda! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Distinctio mollitia minus voluptatibus hic culpa modi, at, ut suscipit facilis
            recusandae veritatis consequatur magnam natus amet illo? Reprehenderit aspernatur
            architecto earum? consulta, te desejamos boas vinda! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Distinctio mollitia minus voluptatibus hic culpa modi, at,
            ut suscipit facilis recusandae veritatis consequatur magnam natus amet illo?
            Reprehenderit aspernatur architecto earum? consulta, te desejamos boas vinda! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Distinctio mollitia minus
            voluptatibus hic culpa modi, at, ut suscipit facilis recusandae veritatis consequatur
            magnam natus amet illo? Reprehenderit aspernatur architecto earum?
          </p>
        </div>
        <div class="concluded__image">
          <img src="@/assets/conclused.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
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
