<template>
  <v-app id="inspire">
    <v-navigation-drawer app right hidden-sm-and-down>
      <script2 async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      <ins class="adsbygoogle"
          style="display:inline-block;width:160px;height:600px"
          data-ad-client="ca-pub-9155104656479961"
          data-ad-slot="4031990452" />
      <script2>
      (adsbygoogle = window.adsbygoogle || []).push({});
      </script2>
    </v-navigation-drawer>
    <v-toolbar app class="elevation-0">
      <v-spacer />
      <v-menu offset-y>
        <v-btn icon slot="activator">
          <v-icon>flag</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="lang in $ml.list" :key="lang" @click="$ml.change(lang)">
            <v-list-tile-title>{{ lang }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md5>
            <v-card class="elevation-12">
              <v-toolbar>
                <v-toolbar-title>My Click</v-toolbar-title>
                <v-spacer />
                <v-toolbar-items>
                  <v-btn block flat color="primary" to="Signin">{{ $ml.get('signin.title') }}</v-btn>
                  <v-btn block flat color="primary" to="Signup">{{ $ml.get('signup.title') }}</v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <router-view/>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
