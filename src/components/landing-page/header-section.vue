<template>
  <div class="header">
    <div class="header__main">
      <div class="text">
        <p class="title">
          Blockchain powered health insurance platform
        </p>
        <p class="subtitle">
          Lafya enables low income earners to fund their healthcare
          needs and access quality/affordable medical services in
          the best hospitals and clinics in Nigeria.<br><br>
          <em>Want to know more?</em>
        </p>
        <app-button class-name="button--fill">
          Join the waiting list
        </app-button>
      </div>
      <img src="@/assets/map.jpg" alt="Map of Africa">
    </div>
    <div class="header__section">
      <p>
        We combine modern technology and a dedicated human resource
        to bring healthcare to the millions of people that need it.
        We are passionate about fixing healthcare in Africa and will
        continue to develop innovative and scalable solutions that
        will transform the broke continent.
      </p>
      <div class="img">
        <img src="@/assets/modern-tech.jpg" alt="Modern Technology">
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
    &__main {
      .text {
        text-align: center;
        .title {
          font-size: 1.8rem;
          font-weight: 900;
        }
        .subtitle {
          font-size: 1.05rem;
        }
        .button--fill {
          margin-bottom: 50px;
          margin-top: 10px;
        }
      }
      img {
        width: 100%;
      }
      @include mdl() {
        display: flex;
        justify-content: space-between;
        .text {
          text-align: left;
          flex: 0 0 40%;
          margin-top: 30px;
        }
        img {
          width: 50%;
        }
      }
    }
    &__section {
      margin-top: 10px;
      p {
        flex: 0 0 35%;
      }
      .img {
        width: 404px;
        max-width: 100%;
        height: 304px;
        flex: 0 0 45%;
        img {
          width: 100%;
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
