class ProductAPI {
  static BASE_URL = `${process.env.REACT_APP_BACKEND_ADDRESS}/Products`;

  static async getAll() {
    const response = await fetch(this.BASE_URL);
    return await response.json();
  }

  static async getById(id) {
    const response = await fetch(`${this.BASE_URL}/${id}`);
    return await response.json();
  }

  static async add(product) {
    await fetch(this.BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  }

  static async remove(id) {
    await fetch(`${this.BASE_URL}/${id}`, { method: "DELETE" });
  }

  static async update(product) {
    await fetch(this.BASE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  }
}

export default ProductAPI;
