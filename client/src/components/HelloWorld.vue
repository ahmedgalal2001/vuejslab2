<template>
  <form @submit.prevent class="max-w-sm mt-5 mx-auto">
    <div class="mb-5">
      <input
        type="text"
        id="name"
        name="name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Enter your name"
        required
      />
    </div>
    <div class="mb-5">
      <input
        type="number"
        id="age"
        name="age"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Enter your age"
        required
      />
    </div>
    <select
      id="role"
      class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
    <button
      type="submit"
      @click="addData()"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {};
  },
  methods: {
    addData() {
      const data = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        role: document.getElementById("role").value,
      };
      this.$emit("addData", data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
