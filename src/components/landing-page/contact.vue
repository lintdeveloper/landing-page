<template>
  <div class="contact">
    <p class="title">
      Ready to be part of this healthcare transformation? Get in
      touch or join the waiting list.
    </p>
    <div class="btns">
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
  .contact {
    margin-top: 50px;
    width: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    .title {
      font-size: 1.5rem;
      margin-right: 20px;
    }
    button {
      margin-bottom: 15px;
    }
    @include mdl() {
      width: calc(100% - 80px);
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: left;
      margin-top: 100px;
      .title {
        flex: 0 0 40%;
      }
      .btns {
        display: flex;
        flex: 0 0 60%;
        justify-content: space-between;
      }
    }
    @include lg() {
      .btns {
        flex: 0 0 40%;
      }
    }
  }
</style>
