import Image from 'react'
import React from 'react'
import Ufhealth from '@site/static/img/Ufhealth.png'
import IC3Center from '@site/static/img/IC3-center.png'
import styles from './index.module.css'

const Ic3Icon = () => {
  return (
    <div >
      <img src={Ufhealth} height='50' width={`100`} alt="logo" />

      <br />
      <img src={IC3Center} width='450' height='70' />
    </div>
  )
}

export default Ic3Icon