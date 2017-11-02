<template>
  <div>

    <md-layout md-gutter style="padding-top:10px">

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="75" style="padding-right : 10px !important ;padding-left : 10px !important">
        <div style="background : #ffffff">
          <div style="padding : 10px 10px 10px 10px">
            <h4>Install the Heroku CLI</h4>
            </br>
          </div>
        </div>
      </md-layout>

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="25" style="background : #00162d">
        <div style="background : #00162d">
          <div style="padding : 10px 10px 10px 10px">

           <code></code>
            </br>
            <code>$ heroku login</code>
            </br>
          </div>
        </div>
      </md-layout>

    </md-layout>

    <md-layout md-gutter style="padding-top:10px">

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="75" style="padding-right : 10px !important ;padding-left : 10px !important">
        <div style="background : #ffffff">
          <div style="padding : 10px 10px 10px 10px">
            <h4>Create a new Git repository</h4>
            <h4>Initialize a git repository in a new or existing directory</h4>
            </br>
          </div>
        </div>
      </md-layout>

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="25" style="background : #00162d">
        <div style="background : #00162d">
          <div style="padding : 10px 10px 10px 10px">

            <code></code>
            </br>
            <code>$ git add .</code>
            </br>
            <code>$ git commit -am "make it better"</code>
            </br>
            <code>$ git push heroku master</code>
            </br>
          </div>
        </div>
      </md-layout>

    </md-layout>

    <md-layout md-gutter style="padding-top:10px">

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="75" style="padding-right : 10px !important ;padding-left : 10px !important">
        <div style="background : #ffffff">
          <div style="padding : 10px 10px 10px 10px">
            <h4>Deploy your changes</h4>
            <h4>Make some changes to the code you just cloned and deploy them to Heroku using Git.</h4>
            </br>
          </div>
        </div>
      </md-layout>

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="25" style="background :#00162d">
        <div style="background : #00162d">
          <div style="padding : 10px 10px 10px 10px">

            <code></code>
            </br>
            <code>$git init</code>
            </br>
            <code>$git add README.md</code>
            </br>
            <code>heroku git:remote -a node-test-app-sejal</code>
            </br>
            <code>$git commit -m "first commit"</code>
            </br>
            <code>$git push origin master</code>

          </div>
        </div>
      </md-layout>

    </md-layout>

    <md-layout md-gutter style="padding-top:10px">

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="75" style="padding-right : 10px !important ;padding-left : 10px !important">
        <div style="background : #ffffff">
          <div style="padding : 10px 10px 10px 10px">
            <h4>Existing Git repository</h4>
            <h4>For existing repositories, simply add the heroku remote</h4>
            </br>
          </div>
        </div>
      </md-layout>

      <md-layout md-align="left" md-flex-xsmall="100" md-flex-small="100" md-flex-medium="25" style="background : #00162d">
        <div style="background : #00162d">
          <div style="padding : 10px 10px 10px 10px">

            <code></code>
            </br>
            <code>$ heroku git:remote -a node-test-app-sejal</code>
            </br>

          </div>
        </div>
      </md-layout>

    </md-layout>

  </div>
</template>


<script>
export default {
  data: () => ({

  }),
  beforeMount() {

  },
  mounted() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  components: {
  },
  computed: {
  },
  methods: {

  }
}
</script>
<style>

</style>