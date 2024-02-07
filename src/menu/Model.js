import { backupData } from "./backData.js";

export class Model {
  data;
  async fetchData() {
    try {
      const response = await fetch("http://localhost:3000/menu");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      this.data = await response.json();
      return this.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      //throw error;
      this.fetchArray();
      return this.data;
    }
  }
  fetchArray() {
    console.log("fetching data###");
    this.data = backupData;
  }
}
