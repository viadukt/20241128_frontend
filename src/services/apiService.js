import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const apiService = {
    getEvents() {
        return axios.get(`${API_URL}/getEvents`)
    },
    putEvent(id, requestBody) {
        return axios.put(`${API_URL}/putEvent/${id}`, requestBody, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    getBooking(id) {
        return axios.get(`${API_URL}/getBooking/${id}`)
    },
    postBooking(requestBody){
        return axios.post(`${API_URL}/postBooking`, requestBody, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};