<template>
  <div>
    <svg v-bind="$attrs">
      <use v-bind="{ 'xlink:href': `/icons-sprite.svg#${iconId}` }" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    iconId: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped></style>
