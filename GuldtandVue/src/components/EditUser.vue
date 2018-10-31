<template>
  <div class="centered">
    <div class="container">
      <div class="titletext">Edit User</div>
      <br />
      <form @submit.prevent="editedUser()">
        <div class="form-group">
          <div class="col-md-12">
            <label>Firstname</label>
            <input type="text" class="form-control" placeholder="Firstname" v-model="user.firstName" name="firstName" required />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <label>Lastname</label>
            <input type="text" class="form-control" placeholder="Lastname" v-model="user.lastName" name="lastname" required />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <label>Phone</label>
            <input type="text" class="form-control" placeholder="Phonenumber" v-model="user.phoneNumber" name="phoneNumber" required />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <label>Email</label>
            <input type="text" class="form-control" placeholder="Email" v-model="user.email" name="email" required />
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <label>Password</label>
            <input type="text" class="form-control" placeholder="Password" v-model="user.password" name="password" required />
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-info">Save changes</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'edituser',
    data() {
      return {
        user: {
          firstname: '',
          lastname: '',
          phonenumber: '',
          role: '',
          email: '',
          password: ''
        },
      }
    },
    mounted() {
      axios.get('https://localhost:44398/api/employee/' + this.$route.params.id)
        .then((response) => {
          console.log(response.data);
          this.user = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      editedUser() {
        if (this.user.email != '' && this.user.firstname != '' && this.user.lastname != '' && this.user.phonenumber != '' && this.user.password != '') {
          let editedUser = {
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email,
            phoneNumber: this.user.phoneNumber,
            password: this.user.password
          }
          console.log("Edited User: ", editedUser);

          axios.put('https://localhost:44398/api/employee/' + this.$route.params.id, editedUser)
            .then((response) => {
              console.log("Response: ", response);
              alert("User successfully edited!")
              this.$router.replace({ name: "User" });
            })
            .catch((error) => {
              console.log("Something went wrong...:", error);
            });
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
