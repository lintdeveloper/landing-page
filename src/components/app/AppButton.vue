<template>
  <button :class="['button', className]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: 'button--fill',
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
    transition: all .2s;
    &--fill {
      box-shadow: 0px 13px 36px #622B1D55;
      &:hover {
        padding: 14px 41px;
      }
    }
    &--outline {
      padding: 14px 41px;
      &:hover {
        padding: 16px 43px;
      }
    }
    &--fill,
    &--outline:hover {
      border: 2px solid $white0;
      background: $orange;
      border: none;
      color: $white0;
    }
    &--outline,
    &--fill:hover {
      border: 2px solid $orange;
      color: $orange;
      background: $white0;
    }
  }
</style>
