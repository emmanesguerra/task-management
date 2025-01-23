<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Task Management</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tasks" class="nav-link">Tasks</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/teams" class="nav-link">Teams</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <button @click="logout" class="btn btn-danger my-2 my-sm-0">Logout</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const logout = () => {
      authStore.logout();
    };

    return {
      logout,
    };
  },
};
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
}
</style>
