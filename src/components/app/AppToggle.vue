<template>
  <div @click="$emit('showNav')" class="toggle">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
  .toggle {
    cursor: pointer;
    div {
      width: 25px;
      height: 5px;
      margin: 4px 0;
      background: $primary;
    }
  }
</style>
