import React from 'react'
import styles from './styles.module.css';
import Ic3Icon from './ic3-icon'
import RegisterBox from './register-box'



const LoginIn = () => {
    return (
        <div style={{width:'100vw', height:'100vh'}}>
            <div style={{background:'#122b52', height:'21vh', minHeight:'130px'}}>
                <Ic3Icon />
            </div>
            <div className={`${styles.loginWelcome}`}>
                Welcome to IC3 docusaurus system!
            </div>
            <div className={`${styles.loginBoxLine}`}> <RegisterBox /></div>
        </div>
    )
}

export default LoginIn
