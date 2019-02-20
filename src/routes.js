import Form from './components/Form.vue'
import Admin from './components/Admin.vue'

const routes = [
    {path: '/', component: Form, name: 'Form'},
    {path: '/admin', component: Admin, name: 'admin'}
]

export default routes