<template>
  <div class="px-5 lg:px-28 xl:px-56">
    <banner>
      <base-search
        v-model="params.description"
        @keyup.enter="searchJob"
        searchInput="description"
        searchPlaceholder="Title,companies,experties or benefits"
        class="max-w-2xl"
      />
    </banner>
    <section class="h-screen lg:flex lg:flex-row">
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
          <base-check label="Full time" v-model="params.full_time" />
          <fieldset class="mt-6">
            <legend class="text-sm mb-4 font-bold text-gray-600">Location</legend>
            <base-search
              v-model="params.location"
              searchInput="location"
              @keyup.enter="searchJob"
              searchPlaceholder="City,State,Zip code or Country"
            />
            <div class="pt-10 pb-2 flex flex-wrap">
              <base-radio
                v-for="(location, index) in recentLocations"
                :key="index"
                :name="location"
                :label="location"
                :value="location"
                v-model="params.location"
                class="mr-2 mb-6"
              />
            </div>
          </fieldset>
        </div>
      </div>
      <div id="filter" class="hidden lg:block py-10">
        <div id="filter-menu" class="w-80 py-5 text-navy">
          <base-check label="Full time" v-model="params.full_time" />
          <fieldset class="mt-6">
            <legend class="text-sm mb-4 font-bold text-gray-600">Location</legend>
            <base-search
              v-model="params.location"
              searchInput="location"
              @keyup.enter="
                searchJob();
                updateLocations();
              "
              searchPlaceholder="City,State,Zip code or Country"
            />
            <div class="pt-10 pb-2 flex flex-wrap">
              <base-radio
                v-for="(location, index) in recentLocations"
                :key="index"
                :name="location"
                :label="location"
                :value="location"
                v-model="params.location"
                class="mr-2 mb-6"
              />
            </div>
          </fieldset>
        </div>
      </div>
      <div class="flex lg:flex-grow flex-col lg:pl-20 lg:py-10">
        <h2 v-if="loading" class="text-lg mb-8 font-bold text-navy">Fetching jobs...</h2>
        <h2 v-else class="text-lg mb-8 font-bold text-navy">{{ message }}</h2>
        <div class="flex-1 flex overflow-hidden">
          <div id="jobs" class="flex-1 overflow-y-auto scroll">
            <Job v-for="job in jobs" :key="job.id" :job="job" />
          </div>
        </div>
        <div class="flex pt-10 justify-center">
          <base-button
            v-if="jobs.length === 50"
            value="Load more"
            class="px-8"
            @click="
              fetchJobs();
              scrollToTop();
            "
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Banner from '@/components/Banner.vue';
import Job from '@/components/Job.vue';

export default {
  name: 'Jobs',
  components: {
    Banner,
    Job,
  },
  data() {
    return {
      filter: false,
    };
  },
  methods: {
    toggleFilter() {
      this.filter = !this.filter;
    },
    scrollToTop() {
      const container = this.$el.querySelector('#jobs');
      container.scrollTo(0, 0);
    },
  },
  setup() {
    const params = ref({
      description: '',
      location: '',
      full_time: false,
    });

    const store = useStore();
    const jobs = computed(() => store.state.jobs);
    const page = computed(() => store.state.page);
    const message = computed(() => store.state.message);
    const loading = computed(() => store.state.loading);
    const recentLocations = computed(() => store.state.recentLocations);
    onMounted(() => store.dispatch('fetchJobs', params.value));

    const fetchJobs = () => {
      store.dispatch('fetchJobs', params.value);
    };

    const searchJob = () => {
      store.dispatch('resetPage');
      store.dispatch('fetchJobs', params.value);
    };
    const updateLocations = () => {
      store.dispatch('setRecentLocations', params.value.location);
    };

    return {
      jobs,
      page,
      params,
      fetchJobs,
      searchJob,
      updateLocations,
      loading,
      message,
      recentLocations,
    };
  },
};
</script>

<style scoped></style>
