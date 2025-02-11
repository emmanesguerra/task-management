<template>
    <div>
        <h2>Edit Project</h2>
        <ProjectForm :project="project" :isEdit="true" @submit="updateProject" />
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import ProjectForm from "../components/ProjectForm.vue";
import { useProjectStore } from "../stores/projectStore";

export default {
    components: { ProjectForm },
    setup() {
        const route = useRoute();
        const projectStore = useProjectStore();
        const project = ref({});

        onMounted(async () => {
            project.value = await projectStore.getProject(route.params.id);
        });

        const updateProject = async (updatedProject) => {
            await projectStore.updateProject(route.params.id, updatedProject);
            // Navigate back or show feedback
        };

        return { project, updateProject };
    },
};
</script>