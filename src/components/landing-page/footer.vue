<template>
  <div class="footer">
    <div class="copyright">
      <p><em>&copy; {{ new Date().getFullYear() }} Lafya</em></p>
      <p>&copy; All rights reserved</p>
    </div>
    <div class="social">
      <a href="">
        <img src="@/assets/icons/twitter.svg" alt="Twitter">
      </a>
      <a href="">
        <img src="@/assets/icons/facebook.svg" alt="Facebook">
      </a>
      <a href="">
        <img src="@/assets/icons/linkedin.svg" alt="linkedin">
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .footer {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
    margin-bottom: 10px;
    width: calc(100% - 40px);
    @include mdl() {
      margin-top: 100px;
      width: calc(100% - 80px);
    }
    .copyright {
      display: flex;
      p {
        margin-right: 20px;
      }
    }
    .social {
      display: flex;
      img {
        width: 40px;
        margin: 10px;
      }
    }
  }
</style>
