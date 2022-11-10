
<template>
  <div>
    <Header></Header>
  <div>
    <div v-if="firebaseUser">{{firebaseUser.email}}</div>
    <input type="text" v-model="email">
    <input type="text" v-model="password">
    <button class="button" @click="register" v-if="!firebaseUser">Register</button>
    <button class="button" @click="signIn" v-if="!firebaseUser">Login</button>
    <button class="button" @click="signOut" v-if="firebaseUser">Sign Out</button>
  </div>
</div>
</template>

<script setup lang="ts">
import { getAuth, onAuthStateChanged } from "firebase/auth"
const firebaseUser = useFirebaseUser();
  const email = ref('')
  const password = ref('')
const {createUser, initUser, signOutUser, signInUser} = useFBase()

console.log(firebaseUser)

const register = async () => {
  const credentials = await createUser(email.value,password.value)
  console.log(credentials)
}

const signIn = async () => {
  const credentials = await signInUser(email.value,password.value)
  console.log(credentials)
}

const signOut = async () => {
  const credentials = await signOutUser()
  console.log(credentials)
}






</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>