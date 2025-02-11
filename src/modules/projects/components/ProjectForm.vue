<template>
    <div>
        <b-form @submit.prevent="handleSubmit">
            <b-form-group label="Project Name">
                <b-form-input v-model="form.name" required></b-form-input>
            </b-form-group>
            <b-form-group label="Description">
                <b-form-textarea v-model="form.description"></b-form-textarea>
            </b-form-group>
            <b-button type="submit" variant="primary">
                {{ isEdit ? 'Update Project' : 'Add Project' }}
            </b-button>
        </b-form>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
    props: {
        project: {
            type: Object,
            default: () => ({}),
        },
        isEdit: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["submit"],
    setup(props, { emit }) {
        const form = reactive({
            name: props.project.name || "",
            description: props.project.description || "",
        });

        const handleSubmit = () => {
            emit("submit", { ...form });
        };

        return { ...toRefs(form), handleSubmit };
    },
};
</script>