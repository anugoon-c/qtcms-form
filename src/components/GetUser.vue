<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 d-flex>
        <v-select
          v-model="search"
          :items="tmp"
          label="ค้นหากิจกรรม"
        ></v-select>
      </v-flex>
    </v-card-title>
  <v-data-table
    :headers="headers"
    :items="form"
    :search="search"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.id }}</td>
      <td class="text-xs-left">{{ props.item.firstname }}</td>
      <td class="text-xs-left">{{ props.item.lastname }}</td>
      <td class="text-xs-left">{{ props.item.email }}</td>
      <td class="text-xs-left">{{ props.item.age }}</td>
      <td class="text-xs-left">{{ props.item.gender }}</td>
      <td class="text-xs-left">{{ props.item.job }}</td>
      <td class="text-xs-left">{{ props.item.eventName }}</td>
    </template>
    <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
    </v-alert>
  </v-data-table>
  </v-card>
</template>

<script>
import Strapi from 'strapi-sdk-javascript'
const strapi = new Strapi('http://139.59.225.10:1337')

  export default {
    data () {
      return {
        search: '',
        tmp:[],
        headers: [
          {
            text: 'ID',
            align: 'center',
            sortable: false,
            value: 'id'
          },
          { text: 'ชื่อ', value: 'firstname' },
          { text: 'นามสกุล', value: 'lastname' },
          { text: 'Email', value: 'email' },
          { text: 'อายุ', value: 'age' },
          { text: 'เพศ', value: 'gender' },
          { text: 'อาชีพ', value: 'job' },
          { text: 'Event', value: 'eventName' }
        ],
        form: [{
          firstname: '',
          lastname: '',
          email: '',
          age: '',
          job: '',
          gender: '',
          eventName: ''
        }]
      }
  },
  methods: {
    async getUser () {
      const usertable = await strapi.getEntries('qtuserbios')
      this.form = usertable.slice()
         for(var i = 0; i < usertable.length;i++){
           // eslint-disable-next-line
           this.tmp.push(usertable[i].eventName)
         }
    }

  },
  mounted () {
      this.getUser()
  }
  }
</script>