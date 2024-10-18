import api from "./axios";

const passwordApi = {
    request: (data) => {
        return api.post('/password/request', data)
    },
    reset: (data) => {
        return api.post('/password/reset', data)
    },
}

export default passwordApi