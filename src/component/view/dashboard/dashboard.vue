<template>
	<div>

		<div style='background-color :#efefef ; height:100vh ;background:url(http://longwallpapers.com/Desktop-Wallpaper/rocket-backgrounds-For-Desktop-Wallpaper.jpg) center/cover no-repeat'>
			<div>
				<div style='padding : 10px 10px 10px 10px'>

					<!-- background: url(https://www.getpostman.com/img/v2/homepage/postman-hero.svg) center/cover no-repeat-->
					<md-layout md-gutter>
						<md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="70" md-vertical-align="center">
							<md-layout md-column>
								<md-layout md-row md-align="center">
									<h1 style="color :#efefef !important ; font-size:4.5em">tocstack</h1>
								</md-layout>
								<md-layout md-row md-align="center">
									<md-button style="width : 150px !important ; font-weight:700" class="md-raised md-warn" @click="pushToLoginPage">Login/Sign up</md-button>
								</md-layout>
								<md-layout md-row md-align="center">
									<h2 style="color :#efefef !important"> One shot app deployment</h2>
									<p style="color :#efefef ">Don’t waste time writing server configuration. #PaaS</p>
								</md-layout>
							</md-layout>
						</md-layout>
						<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="30" md-vertical-align="center">
						</md-layout>
					</md-layout>

				</div>
			</div>
		</div>

		<div style='height:100vh;padding: 5% 0;background-color : rgba(19, 41, 78, 1);color : #efefef '>
			<div style="padding: 10% 0;">
				<md-layout md-gutter>
					<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-vertical-align="center">
						<md-layout md-column>
							<md-layout md-row md-align="center">
								<h1 style="color :#efefef !important ; font-size : 3em ;text-align : center">What is tocstack ?</h1>
							</md-layout>
							<md-layout md-row md-align="center">
								<p style="text-align : center ;color :#efefef !important; font-size : 2em ;">tocstack is easy to use #PaaS for fast application deployment</p>
							</md-layout>
						</md-layout>
					</md-layout>
				</md-layout>
			</div>
		</div>

		<div style='background-color : #ffffff'>
			<div style="padding: 10% 0;">
				<md-layout md-gutter>
					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<h1 style="color :#000000 !important ; font-size : 3.5em ;text-align : center">How to use ?</h1>

						<ul style="color : #000000 !important; font-size : 2em ;">
							<li>Write code</li>
							<li> git push tocstack master</li>
							<li> App is online &#128515;</li>
						</ul>
					</md-layout>

					<md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<img src="../../../assets/android.png">
					</md-layout>
				</md-layout>

			</div>
		</div>

		<div id='demo-div' style="background-color : #efefef ;text-align:center">
			<div  style="padding: 3% 0%;">
			<h3  style="text-align:center">Quick demo to take you through
			<span style="color:#ff5722">tocstack</span></h3>
			<md-button style="width : 150px !important ; font-weight:700" class="md-raised md-warn" @click="pushToLoginPage">Sign up for free</md-button>
			</div>	
		</div>

		<div style='background-color : #ffffff ;color : #000000 '>
					<div style="padding: 10% 1%;">
						<md-layout md-gutter>
							<md-layout  md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="60" md-vertical-align="center">
								<!-- <img src="https://hasura.io/rstatic/resources/hasura_ninga3.png"> -->
								<img style="box-shadow: 1px 2px 23px 3px rgba(0,0,0,0.75);" src='../../../assets/demo1.png'></img>
							</md-layout>
							<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="40" md-vertical-align="center">
								<h2>Add new app</h2>
								<p style="color : #000000 ;text-align:center">Login to tocstack and click new app ,choose your preferred programming language and click create</p>
							</md-layout>

						</md-layout>
					</div>
				</div>


		<div style='background-color : rgb(240, 240, 245);color : #000000 '>
			<div style="padding: 10% 1%;">
				<md-layout md-gutter>
					<md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="60" md-vertical-align="center">
						<img  style="box-shadow: 2px 0px 25px 10px rgba(0,0,0,0.75);" src='../../../assets/demo2.png'></img>
						<!-- https://hasura.io/rstatic/dist/09d9be2c190557c1dbf736dde688c99f.png -->
					</md-layout>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<h2>Write code</h2>
						<p>This is the best part &#x263A; ,given example is simple a helloworld app written in nodeJS</p>
						<p style="color:#ff5722">Language support - nodeJS (python,Go,ruby will be added soon)</p>
					</md-layout>
				</md-layout>
			</div>
		</div>

		<div style=';background-color :  #ffffff ;color : #000000 '>
			<div style="padding: 10% 1%;">
				<md-layout md-gutter>
					<md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="60" md-vertical-align="center">
						<img style="box-shadow: 2px 0px 25px 10px  rgba(0,0,0,0.75);" src='../../../assets/demo3.png'></img>
						<!-- <img class='code-snippet' src='../../../assets/code1.png'></img> -->
					</md-layout>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<md-layout md-column>
						<!-- <h2 style="color :#000000 !important ; font-size : 2em !important;text-align : center">Deploy with </h2> -->
						<h2 style="color :#ff5722 !important ; font-size : 35px !important;text-align : center">Deploy with git </h2>
						<p style="font-size : 25px ; margin-top: 0px;margin-bottom: 0px;">Automated deployment goodness, just git push to see your app/service online
						</p> 
						<div>
						<ul>
							<li style="color : #000000 !important; font-size : 20px ;"> git init</li>
							<li style="color : #000000 !important; font-size : 20px ;"> git add --all</li>
							<li style="color : #000000 !important; font-size : 20px ;"> git commit -m"message"</li>
							<li style="color : #000000 !important; font-size : 20px ;"> git push tocstack master</li>
						</ul>
						</div>
							<!-- <p style="font-size : 1.2em ;">git init<br>git add --all<br>git commit -m"message"<br>git commit -m"message"</p> -->
						</md-layout>
					</md-layout>

				</md-layout>
			</div>
		</div>

		<div style="background-color : #efefef ;text-align:center">
			<div  style="padding: 3% 0%;">
			<h3  style="text-align:center">Wish to check status of your app from terminal ?</h3>
			<h3  style="text-align:center">Checkout
			<span style="color:#ff5722">tocstack CLI.</span> It,s free !!</h3>
			<md-button style="width : 150px !important ; font-weight:700" class="md-raised md-warn" @click="pushToLoginPage">Download</md-button>
			</div>	
		</div>

		<div style='background-color : #ffffff ;color : #000000 '>
			<div style="padding: 10% 1%;">
				<md-layout md-gutter>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<md-layout md-column>
						<!-- <h2 style="color :#000000 !important ; font-size : 2em !important;text-align : center">Deploy with </h2> -->
						<h2 style="color :#ff5722 !important ; font-size : 35px !important;text-align : center">tocstack CLI </h2>
						 <p style="color : #000000 ;text-align:center">Easy to use cli to keep eye on your deployed apps .<br> Enter tocstack to get started</p>	
						</md-layout>
					</md-layout>

					<md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="60" md-vertical-align="center">
						<img style="box-shadow: 2px 0px 25px 10px  rgba(0,0,0,0.75);" src='../../../assets/cli1.png'></img>
						<!-- <img class='code-snippet' src='../../../assets/code1.png'></img> -->
					</md-layout>



				</md-layout>
			</div>
		</div>

		<div style='background-color : rgb(240, 240, 245) ;color : #000000 '>
			<div style="padding: 10% 1%;">
				<md-layout md-gutter>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<md-layout md-column>
						<h2 style="color :#ff5722 !important ; font-size : 35px !important;text-align : center">Monitor apps</h2>
						<p style="color : #000000 ;text-align:center">View application logs,status using simple CLI commands</p>	
						</md-layout>
					</md-layout>

					<md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="60" md-vertical-align="center">
						<img style="box-shadow: 2px 0px 25px 10px  rgba(0,0,0,0.75);" src='../../../assets/cli2.png'></img>
					</md-layout>



				</md-layout>
			</div>
		</div>

  	<div style='background-color : #ffffff ;color : #000000 '>
			<div style="padding: 10% 1%;">
				<md-layout md-gutter>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<md-layout md-column>
						<!-- <h2 style="color :#000000 !important ; font-size : 2em !important;text-align : center">Deploy with </h2> -->
						<h2 style="color :rgb(98, 207, 115) !important ; font-size : 35px !important;text-align : center">About Open source </h2>
						 <p style="color : #000000 ;text-align:center">We too share unconditional &hearts; for open source </p>
						 <div style = "text-align:center">	
						<md-button style="background-color :rgb(98, 207, 115) ;width : 150px !important ; font-weight:700" class="md-raised md-warn" @click="pushToOpenSource">Check out</md-button>						 
						</div>
						</md-layout>
					</md-layout>

					<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="60" md-vertical-align="center">
						<img src='../../../assets/opensource.png'></img>
						<!-- <img class='code-snippet' src='../../../assets/code1.png'></img> -->
					</md-layout>



				</md-layout>
			</div>
		</div>

		<div style=';background-color : rgba(19, 41, 78, 1) ;color : #FFFFFF ;'>
			<div style='padding : 20px 20px 20px 20px'>

				<md-layout md-gutter>
					<md-layout md-vertical-align="center" style="height:736px">
						<md-layout style='padding : 20px 20px 20px 20px !important' class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
							<h2>For apps in production</h2>
							<p style='color : #FFFFFF ;'>Our paid plans have features which can help you manage and maintain your application in production</p>

						</md-layout>
						<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50">
							<md-layout md-column>
								<md-layout md-row md-align="center">
									<i class="large material-icons-custom">settings_applications</i>
									<md-layout style="padding-left: 50px !important;" md-vertical-align="center">
										Logging
									</md-layout>
								</md-layout>
								<md-layout md-row md-align="center">
									<i class="large material-icons-custom">show_chart</i>
									<md-layout style="padding-left: 50px !important;" md-vertical-align="center">
										Monitoring
									</md-layout>
								</md-layout>
								<md-layout md-row md-align="center">
									<i class="large material-icons-custom">warning</i>
									<md-layout style="padding-left: 50px !important;" md-vertical-align="center">
										Warning
									</md-layout>
								</md-layout>

							</md-layout>
						</md-layout>
					</md-layout>

				</md-layout>

			</div>
		</div>

		<div style='background-color : #FFFFFF ;'>
			<div style='padding : 10px 10px 10px 10px'>
				<h2>tocstack</h2>
				<h3 style = "text-align:center">
					<span>Blogs</span>
					<span>#tweets</span>
				</h3>
				<md-layout md-gutter>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50">
						<md-layout md-column>
							<md-card style="height:fit-content">
								<md-card-header>
									<md-avatar style='margin-left:0px'>
										<img src="../../../assets/space.jpg" alt="Avatar">
									</md-avatar>
									<md-card-header-text>
										<div class="md-title">Title goes here</div>
										<div class="md-subhead"> antium quasi non,. Excepturi. consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint
										</div>

									</md-card-header-text>
								</md-card-header>
							</md-card>
							<md-card style="height:fit-content">
								<md-card-header>
									<md-avatar style='margin-left:0px'>
										<img src="../../../assets/space.jpg" alt="Avatar">
									</md-avatar>
									<md-card-header-text>
										<div class="md-title">Title goes here</div>
										<div class="md-subhead"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
										</div>

									</md-card-header-text>
								</md-card-header>
							</md-card>
						</md-layout>
					</md-layout>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50">
						<md-layout md-column>
							<md-card style="height:fit-content">
								<md-card-header>
									<md-avatar style='margin-left:0px'>
										<img src="../../../assets/space.jpg" alt="Avatar">
									</md-avatar>
									<md-card-header-text>
										<div class="md-title">Title goes here</div>
										<div class="md-subhead"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
										</div>

									</md-card-header-text>
								</md-card-header>
							</md-card>
							<md-card style="height:fit-content">
								<md-card-header>
									<md-avatar style='margin-left:0px'>
										<img src="../../../assets/space.jpg" alt="Avatar">
									</md-avatar>
									<md-card-header-text>
										<div class="md-title">Title goes here</div>
										<div class="md-subhead"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
										</div>

									</md-card-header-text>
								</md-card-header>
							</md-card>
						</md-layout>
					</md-layout>
				</md-layout>

			</div>

		</div>

		<!-- footer -->
		
		<Tocstackfooter></Tocstackfooter>
		<!-- footer -->
	</div>
</template>


<script>
import Tocstackfooter from "./tocstackfooter.vue";
export default {
  data: () => {
    return {
      imgsrc: "../../../assets/hasura.png"
    };
  },

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
  methods: {
    pushToLoginPage() {
      this.$router.push({
        path: "/login",
        name: "login"
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

#example-3 .flex {
  margin-bottom: 16px;
}
</style>