<template>
    <div>
        <h2>Add New Project</h2>
        <ProjectForm @submit="addProject" />
    </div>
</template>

<script>
import ProjectForm from "../components/ProjectForm.vue";
import { useProjectStore } from "../stores/projectStore";

export default {
    components: { ProjectForm },
    setup() {
        const projectStore = useProjectStore();

        const addProject = async (newProject) => {
            await projectStore.addProject(newProject);
            // Navigate back to the project list or show feedback
        };

        return { addProject };
    },
};
</script>