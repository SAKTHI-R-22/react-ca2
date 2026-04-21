const BASE_URL = "https://t4e-testserver.onrender.com/api";

// Get Token
export const getToken = async () => {
  try {
    const res = await fetch(`${BASE_URL}/public/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        uniqueId: "E0123009",
        password: "336839"
      })
    });

    const data = await res.json();
    return data.token;
  } catch (err) {
    console.error("Token Error:", err);
    return null;
  }
};

// Fetch Data
export const fetchData = async () => {
  try {
    const token = await getToken();

    const res = await fetch(`${BASE_URL}/private/data`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    console.log("FULL API RESPONSE:", data); 

    // ✅ Handle all formats safely
    return Array.isArray(data)
      ? data
      : data.data || data.orders || [];
  } catch (err) {
    console.error("Fetch Error:", err);
    return [];
  }
};