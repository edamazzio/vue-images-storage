import qs from 'qs';
import axios from "axios";

const CLIENT_ID = "a7d989b770cf6d5";
const ROOT_URL = "https://api.imgur.com"

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    },
    fetchImages(token) {
        console.log("token", token)
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    uploadImages(images, token) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).catch(e=>{
                console.error(e);
            })
        })
        return Promise.all(promises);
    }
}