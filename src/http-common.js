import axios from 'axios'

export default axios.create({
    baseURL: 'https://borne-reactjs.herokuapp.com',
    headers : {
        'Content-type' : 'application/json'
    }
})