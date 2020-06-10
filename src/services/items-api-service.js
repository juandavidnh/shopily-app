import config from '../config'
import TokenService from './token-service'

const ItemsApiService = {
    getItems() {
        return fetch(`${config.API_ENDPOINT}/item-list`, {
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

export default ItemsApiService