<template>
    <div class="home">
      <h1>Welcome to the Task Management App</h1>
      <p>Manage your tasks, projects, and teams efficiently.</p>
  
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Total Tasks</h5>
              <p class="card-text">You have 15 tasks pending.</p>
              <router-link to="/tasks" class="btn btn-primary">View Tasks</router-link>
            </div>
          </div>
        </div>
  
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Active Projects</h5>
              <p class="card-text">There are 5 active projects.</p>
              <router-link to="/projects" class="btn btn-primary">View Projects</router-link>
            </div>
          </div>
        </div>
  
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Team Overview</h5>
              <p class="card-text">View your team members.</p>
              <router-link to="/teams" class="btn btn-primary">View Teams</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  .card {
    margin-bottom: 20px;
  }
  </style>
  