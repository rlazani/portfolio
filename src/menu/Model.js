export async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/menu");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export const menuJson = fetchData();

/* fetchData()
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  }); */
