<template>
  <v-card-text>
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-form>
        <v-text-field prepend-icon="lock" v-model="credentials.password" @keyup.enter="onSubmit" :error-messages="passwordErrors" :label="$ml.get('auth.signup.password.title')" required @input="$v.credentials.password.$touch()" @blur="$v.credentials.password.$touch()" type="password" />
        <v-text-field v-model="credentials.confirmPassword" @keyup.enter="onSubmit" :error-messages="confirmPasswordErrors" :label="$ml.get('auth.signup.confirmPassword.title')" required @input="$v.credentials.confirmPassword.$touch()" @blur="$v.credentials.confirmPassword.$touch()" type="password" />
    </v-form>
    <v-card-actions>
      <v-spacer />
      <v-btn slot="activator" color="primary" :loading="load" @click="send">{{ $ml.get('auth.email.button') }}</v-btn>
    </v-card-actions>
  </v-card-text>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      credentials: {
        username: this.$route.params.email,
        token: this.$route.params.token,
        password: '',
        confirmPassword: ''
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
        const { username, token, password, confirmPassword } = this.credentials
        this.$store.dispatch('authPasswordReset', { username, token, password, confirmPassword }).then(() => {
          this.$router.push('/')
        })
      } else {
        this.error = this.$ml.get('auth.email.errorRequired')
      }
    }
  }
}
</script>
