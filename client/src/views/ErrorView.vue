<template>
  <div class="flex items-center justify-center h-screen">
    <div
      class="p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8"
    >
      <h5 class="mb-2 text-3xl font-bold text-red-900">
        Something Error Happen
      </h5>

      <div
        class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse"
      >
        <a
          href="#"
          @click="$router.replace({ name: 'home' })"
          class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
              fill="#fff"
            />
          </svg>
          <div class="text-left rtl:text-right">
            <div class="-mt-1 font-sans text-sm font-semibold">
              Back to Homepage
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ErrorView",
};
</script>

<style scoped></style>
