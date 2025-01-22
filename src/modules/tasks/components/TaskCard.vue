<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ task.name }}</h5>
        <p class="card-text">{{ task.description }}</p>
        <button @click="onDelete(task.id)" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      task: Object,
      onDelete: Function,
    },
  };
  </script>
  