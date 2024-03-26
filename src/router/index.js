// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import ToDoList from '../views/ToDoList.vue'
import CreateToDo from '../views/CreateToDo.vue'
import ViewUpdateToDo from '../views/ViewUpdateToDo.vue'

const routes = [
  { path: '/', component: Welcome },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/todos', component: ToDoList },
  { path: '/create-todo', component: CreateToDo },
  { path: '/view-update-todo/:id', component: ViewUpdateToDo, props: true }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
