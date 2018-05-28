<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2 v-text="$ml.get('signup.title')" />
    <p v-text="$ml.get('signup.description')" />
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.credentials.username.$error }">
      <label class="form__label" v-text="$ml.get('signup.username.title')"/>
      <input class="form__input" v-model.trim="$v.credentials.username.$model" />
    </div>
    <div class="error" v-if="!$v.credentials.username.required" v-text="$ml.get('signup.required')"/>
    <div class="error" v-if="!$v.credentials.username.minLength" v-text="$ml.with('c', $v.credentials.username.$params.minLength.min).get('signup.username.errorLimit')" />

    <div class="form-group" :class="{ 'form-group--error': $v.credentials.email.$error }">
      <label class="form__label" v-text="$ml.get('signup.email.title')"/>
      <input class="form__input" v-model.trim="$v.credentials.email.$model" />
    </div>
    <div class="error" v-if="!$v.credentials.email.required" v-text="$ml.get('signup.required')"/>
    <div class="error" v-if="!$v.credentials.email.email" v-text="$ml.get('signup.email.validEmail')"/>

    <div class="form-group" :class="{ 'form-group--error': $v.credentials.password.$error }">
      <label class="form__label" v-text="$ml.get('signup.password.title')"/>
      <input class="form__input" v-model.trim="$v.credentials.password.$model" type="password"/>
    </div>
    <div class="error" v-if="!$v.credentials.password.required" v-text="$ml.get('signup.required')"/>
    <div class="error" v-if="!$v.credentials.password.minLength" v-text="$ml.with('c', $v.credentials.password.$params.minLength.min).get('signup.password.errorLimit')" />
    <div class="form-group" :class="{ 'form-group--error': $v.credentials.confirmPassword.$error }">
      <label class="form__label" v-text="$ml.get('signup.confirmPassword.title')"/>
      <input class="form__input" v-model.trim="$v.credentials.confirmPassword.$model" type="password"/>
    </div>
    <div class="error" v-if="!$v.credentials.confirmPassword.sameAsPassword" v-text="$ml.get('signup.confirmPassword.errorIdentical')"/>
    <button class="btn btn-primary" @click="submit()" v-text="$ml.get('signup.button')" />
  </div>
</template>

<script>
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      credentials: {
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
      },
      error: ''
    }
  },
  validations: {
    credentials: {
      username: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
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
  methods: {
    submit () {
      if (!this.$v.$invalid) {
        const { username, password, email } = this.credentials
        this.$store.dispatch('authCreate', { username, password, email }).then(() => {
          this.$router.push('/Signin')
        })
      } else {
        this.error = this.$ml.get('signup.errorRequired')
      }
    }
  }
}
</script>
