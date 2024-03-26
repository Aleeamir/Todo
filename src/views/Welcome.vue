<!-- Welcome.vue -->
<template>
    <div>
      <!-- Welcome screen content -->
      <h1>Welcome to ToDo List App</h1>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Welcome'
  }
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  