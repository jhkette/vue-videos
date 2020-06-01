import qs from 'qs'
import{ CLIENT_ID, ROOT_URL } from '../config/config'



export default {
    login(){
        const querystring ={
            client_id: CLIENT_ID,
            response_type: 'token'
        }

       window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    }
}