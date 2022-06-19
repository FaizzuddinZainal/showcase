<script setup>
import { onMounted, reactive } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

function login() {
  alert()
}

function active(e) {
  e.target.classList.add('active')
}

const menu = reactive([
  { name: 'Profile', url: '/' },
  { name: 'Projects', url: '/project' },
])
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-primary">
      <div class="container">
        <a class="navbar-brand text-white font-monospace" href="#">FAIZZUDDIN</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse row" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
            <li class="nav item" @click="active" v-for="item of menu">
              <RouterLink class="nav-link text-white" :to="item.url">{{item.name}}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

.active{
  color: orange !important
}
</style>
