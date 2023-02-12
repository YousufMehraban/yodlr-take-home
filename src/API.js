import axios from "axios";

const BASE_URL = "http://localhost:5000";

// Routes gives us all crud methods.
// Here we define a class to wrapp the methods of accessing and creating users.

class Users {
  static async getUsers() {
    const result = await axios.get(`${BASE_URL}/users`);
    return result.data;
  }

  static async createUser(Data) {
    const result = await axios.post(
      `${BASE_URL}/users`,
      Data,
      (Headers = { "Content-Type": "application/json" })
    );
    if (result) return `User ${Data.firstName} successfully created!`;
  }
}

export default Users;
