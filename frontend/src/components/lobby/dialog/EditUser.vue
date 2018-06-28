<template>
  <v-dialog v-model="editUserDialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ $ml.get('lobby.dialog.editUser.title') }}</span>
      </v-card-title>
      <v-alert :value="true" type="error" v-if="error">
        {{ error }}
      </v-alert>
      <v-form>
        <v-card-text>
          <v-text-field prepend-icon="person" v-model="editUserInfo.name" :error-messages="nameErrors" :label="$ml.get('lobby.dialog.editUser.name.title')" required @input="$v.editUserInfo.name.$touch()" @blur="$v.editUserInfo.name.$touch()" />
          <v-text-field prepend-icon="email" v-model="editUserInfo.email" :error-messages="emailErrors" :label="$ml.get('lobby.dialog.editUser.email.title')" required @input="$v.editUserInfo.email.$touch()" @blur="$v.editUserInfo.email.$touch()" />
          <v-card-actions>
            <v-select :items="roles" item-text="text" item-value="id" v-model="editUserInfo.role" overflow label="Select" />
            <v-checkbox label="Enabled" v-model="editUserInfo.enabled" />
          </v-card-actions>
          <v-card-actions>
            <v-text-field prepend-icon="lock" v-model="password" :error-messages="passwordErrors" :label="$ml.get('lobby.dialog.editUser.password.title')" @input="$v.password.$touch()" @blur="$v.password.$touch()" type="password" />
            <v-text-field v-model="confirmPassword" :error-messages="confirmPasswordErrors" :label="$ml.get('lobby.dialog.editUser.confirmPassword.title')" @input="$v.confirmPassword.$touch()" @blur="$v.confirmPassword.$touch()" type="password" />
          </v-card-actions>
        </v-card-text>
      </v-form>
      <v-card-actions>
        <v-spacer />
        <v-btn flat @click="editUserDialog = !editUserDialog">{{ $ml.get('lobby.dialog.editUser.cancel') }}</v-btn>
        <v-btn flat color="primary" :loading="load" @click.native="send">{{ $ml.get('lobby.dialog.editUser.button') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      roles: [
        {
          id: 'ROLE_ADMIN',
          text: this.$ml.get('game.ROLE_ADMIN')
        },
        {
          id: 'ROLE_USER',
          text: this.$ml.get('game.ROLE_USER')
        },
        {
          id: 'ANONYMOUS',
          text: this.$ml.get('game.ANONYMOUS')
        }
      ],
      password: '',
      confirmPassword: '',
      error: '',
      load: false
    }
  },
  validations: {
    editUserInfo: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(16)
      },
      email: {
        required,
        email
      }
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
      if (!this.$v.editUserInfo.name.$dirty) return errors
      !this.$v.editUserInfo.name.required && errors.push(this.$ml.get('lobby.dialog.editUser.required'))
      !this.$v.editUserInfo.name.minLength && errors.push(this.$ml.with('c', this.$v.editUserInfo.name.$params.minLength.min).get('lobby.dialog.editUser.mame.minLength'))
      !this.$v.editUserInfo.name.maxLength && errors.push(this.$ml.with('c', this.$v.editUserInfo.name.$params.maxLength.max).get('lobby.dialog.editUser.name.maxLength'))
      return errors
    },

    emailErrors () {
      const errors = []
      if (!this.$v.editUserInfo.email.$dirty) return errors
      !this.$v.editUserInfo.email.required && errors.push(this.$ml.get('lobby.dialog.editUser.required'))
      !this.$v.editUserInfo.email.email && errors.push(this.$ml.get('lobby.dialog.editUser.email.email'))
      return errors
    },

    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push(this.$ml.with('c', this.$v.password.$params.minLength.min).get('lobby.dialog.editUser.password.errorLimit'))
      return errors
    },

    confirmPasswordErrors () {
      const errors = []
      if (!this.$v.confirmPassword.$dirty) return errors
      !this.$v.confirmPassword.sameAsPassword && errors.push(this.$ml.get('lobby.dialog.editUser.confirmPassword.errorIdentical'))
      return errors
    },

    editUserInfo: {
      get () {
        return this.$store.getters.getEditUserInfo
      },
      set (value) {
        this.$store.dispatch('setEditUserInfo', value)
      }
    },

    editUserDialog: {
      get () {
        return this.$store.getters.getEditUserDialog
      },
      set (value) {
        this.$store.dispatch('setEditUserDialog', value)
      }
    }
  },
  methods: {
    send () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.load = true
        const {id, name, email, role, enable} = this.editUserInfo
        const { password, confirmPassword } = this
        this.$store.dispatch('setUpdateUser', { id, name, email, role, enable, password, confirmPassword }).then(() => {
          this.informationDialog = false
        }).catch(errorCode => {
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
        this.error = this.$ml.get('lobby.dialog.editUser.errorRequired')
      }
    }
  }
}
</script>
