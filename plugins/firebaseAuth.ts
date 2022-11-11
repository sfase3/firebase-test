import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import useFBase from "~~/composables/useFBase";
export default defineNuxtPlugin(nuxtApp => {

    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
      };

      const app = initializeApp(firebaseConfig);
      useFBase().initUser()
      console.log(app)
})