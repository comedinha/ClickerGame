<template>
  <v-dialog v-model="reportDialog" max-width="700px">
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-card>
      <v-card-title>
        <span class="headline">{{ $ml.get('scene.play.dialog.report.title') }}</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="report" :label="$ml.get('scene.play.dialog.report.report')" multi-line :error-messages="reportErrors" required @input="$v.report.$touch()" @blur="$v.report.$touch()" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="reportDialog = !reportDialog">{{ $ml.get('scene.play.dialog.report.cancel') }}</v-btn>
        <v-btn color="primary" :loading="load" @click="send"> {{ $ml.get('scene.play.dialog.report.add') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      report: '',
      error: '',
      load: false
    }
  },
  validations: {
    report: {
      required
    }
  },
  computed: {
    reportErrors () {
      const errors = []
      if (!this.$v.report.$dirty) return errors
      !this.$v.report.required && errors.push(this.$ml.get('scene.play.dialog.report.required'))
      return errors
    },

    reportDialog: {
      get () {
        return this.$store.getters.getReportDialog
      },
      set (value) {
        this.$store.dispatch('setReportDialog', value)
      }
    }
  },
  methods: {
    send () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.load = true
        const { report } = this
        this.$store.dispatch('addReport', { report }).then(() => {
          this.newsAddDialog = false
        }).catch(errorCode => {
          this.load = false
          if (errorCode.bodyText) {
            if (this.$ml.get('error.' + errorCode.bodyText)) {
              this.error = this.$ml.get('error.' + errorCode.bodyText)
            } else {
              this.error = this.$ml.with('e', errorCode.bodyText).get('error.UNK')
            }
          } else {
            this.error = this.$ml.with('e', errorCode.status).get('error.UNK')
          }
        })
      }
    }
  }
}
</script>
