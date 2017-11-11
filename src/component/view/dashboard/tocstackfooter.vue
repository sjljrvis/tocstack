<template>
	
		<!-- footer -->
		<div style ="background-color : rgba(19, 41, 78, 1)">
			<div style=';padding: 2% 0;background-color : rgba(19, 41, 78, 1);color : #efefef; text-align: center;' >
				<div style='padding : 10px 10px 10px 10px'>
					<md-layout md-gutter>
						<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="10"  md-flex-large="10" >
							<md-layout md-column >
								<a style="text-decoration:none;cursor: pointer;" onmouseover=""><h5 style="color : #FFFFFF !important ;margin-top : 10px ;margin-bottom : 10px">About us</h5></a>
								<a style="text-decoration:none;cursor: pointer;" onmouseover=""><h5 style="color : #FFFFFF !important ;margin-top : 10px ;margin-bottom : 10px"  @click="pushToPage('team')">Team</h5></a>
								<a style="text-decoration:none;cursor: pointer;" onmouseover=""><h5 style="color : #FFFFFF !important ;margin-top : 10px ;margin-bottom : 10px">Github</h5></a>
							  <a style="text-decoration:none;cursor: pointer;" onmouseover=""><h5 style="color : #FFFFFF !important ;margin-top : 10px ;margin-bottom : 10px">Blogs</h5></a>
							</md-layout>
						</md-layout>
						<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="10"  md-flex-large="10">
							<md-layout md-column >
								<a  href="/" v-scroll-to="'#demo-div'"style="text-decoration:none;cursor: pointer;" onmouseover=""><h5 style="color : #FFFFFF !important ;margin-top : 10px ;margin-bottom : 10px">Demo</h5></a>
								<a style="text-decoration:none;cursor: pointer;" onmouseover=""><h5 style="color : #FFFFFF !important ;margin-top : 10px ;margin-bottom : 10px"  @click="pushToPage('opensource')">Opensource</h5></a>
								<a style="text-decoration:none;cursor: pointer;" onmouseover=""><h5 style="color : #FFFFFF !important ;margin-top : 10px ;margin-bottom : 10px" @click="pushToPage('contribute')">Contribute</h5></a>
								<a style="text-decoration:none;cursor: pointer;" onmouseover=""><h5 style="color : #FFFFFF !important ;margin-top : 10px ;margin-bottom : 10px">Help</h5></a>
							</md-layout>
						</md-layout>
						<md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80"  md-flex-large="80">
							<md-layout md-column md-align="center">
								<md-layout md-row style=" padding-top : 20px ;justify-content: flex-end; margin-right:100px">
									<div style="padding-left:20px">
										<img style="color : #FFFFFF ;width :50px ; height : 50px;  " src="../../../assets/twitter.png">
									</div>
									<div style="padding-left:20px">
										<img style="color : #FFFFFF ;width :50px ; height : 50px; " src="../../../assets/slack.png">
									</div>
									<div style="padding-left:20px">
										<img style="color : #FFFFFF ;width :50px ; height : 50px; " src="../../../assets/git1.png">
									</div>
								</md-layout>
							</md-layout>
						</md-layout>
					</md-layout>
				</div>
		</div>
		<div style = "background-color : rgba(19, 41, 78, 1);margin : 10px 0px 10px 10px">
			<h6 style="color : #FFFFFF !important ;margin-top : 10px ;margin-bottom : 0px ;text-align:center"> &copy; 2017 &nbsp;&nbsp;tocstack.com &nbsp;All rights reserved</h6>
		</div>
	</div>
</template>


<script>
export default {
  beforeMount() {
    this.$store.dispatch("setCurrentRoute", "/dashboard");
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