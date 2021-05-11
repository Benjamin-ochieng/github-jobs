<template>
  <div class="flex items-center">
    <input
      type="checkbox"
      :value="props.modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      :id="checkboxId"
      class="w-4 h-4 mr-2"
    />
    <label :for="checkboxId" class="text-sm font-bold">{{ label }}</label>
  </div>
</template>

<script>
import cuid from 'cuid';

export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelvalue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const checkboxId = cuid();
    return {
      checkboxId,
      props,
    };
  },
};
</script>

<style lang="scss" scoped></style>
