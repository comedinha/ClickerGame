<template>
  <v-app id="inspire">
    <v-navigation-drawer app right class="hidden-sm-and-down">
      <script2 async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      <!-- MyClick Auth -->
      <ins class="adsbygoogle"
          style="display:inline-block;width:160px;height:600px"
          data-ad-client="ca-pub-9155104656479961"
          data-ad-slot="4380186225" />
      <script2>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script2>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md5>
            <v-card class="layout-revert elevation-12">
              <v-toolbar>
                <v-toolbar-title>{{ $ml.get('game.name') }}</v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                  <v-btn block flat color="primary" to="Signin">{{ $ml.get('auth.signin.title') }}</v-btn>
                  <v-btn block flat color="primary" to="Signup">{{ $ml.get('auth.signup.title') }}</v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <router-view/>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

import Footer from '@/components/template/block/Footer'

export default {
  components: {
    Footer
  },
  mounted () {
    let container = document.querySelectorAll('.container')
    console.log(container)
    for (let i = 0; i < container.length; i++) {
      container[i].style.backgroundImage = 'url("' + this.getBackgroundImage + '")'
    }
  },
  computed: {
    ...mapGetters([
      'getBackgroundImage'
    ])
  }
}
</script>

<style scoped>
  .container {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
