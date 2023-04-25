const BASE_URL = "http://localhost:5232/Users";

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
    await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
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
