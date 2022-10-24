<template>
  <button
    class="button"
    @click="$emit('action')"
    :class="{'button__clip-path': isClip}"
    :type="type"
  >{{text}}</button>
</template>
<script>
export default {
  name:'AppButton',
  props:{
    text:{
      type: String || null,
      default:null,
    },
    isClip: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    }
  }
}
</script>
<style lang="scss" scoped>
.button {
  background-color: black;
  border: none;
  color: white;
  padding: 15px 30px 18px 30px;
  font-size: 1.2em;
  font-weight: 500;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #222828;
  }
  &__clip-path {
    clip-path: polygon(85% 0, 100% 40%, 100% 100%, 75% 100%, 15% 100%, 0 60%, 0 0);
  }
}
</style>
