<template>
  <v-dialog v-model="reviewAddDialog" max-width="700px">
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-card>
      <v-card-title>
        <span class="headline">{{ $ml.get('lobby.dialog.addReview.title') }}</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="score" :label="$ml.get('lobby.dialog.addReview.score')" :error-messages="scoreErrors" required @input="$v.score.$touch()" @blur="$v.score.$touch()" />
          <v-text-field v-model="review" :label="$ml.get('lobby.dialog.addReview.review')" multi-line :error-messages="reviewErrors" required @input="$v.review.$touch()" @blur="$v.review.$touch()" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="reviewAddDialog = !reviewAddDialog">{{ $ml.get('lobby.dialog.addReview.cancel') }}</v-btn>
        <v-btn color="primary" :loading="load" @click="send"> {{ $ml.get('lobby.dialog.addReview.add') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      score: '',
      review: '',
      error: '',
      load: false
    }
  },
  validations: {
    score: {
      required
    },
    review: {
      required
    }
  },
  computed: {
    scoreErrors () {
      const errors = []
      if (!this.$v.score.$dirty) return errors
      !this.$v.score.required && errors.push(this.$ml.get('lobby.dialog.addReview.required'))
      return errors
    },

    reviewErrors () {
      const errors = []
      if (!this.$v.review.$dirty) return errors
      !this.$v.review.required && errors.push(this.$ml.get('lobby.dialog.addReview.required'))
      return errors
    },

    reviewAddDialog: {
      get () {
        return this.$store.getters.getReviewAddDialog
      },
      set (value) {
        this.$store.dispatch('setReviewAddDialog', value)
      }
    }
  },
  methods: {
    send () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.load = true
        const { score, review } = this
        this.$store.dispatch('addReview', { score, review }).then(() => {
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
