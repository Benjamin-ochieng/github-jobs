<template>
  <div id="filter" class="lg:hidden">
    <div id="filter-button" class="w-full pt-5 flex justify-end">
      <button
        class="w-9 h-9 rounded text-white bg-navy border-none outline-none flex items-center justify-center lg:hidden active:outline-none active:border-none"
        @click="toggleFilter"
      >
        <base-icon v-if="!filter" iconId="filter" class="w-6 h-6 fill-current"></base-icon>
        <base-icon v-if="filter" iconId="close" class="w-5 h-5 fill-current"></base-icon>
      </button>
    </div>
    <div v-if="filter" id="filter-menu" class="py-5 text-navy">
      <div class="flex items-center">
        <input
          type="checkbox"
          name=""
          value="true"
          id="contract"
          class="w-4 h-4 mr-2"
          v-model="fullTime"
        />
        <label for="contract" class="text-sm font-bold">Full time</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: false,
    };
  },
  methods: {
    toggleFilter() {
      this.filter = !this.filter;
    },
  },
};
</script>

<style lang="scss" scoped></style>
