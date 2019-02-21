import Form from './components/Form.vue'
import Admin from './components/Admin.vue'
import GetUser from './components/GetUser.vue'

const routes = [
    {path: '/', component: Form, name: 'Form'},
    {path: '/admin', component: Admin, name: 'admin'},
    {path: '/GetUser',component: GetUser, name: 'GetUser'}
]

export default routes