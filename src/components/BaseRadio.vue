<template>
  <div>
    <input
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
      type="radio"
      :name="name"
      :id="`${radioId}-${label}`"
      class="hidden opacity-0"
    />

    <label
      :for="`${radioId}-${label}`"
      class="px-4 py-1.5 rounded-full border border-navy text-sm text-navy font-bold hover:bg-navy hover:text-white"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
import cuid from 'cuid';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: [Number, String],
      default: '',
    },
    value: {
      type: [Number, String],
      required: true,
      default: '',
    },
    modelValue: {
      type: [Number, String],
      default: '',
    },
  },

  setup() {
    const radioId = cuid();
    return { radioId };
  },
};
</script>

<style scoped>
input[id='hidden-input'] {
  display: none;
  visibility: hidden;
  opacity: 0;
  filter: alpha(opacity=0);
}

input[type='radio']:checked + label {
  background-color: rgb(2, 2, 46);
  color: white;
}
</style>
