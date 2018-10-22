<template>
  <div>
    <componenttext>
      Join the club...
      <br />
      <img src="../assets/goldsmile.jpg" alt="Taste like gold" />
      <br />
      taste like gold!
    </componenttext>
  </div>
</template>

<script>
  export default {
    name: 'Welcome'
  }
</script>

<style>
  img {
    border-radius: 1%;
    height: 90%;
    width: 48%;
    box-shadow: 12px 12px 16px 1px rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }

  componenttext {
    font-size: 32px;
  }
</style>
