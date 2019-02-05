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
            v-model="form.firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
        >
        </v-text-field>
        <v-text-field
            v-model="form.lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
        >
        </v-text-field>
        <v-text-field
            v-model="form.email"
            :rules="emailRules"
            label="E-mail"
            required
        >
        </v-text-field>
        <v-text-field
            v-model="form.job"
            label="Job"
            required
        >
        </v-text-field>
        <v-text-field
            v-model="form.age"
            type='int'
            label="age"
            required
        >
        </v-text-field>
        <v-radio-group v-model="form.gender" :mandatory="false">
        <v-radio label="ชาย" value="ชาย"></v-radio>
        <v-radio label="หญิง" value="หญิง"></v-radio>
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
        >
        
        <p1>ชื่อ : {{form.firstname}} {{form.lastname}}</p1><br>
        <p2>อีเมล์ : {{form.email}}</p2><br>
        <p3>อาชีพ : {{form.job}}</p3><br>
        <p4>อายุ : {{form.age}} เพศ : {{form.gender}}</p4><br>


        </v-card>

        <v-btn
          color="primary"
          @click="addUser"
        >
          SUBMIT
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
        form: {
          firstname: '',
          lastname: '',
          email: '',
          age: '',
          job: '',
          gender: 'ชาย'
        },
        nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
      }
      
    },
    methods: {
        async addUser () {
            // console.log(this.form)
            try {
              const response = await strapi.createEntry('qtuserbios',this.form)
              if (response === 'undefine') {
                throw new Error('User not found')
              }
              alert('Complete')

            } catch (error) {
              alert('Error')
            }
        }
            
    }
  }
</script>