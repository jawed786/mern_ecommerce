import axios from 'axios'

const base_URL="http://localhost:5000/api/"

export const publicRequest=axios.create({
    baseURL:base_URL,
})