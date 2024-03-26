<template>
  <div>
    <h2>ToDo List</h2>
    <!-- Display ToDo items -->
    <div v-for="todo in todos" :key="todo.id">
      <p>{{ todo.title }}</p>
      <router-link :to="{ name: 'ViewUpdateToDo', params: { id: todo.id }}">View/Update</router-link>
      <button @click="deleteTodo(todo.id)">Delete</button>
    </div>
    <router-link to="/create-todo">Create ToDo</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ToDoList',
  data() {
    return {
      todos: []
    }
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await axios.get('http://3.232.244.22/api/item');
        this.todos = response.data;
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    },
    async deleteTodo(id) {
      try {
        await axios.delete(`http://3.232.244.22/api/item/${id}`);
        this.todos = this.todos.filter(todo => todo.id !== id);
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    }
  },
  created() {
    this.fetchTodos();
  }
}
</script>

<style>
</style>
