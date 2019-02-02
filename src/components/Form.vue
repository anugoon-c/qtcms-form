<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Name of step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="480px"
        >
        
        </v-card>
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="480px"
        >
        <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
        >
        </v-text-field>
        <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
        >
        </v-text-field>
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
        >
        </v-text-field>
        <v-text-field
            v-model="job"
            label="Job"
            required
        >
        </v-text-field>
        <v-radio-group v-model="radios" :mandatory="false">
        <v-radio label="Radio 1" value="radio-1"></v-radio>
        <v-radio label="Radio 2" value="radio-2"></v-radio>
        </v-radio-group>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="grey lighten-1"
          height="480px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>

        <v-btn flat>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Strapi from 'strapi-sdk-javascript'
const strapi = new Strapi('http://139.59.225.10:1337')

  export default {
    data () {
      return {
        e1: 0,
        firstname: '',
        lastname: '',
        email: '',
        job: '',
        nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        radios: 'radio-1'
      }
      
    }
    methods: {
        async addUser () {
            const response = await strapi.createEntry('qtuserbio',name)
        }
    }
  }
</script>