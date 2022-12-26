<template>
    <div class="center_data">
      <div class="col-3 mx-auto my-5 border shadow p-3 ">
  
        <h2 class="card-title">Login</h2>
        <form @submit.prevent="handleLogin" method="post">
  
          <div class="mt-3">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" class="form-control" placeholder="admin@site.com">
          </div>
          <div class="mt-3">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="form.password" class="form-control" placeholder="***********">
          </div>
          <div class="mt-3">
            <button class="btn btn-primary" type="submit" :disabled="!form.email || !form.password">Login</button>
          </div>
          <div class="text-center">
            <small>
              <nuxt-link to="/">Back to site</nuxt-link>
            </small>
          </div>
        </form>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    layout: 'auth',
    data() {
      return {
        form: {
          email: 'abdulahaislam210917@gmail.com',
          password: '01918786189'
        }
      }
    },
    mounted() {
    },
    methods: {
      async handleLogin() {
        this.$auth.loginWith('laravelSanctum', {
          data: this.form
        })
  
      }
    }
  }
  </script>
  
  <style scoped>
  .center_data {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>