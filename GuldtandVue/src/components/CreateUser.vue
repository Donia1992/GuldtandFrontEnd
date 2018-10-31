<template>
  <div class="centered">
    <div class="container">
      <div class="titletext">Create User</div>
      <br />
      <form @submit.prevent="createUser()">
        <div class="form-group">
          <div class="col-md-12">
            <input type="number" class="form-control" placeholder="Id" v-model="input.id" name="id" required />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <input type="text" class="form-control" placeholder="Email" v-model="input.email" name="email" required />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <div class="radio-btn"><input type="radio" name="admin" id="admin" value=1 v-model="input.role" /><label for="admin" style="padding-left: 30px"> Admin</label></div>
            <div class="radio-btn"><input type="radio" name="dentist" id="dentist" value=2 v-model="input.role" /><label for="dentist" style="padding-left: 30px"> Dentist</label></div>
            <div class="radio-btn"><input type="radio" name="receptionist" id="receptionist" value=3 v-model="input.role" /><label for="receptionist" style="padding-left: 30px"> Receptionist</label></div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <input type="text" class="form-control" placeholder="Firstname" v-model="input.firstname" name="firstname" required />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <input type="text" class="form-control" placeholder="Lastname" v-model="input.lastname" name="lastname" required />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <input type="text" class="form-control" placeholder="Phonenumber" v-model="input.phonenumber" name="phonenumber" required />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <input type="text" class="form-control" placeholder="Password" v-model="input.password" name="password" required />
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-info">Create User</button>
        </div>
        <div class="form-group">
          <label id="errorMessage" style="visibility: hidden; color:darkred; font-style:italic">{{errorMessage}}</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CreateUser',
    data() {
      return {
        errorMessage: 'All fields must have a valid value',
        input: {
          id: '',
          email: '',
          role: '',
          firstname: '',
          lastname: '',
          phonenumber: '',
          password: ''
        }
      }
    },
    methods: {
      createUser() {
        if (this.input.email != '' && this.input.role != '' && this.input.firstname != '' && this.input.lastname != '' && this.input.phonenumber != '' && this.input.password != '') {
          let newUser = {
            id: this.input.id,
            roleId: this.input.role,
            firstName: this.input.firstname,
            lastName: this.input.lastname,
            email: this.input.email,
            phoneNumber: this.input.phonenumber,
            password: this.input.password
          }
          console.log("New User: ", newUser);

          axios.post('https://localhost:44398/api/employee', newUser)
            .then((response) => {
              console.log("Response: ", response);
              alert("User successfully created!")
              this.$router.replace({ name: "User" });
            })
            .catch((error) => {
              console.log("Something went wrong...:", error);
            });
        }
        else {
          var x = document.getElementById("errorMessage");
          x.style.visibility = "visible";
        }
      }
    }
  }

</script>

<style scoped>
  .container {
    position: center;
    text-align: center;
    padding-top: 80px;
    color: white;
    font-weight: bold;
  }

  .centered {
    padding-top: 200px;
    position: absolute;
    top: 40%;
    left: 49%;
    transform: translate(-50%, -50%);
  }

  .radio-btn {
    text-align: left;
  }

  .titletext {
    width: 300px !important;
    font-size: 40px !important;
  }
</style>
