<template>
  <BForm @submit="onSubmit">
    <BFormFloatingLabel label="Project Name" label-for="floatingName" class="my-3">
      <BFormInput id="floatingName" type="text" v-model="form.name" placeholder="Project Name" />
    </BFormFloatingLabel>
    
    <BFormFloatingLabel label="Project Description" label-for="floatingDesc" class="my-3">
      <BFormTextarea 
        id="floatingDesc" 
        placeholder="Project Description"
        v-model="form.description"
        style="height: 6rem" 
      />
    </BFormFloatingLabel>
    
    <div class="row my-3">
      <div class="col-lg-3">
        <BFormFloatingLabel label="Budget" label-for="floatingBudget">
          <BFormInput id="floatingBudget" type="number" v-model.number="form.budget" placeholder="Budget" />
        </BFormFloatingLabel>
      </div>
      
      <div class="col-lg-3">
        <BFormFloatingLabel label="Start Date" label-for="floatingSD">
          <BFormInput id="floatingSD" type="date" v-model="form.start_date" placeholder="Start Date" />
        </BFormFloatingLabel>
      </div>
      
      <div class="col-lg-3">
        <BFormFloatingLabel label="End Date" label-for="floatingED">
          <BFormInput id="floatingED" type="date" v-model="form.end_date" placeholder="End Date" />
        </BFormFloatingLabel>
      </div>
      
      <div class="col-lg-3">
        <BFormFloatingLabel label="Status" label-for="floatingStatus">
          <BFormSelect id="floatingStatus" v-model="form.status" :options="statusOptions" />
        </BFormFloatingLabel>
      </div>
    </div>

    <div class="text-center">
      <BButton type="submit" variant="dark" class="mx-2 col-2">{{ isEdit ? 'Update' : 'Submit' }}</BButton>
      <BButton type="reset" @click="onReset" class="mx-2 col-2">Reset</BButton>
    </div>
  </BForm>

  <BCard class="mt-3" header="Form Data Result">
    <pre class="m-0">{{ form }}</pre>
  </BCard>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, reactive, watch, nextTick, ref } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    default: () => ({
      name: '',
      description: '',
      budget: null,
      start_date: null,
      end_date: null,
      status: null,
    }),
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['submitForm'])

const form = reactive({ ...props.project })

const statusOptions = [
  { value: null, text: 'Please select a status' },
  { value: 'pending', text: 'Pending' },
  { value: 'ongoing', text: 'Ongoing' },
  { value: 'completed', text: 'Completed' },
  { value: 'cancelled', text: 'Cancelled' },
]

watch(() => props.project, (newProject) => {
  Object.assign(form, newProject)
}, { deep: true, immediate: true })

const onSubmit = (event: Event) => {
  event.preventDefault()
  emit('submitForm', form)
}

const onReset = () => {
  Object.assign(form, props.project)
}
</script>