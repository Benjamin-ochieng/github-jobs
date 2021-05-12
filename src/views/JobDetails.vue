<template>
  <div class="p-5 lg:px-28 xl:px-56">
    <div class="">
      <div class="py-5">
        <div class="flex justify-between">
          <base-icon iconId="navigate-back" class="w-5 h-5" />
          <h1 class="text-navy font-bold">{{ job.company }}</h1>
          <div class="opacity-0"><p>end</p></div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="w-20 h-20 my-14 relative">
            <img
              :src="job.logo"
              :alt="`${job.title} logo`"
              class="absolute inset-0 object-cover m-auto w-full rounded"
            />
          </div>
          <p class="text-navy font-bold">{{ job.title }}</p>
        </div>
        <div class="flex mt-6 justify-center">
          <p
            class="inline-block px-2 mx-2 rounded-full bg-red-200 text-red-800 font-semibold text-xs"
          >
            {{ job.type }}
          </p>
          <div class="flex mx-4 text-gray-400 text-xs">
            <base-icon iconId="location" class="w-4 h-4 mr-1 fill-current" />
            <p class="font-bold">{{ job.location }}</p>
          </div>
        </div>
      </div>
      <div class="description py-14 text-navy" v-html="job.description"></div>
    </div>
    <div class="apply">
      <h2 class="text-navy font-bold mb-2">How to apply</h2>
      <div class="mb-4" v-html="job.how_to_apply"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: {},
      id: '',
    };
  },
  created() {
    const {
      id,
      company,
      logo,
      title,
      type,
      description,
      // eslint-disable-next-line camelcase
      how_to_apply,
      // eslint-disable-next-line camelcase
      created_at,
      location,
    } = this.$route.params;
    this.job = {
      id,
      company,
      logo,
      title,
      type,
      description,
      how_to_apply,
      created_at,
      location,
    };
  },
};
</script>

<style scoped>
.description > p {
  margin-bottom: 150px;
}
</style>
