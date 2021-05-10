import axios from "axios";

const base_url = "http://127.0.0.1:8000/api/v1/"

export const authService = {
    loginUser(data) {
        return axios.post(base_url + "token/login", data)
    }
}