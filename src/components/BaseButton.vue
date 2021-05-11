<template>
  <input
    type="button"
    :value="value"
    :bind="$attrs"
    :id="`button-${buttonId}`"
    class="px-4 py-1.5 rounded-full border border-navy bg-white text-sm outline-none text-navy font-bold cursor-pointer hover:bg-navy hover:text-white"
  />
</template>

<script>
import cuid from 'cuid';

export default {
  props: {
    value: {
      type: [Number, String],
      required: true,
      default: '',
    },
  },

  setup() {
    const buttonId = cuid();
    return { buttonId };
  },
};
</script>

<style scoped>
/* input[id='hidden-input'] {
  display: none;
  visibility: hidden;
  opacity: 0;
  filter: alpha(opacity=0);
}

input[type='radio']:checked + label {
  background-color: rgb(2, 2, 46);
  color: white;
} */
</style>
