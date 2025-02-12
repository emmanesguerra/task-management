export default class ProjectModel {
  constructor({
    id = null,
    name = "",
    description = "",
    start_date = null,
    end_date = null,
    status = "pending",
    budget = "0.00",
    created_at = null,
    updated_at = null,
    deleted_at = null,
  } = {}) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startDate = start_date;
    this.endDate = end_date;
    this.status = status;
    this.budget = budget;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
    this.deletedAt = deleted_at;
  }

  // Helper to check if a project is active
  isActive() {
    const today = new Date();
    return today >= new Date(this.startDate) && today <= new Date(this.endDate);
  }

  // Method to get the project's duration in days
  getDuration() {
    if (!this.startDate || !this.endDate) return 0;
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24)); // Days
  }

  // Method to check if project is deleted
  isDeleted() {
    return this.deletedAt !== null;
  }
}
