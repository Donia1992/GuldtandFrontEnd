<template>
  <div id="app">
    <main>
      <preLogin id="preLogin" style="visibility: hidden">
        <header>
          <titletext>
            GULDTAND
          </titletext>
          <logout>
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout &nbsp;</router-link>
          </logout>
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
        <footerleft>&nbsp;&nbsp;&nbsp; Copyright GangsterGrillz-ENFORCEMENT</footerleft>
        <footercenter>GULDTAND DENTAL</footercenter>
        <footerright>Created by MyRepo  &nbsp;&nbsp;&nbsp;  </footerright>
      </footer>
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
        //Start.  So login is no longer needed
        document.getElementById("preLogin").style.visibility = "visible";
        this.$router.replace({ name: "EditUser" });
        //End

        //this.$router.replace({ name: "Login" });
      }
    },
    methods: {
      setAuthenticated(status) {
        this.authenticated = status;
      },
      logout() {
        this.authenticated = false;
        document.getElementById("preLogin").style.visibility = "hidden";
      },
      switchPanel(nr) {
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  titletext {
    font-size: 44px;
    background: url(https://images.pexels.com/photos/988874/pexels-photo-988874.jpeg?auto=compress&cs=tinysrgb&h=350) -80px -80px;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: bold;
    font-family: 'Copperplate';
    width: 600px;
    margin: 50px auto;
    text-align: center;
    text-decoration: double;
  }

  logout {
    float: right;
    font-size: 24px;
    margin: 21px auto;
    color: black;
  }

  body {
    margin: 0;
    background-image: url(./assets/mainbg.jpg);
    background-size: 100%;
  }

  main {
    text-align: center;
  }

  header {
    height: 70px;
    background-color: #568aa3;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background: radial-gradient(circle, rgba(131,197,228,1) 17%, rgba(86,138,163,1) 45%, rgba(57,98,117,1) 86%);
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
    -webkit-filter: drop-shadow(12px 12px 12px #222);
    filter: drop-shadow(5px 5px 5px #222);
  }

  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #568aa3;
    opacity: 0.8;
    text-align: center;
    height: 30px;
    box-shadow: 12px 12px 16px 16px rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    line-height: 30px;
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
</style>
