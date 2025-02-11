import axios from "axios";

const projectService = {
    // Base setup
    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    // Set the Authorization token
    setToken(token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },

    // GET request
    async get(resource, params = {}) {
        try {
            const response = await axios.get(resource, { params });
            return response.data;
        } catch (error) {
            ApiService.handleError(error);
        }
    },

    // POST request
    async post(resource, data) {
        try {
            const response = await axios.post(resource, data);
            return response.data;
        } catch (error) {
            ApiService.handleError(error);
        }
    },

    // PUT request
    async put(resource, data) {
        try {
            const response = await axios.put(resource, data);
            return response.data;
        } catch (error) {
            ApiService.handleError(error);
        }
    },

    // DELETE request
    async delete(resource) {
        try {
            const response = await axios.delete(resource);
            return response.data;
        } catch (error) {
            ApiService.handleError(error);
        }
    },

    // Handle errors
    handleError(error) {
        console.error("API Error:", error);
        throw error.response ? error.response.data : error;
    },
};

export default projectService;
