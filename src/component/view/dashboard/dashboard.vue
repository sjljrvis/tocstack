<template>
	<div>
		<div style='background-color :#efefef ;color : #282828 '>
			<div>

				<div style='padding : 10px 10px 10px 10px'>
					<a href="#" v-scroll-to="'#element2'">Scroll to #element 2</a>

					<md-layout md-gutter>
						<md-layout  md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
							<img src="https://hasura.io/rstatic/resources/hasura_ninga3.png">
						</md-layout>
						<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
							<h2> Build
								<span>Fast</span> with Hasura backend components.</h2>
							<p style="color : #4286f4">Don’t waste time writing repetitive code. #HasuraBaaS</p>
						</md-layout>

					</md-layout>

				</div>
			</div>

		</div>

		<div id='element2' style='background-color : #d9d9dd ;color : #000000 '>
			<a href="#" v-scroll-to="'#element3'">Scroll to #element 2</a>

			<md-layout md-gutter>
				<md-layout md-vertical-align="center">
					<md-boards class="md-transparent" :md-controls="true">

						<md-board id="slide1">
							<md-layout md-gutter>
								<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50">
									<img class='code-snippet' src='https://hasura.io/rstatic/dist/09d9be2c190557c1dbf736dde688c99f.png'></img>
								</md-layout>

								<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
									<h3>Data APIs<br>
										<span>#tocstack</span>
									</h3>
									<p>Authentication and related APIs based on password, social login, SMS OTP, email verification.</p>
									<p>Ready to use authorization service that provides APIs for almost all common authentication use cases. Read more from our blog</p>

								</md-layout>

							</md-layout>
						</md-board>
						<md-board id="slide2">
							<md-layout md-gutter>
								<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50">
									<img class='code-snippet' src='https://hasura.io/rstatic/dist/8e7ede013f3805729e3c185da3c8cc89.png'></img>
								</md-layout>

								<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
									<h3>Auth APIs<br>
										<span>#tocstack</span>
									</h3>
									<p>HTTP API over Postgres with role based row level permissions. A JSON based query language, similar to GraphQL.</p>
									<p>The power of Postgres with the ease of JSON. The most performant data APIs ever. Read more from our blog</p>

								</md-layout>

							</md-layout>
						</md-board>
						<md-board id="slide3">
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
						</md-board>
						<md-board id="slide4">
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
						</md-board>

					</md-boards>

				</md-layout>
			</md-layout>

		</div>

		<div id='element3' style='background-color : #efefef ;'>
			<div style='padding : 10px 10px 10px 10px'>
				<a href="#" v-scroll-to="'#element4'">Scroll to #element 4</a>

				<md-layout md-gutter>

					<md-layout class="twitter-card" md-align="center" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
						<h3>Provision
							<span>Fast</span>. Install on your laptop or your cloud.</h3>
						<p style="color : #CC401B;">Stop environment config related bugs, before they begin.</p>

					</md-layout>
			
					<md-layout  md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-vertical-align="center">
							<img src="https://hasura.io/rstatic/resources/hasura_ringmaster1.png">
						</md-layout>
				</md-layout>

			</div>
		</div>

		<div id='element4' style='background-color : #142433 ;color : #FFFFFF ;'>
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

		<div id='element5' style='background-color : #FFFFFF ;'>
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