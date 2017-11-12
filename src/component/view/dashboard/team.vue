<template>
	<div>
		<Tocstackheader></Tocstackheader>
		<hr style="width:60%">
		<div style='background-color : #ffffff'>
			<div style="padding: 0% 0%; margin : 0% 0%">
				<md-layout md-gutter>
					<md-layout md-column>
							<div style="text-align:center">
								<img style="width:250px;height:250px;border-radius:50%"src="../../../assets/sejal2.jpg" alt="Sejal">
							</div>
							<h1 style="text-align:center">Sejal Chougule</h1>
							<p style="text-align:center;margin-top: -30px;margin-bottom:30px;color:#ff5722">Creator/Founder</p>
							<div style="display:flex;flex-direction:row;justify-content:center">
								<img style="width:50px;height:50px;border-radius:50%"src="../../../assets/github.png" alt="Sejal">
								<img style="width:50px;height:50px;border-radius:50%"src="../../../assets/linkedin.png" alt="Sejal">
								<img style="width:50px;height:50px;border-radius:50%"src="../../../assets/facebook.png" alt="Sejal">
								
							</div>
							<div style="text-align:center">
								<p style="width:375px;margin-left: auto; margin-right: auto;padding:1px 1px "> 
									I started working on tocstack as a part of weekend hack-project, 
									Later I was motivated to pivot tocstack into a PaaS to help other fellow developers to
									deploy apps/web-services rapidly using <span style="color:#ff5722">git</span>.
									
									<br><br>If you have found my software/code being of any use to you, you can always contribute/help to improve fuctionality of platform.
									You can always look up my portfolio at <a style="color:#4286f4"href="http://sejalchougule.me">sejalchougule.me</a>

									<br>Wish to discuss something??? Give me a shout at <a href="mailto:sjlchougule@gmail.com"style="color:#4286f4">sjlchougule@gmail</a>

								</p>	
							</div>	
					</md-layout>						
				</md-layout>
			</div>
		</div>
		<!-- footer -->
		
	<Tocstackfooter></Tocstackfooter>
	</div>
	
</template>


<script>
import Tocstackfooter from "./tocstackfooter.vue";
import Tocstackheader from "./tocstackheader.vue";
export default {
  beforeMount() {
    this.$store.dispatch("setCurrentRoute", "/dashboard");
  },

  mounted() {},
  beforeDestroy() {},
  destroyed() {},
  components: {
    Tocstackfooter,Tocstackheader
  },
  computed: {},
  methods: {}
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

#example-3 .flex {
  margin-bottom: 16px;
}
</style>