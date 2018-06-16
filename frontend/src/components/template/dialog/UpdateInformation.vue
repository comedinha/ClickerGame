<template>
  <v-dialog v-model="informationDialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ $ml.get('template.dialog.updateInformation.title') }}</span>
      </v-card-title>
      <v-alert :value="true" type="error" v-if="error">
        {{ error }}
      </v-alert>
      <v-alert :value="true" type="info">
        {{ $ml.get('template.dialog.updateInformation.description') }}
      </v-alert>
      <v-form>
        <v-card-text>
          <v-text-field prepend-icon="person" v-model="name" :error-messages="nameErrors" :label="$ml.get('template.dialog.updateInformation.name.title')" @input="$v.name.$touch()" @blur="$v.name.$touch()" />
          <v-card-actions>
            <v-text-field prepend-icon="lock" v-model="password" :error-messages="passwordErrors" :label="$ml.get('template.dialog.updateInformation.password.title')" @input="$v.password.$touch()" @blur="$v.password.$touch()" type="password" />
            <v-text-field v-model="confirmPassword" :error-messages="confirmPasswordErrors" :label="$ml.get('template.dialog.updateInformation.confirmPassword.title')" @input="$v.confirmPassword.$touch()" @blur="$v.confirmPassword.$touch()" type="password" />
          </v-card-actions>
        </v-card-text>
      </v-form>
      <v-card-actions>
        <v-spacer />
        <v-text-field v-model="oldPassword" @keyup.enter="send" :error-messages="oldPasswordErrors" :label="$ml.get('template.dialog.updateInformation.oldPassword.title')" required @input="$v.oldPassword.$touch()" @blur="$v.oldPassword.$touch()" type="password" />
        <v-btn flat color="primary" @click.native="send">{{ $ml.get('template.dialog.updateInformation.button') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      name: '',
      oldPassword: '',
      password: '',
      confirmPassword: '',
      error: ''
    }
  },
  validations: {
    name: {
      minLength: minLength(4),
      maxLength: maxLength(16)
    },
    oldPassword: {
      required
    },
    password: {
      minLength: minLength(8)
    },
    confirmPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.minLength && errors.push(this.$ml.with('c', this.$v.name.$params.minLength.min).get('template.dialog.updateInformation.name.minLength'))
      !this.$v.name.maxLength && errors.push(this.$ml.with('c', this.$v.name.$params.maxLength.max).get('template.dialog.updateInformation.name.maxLength'))
      return errors
    },

    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push(this.$ml.with('c', this.$v.password.$params.minLength.min).get('template.dialog.updateInformation.password.errorLimit'))
      return errors
    },

    confirmPasswordErrors () {
      const errors = []
      if (!this.$v.confirmPassword.$dirty) return errors
      !this.$v.confirmPassword.sameAsPassword && errors.push(this.$ml.get('template.dialog.updateInformation.confirmPassword.errorIdentical'))
      return errors
    },

    oldPasswordErrors () {
      const errors = []
      if (!this.$v.oldPassword.$dirty) return errors
      !this.$v.oldPassword.required && errors.push(this.$ml.get('template.dialog.updateInformation.required'))
      return errors
    },

    informationDialog: {
      get () {
        return this.$store.getters.getInformationDialog
      },
      set (value) {
        this.$store.dispatch('setInformationDialog', value)
      }
    }
  },
  methods: {
    send () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log('Falta fazer')
      } else {
        this.error = this.$ml.get('template.dialog.updateInformation.errorRequired')
      }
    }
  }
}
</script>
