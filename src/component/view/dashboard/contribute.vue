<template>
	<div>

		<div style='background-color : #ffffff'>
			<div style="padding: 0% 0%; margin : 0% 0%">
				<md-layout md-gutter>
					<md-layout md-column>
							<div style="text-align:center">
								<img style="width:350px;height:300px;"src="../../../assets/contribute-code.svg" alt="Sejal">
							</div>
				
							<div style="text-align:center">
							<p style="width:375px;margin-left: auto; margin-right: auto;padding:1px 1px ">Developers/Enginners are invited to contribute to tocstack 
								 If you are a backend-ninja you can help us with extending programming language support for
								<span style="color:#4286f4">ruby,go & python</span>,If you are a devops-ninja you can help us creating
									docker files for small and efficient containers .follow us on <strong>github</strong>,our code goes here</p>
									<img style="width:50px;height:50px;border-radius:50%"src="../../../assets/github.png" alt="Sejal">
									</div>
								<md-layout md-row md-align="center">
									 <img style="width:100px;height:100px"src="../../../assets/sejal.png" alt="Sejal"> 
									 <img style="width:100px;height:100px"src="../../../assets/contribute.png" alt="Sejal"> 
									 <img style="width:100px;height:100px"src="../../../assets/contribute3.png" alt="Sejal">     
							 		<img style="width:100px;height:100px"src="../../../assets/contribute2.png" alt="Sejal">                       
							
							 </md-layout>
							<hr style="width:375px">
							<div style="text-align:center">
								<img style="width:350px;height:300px;"src="../../../assets/money.png" alt="Sejal">
							</div>
				
							<div style="text-align:center">
							<p style="width:375px;margin-left: auto; margin-right: auto;padding:1px 1px ">Developers/Enginners are invited to contribute to tocstack 
								 If you are a backend-ninja you can help us with extending programming language support for
								<span style="color:#4286f4">ruby,go & python</span>,If you are a devops-ninja you can help us creating
									docker files for small and efficient containers .follow us on <strong>github</strong>,our code goes here</p>
									<img style="width:50px;height:50px;border-radius:50%"src="../../../assets/github.png" alt="Sejal">
									<hr style="width:300px">
									</div>
								<md-layout md-row md-align="center">
									 <img style="width:100px;height:100px"src="../../../assets/sejal.png" alt="Sejal"> 
									 <img style="width:100px;height:100px"src="../../../assets/contribute.png" alt="Sejal"> 
									 <img style="width:100px;height:100px"src="../../../assets/contribute3.png" alt="Sejal">     
							 		<img style="width:100px;height:100px"src="../../../assets/contribute2.png" alt="Sejal">                       
							
							 </md-layout>

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

export default {
	beforeMount() {
		this.$store.dispatch("setCurrentRoute", "/dashboard");
	},

	mounted() {},
	beforeDestroy() {},
	destroyed() {},
	components: {
		Tocstackfooter
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