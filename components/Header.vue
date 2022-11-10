<template>
  <div class="d" v-if="user">{{user}}</div>
  <div class="d" v-if="!user">Not logined</div>
</template>

<script setup>
const user = useFirebaseUser()
</script>


<style>
.d{
   
    background-color: red;
    color: white
}
</style>