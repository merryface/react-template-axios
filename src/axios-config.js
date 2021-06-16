import axios from "axios";

// Youtube
export default axios.create({
    baseURL: "url",
    headers: {
        Accept: "application/json",
        key: "API_KEY_HERE"
    }
})