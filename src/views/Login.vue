<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p v-if="error" class="text-danger">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

export default {
  setup() {
    const username = ref('admin');
    const password = ref('password123');
    const error = ref(null);
    const authStore = useAuthStore();
    const router = useRouter();

    const handleLogin = async () => {
      try {
        // Simulate an API call to authenticate
        const response = await authenticate(username.value, password.value);

        // If successful, store the token using Pinia and redirect to the dashboard
        if (response.success) {
          authStore.login(response.token);
          router.push('/');
        } else {
          error.value = 'Invalid credentials';
        }
      } catch (err) {
        error.value = 'An error occurred. Please try again.';
      }
    };

    const authenticate = (username, password) => {
      // Simulating an API response, replace with actual API call
      return new Promise((resolve) => {
        setTimeout(() => {
          if (username === 'admin' && password === 'password123') {
            resolve({ success: true, token: 'fake-jwt-token' });
          } else {
            resolve({ success: false });
          }
        }, 1000);
      });
    };

    return {
      username,
      password,
      error,
      handleLogin,
    };
  },
};
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
