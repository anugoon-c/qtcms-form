<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">เลือกกิจกรรม</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">ข้อมูลส่วนตัว</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">ส่งข้อมูล</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card align= 'center'
          class="mb-5"
          color="white"
          height="480px"
        >
        <v-flex xs12 sm4 text-xs-center>
        <v-overflow-btn
          :items="eventTitle"
          label="กิจกรรม"
          target="#dropdown-example"
        ></v-overflow-btn>
        </v-flex>
        </v-card>
        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          ถัดไป
        </v-btn>

        <v-btn flat>ย้อนกลับ</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-5"
          color="white"
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
          ถัดไป
        </v-btn>

        <v-btn flat
          @click="e1 = 1"
        >
        ย้อนกลับ</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
        <v-card
          class="mb-5"
          color="white"
          height="480px"
        >
        
        <p>ชื่อ : {{form.firstname}} {{form.lastname}}</p><br>
        <p>อีเมล์ : {{form.email}}</p><br>
        <p>อาชีพ : {{form.job}}</p><br>
        <p>อายุ : {{form.age}} เพศ : {{form.gender}}</p><br>


        </v-card>

        <v-btn
          color="primary"
          @click="addUser"
        >
          ส่งข้อมูล
        </v-btn>

        <v-btn flat
          @click="e1 = 2"
        >
        ย้อนกลับ</v-btn>

      </v-stepper-content>
      
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import Strapi from 'strapi-sdk-javascript'
import Axios from 'axios';
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
        ],
        dropdown_event: ['Arial', 'Calibri', 'Courier', 'Verdana'],
        eventData: '',
        eventTitle: []
      }
      
    },
    methods: {
        async addUser () {
            // console.log(this.form)
            try {
              const response = await strapi.createEntry('qtuserbios',this.form)
              //console.log(this.eventData)
              if (response === 'undefine') {
                throw new Error('User not found')
              }
              alert('Complete')

            } catch (error) {
              alert('Error')
            }
        } 
    },
    mounted () {
        Axios.get('http://139.59.225.10:8084/wp-json/tribe/events/v1/events/')
           .then(response => (this.eventData = response.data.events))
    },
    computed:{
      filteredEvent (){
         this.eventData.slice()
         for(var i = 0; i < this.eventData.length;i++){
           // eslint-disable-next-line
           this.eventTitle.push(this.eventData[i].title)
         }
         return this.eventTitle
      }
    }
  }
</script>