<template>
  <div class="providers">
    <p class="title">
      Our healthcare providers (HCPs) include
    </p>
    <div class="hcps">
      <div class="hcp">
        <div class="hcp__img">
          <img src="@/assets/icons/hospital.svg" alt="Hospital Icon">
        </div>
        <p class="hcp__name">Hospitals</p>
      </div>
      <div class="hcp">
        <div class="hcp__img">
          <img src="@/assets/icons/pharmacy.svg" alt="Pharmacy Icon">
        </div>
        <p class="hcp__name">Pharmacies</p>
      </div>
      <div class="hcp">
        <div class="hcp__img">
          <img src="@/assets/icons/lab.svg" alt="Laboratory Icon">
        </div>
        <p class="hcp__name">Medical Laboratories</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .providers {
    width: calc(100% - 40px);
    margin-top: 50px;
    .title {
      font-size: 1.5rem;
      text-align: center;
      @include mdl() {
        // text-align: left;
      }
    }
    .hcps {
      width: 400px;
      max-width: 100%;
      margin: 0 auto;
      position: relative;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      .hcp {
        text-align: center;
        margin: 0 20px;
        &__img {
          margin: 0 auto;
          width: 80px;
          height: 80px;
          img {
            width: 100%;
          }
        }
      }
      @include mdl() {
        justify-content: space-between;
        width: 600px;
        margin-top: 50px;
      }
    }
    @include mdl() {
      margin-top: 100px;
    }
  }
</style>
