<template>
  <router-link
    :to="{
      name: 'JobDetails',
      params: {
        id: job.id,
        company: job.company,
        logo: job.company_logo,
        title: job.title,
        type: job.type,
        description: job.description,
        how_to_apply: job.how_to_apply,
        created_at: job.created_at,
        location: job.location,
      },
    }"
    class="flex flex-col mb-10"
  >
    <div class="job flex pb-6 items-center">
      <div class="pr-6">
        <div class="relative w-20 h-20">
          <img
            :src="job.company_logo"
            :alt="`${job.company}-logo`"
            class="absolute inset-0 object-cover m-auto w-full rounded"
          />
        </div>
      </div>
      <div class="flex-grow flex flex-col">
        <h3 class="font-bold mb-2 text-navy">{{ job.title }}</h3>
        <p class="text-gray-400 mb-2">{{ job.company }}</p>
        <p class="text-gray-400 mb-2 md:hidden">{{ job.location }}</p>
        <div class="flex items-center justify-between">
          <span
            class="inline-block px-2 rounded-full bg-red-200 text-red-800 font-semibold text-xs"
          >
            {{ job.type }}
          </span>
          <div class="flex justify-between text-gray-400">
            <div class="flex mr-4 items-center">
              <base-icon iconId="clock" class="w-4 h-4 mr-1 fill-current" />
              <p class="text-xs font-bold">{{ timePosted(job.created_at) }} ago</p>
            </div>
            <div class="hidden md:flex mr-4 items-center">
              <base-icon iconId="location" class="w-4 h-4 mr-1 fill-current" />
              <p class="text-xs font-bold">{{ job.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b border-1 border-gray-300 md:mr-4"></div>
  </router-link>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  methods: {
    timePosted(val) {
      return moment.duration(moment() - moment(new Date(val))).humanize();
    },
  },
};
</script>

<style scoped></style>
