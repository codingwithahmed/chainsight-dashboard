import axios from 'axios'
import config from '../config.json'

export async function register (email, firstName, lastName, password) {
    try {
        let response = await axios({
            method: 'post',
            baseURL: config.base_url,
            url: 'authentication/signup',
            data: {
                email: email,
                first_name: firstName,
                last_name: lastName,
                password: password
            }
        })

        
        console.log('Register')
        console.log(response)
        console.log('-----------')

        return response.data
    } catch (err) {
        console.log('Login')
        console.log(err)
        console.log('-----------')
        return false
    }
}


export async function login (email, password) {
    try {
        let response = await axios({
            method: 'post',
            baseURL: config.base_url,
            url: 'authentication/login',
            data: {
                email: email,
                password: password
            }
        })

        window.localStorage.setItem('access_token', response.data.access_token)
        window.localStorage.setItem('refresh_token', response.data.refresh_token)
        window.localStorage.setItem('is_authenticated', true)

        console.log('Login')
        console.log(response)
        console.log('-----------')

        return response.data
    } catch (err) {
        console.log('Login')
        console.log(err)
        console.log('-----------')
                window.localStorage.setItem('is_authenticated', false)
        return false
    }
}

export async function refreshLogin () {
    try {
        let response = await axios({
            method: 'post',
            baseURL: config.base_url,
            url: 'authentication/refresh_token',
            data: {
                refresh_token: window.localStorage.getItem('refresh_token'),
            }
        })

        window.localStorage.setItem('access_token', response.data.access_token)
        window.localStorage.setItem('refresh_token', response.data.refresh_token)
        window.localStorage.setItem('is_authenticated', true)
        console.log('Refresh Token')
        console.log(response)
        console.log('-----------')

        return true
    } catch (err) {
        console.log('Refresh Token')
        console.log(err)
        console.log('-----------')   
        window.localStorage.setItem('is_authenticated', false)
        return false
    }
}