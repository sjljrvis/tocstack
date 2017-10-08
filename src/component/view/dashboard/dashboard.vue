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
									<md-button style="width : 150px !important ; font-weight:500" class="md-raised md-warn">Login/Sign up</md-button>
								</md-layout>
								<md-layout md-row md-align="center">
									<h2 style="color :#efefef !important"> One shot app deployment</h2>
									<p style="color :#efefef ">Don’t waste time writing repetitive code. #PaaS</p>
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

		<div style='background-color : #d9d9dd ;color : #000000 '>
			<div style="padding: 10% 0;">
				<md-layout md-gutter>
					<md-layout md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50">
						<img class='code-snippet' src='../../../assets/code1.png'></img>
						<!-- https://hasura.io/rstatic/dist/09d9be2c190557c1dbf736dde688c99f.png -->
					</md-layout>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<h3 style=" font-size : 2em !important ;">Write code</h3>
						<p style="font-size : 1.2em ;">Given code is a simple hello world application written in nodeJS ,running on port 3000 .Similarly you can create other
							<span>web-applications,microservices,cronjobs</span> or your own
							<span>REST API</span> and host it on tocstack.</p>
						<p>Language support - nodeJS (python,Go,ruby will be added soon)</p>
					</md-layout>
				</md-layout>
			</div>
		</div>

		<div style=';background-color :  #ffffff ;color : #000000 '>
			<div style="padding: 10% 0;">
				<md-layout md-gutter>
					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50">
						<img class='code-snippet' src='../../../assets/terminal.png'></img>
					</md-layout>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<h2 style="color :#000000 !important ; font-size : 3em !important;text-align : center">Deploy with </h2>
						<h2 style="color :#ff5722 !important ; font-size : 3em !important;text-align : center">&nbsp; git </h2>

						<ul>
							<li style="color : #000000 !important; font-size : 38px ;">git init</li>
							<li style="color : #000000 !important; font-size : 38px ;"> git add --all</li>
							<li style="color : #000000 !important; font-size : 38px ;"> git commit -m"message"</li>
							<li style="color : #000000 !important; font-size : 38px ;"> git push tocstack master</li>
						</ul>

					</md-layout>

				</md-layout>
			</div>
		</div>

		<div style='height:100vh;padding: 5% 0;background-color : #d9d9dd ;color : #000000 '>
			<div style="padding: 10% 0;">
				<md-layout md-gutter>
					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50">
						<img class='code-snippet' src='https://hasura.io/rstatic/resources/banner/deploy-git.png'></img>
					</md-layout>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<h3>Deploy with git<br>
							<span>#tocstack</span>
						</h3>
						<p>Create a Dockerfile, and push your code. Or use one of our ever growing git-push templates to get started quickly.</p>
						<p>Deployment automation done right - just git push your code to deploy a containerized service. Read more from our blog</p>

					</md-layout>

				</md-layout>
			</div>
		</div>

		<div style='height:100vh;padding: 5% 0;background-color : #ffffff;color : #000000 '>
			<div style="padding: 10% 0;">
				<md-layout md-gutter>
					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<img class='code-snippet' src='https://hasura.io/rstatic/dist/09d9be2c190557c1dbf736dde688c99f.png'></img>
					</md-layout>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<h3>Data APIs<br>
							<span>#tocstack</span>
						</h3>
						<p>HTTP API over Postgres with role based row level permissions. A JSON based query language, similar to GraphQL.</p>
						<p>The power of Postgres with the ease of JSON. The most performant data APIs ever. Read more from our blog</p>

					</md-layout>

				</md-layout>
			</div>
		</div>

		<div style='background-color : #142433 ;color : #FFFFFF ;'>
			<div style='padding : 20px 20px 20px 20px'>
				<a href="#" v-scroll-to="'#element5'">Scroll to #element 4</a>

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
				<a href="#" v-scroll-to="'#element1'">Scroll to #element 1</a>
				<h2>tocstack</h2>
				<h3>
					<span>Blogs</span>
					<span>#tweets</span>
				</h3>
				<md-layout md-gutter>
					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50">
						<md-card md-with-hover>
							<md-card-media>
								<img class='md-card-image' src="../../../assets/space.jpg" alt="People">

								<md-ink-ripple></md-ink-ripple>
							</md-card-media>
							<md-card-header>
								<div class="md-title">Title goes here</div>
								<div class="md-subhead">Subtitle here</div>
							</md-card-header>

							<md-card-content>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
							</md-card-content>
							<md-card-actions>

								<md-avatar style='margin-left:0px'>
									<img src="../../../assets/space.jpg" alt="Avatar">
								</md-avatar>
								<md-button class="md-icon-button">
									<md-icon>favorite</md-icon>
								</md-button>

								<md-button class="md-icon-button">
									<md-icon>bookmark</md-icon>
								</md-button>

								<md-button class="md-icon-button">
									<md-icon>share</md-icon>
								</md-button>

							</md-card-actions>

						</md-card>

					</md-layout>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50">
						<md-card md-with-hover>
							<md-card-media>
								<img class='md-card-image' src="../../../assets/space.jpg" alt="People">

								<md-ink-ripple></md-ink-ripple>
							</md-card-media>
							<md-card-header>
								<div class="md-title">Title goes here</div>
								<div class="md-subhead">Subtitle here</div>
							</md-card-header>

							<md-card-content>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
							</md-card-content>
							<md-card-actions>

								<md-avatar style='margin-left:0px'>
									<img src="../../../assets/space.jpg" alt="Avatar">
								</md-avatar>
								<md-button class="md-icon-button">
									<md-icon>favorite</md-icon>
								</md-button>

								<md-button class="md-icon-button">
									<md-icon>bookmark</md-icon>
								</md-button>

								<md-button class="md-icon-button">
									<md-icon>share</md-icon>
								</md-button>

							</md-card-actions>

						</md-card>

					</md-layout>

				</md-layout>

			</div>

		</div>

		<!-- footer -->
		<Tocstackfooter></Tocstackfooter>

	</div>
</template>


<script>
import Tocstackfooter from './tocstackfooter.vue'
export default {

	data: () => {
		return {
			imgsrc: '../../../assets/hasura.png'
		}
	},

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
		Tocstackfooter
	},
	computed: {

	},
	methods: {

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