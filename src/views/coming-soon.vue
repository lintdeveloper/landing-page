<template>
  <div class="coming-soon">
    <div class="coming-soon-text">
      <h1>Lafya Healthshare</h1>
      <h2>A health care cost sharing platform for Nigerians</h2>
      <h3>Coming soon...</h3>
    </div>
    <img src="@/assets/map.jpg" alt="Map of Africa">
  </div>
</template>

<style lang="scss">
  .coming-soon {
    h1 {
      font-size: 2.5rem;
    }
    color: #4e9e96;
    height: 100vh;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    width: 900px;
    display: flex;
    flex-direction: column;
    @include mdl() {
      flex-direction: row;
      align-items: center;
    }
    img {
      width: 360px;
      max-width: 100%;
      margin: 0 auto;
      @include mdl() {
        flex: 0 0 55%;
      }
    }
  }
</style>
