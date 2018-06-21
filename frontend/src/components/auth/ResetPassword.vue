<template>
  <v-card-text>
    <script2 src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer />
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-form>
        <v-text-field prepend-icon="lock" v-model="credentials.password" @keyup.enter="onSubmit" :error-messages="passwordErrors" :label="$ml.get('auth.resetPassword.password.title')" required @input="$v.credentials.password.$touch()" @blur="$v.credentials.password.$touch()" type="password" />
        <v-text-field prepend-icon="lock" v-model="credentials.confirmPassword" @keyup.enter="onSubmit" :error-messages="confirmPasswordErrors" :label="$ml.get('auth.resetPassword.confirmPassword.title')" required @input="$v.credentials.confirmPassword.$touch()" @blur="$v.credentials.confirmPassword.$touch()" type="password" />
    </v-form>
    <v-card-actions>
      <v-spacer />
      <v-tooltip left close-delay="500">
        <v-btn small flat color="indigo" slot="activator" icon><v-icon>security</v-icon></v-btn>
        <vue-recaptcha ref="invisibleRecaptcha" @verify="onVerify" @expired="onExpired" size="invisible" :sitekey="sitekey" badge="inline" />
      </v-tooltip>
      <v-btn color="primary" :loading="load" @click="onSubmit">{{ $ml.get('auth.resetPassword.button') }}</v-btn>
    </v-card-actions>
  </v-card-text>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import VueRecaptcha from 'vue-recaptcha'

export default {
  data () {
    return {
      sitekey: '6Lfk1FwUAAAAAMcjjT1vE-D9MLIgLaKm4_4BN44W',
      credentials: {
        username: this.$route.query.email,
        token: this.$route.query.token,
        password: '',
        confirmPassword: '',
        captcharesponse: ''
      },
      error: '',
      load: false
    }
  },
  validations: {
    credentials: {
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  },
  components: {
    VueRecaptcha
  },
  computed: {
    passwordErrors () {
      const errors = []
      if (!this.$v.credentials.password.$dirty) return errors
      !this.$v.credentials.password.required && errors.push(this.$ml.get('auth.resetPassword.required'))
      !this.$v.credentials.password.minLength && errors.push(this.$ml.with('c', this.$v.credentials.password.$params.minLength.min).get('auth.signup.password.errorLimit'))
      return errors
    },

    confirmPasswordErrors () {
      const errors = []
      if (!this.$v.credentials.confirmPassword.$dirty) return errors
      !this.$v.credentials.confirmPassword.sameAsPassword && errors.push(this.$ml.get('auth.resetPassword.confirmPassword.errorIdentical'))
      return errors
    }
  },
  methods: {
    send () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.load = true
        const { username, token, password, confirmPassword, captcharesponse } = this.credentials
        this.$store.dispatch('passwordReset', { username, token, password, confirmPassword, captcharesponse }).then(() => {
          this.$router.push('/Signin')
          this.$store.dispatch('setSuccessMessage', this.$ml.get('auth.resetPassword.success'))
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
        this.error = this.$ml.get('auth.resetPassword.errorRequired')
      }
    },

    onSubmit () {
      this.load = true
      if (!this.credentials.captcharesponse) {
        this.$refs.invisibleRecaptcha.execute()
      } else {
        this.send()
      }
    },

    onVerify (response) {
      this.credentials.captcharesponse = response
      this.send()
    },

    onExpired () {
      this.credentials.captcharesponse = ''
      this.$refs.invisibleRecaptcha.reset()
    }
  }
}
</script>
