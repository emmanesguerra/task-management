<template>
  <div>
    <h1>Projects</h1>
    <div class="d-flex justify-content-end">
      <router-link :to="{ name: 'ProjectAdd' }" class="btn btn-sm btn-primary">Add New Project</router-link>
    </div>
    <table class="table small table-striped table-hover my-3">
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
          <td>{{ project.start_date }}</td>
          <td>{{ project.end_date }}</td>
          <td>{{ project.status }}</td>
          <td>{{ project.getDuration() }}</td>
          <td>{{ project.isActive() ? 'Yes' : 'No' }}</td>
          <td>{{ project.isDeleted() ? 'Yes' : 'No' }}</td>
          <td>
            <button class="btn btn-sm btn-dark" @click="editProject(project.id)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="deleteProject(project.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useProjectStore } from "@/modules/projects/stores/projectStore";

const projectStore = useProjectStore();
const router = useRouter();

const projects = computed(() => projectStore.projects);

const fetchProjects = async () => {
  await projectStore.fetchProjects();
};

const editProject = (projectId) => {
  router.push({ name: "ProjectEdit", params: { id: projectId } });
};

const deleteProject = async (projectId) => {
  await projectStore.deleteProject(projectId);
};

onMounted(fetchProjects);
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  vertical-align: middle;
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