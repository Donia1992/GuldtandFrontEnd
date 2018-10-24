<template>
  <div class="centered">
    <div class="container">
      <form @submit.prevent="doLogin()">
        <img src="../assets/images/logintooth.png" class="login-img" alt="tooth">
        <div class="centered">
          <div class="form-group">
            <label id="errorMessage" style="color: #6d6c6c; color: #ff0000; visibility:hidden">{{msg}}</label>
            <input type="text" class="form-control" style="text-align:center" placeholder="Username" v-model="input.username" v-on:click="removeErrorMessage" name="username" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control" style="text-align:center" placeholder="Password" v-model="input.password" v-on:click="removeErrorMessage" name="password" id="password" />
            <div style="color: #6d6c6c; font-size: 15px; padding-top:10px"> <input type="checkbox" v-on:click="decrypt" /> Show Password</div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-info col-md-offset-2 col-md-12">Log in</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        msg: 'The username and / or password is incorrect',
        input: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      doLogin() {
        //Start.  So login is no longer needed
        var x = document.getElementById("preLogin");
        x.style.visibility = "visible";
        this.$emit("authenticated", true);
        this.$router.replace({ name: "MainMenu" });
        //End

        if (this.input.username != '' && this.input.password != '') {
          if (this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
            this.$emit("authenticated", true);
            var x = document.getElementById("preLogin");
            x.style.visibility = "visible";

            this.$router.replace({ name: "MainMenu" }); //Change to MainMenu

          } else {
            var x = document.getElementById("errorMessage");
            x.style.visibility = "visible";
            this.input.username = '',
              this.input.password = ''
          }
        } else {
          var x = document.getElementById("errorMessage");
          x.style.visibility = "visible";
          console.log("A username and password must be present");
          this.input.username = '',
            this.input.password = ''
        }
      },
      decrypt: function () {
        var x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      },
      removeErrorMessage: function () {
        var x = document.getElementById("errorMessage");
        x.style.visibility = "hidden";
      }
    }
  }
</script>

<style scoped>
  .login-img {
    height: 750px;
    width: 750px;
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

  body.mybody {
    margin: 0;
    background-color: white;
    background-size: 100%;
  }
</style>
