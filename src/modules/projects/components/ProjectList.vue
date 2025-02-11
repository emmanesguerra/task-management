<template>
  <div>
    <h1>Projects</h1>
    <form @submit.prevent="addProject">
      <input v-model="newProjectName" placeholder="New Project Name" />
      <button type="submit">Add Project</button>
    </form>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
        <button @click="deleteProject(project.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useProjectStore } from '@/modules/projects/stores/projectStore';

export default {
  setup() {
    const newProjectName = ref('');
    const projectStore = useProjectStore();

    const addProject = () => {
      projectStore.addProject(newProjectName.value);
      newProjectName.value = '';
    };

    const deleteProject = (id) => {
      projectStore.deleteProject(id);
    };

    return {
      newProjectName,
      projects: projectStore.getProjects,
      addProject,
      deleteProject,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>