const BASE_URL = `${process.env.REACT_APP_BACKEND_ADDRESS}/UserQuestion`;

export default class UserQuestionAPI {
  static async getAll() {
    const response = await fetch(BASE_URL);
    return await response.json();
  }

  static async getById(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    return await response.json();
  }

  static async add(userQuestion) {
    await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userQuestion),
    });
  }

  static async remove(id) {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  }

  static async update(userQuestion) {
    await fetch(BASE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userQuestion),
    });
  }
}
