import axios from 'axios'

export default axios.create({
    baseURL: 'http://borne-reactjs.herokuapp.com',
    headers : {
        'Content-type' : 'application/json'
    }
})