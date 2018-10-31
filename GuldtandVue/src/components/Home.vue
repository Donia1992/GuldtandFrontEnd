<template>
      <div class="holder">
   <p>To do list</p>
      <form @submit.prevent="addTask">
      <input type="text" placeholder="Enter todays tasks.. " v-model="Todo" v-validate="'min:5'" name="Todo">
      
      <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
         <p class="alert" v-if="errors.has('Todo')"> {{errors.first('Todo')}}</p>
      </transition>
      </form>

       <ul>
          <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
            <li v-for="(data, index) in Home" :key='index'> {{ data.Todo }}
              <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
            </li>
         </transition-group>
       </ul>    
    </div>
 
</template>

<script>
export default {
  name: 'Home',
 data(){
    return{
      Todo:'',
  Home:[ ]
  }
},
methods:{
  addTask() {
    this.$validator.validateAll().then((result) => {
      if (result){
         this.Home.push({Todo: this.Todo})
         this.Todo = '';
         }
       else{
        console.log('Not valid');
         }
      })
    },
    remove(id){
      this.Home.splice(id,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 


.holder {
    background: auto;
    margin-right: 50%;
    margin-top: 50px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
   box-sizing: content-box;
  }     
  
  ul li {
    padding: 20px;
    font-size: 15px;
    background-color:white;
    border-left: 5px solid #35495E;
    margin-bottom: 2px;
    color: #35495E;
    box-sizing: content-box;
    
  }
  p {
    text-align:center;
    padding: 30px 0;
    color: black;

  }
  .container {
    box-shadow: 0px 0px 40px lightgray;
    
  }
  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 15px;
    background-color:#35495E;
    color: whitesmoke;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
i {
  float:right;
  cursor:pointer;
}
</style>



