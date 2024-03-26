<!-- CreateToDo.vue -->
<template>
    <div>
      <h2>Create ToDo</h2>
      <form @submit.prevent="createToDo">
        <label>Title:</label>
        <input type="text" v-model="title" required>
        <label>Description:</label>
        <textarea v-model="description" required></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CreateToDo',
    data() {
      return {
        title: '',
        description: ''
      }
    },
    methods: {
      createToDo() {
        // Implement create ToDo logic here
        // Upon successful creation, redirect to todos
        this.$router.push('/todos');
      }
    }
  }
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  