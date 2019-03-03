<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="form.email"
      :rules="form.emailRules"
      label="E-mail"
      required
    ></v-text-field>
  
    <v-text-field
      v-model="form.password"
      :counter="10"
      :rules="form.passwordRules"
      label="Name"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      @click="validate"
    >
     Login
    </v-btn>

    <v-btn
      color="error"
      @click="reset"
    >
      Reset Form
    </v-btn>
  </v-form>
</template>

<script>
import Strapi from 'strapi-sdk-javascript'
const strapi = new Strapi('http://139.59.225.10:1337')

  export default {
    data: () => ({
      valid: true,
      form: {
        password: '',
        passwordRules: [
          v => !!v || 'Name is required',
          v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
      }
    }),
    methods: {
      async validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
        try {
              const response = await strapi.login(this.form.email, this.form.password)
              //console.log(this.eventData)
              if (response === 'undefine') {
                throw new Error('User not found')
              }
              this.$router.push('/GetUser')

            } catch (error) {
              alert('Error')
            }
      },
      reset () {
        this.$refs.form.reset()
      }
    }
  }
</script>