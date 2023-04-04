import axios from "axios";

export  function getQuestion() {
    return axios.get(`api/getquestions`).then(res => res.data.data)
}