<template>
  <div class="centered">
    <div class="container">
      <div class="titletext">Details</div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Role Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-text="user.id"></td>
            <td v-text="user.roleId"></td>
            <td> {{user.firstName}}&nbsp;{{user.lastName}}</td>
            <td v-text="user.phoneNumber"></td>
            <td  v-text="user.email"></td>
            <td  v-text="user.password"></td>
          </tr>
        </tbody>
      </table>
      <button class="create-button" style="float:right"><span><router-link to="/user">Back to list</router-link></span></button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'detailsuser',
    data() {
      return {
        user: {},
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
    }
  }
</script>

<style scoped>
  .create-button {
    border-radius: 4px;
    background-color: transparent;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
  }

    .create-button span {
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;
    }

      .create-button span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
      }

    .create-button:hover span {
      padding-right: 25px;
    }

      .create-button:hover span:after {
        opacity: 1;
        right: 0;
      }

  .titletext {
    width: 300px !important;
    font-size: 40px !important;
  }
</style>
