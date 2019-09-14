<template>
  <div class="pricing">
    <p class="title">
      Our pricings
    </p>
    <div class="prices">
      <div class="plan">
        <header>
          <h4 class="plan-title">
            Daily
          </h4>
          <div class="plan-cost"><span class="plan-price">
            &#8358;50</span><span class="plan-type">/day</span>
          </div>
        </header>
        <ul class="plan-features">
          <li>You're a small business operator</li>
          <li>You prefer daily contribution</li>
          <li>You deal mostly with cash</li>
        </ul>
        <div class="plan-select"><a href="">Select Plan</a></div>
      </div>
      <div class="plan">
        <header>
          <h4 class="plan-title">
            Weekly
          </h4>
          <div class="plan-cost"><span class="plan-price">
            &#8358;350</span><span class="plan-type">/week</span>
          </div>
        </header>
        <ul class="plan-features">
          <li>You're a small/medium business operator</li>
          <li>You prefer to pay weekly</li>
          <li>You deal with cash/mobile app</li>
        </ul>
        <div class="plan-select"><a href="">Select Plan</a></div>
      </div>
      <div class="plan">
        <header>
          <h4 class="plan-title">
            Monthly
          </h4>
          <div class="plan-cost"><span class="plan-price">
            &#8358;1500</span><span class="plan-type">/month</span>
          </div>
        </header>
        <ul class="plan-features">
          <li>You prefer to pay in advance</li>
          <li>You operate a large business</li>
          <li>You prefer recurring payments via card/bank app</li>
        </ul>
        <div class="plan-select"><a href="">Select Plan</a></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .pricing {
    width: calc(100% - 40px);
    margin-top: 70px;
    .title {
      font-size: 1.5rem;
      text-align: center;
    }
    .prices {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      .plan {
        margin: 10px;
        width: 300px;
        max-width: 100%;
        position: relative;
        float: left;
        overflow: hidden;
        border: 3px solid #46817b;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        background-color: $primary;
        border-radius: 8px;
        header {
          background-color: $primary;
          color: #ffffff;
        }
        & * {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-transition: all 0.25s ease-out;
          transition: all 0.25s ease-out;
        }
        &:hover i,
        &.hover i {
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
        }
        &-title {
          background-color: rgba(0, 0, 0, 0.5);
          position: relative;
          margin: 0;
          padding: 20px 20px 0;
          text-transform: uppercase;
          letter-spacing: 4px;
          &::after {
            position: absolute;
            content: '';
            top: 100%;
            left: 0;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 40px 300px 0 0;
            border-color: rgba(0, 0, 0, 0.5) transparent transparent;
          }
        }
        &-cost {
          padding: 40px 20px 10px;
          text-align: right;
        }
        &-price {
          font-weight: 600;
          font-size: 3em;
        }
        &-type {
          opacity: 0.8;
          font-size: 0.7em;
          text-transform: uppercase;
        }
        &-features {
          padding: 0 0 20px;
          margin: 0;
          list-style: outside none none;
          li {
            padding: 8px 5%;
          }
          i {
            margin-right: 8px;
            color: rgba(0, 0, 0, 0.5);
          }
        }
        &-select {
          border-top: 1px solid rgba(0, 0, 0, 0.2);
          padding: 20px;
          text-align: center;
          a {
            background-color: rgba(0, 0, 0, 0.5);
            color: #ffffff;
            text-decoration: none;
            padding: 12px 20px;
            font-size: 0.75em;
            font-weight: 600;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 4px;
            display: inline-block;
            &:hover {
              background-color: rgba(0, 0, 0, 0.3);
            }
          }
        }
        @include mdl() {
          &:first-of-type {
            border-radius: 8px 0 0 8px;
          }
          &:last-of-type {
            border-radius: 0 8px 8px 0;
          }
        }
      }
    }
    @include mdl() {
      margin-top: 100px;
    }
  }
</style>
