<template>
  <v-card-text>
    <Recovery :recovery="recovery" @updateRecovery="recovery = $event" />
    <v-alert :value="true" type="success" v-if="recovery.alert">
      {{ $ml.get('auth.dialog.recovery.confirm') }}
    </v-alert>
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-form>
      <v-text-field prepend-icon="email" v-model="credentials.username" @keyup.enter="onSubmit" :error-messages="emailErrors" :label="$ml.get('auth.signin.email.title')" required @input="$v.credentials.username.$touch()" @blur="$v.credentials.username.$touch()" />
      <v-text-field prepend-icon="lock" v-model="credentials.password" @keyup.enter="onSubmit" :error-messages="passwordErrors" :label="$ml.get('auth.signin.password.title')" required @input="$v.credentials.password.$touch()" @blur="$v.credentials.password.$touch()" type="password" />
    </v-form>
    <v-card-actions>
      <v-btn small flat color="indigo" @click.native.stop="recovery.display = !recovery.display">{{ $ml.get('auth.signin.recovery') }}</v-btn>
      <v-spacer />
      <v-tooltip right close-delay="500">
        <v-btn slot="activator" color="primary" :loading="load" @click="onSubmit">{{ $ml.get('auth.signin.button') }}</v-btn>
        <vue-recaptcha ref="invisibleRecaptcha" @verify="onVerify" @expired="onExpired" size="invisible" :sitekey="sitekey" badge="inline" />
      </v-tooltip>
    </v-card-actions>
    <br />
    <v-divider />
    <v-btn block color="success" disabled >{{ $ml.get('auth.signin.guest') }}</v-btn>
  </v-card-text>
</template>

<script>
import Recovery from '@/components/auth/dialog/Recovery'

import { required, email } from 'vuelidate/lib/validators'
import VueRecaptcha from 'vue-recaptcha'

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
      },
      recovery: {
        display: false,
        alert: false
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
    Recovery
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
