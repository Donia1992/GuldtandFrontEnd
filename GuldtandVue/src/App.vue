<template>
  <div id="app">   
    <main>
      <preLogin id="preLogin" style="visibility: hidden">
        <header>
          <titletext>
            GULDTAND
              <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
          </titletext>
        </header>
        <mainButtons>
          <button class="button" id="homeButton" v-on:click="switchPanel(1)">Home</button>
          <button class="button" id="patientButton" v-on:click="switchPanel(2)">Patient</button>
          <button class="button" id="xrayButton" v-on:click="switchPanel(3)">X-Ray</button>
          <button class="button" id="welcomeButton" v-on:click="switchPanel(4)">Welcome</button>
        </mainButtons>
        <br />
      </preLogin>
      <router-view @authenticated="setAuthenticated"></router-view>
      <footer>
        <footerleft>&nbsp;&nbsp;&nbsp; Copyright Glenn-ENFORCEMENT</footerleft>
        <footercenter>GULDTAND DENTAL</footercenter>
        <footerright>Created by GlimmaDesign  &nbsp;&nbsp;&nbsp;  </footerright>
      </footer>
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
      },
      switchPanel(nr) {
        alert(nr);
        if (nr == 1) {
          this.$router.replace({ name: "Home" });

          var x = document.getElementById("homeButton");
          x.className = "buttonGold";

          var x = document.getElementById("patientButton");
          x.className = "button";

          var x = document.getElementById("xrayButton");
          x.className = "button";

          var x = document.getElementById("welcomeButton");
          x.className = "button";
        }
        else if (nr == 2) {
          this.$router.replace({ name: "Patient" });

          var x = document.getElementById("homeButton");
          x.className = "button";

          var x = document.getElementById("patientButton");
          x.className = "buttonGold";

          var x = document.getElementById("xrayButton");
          x.className = "button";

          var x = document.getElementById("welcomeButton");
          x.className = "button";
        }
        else if (nr == 3) {
          this.$router.replace({ name: "Xray" });

          var x = document.getElementById("homeButton");
          x.className = "button";

          var x = document.getElementById("patientButton");
          x.className = "button";

          var x = document.getElementById("xrayButton");
          x.className = "buttonGold";

          var x = document.getElementById("welcomeButton");
          x.className = "button";
        }
        else if (nr == 4) {
          this.$router.replace({ name: "Welcome" });

          var x = document.getElementById("homeButton");
          x.className = "button";

          var x = document.getElementById("patientButton");
          x.className = "button";

          var x = document.getElementById("xrayButton");
          x.className = "button";

          var x = document.getElementById("welcomeButton");
          x.className = "buttonGold";
        }
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

  footerleft {
    float: left;
    color: black;
  }

  footercenter {
    text-align: center;
    color: black;
  }

  footerright {
    float: right;
    color: black;
  }

  titletext {
    font-size: 44px;
    background: url(https://images.pexels.com/photos/988874/pexels-photo-988874.jpeg?auto=compress&cs=tinysrgb&h=350) -80px -80px;
    color: red;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: bold;
    font-family: 'Copperplate';
    width: 600px;
    margin: 50px auto;
    text-align: center;
    text-decoration: double;
  }

  body {
    margin: 0;
    background-image: url(./assets/mainbg.jpg);
    background-size: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    text-align: center;
    margin-top: 0px;
  }

  header {
    margin: 0;
    height: 70px;
    padding: 0px 0px 0px 0px;
    background-color: #568aa3;
    color: #ffffff;
    /*background: linear-gradient(to bottom, rgba(208,228,247,1) 0%,rgba(115,177,231,1) 24%,rgba(10,119,213,1) 50%,rgba(83,159,225,1) 79%,rgba(135,188,234,1) 100%);*/
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }

  body {
    background-color: #568aa3;
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

  mainButtons {
  }

  .button {
    background-color: transparent;
    background-image: url(./assets/whitetooth.png);
    background-size: 100% 100%;
    height: 100px;
    width: 180px;
    border: 0px;
  }

  .buttonGold {
    background-color: transparent;
    background-image: url(./assets/goldtooth.png);
    background-size: 100% 100%;
    height: 100px;
    width: 180px;
    border: 0px;
  }

  .button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }

  footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #568aa3;
    opacity: 0.8;
    text-align: center;
    height: 30px;
    box-shadow: 12px 12px 16px 16px rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    line-height: 30px;
  }
</style>
