<template>
  <div class="header">
    <div class="header__main">
      <div class="text">
        <p class="title">
          Blockchain powered health financing platform
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
    <!-- <vue-typer
      class="sub-text"
      :text="text"
      erase-style="backspace"
      :erase-delay="20"
      :type-delay="20"
      :repeat="0"
    ></vue-typer> -->
    <div class="sub-text typewriter">
      <p>
        Life is hard and finances can be scarce.<br>You're always
        looking for funds to pay medical bills when you fall ill?<br>
        You constantly deal with the challenge of your children
        falling ill when you're broke?<br>Your wife's delivery day
        is nearing and the other bills just won't stop coming?<br>
        Lafya is here to help you solve just that.<br>And guess what,
        it's for a tiny fee per day.<br><b>Join our daily
        contribution for healthcare as little as N50/day to enjoy
        free medical care in the best hospitals and clinics with
        access to quality drugs and professional services.</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
  .header {
    margin-top: 120px;
    width: calc(100% - 40px);
    position: relative;
    @include mdl() {
      width: calc(100% - 80px);
      .sub-text {
        position: relative;
        line-height: 1.35rem;
      }
    }
    @include lg() {
      .sub-text {
        position: absolute;
        width: 35%;
        top: 55%;
        right: 35%;
      }
    }
    &__main {
      margin: 15px 0;
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
      .sub-text {
        margin: 10px 0;
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
  }
  .vue-typer::v-deep {
    word-wrap: break-word;
    .custom.char {
      &.typed {
        color: $black1;
      }
    }
  }
</style>
