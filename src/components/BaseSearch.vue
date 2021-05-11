<template>
  <label v-bind="$attrs" :for="`searchInput${cuid}`" class="w-full relative text-gray-400">
    <button
      type="submit"
      class="absolute inset-y-0 left-0 bg-transparent text-navy focus:outline-none px-4"
    >
      <base-icon iconId="search" class="w-5 h-5 fill-current"></base-icon>
    </button>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="search"
      :name="`searchInput${cuid}`"
      :placeholder="searchPlaceholder"
      :id="`searchInput${cuid}`"
      class="search w-full pl-12 border border-navy focus:outline-none p-3.5 rounded-full leading-4"
    />
  </label>
</template>

<script>
import cuid from 'cuid';

export default {
  props: {
    searchInput: {
      type: String,
      default: '',
    },
    searchPlaceholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [Number, String],
      default: null,
    },
  },
  setup() {
    return {
      cuid: cuid(),
    };
  },
};
</script>

<style>
.search {
  text-overflow: ellipsis;
}
input[type='search']::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 1.25em;
  width: 1.25em;
  border-radius: 50em;
  background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
    no-repeat 50% 50%;
  background-size: contain;
  opacity: 0;
  pointer-events: none;
}

input[type='search']:focus::-webkit-search-cancel-button {
  opacity: 0.3;
  pointer-events: all;
}
</style>
