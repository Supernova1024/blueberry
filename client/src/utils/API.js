import axios from "axios";

export default {
  // Company API Calls
  // Get all companies
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
  },

   // Vendor API Calls
   // Get all vendors
  getVendors: function() {
    return axios.get("/api/vendors/");
  },
  // Gets the vendor with the given id
  getVendor: function(id) {
    return axios.get("/api/vendors/" + id );
  },
  // Deletes the vendor with the given id
  deleteVendor: function(id) {
    return axios.delete("/api/vendors/" + id);
  },
  // Saves a vendor to the database
  saveVendor: function(vendorData, companyId) {
    return axios.post("/api/vendors", vendorData);
  },


};
