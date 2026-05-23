import api from "../AxiosInstance/AxiosInstance"

//add a requist interceptors
api.interceptors.request.use(
    function(config) {
        //do some thing before request
        return config;
    },
    function(error){
        //do something with request error 
        return Promise.reject(error)
    }
);

//add a response interceptors

api.interceptors.response.use(
    function(response){
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function(error){
        // Any status codes that falls outside the range of 2xx cause this function to trigger
         // Do something with response error
         return Promise.reject(error)
    }
)

export default api