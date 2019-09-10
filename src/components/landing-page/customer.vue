<template>
  <div class="hcp">
    <p class="title">
      Become a Lafya customer and enjoy:
    </p>
    <div class="hcp__benefits">
      <div class="benefit">
        <div class="benefit__img">
          <img
            src="@/assets/icons/debt.svg"
            alt="Medical Loans Icon" />
        </div>
        <p class="benefit__title">Medical Loans</p>
        <p class="benefit__desc">
          Access medical loans if your medical bills have gone
          beyond your coverage ceiling but still require medical
          treatment.
        </p>
      </div>
      <div class="benefit">
        <div class="benefit__img">
          <img
            src="@/assets/icons/ambulance.svg"
            alt="Ambulance Icon" />
        </div>
        <p class="benefit__title">On-demand Ambulance Service</p>
        <p class="benefit__desc">
         Call an ambulance just like you would an Uber during a
         medical emergency and get professional transport to a
         medical facility.
        </p>
      </div>
      <div class="benefit">
        <div class="benefit__img">
          <img
            src="@/assets/icons/salary.svg"
            alt="Bonus earnings Icon" />
        </div>
        <p class="benefit__title">Bonus Earnings</p>
        <p class="benefit__desc">
          Lafya will pay a percentage bonus to subscribers if they
          do not access lafya services within a 12-month period.
        </p>
      </div>
      <div class="benefit">
        <div class="benefit__img">
          <img
            src="@/assets/icons/tax.svg"
            alt="Interest Icon" />
        </div>
        <p class="benefit__title">Low Interest Lending</p>
        <p class="benefit__desc">
          Access low interest loans with flexible repayment plans.
        </p>
      </div>
      <div class="benefit">
        <div class="benefit__img">
          <img
            src="@/assets/icons/decentralized.svg"
            alt="Decentralized Icon" />
        </div>
        <p class="benefit__title">Decentralized Enrollments</p>
        <p class="benefit__desc">
          Access medical care in any hospital irrespective of your
          location anytime.
        </p>
      </div>
      <div class="benefit">
        <div class="benefit__img">
          <img
            src="@/assets/icons/financing.svg"
            alt="Financing Icon" />
        </div>
        <p class="benefit__title">Shared Financing</p>
        <p class="benefit__desc">
          Have a family member or friend who is ill, have exhausted
          their coverage ceiling and still needs medical financing,
          share your coverage ceiling with them to help them pay
          their medical bills.
        </p>
      </div>
    </div>
    <div class="reach-out">
      <p class="title">
        Interested in becoming an early beneficiary?
      </p>
      <app-button class-name="button--fill">
        Join Our Waiting List
      </app-button>
      <app-button class-name="button--outline">
        Get In Touch
      </app-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .hcp {
    width: calc(100% - 40px);
    margin-top: 70px;
    .title {
      font-size: 1.5rem;
      text-align: center;
      @include mdl() {
        // text-align: left;
        // padding-left: 25px;
      }
    }
    @include mdl() {
      margin-top: 100px;
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
          height: 35px;
        }
      }
      @include mdl() {
        display: flex;
        margin-top: 50px;
        justify-content: center;
        flex-flow: row wrap;
        .benefit {
          flex: 0 0 30%;
          text-align: left;
          margin: 0px 10px;
          &__img {
            margin: 0;
          }
          &__desc {
            margin-top: 20px;
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
        .title {
          flex: 0 0 100%;
        }
        width: 500px;
        margin: 0 auto;
        justify-content: space-around;
        margin-top: 10px;
        flex-flow: row wrap;
      }
    }
  }
</style>
