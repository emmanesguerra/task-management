import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/Home.vue';
import LoginView from '@/views/Login.vue';
import Navbar from '@/components/Navbar.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      navbar: Navbar,
    },
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/projects',
    name: 'projects',
    components: {
      default: () => import('@/modules/projects/views/Projects.vue'),
      navbar: Navbar,
    },
  },
  {
    path: '/tasks',
    name: 'tasks',
    components: {
      default: () => import('@/modules/tasks/views/Tasks.vue'),
      navbar: Navbar,
    },
  },
  {
    path: '/teams',
    name: 'teams',
    components: {
      default: () => import('@/modules/teams/views/Teams.vue'),
      navbar: Navbar,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Global navigation guard to check for authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Example check for authentication
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login'); // Redirect to login page if not authenticated
  } else {
    next();
  }
});

export default router;