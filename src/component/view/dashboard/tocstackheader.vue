<template>
	
		<!-- footer -->
		<div>
			<div style="padding-left: 37px;padding-right:37px">
			<md-layout md-gutter>
				<md-layout md-align="start" md-row>
					<div style="padding-left:20px;margin-top: 25px;">
						<img style="color : #FFFFFF ;width :40px ; height : 40px; " src="../../../assets/rocket.png">
					</div>
					<h3 style="color :#000000 !important;font-size:40px!important;font-weight: 400 !important;">
						tocstack
					</h3>
				</md-layout>

				<md-layout md-align="end">
          	<md-button style="height:10px;!important;margin-top:30px"class="md-raised md-warn" @click="pushToPage('/login')">Login</md-button>
				</md-layout>
        
			</md-layout>
		</div>
	  </div>
</template>


<script>
export default {
  beforeMount() {
  },

  mounted() {},
  beforeDestroy() {},
  destroyed() {},
  components: {},
  computed: {},
  methods: {
    pushToBlog() {
      this.$router.push({
        path: "/blog",
        name: "blog"
      });
    },
    pushToPage(route) {
      this.$router.push({
        path: `/${route}`,
        name: route
      });
    },
    pushToOpenSource() {
      this.$router.push({
        path: "/opensource",
        name: "opensource"
      });
    }
  }
};
</script>

<style>
#board {
  width: auto;
}

#example-3 {
  color: #fff;
  text-align: center;
}
</style>