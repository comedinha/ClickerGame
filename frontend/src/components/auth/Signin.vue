<template>
  <v-card-text>
    <v-alert :value="true" type="success" v-if="forgotten.send">
      {{ $ml.get('signin.forgotten.confirm') }}
    </v-alert>
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-form>
      <v-text-field prepend-icon="email" v-model="credentials.username" :error-messages="emailErrors" :label="$ml.get('signin.email.title')" required @input="$v.credentials.username.$touch()" @blur="$v.credentials.username.$touch()" />
      <v-text-field prepend-icon="lock" v-model="credentials.password" :error-messages="passwordErrors" :label="$ml.get('signin.password.title')" required @input="$v.credentials.password.$touch()" @blur="$v.credentials.password.$touch()" type="password" />
    </v-form>
    <v-card-actions>
      <v-btn small flat color="indigo" @click.native.stop="forgotten.display = !forgotten.display">{{ $ml.get('signin.forgotten.title') }}</v-btn>
      <v-spacer />
      <v-tooltip right close-delay="1000">
        <v-btn slot="activator" color="primary" :loading="load" @click="onSubmit">{{ $ml.get('signin.button') }}</v-btn>
        <spam>
          <vue-recaptcha
            ref="invisibleRecaptcha"
            @verify="onVerify"
            @expired="onExpired"
            size="invisible"
            :sitekey="sitekey"
            badge="inline" />
        </spam>
      </v-tooltip>
    </v-card-actions>
    <br />
    <v-divider />
    <v-btn block color="success" disabled >{{ $ml.get('signin.guest') }}</v-btn>
    <v-dialog v-model="forgotten.display" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ $ml.get('signin.forgotten.text') }}</span>
        </v-card-title>
        <v-alert :value="true" type="info">
          {{ $ml.get('signin.forgotten.description') }}
        </v-alert>
        <v-card-text>
          <v-text-field prepend-icon="email" v-model="forgotten.email" :error-messages="emailForgottenErrors" :label="$ml.get('signin.email.title')" required @input="$v.forgotten.email.$touch()" @blur="$v.forgotten.email.$touch()" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn flat color="primary" @click.native="forgotten.display = false">{{ $ml.get('signin.forgotten.button') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card-text>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import VueRecaptcha from 'vue-recaptcha'

export default {
  data () {
    return {
      sitekey: '6Lfk1FwUAAAAAMcjjT1vE-D9MLIgLaKm4_4BN44W',
      credentials: {
        username: '',
        password: ''
      },
      error: '',
      forgotten: {
        display: false,
        send: false,
        email: ''
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
    },
    forgotten: {
      email: {
        required,
        email
      }
    }
  },
  components: {
    VueRecaptcha
  },
  computed: {
    emailForgottenErrors () {
      const errors = []
      if (!this.$v.forgotten.email.$dirty) return errors
      !this.$v.forgotten.email.required && errors.push(this.$ml.get('signin.required'))
      !this.$v.forgotten.email.email && errors.push(this.$ml.get('signin.email.validEmail'))
      return errors
    },
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
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const { username, password, captcharesponse } = this.credentials
        this.$store.dispatch('authRequest', { username, password, captcharesponse }).then(() => {
          this.$router.push('/')
        })
      } else {
        this.error = this.$ml.get('signin.errorRequired')
      }
    },
    onSubmit () {
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
