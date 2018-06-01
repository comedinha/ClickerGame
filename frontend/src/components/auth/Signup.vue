<template>
  <v-card-text>
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-form>
      <v-text-field prepend-icon="person" v-model="credentials.name" :error-messages="nameErrors" :label="$ml.get('signup.name.title')" required @input="$v.credentials.name.$touch()" @blur="$v.credentials.name.$touch()" />
      <v-text-field prepend-icon="email" v-model="credentials.username" :error-messages="emailErrors" :label="$ml.get('signup.username.title')" required @input="$v.credentials.username.$touch()" @blur="$v.credentials.username.$touch()" />
      <v-card-actions>
        <v-text-field prepend-icon="lock" v-model="credentials.password" :error-messages="passwordErrors" :label="$ml.get('signup.password.title')" required @input="$v.credentials.password.$touch()" @blur="$v.credentials.password.$touch()" type="password" />
        <v-text-field v-model="credentials.confirmPassword" :error-messages="confirmPasswordErrors" :label="$ml.get('signup.confirmPassword.title')" required @input="$v.credentials.confirmPassword.$touch()" @blur="$v.credentials.confirmPassword.$touch()" type="password" />
      </v-card-actions>
    </v-form>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="submit()" v-text="$ml.get('signup.button')" />
    </v-card-actions>
  </v-card-text>
</template>

<script>
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      credentials: {
        username: '',
        name: '',
        password: '',
        confirmPassword: ''
      },
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
        minLength: minLength(4)
      },
      password: {
        required,
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.credentials.username.$dirty) return errors
      !this.$v.credentials.username.required && errors.push(this.$ml.get('signup.required'))
      !this.$v.credentials.username.email && errors.push(this.$ml.get('signup.username.validEmail'))
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.credentials.name.$dirty) return errors
      !this.$v.credentials.name.required && errors.push(this.$ml.get('signup.required'))
      !this.$v.credentials.name.minLength && errors.push(this.$ml.with('c', this.$v.credentials.name.$params.minLength.min).get('signup.name.errorLimit'))
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.credentials.password.$dirty) return errors
      !this.$v.credentials.password.required && errors.push(this.$ml.get('signup.required'))
      !this.$v.credentials.password.minLength && errors.push(this.$ml.with('c', this.$v.credentials.password.$params.minLength.min).get('signup.password.errorLimit'))
      return errors
    },
    confirmPasswordErrors () {
      const errors = []
      if (!this.$v.credentials.confirmPassword.$dirty) return errors
      !this.$v.credentials.confirmPassword.sameAsPassword && errors.push(this.$ml.get('signup.confirmPassword.errorIdentical'))
      return errors
    }
  },
  methods: {
    submit () {
      if (!this.$v.$invalid) {
        const { username, name, password } = this.credentials
        this.$store.dispatch('authCreate', { username, name, password }).then(() => {
          this.$router.push('Signin')
        })
      } else {
        this.error = this.$ml.get('signup.errorRequired')
      }
    }
  }
}
</script>
