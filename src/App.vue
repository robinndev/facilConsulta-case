<template>
  <router-view/>
</template>

<style lang="scss">
body,
html,
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #FFE766;
}

*:focus {
    outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
button {
  font-family: 'Comfortaa', cursive;
}

p,
span,
a {
  font-family: 'Open Sans', sans-serif;
}

@media (max-width: 1500px) {
  html {
    font-size: 85%;
  }
}
@media (max-width: 1080px) {
  html {
    font-size: 80%;
  }
}
@media (max-width: 950px) {
  html {
    font-size: 70%;
  }
}
@media (max-width: 820px) {
  html {
    font-size: 60%;
  }
}
</style>
