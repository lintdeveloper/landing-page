<template>
  <div class="blockchain">
    <div class="blockchain__section">
      <p>
        Lafya runs on the powerful blockchain technology, creates
        open and reliable record of transactions and operates self
        auditing processes.
      </p>
      <div class="img">
        <img src="@/assets/icons/bitcoin.svg" alt="Bitcoin image">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .blockchain {
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
        height: 250px;
        border-radius: 50%;
        margin: 0 auto;
        img {
          width: 100%;
          // border-radius: 50%;
          height: 100%;
        }
      }
      @include mdl() {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        .img {
          margin: 0;
        }
      }
    }
  }
</style>
