<template>
  <div></div>
</template>

<script>
// import notificationService from '../../services/notificationService'
// import auth from '../../services/auth'
export default {
  route: {
    activate (transition) {
      return this.logout().then(function () {
        // auth.remove()
        // notificationService.show(notificationService.USER_LOGGED_OUT)
        transition.redirect('/Login')
      }).catch(function (res) {
        if (res.status === 500) {
          // notificationService.show(notificationService.CONNECTION_ERROR)
        }
        transition.redirect(transition.from.path)
      })
    }
  }
}
</script>
