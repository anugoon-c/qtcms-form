<template>
  <v-data-table
    :headers="headers"
    :items="form"
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
    </template>
  </v-data-table>
</template>

<script>
import Strapi from 'strapi-sdk-javascript'
const strapi = new Strapi('http://139.59.225.10:1337')

  export default {
    data () {
      return {
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
          { text: 'อาชีพ', value: 'job' }
        ],
        form: [{
          firstname: '',
          lastname: '',
          email: '',
          age: '',
          job: '',
          gender: ''
        }]
      }
  },
  methods: {
    async getUser () {
      const usertable = await strapi.getEntries('qtuserbios')
      this.form = usertable.slice()

    }
  },
  mounted () {
      this.getUser()
  }
  }
</script>