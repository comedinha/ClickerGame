<template>
  <v-card-text>
    <script2 src="https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit" async defer />
    <Recovery />
    <Message />
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-form>
      <v-text-field prepend-icon="email" v-model="credentials.username" @keyup.enter="onSubmit" :error-messages="emailErrors" :label="$ml.get('auth.signin.email.title')" required @input="$v.credentials.username.$touch()" @blur="$v.credentials.username.$touch()" />
      <v-text-field prepend-icon="lock" v-model="credentials.password" @keyup.enter="onSubmit" :error-messages="passwordErrors" :label="$ml.get('auth.signin.password.title')" required @input="$v.credentials.password.$touch()" @blur="$v.credentials.password.$touch()" type="password" />
    </v-form>
    <v-card-actions>
      <v-btn small flat color="indigo" @click.native.stop="recoveryDialog = !recoveryDialog">{{ $ml.get('auth.signin.recovery') }}</v-btn>
      <v-spacer />
      <v-tooltip left close-delay="500">
        <v-btn small flat color="indigo" slot="activator" icon><v-icon>security</v-icon></v-btn>
        <vue-recaptcha ref="invisibleRecaptcha" @verify="onVerify" @expired="onExpired" size="invisible" :sitekey="sitekey" badge="inline" />
      </v-tooltip>
      <v-btn color="primary" :loading="load" @click="onSubmit">{{ $ml.get('auth.signin.button') }}</v-btn>
    </v-card-actions>
    <br />
    <v-divider />
    <v-btn block color="success" disabled >{{ $ml.get('auth.signin.guest') }}</v-btn>
  </v-card-text>
</template>

<script>
import { mapGetters } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'
import VueRecaptcha from 'vue-recaptcha'

import Message from '@/components/auth/dialog/Message'
import Recovery from '@/components/auth/dialog/Recovery'

export default {
  data () {
    return {
      sitekey: '6Lfk1FwUAAAAAMcjjT1vE-D9MLIgLaKm4_4BN44W',
      load: false,
      error: '',
      credentials: {
        username: '',
        password: '',
        captcharesponse: ''
      }
    }
  },
  validations: {
    credentials: {
      username: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  components: {
    VueRecaptcha,
    Recovery,
    Message
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.credentials.username.$dirty) return errors
      !this.$v.credentials.username.required && errors.push(this.$ml.get('auth.signin.required'))
      !this.$v.credentials.username.email && errors.push(this.$ml.get('auth.signin.email.validEmail'))
      return errors
    },

    passwordErrors () {
      const errors = []
      if (!this.$v.credentials.password.$dirty) return errors
      !this.$v.credentials.password.required && errors.push(this.$ml.get('auth.signin.required'))
      return errors
    },

    ...mapGetters([
      'getSuccessMessage'
    ]),

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
      this.$v.credentials.$touch()
      if (!this.$v.credentials.$invalid) {
        const { username, password, captcharesponse } = this.credentials
        this.$store.dispatch('signin', { username, password, captcharesponse }).then(() => {
          this.$router.push('/')
        }).catch(errorCode => {
          this.onExpired()
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
        this.onExpired()
        this.load = false
        this.error = this.$ml.get('auth.signin.errorRequired')
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
