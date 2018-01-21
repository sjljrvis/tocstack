<template>
  <div>

    <md-layout md-gutter style="padding-top:10px">

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="100" style="padding-right : 10px !important ;padding-left : 10px !important">
        <div style="background : #ffffff">
          <div style="padding : 10px 10px 10px 10px">
            <h4>Install the tocstack CLI</h4>
            <br>
          </div>
        </div>
      </md-layout>

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100"   md-flex-large="100" style="">
        <div class = "parent-code" style="padding : 10px 10px 10px 10px">
					<div class = "code">
          $ npm install tocstack-cli -g
					</div>
        </div>
				
      </md-layout>

    </md-layout>

    <md-layout md-gutter style="padding-top:10px">

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100"  md-flex-large="100" style="padding-right : 10px !important ;padding-left : 10px !important">
        <div style="background : #ffffff">
          <div style="padding : 10px 10px 10px 10px">
            <h4>Initialize a git repository in a new or existing directory</h4>
            <br>
          </div>
        </div>
      </md-layout>

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100"  md-flex-large="100" style="">
        <div style="">
          <div class = "parent-code" style="padding : 10px 10px 10px 10px">
<div class = "code">
$ cd myproject<br>
$ git init<br>	
Initialized empty Git repository in /home/sejal/myproject/.git/<br>
</div>
          </div>
        </div>
      </md-layout>

    </md-layout>

    <md-layout md-gutter style="padding-top:10px">

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100"  md-flex-large="100" style="padding-right : 10px !important ;padding-left : 10px !important">
        <div style="background : #ffffff">
          <div style="padding : 10px 10px 10px 10px">
            <h4>Deploy your changes</h4>
            <h4>Code your applications deploy them to tocstack using Git.</h4>
            <br>
          </div>
        </div>
      </md-layout>

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100"  md-flex-large="100" style="">
        <div style="">
          <div class = "parent-code" style="padding : 10px 10px 10px 10px;">
<div class = "code">
$ git add --all <br>
$ git remote add tocstack http://git.tocstack.com/{{repositoryName}}<br>
$ git commit -m "commit message"<br>
$ git push tocstack master<br>
</div>
          </div>
        </div>
      </md-layout>

    </md-layout>

    <md-layout md-gutter style="padding-top:10px">

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100"  md-flex-large="100" style="padding-right : 10px !important ;padding-left : 10px !important">
        <div style="background : #ffffff">
          <div style="padding : 10px 10px 10px 10px">
            <h4>Clone a Git repository</h4>
          </div>
        </div>
      </md-layout>

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100"  md-flex-large="100" style="">
        <div style="">
          <div class = "parent-code" style="padding : 10px 10px 10px 10px">
<div class = "code">						
$ git clone http://git.tocstack.com/{{repositoryName}}
</div>
          </div>
        </div>
      </md-layout>

    </md-layout>

  </div>
</template>


<script>
export default {
  data: () => ({
		repositoryName : ""
	}),
  beforeMount() {},
  mounted() {
		 this.repositoryName = this.$store.getters.repositoryItem.repositoryName;
	},
  destroyed() {},
  components: {},
  computed: {},
  methods: {}
};
</script>
<style>

</style>