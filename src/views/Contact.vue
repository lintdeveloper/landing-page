<template>
  <div class="body">
    <nav-bar :path="$route.name" />
    <form
      action="https://formspree.io/abdulqudusabubakre@gmail.com"
      method="post"
    >
      <p>Contact Us</p>
        <input
          type="radio"
          id="individual"
          value="individual"
          name="individual"
          v-model="userType" />
        <label for="individual">Individual</label>
        <input
          type="radio"
          id="hcp"
          value="hcp"
          v-model="userType">
        <label for="hcp">HCP</label>
      <multi-select
        v-show="userType == 'hcp'"
        class="select"
        :options=hcps
        v-model="hcp"
        placeholder="Healthcare Provider"
      ></multi-select>
      <input
        class="input"
        type="text"
        name="Name"
        id=""
        required
        placeholder="Enter Name" />
      <input
        class="input"
        type="email"
        name="email"
        id=""
        required
        placeholder="Email Address" />
      <input
        class="input"
        type="tel"
        name="number"
        id=""
        required
        placeholder="Phone Number" />
      <button type="submit">Reach Out</button>
    </form>
  </div>
</template>

<script>
import NavBar from '@/components/landing-page/navbar.vue';

export default {
  components: { NavBar },
  data: () => ({
    hcps: ['Hospital', 'Laboratory', 'Pharmacy'],
    hcp: '',
    userType: '',
  }),
};
</script>

<style scoped lang="scss">
  .body {
    position: absolute;
    width: calc(100vw - 40px);
    @include mdl() {
      width: calc(100vw - 100px);
    }
    form {
      width: 350px;
      margin: 120px 0 0;
      max-width: calc(100% - 80px);
      box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2);
      text-align: center;
      padding: 0 20px;
      @include mdl() {
        margin: 120px auto 0;
      }
      p {
        font-size: 1.5rem;
        font-weight: bold;
        color: $primary;
        top: 20px;
        position: relative;
        margin-bottom: 50px;
      }
      .input {
        padding: 15px 20px;
        border-radius: 12px;
        border: 1px solid $primary;
        margin: 15px auto;
        width: calc(100% - 40px);
        outline: none;
        color: $black2;
        &::placeholder {
          color: $black2;
        }
      }
      select {
        width: 300px;
        background: none;
        option:disabled {
          color: $black1;
        }
      }
      button {
        background: $primary;
        border-radius: 12px;
        width: 150px;
        font-size: 1rem;
        padding: 15px 0;
        outline: none;
        border: none;
        color: #fff;
        margin: 20px;
      }
    }
  }
  .select::v-deep {
    .multiselect__tags {
      padding: 15px 20px;
      border-radius: 12px;
      border: 1px solid $primary;
      margin: 15px auto;
      display: flex;
      align-items: center;
      max-width: 100%;
      outline: none;
    }
    .multiselect__select {
      top: 50%;
      margin-top: -19px;
    }
    .multiselect__placeholder {
      margin: 0;
      padding: 0;
      color: $black2;
      font-size: 0.8rem;
    }
    .multiselect__single,
    .multiselect__input {
      margin: 0;
      padding: 0;
      color: $black2;
      font-size: 0.8rem;
      width: 70% !important;
    }
  }
</style>
