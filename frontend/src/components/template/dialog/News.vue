<template>
  <v-dialog v-model="newsDialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ $ml.get('template.dialog.news.title') }}</span>
        <v-spacer />
        <v-btn v-if="getAdmin">{{ $ml.get('template.dialog.news.adminButton') }}</v-btn>
      </v-card-title>
      <v-alert :value="true" type="error" v-if="!message">
        {{ error }}
      </v-alert>
      {{ message || '' }}
    </v-card>
    <CKEditor />
  </v-dialog>
</template>

<script>
import CKEditor from '@/components/template/dialog/CKEditor'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      message: '',
      error: this.$ml.get('template.dialog.news.noNews')
    }
  },
  components: {
    CKEditor
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
    }
  }
}
</script>
