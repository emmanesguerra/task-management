export default class ProjectModel {
  constructor({
    id = null,
    name = "",
    description = "",
    startDate = null,
    endDate = null,
    status = "Pending",
    members = [],
  } = {}) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
    this.members = members; // Array of member IDs or objects
  }

  // Helper to check if a project is active
  isActive() {
    const today = new Date();
    return today >= new Date(this.startDate) && today <= new Date(this.endDate);
  }

  // Helper to check if the project has members
  hasMembers() {
    return this.members && this.members.length > 0;
  }

  // Method to get the project's duration in days
  getDuration() {
    if (!this.startDate || !this.endDate) return 0;
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Days
  }
}
