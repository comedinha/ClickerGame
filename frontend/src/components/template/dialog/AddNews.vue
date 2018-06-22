<template>
  <v-dialog v-model="newsAddDialog" max-width="700px">
    <v-card v-if="getAdmin">
      <v-card-title>
        <span class="headline">{{ $ml.get('template.dialog.addNews.title') }}</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="title" :label="$ml.get('template.dialog.addNews.addTitle')" :error-messages="titleErrors" required @input="$v.title.$touch()" @blur="$v.title.$touch()" />
          <CKEditor />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="newsAddDialog = !newsAddDialog">{{ $ml.get('template.dialog.addNews.cancel') }}</v-btn>
        <v-btn @click="send"> {{ $ml.get('template.dialog.addNews.add') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CKEditor from '@/components/template/dialog/CKEditor'

import { required } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      title: ''
    }
  },
  components: {
    CKEditor
  },
  validations: {
    title: {
      required
    }
  },
  created () {
    this.send()
  },
  computed: {
    titleErrors () {
      const errors = []
      if (!this.$v.title.$dirty) return errors
      !this.$v.title.required && errors.push(this.$ml.get('template.dialog.addNews.required'))
      return errors
    },

    ...mapGetters([
      'getAdmin'
    ]),

    newsAddDialog: {
      get () {
        return this.$store.getters.getNewsAddDialog
      },
      set (value) {
        this.$store.dispatch('setNewsAddDialog', value)
      }
    }
  },
  methods: {
    send () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.load = true
        const { title } = this
        this.$store.dispatch('addNews', title).then(() => {
          this.$router.push('/lobby')
          // this.$store.dispatch('setSuccessMessage', this.$ml.get('auth.email.success'))
        }).catch(errorCode => {
          this.load = false
          // set error
        })
      }
    }
  }
}
</script>
