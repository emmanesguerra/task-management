import { defineStore } from "pinia";
import ProjectModel from "@/modules/projects/models/ProjectModel";
import projectService from "../services/projectService";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [], // Array of ProjectModel instances
    selectedProject: null, // Currently selected project (if any)
  }),

  getters: {
    activeProjects(state) {
      return state.projects.filter((project) => project.isActive());
    },
  },

  actions: {
    // Fetch all projects from the API and map to ProjectModel
    async fetchProjects() {
      try {
        const response = await projectService.getAllProjects();
        this.projects = response.data.map((item) => new ProjectModel(item));

      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },

    // Add a new project
    async addProject(projectData) {
      try {
        const response = await projectService.createProject(projectData);
        const newProject = new ProjectModel(response.data);
        this.projects.push(newProject);
      } catch (error) {
        console.error("Error adding project:", error);
      }
    },

    // Update an existing project
    async updateProject(id, projectData) {
      try {
        const response = await projectService.updateProject(id, projectData);
        const updatedProject = new ProjectModel(response.data);
        const index = this.projects.findIndex((project) => project.id === id);
        if (index !== -1) {
          this.projects[index] = updatedProject;
        }
      } catch (error) {
        console.error("Error updating project:", error);
      }
    },

    // Delete a project
    async deleteProject(id) {
      try {
        await projectService.deleteProject(id);
        this.projects = this.projects.filter((project) => project.id !== id);
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    },

    // Set the selected project
    selectProject(id) {
      this.selectedProject = this.projects.find((project) => project.id === id) || null;
    },
  },
});
