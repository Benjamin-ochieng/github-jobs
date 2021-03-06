import { createRouter, createWebHistory } from 'vue-router';
import JobDetails from '@/views/JobDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Jobs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Jobs.vue'),
    props: true,
  },
  {
    path: '/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
