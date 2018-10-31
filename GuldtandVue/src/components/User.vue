<template>
  <div class="centered">
    <div class="container">
      <div class="titletext">Employees</div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>
              <button class="create-button"><span><router-link to="/createuser">+ Create user</router-link></span></button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users">
            <td> {{user.firstName}}&nbsp;{{user.lastName}}</td>
            <td>{{user.phoneNumber}}</td>
            <td>{{user.email}}</td>
            <td>
              <router-link :to="`/edituser/${user.id}`">Edit</router-link> |
              <router-link :to="`/detailsuser/${user.id}`">Details</router-link> |
              <router-link :to="`/deleteuser/${user.id}`">Delete</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'user',
    data() {
      return {
        users: [],
      }
    },
    mounted() {
      axios.get('https://localhost:44398/api/employee')
        .then((response) => {
          console.log(response.data);
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
</script>

<style scoped>
  .titletext {
    width: 300px !important;
    font-size: 40px !important;
  }

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
</style>
