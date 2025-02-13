<template>
    <div>
        <h2>Add New Project</h2>
        <ProjectForm :isEdit="false" @submitForm="addProject" />
    </div>
</template>

<script setup>
import { useProjectStore } from "../stores/projectStore";
import { useRouter } from 'vue-router';
import ProjectForm from "../components/ProjectForm.vue";

const projectStore = useProjectStore();
const router = useRouter();

const addProject = async (newProject) => {
    await projectStore.addProject(newProject);
    router.push('/projects'); // Redirect to project list
};
</script>
