<template>
  <v-card-text>
    <Recovery :forgotten="forgotten" @updateRecovery="forgotten = $event" />
    <v-alert :value="true" type="success" v-if="forgotten.alert">
      {{ $ml.get('signin.forgotten.confirm') }}
    </v-alert>
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-form>
      <v-text-field prepend-icon="email" v-model="credentials.username" @keyup.enter="onSubmit" :error-messages="emailErrors" :label="$ml.get('signin.email.title')" required @input="$v.credentials.username.$touch()" @blur="$v.credentials.username.$touch()" />
      <v-text-field prepend-icon="lock" v-model="credentials.password" @keyup.enter="onSubmit" :error-messages="passwordErrors" :label="$ml.get('signin.password.title')" required @input="$v.credentials.password.$touch()" @blur="$v.credentials.password.$touch()" type="password" />
    </v-form>
    <v-card-actions>
      <v-btn small flat color="indigo" @click.native.stop="forgotten.display = !forgotten.display">{{ $ml.get('signin.forgotten.title') }}</v-btn>
      <v-spacer />
      <v-tooltip right close-delay="1000">
        <v-btn slot="activator" color="primary" :loading="load" @click="onSubmit">{{ $ml.get('signin.button') }}</v-btn>
        <vue-recaptcha ref="invisibleRecaptcha" @verify="onVerify" @expired="onExpired" size="invisible" :sitekey="sitekey" badge="inline" />
      </v-tooltip>
    </v-card-actions>
    <br />
    <v-divider />
    <v-btn block color="success" disabled >{{ $ml.get('signin.guest') }}</v-btn>
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
      forgotten: {
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
      !this.$v.credentials.username.required && errors.push(this.$ml.get('signin.required'))
      !this.$v.credentials.username.email && errors.push(this.$ml.get('signin.email.validEmail'))
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.credentials.password.$dirty) return errors
      !this.$v.credentials.password.required && errors.push(this.$ml.get('signin.required'))
      return errors
    }
  },
  methods: {
    send () {
      this.$v.credentials.$touch()
      if (!this.$v.credentials.$invalid) {
        const { username, password, captcharesponse } = this.credentials
        this.$store.dispatch('authRequest', { username, password, captcharesponse }).then(() => {
          this.$router.push('/')
        })
      } else {
        this.load = false
        this.error = this.$ml.get('signin.errorRequired')
      }
    },
    onSubmit () {
      this.load = true
      this.$refs.invisibleRecaptcha.execute()
    },
    onVerify (response) {
      this.credentials.captcharesponse = response
      this.send()
    },
    onExpired () {
      this.$refs.invisibleRecaptcha.reset()
    }
  }
}
</script>
