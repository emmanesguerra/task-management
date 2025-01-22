<template>
    <div>
      <h1>Tasks</h1>
      <button @click="addSampleTask">Add Sample Task</button>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          {{ task.name }}
          <button @click="deleteTask(task.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useTaskStore } from '@/stores/taskStore';
  import { ref } from 'vue';
  
  export default {
    setup() {
      const taskStore = useTaskStore();
      const tasks = taskStore.tasks;
  
      const addSampleTask = () => {
        taskStore.addTask({ id: Date.now(), name: 'New Task' });
      };
  
      const deleteTask = (id) => {
        taskStore.deleteTask(id);
      };
  
      return { tasks, addSampleTask, deleteTask };
    },
  };
  </script>
  