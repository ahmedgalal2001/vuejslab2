<template>
  <div
    class="relative m-4 flex flex-col min-w-0 break-words bg-white overflow-x-auto shadow-md sm:rounded-lg"
  >
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <caption
        class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800"
      >
        Admins
      </caption>
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Age</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Remove</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="admin in admins" :key="admin.id" class="bg-white border-b">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            {{ admin.name }}
          </th>
          <td class="px-6 py-4">{{ admin.age }}</td>
          <td class="px-6 py-4 text-right">
            <a href="#" @click="removeData()" class="font-medium text-red-600"
              >Remove</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AdminCompoent",
  props: ["admins"],
  methods: {
    removeData() {
      const data = {
        name: document.getElementById("name").value,
        role: document.getElementById("role").value,
      };
      this.$emit("removeData", data);
    },
  },
};
</script>

<style scoped></style>
