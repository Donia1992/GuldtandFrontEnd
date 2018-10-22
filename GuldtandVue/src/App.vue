<template>
  <div id="app">
    <header>
    </header>
    <main>
      <router-link v-if="authenticated" to="/viewtwo" v-on:click.native="logout()" replace>Logout</router-link>
      <router-view @authenticated="setAuthenticated" />
      <!--<router-view></router-view>-->
    </main>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
      return {
        authenticated: false,
        mockAccount: {
          username: 'admin',
          password: 'admin'
        }
      }
    },
    mounted() {
      if (!this.authenticated) {
        this.$router.replace({ name: "Login" });
      }
    },
    methods: {
      setAuthenticated(status) {
        this.authenticated = status;
      },
      logout() {
        this.authenticated = false;
      }
    }
}
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

    header span {
      display: block;
      position: relative;
      font-size: 20px;
      line-height: 1;
      letter-spacing: .02em;
      font-weight: 400;
      box-sizing: border-box;
      padding-top: 16px;
    }

  .span-img {
    height: 30px;
    width: 50px;
  }

  .container {
    position: center;
    text-align: center;
    color: white;
  }

  .centered {
    padding-top: 200px;
    position: absolute;
    top: 40%;
    left: 49%;
    transform: translate(-50%, -50%);
  }
</style>
