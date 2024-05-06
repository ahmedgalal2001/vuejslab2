import { createStore } from "vuex";
import axiosInstance from "../axios";
export default createStore({
  state: {
    products: [],
    product: {},
  },
  getters: {
    getProducts(state) {
      return state.products;
    },

    getProduct(state) {
      return state.product;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    addProduct(state, product) {
      state.products.push(product);
    },

    deleteProduct(state, id) {
      state.products = state.products.filter((product) => product.id !== id);
    },

    getProduct(state, product) {
      console.log(product);
      state.product = product;
    },

    editProduct(state, product) {
      const index = state.products.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        state.products[index] = product;
      }
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const res = await axiosInstance.get("/products");
        commit("setProducts", res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async getProduct({ commit }, id) {
      try {
        console.log(id);
        const res = await axiosInstance.get(`/products/${id}`);
        commit("getProduct", res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async addProduct({ commit }, product) {
      try {
        const res = await axiosInstance.post("/products", { data: product });
        commit("addProducts", res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async deleteProduct({ commit }, id) {
      try {
        await axiosInstance.delete(`/products/${id}`);
        commit("deleteProduct", id);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async editProduct({ commit }, product) {
      try {
        const res = await axiosInstance.put(`/products/${product.id}`, {
          data: product,
        });
        commit("editProduct", res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
  modules: {},
});
