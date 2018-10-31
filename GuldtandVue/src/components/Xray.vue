<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell" style="float: left">
      <label>
        File
        <input type="file" id="file" ref="file" /> <!--v-on_change="handleFileUpload()"-->
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
    <br />
    <div>
      <br />
      <div class="nameList">
        <ul class="listLook" id="nameSelectItems">
          <li class="nameListItems" v-for="employee in patients" v-on:click="setSelectedName(employee.name)"> {{ employee.name }}</li>
        </ul>
      </div>
      <div class="imageList">
        <ul class="listLook" id="nameSelectItems">
          <li class="nameListItems" v-for="image in xrayImages" v-on:click="setImageUrl(image.Url)"> {{ image.imageName }}</li>
        </ul> 
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <b>Selected Name:  </b>{{this.selectedName}}
        <br />
        <div class="paintContainer">
          <img :src='imageUrl'>
          <canvas class="paintCanvas" width="255" height="255" id="paintCanvas" v-on:click="canvasClicked"></canvas>
        </div>
        <button v-on:click="clearCanvas()">Clear</button>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios)
  export default {
    name: 'Xray',
    methods: {
      setSelectedName(inName) {
        if (this.selectedName != null) {
          if (this.selectedName != inName) {
            this.imageUrl = null;
            this.xrayImages = null;
          }
        }
        //alert(this.samanthaUrls[0].imageName);
        this.selectedName = inName;
        if (inName == "Russell Collins") {
          this.xrayImages = this.russelUrls;
        }

        else if (inName == "Samantha Jensen") {
          this.xrayImages = this.samanthaUrls;
        }
        
        else if (inName == "Ashley Scott") {
          this.xrayImages = this.ashleyUrls;
        }
      },

      setImageUrl(inUrl) {
        this.imageUrl = inUrl;
      },

      handleFileUpload() {
        //this.file = this.$refs.file.files[0];
        alert()
      },

      submitFile() {
        if (this.$refs.file.files[0] == null) {
          alert("You need to select a file!");
          return;
        }
        else if (this.selectedName == null) {
          alert("You need to select a name!");
          return;
        }

        this.file = this.$refs.file.files[0];
        //alert(this.file);
        let formData = new FormData();
        //alert(formData);
        formData.append('file', this.file);

        //axios.post("url", {
        //  data: this.file,
        //  headers: {
        //    "Content-Type" : "multipart/file"
        //  }
        //})

        axios.post('https://localhost:44398/api/blob', formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function () {
          console.log('SUCCESS!!');
        })
          .catch(function () {
            console.log('FAILURE!!');
          });
      },

      canvasClicked(event) {
        var paintCanvas = document.getElementById("paintCanvas");
        var ctx = paintCanvas.getContext("2d");

        paintCanvas.style.width = paintCanvas.width + 'px';
        paintCanvas.style.height = paintCanvas.height + 'px';

        ctx.strokeStyle = "#f8920f";
        //ctx.lineJoin = "round";
        ctx.lineWidth = 5;

        var rect = paintCanvas.getBoundingClientRect();

        //var x = event.x - rect.left;
        //var y = event.y - rect.top;

        var x = event.offsetX;
        var y = event.offsetY;

        if (this.first == true) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          this.first = false;
        }
        else {
          ctx.lineTo(x, y);
          ctx.stroke();
        }


        //alert("x " + x.toString() + ", y " + y.toString());
        
      },

      clearCanvas() {
        var paintCanvas = document.getElementById("paintCanvas");
        paintCanvas.getContext("2d").clearRect(0, 0, paintCanvas.width, paintCanvas.height);
        this.first = true;
      }
    },

    data: function () {
      return {
        selectedName: null,
        file: '',
        info: null,
        patients: {},
        xrayImages: {},
        imageUrl: null,
        first: true,

        russelUrls: [
          { imageName: 'pet', Url: 'https://www.vetmidland.com/wp-content/uploads/2016/02/Lizard-HD-258x300.png' },
          { imageName: 'goldtooth', Url: 'https://lassensmiles.files.wordpress.com/2012/10/lassen-x-ray-1.jpg?w=500&h=359' },
        ],

        samanthaUrls: [
          { imageName: 'side-view', Url: 'https://www.sweettoothkids.com/PediatricDentalBlog/wp-content/uploads/2017/10/RIGHT-300x200.jpg' },
          { imageName: 'down-up', Url: 'https://www.sweettoothkids.com/PediatricDentalBlog/wp-content/uploads/2017/10/MAX-300x216.jpg' },
        ],
        ashleyUrls: [
          { imageName: 'dog', Url: 'https://www.vetmidland.com/wp-content/uploads/2016/02/Dog-Skull-Lateral-HD-270x300.png' },
          { imageName: 'dogZoomed', Url: 'https://www.petdox.com/wp-content/uploads/2017/10/ll1-460x295.jpg' },
        ]
      }
    },

    mounted() {
      axios
        .get('https://localhost:44398/api/employee')
        .then(response => (this.info = response))
        .then(response => (this.patients = response.data))
    }
  }
</script>

<style>
  .nameList{
    border: solid;
    margin: 1px 1px 1px 1px;
    background-color: black;
    float: left;
    width: 300px;
  }

  .nameListItems {
    margin: 1px 1px 1px 1px;
    background-color: lightgrey;
  }

  .nameListItems:hover {
    background-color: darkgrey;
  }

  .imageList {
    border: solid;
    margin: 1px 1px 1px 1px;
    background-color: black;
    float: right;
    width: 300px;
  }

  .paintContainer {
    /*display: inline-block;*/
    width: 255px;
    height: 255px;
    margin: 0 auto;
    /*background: black;*/
    position: relative;
    /*max-width: 255px;
    max-height: 255px;
    min-height: 255px;
    min-width: 255px;*/
  }

  img {
    max-width: 255px;
    max-height: 255px;
    min-height: 255px;
    min-width: 255px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .paintCanvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    /*max-width: 255px;
    max-height: 255px;
    min-height: 255px;
    min-width: 255px;*/
    /*width: 255px;
    height: 255px;*/
  }

  .listLook {
    margin: 0;
    padding: 0;
    border: solid;
    list-style-type: none;
  }
</style>
