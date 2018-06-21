<template>
  <v-dialog v-model="newsDialog" max-width="700px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ $ml.get('template.dialog.news.title') }}</span>
        <v-spacer />
        <v-btn v-if="getAdmin" @click="newsAddDialog = !newsAddDialog">{{ $ml.get('template.dialog.news.adminButton') }}</v-btn>
      </v-card-title>
      <v-alert :value="true" type="error" v-if="!message">
        {{ error }}
      </v-alert>
      {{ message || '' }}
      <v-card-actions>
        <v-spacer />
        <v-btn @click="newsDialog = !newsDialog">{{ $ml.get('template.dialog.news.close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      message: '',
      error: this.$ml.get('template.dialog.news.noNews')
    }
  },
  computed: {
    ...mapGetters([
      'getAdmin'
    ]),

    newsDialog: {
      get () {
        return this.$store.getters.getNewsDialog
      },
      set (value) {
        this.$store.dispatch('setNewsDialog', value)
      }
    },

    newsAddDialog: {
      get () {
        return this.$store.getters.getNewsAddDialog
      },
      set (value) {
        this.$store.dispatch('setNewsAddDialog', value)
      }
    }
  }
}
</script>
