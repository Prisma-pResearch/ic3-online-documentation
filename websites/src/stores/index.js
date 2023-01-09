import React from "react"
import LoginStore from "./user_login"
import UserInfoStore from "./user_info"

class RootStore{
    constructor(){
        this.loginStore = new LoginStore()
        this.userInfoStore = new UserInfoStore()
    }
}


const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = ()=> React.useContext(context)

export {useStore}