<template>
  <div class="footer">
    <div class="copyright">
      <span>
        <em>&copy; {{ new Date().getFullYear() }} Lafya</em>
      </span>
      <span>&copy; All rights reserved</span>
    </div>
    <div class="social">
      <a href="twitter.com/lafya_">
        <img src="@/assets/icons/twitter.svg" alt="Twitter" />
      </a>
      <a href="#">
        <img src="@/assets/icons/facebook.svg" alt="Facebook" />
      </a>
      <a href="#">
        <img src="@/assets/icons/linkedin.svg" alt="linkedin" />
      </a>
      <a href="mailto:contact@lafya.co">
        <img src="@/assets/icons/email.svg" alt="Email" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 10px;
  width: calc(100% - 40px);
  @include mdl() {
    margin-top: 100px;
    width: calc(100% - 80px);
  }
  @include lg() {
    justify-content: space-between;
  }
  .copyright {
    span {
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
