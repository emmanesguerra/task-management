import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL + '/api/projects';

export default {
  async getAllProjects() {
    return axios.get(API_URL);
  },

  async getProjectById(id) {
    return axios.get(`${API_URL}/${id}`);
  },

  async createProject(data) {
    return axios.post(API_URL, data);
  },

  async updateProject(id, data) {
    return axios.put(`${API_URL}/${id}`, data);
  },

  async deleteProject(id) {
    return axios.delete(`${API_URL}/${id}`);
  },
};
