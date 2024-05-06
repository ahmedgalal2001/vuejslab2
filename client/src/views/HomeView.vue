<template>
  <div class="home">
    <HelloWorld @addData="addData" />
    <div class="flex justify-center mt-3">
      <button
        type="button"
        @click="isAdmin = false"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        User
      </button>
      <button
        type="button"
        @click="isAdmin = true"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Admin
      </button>
    </div>
    <AdminCompoent @removeData="removeData" :admins="admins" v-if="isAdmin" />
    <UserCompoent @removeData="removeData" :users="users" v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AdminCompoent from "@/components/AdminCompoent.vue";
import UserCompoent from "@/components/UserCompoent.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    AdminCompoent,
    UserCompoent,
  },
  data: function () {
    return {
      isAdmin: false,
      admins: [],
      users: [],
    };
  },
  methods: {
    addData(data) {
      if (data.role == "admin") {
        this.admins.push(data);
      } else {
        this.users.push(data);
      }
    },
    removeData(data) {
      if (data.role == "admin") {
        this.admins.splice(this.admins.indexOf(data), 1);
      } else {
        this.users.splice(this.users.indexOf(data), 1);
      }
    },
  },
};
</script>
