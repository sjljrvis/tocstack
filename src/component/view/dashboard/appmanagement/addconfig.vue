<template>
  <div>

    <h4>Add configuration File</h4>
    <md-input-container>
      <label>File</label>
      <md-file v-model="single"></md-file><md-button class="md-raised md-primary">Upload</md-button>
    </md-input-container>
    <h4>Sample Configuration file</h4>
    <h4>Config.js
    </h4>
    <div style="background : #00162d">
      
                     
             <code>exports.port = process.env.PORT || 5555  ;</code><br>

              <code>exports.mongodb = { </code><br>
                     <code>uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://sejal:sejal@ds119772.mlab.com:19772/xltomon' </code><br>
            <code> }; </code><br>

             <code>exports.jwtSecret = 'k3yb0ardc4t'; </code><br>
             <code>exports.companyName = 'Sanath'; </code><br>
             <code>exports.cryptoKey = 'k3yb0ardc4t'; </code><br>
             <code>exports.loginAttempts = { </code><br>
                 <code>forIp: 50, </code><br>
                 <code>forIpAndUser: 7, </code><br>
                 <code>logExpiration: '20m' </code><br>
            <code> }; </code><br>
          
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({

  }),
  beforeMount() {

  },
  mounted() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  components: {
  },
  computed: {
  },
  methods: {

  }
}
</script>
<style>

</style>