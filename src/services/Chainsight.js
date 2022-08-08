import axios from 'axios'
import config from '../config.json'
import { refreshLogin } from './Authentication'

export async function getRequest(url, params) {
    try {
        let response = await axios({
            method: 'get',
            baseURL: config.base_url,
            url: url,
            params: params,
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('access_token')
            }
        })

        return response.data
    } catch (err) {

        let refreshStatus = await refreshLogin()

        if (refreshStatus !== false) {

            try {
                let response = await axios({
                    method: 'get',
                    baseURL: config.base_url,
                    url: url,
                    params: params,
                    headers: {
                        'Authorization': 'Bearer ' + window.localStorage.getItem('access_token')
                    }
                })
        
                return response.data
            } catch (err) {
                console.log(err)

                if (err.status === 400) {
                    window.localStorage.setItem('is_authenticated', false)
                    window.localStorage.setItem('access_token', '')
                    window.localStorage.setItem('refresh_token', '')
                    window.location.reload()
                }
                return false
            }
        }
        
    }
}


export async function postRequest(url, data) {
    try {
        let response = await axios({
            method: 'post',
            baseURL: config.base_url,
            url: url,
            data: data,
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('access_token')
            }
        })

        return response.data
    } catch (err) {
        
        let refreshStatus = await refreshLogin()

        if (refreshStatus !== false) {

            try {
                let response = await axios({
                    method: 'get',
                    baseURL: config.base_url,
                    url: url,
                    data: data,
                    headers: {
                        'Authorization': 'Bearer ' + window.localStorage.getItem('access_token')
                    }
                })
        
                return response.data
            } catch (err) {
                console.log(err)

                if (err.status === 400) {
                    window.localStorage.setItem('is_authenticated', false)
                    window.localStorage.setItem('access_token', '')
                    window.localStorage.setItem('refresh_token', '')
                    window.location.reload()
                }
                
                return false
            }
        }
        
    }
}