const BASE_URL = `${process.env.BACKEND_ADDRESS}/Products`;

export const ProductAPI = {
  async getAll() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  },

  async getById(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  },

  async add(product) {
    await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  },

  async remove(id) {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  },

  async update(product) {
    await fetch(BASE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  },
};
