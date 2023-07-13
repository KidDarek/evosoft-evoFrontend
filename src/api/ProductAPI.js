class ProductAPI {
  static BASE_URL = "http://localhost:5232/Products";

  static async getAll() {
    const response = await fetch(this.BASE_URL);
    return await response.json();
  }

  static async getById(id) {
    const response = await fetch(`http://localhost:5232/Products/${id}`);
    return await response.json();
  }

  static async add(product) {
    await fetch("http://localhost:5232/Products", {
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
