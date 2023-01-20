import React from 'react'
import ExcelHandleTable2 from './excel-3'
import data from './menu-json.json'

const Excel = () => {


  return (
    <div>
      <ExcelHandleTable2 table = {data}/>
    </div>
  )
}

export default Excel
