<script setup>
import { onMounted, reactive, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

function login() {
  localStorage.setItem('vuejs_showcase_isadminlogin', 1)
  location.reload()
}
function logout() {
  localStorage.removeItem('vuejs_showcase_isadminlogin')
  location.reload()
}

function active(e) {
  e.target.classList.add('active')
}

const menu = reactive([
  { name: 'Profile', url: '/' },
  { name: 'Projects', url: '/project' },
])

var islogin = ref(0)
onMounted(() => {
  if (localStorage.getItem('vuejs_showcase_isadminlogin')) {
    islogin.value = !islogin.value
  }
})
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-primary">
      <div class="container">
        <i class="fa fa-user-circle-o p-1 text-white"></i>
        <a class="navbar-brand text-white font-monospace" href="#">MYPORTFOLIO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse row" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
            <li class="nav item" @click="active" v-for="item of menu">
              <RouterLink class="nav-link text-white" :to="item.url">{{ item.name }}</RouterLink>
            </li>
          </ul>
        </div>
        <button v-if="islogin" type="button" class="btn btn-primary" @click="logout">Logout</button>
        <button v-else type="button" class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#loginModal">Login</button>
      </div>
    </nav>
  </header>

  <div class="modal fade" id="loginModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLabel">Login As Admin</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="text-muted">By signing as admin, you will be able to edit the homepage.</p>
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">User:</label>
              <input type="text" class="form-control" value="admin">
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Password:</label>
              <input type="password" class="form-control" value="admin">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Notification</strong>
      <small></small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      You successfully login as admin!
    </div>
  </div>

  <RouterView />
  <footer>
    <div class="container-fluid text-bg-dark text-center">
      Copyright &copy; 2022 All Rights Reserved
    </div>
  </footer>
</template>

<style>
@import '@/assets/base.css';

.active {
  color: orange !important
}
</style>
