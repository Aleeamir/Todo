<!-- ViewUpdateToDo.vue -->
<template>
    <div>
      <h2>View/Update ToDo</h2>
      <form @submit.prevent="updateToDo">
        <label>Title:</label>
        <input type="text" v-model="title" required>
        <label>Description:</label>
        <textarea v-model="description" required></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ViewUpdateToDo',
    props: ['id'],
    data() {
      return {
        title: '',
        description: ''
      }
    },
    methods: {
      updateToDo() {
        // Implement update ToDo logic here
        // Upon successful update, redirect to todos
        this.$router.push('/todos');
      }
    },
    mounted() {
      // Fetch ToDo item with this.id from the server and populate title and description
    }
  }
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  