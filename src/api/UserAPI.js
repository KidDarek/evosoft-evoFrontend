const BASE_URL = `${process.env.REACT_APP_BACKEND_ADDRESS}/User`;

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
    });
    if (response.ok) {
      return response.json();
    }
    return null;
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
