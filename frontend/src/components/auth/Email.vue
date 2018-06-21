<template>
  <v-card-text>
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-form>
      <v-text-field prepend-icon="email" v-model="credentials.username" :error-messages="usernameErrors" :label="$ml.get('auth.email.username.title')" required @input="$v.credentials.username.$touch()" @blur="$v.credentials.username.$touch()" />
      <v-text-field prepend-icon="vpn_key" v-model="credentials.token" :error-messages="tokenErrors" :label="$ml.get('auth.email.token.title')" required @input="$v.credentials.token.$touch()" @blur="$v.credentials.token.$touch()" />
    </v-form>
    <v-card-actions>
      <v-spacer />
      <v-btn slot="activator" color="primary" :loading="load" @click="send">{{ $ml.get('auth.email.button') }}</v-btn>
    </v-card-actions>
  </v-card-text>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      credentials: {
        username: this.$route.query.email,
        token: this.$route.query.token
      },
      error: '',
      load: false
    }
  },
  validations: {
    credentials: {
      username: {
        required,
        email
      },
      token: {
        required
      }
    }
  },
  created () {
    this.send()
  },
  computed: {
    usernameErrors () {
      const errors = []
      if (!this.$v.credentials.username.$dirty) return errors
      !this.$v.credentials.username.required && errors.push(this.$ml.get('auth.email.required'))
      !this.$v.credentials.username.email && errors.push(this.$ml.get('auth.email.username.validEmail'))
      return errors
    },

    tokenErrors () {
      const errors = []
      if (!this.$v.credentials.token.$dirty) return errors
      !this.$v.credentials.token.required && errors.push(this.$ml.get('auth.email.required'))
      return errors
    }
  },
  methods: {
    send () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.load = true
        const { username, token } = this.credentials
        this.$store.dispatch('activeEmail', { username, token }).then(() => {
          this.$router.push('/Signin')
          this.$store.dispatch('setSuccessMessage', this.$ml.get('auth.email.success'))
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
      } else {
        this.error = this.$ml.get('auth.email.errorRequired')
      }
    }
  }
}
</script>
