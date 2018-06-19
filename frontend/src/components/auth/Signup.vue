<template>
  <v-card-text>
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-form>
      <v-text-field prepend-icon="person" v-model="credentials.name" @keyup.enter="onSubmit" :error-messages="nameErrors" :label="$ml.get('auth.signup.name.title')" required @input="$v.credentials.name.$touch()" @blur="$v.credentials.name.$touch()" />
      <v-text-field prepend-icon="email" v-model="credentials.username" @keyup.enter="onSubmit" :error-messages="emailErrors" :label="$ml.get('auth.signup.username.title')" required @input="onUsernameInput" @blur="onUsernameInput" />
      <v-card-actions>
        <v-text-field prepend-icon="lock" v-model="credentials.password" @keyup.enter="onSubmit" :error-messages="passwordErrors" :label="$ml.get('auth.signup.password.title')" required @input="$v.credentials.password.$touch()" @blur="$v.credentials.password.$touch()" type="password" />
        <v-text-field v-model="credentials.confirmPassword" @keyup.enter="onSubmit" :error-messages="confirmPasswordErrors" :label="$ml.get('auth.signup.confirmPassword.title')" required @input="$v.credentials.confirmPassword.$touch()" @blur="$v.credentials.confirmPassword.$touch()" type="password" />
      </v-card-actions>
    </v-form>
    <v-card-actions>
      <v-spacer />
      <v-tooltip right close-delay="1000">
        <v-btn slot="activator" color="primary" :loading="load" @click="onSubmit">{{ $ml.get('auth.signup.button') }}</v-btn>
        <vue-recaptcha ref="invisibleRecaptcha" @verify="onVerify" @expired="onExpired" size="invisible" :sitekey="sitekey" badge="inline" />
      </v-tooltip>
    </v-card-actions>
  </v-card-text>
</template>

<script>
import { required, minLength, maxLength, sameAs, email } from 'vuelidate/lib/validators'
import VueRecaptcha from 'vue-recaptcha'

export default {
  data () {
    return {
      sitekey: '6Lfk1FwUAAAAAMcjjT1vE-D9MLIgLaKm4_4BN44W',
      credentials: {
        username: '',
        name: '',
        password: '',
        confirmPassword: '',
        captcharesponse: ''
      },
      emailExistis: false,
      loggedIn: false,
      load: false,
      error: ''
    }
  },
  validations: {
    credentials: {
      username: {
        required,
        email
      },
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(16)
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
  components: {
    VueRecaptcha
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.credentials.username.$dirty) return errors
      !this.$v.credentials.username.required && errors.push(this.$ml.get('auth.signup.required'))
      !this.$v.credentials.username.email && errors.push(this.$ml.get('auth.signup.username.validEmail'))
      this.emailExistis && errors.push(this.$ml.get('auth.signup.username.existEmail'))
      return errors
    },

    nameErrors () {
      const errors = []
      if (!this.$v.credentials.name.$dirty) return errors
      !this.$v.credentials.name.required && errors.push(this.$ml.get('auth.signup.required'))
      !this.$v.credentials.name.minLength && errors.push(this.$ml.with('c', this.$v.credentials.name.$params.minLength.min).get('auth.signup.name.minLength'))
      !this.$v.credentials.name.maxLength && errors.push(this.$ml.with('c', this.$v.credentials.name.$params.maxLength.max).get('auth.signup.name.maxLength'))
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
      this.emailExistis = false
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const { username, name, password, captcharesponse } = this.credentials
        this.$store.dispatch('signup', { username, name, password, captcharesponse }).then(() => {
          this.$router.push('/Signin')
          this.$store.dispatch('setSuccessMessage', this.$ml.get('auth.signup.success'))
        }).catch(errorCode => {
          this.onExpired()
          this.load = false
          if (errorCode.bodyText) {
            if (this.$ml.get('error.' + errorCode.bodyText)) {
              this.error = this.$ml.get('error.' + errorCode.bodyText)
              if (errorCode.bodyText === 'B03') {
                this.emailExistis = true
              }
            } else {
              this.error = this.$ml.with('e', errorCode.bodyText).get('error.UNK')
            }
          } else {
            this.error = this.$ml.with('e', errorCode.status).get('error.UNK')
          }
        })
      } else {
        this.onExpired()
        this.load = false
        this.error = this.$ml.get('auth.signup.errorRequired')
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
    },

    onUsernameInput () {
      this.$v.credentials.username.$touch()
      this.emailExistis = false
    }
  }
}
</script>
