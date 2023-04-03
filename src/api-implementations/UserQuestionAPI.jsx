const BASE_URL = `${process.env.BACKEND_ADDRESS}/UserQuestion`;

class UserQuestionAPI {
  static getAll = async () => {
    const response = await fetch(BASE_URL);
    return response.json();
  };

  static getById = async (id) => {
    const response = await fetch(`${BASE_URL}/UserQuestion/${id}`);
    return response.json();
  };

  static add = async (question) => {
    await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });
  };

  static remove = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  };

  static update = async (question) => {
    await fetch(BASE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    });
  };
}
