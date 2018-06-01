<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
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
