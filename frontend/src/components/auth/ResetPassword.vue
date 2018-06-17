<template>
  <v-card-text>
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-form>
        <v-text-field prepend-icon="lock" v-model="credentials.password" @keyup.enter="onSubmit" :error-messages="passwordErrors" :label="$ml.get('auth.signup.password.title')" required @input="$v.credentials.password.$touch()" @blur="$v.credentials.password.$touch()" type="password" />
        <v-text-field prepend-icon="lock" v-model="credentials.confirmPassword" @keyup.enter="onSubmit" :error-messages="confirmPasswordErrors" :label="$ml.get('auth.signup.confirmPassword.title')" required @input="$v.credentials.confirmPassword.$touch()" @blur="$v.credentials.confirmPassword.$touch()" type="password" />
    </v-form>
    <v-card-actions>
      <v-btn small flat color="indigo" @click.native.stop="recovery.display = !recovery.display">{{ $ml.get('auth.signin.recovery') }}</v-btn>
      <v-spacer />
      <v-tooltip right close-delay="1000">
        <v-btn slot="activator" color="primary" :loading="load" @click="onSubmit">{{ $ml.get('auth.signin.button') }}</v-btn>
        <vue-recaptcha ref="invisibleRecaptcha" @verify="onVerify" @expired="onExpired" size="invisible" :sitekey="sitekey" badge="inline" />
      </v-tooltip>
    </v-card-actions>
  </v-card-text>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
import VueRecaptcha from 'vue-recaptcha'

export default {
  data () {
    return {
      sitekey: '6Lfk1FwUAAAAAMcjjT1vE-D9MLIgLaKm4_4BN44W',
      credentials: {
        username: this.$route.params.email,
        token: this.$route.params.token,
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
      username: {
        required,
        email
      },
      token: {
        required
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  },
  created () {
    this.send()
  },
  components: {
    VueRecaptcha
  },
  computed: {
    usernameErrors () {
      const errors = []
      if (!this.$v.credentials.username.$dirty) return errors
      !this.$v.credentials.username.required && errors.push(this.$ml.get('auth.email.required'))
      !this.$v.credentials.username.email && errors.push(this.$ml.get('auth.email.username.validEmail'))
      return errors
    },

    passwordErrors () {
      const errors = []
      if (!this.$v.credentials.password.$dirty) return errors
      !this.$v.credentials.password.required && errors.push(this.$ml.get('auth.signup.required'))
      !this.$v.credentials.password.minLength && errors.push(this.$ml.with('c', this.$v.credentials.password.$params.minLength.min).get('auth.signup.password.errorLimit'))
      return errors
    },

    confirmPasswordErrors () {
      const errors = []
      if (!this.$v.credentials.confirmPassword.$dirty) return errors
      !this.$v.credentials.confirmPassword.sameAsPassword && errors.push(this.$ml.get('auth.signup.confirmPassword.errorIdentical'))
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
          this.$router.push('/')
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
