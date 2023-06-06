const BASE_URL = "http://localhost:5232/User";

class UserAPI {
  static async getAll() {
    const response = await fetch(BASE_URL);
    return await response.json();
  }

  static async getById(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    return await response.json();
  }

  static async add(user) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.status;
  }

  static async login(userData) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    return await response.json();
  }

  static async remove(id) {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  }

  static async update(user) {
    await fetch(BASE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }
}

export default UserAPI;
