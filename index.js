// index.js
const BACKEND_URL = "eteeapbackend-production.up.railway.app"; // Replace with your Railway URL

// Example: Fetch data from backend
async function fetchData() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/data`);
    const data = await response.json();
    console.log("Backend response:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch:", error);
    return null;
  }
}

// Example: Post data to backend (for forms)
async function submitForm(formData) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return await response.json();
  } catch (error) {
    console.error("Submission failed:", error);
    return { success: false, error: "Network error" };
  }
}

// Attach functions to window for global access
window.fetchData = fetchData;
window.submitForm = submitForm;
