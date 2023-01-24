import React from 'react'
import ExcelHandleTable2 from './excel-table-category'
// import data from './menu-json.json'
import data from './menu-json.json'

const Excel = () => {


  return (
    <div>
      <ExcelHandleTable2 table = {data}/>
    </div>
  )
}

export default Excel;
