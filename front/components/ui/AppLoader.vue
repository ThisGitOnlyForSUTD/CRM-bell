<template>
  <div class="loader" v-if="isVisible">
    asdasd
  </div>
</template>
<script>
export default {
  name: 'AppLoader',
  data() {
    return {
      isVisible: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = false
    }, 1000)
  }
}
</script>
<style>
.loader {
  background: aquamarine;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 2000;
}
</style>
