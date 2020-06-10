import config from '../config'
import TokenService from './token-service'

const ShoppingListApiService = {
    getItems(userId) {
        return fetch(`${config.API_ENDPOINT}/shopping-list/${userId}`, {
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
    },

    addItem(userId, itemId) {
        return fetch(`${config.API_ENDPOINT}/shopping-list/${userId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                item_id: itemId
            })
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },

    updateStatus(userId, itemId, status) {
        return fetch(`${config.API_ENDPOINT}/shopping-list/${userId}/${itemId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                status
            })
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },

    deleteItem(userId, itemId) {
        return fetch(`${config.API_ENDPOINT}/shopping-list/${userId}/${itemId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default ShoppingListApiService