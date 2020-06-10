import config from '../config'
import TokenService from './token-service'

const UserApiService = {
    getOwnUser() {
        return fetch(`${config.API_ENDPOINT}/users/own`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default UserApiService