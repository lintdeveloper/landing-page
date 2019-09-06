<template>
  <div class="hcp">
    <p class="title">
      Become a Lafya healthcare provider and enjoy:
    </p>
    <div class="hcp__benefits">
      <div class="benefit">
        <div class="benefit__img">
          <img
            src="@/assets/icons/payment.svg"
            alt="Smart Payment Icon" />
        </div>
        <p class="benefit__title">Smart Payment Settlement</p>
        <p class="benefit__desc">
          Receive payments claims as a Health Care Provider in real
          time without any delays. Using smart contracts initiated
          from the level of patient walk-in to patient discharge,
          Lafya releases payments to its HCPs on the completion of a
          healthcare transaction.
        </p>
      </div>
      <div class="benefit">
        <div class="benefit__img">
          <img
            src="@/assets/icons/emr.svg"
            alt="Smart Payment Icon" />
        </div>
        <p class="benefit__title">Access to Lafya EMR</p>
        <p class="benefit__desc">
         Have access to our EMR and streamline your process of
         records management and administration. Save cost, time and
         energy by having unlimited access to our EMR to help you
         with your patient journey.
        </p>
      </div>
      <div class="benefit">
        <div class="benefit__img">
          <img
            src="@/assets/icons/shareholder.svg"
            alt="Smart Payment Icon" />
        </div>
        <p class="benefit__title">Stakeholder Status</p>
        <p class="benefit__desc">
          Partnership with Lafya offers you the opportunity to
          participate in the development of benchmarks and standard
          operating procedures within our ecosystem. Give inputs on
          formularies, coverage ceilings, costing and other related
          issues that will help improve the healthcare landscape.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .hcp {
    width: calc(100% - 40px);
    margin-top: 50px;
    .title {
      font-size: 1.5rem;
      text-align: center;
      @include mdl() {
        text-align: left;
      }
    }
    @include mdl() {
      margin-top: 180px;
      width: calc(100% - 80px);
    }
    &__benefits {
      .benefit {
        text-align: center;
        max-width: 100%;
        position: relative;
        &__img {
          margin: 0 auto;
          width: 60px;
          height: 60px;
          img {
            width: 100%;
          }
        }
        &__title {
          font-size: 1.3rem;
          font-weight: 700;
          color: $black0;
        }
      }
      @include mdl() {
        display: flex;
        margin-top: 50px;
        justify-content: space-between;
        .benefit {
          flex: 0 0 30%;
          text-align: left;
          &__img {
            margin: 0;
          }
          &__desc {
            margin-top: 20px;
            position: absolute;
            top: calc(50% + 40px);
          }
        }
      }
    }
    .reach-out {
      display: flex;
      flex-direction: column;
      align-items: center;
      button {
        margin-bottom: 15px;
      }
      @include mdl() {
        width: 500px;
        margin: 0 auto;
        justify-content: space-around;
        margin-top: 25%;
        flex-flow: row wrap;
      }
      @include lg() {
        margin-top: 15%;
      }
    }
  }
</style>
