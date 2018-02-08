import axios from "axios";

export default {
  // Gets all Companies
  getCompanies: function() {
    return axios.get("/api/companies");
  },
  // Gets the company with the given id
  getCompany: function(id) {
    return axios.get("/api/companies/" + id);
  },
  // Deletes the company with the given id
  deleteCompany: function(id) {
    return axios.delete("/api/companies/" + id);
  },
  // Saves a company to the database
  saveCompany: function(companyData) {
    return axios.post("/api/companies", companyData);
  }
};
