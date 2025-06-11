const API_BASE_URL = "https://eteeapbackend-production.up.railway.app";

// Example API calls
async function fetchData() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/data`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example POST request
async function submitForm(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return await response.json();
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}
