<template>
    <div>
        <h2>Edit Project</h2>
        <ProjectForm v-if="selectedProject" :project="selectedProject" :isEdit="true" @submitForm="updateProject" />
        <p v-else>Loading project data...</p>
    </div>
</template>

<script setup>
import { onMounted, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useProjectStore } from "@/modules/projects/stores/projectStore";
import ProjectForm from "../components/ProjectForm.vue";

const route = useRoute();
const projectStore = useProjectStore();

const selectedProject = computed(() => projectStore.selectedProject);

onMounted(async () => {
    if (!projectStore.projects.length) {
        await projectStore.fetchProjects();
    }

    if (!projectStore.selectedProject || projectStore.selectedProject.id !== Number(route.params.id)) {
        projectStore.selectProject(Number(route.params.id));
    }
});

watchEffect(() => {
    projectStore.selectProject(Number(route.params.id));
});

const updateProject = async (updatedProject) => {
    await projectStore.updateProject(route.params.id, updatedProject);
};
</script>