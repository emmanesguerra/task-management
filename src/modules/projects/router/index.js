import Projects from '@/modules/projects/views/Projects.vue';
import ProjectAdd from '@/modules/projects/views/ProjectAdd.vue';
import ProjectEdit from '@/modules/projects/views/ProjectEdit.vue';

const routes = [
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
  },
  {
    path: '/projects/add',
    name: 'ProjectAdd',
    component: ProjectAdd,
  },
  {
    path: '/projects/edit/:id',
    name: 'ProjectEdit',
    component: ProjectEdit,
  },
];

export default routes;
