import axios from 'axios'
import { signupy } from '../action/auth';

export default {
user: {
login: credentials =>
axios.post("/api/auth",{credentials})
.then(res =>res.data.user),
signup: user =>
axios.post("/api/auth",{user})
.then(res =>res.data.user)
}

}