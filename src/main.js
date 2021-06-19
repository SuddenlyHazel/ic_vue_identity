import { AuthClient } from "@dfinity/auth-client"

import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"

/**
 * @dfinity/agent requires this. Can be removed once it's fixed
 */
window.global = window
AuthClient.create().then((v) => {
  window.authClient = v
});

createApp(App).mount('#app')
