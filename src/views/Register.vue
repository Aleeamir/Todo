<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <label>Email:</label>
        <input type="email" v-model="email" required>
        <label>Password:</label>
        <input type="password" v-model="password" required>
        <label>Confirm Password:</label>
        <input type="password" v-model="confirmPassword" required>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      register() {
       
        this.$router.push('/login');
      }
    }
  }
  </script>
  
  <style>
  </style>
  