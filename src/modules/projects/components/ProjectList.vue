<template>
  <div>
    <h1>Projects</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Budget</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Status</th>
          <th>Duration (days)</th>
          <th>Active?</th>
          <th>Deleted?</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in projects" :key="project.id">
          <td>{{ index + 1 }}</td>
          <td>{{ project.name }}</td>
          <td>{{ project.description }}</td>
          <td>{{ project.budget }}</td>
          <td>{{ project.startDate }}</td>
          <td>{{ project.endDate }}</td>
          <td>{{ project.status }}</td>
          <td>{{ project.getDuration() }}</td>
          <td>{{ project.isActive() ? 'Yes' : 'No' }}</td>
          <td>{{ project.isDeleted() ? 'Yes' : 'No' }}</td>
          <td>
            <button class="btn btn-sm btn-primary" @click="editProject(project)">Edit</button>
            <button class="btn btn-sm btn-dark" @click="deleteProject(project.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useProjectStore } from "@/modules/projects/stores/projectStore";

export default {
  setup() {
    const projectStore = useProjectStore();

    onMounted(() => {
      projectStore.fetchProjects(); // Ensure this method exists in your store
    });

    return {
      projects: computed(() => projectStore.projects),
      deleteProject: projectStore.deleteProject,
    };
  },
};

</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
  text-align: left;
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>