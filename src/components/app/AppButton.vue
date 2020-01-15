<template>
  <a :href="to" :class="['button', className]">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: 'button--fill',
    },
    to: {
      type: String,
      default: '#',
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 16px 43px;
  outline: none;
  color: $white0;
  font-size: 1.1rem;
  transition: all 0.2s;
  text-decoration: none;
  display: block;
  margin: 7px auto;
  @include mdl() {
    margin: 0;
  }
  cursor: pointer;
  &--fill {
    box-shadow: 0px 13px 36px #622b1d55;
    &:hover,
    &:focus {
      padding: 14px 41px;
    }
  }
  &--outline {
    padding: 14px 41px;
    &:hover,
    &:focus {
      padding: 16px 43px;
    }
  }
  &--fill,
  &--outline:hover,
  &--outline:focus {
    border: 2px solid $white0;
    background: $primary;
    border: none;
    color: $white0;
  }
  &--outline,
  &--fill:hover,
  &--fill:focus {
    border: 2px solid $primary;
    color: $primary;
    background: $white0;
  }
}
</style>
