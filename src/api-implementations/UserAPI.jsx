const BASE_URL = `${process.env.BACKEND_ADDRESS}/User`;

class ProductAPI {
  static async getAllProducts() {
    const response = await fetch(BASE_URL);
    return await response.json();
  }

  static async getProductById(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    return await response.json();
  }

  static async addProduct(product) {
    await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  }

  static async removeProductById(id) {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  }

  static async updateProduct(product) {
    await fetch(BASE_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  }
}

export default ProductAPI;
