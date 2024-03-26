<!-- Login.vue -->
<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label>Email:</label>
        <input type="email" v-model="email" required>
        <label>Password:</label>
        <input type="password" v-model="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        
        this.$router.push('/todos');
      }
    }
  }
  </script>
  
  <style>
  </style>
  