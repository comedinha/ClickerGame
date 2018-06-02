<template>
  <v-card-text>
    <v-alert :value="true" type="error" v-if="error">
      {{ error }}
    </v-alert>
    <v-form>
      <v-text-field prepend-icon="vpn_key" v-model="credentials.code" :error-messages="codeErrors" :label="$ml.get('email.title')" required @input="$v.credentials.code.$touch()" @blur="$v.credentials.code.$touch()" />
    </v-form>
    <v-card-actions>
      <v-spacer />
      <v-btn slot="activator" color="primary" :loading="load" @click="send">{{ $ml.get('email.button') }}</v-btn>
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
      error: ''
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
      !this.$v.credentials.code.required && errors.push(this.$ml.get('email.required'))
      return errors
    }
  },
  methods: {
    send () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const { code } = this.credentials
        this.$store.dispatch('authRequest', { code }).then(() => {
          this.$router.push('/')
        })
      } else {
        this.error = this.$ml.get('email.errorRequired')
      }
    }
  }
}
</script>
