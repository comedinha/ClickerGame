<template>
  <v-dialog v-model="recoveryDialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ $ml.get('auth.dialog.recovery.text') }}</span>
      </v-card-title>
      <v-alert :value="true" type="error" v-if="error">
        {{ error }}
      </v-alert>
      <v-alert :value="true" type="info" v-if="!error">
        {{ $ml.get('auth.dialog.recovery.description') }}
      </v-alert>
      <v-card-text>
        <v-text-field prepend-icon="email" v-model="email" :error-messages="emailErrors" :label="$ml.get('auth.dialog.recovery.email')" required @input="$v.email.$touch()" @blur="$v.email.$touch()" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn flat @click.native="recoveryDialog = !recoveryDialog">{{ $ml.get('auth.dialog.recovery.cancel') }}</v-btn>
        <v-btn flat color="primary" @click.native="send">{{ $ml.get('auth.dialog.recovery.button') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      error: ''
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push(this.$ml.get('auth.dialog.recovery.required'))
      !this.$v.email.email && errors.push(this.$ml.get('auth.dialog.recovery.validEmail'))
      return errors
    },

    recoveryDialog: {
      get () {
        return this.$store.getters.getRecoveryDialog
      },
      set (value) {
        this.$store.dispatch('setRecoveryDialog', value)
      }
    }
  },
  methods: {
    send () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.recoveryDialog = false
        const { email } = this
        this.$store.dispatch('passwordRecovery', { email })
        this.$store.dispatch('setSuccessMessage', this.$ml.get('auth.dialog.recovery.confirm'))
      } else {
        this.error = this.$ml.get('auth.dialog.recovery.errorRequired')
      }
    }
  }
}
</script>
