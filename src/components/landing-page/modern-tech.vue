<template>
  <div class="header">
    <div class="header__section">
      <p>
        We combine modern technology and a dedicated human resource
        to bring healthcare to the millions of people that need it.
        We are passionate about fixing healthcare in Africa and will
        continue to develop innovative and scalable solutions that
        will transform the broken healthcare system on the continent.
      </p>
      <div class="img">
        <img src="@/assets/icons/chip.svg" alt="Modern Technology">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    margin-top: 120px;
    width: calc(100% - 40px);
    @include mdl() {
      width: calc(100% - 80px);
    }
    &__section {
      margin-top: 10px;
      p {
        flex: 0 0 35%;
      }
      .img {
        width: 250px;
        max-width: 100%;
        // flex: 0 0 45%;
        margin: 0 auto;
        img {
          width: 100%;
        }
        @include mdl() {
          margin: 0;
        }
      }
      @include mdl() {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-evenly;
      }
    }
  }
</style>
