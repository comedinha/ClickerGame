<template>
  <v-flex d-flex xs12 sm4 md2>
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.block.guestMessage.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <span v-html="$ml.get('lobby.block.guestMessage.content')" />
      </v-card-text>
      <v-card-actions>
        <v-btn block @click="logout">{{ $ml.get('lobby.block.guestMessage.logout') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('signout').then(() => {
        this.$router.push('/Signin')
      })
    }
  }
}
</script>
