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
        <div style="padding : 10px 10px 10px 10px">
          <pre>$ npm install tocstack-cli -g</pre>
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
          <div style="padding : 10px 10px 10px 10px">

<pre>$ cd myproject
$ git init	
Initialized empty Git repository in /home/sejal/myproject/.git/
</pre>
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
          <div style="padding : 10px 10px 10px 10px">
<pre>$ git add --all
$ git remote add tocstack http://git.tocstack.com/{{repositoryName}}
$ git commit -m "commit message"
$ git push tocstack master
</pre>
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
          <div style="padding : 10px 10px 10px 10px">
<pre>$ git clone http://git.tocstack.com/{{repositoryName}}
</pre>
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