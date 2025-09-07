// src/services/api.js

const API_URL =
  "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing";

/**
 * Fetch all properties
 * @returns {Promise<Array>} List of properties
 */
export const fetchProperties = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error fetching properties: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API fetch error:", error);
    return [];
  }
};

/**
 * Fetch a single property by ID
 * @param {string|number} id
 * @returns {Promise<Object>} Property details
 */
export const fetchPropertyById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching property ${id}: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API fetch by ID error:", error);
    return null;
  }
};

/**
 * Filter properties (sale / rent)
 * NOTE: Adjust according to your API’s schema
 * @param {string} type - "sale" | "rent"
 * @returns {Promise<Array>}
 */
export const fetchPropertiesByType = async (type) => {
  try {
    const response = await fetch(`${API_URL}?type=${type}`);
    if (!response.ok) {
      throw new Error(`Error filtering properties: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API filter error:", error);
    return [];
  }
};
