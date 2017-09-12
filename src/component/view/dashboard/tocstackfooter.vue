<template>
  
    <!-- footer -->
    <div style='background-color : #142433 ;color : #FFFFFF '>
      <div>

        <div style='padding : 10px 10px 10px 10px'>

          <md-layout md-gutter>
            <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="25" md-align="center">
              <md-layout md-column>
                <a style="color : #FFFFFF !important" href="" target="_blank">
                  <h4>About Creator</h4>
                </a>
                <a style="color : #FFFFFF !important" @click="pushToBlog">
                  <h4>Blog</h4>
                </a>
                <h4>Open source</h4>
              </md-layout>
            </md-layout>
            <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50">
              <md-layout md-column md-align="center">
                <md-layout md-row style=" padding-top : 20px ;justify-content: center;">
                  <div style="padding-left:20px">
                    <img style="color : #FFFFFF ;width :50px ; height : 50px;  " src="../../../assets/twitter.png">
                  </div>
                  <div style="padding-left:20px">
                    <img style="color : #FFFFFF ;width :50px ; height : 50px; " src="../../../assets/instagram.png">
                  </div>
                  <div style="padding-left:20px">
                    <img style="color : #FFFFFF ;width :50px ; height : 50px; " src="../../../assets/github.png">
                  </div>

                </md-layout>

              </md-layout>
            </md-layout>
            <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="25" md-align="center">
              <md-layout md-column>
                <h4>Technologies used</h4>
                <h4>Get in touch</h4>
                <h4>Demo</h4>
              </md-layout>
            </md-layout>
          </md-layout>

        </div>
      </div>

  </div>
</template>


<script>
export default {
  beforeMount() {
    this.$store.dispatch('setCurrentRoute', '/dashboard');
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
     pushToBlog () {
       this.$router.push({
				path: '/blog', name: 'blog',
			})
     } ,
  }
}
</script>

<style>
#board {
  width: auto;
}

#example-3 {
  color: #fff;
  text-align: center;
}

#example-3 .flex {
  margin-bottom: 16px;
}
</style>