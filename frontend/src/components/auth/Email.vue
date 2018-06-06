<template>
  <v-card-text>
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-form>
      <v-text-field prepend-icon="vpn_key" v-model="credentials.code" :error-messages="codeErrors" :label="$ml.get('auth.email.title')" required @input="$v.credentials.code.$touch()" @blur="$v.credentials.code.$touch()" />
    </v-form>
    <v-card-actions>
      <v-spacer />
      <v-btn slot="activator" color="primary" :loading="load" @click="send">{{ $ml.get('auth.email.button') }}</v-btn>
    </v-card-actions>
  </v-card-text>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      credentials: {
        code: ''
      },
      error: '',
      load: false
    }
  },
  validations: {
    credentials: {
      code: {
        required
      }
    }
  },
  computed: {
    codeErrors () {
      const errors = []
      if (!this.$v.credentials.code.$dirty) return errors
      !this.$v.credentials.code.required && errors.push(this.$ml.get('auth.email.required'))
      return errors
    }
  },
  methods: {
    send () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.load = true
      } else {
        this.error = this.$ml.get('auth.email.errorRequired')
      }
    }
  }
}
</script>
