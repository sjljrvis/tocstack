<template>
	<div>

		<div style='background-color : #ffffff'>
			<div style="padding: 1% 0; margin : 0% 10%">
				<md-layout md-gutter>
					<md-layout md-column>
						<h1 style="color :#000000 !important ; font-size : 2em ;text-align : center">We are commited to open source</h1>
						<p style = "text-align:center;font-size : 1em">We too love to play around with code , We too share love for internet also make and break things.
							<br>Our present stack depends on dozens of open-source frameworks/softwares/tools.We deeply appreciate communities on <strong> Github </strong>and <strong>npm</strong> for being inspitational. 
							<br><strong>tocstack is and will forever contribute to open source</strong></p>
							<div style = "text-align:center"> 
								<img src='../../../assets/android-yoda.gif'></img>
							</div>
							<p style="text-align:center;font-size : 1.2em"><strong>"may the source be with you"</strong></p>
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