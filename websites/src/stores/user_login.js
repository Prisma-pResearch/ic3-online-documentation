import React from "react"

import { makeAutoObservable } from 'mobx'
import { http, getToken, setToken, clearToken } from '../utils/index'

const qs = require('qs');


class LoginStore {
    token = getToken() || ''
    constructor() {
        makeAutoObservable(this)

    }
    getToken = async ({ username, password }) => {
        // console.log('token', username, password)
        const res = await http.post('http://127.0.0.1:50000/user/login',
            qs.stringify({ username, password }),
            {
                params: {
                    ID: 12345
                },
            }
            // {username, password}
        )

        // use token to store in memory
        this.token = res.data.token
        console.log('token is ', res.data.token)
        // console.log(res)

        //store in loginStore
        setToken(this.token)

    }
    loginOut = ()=>{
        this.token = ''
        clearToken()
    }
}

export default LoginStore