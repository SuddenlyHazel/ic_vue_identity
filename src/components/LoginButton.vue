<template>
  <button
    @click="login"
    class="
      inline-flex
      items-center
      px-4
      py-2
      border border-transparent
      text-sm
      font-medium
      rounded-md
      shadow-sm
      text-white
      bg-blue-800
      hover:bg-blue-400
      focus:outline-none
      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    "
  >
    login
  </button>
</template>

<script>
import { defineComponent, toRefs } from "vue"

const localIICanisterId = "rdmx6-jaaaa-aaaaa-aaadq-cai"
export default defineComponent({
  name: "Login",
  props: ["callback"],
  setup: (props) => {
    const { callback } = toRefs(props)
    const login = () => {
      window.authClient.login({
        identityProvider:
          process.env.NODE_ENV === "development"
            ? `http://${localIICanisterId}.localhost:8000/`
            : undefined,
        onSuccess: async () => {
          callback()
        },
      })
    }
    return { login }
  },
  methods: {},
})
</script>

<style scoped>
</style>
