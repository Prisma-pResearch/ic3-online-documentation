import React from 'react'
import Excel from '../../components/files-excel/excel'
import datas from './meta_IDEALIST'

const ExcelPage = () => {
  return (
    <div>
      <Excel datas={datas} />
    </div>
  )
}

export default ExcelPage
